/**
 * =============================================================================
 * solar-fins-visualizer.js
 * -----------------------------------------------------------------------------
 * LOTE 4 (integración final) — Visualizador paramétrico 2D del disipador de
 * aletas: corte transversal esquemático y A ESCALA, en SVG inline (sin
 * canvas, sin librerías externas).
 *
 * Continúa LOTE 1 (solar-fin-heatsink-state.js: estado + geometría), LOTE 2
 * (solar-fins-controls.*: sliders) y LOTE 3 (solar-fins-validation.js +
 * solar-fins-status-ui.js: warnings/espacio remanente). Este archivo NO
 * recalcula validación ni espacio remanente — los recibe ya resueltos como
 * `evaluation` (el objeto que devuelve `evaluateFinWarnings` del LOTE 3) y
 * sólo los traduce a geometría de dibujo.
 *
 * Separación deliberada en dos partes, igual que en el LOTE 3:
 *   - `computeFinVisualizerLayout(state, evaluation)` — PURA, sin DOM. Toma
 *     el estado físico (L_base, N, t, L_aleta) y la evaluación de warnings
 *     y devuelve únicamente NÚMEROS de layout (posiciones en px del
 *     viewBox). Testeable en Node sin jsdom.
 *   - `createFinVisualizerRenderer(options)` — construye/actualiza el <svg>
 *     dentro de un contenedor DOM a partir de ese layout. Sólo se necesita
 *     en el navegador (o jsdom).
 *
 * Por qué SVG y no <canvas>:
 *   - Es un dibujo ESQUEMÁTICO de bajo número de elementos (<= 50 aletas +
 *     un puñado de cotas/flechas), no una animación de alta frecuencia — no
 *     hay presión de rendimiento que justifique canvas+rAF aquí (a
 *     diferencia de otros laboratorios pesados del sitio, ver
 *     LOTE_getClampedDelta_paso_tiempo_controlado_60fps.md).
 *   - Escala de forma nativa y nítida a cualquier tamaño de contenedor vía
 *     `viewBox` + `preserveAspectRatio`, sin lidiar con devicePixelRatio
 *     (evita la clase de bug ya documentada y corregida para otros
 *     laboratorios en LOTE_watt_sim_fix_nitidez_dpr_canvas_fullscreen.md /
 *     LOTE_herschel_sim_fix_deformacion_nitidez_dpr_canvas_fullscreen.md —
 *     con SVG ese problema no existe por construcción).
 *   - Las cotas/etiquetas de texto son elementos DOM reales (accesibles,
 *     seleccionables, con aria-label), no píxeles pintados a mano.
 *
 * Actualización: el redibujado completo (`render(state, evaluation)`) ya
 * llega coalescido a máx. 1×frame porque quien lo invoca (LOTE de
 * ensamblaje, solar-fins-panel.js) lo hace desde el mismo `onChange`
 * coalescido por rAF del LOTE 2 — este archivo no añade su propio
 * throttling, reutiliza el que ya existe en vez de duplicarlo.
 * =============================================================================
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SolarFinVisualizer = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function resolveGlobalObject() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    if (typeof global !== 'undefined') return global;
    return null;
  }

  // ===========================================================================
  // Geometría del lienzo (viewBox fijo — la escala real a cualquier tamaño de
  // contenedor la resuelve el CSS/SVG, no JS; ver solar-fins-visualizer.css).
  // ===========================================================================
  var VIEW_W = 560;
  var VIEW_H = 320;
  var MARGIN = { top: 40, right: 26, bottom: 96, left: 26 };
  var MIN_FIN_PX = 1.6; // ancho mínimo dibujado de una aleta, para que t muy
                          // pequeño frente a L_base siga siendo visible/clicable
                          // (la etiqueta numérica siempre muestra el t real).
  var MAX_DECORATED_GAPS = 20; // por encima de este N de huecos, se muestran
                                 // guías/flechas de aire sólo cada `tickStride`
                                 // huecos (evita saturar el SVG con N<=50).

  // ===========================================================================
  // Paleta de material por conductividad térmica k [W/(m·K)]
  // -----------------------------------------------------------------------------
  // Interpolación lineal por tramos entre los 3 presets exactos que ya ofrece
  // el LOTE 2 (Acero=15, Aluminio=205, Cobre=398) — así CUALQUIER valor de k
  // en el rango del slider (15-400) obtiene un color de material coherente,
  // no sólo los 3 presets. Deliberadamente NO reactivo a light/dark theme:
  // son colores "de material real" (acero/aluminio/cobre), igual que una
  // fotografía no cambia de paleta con el tema del sitio.
  // ===========================================================================
  var MATERIAL_STOPS = [
    { k: 15, rgb: [140, 148, 163], name: { es: 'Acero', en: 'Steel' } },
    { k: 205, rgb: [201, 207, 212], name: { es: 'Aluminio', en: 'Aluminum' } },
    { k: 398, rgb: [201, 106, 62], name: { es: 'Cobre', en: 'Copper' } }
  ];

  /**
   * @param {number} k Conductividad térmica [W/(m·K)].
   * @returns {{rgb:[number,number,number], hex:string, nearestName:{es:string,en:string}, isExactPreset:boolean}}
   */
  function materialColorForK(k) {
    var lo = MATERIAL_STOPS[0];
    var hi = MATERIAL_STOPS[MATERIAL_STOPS.length - 1];
    var kk = isFinite(k) ? k : lo.k;
    kk = Math.max(lo.k, Math.min(hi.k, kk));

    var seg0 = MATERIAL_STOPS[0], seg1 = MATERIAL_STOPS[1], seg2 = MATERIAL_STOPS[2];
    var a, b;
    if (kk <= seg1.k) { a = seg0; b = seg1; } else { a = seg1; b = seg2; }
    var t = (b.k === a.k) ? 0 : (kk - a.k) / (b.k - a.k);
    var rgb = [0, 1, 2].map(function (i) {
      return Math.round(a.rgb[i] + (b.rgb[i] - a.rgb[i]) * t);
    });

    // Preset más cercano (para la etiqueta de material), y si coincide de
    // forma prácticamente exacta con uno de los 3 valores pedidos por el
    // usuario en LOTE 2.
    var nearest = MATERIAL_STOPS.reduce(function (best, stop) {
      return Math.abs(kk - stop.k) < Math.abs(kk - best.k) ? stop : best;
    }, MATERIAL_STOPS[0]);

    return {
      rgb: rgb,
      hex: 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')',
      nearestName: nearest.name,
      isExactPreset: Math.abs(k - nearest.k) < 1e-6
    };
  }

  // ===========================================================================
  // Layout puro (sin DOM)
  // ===========================================================================

  /**
   * @typedef {Object} FinVisualizerLayout
   * @property {number} viewW
   * @property {number} viewH
   * @property {number} scale            px por metro (isotrópico X/Y).
   * @property {number} originX          x del borde izquierdo de la base [px].
   * @property {number} baseTopY
   * @property {number} baseBottomY
   * @property {number} finsTopY
   * @property {number} baseThicknessPx
   * @property {number} finHeightPx
   * @property {number} contentWidthPx
   * @property {Array<{index:number, xM:number, xPx:number, widthPx:number, widthPxReal:number}>} fins
   * @property {number} gapM             Espacio libre entre aletas adyacentes [m] (puede ser <= 0).
   * @property {number} gapMm
   * @property {boolean} blocked
   * @property {number|null} annotatedGapIndex  Índice de hueco (entre fin[i] y fin[i+1]) con cota completa.
   * @property {number} tickStride
   * @property {number|null} overlapMm   Sólo si `blocked`: cuánto exceden las aletas a L_base, en mm.
   */

  /**
   * @param {import('./solar-fin-heatsink-state.js').SolarFinState} state
   * @param {ReturnType<import('./solar-fins-validation.js').evaluateFinWarnings>|null} [evaluation]
   * @returns {FinVisualizerLayout|null} `null` si el estado no tiene datos
   *          numéricos utilizables (N/t/L_aleta/L_base no finitos o <= 0) —
   *          nunca se lanza excepción, igual que computeFinGeometry del LOTE 1.
   */
  function computeFinVisualizerLayout(state, evaluation) {
    if (!state) return null;
    var L_base = state.L_base;
    var N = Math.max(1, Math.round(state.N));
    var t = state.t;
    var L_aleta = state.L_aleta;

    var basicsOk = isFinite(L_base) && L_base > 0 && isFinite(t) && t > 0 &&
      isFinite(L_aleta) && L_aleta > 0 && isFinite(N) && N >= 1;
    if (!basicsOk) return null;

    var blocked = !!(evaluation && evaluation.hasCritical);

    // Grosor de base dibujado: NO es un parámetro físico del modelo (el LOTE
    // 1 no modela el espesor del sustrato/celda) — se define proporcional a
    // L_aleta para que la composición se vea equilibrada en todo el rango de
    // sliders (L_aleta: 0.01-0.15 m), acotado a [3, 20] mm para no desaparecer
    // ni dominar el dibujo.
    var baseThicknessM = Math.min(0.02, Math.max(0.003, 0.22 * L_aleta));

    var drawW = VIEW_W - MARGIN.left - MARGIN.right;
    var drawH = VIEW_H - MARGIN.top - MARGIN.bottom;
    var totalHeightM = L_aleta + baseThicknessM;

    // Escala ISOTRÓPICA (misma escala en X y en Y): el espesor de aleta (t),
    // el paso (s) y L_base conviven en la MISMA escala que L_aleta — es la
    // parte que hace el dibujo "a escala" y no sólo esquemático, y es lo que
    // permite que la interferencia geométrica (N*t >= L_base) se vea
    // literalmente como aletas que se solapan, no como una ilustración
    // decorativa.
    var scale = Math.min(drawW / L_base, drawH / totalHeightM);
    if (!isFinite(scale) || scale <= 0) return null;

    var baseThicknessPx = baseThicknessM * scale;
    var finHeightPx = L_aleta * scale;
    var contentWidthPx = L_base * scale;
    var originX = MARGIN.left + (drawW - contentWidthPx) / 2;
    var baseBottomY = MARGIN.top + drawH;
    var baseTopY = baseBottomY - baseThicknessPx;
    var finsTopY = baseTopY - finHeightPx;

    // --- Posiciones de las N aletas ------------------------------------------
    // Mismo criterio que Lote 1 (computeFinGeometry): N-1 huecos iguales,
    // aletas a ras de ambos extremos de L_base. Se demuestra por telescopía
    // que la suma de (t+gap) a lo largo de las N aletas SIEMPRE cierra
    // exactamente en L_base, incluso con gap negativo (caso bloqueado) —
    // por eso no hace falta clampear cursorM: nunca se sale del viewBox.
    var totalOccupiedM = N * t;
    var freeSpaceM = L_base - totalOccupiedM;
    var gapM = N > 1 ? freeSpaceM / (N - 1) : 0;
    var finWidthPxReal = t * scale;
    var finWidthPx = Math.max(MIN_FIN_PX, finWidthPxReal);

    var fins = [];
    var cursorM = N === 1 ? Math.max(0, (L_base - t) / 2) : 0;
    for (var i = 0; i < N; i++) {
      fins.push({
        index: i,
        xM: cursorM,
        xPx: originX + cursorM * scale,
        widthPx: finWidthPx,
        widthPxReal: finWidthPxReal
      });
      cursorM += t + gapM;
    }

    var annotatedGapIndex = (!blocked && N > 1) ? Math.floor((N - 2) / 2) : null;
    var tickStride = (N - 1) > MAX_DECORATED_GAPS ? Math.ceil((N - 1) / MAX_DECORATED_GAPS) : 1;

    return {
      viewW: VIEW_W,
      viewH: VIEW_H,
      scale: scale,
      originX: originX,
      baseTopY: baseTopY,
      baseBottomY: baseBottomY,
      finsTopY: finsTopY,
      baseThicknessPx: baseThicknessPx,
      finHeightPx: finHeightPx,
      contentWidthPx: contentWidthPx,
      N: N,
      t: t,
      L_aleta: L_aleta,
      L_base: L_base,
      fins: fins,
      gapM: gapM,
      gapMm: gapM * 1000,
      blocked: blocked,
      annotatedGapIndex: annotatedGapIndex,
      tickStride: tickStride,
      overlapMm: blocked ? (totalOccupiedM - L_base) * 1000 : null
    };
  }

  // ===========================================================================
  // Render DOM (SVG)
  // ===========================================================================

  /** Mismo criterio que SolarFinsStatusUI.detectActiveLanguage (LOTE 3) —
   * duplicado deliberadamente (archivo autocontenido, mismo patrón que
   * `resolveGlobalObject`/`fallbackSync` en LOTEs anteriores) en vez de
   * exigir cargar solar-fins-status-ui.js sólo para esto. */
  function detectActiveLanguage(doc) {
    if (!doc || typeof doc.querySelector !== 'function') return 'es';
    var sample = doc.querySelector('.lang-en');
    if (!sample) return 'es';
    var style = sample.style && sample.style.display;
    return style === 'none' ? 'es' : 'en';
  }

  function svgEl(doc, tag, attrs) {
    var el = doc.createElementNS(SVG_NS, tag);
    if (attrs) {
      for (var key in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, key)) {
          el.setAttribute(key, attrs[key]);
        }
      }
    }
    return el;
  }

  function buildDefs(doc) {
    var defs = svgEl(doc, 'defs', {});
    var marker = svgEl(doc, 'marker', {
      id: 'fh-arrow',
      markerWidth: '6',
      markerHeight: '6',
      refX: '5',
      refY: '3',
      orient: 'auto-start-reverse'
    });
    marker.appendChild(svgEl(doc, 'path', { d: 'M0,0 L6,3 L0,6 Z', class: 'fh-arrow-head' }));
    defs.appendChild(marker);
    return defs;
  }

  /**
   * Dibuja una "cota" (línea de dimensión con flechas en ambos extremos +
   * texto) entre `x1` y `x2` a la altura `y`, con marcas verticales cortas en
   * cada extremo. Usado tanto para el hueco anotado (cian) como para el
   * indicador de solape cuando el estado está bloqueado (rojo).
   */
  function drawDimensionLine(doc, group, x1, x2, y, label, extraClass) {
    var cls = 'fh-cota-line' + (extraClass ? ' ' + extraClass : '');
    var tickTop = y - 6, tickBottom = y + 6;
    group.appendChild(svgEl(doc, 'line', { x1: x1, x2: x1, y1: tickTop, y2: tickBottom, class: cls }));
    group.appendChild(svgEl(doc, 'line', { x1: x2, x2: x2, y1: tickTop, y2: tickBottom, class: cls }));
    group.appendChild(svgEl(doc, 'line', {
      x1: x1, x2: x2, y1: y, y2: y, class: cls,
      'marker-start': 'url(#fh-arrow)', 'marker-end': 'url(#fh-arrow)'
    }));
    var text = svgEl(doc, 'text', {
      x: (x1 + x2) / 2, y: y - 8, class: 'fh-cota-text' + (extraClass ? ' ' + extraClass : ''),
      'text-anchor': 'middle'
    });
    text.textContent = label;
    group.appendChild(text);
  }

  /**
   * Crea un <text> con salto de línea manual (tspans) para que los mensajes
   * largos (issues de LOTE 3, que pueden superar los ~560px del viewBox en
   * una sola línea — se detectó exactamente este desbordamiento durante la
   * verificación visual con screenshots de este LOTE) nunca se salgan del
   * dibujo. Ajuste ingenuo por número de caracteres (no mide ancho real de
   * fuente) — suficiente para las ~2 líneas cortas que necesitan estos
   * textos, sin añadir una dependencia de medición de texto.
   */
  function appendWrappedText(doc, parent, opts) {
    var words = opts.text.split(' ');
    var maxChars = opts.maxCharsPerLine || 54;
    var lines = [];
    var current = '';
    words.forEach(function (w) {
      var candidate = current ? current + ' ' + w : w;
      if (candidate.length > maxChars && current) {
        lines.push(current);
        current = w;
      } else {
        current = candidate;
      }
    });
    if (current) lines.push(current);

    var lineHeight = opts.lineHeight || 12;
    var startY = opts.y - ((lines.length - 1) * lineHeight) / 2;
    var text = svgEl(doc, 'text', {
      x: opts.x, y: startY, class: opts.className, 'text-anchor': opts.textAnchor || 'middle'
    });
    lines.forEach(function (line, i) {
      var tspan = svgEl(doc, 'tspan', { x: opts.x, dy: i === 0 ? 0 : lineHeight });
      tspan.textContent = line;
      text.appendChild(tspan);
    });
    parent.appendChild(text);
    return text;
  }

  /** Flecha de flujo de aire esquemática (chevron apuntando hacia arriba). */
  function drawFlowArrow(doc, group, x, yTop, delay) {
    var path = svgEl(doc, 'path', {
      d: 'M ' + (x - 4) + ' ' + (yTop + 9) + ' L ' + x + ' ' + yTop + ' L ' + (x + 4) + ' ' + (yTop + 9),
      class: 'fh-flow-arrow'
    });
    path.style.animationDelay = (delay || 0) + 's';
    group.appendChild(path);
  }

  function renderLayoutIntoSvg(svg, layout, state, evaluation, options) {
    var doc = svg.ownerDocument;
    var lang = (options && options.lang) || detectActiveLanguage(doc);

    // Limpia todo excepto <defs> (se crea una sola vez por elemento <svg>).
    var children = Array.prototype.slice.call(svg.childNodes);
    children.forEach(function (child) {
      if (child.nodeName.toLowerCase() !== 'defs') svg.removeChild(child);
    });

    if (!layout) {
      var msg = svgEl(doc, 'text', {
        x: VIEW_W / 2, y: VIEW_H / 2, 'text-anchor': 'middle', class: 'fh-empty-msg'
      });
      msg.textContent = lang === 'en' ? 'Adjust the parameters to view the heat sink.' : 'Ajuste los parámetros para ver el disipador.';
      svg.appendChild(msg);
      svg.setAttribute('aria-label', lang === 'en' ? 'Fin heat sink schematic: no valid data yet.' : 'Esquema del disipador de aletas: aún sin datos válidos.');
      return;
    }

    var material = materialColorForK(state.k);
    var hasWarning = !!(evaluation && evaluation.hasWarning);
    var blocked = layout.blocked;
    var spacingOk = !!(evaluation && evaluation.spacing && !evaluation.spacing.isTooTight);

    // --- Base (celda solar / sustrato) ---------------------------------------
    var baseGroup = svgEl(doc, 'g', { class: 'fh-base-group' });
    baseGroup.appendChild(svgEl(doc, 'rect', {
      x: layout.originX, y: layout.baseTopY,
      width: Math.max(1, layout.contentWidthPx), height: Math.max(1, layout.baseThicknessPx),
      rx: 3, class: 'fh-base'
    }));
    svg.appendChild(baseGroup);

    // --- Guías sutiles de huecos intermedios (sin cota completa) -------------
    if (!blocked && layout.N > 1) {
      var guideGroup = svgEl(doc, 'g', { class: 'fh-guides' });
      for (var gi = 0; gi < layout.N - 1; gi++) {
        if (gi === layout.annotatedGapIndex) continue;
        if (gi % layout.tickStride !== 0) continue;
        var finA = layout.fins[gi], finB = layout.fins[gi + 1];
        var midX = (finA.xPx + finA.widthPx + finB.xPx) / 2;
        guideGroup.appendChild(svgEl(doc, 'line', {
          x1: midX, x2: midX, y1: layout.baseTopY, y2: layout.finsTopY, class: 'fh-gap-guide'
        }));
        if (spacingOk) drawFlowArrow(doc, guideGroup, midX, layout.finsTopY - 14, (gi % 5) * 0.12);
      }
      svg.appendChild(guideGroup);
    }

    // --- Aletas ----------------------------------------------------------------
    var finsGroup = svgEl(doc, 'g', { class: 'fh-fins' });
    layout.fins.forEach(function (fin) {
      var rect = svgEl(doc, 'rect', {
        x: fin.xPx, y: layout.finsTopY,
        width: Math.max(1, fin.widthPx), height: Math.max(1, layout.finHeightPx),
        rx: 1,
        class: 'fh-fin' + (blocked ? ' is-blocked' : (hasWarning ? ' is-warning' : ''))
      });
      if (!blocked) rect.style.fill = material.hex;
      finsGroup.appendChild(rect);
    });
    svg.appendChild(finsGroup);

    // --- Cota principal --------------------------------------------------------
    var cotaGroup = svgEl(doc, 'g', { class: 'fh-cotas' });
    if (blocked) {
      var overlapLabel = (lang === 'en' ? 'overlap ' : 'solape ') + Math.abs(layout.overlapMm).toFixed(2) + ' mm';
      drawDimensionLine(
        doc, cotaGroup,
        layout.originX, layout.originX + layout.contentWidthPx,
        layout.finsTopY - 16,
        overlapLabel,
        'is-blocked'
      );
    } else if (layout.annotatedGapIndex !== null) {
      var gFin = layout.fins[layout.annotatedGapIndex];
      var gFinNext = layout.fins[layout.annotatedGapIndex + 1];
      var x1 = gFin.xPx + gFin.widthPx;
      var x2 = gFinNext.xPx;
      if (x2 > x1) {
        drawDimensionLine(
          doc, cotaGroup, x1, x2, layout.baseTopY - 16,
          's = ' + layout.gapMm.toFixed(2) + ' mm',
          hasWarning ? 'is-warning' : ''
        );
        if (spacingOk) drawFlowArrow(doc, cotaGroup, (x1 + x2) / 2, layout.finsTopY - 14, 0);
      }
    }
    svg.appendChild(cotaGroup);

    // --- Etiquetas de contexto ---------------------------------------------------
    var labelGroup = svgEl(doc, 'g', { class: 'fh-labels' });

    var materialLabel = svgEl(doc, 'text', { x: layout.originX, y: 18, class: 'fh-label-material' });
    var materialName = material.isExactPreset ? material.nearestName[lang] : (lang === 'en' ? '≈' + material.nearestName.en : '≈' + material.nearestName.es);
    materialLabel.textContent = materialName + ' (k=' + Math.round(state.k) + ' W/m·K)';
    if (!blocked) materialLabel.style.fill = material.hex;
    labelGroup.appendChild(materialLabel);

    var dimsLabel = svgEl(doc, 'text', {
      x: layout.originX + layout.contentWidthPx, y: 18, class: 'fh-label-dims', 'text-anchor': 'end'
    });
    dimsLabel.textContent = 'L_base=' + (layout.L_base * 1000).toFixed(0) + ' mm · N=' + layout.N;
    labelGroup.appendChild(dimsLabel);

    if (blocked) {
      var critIssue = (evaluation.issues || []).filter(function (i) { return i.level === 'critical'; })[0];
      var blockedText = '⛔ ' + (critIssue ? (lang === 'en' ? critIssue.en : critIssue.es) : (lang === 'en' ? 'Geometric interference' : 'Interferencia geométrica'));
      appendWrappedText(doc, labelGroup, {
        x: VIEW_W / 2, y: VIEW_H - 18, className: 'fh-label-blocked',
        text: blockedText, maxCharsPerLine: 50, lineHeight: 13
      });
    } else if (hasWarning) {
      var warnIssue = (evaluation.issues || []).filter(function (i) { return i.level === 'warning'; })[0];
      if (warnIssue) {
        var warnText = '⚠ ' + (lang === 'en' ? warnIssue.en : warnIssue.es);
        appendWrappedText(doc, labelGroup, {
          x: VIEW_W / 2, y: VIEW_H - 18, className: 'fh-label-warning',
          text: warnText, maxCharsPerLine: 50, lineHeight: 12
        });
      }
    }
    svg.appendChild(labelGroup);

    // --- Accesibilidad -----------------------------------------------------------
    var ariaParts = blocked
      ? [lang === 'en' ? 'Blocked: fins overlap the cell base.' : 'Bloqueado: las aletas se superponen sobre la base de la celda.']
      : [
          (lang === 'en' ? 'Remaining space' : 'Espacio remanente') + ' ' +
            (evaluation ? evaluation.remainingSpaceMm.toFixed(1) : '?') + ' mm.',
          layout.N + ' ' + (lang === 'en' ? 'fins' : 'aletas') + ', ' + materialName + '.'
        ];
    svg.setAttribute('aria-label', ariaParts.join(' '));
  }

  /**
   * Crea un renderer con estado (una única instancia de <svg> reutilizada
   * entre llamadas a `render`). Mismo patrón que
   * `SolarFinsStatusUI.createFinStatusOnChangeHook` del LOTE 3: se resuelve
   * el contenedor UNA vez y cada `render(state, evaluation)` sólo actualiza
   * su contenido.
   *
   * @param {Object} [options]
   * @param {HTMLElement} [options.container] Contenedor directo (prioridad
   *        sobre `containerId`).
   * @param {string} [options.containerId='solar-fins-visualizer']
   * @param {Document|HTMLElement} [options.root=document]
   * @param {'es'|'en'} [options.lang] Fuerza el idioma en vez de autodetectarlo.
   * @returns {{render:(state:Object, evaluation:Object)=>void, getSvgElement:()=>SVGElement|null}}
   */
  function createFinVisualizerRenderer(options) {
    options = options || {};
    var scope = options.root || (typeof document !== 'undefined' ? document : null);
    var container = options.container ||
      (options.containerId && scope && scope.getElementById && scope.getElementById(options.containerId)) ||
      (scope && scope.getElementById && scope.getElementById('solar-fins-visualizer'));

    if (!container) {
      throw new Error('createFinVisualizerRenderer: no se encontró el contenedor del visualizador (options.container, options.containerId, o #solar-fins-visualizer por defecto).');
    }

    var doc = container.ownerDocument || (typeof document !== 'undefined' ? document : null);
    var svg = null;

    function ensureSvg() {
      if (svg) return svg;
      svg = svgEl(doc, 'svg', {
        viewBox: '0 0 ' + VIEW_W + ' ' + VIEW_H,
        preserveAspectRatio: 'xMidYMid meet',
        class: 'fh-svg',
        role: 'img'
      });
      svg.appendChild(buildDefs(doc));
      container.appendChild(svg);
      return svg;
    }

    return {
      render: function (state, evaluation) {
        var svgNode = ensureSvg();
        var layout = computeFinVisualizerLayout(state, evaluation);
        renderLayoutIntoSvg(svgNode, layout, state, evaluation || {}, options);
      },
      getSvgElement: function () { return svg; }
    };
  }

  return {
    materialColorForK: materialColorForK,
    computeFinVisualizerLayout: computeFinVisualizerLayout,
    createFinVisualizerRenderer: createFinVisualizerRenderer
  };
}));
