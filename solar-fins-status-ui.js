/**
 * =============================================================================
 * solar-fins-status-ui.js
 * -----------------------------------------------------------------------------
 * Renderer DOM + "hook" de integración para solar-fins-validation.js (LOTE 3).
 * Separa deliberadamente la LÓGICA (solar-fins-validation.js, sin DOM) de su
 * PRESENTACIÓN (este archivo) — la lógica es testeable en Node sin jsdom;
 * este archivo sólo se necesita en el navegador (o en tests con jsdom).
 *
 * Uso típico, integrado con el componente de sliders del LOTE 2:
 *
 *   var statusHook = SolarFinsStatusUI.createFinStatusOnChangeHook({
 *     root: document,                 // opcional, default document
 *     evaluate: { h: 80, Ra: undefined } // opcional, ver evaluateFinWarnings
 *   });
 *   initSolarFinsControls({ onChange: function (state) { statusHook(state); } });
 *
 * (El `onChange` de LOTE 2 también entrega su propia `validation`/`geometry`
 * —las del LOTE 1—, pero este hook recalcula con `evaluateFinWarnings` del
 * LOTE 3 porque necesita la evaluación más rica: issues con texto exacto,
 * eficiencia de aleta, espaciado. No se requiere modificar
 * solar-fins-controls.js para esto — por eso se diseñó como "hook"
 * enchufable en el mismo `onChange`.)
 *
 * Reemplazo del mensaje de validación del LOTE 2: el `<div
 * id="solar-fins-validation">` que pintaba solar-fins-controls.js queda
 * redundante frente a los banners de este archivo (que cubren el mismo
 * caso — interferencia geométrica — con más contexto). Al integrar este
 * LOTE 3, se recomienda: (a) eliminar esa fila del HTML del LOTE 2, o (b)
 * dejarla oculta con `display:none` sin borrarla. Este archivo NO la toca
 * ni depende de ella; ambos pueden coexistir sin conflicto si se prefiere
 * no tocar el LOTE 2 todavía.
 * =============================================================================
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SolarFinsStatusUI = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function resolveGlobalObject() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    if (typeof global !== 'undefined') return global;
    return null;
  }

  function resolveValidationModule() {
    var g = resolveGlobalObject();
    if (g && g.SolarFinValidation) return g.SolarFinValidation;
    if (typeof require === 'function') {
      try { return require('./solar-fins-validation.js'); } catch (e) { /* noop */ }
    }
    return null;
  }

  var DOM_IDS = {
    remainingValue: 'solar-fin-remaining-value',
    occupationBar: 'solar-fin-occupation-bar',
    barOccupied: 'solar-fin-bar-occupied',
    barRemaining: 'solar-fin-bar-remaining',
    occupiedPct: 'solar-fin-occupied-pct',
    remainingPct: 'solar-fin-remaining-pct',
    banners: 'solar-fins-banners',
    // LOTE reorganización espacial (2026-09-08): badge compacto inline,
    // duplicado a propósito de `remainingValue` — vive en
    // #solar-fins-inline-panel (sub-panel bajo la animación), fuera de
    // #solar-fins-status (columna lateral, sin cambios). Opcional: si el
    // host no lo agregó al HTML, `resolveDom` simplemente devuelve `null` y
    // `renderFinStatusUI` lo ignora (mismo patrón `if (dom.x)` que el resto
    // de este archivo).
    remainingValueInline: 'solar-fin-remaining-inline'
  };

  /**
   * Traducción del código de issue a un ícono/prefijo textual simple (sin
   * depender de una librería de íconos): "⛔" para crítico, "⚠" para
   * warning. Mantiene el banner utilizable incluso si las fuentes de
   * íconos del sitio no cargaron.
   */
  function iconForLevel(level) {
    return level === 'critical' ? '⛔' : '⚠';
  }

  /**
   * Lee el idioma activo del sitio con el mismo criterio que el resto del
   * sitio usa para sus pares .lang-es/.lang-en: si existe algún elemento
   * .lang-en visible (display != 'none'), se asume inglés activo. Se
   * evalúa en cada render (no se cachea) porque el usuario puede cambiar
   * de idioma en cualquier momento con el selector global del sitio.
   * Si no hay ningún .lang-en en el documento (p.ej. un host de pruebas
   * standalone sin el selector de idioma del sitio), se asume español.
   * @param {Document} doc
   * @returns {'es'|'en'}
   */
  function detectActiveLanguage(doc) {
    if (!doc || typeof doc.querySelector !== 'function') return 'es';
    var sample = doc.querySelector('.lang-en');
    if (!sample) return 'es';
    var style = sample.style && sample.style.display;
    return style === 'none' ? 'es' : 'en';
  }

  /**
   * Renderiza una FinWarningEvaluation (ver solar-fins-validation.js) sobre
   * el bloque de estado (solar-fins-status.html). Función de render "tonta"
   * — no decide nada por sí misma, sólo refleja lo que `evaluation` dice.
   *
   * @param {Object} dom Referencias a los elementos del DOM (ver `DOM_IDS`);
   *        obtenidas por `createFinStatusOnChangeHook` o pasadas a mano.
   * @param {ReturnType<import('./solar-fins-validation.js').evaluateFinWarnings>} evaluation
   * @param {'es'|'en'} [lang='es']
   */
  function renderFinStatusUI(dom, evaluation, lang) {
    lang = lang === 'en' ? 'en' : 'es';

    // --- Valor numérico de espacio remanente --------------------------------
    if (dom.remainingValue) {
      var mm = evaluation.remainingSpaceMm;
      dom.remainingValue.textContent = (mm >= 0 ? '' : '') + mm.toFixed(2) + ' mm';
      dom.remainingValue.classList.toggle('is-negative', mm < 0);
    }

    // --- Badge compacto inline (sub-panel bajo la animación) ------------------
    if (dom.remainingValueInline) {
      var mmInline = evaluation.remainingSpaceMm;
      dom.remainingValueInline.textContent = mmInline.toFixed(2) + ' mm';
      dom.remainingValueInline.classList.toggle('is-negative', mmInline < 0);
    }

    // --- Barra de ocupación --------------------------------------------------
    if (dom.barOccupied) dom.barOccupied.style.width = evaluation.occupiedPct.toFixed(1) + '%';
    if (dom.barRemaining) dom.barRemaining.style.width = evaluation.remainingPct.toFixed(1) + '%';
    if (dom.occupationBar) dom.occupationBar.classList.toggle('is-critical', evaluation.hasCritical);
    if (dom.occupiedPct) dom.occupiedPct.textContent = evaluation.occupiedPct.toFixed(0);
    if (dom.remainingPct) dom.remainingPct.textContent = evaluation.remainingPct.toFixed(0);

    // --- Banners ---------------------------------------------------------------
    if (dom.banners) {
      // Re-render completo del contenedor: la lista de issues es corta
      // (máx. 3 códigos posibles hoy) y cambia con poca frecuencia relativa
      // a los frames de animación — no vale la pena un diffing más fino
      // aquí. El coste real de "no re-renderizar en cada frame" ya lo
      // absorbe la coalescencia por rAF del LOTE 2 (el `onChange` que
      // dispara este hook ya está limitado a 1×frame).
      while (dom.banners.firstChild) dom.banners.removeChild(dom.banners.firstChild);
      var doc = dom.banners.ownerDocument || (typeof document !== 'undefined' ? document : null);
      evaluation.issues.forEach(function (issue) {
        var banner = doc.createElement('div');
        banner.className = 'fin-banner fin-banner-' + issue.level;

        var icon = doc.createElement('span');
        icon.className = 'fin-banner-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = iconForLevel(issue.level);

        var text = doc.createElement('span');
        text.className = 'fin-banner-text';
        var mainText = doc.createElement('span');
        mainText.textContent = lang === 'en' ? issue.en : issue.es;
        text.appendChild(mainText);
        if (issue.detail) {
          var detail = doc.createElement('span');
          detail.className = 'fin-banner-detail';
          detail.textContent = issue.detail;
          text.appendChild(detail);
        }

        banner.appendChild(icon);
        banner.appendChild(text);
        dom.banners.appendChild(banner);
      });
    }
  }

  /**
   * Resuelve las referencias del DOM una sola vez (ids fijos de
   * solar-fins-status.html) para no repetir `getElementById` en cada frame.
   * @param {Document|HTMLElement} scope
   */
  function resolveDom(scope) {
    var byId = function (id) {
      return scope.getElementById ? scope.getElementById(id) : null;
    };
    return {
      remainingValue: byId(DOM_IDS.remainingValue),
      occupationBar: byId(DOM_IDS.occupationBar),
      barOccupied: byId(DOM_IDS.barOccupied),
      barRemaining: byId(DOM_IDS.barRemaining),
      occupiedPct: byId(DOM_IDS.occupiedPct),
      remainingPct: byId(DOM_IDS.remainingPct),
      banners: byId(DOM_IDS.banners),
      remainingValueInline: byId(DOM_IDS.remainingValueInline)
    };
  }

  /**
   * Crea una función `onChange`-compatible con `initSolarFinsControls` del
   * LOTE 2 (mismo hueco de enganche): recibe el `SolarFinState` actual,
   * ejecuta `evaluateFinWarnings` (LOTE 3) y renderiza el resultado sobre
   * el bloque de estado. Este es el "hook" pedido por el usuario.
   *
   * @param {Object} [options]
   * @param {Document|HTMLElement} [options.root=document]
   * @param {Object} [options.evaluate] Se reenvía tal cual a
   *        `evaluateFinWarnings(state, options.evaluate)` — p.ej. `{h, Ra}`.
   * @param {(evaluation:Object)=>void} [options.onEvaluate] Callback
   *        adicional con la evaluación completa (para que otro LOTE, p.ej.
   *        el dibujo del disipador, reciba los mismos datos sin tener que
   *        volver a llamar a evaluateFinWarnings).
   * @returns {(state:Object)=>Object} función a pasar como `onChange` (o a
   *          llamar manualmente); devuelve la `evaluation` calculada, por
   *          si el llamador la quiere inspeccionar de forma síncrona.
   */
  function createFinStatusOnChangeHook(options) {
    options = options || {};
    var scope = options.root || (typeof document !== 'undefined' ? document : null);
    if (!scope) {
      throw new Error('createFinStatusOnChangeHook: no hay `document` disponible y no se pasó options.root.');
    }
    var Validation = resolveValidationModule();
    if (!Validation) {
      throw new Error('createFinStatusOnChangeHook: SolarFinValidation no está disponible (cargue solar-fins-validation.js primero).');
    }
    var dom = resolveDom(scope);
    // `scope` puede ser el propio `document` (nodeType 9, sin ownerDocument
    // propio) o un elemento/fragmento montado dentro de uno (usa el suyo).
    var doc = scope.nodeType === 9 ? scope : (scope.ownerDocument || null);

    return function (state) {
      var evaluation = Validation.evaluateFinWarnings(state, options.evaluate || {});
      var lang = detectActiveLanguage(doc);
      renderFinStatusUI(dom, evaluation, lang);
      if (typeof options.onEvaluate === 'function') options.onEvaluate(evaluation);
      return evaluation;
    };
  }

  return {
    renderFinStatusUI: renderFinStatusUI,
    createFinStatusOnChangeHook: createFinStatusOnChangeHook,
    detectActiveLanguage: detectActiveLanguage
  };
}));
