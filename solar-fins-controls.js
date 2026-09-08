/**
 * =============================================================================
 * solar-fins-controls.js
 * -----------------------------------------------------------------------------
 * Componente de interfaz (sliders + inputs numéricos sincronizados) para el
 * subgrupo "Disipador de Aletas" de solar-cell-sim. Lote 2: sólo controles
 * de UI + estado en vivo — NO dibuja el disipador ni lo acopla al solver
 * térmico (`solveSolarCell`); ambas cosas quedan para lotes posteriores,
 * que pueden suscribirse al estado de este componente vía `onChange`
 * (ver `initSolarFinsControls` más abajo) sin tener que tocar este archivo.
 *
 * Depende de `window.SolarFinHeatsinkModel` (LOTE 1,
 * solar-fin-heatsink-state.js) para el estado/validación/geometría — este
 * archivo NO reimplementa esa física, sólo la conecta a los 6 controles.
 *
 * Compatible con <script> plano (`window.initSolarFinsControls`), CommonJS
 * (Node/tests) y ESM.
 * =============================================================================
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.initSolarFinsControls = factory().initSolarFinsControls;
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /**
   * Ids del DOM que espera este componente (deben existir en el documento
   * antes de llamar a `initSolarFinsControls` — ver solar-fins-controls.html).
   */
  var DOM_IDS = {
    A_celda: { slider: 'solar-fin-acelda', num: 'solar-fin-acelda-num' },
    W: { slider: 'solar-fin-w', num: 'solar-fin-w-num' },
    N: { slider: 'solar-fin-n', num: 'solar-fin-n-num' },
    k: { slider: 'solar-fin-k', num: 'solar-fin-k-num' },
    L_aleta: { slider: 'solar-fin-laleta', num: 'solar-fin-laleta-num' },
    t: { slider: 'solar-fin-t', num: 'solar-fin-t-num' }
  };
  var LBASE_DISPLAY_ID = 'solar-fin-lbase-display';
  var VALIDATION_MSG_ID = 'solar-fins-validation';
  var K_PRESETS_CONTAINER_ID = 'solar-fin-k-presets';

  /** Estado por defecto de la UI para este lote (rangos 2026-09-07, más
   * angostos que los defaults genéricos de FIN_PARAM_RANGES en el LOTE 1 —
   * ese objeto sigue existiendo y no se modifica; este componente pasa sus
   * propios valores iniciales directamente a createInitialFinState). */
  var DEFAULT_OVERRIDES = {
    A_celda: 0.16,
    W: 0.40,
    N: 10,
    k: 205,
    L_aleta: 0.03,
    t: 0.002,
    includeTip: true
  };

  // ===========================================================================
  // Fallback de sincronización slider<->número
  // -----------------------------------------------------------------------------
  // El sitio ya expone un helper global `syncSliderAndNumberInput(slider,
  // number, onUpdate)` en app_v2.js (sección "HELPER GLOBAL — Sincronización
  // Bidireccional Slider <-> Number") con exactamente ese contrato. Cuando
  // este componente vive dentro del sitio real, se reutiliza sin
  // duplicarlo. Si se usa este archivo de forma standalone (demo, tests,
  // u otro proyecto que aún no tenga ese helper cargado), cae a esta
  // implementación local equivalente para que el componente siga siendo
  // funcional por sí mismo — "listo para integrar" incluye "funciona antes
  // de integrar".
  // ===========================================================================
  function getStepDecimalsLocal(stepAttr) {
    if (!stepAttr) return 0;
    var s = String(stepAttr);
    var dotIdx = s.indexOf('.');
    if (dotIdx === -1) return 0;
    return s.length - dotIdx - 1;
  }

  function fallbackSync(sliderEl, numberEl, onUpdate) {
    var decimals = getStepDecimalsLocal(sliderEl.step || numberEl.step);
    function clamp(val) {
      var min = parseFloat(sliderEl.min);
      var max = parseFloat(sliderEl.max);
      if (!isNaN(min)) val = Math.max(min, val);
      if (!isNaN(max)) val = Math.min(max, val);
      return val;
    }
    numberEl.value = parseFloat(sliderEl.value).toFixed(decimals);
    sliderEl.addEventListener('input', function () {
      if (document.activeElement !== numberEl) {
        numberEl.value = parseFloat(sliderEl.value).toFixed(decimals);
      }
      onUpdate(parseFloat(sliderEl.value));
    });
    numberEl.addEventListener('input', function () {
      var raw = numberEl.value.trim();
      if (raw === '' || raw === '-' || isNaN(parseFloat(raw))) return;
      var val = parseFloat(raw);
      sliderEl.value = val;
      onUpdate(parseFloat(sliderEl.value));
    });
    function commit() {
      var val = parseFloat(numberEl.value);
      if (isNaN(val)) val = parseFloat(sliderEl.value);
      val = clamp(val);
      numberEl.value = val.toFixed(decimals);
      sliderEl.value = val;
      onUpdate(parseFloat(sliderEl.value));
    }
    numberEl.addEventListener('change', commit);
    numberEl.addEventListener('blur', commit);
  }

  /**
   * Resuelve el objeto global real (window en navegador, self en workers,
   * global en Node) sin depender del parámetro `root` del wrapper UMD — ese
   * `root` sólo está en el scope de la función wrapper externa, NO en el de
   * `factory` (son funciones hermanas, no anidadas una dentro de la otra),
   * así que referenciarlo dentro de `factory` resolvería siempre a
   * `undefined`. Centralizar esta resolución aquí evita repetir el error en
   * cada punto donde este módulo necesita mirar el entorno global (helper
   * sitewide `syncSliderAndNumberInput`, `requestAnimationFrame`/
   * `cancelAnimationFrame`).
   * @returns {Object|null}
   */
  function resolveGlobalObject() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    if (typeof global !== 'undefined') return global;
    return null;
  }

  /**
   * Vincula un par slider+número usando el helper sitewide si está
   * disponible (`window.syncSliderAndNumberInput`, definido globalmente en
   * app_v2.js), o el fallback local si el componente se usa standalone.
   * @param {HTMLInputElement} sliderEl
   * @param {HTMLInputElement} numberEl
   * @param {(value:number)=>void} onUpdate
   */
  function bindPair(sliderEl, numberEl, onUpdate) {
    if (!sliderEl || !numberEl) return;
    var g = resolveGlobalObject();
    var globalSync = g && g.syncSliderAndNumberInput;
    if (typeof globalSync === 'function') {
      globalSync(sliderEl, numberEl, onUpdate);
    } else {
      fallbackSync(sliderEl, numberEl, onUpdate);
    }
  }

  // ===========================================================================
  // Coalescencia de actualizaciones "pesadas" vía requestAnimationFrame
  // -----------------------------------------------------------------------------
  // Requisito explícito del lote: "Optimiza los eventos de cambio
  // (onChange/onInput) para evitar re-renderizados innecesarios en la
  // simulación principal". Un arrastre de slider dispara MUCHOS eventos
  // 'input' por segundo (uno por cada pequeño movimiento del mouse/touch),
  // muchos más de los que un canvas/gráfica necesita para verse fluida a
  // 60fps. Este helper conserva sólo el ÚLTIMO estado recibido en cada
  // frame y llama a `callback` como máximo una vez por frame — nunca se
  // pierde el valor final (a diferencia de un debounce con setTimeout, que
  // retrasaría la respuesta visual), y nunca se re-renderiza más rápido de
  // lo que el navegador puede pintar.
  //
  // Los badges numéricos (value-badge / sim-number-input) NO pasan por este
  // coalescer — bindPair/syncSliderAndNumberInput los actualiza de forma
  // síncrona en cada evento, así que el número que ve el usuario nunca se
  // siente "con lag" aunque el recálculo pesado (canvas, solver) sí esté
  // coalescido a 1×frame.
  // ===========================================================================
  function createRafCoalescer(callback) {
    var g = resolveGlobalObject();
    var rafFn = g && typeof g.requestAnimationFrame === 'function' ? g.requestAnimationFrame.bind(g) : null;
    var cafFn = g && typeof g.cancelAnimationFrame === 'function' ? g.cancelAnimationFrame.bind(g) : function () {};

    var rafId = null;
    var latestArgs = null;

    function flush() {
      rafId = null;
      var args = latestArgs;
      latestArgs = null;
      callback.apply(null, args);
    }

    function schedule() {
      if (!rafFn) {
        // Entorno sin requestAnimationFrame (p.ej. un harness mínimo sin
        // polyfill de rAF): degrada a llamada síncrona inmediata — nunca se
        // pierde el requisito funcional por falta de rAF, sólo se pierde la
        // coalescencia en ESE entorno concreto.
        flush();
        return;
      }
      if (rafId === null) {
        rafId = rafFn(flush);
      }
    }

    return {
      /** Encola una llamada; coalesce múltiples llamadas en el mismo frame. */
      schedule: function () {
        latestArgs = arguments;
        schedule();
      },
      /** Cancela cualquier llamada pendiente (usado por `destroy()`). */
      cancel: function () {
        if (rafId !== null) cafFn(rafId);
        rafId = null;
        latestArgs = null;
      }
    };
  }

  // ===========================================================================
  // Render de estado derivado (L_base, validación)
  // ===========================================================================
  function renderDerived(state, validation, dom) {
    if (dom.lbaseDisplay) {
      var L_base = state.L_base;
      dom.lbaseDisplay.textContent = (isFinite(L_base) ? L_base.toFixed(3) : '—') + ' m';
    }

    if (!dom.validationMsg) return;
    var messages = [];
    var level = null;
    if (validation.errors.length > 0) {
      messages = validation.errors;
      level = 'error';
    } else if (validation.warnings.length > 0) {
      messages = validation.warnings;
      level = 'warning';
    }

    dom.validationMsg.classList.remove('fin-validation-error', 'fin-validation-warning');
    if (level === null) {
      dom.validationMsg.hidden = true;
      dom.validationMsg.textContent = '';
      return;
    }
    dom.validationMsg.hidden = false;
    dom.validationMsg.classList.add('fin-validation-' + level);
    dom.validationMsg.textContent = messages.join(' ');
  }

  function updateKPresetActiveState(dom, kValue) {
    if (!dom.kPresetButtons) return;
    dom.kPresetButtons.forEach(function (btn) {
      var presetVal = parseFloat(btn.getAttribute('data-k-preset'));
      var isActive = Math.abs(presetVal - kValue) < 1e-6;
      btn.classList.toggle('is-active', isActive);
    });
  }

  // ===========================================================================
  // Punto de entrada
  // ===========================================================================

  /**
   * Inicializa el componente de sliders del disipador de aletas.
   *
   * @param {Object} [options]
   * @param {Document|HTMLElement} [options.root=document] Raíz donde buscar
   *        los ids del DOM (permite montar el componente dentro de un
   *        fragmento no adjunto al documento, útil en tests).
   * @param {Partial<import('./solar-fin-heatsink-state.js').SolarFinState>} [options.initialState]
   *        Overrides sobre DEFAULT_OVERRIDES para el estado inicial.
   * @param {(state: Object, validation: Object, geometry: Object|null) => void} [options.onChange]
   *        Callback invocado (coalescido a máx. 1×frame) cada vez que el
   *        estado cambia. Recibe el SolarFinState actual, el resultado de
   *        validateFinState, y — sólo si el estado es válido —
   *        computeFinGeometry(state); si es inválido, `geometry` es `null`
   *        (evita que un LOTE futuro dibuje con NaN/valores sin sentido).
   *        Este es el punto de enganche para el LOTE de animación/solver:
   *        no requiere modificar este archivo.
   * @returns {{getState:()=>Object, setState:(patch:Object)=>void, destroy:()=>void}}
   */
  function initSolarFinsControls(options) {
    options = options || {};
    var scope = options.root || (typeof document !== 'undefined' ? document : null);
    if (!scope) {
      throw new Error('initSolarFinsControls: no hay `document` disponible y no se pasó options.root.');
    }
    var g = resolveGlobalObject();
    var Model = (g && g.SolarFinHeatsinkModel) ||
      (typeof require === 'function' ? (function () {
        try { return require('./solar-fin-heatsink-state.js'); } catch (e) { return null; }
      })() : null);
    if (!Model) {
      throw new Error('initSolarFinsControls: SolarFinHeatsinkModel no está disponible (LOTE 1 debe cargarse antes que este archivo).');
    }

    function byId(id) { return scope.getElementById ? scope.getElementById(id) : document.getElementById(id); }

    var dom = {
      A_celda: { slider: byId(DOM_IDS.A_celda.slider), num: byId(DOM_IDS.A_celda.num) },
      W: { slider: byId(DOM_IDS.W.slider), num: byId(DOM_IDS.W.num) },
      N: { slider: byId(DOM_IDS.N.slider), num: byId(DOM_IDS.N.num) },
      k: { slider: byId(DOM_IDS.k.slider), num: byId(DOM_IDS.k.num) },
      L_aleta: { slider: byId(DOM_IDS.L_aleta.slider), num: byId(DOM_IDS.L_aleta.num) },
      t: { slider: byId(DOM_IDS.t.slider), num: byId(DOM_IDS.t.num) },
      lbaseDisplay: byId(LBASE_DISPLAY_ID),
      validationMsg: byId(VALIDATION_MSG_ID),
      kPresetsContainer: byId(K_PRESETS_CONTAINER_ID),
      kPresetButtons: null
    };
    if (dom.kPresetsContainer) {
      var btnList = dom.kPresetsContainer.querySelectorAll('[data-k-preset]');
      dom.kPresetButtons = Array.prototype.slice.call(btnList);
    }

    var state = Model.createInitialFinState(Object.assign({}, DEFAULT_OVERRIDES, options.initialState || {}));

    var coalescer = createRafCoalescer(function () {
      var validation = Model.validateFinState(state);
      var geometry = validation.valid ? Model.computeFinGeometry(state) : null;
      renderDerived(state, validation, dom);
      updateKPresetActiveState(dom, state.k);
      if (typeof options.onChange === 'function') {
        options.onChange(state, validation, geometry);
      }
    });

    /**
     * Aplica un patch de estado (vía Model.updateFinState, inmutable) y
     * encola el refresco de UI/callback. `state` se reemplaza por el nuevo
     * objeto devuelto — nunca se muta el anterior in-place, preservando la
     * pureza garantizada por el LOTE 1.
     * @param {Object} patch
     */
    function applyPatch(patch) {
      state = Model.updateFinState(state, patch);
      coalescer.schedule();
    }

    // --- Vínculo de cada par slider/número a su campo de estado -------------
    bindPair(dom.A_celda.slider, dom.A_celda.num, function (v) { applyPatch({ A_celda: v }); });
    bindPair(dom.W.slider, dom.W.num, function (v) { applyPatch({ W: v }); });
    bindPair(dom.N.slider, dom.N.num, function (v) { applyPatch({ N: Math.round(v) }); });
    bindPair(dom.k.slider, dom.k.num, function (v) { applyPatch({ k: v }); });
    bindPair(dom.L_aleta.slider, dom.L_aleta.num, function (v) { applyPatch({ L_aleta: v }); });
    bindPair(dom.t.slider, dom.t.num, function (v) { applyPatch({ t: v }); });

    // --- Presets rápidos de conductividad (k) --------------------------------
    var presetHandlers = [];
    if (dom.kPresetButtons) {
      dom.kPresetButtons.forEach(function (btn) {
        var handler = function () {
          var kVal = parseFloat(btn.getAttribute('data-k-preset'));
          if (isNaN(kVal)) return;
          // Refleja el preset en el slider de k y dispara su propio evento
          // 'input' -> bindPair sincroniza el número Y llama a applyPatch
          // a través del mismo camino que un arrastre real de mouse (tanto
          // el helper sitewide como el fallback local escuchan 'input' en
          // el slider), así que no se llama a applyPatch({k}) por
          // duplicado aquí.
          dom.k.slider.value = kVal;
          dom.k.slider.dispatchEvent(new Event('input', { bubbles: true }));
        };
        btn.addEventListener('click', handler);
        presetHandlers.push({ btn: btn, handler: handler });
      });
    }

    // --- Primer render (estado inicial, sin esperar a un input del usuario) --
    coalescer.schedule();

    return {
      /** Estado actual (SolarFinState), de sólo lectura por convención —
       * no mutar el objeto devuelto; usar setState/los controles de UI. */
      getState: function () { return state; },
      /** Aplica un patch externo (p.ej. si otro control del laboratorio,
       * como el A_celda ya existente en solveSolarCell, debe mantenerse
       * sincronizado con este panel en un LOTE futuro). */
      setState: function (patch) { applyPatch(patch); },
      /** Limpieza: cancela cualquier rAF pendiente y desconecta los
       * listeners de los presets (los de bindPair/syncSliderAndNumberInput
       * viven mientras el nodo DOM exista, igual que el resto del sitio). */
      destroy: function () {
        coalescer.cancel();
        presetHandlers.forEach(function (p) { p.btn.removeEventListener('click', p.handler); });
      }
    };
  }

  return { initSolarFinsControls: initSolarFinsControls };
}));
