/* ==========================================================================
   PsychrometryLab — Processes Module (Batch 1)
   The 4 psychrometric processes plus energy/water balances and air-flow
   unit conversion. Depends on psychrometry-formulas.js and
   psychrometry-state.js.
   ========================================================================== */

const PsychroProcesses = (function (Formulas, State) {
    'use strict';

    /**
     * Converts an input air-flow (any common unit) to dry-air mass flow [kg/s].
     * @param {number} value - flow magnitude
     * @param {string} unit - 'kgs' | 'kgh' | 'm3s' | 'm3h' | 'ls' | 'cfm'
     * @param {Object} state1 - resolved air state used for its specific volume v [m3/kg]
     */
    function toMassFlowDryAir(value, unit, state1) {
        const v1 = state1.v; // m3/kg dry air
        switch (unit) {
            case 'kgs': return value;
            case 'kgh': return value / 3600;
            case 'm3s': return value / v1;
            case 'm3h': return (value / 3600) / v1;
            case 'ls': return (value / 1000) / v1;
            case 'cfm': return (value * 0.028316846592 / 60) / v1;
            default: throw new Error('Unidad de caudal no soportada: ' + unit);
        }
    }

    /** Energy and water balance between two resolved air states, for a given dry-air mass flow [kg/s]. */
    function energyAndWaterBalance(state1, state2, mDryAir) {
        const deltaH = state2.h - state1.h; // kJ/kg dry air
        const Q_kW = mDryAir * deltaH; // kJ/s = kW (negative = heat removed)

        const deltaW = state2.w - state1.w; // kg water / kg dry air
        const waterRate_kgh = mDryAir * deltaW * 3600; // kg/h (+ = humidifica, - = deshumidifica/condensa)

        // Sensible/latent split (ASHRAE approximation using moist specific heat of state 1).
        const cpMoist1 = 1.006 + 1.86 * state1.w;
        const Qs_kW = mDryAir * cpMoist1 * (state2.Tdb - state1.Tdb);
        const Ql_kW = Q_kW - Qs_kW;
        const SHR = Q_kW !== 0 ? Qs_kW / Q_kW : null;

        return {
            deltaH: deltaH,
            Q_kW: Q_kW,
            Qs_kW: Qs_kW,
            Ql_kW: Ql_kW,
            SHR: SHR,
            deltaW: deltaW,
            waterRate_kgh: waterRate_kgh,
            condensateRate_kgh: waterRate_kgh < 0 ? -waterRate_kgh : 0,
            humidificationRate_kgh: waterRate_kgh > 0 ? waterRate_kgh : 0,
            mDryAir_kgs: mDryAir
        };
    }

    /** a) Sensible heating/cooling: humidity ratio constant, Tdb moves to target. */
    function sensibleProcess(state1, params) {
        const state2 = State.createAirState({ Tdb: params.Tdb2, w: state1.w, P: state1.P });
        return { state1, state2, balance: energyAndWaterBalance(state1, state2, params.mDryAir) };
    }

    /**
     * b) Dehumidification: air is driven toward the coil's apparatus dew point
     * (Tadp) with a bypass factor (0 = full contact, 1 = no contact), then
     * optionally reheated at constant humidity ratio.
     */
    function dehumidificationProcess(state1, params) {
        const Tadp = params.Tadp;
        const bypassFactor = params.bypassFactor !== undefined ? params.bypassFactor : 0;
        const wSatAdp = Formulas.wSaturation(Tadp, state1.P);

        const Tdb_leave = Tadp + bypassFactor * (state1.Tdb - Tadp);
        const w_leave = Math.max(wSatAdp + bypassFactor * (state1.w - wSatAdp), 0);
        let state2 = State.createAirState({ Tdb: Tdb_leave, w: w_leave, P: state1.P });

        if (params.reheat && params.reheatTdb !== undefined) {
            state2 = State.createAirState({ Tdb: params.reheatTdb, w: state2.w, P: state1.P });
        }

        return { state1, state2, balance: energyAndWaterBalance(state1, state2, params.mDryAir) };
    }

    /**
     * c) Evaporative cooling: adiabatic saturation process approximated along
     * the constant wet-bulb line, scaled by a saturation effectiveness (0-1).
     */
    function evaporativeCoolingProcess(state1, params) {
        const effectiveness = params.effectiveness !== undefined ? params.effectiveness : 0.8;
        const Twb1 = state1.Twb;
        const Tdb2 = state1.Tdb - effectiveness * (state1.Tdb - Twb1);
        const w2 = Formulas.wFromWetBulb(Tdb2, Twb1, state1.P);
        const state2 = State.createAirState({ Tdb: Tdb2, w: w2, P: state1.P });
        return { state1, state2, balance: energyAndWaterBalance(state1, state2, params.mDryAir) };
    }

    /**
     * d) Combined air conditioning: Tdb2 target plus an explicit moisture
     * target (RH2 or w2) — lets the user place Estado 2 anywhere on the chart.
     */
    function combinedProcess(state1, params) {
        const Tdb2 = params.Tdb2;
        let w2;
        if (params.RH2 !== undefined) {
            w2 = Formulas.wFromRH(Tdb2, params.RH2, state1.P);
        } else if (params.w2 !== undefined) {
            w2 = params.w2;
        } else {
            w2 = state1.w;
        }
        const state2 = State.createAirState({ Tdb: Tdb2, w: w2, P: state1.P });
        return { state1, state2, balance: energyAndWaterBalance(state1, state2, params.mDryAir) };
    }

    const PROCESS_FUNCTIONS = {
        sensible: sensibleProcess,
        dehumidification: dehumidificationProcess,
        evaporativeCooling: evaporativeCoolingProcess,
        combined: combinedProcess
    };

    function runProcess(processId, state1, params) {
        const fn = PROCESS_FUNCTIONS[processId];
        if (!fn) throw new Error('Proceso desconocido: ' + processId);
        return fn(state1, params);
    }

    return {
        toMassFlowDryAir,
        energyAndWaterBalance,
        sensibleProcess,
        dehumidificationProcess,
        evaporativeCoolingProcess,
        combinedProcess,
        PROCESS_FUNCTIONS,
        runProcess
    };
})(
    typeof PsychroFormulas !== 'undefined' ? PsychroFormulas : require('./psychrometry-formulas.js'),
    typeof PsychroState !== 'undefined' ? PsychroState : require('./psychrometry-state.js')
);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PsychroProcesses;
}
