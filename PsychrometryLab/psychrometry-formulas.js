/* ==========================================================================
   PsychrometryLab — Formulas Module (Batch 1)
   Pure psychrometric formulas (ASHRAE Fundamentals / Hyland-Wexler
   saturation-pressure correlation). No DOM access, no side effects.
   Self-contained: does not read or modify anything outside this file.
   ========================================================================== */

const PsychroFormulas = (function () {
    'use strict';

    const P_ATM_SEA_LEVEL = 101.325; // kPa

    /**
     * Saturation pressure of water vapor over liquid water [kPa].
     * ASHRAE Fundamentals (Hyland-Wexler correlation), valid 0-200 degC.
     * @param {number} Tdb - dry-bulb temperature [degC]
     */
    function Pws(Tdb) {
        const T = Tdb + 273.15; // K
        const C8 = -5.8002206e3;
        const C9 = 1.3914993;
        const C10 = -4.8640239e-2;
        const C11 = 4.1764768e-5;
        const C12 = -1.4452093e-8;
        const C13 = 6.5459673;
        const lnPws = C8 / T + C9 + C10 * T + C11 * T * T + C12 * T * T * T + C13 * Math.log(T);
        return Math.exp(lnPws) / 1000; // Pa -> kPa
    }

    /** Humidity ratio [kg water / kg dry air] from partial vapor pressure pw [kPa] and total P [kPa]. */
    function wFromPw(pw, P) {
        return 0.621945 * pw / (P - pw);
    }

    /** Partial vapor pressure [kPa] from humidity ratio w and total pressure P [kPa]. */
    function pwFromW(w, P) {
        return P * w / (0.621945 + w);
    }

    /** Humidity ratio at saturation for a given Tdb [degC] and P [kPa]. */
    function wSaturation(Tdb, P) {
        return wFromPw(Pws(Tdb), P);
    }

    /** Relative humidity [%] from Tdb [degC], humidity ratio w and P [kPa]. */
    function RHFromW(Tdb, w, P) {
        const pw = pwFromW(w, P);
        return 100 * pw / Pws(Tdb);
    }

    /** Humidity ratio from Tdb [degC], relative humidity [%] and P [kPa]. */
    function wFromRH(Tdb, RH, P) {
        const pw = (RH / 100) * Pws(Tdb);
        return wFromPw(pw, P);
    }

    /** Moist-air enthalpy [kJ/kg dry air]. Tdb in degC. */
    function enthalpy(Tdb, w) {
        return 1.006 * Tdb + w * (2501 + 1.86 * Tdb);
    }

    /** Humidity ratio solved from Tdb [degC] and enthalpy h [kJ/kg dry air]. */
    function wFromEnthalpy(Tdb, h) {
        return (h - 1.006 * Tdb) / (2501 + 1.86 * Tdb);
    }

    /** Specific volume of moist air [m3/kg dry air]. Tdb in degC, P in kPa. */
    function specificVolume(Tdb, w, P) {
        const T = Tdb + 273.15;
        return 0.287042 * T * (1 + 1.607858 * w) / P;
    }

    /**
     * Dew-point temperature [degC] for a given partial vapor pressure pw [kPa].
     * Solved by bisection on Pws(T) = pw (robust across sub-zero range too).
     */
    function dewPointFromPw(pw) {
        if (pw <= 0) return -100;
        let lo = -60, hi = 90;
        for (let i = 0; i < 60; i++) {
            const mid = (lo + hi) / 2;
            if (Pws(mid) > pw) hi = mid; else lo = mid;
        }
        return (lo + hi) / 2;
    }

    /** Wet-bulb temperature [degC] via bisection on the ASHRAE psychrometric energy balance. */
    function wetBulbFromW(Tdb, w, P) {
        let lo = -60, hi = Tdb;
        for (let i = 0; i < 60; i++) {
            const Twb = (lo + hi) / 2;
            const ws = wSaturation(Twb, P);
            const wCalc = ((2501 - 2.326 * Twb) * ws - 1.006 * (Tdb - Twb)) / (2501 + 1.86 * Tdb - 4.186 * Twb);
            if (wCalc > w) hi = Twb; else lo = Twb;
        }
        return (lo + hi) / 2;
    }

    /** Humidity ratio solved from Tdb [degC] and wet-bulb Twb [degC] (ASHRAE energy balance). */
    function wFromWetBulb(Tdb, Twb, P) {
        const ws = wSaturation(Twb, P);
        return ((2501 - 2.326 * Twb) * ws - 1.006 * (Tdb - Twb)) / (2501 + 1.86 * Tdb - 4.186 * Twb);
    }

    /** Standard atmospheric pressure [kPa] at a given altitude [m] (ISA model). */
    function pressureFromAltitude(altitudeM) {
        return P_ATM_SEA_LEVEL * Math.pow(1 - 2.25577e-5 * altitudeM, 5.2559);
    }

    /** Internal consistency self-test (round-trips + a known reference point). Returns an array of checks. */
    function selfTest() {
        const results = [];
        const P = P_ATM_SEA_LEVEL;

        // Reference point: 25 degC / 50% RH -> h~=50.3 kJ/kg, Twb~=17.9 degC, v~=0.858 m3/kg
        const w1 = wFromRH(25, 50, P);
        const h1 = enthalpy(25, w1);
        const v1 = specificVolume(25, w1, P);
        const twb1 = wetBulbFromW(25, w1, P);
        results.push({ check: '25C/50%RH -> h [kJ/kg]', value: h1.toFixed(2), expected: '~50.3' });
        results.push({ check: '25C/50%RH -> Twb [degC]', value: twb1.toFixed(2), expected: '~17.9' });
        results.push({ check: '25C/50%RH -> v [m3/kg]', value: v1.toFixed(4), expected: '~0.858' });

        const rhBack = RHFromW(25, w1, P);
        results.push({ check: 'RH round-trip [%]', value: rhBack.toFixed(3), expected: '50.000' });

        const wFromTwbBack = wFromWetBulb(25, twb1, P);
        results.push({ check: 'Twb round-trip w', value: wFromTwbBack.toFixed(6), expected: w1.toFixed(6) });

        const pw1 = pwFromW(w1, P);
        const tdp1 = dewPointFromPw(pw1);
        const pwBack = Pws(tdp1);
        results.push({ check: 'Tdp round-trip pw [kPa]', value: pwBack.toFixed(4), expected: pw1.toFixed(4) });

        results.push({ check: 'P @ 1495 m (Medellin) [kPa]', value: pressureFromAltitude(1495).toFixed(2), expected: '~84.3-85' });

        return results;
    }

    return {
        P_ATM_SEA_LEVEL,
        Pws,
        wFromPw,
        pwFromW,
        wSaturation,
        RHFromW,
        wFromRH,
        enthalpy,
        wFromEnthalpy,
        specificVolume,
        dewPointFromPw,
        wetBulbFromW,
        wFromWetBulb,
        pressureFromAltitude,
        selfTest
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PsychroFormulas;
}
