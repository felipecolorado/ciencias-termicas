/**
 * =============================================================================
 * solar-fins-validation.js
 * -----------------------------------------------------------------------------
 * LOTE 3 — Lógica de validación física, espacio remanente y advertencias
 * (warnings) para el disipador de aletas de solar-cell-sim.
 *
 * Continúa LOTE 1 (solar-fin-heatsink-state.js: estado + geometría +
 * validateFinState genérico) y LOTE 2 (solar-fins-controls.*: sliders). Este
 * archivo es PURO (sin DOM) — expone `evaluateFinWarnings(state, options)`,
 * el "hook"/función auxiliar de validación pedido, para que cualquier UI
 * (el renderer de LOTE 3 en solar-fins-status-ui.js, un canvas, o el propio
 * solver) lo consuma sin arrastrar dependencias de `document`.
 *
 * Alcance de este lote:
 *   1. Incompatibilidad geométrica (N·t >= L_base) -> issue crítico con el
 *      texto exacto pedido por el usuario.
 *   2. Criterio de espaciado recomendado (convección natural): rango típico
 *      5-12 mm, o la correlación s_opt = 2.714·L_aleta/Ra^(1/4) cuando se
 *      provee un número de Rayleigh (Ra) opcional -> warning de densidad
 *      excesiva de aletas.
 *   3. Advertencia por eficiencia de aleta baja (η_f < 0.6), calculada con
 *      la fórmula estándar de aleta recta rectangular de longitud
 *      corregida (punta convectiva). Introduce `k` (ya presente en el
 *      estado desde el LOTE 1 pero sin usar) y un coeficiente de
 *      convección `h` — ver nota en DEFAULT_H_CONV_W_M2K.
 *   4. Datos listos para la barra de ocupación de base y el valor de
 *      espacio remanente en mm.
 *
 * Fuera de alcance (deferred, igual que en LOTEs anteriores): acoplar `h`
 * al solver real de solar-cell-sim (`solveSolarCell`/`SOLAR_H_BOTTOM_FINNED`)
 * y el número de Rayleigh a las condiciones ambientales reales de la
 * celda — ambos quedan como parámetros OPCIONALES en `options` para que un
 * LOTE futuro los conecte sin tener que tocar este archivo.
 * =============================================================================
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SolarFinValidation = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function resolveGlobalObject() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    if (typeof global !== 'undefined') return global;
    return null;
  }

  function resolveModel() {
    var g = resolveGlobalObject();
    if (g && g.SolarFinHeatsinkModel) return g.SolarFinHeatsinkModel;
    if (typeof require === 'function') {
      try { return require('./solar-fin-heatsink-state.js'); } catch (e) { /* noop */ }
    }
    return null;
  }

  // ===========================================================================
  // Constantes / umbrales
  // ===========================================================================

  /** Tolerancia de punto flotante para la comparación N·t vs L_base. */
  var GEOM_EPS = 1e-9;

  /**
   * Rango típico recomendado de paso (pitch) entre aletas en convección
   * natural, en milímetros (dato del enunciado). Se usa `MIN` como el
   * umbral duro que dispara la advertencia de "densidad excesiva" (el
   * extremo conservador del rango: por debajo de él, prácticamente
   * cualquier criterio de la literatura coincide en que las capas límite
   * térmicas adyacentes se superponen); `MAX` se expone sólo como
   * información de contexto para la UI, no dispara ninguna advertencia por
   * sí solo (un paso "más ancho de lo recomendado" no es un problema físico,
   * sólo implica menos aletas de las que cabrían).
   */
  var SPACING_MIN_MM_DEFAULT = 5;
  var SPACING_MAX_MM_RECOMMENDED = 12;

  /**
   * Coeficiente de convección por defecto usado ÚNICAMENTE para estimar la
   * eficiencia de aleta (η_f) cuando `options.h` no se especifica. Se
   * reutiliza el valor de la constante `SOLAR_H_BOTTOM_FINNED = 80` W/m²K
   * ya definida en app_v2.js (LOTE_solar_cell_sim_implementacion_completa,
   * "frontera con aletas activas") para que la estimación de η_f sea
   * consistente con el resto del laboratorio en vez de inventar un valor
   * nuevo sin relación con el resto del modelo. Cuando un LOTE futuro
   * acople el disipador al solver real, debe pasarse el `h` efectivo de
   * ese momento vía `options.h` (o `state.h_conv`) en vez de depender de
   * este default.
   */
  var DEFAULT_H_CONV_W_M2K = 80;

  /** Umbral de eficiencia de aleta por debajo del cual se advierte que la
   * aleta es "demasiado delgada o esbelta" (pedido explícito del usuario). */
  var MIN_ACCEPTABLE_FIN_EFFICIENCY = 0.6;

  // ===========================================================================
  // Utilidades numéricas
  // ===========================================================================

  function clamp01(x) {
    if (!isFinite(x)) return 0;
    return Math.max(0, Math.min(1, x));
  }

  /**
   * Correlación de paso óptimo entre aletas para convección natural
   * (forma simplificada pedida por el usuario, equivalente en estructura a
   * la correlación clásica de Bar-Cohen & Rosenhow para el espaciado óptimo
   * de un arreglo de placas/aletas verticales isotérmicas):
   *
   *   s_opt = 2.714 · L_aleta / Ra^(1/4)
   *
   * `Ra` es el número de Rayleigh basado en la longitud de la aleta (no se
   * calcula aquí — requeriría T_s, T_inf y propiedades del fluido, que
   * hoy vive en el solver de `solar-cell-sim`, no en este módulo de
   * geometría/aletas). Si no se provee (o es <= 0 / no finito), la función
   * devuelve `null` y el llamador debe usar el umbral fijo
   * `SPACING_MIN_MM_DEFAULT` en su lugar — no se inventa un Ra por defecto
   * porque eso daría una falsa sensación de precisión física.
   *
   * @param {{L_aleta:number, Ra:number|undefined}} params
   * @returns {number|null} s_opt en metros, o null si Ra no es utilizable.
   */
  function computeOptimalSpacingCorrelation(params) {
    var L = params.L_aleta;
    var Ra = params.Ra;
    if (!isFinite(L) || L <= 0) return null;
    if (!isFinite(Ra) || Ra <= 0) return null;
    return 2.714 * L / Math.pow(Ra, 0.25);
  }

  /**
   * Eficiencia de una aleta recta de sección rectangular, con corrección de
   * longitud por punta convectiva (aproximación estándar — Incropera §3.6.6,
   * "Corrected fin length"): en vez de resolver la punta convectiva exacta,
   * se resuelve la solución de punta adiabática con una longitud aumentada
   * `Lc = L + t/2`, que reproduce la pérdida de calor por la punta con error
   * despreciable para las relaciones t/L típicas de disipadores.
   *
   *   P  = 2·(W + t)                 (perímetro de la sección transversal)
   *   Ac = t·W                       (área de la sección transversal)
   *   m  = sqrt(h·P / (k·Ac))
   *   Lc = L_aleta + t/2
   *   η_f = tanh(m·Lc) / (m·Lc)      (-> 1 cuando m·Lc -> 0, límite correcto)
   *
   * @param {{k:number, t:number, W:number, L_aleta:number, h:number}} params
   * @returns {{m:number, Lc:number, mLc:number, eta_f:number}} `eta_f` es
   *          `NaN` si algún parámetro no es un número finito positivo (el
   *          llamador debe validar esos parámetros por separado — ya lo
   *          hace `validateFinState` del LOTE 1 para k/t/W/L_aleta; `h` se
   *          valida aquí mismo).
   */
  function computeFinEfficiency(params) {
    var k = params.k, t = params.t, W = params.W, L = params.L_aleta, h = params.h;
    var allPositiveFinite = [k, t, W, L, h].every(function (v) {
      return typeof v === 'number' && isFinite(v) && v > 0;
    });
    if (!allPositiveFinite) {
      return { m: NaN, Lc: NaN, mLc: NaN, eta_f: NaN };
    }
    var P = 2 * (W + t);
    var Ac = t * W;
    var m = Math.sqrt((h * P) / (k * Ac));
    var Lc = L + t / 2;
    var mLc = m * Lc;
    var eta_f = mLc === 0 ? 1 : Math.tanh(mLc) / mLc;
    return { m: m, Lc: Lc, mLc: mLc, eta_f: eta_f };
  }

  // ===========================================================================
  // Hook principal de validación
  // ===========================================================================

  /**
   * @typedef {Object} FinWarningIssue
   * @property {'critical'|'warning'} level
   * @property {string} code   Identificador estable (para lógica de UI/tests,
   *                            nunca mostrado al usuario): 'GEOMETRIC_INTERFERENCE',
   *                            'EXCESSIVE_FIN_DENSITY', 'LOW_FIN_EFFICIENCY'.
   * @property {string} es     Mensaje bilingüe en español (texto exacto pedido
   *                            por el usuario para los 2 primeros códigos).
   * @property {string} en     Mensaje bilingüe en inglés.
   * @property {string} [detail] Detalle técnico adicional (números concretos),
   *                            siempre en español — para mostrarse en letra
   *                            pequeña bajo el mensaje principal si la UI
   *                            quiere dar contexto numérico.
   */

  /**
   * Evalúa el estado del disipador de aletas y produce: (a) la lista de
   * problemas críticos/advertencias con el texto exacto pedido por el
   * usuario, (b) los datos de espacio remanente/ocupación para la barra
   * visual, y (c) la eficiencia de aleta estimada.
   *
   * Es una función PURA: no lee ni escribe el DOM, no muta `state`.
   *
   * @param {import('./solar-fin-heatsink-state.js').SolarFinState} state
   * @param {Object} [options]
   * @param {number} [options.h] Coeficiente de convección [W/m²K] para
   *        estimar η_f. Si se omite, usa `state.h_conv` si existe, y si no,
   *        `DEFAULT_H_CONV_W_M2K`.
   * @param {number} [options.Ra] Número de Rayleigh (basado en L_aleta) para
   *        la correlación de paso óptimo. Si se omite o no es válido, se usa
   *        el umbral fijo `SPACING_MIN_MM_DEFAULT`.
   * @returns {{
   *   valid: boolean,
   *   hasCritical: boolean,
   *   hasWarning: boolean,
   *   issues: FinWarningIssue[],
   *   remainingSpaceMm: number,
   *   occupiedPct: number,
   *   remainingPct: number,
   *   finEfficiency: {m:number, Lc:number, mLc:number, eta_f:number},
   *   spacing: {s_mm:number, s_min_recommended_mm:number, s_max_recommended_mm:number, usedCorrelation:boolean, isTooTight:boolean}|null,
   *   geometry: import('./solar-fin-heatsink-state.js').FinGeometryResult|null,
   *   baseValidation: import('./solar-fin-heatsink-state.js').FinStateValidation
   * }}
   */
  function evaluateFinWarnings(state, options) {
    options = options || {};
    var Model = resolveModel();
    if (!Model) {
      throw new Error('evaluateFinWarnings: SolarFinHeatsinkModel no está disponible (cargue solar-fin-heatsink-state.js primero).');
    }

    var baseValidation = Model.validateFinState(state);
    var geometry = baseValidation.valid ? Model.computeFinGeometry(state) : null;

    /** @type {FinWarningIssue[]} */
    var issues = [];

    // --- 1. Interferencia geométrica (crítico) -------------------------------
    // Se recalcula de forma independiente en vez de inspeccionar el texto de
    // baseValidation.errors: dentro de los rangos que impone la UI del LOTE 2
    // (A_celda>0 y W>0 siempre, impuestos por los `min` de los sliders), la
    // condición N·t >= L_base es ALGEBRAICAMENTE EQUIVALENTE a la única otra
    // condición de error que valida Model.validateFinState:
    //     N·t·W >= A_celda   <=>   N·t >= A_celda/W = L_base
    // Es decir, en este contexto "baseValidation.valid === false" y "hay
    // interferencia geométrica" son la misma condición. Se deja esta nota
    // explícita para que una sesión futura no rompa la equivalencia sin
    // darse cuenta si generaliza los rangos de A_celda/W a valores <= 0.
    var L_base = Model.deriveLBase(state.A_celda, state.W);
    var finOccupied = state.N * state.t;
    var hasInterference = isFinite(L_base) && (finOccupied >= L_base - GEOM_EPS);

    if (hasInterference || !baseValidation.valid) {
      issues.push({
        level: 'critical',
        code: 'GEOMETRIC_INTERFERENCE',
        es: 'Interferencia geométrica: el espesor total supera el ancho de la celda.',
        en: 'Geometric interference: total fin thickness exceeds the cell width.',
        detail: baseValidation.errors.length > 0 ? baseValidation.errors.join(' ') : undefined
      });
    }

    // --- 2. Espaciado (sólo tiene sentido si la geometría es válida) --------
    var spacingInfo = null;
    if (geometry && geometry.pitch !== null) {
      var sMeters = geometry.pitch;
      var sMm = sMeters * 1000;
      var sOptMeters = computeOptimalSpacingCorrelation({ L_aleta: state.L_aleta, Ra: options.Ra });
      var usedCorrelation = sOptMeters !== null;
      var sMinMeters = usedCorrelation ? sOptMeters : (SPACING_MIN_MM_DEFAULT / 1000);
      var isTooTight = sMeters < sMinMeters;

      spacingInfo = {
        s_mm: sMm,
        s_min_recommended_mm: sMinMeters * 1000,
        s_max_recommended_mm: SPACING_MAX_MM_RECOMMENDED,
        usedCorrelation: usedCorrelation,
        isTooTight: isTooTight
      };

      if (isTooTight) {
        issues.push({
          level: 'warning',
          code: 'EXCESSIVE_FIN_DENSITY',
          es: 'El número de aletas es excesivo: se estrangula el flujo convectivo y disminuye la eficiencia de disipación.',
          en: 'The number of fins is excessive: convective flow is choked and dissipation efficiency decreases.',
          detail: 'Paso actual s=' + sMm.toFixed(2) + ' mm, por debajo del mínimo recomendado (' +
            spacingInfo.s_min_recommended_mm.toFixed(2) + ' mm' + (usedCorrelation ? ', vía correlación de Ra' : '') + ').'
        });
      }
    }

    // --- 3. Eficiencia de aleta (independiente del ajuste geométrico) -------
    var h = (typeof options.h === 'number' && options.h > 0)
      ? options.h
      : (typeof state.h_conv === 'number' && state.h_conv > 0 ? state.h_conv : DEFAULT_H_CONV_W_M2K);
    var finEfficiency = computeFinEfficiency({ k: state.k, t: state.t, W: state.W, L_aleta: state.L_aleta, h: h });

    if (isFinite(finEfficiency.eta_f) && finEfficiency.eta_f < MIN_ACCEPTABLE_FIN_EFFICIENCY) {
      issues.push({
        level: 'warning',
        code: 'LOW_FIN_EFFICIENCY',
        es: 'Aletas demasiado delgadas o esbeltas: eficiencia térmica reducida (η_f = ' +
          (finEfficiency.eta_f * 100).toFixed(0) + '% < 60%).',
        en: 'Fins too thin or slender: reduced thermal efficiency (η_f = ' +
          (finEfficiency.eta_f * 100).toFixed(0) + '% < 60%).',
        detail: 'Relación L_aleta/t = ' + (state.L_aleta / state.t).toFixed(1) +
          ' (h supuesto = ' + h.toFixed(0) + ' W/m²K).'
      });
    }

    // --- 4. Espacio remanente y ocupación de la base (para la barra) -------
    // Se recalcula de forma directa (no vía `geometry`, que es null cuando
    // el estado es inválido) para que la barra/indicador numérico sigan
    // funcionando incluso en el caso de interferencia — mostrando un
    // remanente negativo real en vez de "—", que es precisamente el dato
    // que ayuda al usuario a entender CUÁNTO se está excediendo.
    var remainingSpaceM = L_base - finOccupied;
    var remainingSpaceMm = remainingSpaceM * 1000;
    var occupiedPct = L_base > 0 ? clamp01(finOccupied / L_base) * 100 : 0;
    var remainingPct = L_base > 0 ? clamp01(remainingSpaceM / L_base) * 100 : 0;

    return {
      valid: baseValidation.valid,
      hasCritical: issues.some(function (i) { return i.level === 'critical'; }),
      hasWarning: issues.some(function (i) { return i.level === 'warning'; }),
      issues: issues,
      remainingSpaceMm: remainingSpaceMm,
      occupiedPct: occupiedPct,
      remainingPct: remainingPct,
      finEfficiency: finEfficiency,
      spacing: spacingInfo,
      geometry: geometry,
      baseValidation: baseValidation
    };
  }

  return {
    SPACING_MIN_MM_DEFAULT: SPACING_MIN_MM_DEFAULT,
    SPACING_MAX_MM_RECOMMENDED: SPACING_MAX_MM_RECOMMENDED,
    DEFAULT_H_CONV_W_M2K: DEFAULT_H_CONV_W_M2K,
    MIN_ACCEPTABLE_FIN_EFFICIENCY: MIN_ACCEPTABLE_FIN_EFFICIENCY,
    computeOptimalSpacingCorrelation: computeOptimalSpacingCorrelation,
    computeFinEfficiency: computeFinEfficiency,
    evaluateFinWarnings: evaluateFinWarnings
  };
}));
