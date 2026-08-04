/* ==========================================================================
   PsychrometryLab — Chart Component (Batch 3)
   PsychrometricChart: native SVG psychrometric diagram (Tdb vs w). No
   framework/build step is used — this matches the vanilla-JS, self-contained
   module pattern already used across the project (see water-lab.js). Native
   SVG was chosen over Canvas so that hover tooltips and per-element styling
   can rely on normal DOM/CSS instead of manual hit-testing.

   Depends on (load before this file): psychrometry-formulas.js

   Usage:
     const chart = PsychrometricChart.mount(containerEl, { TdbMin, TdbMax, wMax });
     chart.setStates(state1, state2, { processType, Tadp });
     chart.destroy();
   ========================================================================== */

const PsychrometricChart = (function (Formulas) {
    'use strict';

    const SVG_NS = 'http://www.w3.org/2000/svg';

    const RH_CURVES = [10, 30, 50, 70, 100];
    const ENTHALPY_LINES_KJKG = [20, 40, 60, 80, 100, 120];

    const PROCESS_COLORS = {
        sensible: '#f97316',
        dehumidification: '#06b6d4',
        evaporativeCooling: '#10b981',
        combined: '#f43f5e'
    };

    const PROCESS_LABELS = {
        sensible: 'Sensible',
        dehumidification: 'Deshumidificación',
        evaporativeCooling: 'Evaporativo',
        combined: 'Combinado'
    };

    let mountCounter = 0;

    // ---------------------------------------------------------------------
    // small helpers
    // ---------------------------------------------------------------------

    function fmt(value, decimals) {
        if (value === null || value === undefined || isNaN(value)) return '—';
        return Number(value).toFixed(decimals !== undefined ? decimals : 2);
    }

    function svgEl(tag, attrs) {
        const node = document.createElementNS(SVG_NS, tag);
        if (attrs) {
            Object.keys(attrs).forEach(k => node.setAttribute(k, attrs[k]));
        }
        return node;
    }

    function clamp(v, lo, hi) {
        return Math.max(lo, Math.min(hi, v));
    }

    /** Dry-bulb temperature [degC] solved from enthalpy h [kJ/kg] and humidity ratio w [kg/kg]. */
    function TdbFromEnthalpyW(h, w) {
        return (h - 2501 * w) / (1.006 + 1.86 * w);
    }

    /**
     * Clips the segment from (x0,y0) to (x1,y1) against the x-range [xmin,xmax].
     * Returns {x0,y0,x1,y1} of the visible portion, or null if fully outside.
     */
    function clipSegmentToXRange(x0, y0, x1, y1, xmin, xmax) {
        const dx = x1 - x0;
        if (Math.abs(dx) < 1e-9) {
            return (x0 >= xmin && x0 <= xmax) ? { x0, y0, x1, y1 } : null;
        }
        let tA = (xmin - x0) / dx;
        let tB = (xmax - x0) / dx;
        if (tA > tB) { const tmp = tA; tA = tB; tB = tmp; }
        const tStart = Math.max(0, tA);
        const tEnd = Math.min(1, tB);
        if (tStart >= tEnd) return null;
        return {
            x0: x0 + tStart * dx, y0: y0 + tStart * (y1 - y0),
            x1: x0 + tEnd * dx, y1: y0 + tEnd * (y1 - y0)
        };
    }

    // ---------------------------------------------------------------------
    // scoped styles
    // ---------------------------------------------------------------------

    function ensureStyles() {
        if (document.getElementById('psychro-chart-styles')) return;
        const style = document.createElement('style');
        style.id = 'psychro-chart-styles';
        style.textContent = `
.psychro-chart-root {
  --pc-text: var(--text-primary, #f1f5f9);
  --pc-muted: var(--text-muted, #94a3b8);
  --pc-grid: rgba(148,163,184,0.14);
  --pc-sat: #e2e8f0;
  --pc-rh: rgba(148,163,184,0.55);
  --pc-enthalpy: rgba(6,182,212,0.35);
  position: relative;
  font-family: var(--font-body, 'Inter', sans-serif);
  color: var(--pc-text);
}
.psychro-chart-root .pc-svg { width: 100%; height: auto; display: block; }
.psychro-chart-root .pc-axis-label { font-size: 11px; fill: var(--pc-muted); }
.psychro-chart-root .pc-tick-label { font-size: 10px; fill: var(--pc-muted); }
.psychro-chart-root .pc-grid line { stroke: var(--pc-grid); stroke-width: 1; }
.psychro-chart-root .pc-frame { fill: none; stroke: rgba(148,163,184,0.4); stroke-width: 1; }
.psychro-chart-root .pc-sat-curve { fill: none; stroke: var(--pc-sat); stroke-width: 2; }
.psychro-chart-root .pc-rh-curve { fill: none; stroke: var(--pc-rh); stroke-width: 1; stroke-dasharray: 4 3; }
.psychro-chart-root .pc-rh-label, .psychro-chart-root .pc-sat-label { font-size: 10px; fill: var(--pc-muted); }
.psychro-chart-root .pc-enthalpy-line { fill: none; stroke: var(--pc-enthalpy); stroke-width: 1; stroke-dasharray: 2 4; }
.psychro-chart-root .pc-enthalpy-label { font-size: 9px; fill: var(--pc-enthalpy); }
.psychro-chart-root .pc-process-line { stroke-width: 2.5; fill: none; }
.psychro-chart-root .pc-point { stroke: #0f111a; stroke-width: 1.5; }
.psychro-chart-root .pc-point-1 { fill: #f1f5f9; }
.psychro-chart-root .pc-point-2 { }
.psychro-chart-root .pc-point:hover { r: 8; cursor: pointer; }
.psychro-chart-root .pc-point-label { font-size: 11px; font-weight: 600; fill: var(--pc-text); }
.psychro-chart-root .pc-adp-guide { stroke: rgba(6,182,212,0.6); stroke-width: 1.5; stroke-dasharray: 3 3; }
.psychro-chart-root .pc-adp-point { fill: #06b6d4; stroke: #0f111a; stroke-width: 1; }
.psychro-chart-root .pc-twb-guide { fill: none; stroke: rgba(16,185,129,0.55); stroke-width: 1.5; stroke-dasharray: 5 3; }
.psychro-chart-root .pc-hidden { display: none !important; }
.psychro-chart-root .pc-tooltip {
  position: absolute;
  top: 0; left: 0;
  background: rgba(15,17,26,0.95);
  border: 1px solid rgba(148,163,184,0.3);
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 11px;
  line-height: 1.5;
  color: var(--pc-text);
  pointer-events: none;
  white-space: nowrap;
  z-index: 5;
  box-shadow: 0 4px 14px rgba(0,0,0,0.35);
}
.psychro-chart-root .pc-legend {
  display: flex; flex-wrap: wrap; gap: 12px;
  margin-top: 10px; font-size: 11px; color: var(--pc-muted);
}
.psychro-chart-root .pc-legend-item { display: flex; align-items: center; gap: 5px; }
.psychro-chart-root .pc-legend-swatch { width: 14px; height: 2px; display: inline-block; }
`;
        document.head.appendChild(style);
    }

    // ---------------------------------------------------------------------
    // mount()
    // ---------------------------------------------------------------------

    function mount(container, options) {
        if (!container) throw new Error('PsychrometricChart.mount: se requiere un contenedor DOM');
        options = options || {};
        ensureStyles();
        mountCounter += 1;

        const TdbMin = options.TdbMin !== undefined ? options.TdbMin : -10;
        const TdbMax = options.TdbMax !== undefined ? options.TdbMax : 50;
        const wMax = options.wMax !== undefined ? options.wMax : 0.030; // kg/kg (30 g/kg)
        const width = options.width || 720;
        const height = options.height || 440;
        const margin = { top: 16, right: 24, bottom: 40, left: 52 };
        const plotW = width - margin.left - margin.right;
        const plotH = height - margin.top - margin.bottom;

        function xScale(Tdb) { return margin.left + (Tdb - TdbMin) / (TdbMax - TdbMin) * plotW; }
        function yScale(w) { return margin.top + plotH - (w / wMax) * plotH; }

        container.innerHTML =
            '<div class="psychro-chart-root">' +
            '<svg class="pc-svg" viewBox="0 0 ' + width + ' ' + height + '" xmlns="' + SVG_NS + '"></svg>' +
            '<div class="pc-tooltip pc-hidden"></div>' +
            '<div class="pc-legend">' +
            '<span class="pc-legend-item"><span class="pc-legend-swatch" style="background:#e2e8f0;height:2px;"></span>Saturación (100% HR)</span>' +
            '<span class="pc-legend-item"><span class="pc-legend-swatch" style="background:repeating-linear-gradient(90deg,rgba(148,163,184,.7) 0 4px,transparent 4px 7px);"></span>HR constante</span>' +
            '<span class="pc-legend-item"><span class="pc-legend-swatch" style="background:repeating-linear-gradient(90deg,rgba(6,182,212,.6) 0 2px,transparent 2px 6px);"></span>Entalpía constante</span>' +
            '<span class="pc-legend-item"><span class="pc-legend-swatch" style="background:#f97316;height:3px;"></span>Línea de proceso</span>' +
            '</div>' +
            '</div>';

        const root = container.querySelector('.psychro-chart-root');
        const svg = root.querySelector('.pc-svg');
        const tooltip = root.querySelector('.pc-tooltip');

        const defs = svgEl('defs');
        svg.appendChild(defs);

        const gridLayer = svgEl('g', { class: 'pc-grid' });
        const curvesLayer = svgEl('g', { class: 'pc-curves' });
        const enthalpyLayer = svgEl('g', { class: 'pc-enthalpy' });
        const guideLayer = svgEl('g', { class: 'pc-guides' });
        const processLayer = svgEl('g', { class: 'pc-process' });
        const pointsLayer = svgEl('g', { class: 'pc-points' });
        const axisLayer = svgEl('g', { class: 'pc-axis' });
        [gridLayer, curvesLayer, enthalpyLayer, guideLayer, processLayer, pointsLayer, axisLayer]
            .forEach(l => svg.appendChild(l));

        // Arrowhead marker for the process line
        const marker = svgEl('marker', {
            id: 'pc-arrow-' + mountCounter, viewBox: '0 0 10 10',
            refX: '8', refY: '5', markerWidth: '7', markerHeight: '7', orient: 'auto-start-reverse'
        });
        marker.appendChild(svgEl('path', { d: 'M0,0 L10,5 L0,10 z', fill: 'context-stroke' }));
        defs.appendChild(marker);

        // -------------------- static frame + grid + axes --------------------

        function buildAxes() {
            axisLayer.innerHTML = '';
            gridLayer.innerHTML = '';

            axisLayer.appendChild(svgEl('rect', {
                class: 'pc-frame', x: margin.left, y: margin.top, width: plotW, height: plotH
            }));

            // x ticks every 5 degC
            for (let t = Math.ceil(TdbMin / 5) * 5; t <= TdbMax; t += 5) {
                const x = xScale(t);
                gridLayer.appendChild(svgEl('line', { x1: x, y1: margin.top, x2: x, y2: margin.top + plotH }));
                const label = svgEl('text', { class: 'pc-tick-label', x: x, y: margin.top + plotH + 16, 'text-anchor': 'middle' });
                label.textContent = String(t);
                axisLayer.appendChild(label);
            }
            const xAxisLabel = svgEl('text', {
                class: 'pc-axis-label', x: margin.left + plotW / 2, y: height - 4, 'text-anchor': 'middle'
            });
            xAxisLabel.textContent = 'Temperatura de bulbo seco, Tdb [°C]';
            axisLayer.appendChild(xAxisLabel);

            // y ticks every 5 g/kg
            for (let wg = 0; wg <= wMax * 1000 + 1e-6; wg += 5) {
                const y = yScale(wg / 1000);
                gridLayer.appendChild(svgEl('line', { x1: margin.left, y1: y, x2: margin.left + plotW, y2: y }));
                const label = svgEl('text', {
                    class: 'pc-tick-label', x: margin.left - 8, y: y + 3, 'text-anchor': 'end'
                });
                label.textContent = String(wg);
                axisLayer.appendChild(label);
            }
            const yAxisLabel = svgEl('text', {
                class: 'pc-axis-label', x: 12, y: margin.top + plotH / 2,
                'text-anchor': 'middle',
                transform: 'rotate(-90, 12, ' + (margin.top + plotH / 2) + ')'
            });
            yAxisLabel.textContent = 'Humedad específica, w [g/kg]';
            axisLayer.appendChild(yAxisLabel);
        }
        buildAxes();

        // -------------------- background curves (depend on P) --------------------

        let lastP = null;

        function buildBackground(P) {
            curvesLayer.innerHTML = '';
            enthalpyLayer.innerHTML = '';

            // Saturation curve + constant-RH curves
            RH_CURVES.forEach(rh => {
                const pts = [];
                for (let Tdb = TdbMin; Tdb <= TdbMax; Tdb += 1) {
                    const w = Formulas.wFromRH(Tdb, rh, P);
                    if (w > wMax) {
                        if (pts.length > 0) {
                            const prev = pts[pts.length - 1];
                            const wPrevRatio = (wMax - prev.w) / (w - prev.w);
                            const TdbBoundary = prev.Tdb + wPrevRatio * (Tdb - prev.Tdb);
                            pts.push({ Tdb: TdbBoundary, w: wMax });
                        }
                        break;
                    }
                    pts.push({ Tdb, w });
                }
                if (pts.length < 2) return;
                const d = pts.map((p, i) => (i === 0 ? 'M' : 'L') + xScale(p.Tdb) + ',' + yScale(p.w)).join(' ');
                const isSat = rh === 100;
                curvesLayer.appendChild(svgEl('path', { class: isSat ? 'pc-sat-curve' : 'pc-rh-curve', d }));

                const last = pts[pts.length - 1];
                const label = svgEl('text', {
                    class: isSat ? 'pc-sat-label' : 'pc-rh-label',
                    x: clamp(xScale(last.Tdb) + 4, margin.left, margin.left + plotW - 24),
                    y: yScale(last.w) - 4
                });
                label.textContent = isSat ? 'Saturación' : rh + '%';
                curvesLayer.appendChild(label);
            });

            // Constant-enthalpy reference lines (straight-line approximation, standard practice)
            ENTHALPY_LINES_KJKG.forEach(h => {
                const Tdb0 = TdbFromEnthalpyW(h, 0);
                const Tdb1 = TdbFromEnthalpyW(h, wMax);
                const clipped = clipSegmentToXRange(Tdb0, 0, Tdb1, wMax, TdbMin, TdbMax);
                if (!clipped) return;
                const x0 = xScale(clipped.x0), y0 = yScale(clipped.y0);
                const x1 = xScale(clipped.x1), y1 = yScale(clipped.y1);
                enthalpyLayer.appendChild(svgEl('line', { class: 'pc-enthalpy-line', x1: x0, y1: y0, x2: x1, y2: y1 }));
                const labelX = clamp(Math.min(x0, x1) + 4, margin.left, margin.left + plotW - 20);
                const labelY = (x0 <= x1 ? y0 : y1) - 3;
                const label = svgEl('text', { class: 'pc-enthalpy-label', x: labelX, y: clamp(labelY, margin.top + 8, margin.top + plotH) });
                label.textContent = h + ' kJ/kg';
                enthalpyLayer.appendChild(label);
            });

            lastP = P;
        }

        // -------------------- process line, points, guides --------------------

        const line1 = svgEl('line', { class: 'pc-process-line' });
        processLayer.appendChild(line1);

        const adpGuide = svgEl('line', { class: 'pc-adp-guide pc-hidden' });
        const adpPoint = svgEl('circle', { class: 'pc-adp-point pc-hidden', r: 4 });
        guideLayer.appendChild(adpGuide);
        guideLayer.appendChild(adpPoint);

        const twbGuide = svgEl('path', { class: 'pc-twb-guide pc-hidden' });
        guideLayer.appendChild(twbGuide);

        const point1 = svgEl('circle', { class: 'pc-point pc-point-1', r: 6 });
        const point2 = svgEl('circle', { class: 'pc-point pc-point-2', r: 6 });
        const label1 = svgEl('text', { class: 'pc-point-label' });
        const label2 = svgEl('text', { class: 'pc-point-label' });
        pointsLayer.appendChild(point1);
        pointsLayer.appendChild(point2);
        pointsLayer.appendChild(label1);
        pointsLayer.appendChild(label2);

        let tooltipData1 = null;
        let tooltipData2 = null;

        function tooltipHtml(title, state) {
            return '<strong>' + title + '</strong><br>' +
                'Tdb: ' + fmt(state.Tdb, 1) + ' °C<br>' +
                'HR: ' + fmt(state.RH, 1) + ' %<br>' +
                'w: ' + fmt(state.w * 1000, 2) + ' g/kg<br>' +
                'h: ' + fmt(state.h, 2) + ' kJ/kg';
        }

        function positionTooltip(evt) {
            const rect = root.getBoundingClientRect();
            tooltip.style.left = (evt.clientX - rect.left + 14) + 'px';
            tooltip.style.top = (evt.clientY - rect.top + 14) + 'px';
        }

        function wireTooltip(pointEl, getHtml) {
            pointEl.addEventListener('mouseenter', (evt) => {
                const html = getHtml();
                if (!html) return;
                tooltip.innerHTML = html;
                tooltip.classList.remove('pc-hidden');
                positionTooltip(evt);
            });
            pointEl.addEventListener('mousemove', positionTooltip);
            pointEl.addEventListener('mouseleave', () => tooltip.classList.add('pc-hidden'));
        }
        wireTooltip(point1, () => tooltipData1);
        wireTooltip(point2, () => tooltipData2);

        // -------------------- public API --------------------

        function setStates(state1, state2, meta) {
            meta = meta || {};
            const P = state1.P;
            if (lastP === null || Math.abs(P - lastP) > 1e-6) buildBackground(P);

            const color = PROCESS_COLORS[meta.processType] || '#f97316';

            const x1 = xScale(clamp(state1.Tdb, TdbMin, TdbMax));
            const y1 = yScale(clamp(state1.w, 0, wMax));
            const x2 = xScale(clamp(state2.Tdb, TdbMin, TdbMax));
            const y2 = yScale(clamp(state2.w, 0, wMax));

            line1.setAttribute('x1', x1);
            line1.setAttribute('y1', y1);
            line1.setAttribute('x2', x2);
            line1.setAttribute('y2', y2);
            line1.setAttribute('stroke', color);
            line1.setAttribute('marker-end', 'url(#pc-arrow-' + mountCounter + ')');

            point1.setAttribute('cx', x1);
            point1.setAttribute('cy', y1);
            point2.setAttribute('cx', x2);
            point2.setAttribute('cy', y2);
            point2.setAttribute('fill', color);

            label1.setAttribute('x', x1 + 9);
            label1.setAttribute('y', y1 - 9);
            label1.textContent = '1';
            label2.setAttribute('x', x2 + 9);
            label2.setAttribute('y', y2 - 9);
            label2.textContent = '2';

            tooltipData1 = tooltipHtml('Estado 1 (entrada)', state1);
            tooltipData2 = tooltipHtml('Estado 2 (salida) · ' + (PROCESS_LABELS[meta.processType] || ''), state2);

            // Process-specific guides
            if (meta.processType === 'dehumidification' && meta.Tadp !== undefined) {
                const wSatAdp = Formulas.wSaturation(meta.Tadp, P);
                const xa = xScale(clamp(meta.Tadp, TdbMin, TdbMax));
                const ya = yScale(clamp(wSatAdp, 0, wMax));
                adpGuide.setAttribute('x1', x1);
                adpGuide.setAttribute('y1', y1);
                adpGuide.setAttribute('x2', xa);
                adpGuide.setAttribute('y2', ya);
                adpGuide.classList.remove('pc-hidden');
                adpPoint.setAttribute('cx', xa);
                adpPoint.setAttribute('cy', ya);
                adpPoint.classList.remove('pc-hidden');
            } else {
                adpGuide.classList.add('pc-hidden');
                adpPoint.classList.add('pc-hidden');
            }

            if (meta.processType === 'evaporativeCooling') {
                const twb1 = state1.Twb;
                let d = '';
                for (let Tdb = TdbMin; Tdb <= state1.Tdb + 1e-6; Tdb += 1) {
                    const w = Formulas.wFromWetBulb(Tdb, twb1, P);
                    if (w < 0 || w > wMax) continue;
                    d += (d === '' ? 'M' : 'L') + xScale(Tdb) + ',' + yScale(w) + ' ';
                }
                twbGuide.setAttribute('d', d.trim());
                twbGuide.classList.remove('pc-hidden');
            } else {
                twbGuide.classList.add('pc-hidden');
            }
        }

        function destroy() {
            container.innerHTML = '';
        }

        return { svg, setStates, destroy };
    }

    return { mount };
})(typeof PsychroFormulas !== 'undefined' ? PsychroFormulas : require('./psychrometry-formulas.js'));

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PsychrometricChart;
}
