/* ==========================================================================
   Pure Substance Lab: Water Properties (IAPWS-IF97)
   Self-contained module: engine (Regions 1, 2, 4) + saturation dome + UI.
   Coefficients per IAPWS R7-97(2012), validated against the official
   worked examples in the standard.
   ========================================================================== */

const IAPWS = (function () {
    'use strict';

    const R = 0.461526; // kJ/kg-K
    const Tc = 647.096; // K
    const Pc = 22.064;  // MPa
    const rhoc = 322.0; // kg/m3
    const vc = 1 / rhoc;
    // Critical enthalpy/entropy per IAPWS supplementary boundary equations
    const hc = 2087.5468451171537; // kJ/kg
    const sc = 4.41202148223476;   // kJ/kg-K
    const uc = hc - Pc * 1000 * vc;

    const Ps623 = 16.5291642526; // MPa - Psat(623.15K), Region1/3 boundary
    const T623 = 623.15;         // K
    const Ptriple = 611.657e-6;  // MPa
    const Ttriple = 273.16;      // K

    // ---- Region 1 (compressed / subcooled liquid) — IAPWS Table 2 ----
    const R1_I = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 8, 8, 21, 23, 29, 30, 31, 32];
    const R1_J = [-2, -1, 0, 1, 2, 3, 4, 5, -9, -7, -1, 0, 1, 3, -3, 0, 1, 3, 17, -4, 0, 6, -5, -2, 10, -8, -11, -6, -29, -31, -38, -39, -40, -41];
    const R1_n = [
        0.14632971213167, -0.84548187169114, -3.756360367204, 0.33855169168385e1,
        -0.95791963387872, 0.15772038513228, -0.16616417199501e-1, 0.81214629983568e-3,
        0.28319080123804e-3, -0.60706301565874e-3, -0.18990068218419e-1, -0.32529748770505e-1,
        -0.21841717175414e-1, -0.52838357969930e-4, -0.47184321073267e-3, -0.30001780793026e-3,
        0.47661393906987e-4, -0.44141845330846e-5, -0.72694996297594e-15, -0.31679644845054e-4,
        -0.28270797985312e-5, -0.85205128120103e-9, -0.22425281908000e-5, -0.65171222895601e-6,
        -0.14341729937924e-12, -0.40516996860117e-6, -0.12734301741641e-8, -0.17424871230634e-9,
        -0.68762131295531e-18, 0.14478307828521e-19, 0.26335781662795e-22, -0.11947622640071e-22,
        0.18228094581404e-23, -0.93537087292458e-25
    ];

    // ---- Region 2 (superheated / dry saturated steam) — IAPWS Table 10-11 ----
    const R2_I = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10, 10, 16, 16, 18, 20, 20, 20, 21, 22, 23, 24, 24, 24];
    const R2_J = [0, 1, 2, 3, 6, 1, 2, 4, 7, 36, 0, 1, 3, 6, 35, 1, 2, 3, 7, 3, 16, 35, 0, 11, 25, 8, 36, 13, 4, 10, 14, 29, 50, 57, 20, 35, 48, 21, 53, 39, 26, 40, 58];
    const R2_n = [
        -0.0017731742473212999, -0.017834862292357999, -0.045996013696365003, -0.057581259083432,
        -0.050325278727930002, -3.3032641670203e-05, -0.00018948987516315, -0.0039392777243355001,
        -0.043797295650572998, -2.6674547914087001e-05, 2.0481737692308999e-08, 4.3870667284435001e-07,
        -3.2277677238570002e-05, -0.0015033924542148, -0.040668253562648998, -7.8847309559367001e-10,
        1.2790717852285001e-08, 4.8225372718507002e-07, 2.2922076337661001e-06, -1.6714766451061001e-11,
        -0.0021171472321354998, -23.895741934103999, -5.9059564324270004e-18, -1.2621808899101e-06,
        -0.038946842435739003, 1.1256211360459e-11, -8.2311340897998004, 1.9809712802088e-08,
        1.0406965210174e-19, -1.0234747095929e-13, -1.0018179379511e-09, -8.0882908646984998e-11,
        0.10693031879409, -0.33662250574170999, 8.9185845355420999e-25, 3.0629316876231997e-13,
        -4.2002467698208001e-06, -5.9056029685639003e-26, 3.7826947613457002e-06, -1.2768608934681e-15,
        7.3087610595061e-29, 5.5414715350778001e-17, -9.4369707241209998e-07
    ];
    const R2_J0 = [0, 1, -5, -4, -3, -2, -1, 2, 3];
    const R2_n0 = [
        -9.6927686500217, 10.086655968018, -0.0056087911283020, 0.071452738081455,
        -0.40710498223928, 1.4240819171444, -4.3839511319450, -0.28408632460772, 0.021268463753307
    ];

    // ---- Region 4 (saturation line), IAPWS Eq 30/31 ----
    const R4_n = [0,
        0.11670521452767e4, -0.72421316703206e6, -0.17073846940092e2,
        0.12020824702470e5, -0.32325550322333e7, 0.14915108613530e2,
        -0.48232657361591e4, 0.40511340542057e6, -0.23855557567849e0,
        0.65017534844798e3
    ];

    // ---- Region2/3 boundary, IAPWS Eq 5 ----
    const B23_n = [0.34805185628969e3, -0.11671859879975e1, 0.10192970039326e-2];

    /** Saturation pressure [MPa] as a function of temperature [K]. Valid 273.15-647.096K */
    function PSat_T(T) {
        const n = R4_n;
        const theta = T + n[9] / (T - n[10]);
        const A = theta * theta + n[1] * theta + n[2];
        const B = n[3] * theta * theta + n[4] * theta + n[5];
        const C = n[6] * theta * theta + n[7] * theta + n[8];
        const root = Math.sqrt(Math.max(0, B * B - 4 * A * C));
        return Math.pow((2 * C) / (-B + root), 4);
    }

    /** Saturation temperature [K] as a function of pressure [MPa]. Valid 0.000611-22.064MPa */
    function TSat_P(P) {
        const n = R4_n;
        const beta = Math.pow(P, 0.25);
        const E = beta * beta + n[3] * beta + n[6];
        const F = n[1] * beta * beta + n[4] * beta + n[7];
        const G = n[2] * beta * beta + n[5] * beta + n[8];
        const D = (2 * G) / (-F - Math.sqrt(Math.max(0, F * F - 4 * E * G)));
        return (n[10] + D - Math.sqrt(Math.max(0, Math.pow(n[10] + D, 2) - 4 * (n[9] + n[10] * D)))) / 2;
    }

    /** Region2/3 boundary pressure [MPa] as a function of T [K] */
    function P23_T(T) {
        return B23_n[0] + B23_n[1] * T + B23_n[2] * T * T;
    }

    /** Region 1: compressed / subcooled liquid. T[K], P[MPa] -> {v,h,s,u,cp} */
    function region1(T, P) {
        const Tr = 1386 / T;
        const Pr = P / 16.53;
        const X = 7.1 - Pr;
        const Y = Tr - 1.222;

        let g = 0, gp = 0, gt = 0, gtt = 0;
        for (let k = 0; k < R1_n.length; k++) {
            const n = R1_n[k], I = R1_I[k], J = R1_J[k];
            const xI = Math.pow(X, I), xI1 = Math.pow(X, I - 1);
            const yJ = Math.pow(Y, J), yJ1 = Math.pow(Y, J - 1);
            g += n * xI * yJ;
            gp += -n * I * xI1 * yJ;
            gt += n * J * xI * yJ1;
            gtt += n * J * (J - 1) * xI * Math.pow(Y, J - 2);
        }

        const v = Pr * gp * R * T / P / 1000;
        const h = Tr * gt * R * T;
        const s = R * (Tr * gt - g);
        const cp = -R * Tr * Tr * gtt;
        const u = h - P * 1000 * v;
        return { T, P, v, h, s, u, cp, region: 1, x: 0 };
    }

    /** Region 2: superheated / dry saturated steam. T[K], P[MPa] -> {v,h,s,u,cp} */
    function region2(T, P) {
        const Tr = 540 / T;
        const Pr = P;
        const Y = Tr - 0.5;

        let go = Math.log(Pr), got = 0, gott = 0;
        for (let k = 0; k < R2_n0.length; k++) {
            const n = R2_n0[k], J = R2_J0[k];
            go += n * Math.pow(Tr, J);
            got += n * J * Math.pow(Tr, J - 1);
            gott += n * J * (J - 1) * Math.pow(Tr, J - 2);
        }

        let gr = 0, grt = 0, grtt = 0, grp = 0;
        for (let k = 0; k < R2_n.length; k++) {
            const n = R2_n[k], I = R2_I[k], J = R2_J[k];
            const prI = Math.pow(Pr, I);
            gr += n * prI * Math.pow(Y, J);
            grt += n * J * prI * Math.pow(Y, J - 1);
            grtt += n * J * (J - 1) * prI * Math.pow(Y, J - 2);
            grp += n * I * Math.pow(Pr, I - 1) * Math.pow(Y, J);
        }

        const h = Tr * (got + grt) * R * T;
        const s = R * (Tr * (got + grt) - (go + gr));
        const cp = -R * Tr * Tr * (gott + grtt);

        const gop = 1 / Pr;
        const v = Pr * (gop + grp) * R * T / P / 1000;
        const u = h - P * 1000 * v;
        return { T, P, v, h, s, u, cp, region: 2, x: 1 };
    }

    /** Region 4: two-phase mixture at pressure P[MPa] and quality x [0-1] */
    function region4(P, x) {
        const T = TSat_P(P);
        let liq, vap;
        if (T <= T623) {
            liq = region1(T, P);
            vap = region2(T, P);
        } else {
            // Above 350C an exact solution requires IAPWS-IF97 Region 3
            // (dense fluid, implicit in density). This engine approximates
            // that narrow sliver by linearly blending the exact Region 1/2
            // properties at the 623.15K boundary towards the exact critical
            // point (Tc,Pc,vc,hc,sc) as T -> Tc. This keeps the saturated
            // liquid/vapor curves smooth and monotonic all the way to the
            // critical point instead of flattening out.
            // Liquid: valid to evaluate Region 1 at (623.15K, P) here because
            // P > Psat(623.15K) = Ps623 whenever T > 623.15K, which is exactly
            // Region 1's compressed-liquid domain.
            const bLiq = region1(T623, P);
            // Vapor: Region 2 at 623.15K is only physically valid up to its
            // OWN saturation pressure Ps623 (~16.53MPa) — using the sample's
            // higher P here would extrapolate the vapor equation far outside
            // its domain and produce garbage (e.g. negative entropy). So the
            // vapor boundary point must stay fixed at (623.15K, Ps623).
            const bVap = region2(T623, Ps623);
            const frac = Math.min(1, Math.max(0, (T - T623) / (Tc - T623)));
            liq = {
                T, P, x: 0,
                v: bLiq.v + frac * (vc - bLiq.v),
                h: bLiq.h + frac * (hc - bLiq.h),
                s: bLiq.s + frac * (sc - bLiq.s)
            };
            vap = {
                T, P, x: 1,
                v: bVap.v + frac * (vc - bVap.v),
                h: bVap.h + frac * (hc - bVap.h),
                s: bVap.s + frac * (sc - bVap.s)
            };
        }
        const v = liq.v + x * (vap.v - liq.v);
        const h = liq.h + x * (vap.h - liq.h);
        const s = liq.s + x * (vap.s - liq.s);
        const u = h - P * 1000 * v;
        return { T, P, v, h, s, u, x, region: 4, liq, vap };
    }

    return {
        R, Tc, Pc, rhoc, vc, hc, sc, uc, Ps623, T623, Ptriple, Ttriple,
        PSat_T, TSat_P, P23_T, region1, region2, region4
    };
})();

/* ==========================================================================
   UI wiring
   ========================================================================== */
(function () {
    'use strict';

    function initWaterLab() {
        const canvas = document.getElementById('waterDiagramChart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const elP = document.getElementById('water-p');
        const elT = document.getElementById('water-t');
        const elX = document.getElementById('water-x');
        const elPVal = document.getElementById('water-p-val');
        const elTVal = document.getElementById('water-t-val');
        const elXVal = document.getElementById('water-x-val');
        const tGroup = document.getElementById('water-t-group');
        const xGroup = document.getElementById('water-x-group');
        const modeBtn = document.getElementById('water-mode-toggle');
        const criticalBtn = document.getElementById('water-critical-btn');
        const resetBtn = document.getElementById('water-reset-btn');
        const badge = document.getElementById('water-region-badge');

        const resV = document.getElementById('water-v-res');
        const resU = document.getElementById('water-u-res');
        const resH = document.getElementById('water-h-res');
        const resS = document.getElementById('water-s-res');
        const resX = document.getElementById('water-x-res');
        const resXRow = document.getElementById('water-x-res-row');
        const resTsat = document.getElementById('water-tsat-res');
        const resPsat = document.getElementById('water-psat-res');

        let isSaturated = false;
        let diagramType = 'Ts'; // 'Ts' | 'Pv' | 'Ph'

        const isEs = () => window.currentLanguage !== 'en';

        const REGIONS = {
            subcooled: { es: 'Líquido subenfriado', en: 'Subcooled liquid', color: '#3b82f6' },
            satLiquid: { es: 'Líquido saturado', en: 'Saturated liquid', color: '#06b6d4' },
            wet: { es: 'Vapor húmedo (mezcla saturada)', en: 'Wet steam (saturated mixture)', color: '#a855f7' },
            satVapor: { es: 'Vapor saturado seco', en: 'Dry saturated vapor', color: '#eab308' },
            superheated: { es: 'Vapor sobrecalentado', en: 'Superheated vapor', color: '#ef4444' },
            critical: { es: 'Punto Crítico', en: 'Critical Point', color: '#f97316' },
            supercritical: { es: 'Fluido supercrítico', en: 'Supercritical fluid', color: '#f97316' },
            denseApprox: { es: 'Líquido denso cerca del punto crítico (aprox.)', en: 'Dense liquid near the critical point (approx.)', color: '#94a3b8' }
        };

        /* ---- Saturation dome (precomputed once) ---- */
        const domeLiquid = [];
        const domeVapor = [];
        (function buildDome() {
            const N = 140;
            for (let i = 0; i <= N; i++) {
                // Denser sampling near the critical point for a smooth curve there
                const frac = i / N;
                const T = IAPWS.Ttriple + (IAPWS.Tc - 0.02 - IAPWS.Ttriple) * Math.pow(frac, 0.85);
                const P = IAPWS.PSat_T(T);
                const liq = IAPWS.region4(P, 0);
                const vap = IAPWS.region4(P, 1);
                domeLiquid.push({ T: liq.T - 273.15, P: P * 1000, v: liq.v, h: liq.h, s: liq.s });
                domeVapor.push({ T: vap.T - 273.15, P: P * 1000, v: vap.v, h: vap.h, s: vap.s });
            }
            // Close the dome exactly at the critical point
            const critPt = { T: IAPWS.Tc - 273.15, P: IAPWS.Pc * 1000, v: IAPWS.vc, h: IAPWS.hc, s: IAPWS.sc };
            domeLiquid.push(critPt);
            domeVapor.push(critPt);
        })();
        const criticalPoint = { T: IAPWS.Tc - 273.15, P: IAPWS.Pc * 1000, v: IAPWS.vc, h: IAPWS.hc, s: IAPWS.sc };

        function mapPoint(type, p) {
            if (type === 'Ts') return { x: p.s, y: p.T };
            if (type === 'Pv') return { x: p.v, y: p.P };
            return { x: p.h, y: p.P }; // Ph
        }

        // Liquid-side properties at (TK, P_MPa), smoothly blended towards the
        // exact critical point above 623.15K (see IAPWS.region4 for details).
        function liquidLegPoint(TK, P_MPa) {
            if (TK <= IAPWS.T623) return IAPWS.region1(TK, P_MPa);
            const b = IAPWS.region1(IAPWS.T623, P_MPa);
            const frac = Math.min(1, Math.max(0, (TK - IAPWS.T623) / (IAPWS.Tc - IAPWS.T623)));
            return {
                v: b.v + frac * (IAPWS.vc - b.v),
                h: b.h + frac * (IAPWS.hc - b.h),
                s: b.s + frac * (IAPWS.sc - b.s)
            };
        }

        /**
         * Full constant-pressure path: compressed-liquid leg -> horizontal
         * saturation tie-line (Tsat, from sf to sg) -> superheated-vapor leg.
         * On a T-s diagram this draws exactly the classic "isobar": it rises
         * almost vertically through the liquid, runs perfectly flat at
         * T = Tsat(P) while crossing the dome, then curves upward again
         * through superheated steam. On P-v / P-h it is a straight
         * horizontal line at that pressure, since P is constant throughout.
         */
        function computeIsobarPath(P_kPa) {
            const P_MPa = Math.min(Math.max(P_kPa / 1000, IAPWS.Ptriple), IAPWS.Pc);
            const pts = [];
            const TMAX = 600;

            if (P_MPa >= IAPWS.Pc - 1e-6) {
                // At/above the critical pressure there is no phase change:
                // a single smooth supercritical path, no horizontal segment.
                const N = 70;
                for (let i = 0; i <= N; i++) {
                    const T_C = 0.1 + (TMAX - 0.1) * i / N;
                    const TK = T_C + 273.15;
                    let st;
                    if (TK <= IAPWS.T623) st = IAPWS.region1(TK, P_MPa);
                    else if (P_MPa <= IAPWS.P23_T(TK)) st = IAPWS.region2(TK, P_MPa);
                    else st = IAPWS.region1(IAPWS.T623, P_MPa);
                    pts.push({ T: T_C, v: st.v, h: st.h, s: st.s });
                }
                return pts;
            }

            const TsatK = IAPWS.TSat_P(P_MPa);
            const TsatC = TsatK - 273.15;
            const Tstart = Math.min(0.1, TsatC - 0.5);

            // Compressed-liquid leg (0.1C up to Tsat)
            const NL = 26;
            for (let i = 0; i <= NL; i++) {
                const T_C = Tstart + (TsatC - Tstart) * i / NL;
                const st = liquidLegPoint(T_C + 273.15, P_MPa);
                pts.push({ T: T_C, v: st.v, h: st.h, s: st.s });
            }

            // Horizontal saturation tie-line: T constant = Tsat(P), s (or v,h) sweeps sf -> sg
            const liq = IAPWS.region4(P_MPa, 0);
            const vap = IAPWS.region4(P_MPa, 1);
            pts.push({ T: TsatC, v: liq.v, h: liq.h, s: liq.s });
            pts.push({ T: TsatC, v: vap.v, h: vap.h, s: vap.s });

            // Superheated-vapor leg (Tsat up to TMAX)
            const NV = 40;
            for (let i = 0; i <= NV; i++) {
                const T_C = TsatC + (TMAX - TsatC) * i / NV;
                const TK = T_C + 273.15;
                const st = IAPWS.region2(TK, P_MPa);
                pts.push({ T: T_C, v: st.v, h: st.h, s: st.s });
            }
            return pts;
        }

        const ISOBAR_COLORS = ['#22d3ee', '#f472b6', '#4ade80', '#facc15', '#818cf8'];
        const MAX_PINNED_ISOBARS = 5;
        let pinnedIsobars = [];

        const axisLabels = {
            Ts: { x: 'Entropía s (kJ/kg·K)', xEn: 'Entropy s (kJ/kg·K)', y: 'Temperatura (°C)', yEn: 'Temperature (°C)', xLog: false, yLog: false },
            Pv: { x: 'Volumen específico v (m³/kg)', xEn: 'Specific volume v (m³/kg)', y: 'Presión (kPa)', yEn: 'Pressure (kPa)', xLog: true, yLog: true },
            Ph: { x: 'Entalpía h (kJ/kg)', xEn: 'Enthalpy h (kJ/kg)', y: 'Presión (kPa)', yEn: 'Pressure (kPa)', xLog: false, yLog: true }
        };

        let chartInstance = new Chart(ctx, {
            type: 'line',
            data: { datasets: [] },
            options: {
                animation: false,
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: true, position: 'top', labels: { color: '#e2e8f0', boxWidth: 12, font: { size: 10 } } } },
                scales: {
                    x: { type: 'linear', title: { display: true, text: axisLabels.Ts.x, color: '#94a3b8' }, ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.08)' } },
                    y: { type: 'linear', title: { display: true, text: axisLabels.Ts.y, color: '#94a3b8' }, ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.08)' } }
                }
            }
        });

        // Straight polylines (tension 0) everywhere: with ~140 sample points the
        // dome already looks smooth, and this avoids the spline-overshoot
        // "loops" that appear near the critical point when Bezier tension is
        // used on two curves that meet there from very different angles.
        function rebuildChart() {
            const cfg = axisLabels[diagramType];
            const useEs = isEs();
            const P_kPa_now = parseFloat(elP.value);

            const datasets = [
                {
                    label: useEs ? 'Líquido saturado (x=0)' : 'Saturated liquid (x=0)',
                    data: domeLiquid.map(p => mapPoint(diagramType, p)),
                    borderColor: '#06b6d4', backgroundColor: '#06b6d4',
                    borderWidth: 2, pointRadius: 0, fill: false, tension: 0
                },
                {
                    label: useEs ? 'Vapor saturado (x=1)' : 'Saturated vapor (x=1)',
                    data: domeVapor.map(p => mapPoint(diagramType, p)),
                    borderColor: '#eab308', backgroundColor: '#eab308',
                    borderWidth: 2, pointRadius: 0, fill: false, tension: 0
                },
                {
                    label: useEs ? 'Punto Crítico' : 'Critical Point',
                    data: [mapPoint(diagramType, criticalPoint)],
                    borderColor: '#f97316', backgroundColor: '#f97316',
                    pointRadius: 6, pointStyle: 'star', showLine: false
                }
            ];

            pinnedIsobars.forEach(iso => {
                datasets.push({
                    label: 'P = ' + iso.P + ' kPa',
                    data: computeIsobarPath(iso.P).map(p => mapPoint(diagramType, p)),
                    borderColor: iso.color, backgroundColor: iso.color,
                    borderWidth: 2, pointRadius: 0, fill: false, tension: 0
                });
            });

            // Live isobar following the main P slider — this is what draws the
            // horizontal Tsat tie-line for whichever pressure is currently set
            datasets.push({
                label: useEs ? 'Isóbara actual (P)' : 'Current isobar (P)',
                data: computeIsobarPath(P_kPa_now).map(p => mapPoint(diagramType, p)),
                borderColor: 'rgba(255,255,255,0.55)', backgroundColor: 'rgba(255,255,255,0.55)',
                borderWidth: 1.5, borderDash: [5, 4], pointRadius: 0, fill: false, tension: 0
            });

            datasets.push({
                label: useEs ? 'Estado actual' : 'Current state',
                data: [],
                borderColor: '#ffffff', backgroundColor: '#ffffff',
                pointRadius: 7, pointHoverRadius: 8, showLine: false
            });

            chartInstance.data.datasets = datasets;
            chartInstance.options.scales.x.type = cfg.xLog ? 'logarithmic' : 'linear';
            chartInstance.options.scales.y.type = cfg.yLog ? 'logarithmic' : 'linear';
            chartInstance.options.scales.x.title.text = useEs ? cfg.x : cfg.xEn;
            chartInstance.options.scales.y.title.text = useEs ? cfg.y : cfg.yEn;
            chartInstance.update();
        }

        function renderIsobarChips() {
            const wrap = document.getElementById('water-isobar-chips');
            if (!wrap) return;
            wrap.innerHTML = '';
            pinnedIsobars.forEach((iso, idx) => {
                const chip = document.createElement('span');
                chip.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:3px 9px;' +
                    'border-radius:12px;font-size:0.72rem;font-weight:700;background:' + iso.color + '22;' +
                    'color:' + iso.color + ';border:1px solid ' + iso.color + '66;';
                chip.innerHTML = iso.P + ' kPa <span data-idx="' + idx + '" style="cursor:pointer;font-weight:900;">&times;</span>';
                chip.querySelector('span[data-idx]').addEventListener('click', () => {
                    pinnedIsobars.splice(idx, 1);
                    renderIsobarChips();
                    rebuildChart();
                    updateAll();
                });
                wrap.appendChild(chip);
            });
        }

        function addIsobar(P_kPa) {
            if (!Number.isFinite(P_kPa) || P_kPa < 1 || P_kPa > 22064) return;
            if (pinnedIsobars.some(iso => Math.abs(iso.P - P_kPa) < 0.01)) return;
            if (pinnedIsobars.length >= MAX_PINNED_ISOBARS) pinnedIsobars.shift();
            const color = ISOBAR_COLORS[pinnedIsobars.length % ISOBAR_COLORS.length];
            pinnedIsobars.push({ P: Math.round(P_kPa * 100) / 100, color });
            renderIsobarChips();
            rebuildChart();
            updateAll();
        }

        /* ---- State computation ---- */
        function classifyAndCompute() {
            const P_kPa = parseFloat(elP.value);
            const T_C = parseFloat(elT.value);
            const x = parseFloat(elX.value);
            const P_MPa = Math.min(Math.max(P_kPa / 1000, IAPWS.Ptriple), IAPWS.Pc);
            let TK = T_C + 273.15;

            let state, regionKey, approxNote = false;

            // "Go to critical point" precision shortcut
            const nearCritical = Math.abs(P_MPa - IAPWS.Pc) < 0.01 && !isSaturated && Math.abs(TK - IAPWS.Tc) < 0.3;

            if (nearCritical) {
                regionKey = 'critical';
                state = { T: IAPWS.Tc, P: IAPWS.Pc, v: IAPWS.vc, h: IAPWS.hc, s: IAPWS.sc, u: IAPWS.uc, x: null };
            } else if (isSaturated) {
                state = IAPWS.region4(P_MPa, x);
                if (Math.abs(P_MPa - IAPWS.Pc) < 0.01) regionKey = 'critical';
                else if (x <= 0.001) regionKey = 'satLiquid';
                else if (x >= 0.999) regionKey = 'satVapor';
                else regionKey = 'wet';
            } else if (TK >= IAPWS.Tc) {
                const P23 = IAPWS.P23_T(TK);
                if (P_MPa <= P23) {
                    state = IAPWS.region2(TK, P_MPa);
                    regionKey = 'supercritical';
                } else {
                    state = IAPWS.region1(Math.min(TK, IAPWS.T623), P_MPa);
                    regionKey = 'denseApprox';
                    approxNote = true;
                }
            } else if (TK <= IAPWS.T623) {
                const Psat = IAPWS.PSat_T(TK);
                if (P_MPa > Psat * 1.0005) {
                    state = IAPWS.region1(TK, P_MPa);
                    regionKey = 'subcooled';
                } else if (P_MPa < Psat * 0.9995) {
                    state = IAPWS.region2(TK, P_MPa);
                    regionKey = 'superheated';
                } else {
                    state = IAPWS.region4(Psat, 0.5);
                    regionKey = 'wet';
                }
            } else {
                // Between 623.15K and Tc
                const P23 = IAPWS.P23_T(TK);
                const Psat = IAPWS.PSat_T(TK);
                if (P_MPa <= Math.min(P23, Psat * 0.9995)) {
                    state = IAPWS.region2(TK, P_MPa);
                    regionKey = 'superheated';
                } else if (Math.abs(P_MPa - Psat) < Psat * 0.0015) {
                    state = IAPWS.region4(Psat, 0.5);
                    regionKey = 'wet';
                } else {
                    state = IAPWS.region1(IAPWS.T623, P_MPa);
                    regionKey = 'denseApprox';
                    approxNote = true;
                }
            }

            return { state, regionKey, approxNote, P_MPa, TK };
        }

        function fmt(v, d) { return Number.isFinite(v) ? v.toFixed(d) : '—'; }

        function updateAll() {
            const P_kPa = parseFloat(elP.value);
            const T_C = parseFloat(elT.value);
            elPVal.textContent = fmt(P_kPa, P_kPa < 100 ? 2 : 1);
            elTVal.textContent = fmt(T_C, 1);
            elXVal.textContent = fmt(parseFloat(elX.value), 2);

            const { state, regionKey, P_MPa, TK } = classifyAndCompute();
            const useEs = isEs();
            const rg = REGIONS[regionKey];

            // Region badge
            if (badge) {
                badge.style.background = rg.color + '26';
                badge.style.color = rg.color;
                badge.style.borderColor = rg.color + '66';
                badge.innerHTML = useEs ? rg.es : rg.en;
            }

            // Result card
            resV.textContent = (state.v < 0.01 ? state.v.toExponential(3) : fmt(state.v, state.v < 1 ? 6 : 4)) + ' m³/kg';
            resU.textContent = fmt(state.u, 1) + ' kJ/kg';
            resH.textContent = fmt(state.h, 1) + ' kJ/kg';
            resS.textContent = fmt(state.s, 4) + ' kJ/kg·K';

            if (state.x !== null && state.x !== undefined && (regionKey === 'satLiquid' || regionKey === 'wet' || regionKey === 'satVapor')) {
                resXRow.style.display = '';
                resX.textContent = fmt(state.x, 3);
            } else {
                resXRow.style.display = isSaturated ? '' : 'none';
                resX.textContent = isSaturated ? fmt(state.x, 3) : '—';
            }

            // Tsat(P) / Psat(T) readouts (always shown as reference)
            if (P_MPa < IAPWS.Pc) {
                resTsat.textContent = fmt(IAPWS.TSat_P(P_MPa) - 273.15, 1) + ' °C';
            } else {
                resTsat.textContent = '≥ ' + fmt(IAPWS.Tc - 273.15, 1) + ' °C (Pc)';
            }
            if (TK < IAPWS.Tc) {
                resPsat.textContent = fmt(IAPWS.PSat_T(TK) * 1000, 1) + ' kPa';
            } else {
                resPsat.textContent = '≥ ' + fmt(IAPWS.Pc * 1000, 0) + ' kPa (Pc)';
            }

            // Chart: refresh the live isobar (follows the P slider) and the state marker.
            // These are always the last two datasets appended by rebuildChart().
            const ds = chartInstance.data.datasets;
            const isobarIdx = ds.length - 2;
            const stateIdx = ds.length - 1;
            if (ds[isobarIdx]) {
                ds[isobarIdx].data = computeIsobarPath(P_kPa).map(p => mapPoint(diagramType, p));
            }
            if (ds[stateIdx]) {
                const plotPoint = {
                    T: (isSaturated ? state.T - 273.15 : T_C),
                    P: P_kPa,
                    v: state.v, h: state.h, s: state.s
                };
                ds[stateIdx].data = [mapPoint(diagramType, plotPoint)];
                ds[stateIdx].borderColor = rg.color;
                ds[stateIdx].backgroundColor = rg.color;
            }
            chartInstance.update('none');
        }

        /* ---- Mode toggle (Free P&T <-> Saturated mixture) ---- */
        function setMode(saturated) {
            isSaturated = saturated;
            if (saturated) {
                tGroup.style.display = 'none';
                xGroup.style.display = '';
                modeBtn.style.background = '#a855f7';
                modeBtn.innerHTML = isEs()
                    ? '<span class="lang-es">Mezcla Saturada (x)</span>'
                    : '<span class="lang-en">Saturated Mixture (x)</span>';
            } else {
                tGroup.style.display = '';
                xGroup.style.display = 'none';
                modeBtn.style.background = '#3b82f6';
                modeBtn.innerHTML = isEs()
                    ? '<span class="lang-es">P y T libres</span>'
                    : '<span class="lang-en">Free P &amp; T</span>';
            }
            updateAll();
        }

        modeBtn.addEventListener('click', () => setMode(!isSaturated));

        [elP, elT, elX].forEach(el => el.addEventListener('input', updateAll));

        document.querySelectorAll('.water-diagram-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.water-diagram-btn').forEach(b => {
                    b.classList.remove('active');
                    b.style.background = 'rgba(255,255,255,0.05)';
                    b.style.color = '#e2e8f0';
                });
                btn.classList.add('active');
                btn.style.background = 'var(--accent-cyan)';
                btn.style.color = '#05202a';
                diagramType = btn.getAttribute('data-diagram');
                rebuildChart();
                updateAll();
            });
        });

        criticalBtn.addEventListener('click', () => {
            if (isSaturated) setMode(false);
            elP.value = (IAPWS.Pc * 1000).toFixed(3);
            elT.value = (IAPWS.Tc - 273.15).toFixed(3);
            updateAll();
        });

        resetBtn.addEventListener('click', () => {
            setMode(false);
            elP.value = 101.325;
            elT.value = 25;
            elX.value = 0.5;
            updateAll();
        });

        // Pin/compare additional isobars
        const isobarInput = document.getElementById('water-isobar-input');
        const isobarAddBtn = document.getElementById('water-isobar-add');
        if (isobarAddBtn && isobarInput) {
            isobarAddBtn.addEventListener('click', () => {
                addIsobar(parseFloat(isobarInput.value));
                isobarInput.value = '';
            });
            isobarInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    addIsobar(parseFloat(isobarInput.value));
                    isobarInput.value = '';
                }
            });
        }
        document.querySelectorAll('.water-isobar-preset').forEach(btn => {
            btn.addEventListener('click', () => addIsobar(parseFloat(btn.getAttribute('data-p'))));
        });

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                rebuildChart();
                updateAll();
            }
        });
        observer.observe(canvas);

        // Keep labels in sync with the site-wide ES/EN toggle
        window.__waterLabRefresh = function () {
            rebuildChart();
            setMode(isSaturated);
        };

        rebuildChart();
        updateAll();
    }

    // Hook into the global language switcher without modifying app_v2.js
    const __origTranslateDOM = window.translateDOM;
    window.translateDOM = function (lang) {
        if (typeof __origTranslateDOM === 'function') __origTranslateDOM(lang);
        if (typeof window.__waterLabRefresh === 'function') window.__waterLabRefresh();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWaterLab);
    } else {
        initWaterLab();
    }
})();
