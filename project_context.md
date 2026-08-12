# Contexto del Proyecto: Historia de las Ciencias Térmicas (UdeA)

Este documento describe la arquitectura, tecnologías, reglas y estado actual del proyecto para que cualquier modelo de Inteligencia Artificial entienda rápidamente el contexto del código y no repita trabajo ni cometa errores de diseño.

---

## 📌 Propósito General

Es una **aplicación web educativa e interactiva** desarrollada para la Universidad de Antioquia (UdeA). Su objetivo es enseñar la historia de las ciencias térmicas (termodinámica, transferencia de calor, fluidos) a través de una **línea de tiempo interactiva**, biografías de científicos históricos (Newton, Carnot, Boyle, etc.), simulaciones y explicaciones matemáticas.

---

## 📍 Ubicación de Trabajo

El entorno de trabajo local actual está ubicado en:

```
D:\OneDrive - Universidad de Antioquia\Heat transfer history\v3
```

Archivos principales:
- `index.html` — Estructura principal (~900 KB). Contiene todos los laboratorios embebidos.
- `app_v2.js` — Lógica de la aplicación (~1 MB). Contiene simulaciones, controllers de fullscreen, etc.
- `style.css` — Hojas de estilo (~64 KB).
- `translations.js` — Diccionario bilingüe ES/EN (~540 KB).

---

## 🚫 REGLAS CRÍTICAS — PROHIBICIONES ABSOLUTAS

### ❌ PROHIBICIÓN #1 — Nunca restaurar código desde versiones anteriores

**Bajo ningún motivo** se deben usar versiones anteriores para restaurar partes del código ni el código completo. Esto está estrictamente prohibido. No se deben reemplazar bloques enteros de código con versiones guardadas, copias de seguridad, ni contenido de archivos como `index_broken.html`, archivos `.bak`, ni ninguna otra versión anterior.

Toda modificación debe hacerse de forma **quirúrgica**: identificar exactamente qué cambió, qué falta, y aplicar únicamente ese cambio mínimo necesario usando las herramientas de edición (`multi_replace_file_content`, `replace_file_content`). Si se detecta un error o regresión, **analizar el estado actual** del código y corregirlo directamente sin revertir.

### ❌ PROHIBICIÓN #2 — No modificar archivos de respaldo

En el directorio de trabajo pueden existir archivos como `index_broken.html`, `extracted_missing_code.js`, etc. Estos son solo referencias de diagnóstico. **No modificar, eliminar ni sobreescribir su contenido.**

---

## 🛠️ Stack Tecnológico (Frontend Puro)

El proyecto no utiliza frameworks pesados como React o Angular. Está construido con:

- **HTML5**: Estructura principal. Todos los laboratorios están embebidos directamente en `index.html`.
- **CSS3 (`style.css`)**: Diseño responsive, animaciones y sistema de variables para Modo Claro / Modo Oscuro.
- **Vanilla JavaScript (`app_v2.js`)**: Lógica de la aplicación. Renderizado dinámico de la línea de tiempo basado en el arreglo `timelineEvents`. Manejo de eventos y estados.
- **MathJax**: Renderizado de fórmulas y ecuaciones matemáticas (`$$...$$`, `\(...\)`) directamente en el navegador. Configurado para renderizado manual/controlado.
- **Chart.js (+ plugin annotations)**: Gráficas en módulos interactivos y simulaciones.

---

## 🧩 Funcionalidades Clave

1. **Línea de Tiempo Dinámica**: Los eventos históricos se cargan desde la estructura de datos JS `timelineEvents`.
2. **Sistema de Traducción Bilingüe (ES/EN)**: Implementado vía `translations.js`. Funciona reemplazando dinámicamente cadenas de texto en el DOM. Todo texto nuevo debe registrarse allí.
3. **Laboratorios Interactivos**: Sub-aplicaciones embebidas directamente en `index.html`. Incluyen simulaciones físicas con Chart.js, Canvas y MathJax.
4. **Pantalla Completa para Laboratorios**: Dos laboratorios ya cuentan con el sistema completo (ver sección siguiente). El objetivo actual del proyecto es **extender este sistema a todos los laboratorios**, trabajando por lotes.

---

## 📁 Estructura de Archivos Principal (versión `v3/`)

- `index.html`: Archivo principal. Carga de scripts (MathJax, Chart.js, Analytics), barra de controles flotante y todos los modales/simuladores.
- `app_v2.js`: Núcleo lógico. Base de datos `timelineEvents`, funciones de renderizado y lógica de todos los laboratorios (animaciones Canvas, gráficas, fullscreen controllers).
- `style.css`: Hojas de estilo generales, estilos de modales, simuladores y fullscreen.
- `translations.js`: Diccionario gigante (`window.uiTranslations`) que mapea textos ES→EN para toda la UI.
- `water-lab.js` / Carpeta `PsychrometryLab`: Scripts para simulaciones adicionales externas.

---

## 🖥️ Patrón de Visualización en Pantalla Completa (TAREA EN CURSO)

### Estado actual

Ya implementado en:
- ✅ **Laboratorio de Enfriamiento de Newton** (`#newton-lab-modal`) — Controller IIFE en `app_v2.js` ~línea 22613
- ✅ **Laboratorio de Conducción de Fourier** (`#fourier-lab-modal`) — Controller IIFE en `app_v2.js` ~línea 22413
- ✅ **Lote 2** (`prandtl-sim`, `nusselt-sim`, `bl-sim`, `reynolds-sim`, `nat-conv-sim`, `internal-bl-sim`) — Controllers IIFE en `app_v2.js` ~líneas 23583–24074
- ✅ **Lote 3** (`doublepipe-sim`, `microchannel-sim`, `boiling-sim`) — Controllers IIFE en `app_v2.js` ~líneas 24076+
- ✅ **Lote 4** (`planck-sim`, `vf-sim`, `invsq-sim`) — Controllers IIFE en `app_v2.js` ~líneas 24339+

Pendiente de implementar (trabajo por lotes, se irá actualizando):

| ID del Simulador | Nombre / Tema | Fullscreen |
|---|---|---|
| `newton-lab-modal` | Enfriamiento de Newton | ✅ |
| `fourier-lab-modal` | Conducción de Fourier | ✅ |
| `multicapa-custom-sim` | Conducción Multicapa con Fronteras | ✅ |
| `fourier-sim` | Sim. Fourier (adicional) | ✅ |
| `transient-sim` | Conducción Transitoria | ✅ |
| `fin-sim` | Aletas | ✅ |
| `insulated-sim` | Pared Insulada | ✅ |
| `nat-conv-sim` | Convección Natural | ✅ |
| `nusselt-sim` | Número de Nusselt | ✅ |
| `reynolds-sim` | Número de Reynolds | ✅ |
| `prandtl-sim` | Número de Prandtl | ✅ |
| `doublepipe-sim` | Intercambiador Doble Tubo | ✅ |
| `microchannel-sim` | Microcanales | ✅ |
| `boiling-sim` | Ebullición | ✅ |
| `planck-sim` | Radiación de Planck | ✅ |
| `vf-sim` | Factor de Vista | ✅ |
| `multi-sim` | Multi-simulador | ⬜ |
| `res-sim` | Resistencias Térmicas | ⬜ |
| `par-sim` | Resistencias en Paralelo | ⬜ |
| `cm-layers-container` | Capas Multicapa | ⬜ |
| `carnot-sim` | Ciclo de Carnot | ⬜ |
| `joule-sim` | Expansión de Joule | ⬜ |
| `clausius-sim` | Clausius | ⬜ |
| `kelvin-sim` | Kelvin | ⬜ |
| `bernoulli-sim` | Bernoulli | ⬜ |
| `maxwell-sim` | Maxwell | ⬜ |
| `ns-sim` | Navier-Stokes | ⬜ |
| `celsius-sim` | Celsius | ⬜ |
| `chatelet-sim` | Châtelet | ⬜ |
| `foote-sim` | Eunice Newton Foote | ⬜ |
| `herschel-sim` | Herschel | ⬜ |
| `gen-sim` | Generación de calor | ⬜ |
| `bl-sim` | Capa Límite | ✅ |
| `internal-bl-sim` | Capa Límite Interna | ✅ |
| `invsq-sim` | Ley Inverso Cuadrado | ✅ |
| `ottodiesel-sim` | Otto/Diesel | ⬜ |
| `cpcv-sim` | Cp/Cv | ⬜ |
| `pelton-sim` | Turbina Pelton | ⬜ |
| `vortex-sim` | Vórtice | ⬜ |
| `pennington-sim` | Pennington | ⬜ |
| `telkes-sim` | Telkes | ⬜ |
| `watt-sim` | Watt | ⬜ |
| `water-substance-sim` | Sustancia pura (agua) | ⬜ |
| `psychrometry-lab-sim` | Psicrometría | ⬜ |
| `newton-sim` | Newton (simulador adicional) | ⬜ |

---

### Arquitectura del patrón de fullscreen (basado en Newton y Fourier)

El patrón es un **IIFE (Immediately Invoked Function Expression)** en `app_v2.js`, uno por laboratorio. Cada controller tiene:

#### 1. Configuración (`CFG`)
```js
var CFG = {
    modalId:         'LABID-lab-modal',    // ID del contenedor del laboratorio en index.html
    openBtnId:       'LABID-lab-open-btn', // ID del botón para abrir fullscreen
    closeBtnId:      'LABID-lab-close-btn',// ID del botón cerrar (X)
    fullscreenClass:  'fullscreen',
    closingClass:     'is-closing',
    bodyLockClass:    'LABID-lab-open',    // clase en <body> para bloquear scroll
    transitionMs:     300,
};
```

#### 2. Funciones clave
- `openXxxLabFullscreen()`: Mueve el modal a `document.body` (teleport DOM), añade `.fullscreen`, bloquea scroll, hace resize de assets internos.
- `closeXxxLabFullscreen()`: Añade `.is-closing`, espera transición CSS, restaura el modal a su posición original (usa un comentario DOM como placeholder), desbloquea scroll.
- `resizeXxxAssets()`: Hace resize de Chart.js y/o Canvas internos al cambiar de modo.
- `attachListeners()`: Conecta botones open/close, escucha la tecla Escape y el evento `window.resize`.

#### 3. Elementos HTML requeridos en `index.html`

Dentro del contenedor del laboratorio (`div#LABID-lab-modal`), agregar:

```html
<!-- Botón cerrar (X) — visible solo en fullscreen -->
<button id="LABID-lab-close-btn" aria-label="Cerrar pantalla completa"
        title="Cerrar pantalla completa">&#x2715;</button>

<!-- Botón abrir fullscreen — visible en modo normal -->
<button id="LABID-lab-open-btn" title="Abrir laboratorio en pantalla completa"
        aria-label="Abrir laboratorio en pantalla completa">
    <span class="lang-es">Pantalla Completa</span>
    <span class="lang-en">Full Screen</span>
</button>

<!-- ARIA live region para accesibilidad -->
<div id="LABID-lab-aria-live" aria-live="polite" class="visually-hidden"></div>
```

#### 4. Estilos CSS requeridos en `style.css`

Para cada laboratorio nuevo, agregar reglas análogas a las de Newton/Fourier:

```css
/* ── LABID LAB — FULLSCREEN ── */
#LABID-lab-modal.fullscreen {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100dvh;
    z-index: 9999;
    overflow-y: auto;
    background: var(--bg-color, #fff);
}
body.LABID-lab-open { overflow: hidden; }
#LABID-lab-modal.is-closing {
    opacity: 0;
    transform: scale(0.97);
    transition: opacity 300ms ease, transform 300ms ease;
}
#LABID-lab-open-btn { /* estilos del botón de apertura */ }
#LABID-lab-close-btn { /* estilos del botón X */ }
```

#### 5. Nota sobre la función genérica existente

En `app_v2.js` ~línea 22892 existe `toggleLabFullscreen(container)` con clase `.lab-fullscreen` y botón `.lab-expand-btn`. Esta función es genérica pero **no** usa teleport DOM ni animación de cierre. Para laboratorios simples (sin Canvas o Chart.js complejo) puede usarse añadiendo la clase `.lab-expand-btn` al botón. Para laboratorios complejos se prefiere el patrón IIFE dedicado.

---

## 📝 Reglas para IA al modificar el código

1. **Vanilla JS únicamente**: No introducir dependencias de frameworks externos.
2. **Bilingüismo obligatorio**: Todo texto nuevo (botones, alertas, descripciones) debe agregarse al diccionario `translations.js`.
3. **MathJax**: Las fórmulas deben escribirse en formato TeX/LaTeX (`$$...$$` o `\(...\)`) para que MathJax las procese.
4. **Cambios quirúrgicos**: Identificar exactamente qué líneas cambiar. Nunca reemplazar bloques grandes de código sin necesidad. **Nunca** revertir a versiones anteriores.
5. **Patrón de datos en JS**: La data (`timelineEvents`) se define en JS y el HTML se inyecta/modifica dinámicamente vía DOM.
6. **Trabajo por lotes**: La implementación del fullscreen en laboratorios restantes se hará por lotes según indicación del usuario. Actualizar la tabla de inventario (✅/⬜) en este documento al completar cada lote.
