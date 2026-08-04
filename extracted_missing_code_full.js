function updateSimulationParams() {
        currentTi = parseFloat(sliderTi.value);
        currentTinf = parseFloat(sliderTinf.value);
        currentD = parseFloat(sliderD.value);
        currentK = parseFloat(sliderK.value);
        currentRho = parseFloat(sliderRho.value);
        currentCp = parseFloat(sliderCp.value);

        if (valTi) valTi.textContent = currentTi;
        if (valTinf) valTinf.textContent = currentTinf;
        if (valD) valD.textContent = currentD.toFixed(2);
        if (valK) valK.textContent = currentK.toFixed(1);
        if (valRho) valRho.textContent = currentRho;
        if (valCp) valCp.textContent = currentCp;

        const r = currentD / 2;
        const As = 2 * Math.PI * r * L_cylinder + 2 * Math.PI * r * r;
        const V = Math.PI * r * r * L_cylinder;
        const Lc = V / As;

        simData = mediums.map(m => {
            const Bi = (m.h * Lc) / currentK;
            // Incorporate conductivity effect: tau = tau_lumped * (1 + Bi)
            const tau_lump = (currentRho * V * currentCp) / (m.h * As);
            const tau = tau_lump * (1 + Bi);
            return {
                name: m.name,
                h: m.h,
                Bi: Bi,
                tau: tau,
                color: m.color
            };
        });

        // Update table
        if (tbodyResults) {
            tbodyResults.innerHTML = '';
            simData.forEach(d => {
                const tr = document.createElement('tr');
                tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
                const tdName = document.createElement('td');
                tdName.style.padding = '4px';
                tdName.style.color = d.color;
                tdName.textContent = d.name + ` (h=${d.h})`;
                
                const tdBi = document.createElement('td');
                tdBi.style.padding = '4px';
                tdBi.innerHTML = d.Bi.toFixed(4) + (d.Bi < 0.1 ? " <span style='color:#10b981;font-size:0.7em;'>(V)</span>" : " <span style='color:#ef4444;font-size:0.7em;'>(I)</span>");
                
                const tdTau = document.createElement('td');
                tdTau.style.padding = '4px';
                tdTau.textContent = d.tau.toFixed(1);
                
                tr.appendChild(tdName);
                tr.appendChild(tdBi);
                tr.appendChild(tdTau);
                tbodyResults.appendChild(tr);
            });
        }

        if (!isPlaying) {
            simTime = 0;
            if (resTime) resTime.innerHTML = simTime.toFixed(1) + " s";
        }

        lastTimestamp = performance.now();
        initParticles();

        // The longest tau determines the overall x-axis scale initially, starting at 200s
        const tMax = 200;

        simData.forEach((d, idx) => {
           

