/* ==========================================================================
   PsychrometryLab — View Component (Batch 2 + Batch 3 integration)
   Self-contained UI: process selector, input panel, live KPI/results panel
   and (Batch 3) an embedded PsychrometricChart. Builds its own DOM and
   injects its own scoped CSS — does not read or modify anything outside
   the container it's given.

   Depends on (load before this file, or via the same <script> order as
   test.html): psychrometry-formulas.js, psychrometry-state.js,
   psychrometry-processes.js, psychrometry-chart.js

   Usage:
     const handle = PsychrometryLabView.mount(document.getElementById('root'));
     // ... later, if needed:
     handle.unmount();
   ========================================================================== */

const PsychrometryLabView = (function (Formulas, State, Processes, Chart) {
    'use strict';

    // ---------------------------------------------------------------------
    // Static config
    // ---------------------------------------------------------------------

    const TAB_CONFIG = [
        { id: 'sensible', label: 'Calentamiento / Enfriamiento sensible', short: 'Sensible' },
        { id: 'dehumidification', label: 'Deshumidificación', short: 'Deshumidificación' },
        { id: 'evaporativeCooling', label: 'Enfriamiento evaporativo', short: 'Evaporativo' },
        { id: 'combined', label: 'Acondicionamiento combinado', short: 'Combinado' }
    ];

    const FLOW_UNITS = [
        { id: 'm3h', label: 'm³/h' },
        { id: 'm3s', label: 'm³/s' },
        { id: 'kgh', label: 'kg/h (aire seco)' },
        { id: 'kgs', label: 'kg/s (aire seco)' },
        { id: 'ls', label: 'L/s' },
        { id: 'cfm', label: 'CFM' }
    ];

    const ALTITUDE_PRESETS = [
        { id: 'sea', label: 'Nivel del mar (0 m · 101.325 kPa)', altitude: 0 },
        { id: 'medellin', label: 'Medellín (~1495 m)', altitude: 1495 },
        { id: 'custom', label: 'Personalizada…', altitude: null }
    ];

    let mountCounter = 0;

    // ---------------------------------------------------------------------
    // Formatting helpers
    // ---------------------------------------------------------------------

    function fmt(value, decimals) {
        if (value === null || value === undefined || isNaN(value)) return '—';
        return Number(value).toFixed(decimals !== undefined ? decimals : 2);
    }

    function fmtSigned(value, decimals) {
        if (value === null || value === undefined || isNaN(value)) return '—';
        const v = Number(value);
        const s = v.toFixed(decimals !== undefined ? decimals : 2);
        return v > 0 ? '+' + s : s;
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // ---------------------------------------------------------------------
    // Scoped CSS (injected once per page, regardless of how many labs mount)
    // ---------------------------------------------------------------------

    function ensureStyles() {
        if (document.getElementById('psychro-lab-styles')) return;
        const style = document.createElement('style');
        style.id = 'psychro-lab-styles';
        style.textContent = `
.psychro-lab-root {
  --pl-bg: var(--bg-dark, #0f111a);
  --pl-surface: var(--bg-panel, rgba(255,255,255,0.04));
  --pl-text: var(--text-primary, #f1f5f9);
  --pl-muted: var(--text-muted, #94a3b8);
  --pl-orange: var(--accent-orange, #f97316);
  --pl-orange-glow: var(--accent-orange-glow, rgba(249,115,22,0.2));
  --pl-cyan: var(--accent-cyan, #06b6d4);
  --pl-emerald: var(--accent-emerald, #10b981);
  --pl-radius: var(--border-radius, 16px);
  --pl-heading-font: var(--font-heading, 'Outfit', sans-serif);
  --pl-body-font: var(--font-body, 'Inter', sans-serif);
  font-family: var(--pl-body-font);
  color: var(--pl-text);
  background: var(--pl-bg);
  border-radius: var(--pl-radius);
  padding: 24px;
  box-sizing: border-box;
}
.psychro-lab-root *, .psychro-lab-root *::before, .psychro-lab-root *::after { box-sizing: border-box; }
.pl-header h2 {
  font-family: var(--pl-heading-font);
  margin: 0 0 4px 0;
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--pl-orange) 0%, #f43f5e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.pl-header .pl-sub { color: var(--pl-muted); margin: 0 0 18px 0; font-size: 0.92rem; }
.pl-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.pl-tab {
  font-family: var(--pl-body-font);
  background: transparent;
  border: 1px solid rgba(148,163,184,0.3);
  color: var(--pl-muted);
  padding: 8px 14px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.15s ease;
}
.pl-tab:hover { border-color: var(--pl-orange); color: var(--pl-text); }
.pl-tab.pl-tab-active {
  background: var(--pl-orange);
  border-color: var(--pl-orange);
  color: #0f111a;
  font-weight: 600;
}
.pl-body { display: grid; grid-template-columns: minmax(280px, 1fr) minmax(320px, 1.3fr); gap: 20px; align-items: start; }
@media (max-width: 860px) { .pl-body { grid-template-columns: 1fr; } }
.pl-panel {
  background: var(--pl-surface);
  border: 1px solid rgba(148,163,184,0.15);
  border-radius: var(--pl-radius);
  padding: 18px;
}
.pl-panel h3 {
  font-family: var(--pl-heading-font);
  margin: 0 0 14px 0;
  font-size: 1.05rem;
  color: var(--pl-cyan);
}
.pl-section { margin-bottom: 18px; }
.pl-section:last-child { margin-bottom: 0; }
.pl-section h4 {
  font-family: var(--pl-heading-font);
  margin: 0 0 10px 0;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--pl-muted);
}
.pl-field { margin-bottom: 12px; }
.pl-field:last-child { margin-bottom: 0; }
.pl-field-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 4px; }
.pl-field label { font-size: 0.82rem; color: var(--pl-text); }
.pl-field .pl-val { font-size: 0.82rem; color: var(--pl-orange); font-weight: 600; font-variant-numeric: tabular-nums; }
.pl-slider-row { display: flex; align-items: center; gap: 10px; }
.pl-slider-row input[type="range"] {
  flex: 1;
  accent-color: var(--pl-orange);
}
.pl-slider-row input[type="number"] {
  width: 76px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(148,163,184,0.3);
  color: var(--pl-text);
  border-radius: 8px;
  padding: 5px 7px;
  font-size: 0.85rem;
  font-family: var(--pl-body-font);
}
.pl-select, .pl-text-input {
  width: 100%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(148,163,184,0.3);
  color: var(--pl-text);
  border-radius: 8px;
  padding: 7px 9px;
  font-size: 0.85rem;
  font-family: var(--pl-body-font);
}
.pl-segmented { display: flex; border: 1px solid rgba(148,163,184,0.3); border-radius: 8px; overflow: hidden; }
.pl-segmented button {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--pl-muted);
  padding: 6px 8px;
  font-size: 0.78rem;
  cursor: pointer;
  font-family: var(--pl-body-font);
}
.pl-segmented button.pl-seg-active { background: var(--pl-orange); color: #0f111a; font-weight: 600; }
.pl-checkbox-row { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--pl-text); }
.pl-hidden { display: none !important; }
.pl-flow-row { display: flex; gap: 8px; }
.pl-flow-row input[type="number"] {
  flex: 1;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(148,163,184,0.3);
  color: var(--pl-text);
  border-radius: 8px;
  padding: 7px 9px;
  font-size: 0.85rem;
}
.pl-flow-row select { flex: 1; }
.pl-alt-info { font-size: 0.76rem; color: var(--pl-muted); margin-top: 6px; }
.pl-error {
  background: rgba(244,63,94,0.12);
  border: 1px solid rgba(244,63,94,0.4);
  color: #fda4af;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.82rem;
  margin-bottom: 14px;
}
.pl-compare-table { width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 0.85rem; }
.pl-compare-table th, .pl-compare-table td { padding: 7px 8px; text-align: right; border-bottom: 1px solid rgba(148,163,184,0.12); }
.pl-compare-table th:first-child, .pl-compare-table td:first-child { text-align: left; color: var(--pl-muted); }
.pl-compare-table thead th { color: var(--pl-muted); font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; }
.pl-compare-table thead th.pl-col-2 { color: var(--pl-cyan); }
.pl-compare-table tbody td.pl-col-2 { color: var(--pl-cyan); font-variant-numeric: tabular-nums; }
.pl-compare-table tbody td:nth-child(2) { font-variant-numeric: tabular-nums; }
.pl-kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; }
.pl-kpi-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(148,163,184,0.15);
  border-radius: 12px;
  padding: 12px;
}
.pl-kpi-card .pl-kpi-label { font-size: 0.72rem; color: var(--pl-muted); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px; }
.pl-kpi-card .pl-kpi-value { font-family: var(--pl-heading-font); font-size: 1.25rem; font-weight: 600; color: var(--pl-text); font-variant-numeric: tabular-nums; }
.pl-kpi-card .pl-kpi-value.pl-positive { color: var(--pl-orange); }
.pl-kpi-card .pl-kpi-value.pl-negative { color: var(--pl-cyan); }
.pl-kpi-card .pl-kpi-sub { font-size: 0.72rem; color: var(--pl-muted); margin-top: 2px; }
.pl-flow-note { font-size: 0.76rem; color: var(--pl-muted); margin-top: 10px; }
.pl-panel-chart { margin-top: 20px; }
.pl-chart-host { margin-top: 4px; }
`;
        document.head.appendChild(style);
    }

    // ---------------------------------------------------------------------
    // Small DOM helpers
    // ---------------------------------------------------------------------

    function linkPair(rangeEl, numberEl, valueDisplayEl, decimals, onChange) {
        function sync(value, source) {
            const v = Number(value);
            if (rangeEl && source !== rangeEl) rangeEl.value = v;
            if (numberEl && source !== numberEl) numberEl.value = v;
            if (valueDisplayEl) valueDisplayEl.textContent = fmt(v, decimals);
            onChange(v);
        }
        if (rangeEl) rangeEl.addEventListener('input', () => sync(rangeEl.value, rangeEl));
        if (numberEl) numberEl.addEventListener('input', () => {
            if (numberEl.value === '' || isNaN(Number(numberEl.value))) return;
            sync(numberEl.value, numberEl);
        });
        return sync;
    }

    // ---------------------------------------------------------------------
    // mount()
    // ---------------------------------------------------------------------

    function mount(container, options) {
        if (!container) throw new Error('PsychrometryLabView.mount: se requiere un contenedor DOM');
        options = options || {};
        ensureStyles();
        mountCounter += 1;
        const uid = 'pl' + mountCounter;

        container.innerHTML = buildTemplate(uid);
        const root = container.querySelector('.psychro-lab-root');

        // -------------------- chart (Batch 3) --------------------
        // Optional: if psychrometry-chart.js wasn't loaded, the lab still
        // works fully (inputs + KPIs) — the chart panel is simply left empty.
        const chartHost = root.querySelector('.pl-chart-host');
        const chartHandle = (Chart && typeof Chart.mount === 'function')
            ? Chart.mount(chartHost, options.chart || {})
            : null;

        // -------------------- view state --------------------
        const vs = {
            processType: State.PROCESS_TYPES.SENSIBLE.id,
            Tdb1: 25,
            humidityMode: 'RH', // 'RH' | 'w'
            RH1: 50,
            w1_gkg: 9.9,
            altitudePreset: 'sea',
            customAltitude: 1495,
            flowValue: 1000,
            flowUnit: 'm3h',
            params: {
                sensible: { Tdb2: 18 },
                dehumidification: { Tadp: 10, bypassFactor: 0.1, reheat: false, reheatTdb: 22 },
                evaporativeCooling: { effectivenessPct: 80 },
                combined: { Tdb2: 15, targetMode: 'RH2', RH2: 90, w2_gkg: 8 }
            }
        };

        // -------------------- element refs --------------------
        const els = {
            tabs: Array.from(root.querySelectorAll('.pl-tab')),
            humSeg: Array.from(root.querySelectorAll('.pl-hum-seg')),
            rh1Field: root.querySelector('.pl-rh1-field'),
            w1Field: root.querySelector('.pl-w1-field'),
            altSelect: root.querySelector('.pl-alt-select'),
            customAltField: root.querySelector('.pl-custom-alt-field'),
            altInfo: root.querySelector('.pl-alt-info'),
            flowValue: root.querySelector('.pl-flow-value'),
            flowUnit: root.querySelector('.pl-flow-unit'),
            flowNote: root.querySelector('.pl-flow-note'),
            paramsHost: root.querySelector('.pl-process-params'),
            errorBox: root.querySelector('.pl-error'),
            compareBody: root.querySelector('.pl-compare-body'),
            kpiHost: root.querySelector('.pl-kpis')
        };

        // Tdb1 slider/number
        linkPair(
            root.querySelector('.pl-tdb1-range'), root.querySelector('.pl-tdb1-number'),
            root.querySelector('.pl-tdb1-val'), 1,
            (v) => { vs.Tdb1 = v; update(); }
        );
        // RH1
        linkPair(
            root.querySelector('.pl-rh1-range'), root.querySelector('.pl-rh1-number'),
            root.querySelector('.pl-rh1-val'), 0,
            (v) => { vs.RH1 = v; update(); }
        );
        // w1
        linkPair(
            root.querySelector('.pl-w1-range'), root.querySelector('.pl-w1-number'),
            root.querySelector('.pl-w1-val'), 1,
            (v) => { vs.w1_gkg = v; update(); }
        );

        // Humidity mode segmented control
        els.humSeg.forEach(btn => {
            btn.addEventListener('click', () => {
                vs.humidityMode = btn.getAttribute('data-mode');
                els.humSeg.forEach(b => b.classList.toggle('pl-seg-active', b === btn));
                els.rh1Field.classList.toggle('pl-hidden', vs.humidityMode !== 'RH');
                els.w1Field.classList.toggle('pl-hidden', vs.humidityMode !== 'w');
                update();
            });
        });

        // Altitude / pressure
        els.altSelect.addEventListener('change', () => {
            vs.altitudePreset = els.altSelect.value;
            els.customAltField.classList.toggle('pl-hidden', vs.altitudePreset !== 'custom');
            update();
        });
        const customAltNumber = root.querySelector('.pl-custom-alt-number');
        if (customAltNumber) {
            customAltNumber.addEventListener('input', () => {
                if (customAltNumber.value === '' || isNaN(Number(customAltNumber.value))) return;
                vs.customAltitude = Number(customAltNumber.value);
                update();
            });
        }

        // Flow
        els.flowValue.addEventListener('input', () => {
            if (els.flowValue.value === '' || isNaN(Number(els.flowValue.value))) return;
            vs.flowValue = Number(els.flowValue.value);
            update();
        });
        els.flowUnit.addEventListener('change', () => {
            vs.flowUnit = els.flowUnit.value;
            update();
        });

        // Tabs
        els.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                vs.processType = tab.getAttribute('data-process');
                els.tabs.forEach(t => t.classList.toggle('pl-tab-active', t === tab));
                renderProcessParams();
                update();
            });
        });

        // -------------------- process-specific params (built per tab) --------------------

        function renderProcessParams() {
            els.paramsHost.innerHTML = buildParamsTemplate(vs.processType, vs.params);
            wireParamsEvents();
        }

        function wireParamsEvents() {
            const p = vs.params[vs.processType];
            if (vs.processType === 'sensible') {
                linkPair(
                    els.paramsHost.querySelector('.pl-sens-tdb2-range'), els.paramsHost.querySelector('.pl-sens-tdb2-number'),
                    els.paramsHost.querySelector('.pl-sens-tdb2-val'), 1,
                    (v) => { p.Tdb2 = v; update(); }
                );
            } else if (vs.processType === 'dehumidification') {
                linkPair(
                    els.paramsHost.querySelector('.pl-dehum-tadp-range'), els.paramsHost.querySelector('.pl-dehum-tadp-number'),
                    els.paramsHost.querySelector('.pl-dehum-tadp-val'), 1,
                    (v) => { p.Tadp = v; update(); }
                );
                linkPair(
                    els.paramsHost.querySelector('.pl-dehum-bf-range'), els.paramsHost.querySelector('.pl-dehum-bf-number'),
                    els.paramsHost.querySelector('.pl-dehum-bf-val'), 2,
                    (v) => { p.bypassFactor = v; update(); }
                );
                const reheatCheck = els.paramsHost.querySelector('.pl-dehum-reheat-check');
                const reheatField = els.paramsHost.querySelector('.pl-dehum-reheat-field');
                reheatCheck.addEventListener('change', () => {
                    p.reheat = reheatCheck.checked;
                    reheatField.classList.toggle('pl-hidden', !p.reheat);
                    update();
                });
                linkPair(
                    els.paramsHost.querySelector('.pl-dehum-reheat-range'), els.paramsHost.querySelector('.pl-dehum-reheat-number'),
                    els.paramsHost.querySelector('.pl-dehum-reheat-val'), 1,
                    (v) => { p.reheatTdb = v; update(); }
                );
            } else if (vs.processType === 'evaporativeCooling') {
                linkPair(
                    els.paramsHost.querySelector('.pl-evap-eff-range'), els.paramsHost.querySelector('.pl-evap-eff-number'),
                    els.paramsHost.querySelector('.pl-evap-eff-val'), 0,
                    (v) => { p.effectivenessPct = v; update(); }
                );
            } else if (vs.processType === 'combined') {
                linkPair(
                    els.paramsHost.querySelector('.pl-comb-tdb2-range'), els.paramsHost.querySelector('.pl-comb-tdb2-number'),
                    els.paramsHost.querySelector('.pl-comb-tdb2-val'), 1,
                    (v) => { p.Tdb2 = v; update(); }
                );
                const modeSeg = Array.from(els.paramsHost.querySelectorAll('.pl-comb-mode-seg'));
                const rh2Field = els.paramsHost.querySelector('.pl-comb-rh2-field');
                const w2Field = els.paramsHost.querySelector('.pl-comb-w2-field');
                modeSeg.forEach(btn => {
                    btn.addEventListener('click', () => {
                        p.targetMode = btn.getAttribute('data-mode');
                        modeSeg.forEach(b => b.classList.toggle('pl-seg-active', b === btn));
                        rh2Field.classList.toggle('pl-hidden', p.targetMode !== 'RH2');
                        w2Field.classList.toggle('pl-hidden', p.targetMode !== 'w2');
                        update();
                    });
                });
                linkPair(
                    els.paramsHost.querySelector('.pl-comb-rh2-range'), els.paramsHost.querySelector('.pl-comb-rh2-number'),
                    els.paramsHost.querySelector('.pl-comb-rh2-val'), 0,
                    (v) => { p.RH2 = v; update(); }
                );
                linkPair(
                    els.paramsHost.querySelector('.pl-comb-w2-range'), els.paramsHost.querySelector('.pl-comb-w2-number'),
                    els.paramsHost.querySelector('.pl-comb-w2-val'), 1,
                    (v) => { p.w2_gkg = v; update(); }
                );
            }
        }

        // -------------------- derived quantities --------------------

        function currentPressure() {
            if (vs.altitudePreset === 'custom') return Formulas.pressureFromAltitude(vs.customAltitude);
            const preset = ALTITUDE_PRESETS.find(a => a.id === vs.altitudePreset);
            return Formulas.pressureFromAltitude(preset ? preset.altitude : 0);
        }

        function buildState1(P) {
            const input = { Tdb: vs.Tdb1, P: P };
            if (vs.humidityMode === 'RH') input.RH = vs.RH1;
            else input.w = vs.w1_gkg / 1000;
            return State.createAirState(input);
        }

        function runCurrentProcess(state1, mDryAir) {
            const p = vs.params[vs.processType];
            switch (vs.processType) {
                case 'sensible':
                    return Processes.sensibleProcess(state1, { Tdb2: p.Tdb2, mDryAir });
                case 'dehumidification':
                    if (p.Tadp >= vs.Tdb1) {
                        throw new Error('La temperatura de rocío del aparato (Tadp) debe ser menor que Tdb1.');
                    }
                    return Processes.dehumidificationProcess(state1, {
                        Tadp: p.Tadp, bypassFactor: p.bypassFactor,
                        reheat: p.reheat, reheatTdb: p.reheatTdb, mDryAir
                    });
                case 'evaporativeCooling':
                    return Processes.evaporativeCoolingProcess(state1, {
                        effectiveness: p.effectivenessPct / 100, mDryAir
                    });
                case 'combined': {
                    const params = { Tdb2: p.Tdb2, mDryAir };
                    if (p.targetMode === 'RH2') params.RH2 = p.RH2;
                    else params.w2 = p.w2_gkg / 1000;
                    return Processes.combinedProcess(state1, params);
                }
                default:
                    throw new Error('Proceso no reconocido');
            }
        }

        // -------------------- render --------------------

        function update() {
            els.errorBox.classList.add('pl-hidden');
            els.errorBox.textContent = '';

            let P, state1, mDryAir, result;
            try {
                P = currentPressure();
                els.altInfo.textContent = 'Presión atmosférica usada: ' + fmt(P, 2) + ' kPa';
                state1 = buildState1(P);
                if (vs.flowValue <= 0) throw new Error('El caudal debe ser mayor que cero.');
                mDryAir = Processes.toMassFlowDryAir(vs.flowValue, vs.flowUnit, state1);
                els.flowNote.textContent = 'Equivale a ' + fmt(mDryAir, 4) + ' kg/s de aire seco (v₁ = ' + fmt(state1.v, 4) + ' m³/kg).';
                result = runCurrentProcess(state1, mDryAir);
            } catch (err) {
                els.errorBox.textContent = err.message || String(err);
                els.errorBox.classList.remove('pl-hidden');
                els.compareBody.innerHTML = '';
                els.kpiHost.innerHTML = '';
                return;
            }

            renderCompareTable(state1, result.state2);
            renderKpis(result.balance);

            if (chartHandle) {
                const meta = { processType: vs.processType };
                if (vs.processType === 'dehumidification') {
                    meta.Tadp = vs.params.dehumidification.Tadp;
                }
                chartHandle.setStates(state1, result.state2, meta);
            }
        }

        function rowHtml(label, v1, v2, decimals, unit) {
            return '<tr><td>' + label + (unit ? ' <span style="opacity:.55">[' + unit + ']</span>' : '') + '</td>' +
                '<td>' + fmt(v1, decimals) + '</td>' +
                '<td class="pl-col-2">' + fmt(v2, decimals) + '</td></tr>';
        }

        function renderCompareTable(state1, state2) {
            els.compareBody.innerHTML =
                rowHtml('Tdb', state1.Tdb, state2.Tdb, 1, '°C') +
                rowHtml('HR', state1.RH, state2.RH, 1, '%') +
                rowHtml('w', state1.w * 1000, state2.w * 1000, 2, 'g/kg') +
                rowHtml('Twb', state1.Twb, state2.Twb, 1, '°C') +
                rowHtml('Tdp', state1.Tdp, state2.Tdp, 1, '°C') +
                rowHtml('h', state1.h, state2.h, 2, 'kJ/kg') +
                rowHtml('v', state1.v, state2.v, 3, 'm³/kg');
        }

        function kpiCardHtml(label, value, sub, signClass) {
            return '<div class="pl-kpi-card">' +
                '<div class="pl-kpi-label">' + label + '</div>' +
                '<div class="pl-kpi-value ' + (signClass || '') + '">' + value + '</div>' +
                (sub ? '<div class="pl-kpi-sub">' + sub + '</div>' : '') +
                '</div>';
        }

        function renderKpis(b) {
            const qSign = b.Q_kW >= 0 ? 'pl-positive' : 'pl-negative';
            const qLabel = b.Q_kW >= 0 ? 'Aporte de calor' : 'Remoción de calor';
            const waterLabel = b.waterRate_kgh > 0 ? 'Humidificación' : (b.waterRate_kgh < 0 ? 'Condensado' : 'Sin cambio de agua');
            els.kpiHost.innerHTML =
                kpiCardHtml('Δh (h₂ − h₁)', fmtSigned(b.deltaH, 2) + ' kJ/kg', 'por kg de aire seco') +
                kpiCardHtml('Potencia térmica Q', fmtSigned(b.Q_kW, 2) + ' kW', qLabel, qSign) +
                kpiCardHtml('Calor sensible Qs', fmtSigned(b.Qs_kW, 2) + ' kW') +
                kpiCardHtml('Calor latente Ql', fmtSigned(b.Ql_kW, 2) + ' kW') +
                kpiCardHtml('SHR (Qs/Q)', b.SHR === null ? '—' : fmt(b.SHR, 2)) +
                kpiCardHtml('Tasa de agua', fmt(Math.abs(b.waterRate_kgh), 2) + ' kg/h', waterLabel) +
                kpiCardHtml('Caudal de aire seco', fmt(b.mDryAir_kgs, 3) + ' kg/s');
        }

        // -------------------- init --------------------
        renderProcessParams();
        update();

        function unmount() {
            if (chartHandle) chartHandle.destroy();
            container.innerHTML = '';
        }

        return { root, update, unmount, chart: chartHandle };
    }

    // ---------------------------------------------------------------------
    // Templates
    // ---------------------------------------------------------------------

    function buildTemplate(uid) {
        const tabsHtml = TAB_CONFIG.map((t, i) =>
            '<button type="button" class="pl-tab' + (i === 0 ? ' pl-tab-active' : '') + '" data-process="' + t.id + '">' +
            escapeHtml(t.short) + '</button>'
        ).join('');

        const altOptionsHtml = ALTITUDE_PRESETS.map(a =>
            '<option value="' + a.id + '"' + (a.id === 'sea' ? ' selected' : '') + '>' + escapeHtml(a.label) + '</option>'
        ).join('');

        const flowUnitOptionsHtml = FLOW_UNITS.map(u =>
            '<option value="' + u.id + '"' + (u.id === 'm3h' ? ' selected' : '') + '>' + escapeHtml(u.label) + '</option>'
        ).join('');

        return `
<div class="psychro-lab-root" data-uid="${uid}">
  <div class="pl-header">
    <h2>Laboratorio de Psicrometría</h2>
    <p class="pl-sub">Selecciona un proceso, define el Estado 1 (entrada) y el caudal de aire. Los resultados se actualizan en tiempo real.</p>
  </div>

  <div class="pl-tabs" role="tablist">${tabsHtml}</div>

  <div class="pl-body">
    <div class="pl-panel pl-panel-inputs">
      <h3>Entradas</h3>

      <div class="pl-section">
        <h4>Estado 1 (Entrada)</h4>

        <div class="pl-field">
          <div class="pl-field-row"><label>Temperatura de bulbo seco (Tdb₁)</label><span class="pl-val pl-tdb1-val">25.0</span></div>
          <div class="pl-slider-row">
            <input type="range" class="pl-tdb1-range" min="-10" max="50" step="0.5" value="25">
            <input type="number" class="pl-tdb1-number" value="25" step="0.5">
          </div>
        </div>

        <div class="pl-field">
          <div class="pl-field-row"><label>Humedad de entrada</label></div>
          <div class="pl-segmented" style="margin-bottom:8px;">
            <button type="button" class="pl-hum-seg pl-seg-active" data-mode="RH">HR (%)</button>
            <button type="button" class="pl-hum-seg" data-mode="w">w (g/kg)</button>
          </div>
          <div class="pl-rh1-field">
            <div class="pl-field-row"><label>Humedad relativa (HR₁)</label><span class="pl-val pl-rh1-val">50</span></div>
            <div class="pl-slider-row">
              <input type="range" class="pl-rh1-range" min="0" max="100" step="1" value="50">
              <input type="number" class="pl-rh1-number" value="50" step="1">
            </div>
          </div>
          <div class="pl-w1-field pl-hidden">
            <div class="pl-field-row"><label>Humedad específica (w₁)</label><span class="pl-val pl-w1-val">9.9</span></div>
            <div class="pl-slider-row">
              <input type="range" class="pl-w1-range" min="0" max="30" step="0.1" value="9.9">
              <input type="number" class="pl-w1-number" value="9.9" step="0.1">
            </div>
          </div>
        </div>

        <div class="pl-field">
          <label>Presión atmosférica / altitud</label>
          <select class="pl-select pl-alt-select" style="margin-top:6px;">${altOptionsHtml}</select>
          <div class="pl-custom-alt-field pl-hidden" style="margin-top:8px;">
            <div class="pl-field-row"><label>Altitud personalizada</label><span></span></div>
            <input type="number" class="pl-text-input pl-custom-alt-number" value="1495" step="10">
          </div>
          <div class="pl-alt-info">Presión atmosférica usada: 101.33 kPa</div>
        </div>
      </div>

      <div class="pl-section">
        <h4>Caudal de aire</h4>
        <div class="pl-flow-row">
          <input type="number" class="pl-flow-value" value="1000" step="10" min="0">
          <select class="pl-select pl-flow-unit">${flowUnitOptionsHtml}</select>
        </div>
        <div class="pl-flow-note">—</div>
      </div>

      <div class="pl-section pl-process-params"></div>
    </div>

    <div class="pl-panel pl-panel-results">
      <h3>Resultados</h3>
      <div class="pl-error pl-hidden"></div>

      <table class="pl-compare-table">
        <thead>
          <tr><th>Propiedad</th><th>Estado 1</th><th class="pl-col-2">Estado 2</th></tr>
        </thead>
        <tbody class="pl-compare-body"></tbody>
      </table>

      <div class="pl-kpis"></div>
    </div>
  </div>

  <div class="pl-panel pl-panel-chart">
    <h3>Carta psicrométrica</h3>
    <div class="pl-chart-host"></div>
  </div>
</div>`;
    }

    function sliderField(cls, label, min, max, step, value, decimals, unit) {
        return '<div class="pl-field">' +
            '<div class="pl-field-row"><label>' + label + '</label><span class="pl-val ' + cls + '-val">' + fmt(value, decimals) + '</span></div>' +
            '<div class="pl-slider-row">' +
            '<input type="range" class="' + cls + '-range" min="' + min + '" max="' + max + '" step="' + step + '" value="' + value + '">' +
            '<input type="number" class="' + cls + '-number" value="' + value + '" step="' + step + '">' +
            '</div></div>';
    }

    function buildParamsTemplate(processType, params) {
        if (processType === 'sensible') {
            const p = params.sensible;
            return '<h4>Parámetros del proceso</h4>' +
                sliderField('pl-sens-tdb2', 'Temperatura de salida objetivo (Tdb₂)', -10, 50, 0.5, p.Tdb2, 1);
        }
        if (processType === 'dehumidification') {
            const p = params.dehumidification;
            return '<h4>Parámetros del proceso</h4>' +
                sliderField('pl-dehum-tadp', 'Temperatura de rocío del aparato (Tadp)', -5, 25, 0.5, p.Tadp, 1) +
                sliderField('pl-dehum-bf', 'Factor de bypass (0 = contacto total)', 0, 1, 0.01, p.bypassFactor, 2) +
                '<div class="pl-field"><label class="pl-checkbox-row"><input type="checkbox" class="pl-dehum-reheat-check"' + (p.reheat ? ' checked' : '') + '> Recalentar después de la serpentina</label></div>' +
                '<div class="pl-dehum-reheat-field pl-field' + (p.reheat ? '' : ' pl-hidden') + '">' +
                sliderField('pl-dehum-reheat', 'Temperatura de recalentamiento', 5, 35, 0.5, p.reheatTdb, 1) +
                '</div>';
        }
        if (processType === 'evaporativeCooling') {
            const p = params.evaporativeCooling;
            return '<h4>Parámetros del proceso</h4>' +
                sliderField('pl-evap-eff', 'Efectividad de saturación', 0, 100, 1, p.effectivenessPct, 0) +
                '<p style="font-size:0.76rem;color:var(--pl-muted);margin-top:6px;">100% = saturación adiabática completa (Tdb₂ = Twb₁).</p>';
        }
        if (processType === 'combined') {
            const p = params.combined;
            return '<h4>Parámetros del proceso</h4>' +
                sliderField('pl-comb-tdb2', 'Temperatura de salida objetivo (Tdb₂)', -10, 50, 0.5, p.Tdb2, 1) +
                '<div class="pl-field"><label>Objetivo de humedad en Estado 2</label>' +
                '<div class="pl-segmented" style="margin:6px 0 10px 0;">' +
                '<button type="button" class="pl-comb-mode-seg' + (p.targetMode === 'RH2' ? ' pl-seg-active' : '') + '" data-mode="RH2">HR₂ (%)</button>' +
                '<button type="button" class="pl-comb-mode-seg' + (p.targetMode === 'w2' ? ' pl-seg-active' : '') + '" data-mode="w2">w₂ (g/kg)</button>' +
                '</div></div>' +
                '<div class="pl-comb-rh2-field' + (p.targetMode === 'RH2' ? '' : ' pl-hidden') + '">' +
                sliderField('pl-comb-rh2', 'Humedad relativa de salida (HR₂)', 0, 100, 1, p.RH2, 0) +
                '</div>' +
                '<div class="pl-comb-w2-field' + (p.targetMode === 'w2' ? '' : ' pl-hidden') + '">' +
                sliderField('pl-comb-w2', 'Humedad específica de salida (w₂)', 0, 30, 0.1, p.w2_gkg, 1) +
                '</div>';
        }
        return '';
    }

    return { mount };
})(
    typeof PsychroFormulas !== 'undefined' ? PsychroFormulas : require('./psychrometry-formulas.js'),
    typeof PsychroState !== 'undefined' ? PsychroState : require('./psychrometry-state.js'),
    typeof PsychroProcesses !== 'undefined' ? PsychroProcesses : require('./psychrometry-processes.js'),
    typeof PsychrometricChart !== 'undefined' ? PsychrometricChart : (function () {
        try { return require('./psychrometry-chart.js'); } catch (e) { return null; }
    })()
);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PsychrometryLabView;
}
