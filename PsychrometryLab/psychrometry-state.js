/* ==========================================================================
   PsychrometryLab — State Module (Batch 1)
   Air-state construction (Estado 1 / Estado 2), process-type registry and
   the initial lab state. Depends only on psychrometry-formulas.js.
   ========================================================================== */

const PsychroState = (function (Formulas) {
    'use strict';

    const PROCESS_TYPES = {
        SENSIBLE: {
            id: 'sensible',
            label: 'Calentamiento / Enfriamiento sensible',
            labelEN: 'Sensible Heating / Cooling'
        },
        DEHUMIDIFICATION: {
            id: 'dehumidification',
            label: 'Deshumidificación',
            labelEN: 'Dehumidification'
        },
        EVAPORATIVE_COOLING: {
            id: 'evaporativeCooling',
            label: 'Enfriamiento evaporativo',
            labelEN: 'Evaporative Cooling'
        },
        COMBINED: {
            id: 'combined',
            label: 'Acondicionamiento de aire combinado',
            labelEN: 'Combined Air Conditioning'
        }
    };

    const PROCESS_ORDER = ['sensible', 'dehumidification', 'evaporativeCooling', 'combined'];

    /**
     * Builds a fully-resolved air state from Tdb plus exactly one secondary
     * property (RH, w, Twb, Tdp or h). Resolves and returns every property.
     * @param {Object} input
     * @param {number} input.Tdb - dry-bulb temperature [degC]
     * @param {number} [input.RH] - relative humidity [%]
     * @param {number} [input.w] - humidity ratio [kg water / kg dry air]
     * @param {number} [input.Twb] - wet-bulb temperature [degC]
     * @param {number} [input.Tdp] - dew-point temperature [degC]
     * @param {number} [input.h] - enthalpy [kJ/kg dry air]
     * @param {number} [input.P] - total pressure [kPa], defaults to sea level
     */
    function createAirState(input) {
        const P = input.P !== undefined ? input.P : Formulas.P_ATM_SEA_LEVEL;
        const Tdb = input.Tdb;
        if (Tdb === undefined || Tdb === null || isNaN(Tdb)) {
            throw new Error('createAirState: Tdb es obligatorio y debe ser numérico');
        }

        let w;
        if (input.RH !== undefined) {
            w = Formulas.wFromRH(Tdb, input.RH, P);
        } else if (input.w !== undefined) {
            w = input.w;
        } else if (input.Twb !== undefined) {
            w = Formulas.wFromWetBulb(Tdb, input.Twb, P);
        } else if (input.Tdp !== undefined) {
            const pw = Formulas.Pws(input.Tdp);
            w = Formulas.wFromPw(pw, P);
        } else if (input.h !== undefined) {
            w = Formulas.wFromEnthalpy(Tdb, input.h);
        } else {
            throw new Error('createAirState: se requiere uno de RH, w, Twb, Tdp o h');
        }

        w = Math.max(w, 0);

        return {
            Tdb: Tdb,
            w: w,
            RH: Formulas.RHFromW(Tdb, w, P),
            Twb: Formulas.wetBulbFromW(Tdb, w, P),
            Tdp: Formulas.dewPointFromPw(Formulas.pwFromW(w, P)),
            h: Formulas.enthalpy(Tdb, w),
            v: Formulas.specificVolume(Tdb, w, P),
            P: P
        };
    }

    /** Default initial lab state: Estado 1 at 25 degC / 50% RH, sea level, proceso sensible. */
    function createInitialLabState() {
        const P = Formulas.P_ATM_SEA_LEVEL;
        return {
            processType: PROCESS_TYPES.SENSIBLE.id,
            P: P,
            state1: createAirState({ Tdb: 25, RH: 50, P: P }),
            state2: null,
            massFlow: { value: 1000, unit: 'm3h' },
            processParams: {}
        };
    }

    return {
        PROCESS_TYPES,
        PROCESS_ORDER,
        createAirState,
        createInitialLabState
    };
})(typeof PsychroFormulas !== 'undefined' ? PsychroFormulas : require('./psychrometry-formulas.js'));

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PsychroState;
}
