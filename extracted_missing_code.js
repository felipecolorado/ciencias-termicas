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
        const As = 2 * Math.PI * r * L_cylinder + 2 

