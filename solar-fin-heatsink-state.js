/**
 * =============================================================================
 * solar-fin-heatsink-state.js
 * -----------------------------------------------------------------------------
 * Módulo de ESTADO y CÁLCULO GEOMÉTRICO/TÉRMICO para el disipador de aletas
 * (heat sink) que se añade a la cara posterior de la celda solar en el
 * laboratorio virtual "Celda Solar Fotovoltaica" (solar-cell-sim).
 *
 * Alcance de este lote (deliberadamente acotado):
 *   1. Estructura de estado tipada (JSDoc) con valores iniciales y rangos
 *      típicos para: A_celda (vía L_base/W), N, k, L_aleta, t.
 *   2. Función pura de cálculo geométrico/térmico: L_base, N*t, espacio
 *      remanente, paso (pitch) entre aletas, y área de disipación extendida.
 *   3. Validaciones matemáticas (N=1 sin división por cero, aletas que no
 *      caben en la base, parámetros no positivos) y función pura de
 *      actualización de estado.
 *
 * Fuera de alcance de este lote (queda para un LOTE posterior, siguiendo el
 * mismo patrón usado en el resto del sitio, p.ej. computeFinLinearParams en
 * multicapa-custom-sim): eficiencia de aleta (η_f), resistencia térmica
 * equivalente (R_unfin ∥ R_fins) y su acoplamiento con solveSolarCell(). El
 * parámetro `k` (conductividad del material de la aleta) ya se incluye en el
 * estado porque ese cálculo térmico lo necesitará, pero en este lote NO se
 * usa todavía (se deja documentado explícitamente para que no se lea como
 * un descuido en una sesión futura).
 *
 * Convención de nombres: se preservan literalmente los identificadores
 * pedidos por el usuario (A_celda, L_base, W, N, k, L_aleta, t,
 * Espacio_remanente, s) para que el mapeo enunciado -> código sea directo.
 *
 * Compatible con:
 *   - <script> plano en el navegador -> expone `window.SolarFinHeatsinkModel`
 *   - CommonJS (Node/tests)          -> module.exports
 *   - ES Modules                     -> import { ... } from '...'
 * =============================================================================
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    // CommonJS (Node, harness de pruebas, bundlers)
    module.exports = factory();
  } else {
    // Navegador: <script src="solar-fin-heatsink-state.js"></script>
    root.SolarFinHeatsinkModel = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ===========================================================================
  // 1. TIPOS (JSDoc) — sirven como documentación y para editores/TS con
  //    "checkJs" (no requieren un paso de compilación TypeScript).
  // ===========================================================================

  /**
   * Estado de entrada del disipador de aletas. Es el ÚNICO objeto que debe
   * vivir en la UI (sliders/inputs) y pasarse a las funciones de este módulo.
   *
   * Invariante que el módulo mantiene siempre: `L_base * W === A_celda`
   * (dentro de tolerancia de punto flotante). `A_celda` y `W` son las
   * variables independientes; `L_base` se deriva y se recalcula en cada
   * actualización — ver `updateFinState`.
   *
   * @typedef {Object} SolarFinState
   * @property {number} A_celda  Área de la celda solar [m²]. Debe coincidir
   *                              con el área usada en solveSolarCell() si se
   *                              integra en un lote posterior.
   * @property {number} W        Ancho/profundidad de la celda [m] (la
   *                              dimensión perpendicular a L_base, a lo largo
   *                              de la cual se extiende cada aleta).
   * @property {number} L_base   Longitud de la base sobre la que se
   *                              distribuyen las aletas [m]. DERIVADA:
   *                              L_base = A_celda / W. Se guarda en el
   *                              estado por conveniencia (p.ej. para pintarla
   *                              sin recalcular), pero la fuente de verdad es
   *                              siempre A_celda/W — nunca se edita a mano.
   * @property {number} N        Número de aletas. Entero >= 1.
   * @property {number} k        Conductividad térmica del material de la
   *                              aleta [W/(m·K)]. Reservado para el cálculo
   *                              térmico (eficiencia/resistencia) de un lote
   *                              posterior; no se usa en computeFinGeometry.
   * @property {number} L_aleta  Longitud/altura de cada aleta [m], medida
   *                              perpendicular a la base (dirección en la que
   *                              la aleta se proyecta hacia el aire).
   * @property {number} t        Espesor de cada aleta [m].
   * @property {boolean} [includeTip=true] Si es true, el área de disipación
   *                              de cada aleta incluye la cara de la punta
   *                              (t·W); si es false, se asume punta adiabática
   *                              / área de punta despreciable (convención
   *                              clásica de "aleta con punta aislada").
   */

  /**
   * Rango típico de un parámetro de entrada, usado para poblar sliders y
   * para clamping/validación suave en la UI.
   * @typedef {Object} ParamRange
   * @property {number} min
   * @property {number} max
   * @property {number} step
   * @property {number} default
   * @property {string} unit
   */

  /**
   * Resultado de la validación de un SolarFinState.
   * @typedef {Object} FinStateValidation
   * @property {boolean} valid   true si el estado es físicamente coherente
   *                              y todos los cálculos de computeFinGeometry
   *                              son seguros (sin NaN/Infinity).
   * @property {string[]} errors   Mensajes bloqueantes (impiden el cálculo).
   * @property {string[]} warnings Mensajes no bloqueantes (p.ej. N=1).
   */

  /**
   * Salida pura de computeFinGeometry(state).
   * @typedef {Object} FinGeometryResult
   * @property {number} L_base              Longitud de base [m] (=A_celda/W).
   * @property {number} W                    Ancho/profundidad [m] (pass-through).
   * @property {number} N                    Número de aletas (pass-through).
   * @property {number} t                    Espesor de cada aleta [m] (pass-through).
   * @property {number} finOccupiedSpace     Espacio total ocupado por las
   *                                          aletas a lo largo de L_base: N·t [m].
   * @property {number} remainingSpace       Espacio remanente disponible entre
   *                                          aletas: L_base - N·t [m]. Puede ser
   *                                          negativo si las aletas no caben —
   *                                          ver `valid`/`errors` en su lugar de
   *                                          usar este valor a ciegas.
   * @property {number|null} pitch           Paso/espaciado entre aletas
   *                                          adyacentes, centro a centro de
   *                                          espacio libre: (L_base - N·t)/(N-1)
   *                                          [m]. `null` cuando N=1 (no hay
   *                                          "aleta adyacente" — evita división
   *                                          por cero explícitamente, no NaN).
   * @property {number} finUnitArea          Área de disipación de UNA aleta,
   *                                          incluyendo ambas caras laterales
   *                                          y (si includeTip) la punta [m²].
   * @property {number} finsTotalArea        Área de disipación de las N
   *                                          aletas: N · finUnitArea [m²].
   * @property {number} baseExposedArea      Área de la base de la celda NO
   *                                          cubierta por la raíz de las
   *                                          aletas: A_celda - N·(t·W) [m²].
   * @property {number} extendedTotalArea    Área de disipación total
   *                                          extendida: baseExposedArea +
   *                                          finsTotalArea [m²].
   * @property {number} rootFootprintArea    N·(t·W): área de base cubierta
   *                                          por las raíces de las N aletas [m²].
   * @property {number} areaEnhancementRatio extendedTotalArea / A_celda
   *                                          (cuántas veces se multiplicó el
   *                                          área de disipación respecto a la
   *                                          celda plana sin aletas).
   */

  // ===========================================================================
  // 2. RANGOS TÍPICOS Y VALORES INICIALES
  // ===========================================================================

  /**
   * Rangos típicos para sliders/inputs de UI. Los valores de A_celda/W dejan
   * L_base=1.0 m por defecto (celda cuadrada de 1 m² — mismo valor que la
   * constante `SOLAR_AREA_M2` ya usada en solar-cell-sim, ver
   * LOTE_solar_cell_sim_implementacion_completa). N, k, L_aleta y t usan
   * valores típicos de disipadores de aluminio/cobre a escala de electrónica.
   *
   * @type {Record<'A_celda'|'W'|'N'|'k'|'L_aleta'|'t', ParamRange>}
   */
  var FIN_PARAM_RANGES = {
    A_celda: { min: 0.01, max: 4.0, step: 0.01, default: 1.0, unit: 'm²' },
    W: { min: 0.05, max: 2.0, step: 0.01, default: 1.0, unit: 'm' },
    N: { min: 1, max: 60, step: 1, default: 10, unit: 'aletas' },
    // Conductividades de referencia: acero ~15-50, aluminio ~205, cobre ~385 W/m·K
    k: { min: 15, max: 400, step: 1, default: 205, unit: 'W/(m·K)' },
    L_aleta: { min: 0.005, max: 0.15, step: 0.001, default: 0.03, unit: 'm' },
    t: { min: 0.0005, max: 0.01, step: 0.0001, default: 0.002, unit: 'm' }
  };

  /** Tolerancia de punto flotante para comparaciones geométricas. */
  var EPSILON = 1e-9;

  /**
   * Coeficiente de convección [W/(m²K)] usado como penalización de
   * `h_eff_bottom` cuando la geometría del disipador es físicamente
   * inválida (interferencia N·t >= L_base) o el `h_conv` recibido no es
   * utilizable. Representa una convección natural DEFICIENTE sobre una
   * base plana sin aletas funcionales (valor típico bajo de convección
   * natural en aire quieto, Incropera Tabla 1.1: 2-25 W/m²K) — nunca 0
   * (0 implicaría adiabático, una afirmación física más fuerte de la que
   * se puede hacer aquí: la base sigue expuesta al ambiente, sólo que sin
   * el realce de área que aportarían las aletas).
   */
  var NATURAL_CONVECTION_FALLBACK_H_W_M2K = 5;

  // ===========================================================================
  // 3. ESTADO INICIAL
  // ===========================================================================

  /**
   * Construye un SolarFinState inicial a partir de los valores por defecto
   * de FIN_PARAM_RANGES, con L_base derivada correctamente. Acepta overrides
   * parciales (p.ej. para arrancar con el A_celda real de la celda ya
   * configurada en solar-cell-sim).
   *
   * @param {Partial<SolarFinState>} [overrides]
   * @returns {SolarFinState}
   */
  function createInitialFinState(overrides) {
    var base = {
      A_celda: FIN_PARAM_RANGES.A_celda.default,
      W: FIN_PARAM_RANGES.W.default,
      N: FIN_PARAM_RANGES.N.default,
      k: FIN_PARAM_RANGES.k.default,
      L_aleta: FIN_PARAM_RANGES.L_aleta.default,
      t: FIN_PARAM_RANGES.t.default,
      includeTip: true
    };
    var merged = Object.assign({}, base, overrides || {});
    merged.L_base = deriveLBase(merged.A_celda, merged.W);
    return merged;
  }

  /**
   * L_base = A_celda / W. Aislada en su propia función porque es la relación
   * que ata el estado (se usa tanto al crear el estado inicial como en cada
   * actualización pura, y así queda un único lugar que puede fallar con W<=0).
   *
   * @param {number} A_celda
   * @param {number} W
   * @returns {number} L_base en metros. `NaN` si W<=0 (el llamador debe
   *                    validar con validateFinState antes de confiar en este
   *                    valor para cálculos posteriores).
   */
  function deriveLBase(A_celda, W) {
    if (!isFinite(W) || W <= 0) return NaN;
    return A_celda / W;
  }

  // ===========================================================================
  // 4. VALIDACIÓN
  // ===========================================================================

  /**
   * Valida un SolarFinState. No lanza excepciones: devuelve una lista de
   * errores bloqueantes y warnings informativos para que la UI decida cómo
   * mostrarlos (p.ej. borde rojo en el input vs. nota amarilla).
   *
   * @param {SolarFinState} state
   * @returns {FinStateValidation}
   */
  function validateFinState(state) {
    /** @type {string[]} */
    var errors = [];
    /** @type {string[]} */
    var warnings = [];

    if (!state || typeof state !== 'object') {
      return { valid: false, errors: ['Estado inválido: se esperaba un objeto SolarFinState.'], warnings: [] };
    }

    if (!isFinite(state.A_celda) || state.A_celda <= 0) {
      errors.push('A_celda debe ser un número positivo (área de la celda solar en m²).');
    }
    if (!isFinite(state.W) || state.W <= 0) {
      errors.push('W (ancho/profundidad de la celda) debe ser un número positivo en metros.');
    }
    if (!isFinite(state.N) || state.N < 1 || Math.floor(state.N) !== state.N) {
      errors.push('N (número de aletas) debe ser un entero >= 1.');
    }
    if (!isFinite(state.k) || state.k <= 0) {
      errors.push('k (conductividad térmica de la aleta) debe ser un número positivo en W/(m·K).');
    }
    if (!isFinite(state.L_aleta) || state.L_aleta <= 0) {
      errors.push('L_aleta (longitud/altura de la aleta) debe ser un número positivo en metros.');
    }
    if (!isFinite(state.t) || state.t <= 0) {
      errors.push('t (espesor de la aleta) debe ser un número positivo en metros.');
    }

    // Sólo tiene sentido seguir validando la geometría compuesta si los
    // parámetros base ya son individualmente válidos.
    if (errors.length === 0) {
      var L_base = deriveLBase(state.A_celda, state.W);
      var occupied = state.N * state.t;

      if (occupied >= L_base - EPSILON) {
        errors.push(
          'Las ' + state.N + ' aletas de espesor t=' + state.t + ' m no caben en L_base=' +
          L_base.toFixed(4) + ' m (N·t=' + occupied.toFixed(4) +
          ' m >= L_base). Reduzca N o t, o aumente A_celda/reduzca W.'
        );
      }

      if (state.N === 1) {
        warnings.push('N=1: no existe "aleta adyacente", por lo que el paso (pitch) no está definido (se reporta como null).');
      }

      var rootFootprint = state.N * state.t * state.W;
      if (rootFootprint >= state.A_celda - EPSILON) {
        errors.push('El área de raíz de las aletas (N·t·W=' + rootFootprint.toFixed(4) +
          ' m²) es mayor o igual al área de la celda (A_celda=' + state.A_celda + ' m²).');
      }
    }

    return { valid: errors.length === 0, errors: errors, warnings: warnings };
  }

  // ===========================================================================
  // 5. CÁLCULO GEOMÉTRICO Y TÉRMICO (función pura)
  // ===========================================================================

  /**
   * Calcula la geometría del arreglo de aletas y el área de disipación total
   * extendida a partir de un SolarFinState. Función PURA: no lee ni escribe
   * el DOM, no muta `state`, y para la misma entrada siempre da la misma
   * salida.
   *
   * Debe llamarse únicamente sobre un estado válido — se recomienda:
   *   var check = validateFinState(state);
   *   if (!check.valid) { ...mostrar check.errors...; return; }
   *   var geo = computeFinGeometry(state);
   *
   * Si se llama con un estado inválido igualmente NO lanza excepción (evita
   * romper un frame de animación por un slider a medio arrastrar): devuelve
   * los campos que sí pudo calcular y dispara NaN en los que dependen de la
   * condición violada, dejando la responsabilidad de decidir qué hacer con
   * eso a quien la invoque (por eso se recomienda validar antes).
   *
   * @param {SolarFinState} state
   * @returns {FinGeometryResult}
   */
  function computeFinGeometry(state) {
    var A_celda = state.A_celda;
    var W = state.W;
    var N = state.N;
    var t = state.t;
    var L_aleta = state.L_aleta;
    var includeTip = state.includeTip !== false; // default true

    var L_base = deriveLBase(A_celda, W);

    // --- Espacio ocupado y remanente a lo largo de L_base ---------------------
    var finOccupiedSpace = N * t; // N * t
    var remainingSpace = L_base - finOccupiedSpace; // Espacio_remanente = L_base - (N * t)

    // --- Paso / espaciado entre aletas adyacentes (pitch) ---------------------
    // s = (L_base - N*t) / (N - 1), definido sólo para N > 1. Con N=1 no hay
    // "aleta adyacente": se devuelve null explícitamente en vez de dividir
    // por (N-1)=0 (evita división por cero / Infinity / NaN silencioso).
    var pitch = null;
    if (N > 1) {
      pitch = remainingSpace / (N - 1);
    }

    // --- Área de disipación de una aleta rectangular ---------------------------
    // Aleta recta de sección rectangular: se proyecta L_aleta desde la base,
    // con espesor t y profundidad W (misma profundidad que la celda). Se
    // consideran las dos caras laterales (2 * L_aleta * W) más, si
    // includeTip=true, la cara de la punta (t * W) — convención estándar de
    // "aleta con punta convectiva/no aislada" (p.ej. Incropera, cap. 3).
    var lateralArea = 2 * L_aleta * W;
    var tipArea = includeTip ? (t * W) : 0;
    var finUnitArea = lateralArea + tipArea;
    var finsTotalArea = N * finUnitArea;

    // --- Área de base expuesta (no cubierta por la raíz de las aletas) --------
    var rootFootprintArea = N * t * W;
    var baseExposedArea = A_celda - rootFootprintArea;

    // --- Área de disipación total extendida ------------------------------------
    var extendedTotalArea = baseExposedArea + finsTotalArea;
    var areaEnhancementRatio = A_celda > 0 ? (extendedTotalArea / A_celda) : NaN;

    return {
      L_base: L_base,
      W: W,
      N: N,
      t: t,
      finOccupiedSpace: finOccupiedSpace,
      remainingSpace: remainingSpace,
      pitch: pitch,
      finUnitArea: finUnitArea,
      finsTotalArea: finsTotalArea,
      baseExposedArea: baseExposedArea,
      extendedTotalArea: extendedTotalArea,
      rootFootprintArea: rootFootprintArea,
      areaEnhancementRatio: areaEnhancementRatio
    };
  }

  // ===========================================================================
  // 5b. RESISTENCIA TÉRMICA EQUIVALENTE (INTEGRACIÓN REAL AL SOLVER)
  // ===========================================================================

  /**
   * Resultado de {@link computeFinThermalResistance}.
   * @typedef {Object} FinThermalResult
   * @property {boolean} blocked  true si no existe geometría físicamente
   *           válida (interferencia N·t>=L_base) o `hConv` no es utilizable
   *           — en ese caso todos los campos numéricos salvo
   *           `h_eff_bottom` son `NaN`, y `h_eff_bottom` queda en
   *           `NATURAL_CONVECTION_FALLBACK_H_W_M2K`.
   * @property {string|null} reason Motivo del bloqueo (null si !blocked).
   * @property {number} m        Parámetro de aleta [1/m].
   * @property {number} L_c      Longitud corregida (punta convectiva) [m].
   * @property {number} eta_f    Eficiencia de UNA aleta (0-1).
   * @property {number} A_f      Área de disipación de UNA aleta [m²].
   * @property {number} A_b      Área de base expuesta (sin raíces) [m²].
   * @property {number} A_total  Área total extendida (N·A_f + A_b) [m²].
   * @property {number} eta_o    Eficiencia global del arreglo (0-1).
   * @property {number} R_fins   Resistencia térmica equivalente [K/W].
   * @property {number} h_eff_bottom Coeficiente convectivo equivalente
   *           referido al área de la celda (A_celda), listo para
   *           reemplazar cualquier constante estática de frontera inferior
   *           en `solveSolarCell()` [W/(m²K)].
   */

  /**
   * Resistencia térmica equivalente de la superficie aleteada de la base
   * (frontera posterior de la celda) y su coeficiente convectivo
   * equivalente referido al área total de la celda — pieza que faltaba
   * para acoplar este módulo (LOTE 1, sólo geometría) al balance de
   * energía REAL de `solveSolarCell()` en app_v2.js (reemplaza la
   * constante estática `SOLAR_H_BOTTOM_FINNED`).
   *
   * Aleta rectangular longitudinal DELGADA (t << W): se usa la
   * aproximación clásica de perímetro P ≈ 2·W (se desprecian los dos
   * bordes de espesor `t` frente a `W`), consistente con el enunciado
   * ("aleta rectangular longitudinal delgada") y con la fórmula de `m`
   * pedida explícitamente:
   *
   *   m       = sqrt(2·h_conv / (k·t))
   *   L_c     = L_aleta + t/2                    (longitud corregida, punta convectiva)
   *   eta_f   = tanh(m·L_c) / (m·L_c)
   *   A_f     = 2·W·L_c                           (área de UNA aleta, ambas caras)
   *   A_b     = A_celda − N·t·W                    (base expuesta, sin la huella de las raíces)
   *   A_total = N·A_f + A_b
   *   eta_o   = 1 − (N·A_f / A_total)·(1 − eta_f)  (eficiencia global del arreglo)
   *   R_fins  = 1 / (eta_o·h_conv·A_total)
   *   h_eff_bottom = 1 / (R_fins·A_celda) = eta_o·h_conv·A_total / A_celda
   *
   * Nota: esta A_f (2·W·L_c) y este `m` (perímetro≈2W) son deliberadamente
   * distintos de `finUnitArea`/`computeFinEfficiency` usados por
   * `computeFinGeometry`/`evaluateFinWarnings` (que sí incluyen el área de
   * punta y el perímetro completo 2·(W+t)): éstos son los que el usuario
   * pidió explícitamente para el ACOPLAMIENTO al solver, mientras que los
   * otros alimentan únicamente el indicador de advertencia de η_f y el
   * dibujo del visualizador. Ambos son aproximaciones válidas de la misma
   * física (la diferencia es de tercer orden en t/W); no se unifican para
   * no alterar el comportamiento ya verificado de los LOTEs anteriores.
   *
   * Interferencia geométrica (N·t >= L_base, la MISMA condición que ya
   * bloquea `validateFinState`): no existe una base expuesta físicamente
   * válida (A_b <= 0), así que se reporta `blocked:true` y se penaliza
   * `h_eff_bottom` a `NATURAL_CONVECTION_FALLBACK_H_W_M2K` en vez de
   * calcular con una geometría inválida.
   *
   * Función PURA: no lee ni escribe el DOM, no muta `state`.
   *
   * @param {SolarFinState} state
   * @param {number} hConv Coeficiente de convección [W/(m²K)] que baña
   *        tanto las aletas como la base expuesta (convección
   *        natural/forzada del ambiente que rodea el disipador).
   * @returns {FinThermalResult}
   */
  function computeFinThermalResistance(state, hConv) {
    var baseValidation = validateFinState(state);
    var hConvValid = typeof hConv === 'number' && isFinite(hConv) && hConv > 0;

    if (!baseValidation.valid || !hConvValid) {
      return {
        blocked: true,
        reason: !baseValidation.valid
          ? ('Interferencia geométrica (N·t >= L_base): ' + baseValidation.errors.join(' '))
          : ('h_conv inválido para el cálculo térmico del disipador: ' + hConv + ' W/(m²K).'),
        m: NaN, L_c: NaN, eta_f: NaN, A_f: NaN, A_b: NaN, A_total: NaN, eta_o: NaN,
        R_fins: NaN,
        h_eff_bottom: NATURAL_CONVECTION_FALLBACK_H_W_M2K
      };
    }

    var A_celda = state.A_celda, N = state.N, k = state.k, t = state.t,
      W = state.W, L_aleta = state.L_aleta;

    var m = Math.sqrt((2 * hConv) / (k * t));
    var L_c = L_aleta + t / 2;
    var mLc = m * L_c;
    var eta_f = mLc === 0 ? 1 : Math.tanh(mLc) / mLc;

    var A_f = 2 * W * L_c;
    var A_b = A_celda - (N * t * W);
    var A_total = (N * A_f) + A_b;
    var eta_o = 1 - ((N * A_f) / A_total) * (1 - eta_f);
    var R_fins = 1 / (eta_o * hConv * A_total);
    var h_eff_bottom = 1 / (R_fins * A_celda);

    return {
      blocked: false,
      reason: null,
      m: m,
      L_c: L_c,
      eta_f: eta_f,
      A_f: A_f,
      A_b: A_b,
      A_total: A_total,
      eta_o: eta_o,
      R_fins: R_fins,
      h_eff_bottom: h_eff_bottom
    };
  }

  // ===========================================================================
  // 6. ACTUALIZACIÓN PURA DE ESTADO
  // ===========================================================================

  /**
   * Actualiza el estado de forma inmutable: devuelve un SolarFinState NUEVO
   * (nunca muta `prevState`) con `patch` aplicado y L_base re-derivada de
   * A_celda/W para mantener siempre el invariante L_base*W=A_celda —
   * incluyendo el caso en que el propio `patch` cambie A_celda o W.
   *
   * Este es el único punto de entrada recomendado para que la UI (listeners
   * de sliders/inputs) modifique el estado, siguiendo el mismo patrón de
   * "estado inmutable + función de reducción pura" ya usado en otros
   * laboratorios del sitio para los solvers (p.ej. solveSolarCell(state)
   * recibe y no muta su `state`).
   *
   * @param {SolarFinState} prevState
   * @param {Partial<SolarFinState>} patch  Campos a cambiar. No incluir
   *                                         `L_base` aquí — se ignora
   *                                         cualquier `patch.L_base` porque
   *                                         es siempre derivada.
   * @returns {SolarFinState} Nuevo estado con L_base recalculada.
   */
  function updateFinState(prevState, patch) {
    var next = Object.assign({}, prevState, patch || {});
    // L_base nunca se acepta como entrada directa: siempre se deriva, para
    // que sea imposible dejar el estado en una configuración que rompa el
    // invariante L_base*W=A_celda (p.ej. si alguien pasara {L_base: 5} sin
    // tocar A_celda/W).
    next.L_base = deriveLBase(next.A_celda, next.W);
    return next;
  }

  // ===========================================================================
  // 7. EXPORTS
  // ===========================================================================

  return {
    FIN_PARAM_RANGES: FIN_PARAM_RANGES,
    NATURAL_CONVECTION_FALLBACK_H_W_M2K: NATURAL_CONVECTION_FALLBACK_H_W_M2K,
    createInitialFinState: createInitialFinState,
    validateFinState: validateFinState,
    computeFinGeometry: computeFinGeometry,
    computeFinThermalResistance: computeFinThermalResistance,
    updateFinState: updateFinState,
    // Se expone también por si algún lote futuro (cálculo térmico con `k`)
    // necesita re-derivar L_base de forma aislada.
    deriveLBase: deriveLBase
  };

}));
