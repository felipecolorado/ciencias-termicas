/**
 * =============================================================================
 * solar-fins-panel.js
 * -----------------------------------------------------------------------------
 * LOTE 4 (integración final) — Componente CONTENEDOR único que ensambla:
 *   - LOTE 1  solar-fin-heatsink-state.js   (estado + geometría, vía Model)
 *   - LOTE 2  solar-fins-controls.js        (sliders -> initSolarFinsControls)
 *   - LOTE 3  solar-fins-validation.js +
 *             solar-fins-status-ui.js       (warnings/espacio remanente)
 *   - LOTE 4  solar-fins-visualizer.js      (corte transversal SVG a escala)
 *
 * Este archivo NO reimplementa ninguna lógica de los lotes anteriores — cada
 * uno se sigue pudiendo usar por separado (tal como se verificó en sus
 * propios harnesses). Su única responsabilidad es la CONEXIÓN entre ellos,
 * a través de los puntos de enganche que cada lote ya expuso para esto:
 *
 *   initSolarFinsControls({ onChange })                 <- LOTE 2
 *     -> statusHook(state)                               <- LOTE 3 (hook)
 *          -> evaluateFinWarnings(state)                 <- LOTE 3 (lógica)
 *          -> renderFinStatusUI(...)                      <- LOTE 3 (UI)
 *          -> onEvaluate(evaluation)                       <- callback LOTE 3
 *               -> visualizerRenderer.render(state, evaluation)  <- LOTE 4
 *
 * Es decir: el slider dispara UN solo recálculo de estado (LOTE 2, ya
 * coalescido a máx. 1×frame por rAF), que a su vez dispara UNA sola
 * evaluación de warnings (LOTE 3, `evaluateFinWarnings`), cuyo resultado se
 * reutiliza tanto para pintar los banners/barra (LOTE 3) como para el dibujo
 * del disipador (LOTE 4) — nunca se recalcula la física dos veces por el
 * mismo cambio de slider.
 *
 * Punto de entrada único: `initSolarFinsHeatsinkPanel(options)`. Pensado
 * para colgarse del mismo patrón `safeInit('SolarFins', ...)` que ya usa
 * `startApp()` en app_v2.js para el resto de laboratorios lazy-init:
 *
 *   safeInit('SolarFinsHeatsink', function () {
 *     window.solarFinsHeatsinkPanel = initSolarFinsHeatsinkPanel({
 *       root: document,
 *       evaluate: { h: SOLAR_H_BOTTOM_FINNED }  // opcional, ver LOTE 3
 *     });
 *   });
 *
 * DEPENDENCIAS (deben estar cargadas ANTES de llamar a
 * `initSolarFinsHeatsinkPanel`, y el HTML de `solar-fins-panel.html` debe
 * estar ya en el DOM):
 *   1. solar-fin-heatsink-state.js   -> window.SolarFinHeatsinkModel
 *   2. solar-fins-controls.js        -> window.initSolarFinsControls
 *   3. solar-fins-validation.js      -> window.SolarFinValidation
 *   4. solar-fins-status-ui.js       -> window.SolarFinsStatusUI
 *   5. solar-fins-visualizer.js      -> window.SolarFinVisualizer
 *   6. este archivo                  -> window.initSolarFinsHeatsinkPanel
 * (El orden entre 1-5 no importa entre sí porque cada uno resuelve sus
 * dependencias en tiempo de LLAMADA, no en tiempo de parseo — sólo importa
 * que las 5 existan antes de invocar `initSolarFinsHeatsinkPanel`.)
 * =============================================================================
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.initSolarFinsHeatsinkPanel = factory().initSolarFinsHeatsinkPanel;
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function resolveGlobalObject() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    if (typeof global !== 'undefined') return global;
    return null;
  }

  function resolveDep(name) {
    var g = resolveGlobalObject();
    if (g && g[name]) return g[name];
    if (typeof require === 'function') {
      var fileMap = {
        initSolarFinsControls: './solar-fins-controls.js',
        SolarFinsStatusUI: './solar-fins-status-ui.js',
        SolarFinVisualizer: './solar-fins-visualizer.js'
      };
      if (fileMap[name]) {
        try { return require(fileMap[name])[name] || require(fileMap[name]); } catch (e) { /* noop */ }
      }
    }
    return null;
  }

  /**
   * Ensambla los 4 lotes del disipador de aletas en un único componente.
   *
   * @param {Object} [options]
   * @param {Document|HTMLElement} [options.root=document] Raíz donde buscar
   *        los ids del DOM de los 3 sub-componentes (controles, estado,
   *        visualizador) — deben existir ya en el documento (ver
   *        solar-fins-panel.html).
   * @param {Partial<import('./solar-fin-heatsink-state.js').SolarFinState>} [options.initialState]
   *        Se reenvía a `initSolarFinsControls` (LOTE 2).
   * @param {Object} [options.evaluate] Se reenvía a `evaluateFinWarnings`
   *        (LOTE 3) en cada recálculo — p.ej. `{ h: 80, Ra: undefined }`.
   * @param {string} [options.visualizerContainerId='solar-fins-visualizer']
   * @param {(state:Object, evaluation:Object)=>void} [options.onEvaluate]
   *        Callback adicional (además del dibujo) con el estado y la
   *        evaluación completa de cada recálculo — punto de enganche para un
   *        LOTE futuro (p.ej. acoplar al solver térmico `solveSolarCell`)
   *        sin tener que modificar este archivo.
   * @returns {{getState:()=>Object, setState:(patch:Object)=>void, getLastEvaluation:()=>Object|null, destroy:()=>void}}
   */
  function initSolarFinsHeatsinkPanel(options) {
    options = options || {};
    var scope = options.root || (typeof document !== 'undefined' ? document : null);
    if (!scope) {
      throw new Error('initSolarFinsHeatsinkPanel: no hay `document` disponible y no se pasó options.root.');
    }

    var ControlsInit = resolveDep('initSolarFinsControls');
    var StatusUI = resolveDep('SolarFinsStatusUI');
    var Visualizer = resolveDep('SolarFinVisualizer');

    var missing = [];
    if (!ControlsInit) missing.push('initSolarFinsControls (solar-fins-controls.js, LOTE 2)');
    if (!StatusUI) missing.push('SolarFinsStatusUI (solar-fins-status-ui.js, LOTE 3)');
    if (!Visualizer) missing.push('SolarFinVisualizer (solar-fins-visualizer.js, LOTE 4)');
    if (missing.length > 0) {
      throw new Error('initSolarFinsHeatsinkPanel: faltan dependencias por cargar antes de este archivo: ' + missing.join('; ') + '.');
    }

    var visualizerRenderer = null;
    try {
      visualizerRenderer = Visualizer.createFinVisualizerRenderer({
        root: scope,
        containerId: options.visualizerContainerId || 'solar-fins-visualizer'
      });
    } catch (e) {
      // El visualizador es un realce del LOTE 4: si su contenedor no está
      // presente en este HTML concreto (p.ej. una integración parcial que
      // aún no añadió solar-fins-panel.html completo), el panel sigue
      // siendo funcional con sliders + estado/warnings del LOTE 2/3 — no se
      // relanza la excepción, sólo se registra para que quede visible en la
      // consola durante la integración.
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[solar-fins-panel] Visualizador no inicializado: ' + e.message);
      }
    }

    // `latestState` conecta el `onChange` del LOTE 2 (que sólo entrega
    // `state`) con el `onEvaluate` del LOTE 3 (que sólo entrega
    // `evaluation`, no `state`) — ambos se disparan de forma SÍNCRONA dentro
    // de la misma llamada a `statusHook(state)` (ver solar-fins-status-ui.js:
    // `createFinStatusOnChangeHook` invoca `onEvaluate` antes de retornar),
    // así que no hay ventana de carrera entre asignar `latestState` y leerlo
    // en `onEvaluate`.
    var latestState = null;
    var lastEvaluation = null;

    var statusHook = StatusUI.createFinStatusOnChangeHook({
      root: scope,
      evaluate: options.evaluate || {},
      onEvaluate: function (evaluation) {
        lastEvaluation = evaluation;
        if (visualizerRenderer && latestState) {
          visualizerRenderer.render(latestState, evaluation);
        }
        if (typeof options.onEvaluate === 'function') {
          options.onEvaluate(latestState, evaluation);
        }
      }
    });

    var controls = ControlsInit({
      root: scope,
      initialState: options.initialState,
      onChange: function (state) {
        latestState = state;
        statusHook(state);
      }
    });

    return {
      /** Estado físico actual (SolarFinState) — sólo lectura por convención. */
      getState: controls.getState,
      /** Aplica un patch externo de estado (ver LOTE 2 `setState`). */
      setState: controls.setState,
      /** Última evaluación completa de warnings/espacio remanente (LOTE 3),
       * por si otro módulo del sitio necesita leerla sin volver a calcularla. */
      getLastEvaluation: function () { return lastEvaluation; },
      /** Limpieza: delega en el `destroy()` del LOTE 2 (cancela el rAF
       * pendiente y desconecta los presets de k); el LOTE 3/4 no registran
       * listeners propios que sobrevivan a la destrucción del nodo DOM. */
      destroy: function () { controls.destroy(); }
    };
  }

  return { initSolarFinsHeatsinkPanel: initSolarFinsHeatsinkPanel };
}));
