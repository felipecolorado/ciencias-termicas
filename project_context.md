# Contexto del Proyecto: Historia de las Ciencias Térmicas (UdeA)

Este documento describe la arquitectura, tecnologías, reglas y estado actual del proyecto para que cualquier modelo de Inteligencia Artificial entienda rápidamente el contexto del código y no repita trabajo ni cometa errores de diseño.

---

## 📌 Propósito General

Es una **aplicación web educativa e interactiva** desarrollada para la Universidad de Antioquia (UdeA). Su objetivo es enseñar la historia de las ciencias térmicas (termodinámica, transferencia de calor, fluidos) a través de una **línea de tiempo interactiva**, biografías de científicos históricos (Newton, Carnot, Boyle, etc.), simulaciones y explicaciones matemáticas.

---

## 📍 Ubicación de Trabajo

El entorno de trabajo local actual está ubicado en:

```
D:\OneDrive - Universidad de Antioquia\Heat transfer history\v4
```

> **IMPORTANTE**: La carpeta `v4` es el entorno de trabajo actual. La carpeta `v3` sirve EXCLUSIVAMENTE como archivo de restauración. NO debes tocar ni usar la carpeta `v3` para reescribir información a menos que se te indique de manera estricta.


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

## 🔐 Backend y Seguridad (Firebase) — Migración de seguridad completada (2026-08-15/17)

Además del frontend puro descrito arriba, el proyecto usa el proyecto Firebase
`thermal-science-history` (dos bases de datos) para autenticación de
usuarios, comentarios y contadores de presencia:

- **Realtime Database** (`thermal-science-history-default-rtdb`): `users/*`,
  `comments/*`, `presence/*`, `online_sessions/*`, `stats/userCount`. Es
  donde vive todo el dato sensible de la app.
- **Cloud Firestore**: solo `online_sessions` (fallback de conteo de
  presencia sin autenticación, `useCounterFallback()`).

Archivos de configuración/reglas en `v4/firebase/` (no forman parte del
sitio publicado; solo los usa el Firebase CLI localmente):
- `firebase.json`, `.firebaserc`, `firestore.rules`, `firestore.indexes.json`,
  `database.rules.json`.
- `MIGRATION_PLAN.md` — documento detallado del hallazgo de seguridad
  original y del plan aplicado. **Leer antes de tocar autenticación,
  comentarios, roles o reglas.**
- `scripts/setAdminClaim.js`, `scripts/syncUserCount.js`, `scripts/package.json`
  — scripts administrativos de una sola vez (Admin SDK).
- ⚠️ **`scripts/serviceAccountKey.json`** y los demás JSON de credenciales
  del Admin SDK presentes en esa carpeta dan acceso total de administrador
  al proyecto Firebase. **Nunca deben subirse a GitHub/GitHub Pages ni a
  ningún repositorio.** Si en algún momento se crea/usa un repo Git en
  `v4/`, agregarlos a `.gitignore` de inmediato (hoy no hay `.gitignore` en
  `v4/`).

### Qué se encontró y qué se corrigió (ya aplicado en `app_v2.js`, no repetir ni revertir)

Hallazgo original: las reglas de Realtime Database estaban en modo de
prueba, `handleAuthSubmit` guardaba la contraseña del usuario en **texto
plano** en `users/{userKey}.password`, y el login tenía un respaldo
inseguro que comparaba esa contraseña en el cliente contra RTDB —
cualquiera con la URL de la base de datos podía leer `/users` completo
(emails + contraseñas de todos los usuarios).

Cambios de código ya aplicados:
1. `fetchRealUserCount()` lee `stats/userCount` en vez de `/users` completo.
2. Registro (`handleAuthSubmit`, rama `register`): ya no guarda `password`
   en RTDB, ya no auto-asigna `role: "Administrador"` por email hardcodeado
   (el rol inicial siempre es `"Estudiante"`), y ya no crea cuentas
   "solo-RTDB" si falla el registro en Firebase Auth.
3. Login (`handleAuthSubmit`, rama login): depende exclusivamente de
   `firebase.auth().signInWithEmailAndPassword(...)` — se eliminó el
   respaldo que comparaba `user.password !== password` contra RTDB.
4. `handlePostComment` agrega `authorEmail: currentUser.email` a cada
   comentario nuevo (requerido por las reglas nuevas de `comments/*`, que
   verifican ese campo contra `auth.token.email`).

### Estado del despliegue: ✅ completo y verificado en producción

Todo el checklist de la sección 6 de `MIGRATION_PLAN.md` ya se ejecutó:
- `firestore.rules` y `database.rules.json` desplegados
  (`firebase deploy --only firestore:rules,database`).
- Custom claim `admin: true` asignado vía `scripts/setAdminClaim.js`
  (requerido para editar el campo `role` de cualquier usuario y para
  borrar comentarios ajenos — las reglas de servidor usan
  `auth.token.admin`, no el campo `role` de RTDB, como fuente de verdad).
- `stats/userCount` sembrado vía `scripts/syncUserCount.js`.
- Verificado en ventana de incógnito: login, registro, ver/publicar
  comentarios, contador de "en línea" y de usuarios registrados.

Pendiente / opcional (ver `MIGRATION_PLAN.md` secciones 4–5, no bloqueante
para producción):
- Migrar posibles usuarios "solo-RTDB" (se registraron antes de que
  existiera Firebase Auth en el sitio, o su registro en Auth falló) — no
  pueden iniciar sesión hasta migrarlos con el Admin SDK.
- Borrar campos `password` heredados en registros antiguos de `/users`
  (la escritura de contraseñas nuevas ya está bloqueada por
  `.validate: false`, pero valores viejos no se borran solos).
- (Opcional) Cloud Function que mantenga `stats/userCount` sincronizado
  automáticamente en vez de correr `syncUserCount.js` a mano — requiere
  plan Blaze.
- Mover el chequeo de "admin" en la UI del email hardcodeado
  `felipe.colorado@udea.edu.co` al custom claim
  (`idTokenResult.claims.admin`) — solo afecta qué botones se muestran; las
  reglas del servidor ya protegen los datos independientemente de esto.

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
- ✅ **Lote 5** (`res-sim`, `par-sim`, `multi-sim`) — Controllers IIFE en `app_v2.js` ~líneas 24599+
- ✅ **Lote 6** (`carnot-sim`, `joule-sim`, `clausius-sim`, `kelvin-sim`, `ottodiesel-sim`, `cpcv-sim`) — Controllers IIFE en `app_v2.js` ~líneas 24840+
- ✅ **Lote 7** (`bernoulli-sim`, `maxwell-sim`, `ns-sim`, `pelton-sim`, `vortex-sim`) — Controllers IIFE en `app_v2.js` ~líneas 25130+
- ✅ **Lote 8** (`celsius-sim`, `chatelet-sim`, `foote-sim`, `herschel-sim`, `gen-sim`, `watt-sim`, `pennington-sim`, `telkes-sim`, `newton-sim`) — Controllers IIFE en `app_v2.js` ~líneas 25360+
- ✅ **Lote 9** (`multi-sim`, `water-substance-sim`, `psychrometry-lab-sim`) — Controllers IIFE en `app_v2.js` ~líneas 25760+

Pendiente de implementar (trabajo por lotes, se irá actualizando):

| ID del Simulador | Nombre / Tema | Fullscreen |
|---|---|---|
| `newton-lab-modal` | Enfriamiento de Newton | ✅ |
| `fourier-lab-modal` | Conducción de Fourier | ✅ |
| `multicapa-custom-sim` | Conducción Multicapa con Fronteras | ✅ |
| `fourier-sim` | Sim. Fourier | ✅ |
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
| `multi-sim` | Multi-simulador | ✅ |
| `res-sim` | Resistencias Térmicas | ✅ |
| `par-sim` | Resistencias en Paralelo | ✅ |
| `cm-layers-container` | Capas Multicapa | ✅ (Integrado en multicapa-custom-sim) |
| `carnot-sim` | Ciclo de Carnot | ✅ |
| `joule-sim` | Expansión de Joule | ✅ |
| `clausius-sim` | Clausius | ✅ |
| `kelvin-sim` | Kelvin | ✅ |
| `bernoulli-sim` | Bernoulli | ✅ |
| `maxwell-sim` | Maxwell | ✅ |
| `ns-sim` | Navier-Stokes | ✅ |
| `celsius-sim` | Celsius | ✅ |
| `chatelet-sim` | Châtelet | ✅ |
| `foote-sim` | Eunice Newton Foote | ✅ |
| `herschel-sim` | Herschel | ✅ |
| `gen-sim` | Generación de calor | ✅ |
| `bl-sim` | Capa Límite | ✅ |
| `internal-bl-sim` | Capa Límite Interna | ✅ |
| `invsq-sim` | Ley Inverso Cuadrado | ✅ |
| `ottodiesel-sim` | Otto/Diesel | ✅ |
| `cpcv-sim` | Cp/Cv | ✅ |
| `pelton-sim` | Turbina Pelton | ✅ |
| `vortex-sim` | Vórtice | ✅ |
| `pennington-sim` | Pennington | ✅ |
| `telkes-sim` | Telkes | ✅ |
| `watt-sim` | Watt | ✅ |
| `water-substance-sim` | Sustancia pura (agua) | ✅ |
| `psychrometry-lab-sim` | Psicrometría | ✅ |
| `newton-sim` | Newton (simulador adicional) | ✅ (Integrado en newton-lab-modal) |

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

### Arquitectura de Inicialización Diferida (Lazy Init) para Canvas en Tabs

**Problema Crítico:** Los laboratorios interactivos que dependen de `Canvas` o `Chart.js` y están ubicados dentro de pestañas (`.tab-pane`) ocultas por defecto (`display: none`), fallarán silenciosamente si intentan inicializarse durante el `DOMContentLoaded` o mediante `safeInit` al arrancar la app. Esto ocurre porque al estar ocultos, las dimensiones del contenedor (`offsetWidth`, `offsetHeight`) son `0x0`, lo cual corrompe el contexto `2d` del canvas y lanza excepciones internas en Chart.js.

**Solución Estándar (Ejemplo: `multicapa-custom-sim`):**
1. **Guardia Inicial:** Dentro de la función de inicialización del laboratorio (`initXxxSimulation`), evaluar si las dimensiones son nulas. Si lo son, abortar y esperar. Usar una bandera global para registrar el éxito.
```javascript
function initMulticapaCustomSimulation() {
    if (window._multicapaInited) return; // Evitar doble init
    const canvas = document.getElementById('customMultiCanvas');
    if (!canvas || (canvas.offsetWidth === 0 && canvas.offsetHeight === 0)) return; // Diferir
    // ... inicializar ...
    window._multicapaInited = true; // Marcar éxito al final
}
```
2. **Reintento en Tab Switch:** Al cambiar a la pestaña de este laboratorio (en `switchTab`), una vez forzada la visibilidad (`display: block !important`), llamar a la función nuevamente para que tome las dimensiones reales.
```javascript
if (tabId === 'multicapa-custom-sim') {
    setTimeout(() => {
        if (!window._multicapaInited) initMulticapaCustomSimulation();
        // ... resize explícito y scroll ...
    }, 80); // Dar tiempo al renderizado del DOM
}
```

---

## 📝 Reglas para IA al modificar el código

1. **Vanilla JS únicamente**: No introducir dependencias de frameworks externos.
2. **Bilingüismo obligatorio**: Todo texto nuevo (botones, alertas, descripciones) debe agregarse al diccionario `translations.js`.
3. **MathJax**: Las fórmulas deben escribirse en formato TeX/LaTeX (`$$...$$` o `\(...\)`) para que MathJax las procese.
4. **Cambios quirúrgicos**: Identificar exactamente qué líneas cambiar. Nunca reemplazar bloques grandes de código sin necesidad. **Nunca** revertir a versiones anteriores.
5. **Patrón de datos en JS**: La data (`timelineEvents`) se define en JS y el HTML se inyecta/modifica dinámicamente vía DOM.
6. **Trabajo por lotes**: La implementación del fullscreen en laboratorios restantes se hará por lotes según indicación del usuario. Actualizar la tabla de inventario (✅/⬜) en este documento al completar cada lote.
7. **Firebase/seguridad**: Nunca reintroducir el guardado de `password` en texto plano en RTDB, el respaldo de login que compara contraseñas en el cliente, ni la auto-asignación de `role: "Administrador"` por email hardcodeado — estas prácticas ya fueron eliminadas de `app_v2.js` y bloqueadas por `database.rules.json` (`.validate: false` en `password`). Ver sección "🔐 Backend y Seguridad" arriba y `firebase/MIGRATION_PLAN.md` antes de tocar `handleAuthSubmit`, `handlePostComment`, `fetchRealUserCount` o cualquier archivo de `v4/firebase/`. Nunca subir `firebase/scripts/serviceAccountKey.json` (ni JSON equivalentes) a ningún repositorio.
8. **Regla #8 — Reordenamientos de layout vía CSS Grid, no vía DOM**: cuando un laboratorio ya usa el patrón `.simulation-workspace { display: contents; }` + `grid-template-areas` nombradas (ver ejemplos: `multicapa-custom-sim`, `foote-sim`, `contact-res-sim`), cualquier reordenamiento visual pedido debe resolverse reescribiendo únicamente los nombres de área de `grid-template-areas` (y el `grid-area` de los paneles afectados si cambia su nombre de área) — nunca reordenando el HTML. Esto preserva el orden del documento (importante para accesibilidad/lectores de pantalla) y minimiza el diff. Para un panel que deba pasar a "ancho completo" en un grid de 2 columnas, su área debe repetirse en ambos nombres de columna en la misma fila (ej. `"chart chart"`), reforzado opcionalmente con `width:100%` explícito.

---

## 🎨 Refinamientos de Layout Específicos por Laboratorio (Post-Lote)

Además del patrón genérico de fullscreen (apertura/cierre/teleport DOM), algunos
laboratorios reciben un **refinamiento de layout interno en modo fullscreen**
(reorganización visual vía CSS Grid) sin tocar su lógica de cálculo ni sus IDs
funcionales existentes. Estos refinamientos se documentan aquí para que futuras
sesiones de IA no dupliquen trabajo ni rompan la estructura.

### ✅ Eunice Foote (`foote-sim`) — Grid 2 columnas en fullscreen

Implementado exclusivamente en `#foote-sim.fullscreen` (no afecta el modo
normal ni ningún otro laboratorio). Cambios:

- **`index.html`**: se añadieron 11 atributos `id="foote-*"` a contenedores
  ya existentes dentro de `#foote-sim` (sin alterar texto, lógica ni IDs de
  controles/canvas ya usados por `app_v2.js`):
  `foote-controls-card`, `foote-controls-heading`, `foote-params-grid`,
  `foote-sliders-col`, `foote-areas-info`, `foote-action-buttons`,
  `foote-gas-col`, `foote-animation-card`, `foote-animation-heading`,
  `foote-canvas-container`, `foote-chart-wrapper`.
- **`style.css`**: nueva sección "EUNICE FOOTE LAB — FULLSCREEN 2-COLUMN
  LAYOUT" (al final del archivo). Usa el mismo patrón `display: contents`
  que `#multicapa-custom-sim.fullscreen .cm-row` para "aplanar" las tarjetas
  `.controls-card` / `.animation-card` y reubicar sus hijos en un grid con
  `grid-template-areas`: columna izquierda = panel de gases (vertical,
  compacto) + escenario de animación (cilindros de vidrio); columna derecha
  = gráfica de temperatura + barra de controles compacta debajo + tabla
  resumen + cita histórica. Incluye breakpoints responsive en 1100px y 768px
  (en móvil vuelve al flujo normal de una sola columna).
- **`app_v2.js`**: sin cambios. El controller IIFE del Lote 8
  (`FooteLab` / `resizeAssets`) y `initFooteSimulation` (dibujo de
  `footeCanvas` y `footeTempChart`) ya leen dimensiones dinámicamente
  (`clientWidth/clientHeight` del contenedor padre en cada frame), por lo
  que se adaptan automáticamente al nuevo grid sin requerir ningún ajuste.

Si se solicita un refinamiento similar para otro laboratorio, replicar este
mismo patrón: (1) añadir IDs `id="<lab>-*"` puramente aditivos a los
contenedores relevantes dentro de su `tab-pane`, (2) usar `display: contents`
en las tarjetas envolventes + `grid-template-areas` en `.simulation-workspace`
scoped a `#<lab-id>.fullscreen`, (3) no tocar `app_v2.js` salvo que el canvas
no lea dimensiones dinámicamente en cada resize/frame.

### ✅ Pared Multicapa Personalizada (`multicapa-custom-sim`) — Reorganización de layout (3 rondas)

Refinamiento exclusivo de `#multicapa-custom-sim` (modo normal y fullscreen).
No afecta lógica de cálculo (resistencias térmicas, temperaturas de
interfase, solver iterativo) ni la exportación CSV — sólo reubicación DOM/CSS
de tarjetas ya existentes. Estado **actual** (la ronda 3 restauró las
fronteras a la fila superior, junto al esquema, y compactó todos los
sliders/formularios del laboratorio):

- **Fila Superior `#cm-row-top`** (3 columnas `1fr 1.6fr 1fr`,
  `class="cm-row cm-row-top"`): columna izquierda = `#cm-panel-left-bc`
  (Frontera Izquierda); columna central = `#cm-panel-canvas` (Esquema
  Térmico y Flujo de Calor, con el selector de número de capas); columna
  derecha = `#cm-panel-right-bc` (Frontera Derecha).
- **Fila Intermedia `#cm-row-center`** (3 columnas `1fr 1.6fr 1fr`,
  `class="cm-row cm-row-center"`, alineada exactamente con las mismas
  columnas de `#cm-row-top`): columna izquierda = `#cm-panel-layers`
  (Configuración de las Capas — L, k por capa); columna central =
  `#cm-panel-chart` (Perfil de Temperatura T(x)); columna derecha =
  `#cm-panel-results` (Resultados de la Simulación — Métricas Globales y
  Tabla de Interfases apiladas verticalmente vía `min-width:100%` en sus
  dos bloques internos).
  - Ambas filas colapsan a 1 columna en modo normal por debajo de 1000px
    (`@media max-width:1000px`, selector combinado `#cm-row-top,
    #cm-row-center`).
  - ⚠️ **Ya no existen** ni el wrapper `#cm-thermal-visual-group` (ronda 1,
    apilaba canvas+chart) ni `.cm-row.cm-row-2` (ronda 2, agrupaba sólo las
    fronteras debajo de la fila central). Si aparecen en algún
    commit/backup antiguo, son obsoletos — no restaurar.
- **`#cm-panel-guide`**: callout didáctico (bilingüe ES/EN) sobre "Registro y
  Tabulación" / "Gráfica Paramétrica", sin cambios en esta ronda.
- **`.cm-row.cm-row-5`** (Tabulación + Gráfica Paramétrica): sin cambios.
- **Fullscreen** (`#multicapa-custom-sim.fullscreen #cm-layout-wrapper`):
  grid maestro con `grid-template-areas`: fila "left-bc canvas right-bc" →
  fila "layers chart results" (mismas 3 columnas, alineación vertical
  perfecta con la fila superior) → "guide" → "tabulation/custom-graph".
  Breakpoints en 1100px (2 columnas) y 768px (flujo vertical
  `.cm-row { display:flex }`).
- **Compactación de controles** (nueva sección CSS "COMPACTACIÓN EXTREMA DE
  BARRAS DESLIZANTES Y FORMULARIOS", scoped a `#multicapa-custom-sim`):
  `.control-group` y las tarjetas `.result-card` generadas dinámicamente
  dentro de `#cm-layers-container` (una por capa, vía
  `renderLayersConfig()` en `app_v2.js`) reciben `padding:6px 8px`,
  `margin-bottom:6px`, `gap:4px` (todos `!important` para pisar los estilos
  inline que pone JS). Los `label` del laboratorio pasan a
  `display:flex; justify-content:space-between` con `font-size:0.80rem`.
  Los `input[type=range]` bajan a `height:4px`. Los `input[type=number]` y
  `select` (incluye los desplegables de tipo de frontera y el selector de
  número de capas) bajan a `font-size:0.80rem`, `padding:2px 6px`,
  `height:24px`. Aplica tanto a los controles de frontera como a los
  sliders de espesor/conductividad de cada capa (ambos ya usaban
  `.control-group`), sin necesidad de tocar `app_v2.js`.
- **`app_v2.js`**: sin cambios en ninguna ronda — todos los IDs funcionales
  (`customMultiCanvas`, `customMultiChart`, `cm-layers-container`,
  `cm-rcond-val`, `cm-rtot-val`, `cm-q-val`, `cm-alert-box`,
  `cm-temp-table-body`, controles `cm-bc-l-*`/`cm-bc-r-*`, etc.) se
  conservaron intactos; sólo cambió su posición en el DOM y su densidad
  visual vía CSS.

### ✅ Configuración de las Capas de la Pared (`#cm-layers-container`) — Condensación 3x (ronda 4)

Refinamiento exclusivo de las tarjetas de capa dentro de
`#cm-layers-container` (dentro de `#cm-panel-layers`, columna izquierda de
`#cm-row-center`). No afecta la lógica de cálculo ni ningún otro
laboratorio — sólo la plantilla HTML que genera `renderLayersConfig()` en
`app_v2.js` (~línea 13885) y el CSS asociado en `style.css`.

- **`#cm-layers-container`**: pasó de `grid-template-columns: 1fr` (1
  columna) a `repeat(3, 1fr)` `!important` vía CSS — las capas (por
  defecto 3) quedan en paralelo, ocupando aprox. la misma altura vertical
  que antes usaba un único panel. Colapsa a 1 columna por debajo de 700px.
- **`renderLayersConfig()` (`app_v2.js`)**: cada tarjeta de capa cambió de
  `class="result-card"` con estilos inline a `class="result-card
  layer-card"` sin estilos inline (todo vía CSS scoped a
  `#multicapa-custom-sim .layer-card`). Estructura interna nueva:
  - `<h4 class="layer-title">` — "Capa N" + `<span id="cm-l{idx}-k-badge"
    class="layer-k-badge">` (badge de material, sin cambios de lógica).
  - `<div class="control-row">` × 2 (Espesor L, Conductividad k) — grid
    `auto 1fr auto` de 3 columnas: `<label for="cm-layer-L-{idx}">L{idx}</label>`
    (antes decía "Espesor (L{idx}):" — se acortó por espacio) → `<input
    type="range" id="cm-layer-L-{idx}" class="cm-layer-L" data-idx="{idx}">`
    (id nuevo puramente aditivo, `class`/`data-idx` sin cambios, usados por
    los event listeners) → `<span class="value-badge">` con el valor
    (mismo `id="cm-l{idx}-L-val"`/`cm-l{idx}-k-val` que ya leía el JS).
  - `<div class="layer-resistance-row">` — reemplaza el antiguo div con
    estilos inline; mismo `id="cm-l{idx}-R-val"` interno.
  - ⚠️ Las capas **ya no usan** `.control-group` (para no heredar el
    padding/gap de las fronteras) — usan `.control-row`. Si se necesita
    tocar de nuevo el padding de las fronteras (`#cm-panel-left-bc`/
    `#cm-panel-right-bc`), ese sigue siendo vía `.control-group`; el de las
    capas es vía `.layer-card` / `.control-row` (ver sección "CONDENSACIÓN
    3X" en `style.css`, justo después de "COMPACTACIÓN EXTREMA...").
- **Event listeners intactos**: `document.querySelectorAll('.cm-layer-L' /
  '.cm-layer-k')`, `getAttribute('data-idx')` y todos los
  `getElementById('cm-l{idx}-*')` usados por `solveSimulation()` y el
  badge de material siguen apuntando a los mismos IDs/clases — no se tocó
  ninguna función de cálculo.

### ✅ Reubicación del Perfil de Temperatura en modo normal (ronda 5 — "LOTE 1")

Refinamiento exclusivo del **modo normal** de `#multicapa-custom-sim`
(`#multicapa-custom-sim:not(.fullscreen)` en todas las reglas nuevas). No
toca `#multicapa-custom-sim.fullscreen` (verificado con captura de pantalla:
sigue siendo el grid de 3 columnas "left-bc canvas right-bc" / "layers chart
results" sin cambios), ni `app_v2.js`, ni ninguna fórmula/lógica de cálculo.

**Problema que resolvía**: en modo normal, la gráfica "Perfil de
Temperatura" (`#cm-panel-chart`, columna central de `#cm-row-center`) se
veía incompleta/cortada.

**Solución**: en `#cm-row-center`, `#cm-panel-layers` (Configuración de las
Capas) y `#cm-panel-chart` (Perfil de Temperatura) ahora comparten la
columna izquierda, uno debajo del otro; `#cm-panel-results` permanece en la
columna derecha, ocupando toda la altura combinada de ambos.

- **`index.html`**: se añadió un wrapper puramente aditivo
  `<div id="cm-center-left-col" class="cm-center-left-col">` dentro de
  `#cm-row-center`, envolviendo `#cm-panel-layers` seguido de
  `#cm-panel-chart` (mismo orden de documento que antes, sin reordenar
  nada). `#cm-panel-results` queda como hermano de ese wrapper, sin
  moverse. También se añadió `class="chart-container-cm"` (aditiva, sin
  quitar el `style` inline existente) al `<div>` que envuelve el
  `<canvas id="customMultiChart">`. Ningún `id`, `class` previa,
  `data-*` ni control interactivo fue renombrado o eliminado.
- **`style.css`**: nueva sección "LOTE 1 — MULTICAPA CUSTOM: REUBICACIÓN
  'PERFIL DE TEMPERATURA'" (justo después del bloque `@media
  (max-width:1000px)` que ya colapsaba `#cm-row-top`/`#cm-row-center` a 1
  columna, antes de "Guía didáctica").
  - `#multicapa-custom-sim #cm-center-left-col { display: contents; }`
    — **sin** scoping a `:not(.fullscreen)`: se aplica siempre. Esto es
    intencional y crítico: en fullscreen, `.cm-row` ya se aplana con
    `display:contents` (regla preexistente), así que al aplanarse también
    `#cm-center-left-col`, `#cm-panel-layers`/`#cm-panel-chart` quedan
    como hijos directos de `#cm-layout-wrapper` exactamente igual que
    antes de este cambio — el grid maestro de fullscreen no se entera de
    que el wrapper existe.
  - `#multicapa-custom-sim:not(.fullscreen) #cm-row-center` pasa de 3
    columnas (`1fr 1.6fr 1fr`, inline en index.html) a 2 columnas
    (`minmax(0,1.7fr) minmax(260px,1fr)` + `grid-template-rows: auto
    auto`), con `!important` en `grid-template-columns` porque el `style`
    inline de `#cm-row-center` tiene mayor especificidad que una regla de
    clase/ID sin `!important`.
  - `#cm-panel-layers` → `grid-column:1; grid-row:1`. `#cm-panel-chart` →
    `grid-column:1; grid-row:2`. `#cm-panel-results` → `grid-column:2;
    grid-row:1/-1` (ocupa ambas filas).
  - `#cm-panel-chart .chart-container-cm` → `width:100%; min-height:320px;
    height:320px` (refuerza el `style` inline existente).
  - Nuevo bloque `@media (max-width:1000px)` con el **mismo selector**
    `:not(.fullscreen) #cm-row-center` (para ganar el empate de
    especificidad por orden de aparición) que resetea
    `grid-template-columns:1fr !important` y `grid-column:1; grid-row:auto`
    en los tres paneles — sin este reset, el layout de 2 columnas de
    escritorio se filtraba por debajo de 1000px pese a la regla
    preexistente (sin `!important`) que intentaba colapsar
    `#cm-row-top`/`#cm-row-center` a 1 columna.
- **`app_v2.js`**: sin cambios — `customMultiCanvas`, `customMultiChart`,
  `cm-layers-container` y todos los IDs de resultados siguen intactos;
  Chart.js lee `clientWidth/clientHeight` del contenedor en cada resize,
  por lo que se adapta automáticamente al nuevo layout.
- **Verificado con Playwright** (captura de bounding boxes en tres
  escenarios): escritorio modo normal (capas y gráfica apiladas en la
  misma columna x, resultados a la derecha abarcando ambas filas),
  fullscreen (layout de 3 columnas original, sin cambios) y viewport
  angosto <1000px (las tres tarjetas colapsan a 1 columna, mismo orden de
  documento: capas → gráfica → resultados).

Si se solicita un refinamiento similar de reubicación en modo normal para
otro laboratorio, replicar este patrón: (1) envolver los paneles a agrupar
en un wrapper aditivo con `display:contents` **sin** scoping a
`:not(.fullscreen)` (para que se aplane igual en ambos modos y no rompa un
eventual grid de fullscreen), (2) posicionar los paneles reales (no el
wrapper) vía `grid-column`/`grid-row` scoped a `:not(.fullscreen)`, con
`!important` sólo si el contenedor tiene `grid-template-columns` inline en
el HTML, (3) replicar el mismo selector en el/los `@media` de colapso a 1
columna para evitar que la regla de escritorio gane el empate de
especificidad en viewports angostos.

### ✅ Resistencia Térmica por Contacto (`#contact-res-sim-modal` / `#contact-res-sim`) — Reubicación de layout vía CSS Grid (ronda 5, `style.css`, 2026-08-21)

Primera ronda de refinamiento de este laboratorio (5 ajustes quirúrgicos
pedidos, aplicados exclusivamente dentro de `#contact-res-sim-modal` /
`#contact-res-sim`, sin tocar ningún otro laboratorio). `index.html` **no
necesitó cambios** en esta ronda (diff de bytes = 0): el botón de cierre
`#contact-res-close-btn` ya era hijo directo del modal en el DOM, así que
el requisito de "no quedar atrapado dentro de contenedores con overflow"
se resolvió verificando la jerarquía existente, no moviéndola.

**`style.css`** — el laboratorio ya usaba el patrón `display: contents` +
`grid-template-areas` nombradas (regla base, sin scoping a `.fullscreen`,
~línea 6269). Siguiendo la **Regla #8** (ver más abajo): reordenamiento
vía reescritura de `grid-template-areas`, no vía DOM:

- `grid-template-areas` reescrito de
  `"controls press" / "controls chart" / "controls results"` a
  `"controls press" / "results press" / "chart chart"` — esto mueve la
  tarjeta de resultados (`results`) a la fila inmediatamente debajo de los
  controles (cumple requisito #2: resultados justo debajo de los
  sliders/selectores), y la gráfica (`chart`) queda en su propia fila
  ocupando ambas columnas (cumple requisitos #3 y #4: la gráfica queda
  directamente debajo de la tabla de interfases y a ancho completo).
- `.animation-card:has(#contactResChart)` reforzado con
  `grid-column: 1 / -1; width: 100%` (redundante con el span de
  `grid-template-areas`, pero explícito para evitar cualquier ambigüedad).
- Nueva regla `.chart-container { width: 100% }` scoped al laboratorio.
- Requisito #5 (IDs semánticos y soporte bilingüe `.lang-es`/`.lang-en`):
  verificado sin cambios — ningún control cambió de `id` ni perdió sus
  spans de idioma al reubicarse, ya que la reubicación fue puramente vía
  `grid-area`, sin tocar el DOM.

Si se solicita reordenar de nuevo esta sección u otra similar que ya use
el patrón de grid nombrado: reescribir sólo `grid-template-areas` (y el
`grid-area` de cualquier panel cuyo nombre de área cambie) es suficiente
en la enorme mayoría de los casos — no mover HTML. Para un panel que deba
pasar a "ancho completo" en un grid de 2 columnas, su área debe repetirse
en ambos nombres de columna en la misma fila (ej. `"chart chart"`), y
conviene añadir `width:100%` explícito en la regla del panel como refuerzo
visual, aunque el span del grid ya lo garantice. (Formalizado como la
Regla #8 numerada en la sección "📝 Reglas para IA" arriba.)

### ✅ Resistencia Térmica por Contacto — Botón cerrar, color de labels, densidad de resultados + fix de bug real de z-index (ronda 6, `style.css` + `app_v2.js`, 2026-08-21)

Sexta ronda de refinamiento de `contact-res-sim` / `#contact-res-sim-modal`.
`index.html` **no se tocó** (diff de bytes = 0 contra el final de la ronda
5, verificado). Esta ronda tuvo dos partes: 5 ajustes CSS pedidos +
5 ajustes/verificaciones JS pedidos, y — lo más importante — **un bug real
de superposición de layout encontrado y corregido durante la verificación
con Playwright**, no reportado por el usuario sino descubierto al probar.

**CSS (`style.css`):**

1. `#contact-res-close-btn`: `top` 20px→15px, `right` 25px→20px. El
   `z-index` pedido explícitamente por el usuario era `10005`, pero **no
   era suficiente** (ver el bug real más abajo) — se subió a `1000000`,
   replicando el patrón ya usado por `#newton-lab-close-btn`/
   `#fourier-lab-close-btn` en el propio `style.css`.
2. Color azul celeste `#38bdf8` (modo oscuro) / `#0369a1` (modo claro,
   `body.light-theme`) aplicado a `#contact-res-sim-modal .control-group.
   control-group-compact label` (las etiquetas de presión/rugosidad/
   material/fluido/temperaturas) y a `#contact-res-sim-modal .sim-
   subheading` (los títulos h4 "Prensa Mecánica..." / "Perfil de
   Temperatura..."). El `.value-badge` (valor numérico junto a cada
   etiqueta) no se ve afectado porque ya tiene su propio `color` explícito
   (naranja), que gana sobre el color heredado del `label` padre.
3. `#contact-res-sim-modal #contact-res-results` (la tarjeta de
   resultados, ya reubicada bajo los controles desde la ronda 5) pasó a
   `display:flex; flex-direction:column; gap:6px` — elimina cualquier
   margin-collapse entre `.result-card` y `.info-card` internos.
4. `.animation-card:has(#contactResChart)` (la gráfica, ya de ancho
   completo desde la ronda 5) recibió `grid-column: 1 / -1` explícito
   (refuerzo redundante pero inequívoco del span "chart chart" de
   `grid-template-areas`) y `margin-top: 12px`; su `.chart-container`
   interno recibió `min-height: 280px`.
5. Comentario de verificación (sin cambio de código, ya era correcto):
   `#contact-res-sim-modal.fullscreen` conserva `overflow-y:auto`, y
   `#contact-res-close-btn` no puede ser recortado por overflow de ningún
   hijo porque es hijo DIRECTO del modal y usa `position:fixed`.

**⚠️ Bug real encontrado y corregido (no estaba en la lista de 5 puntos,
   surgió de la verificación JS #5 "comprobar que no existan...
   superposiciones de layout"):** con Playwright (`elementFromPoint`/
   `elementsFromPoint` en las coordenadas reales del botón) se detectó que
   `#contact-res-close-btn` en modo fullscreen quedaba **tapado para
   clics** por `#contact-toggle` (botón "Mostrar Información de Contacto"
   de la barra flotante superior del sitio — el `<div style="position:
   fixed; top:20px; right:20px; z-index:99999">` justo después de
   `<body>` en `index.html`, con selector de idioma/Wiki/Clases/Tema/
   Contacto). Causa raíz: **no es un problema del z-index del botón en sí,
   sino de contexto de apilamiento (stacking context)**. El botón es hijo
   de `#contact-res-sim-modal.fullscreen`, que también es
   `position:fixed` con su propio `z-index` — eso convierte al modal en un
   contexto de apilamiento propio, y el z-index del botón (por altísimo
   que sea) sólo compite *dentro* de ese contexto, nunca directamente
   contra hermanos del modal (como la barra flotante superior). Lo que
   importa frente a esos hermanos es el z-index del **contenedor del
   modal**, que sólo tenía `9999` — muy por debajo de `99999`. Se corrigió
   subiendo `#contact-res-sim-modal.fullscreen` de `z-index:9999` a
   `z-index:999999`, exactamente el mismo patrón ya usado (y ya comentado
   in situ) por `#newton-lab-modal.fullscreen`/`#fourier-lab-modal.
   fullscreen`: "z-index deliberadamente por debajo del botón de cierre
   (1000000). El modal cubre la página pero el botón × siempre queda
   encima." Verificado tras el fix: `elementFromPoint` en el centro del
   botón devuelve `contact-res-close-btn` (no `contact-toggle`), y un test
   de clic real de Playwright sobre el botón ya cierra el modal sin
   timeout, en dos ciclos completos de abrir/cerrar.

**JS (`app_v2.js`), dentro del mismo IIFE de ContactRes:**

1/2. `resizeChart()` reescrita: antes llamaba `_chart.resize()` sin
   argumentos (Chart.js recalcula desde el contenedor, pero de forma
   asíncrona vía su propio ResizeObserver interno — con la gráfica ahora
   de ancho completo, un salto de ancho más grande podía notarse con un
   frame de retraso). Ahora lee `_chart.canvas.parentElement.clientWidth/
   clientHeight` y llama `_chart.resize(width, height)` con ambos
   argumentos — forma soportada por Chart.js para forzar tamaño exacto de
   forma síncrona. **Deliberadamente no se asigna `canvas.width =
   container.clientWidth` a mano** (como sugería literalmente el pedido):
   Chart.js ya gestiona `canvas.width/height` en píxeles de dispositivo
   (multiplicando por `devicePixelRatio`) internamente en su propio
   `resize()`; sobrescribirlo después dejaría esos valores
   desincronizados y produciría exactamente la distorsión que se pedía
   evitar. Verificado con un stub mínimo de `Chart` inyectado vía
   Playwright (`addInitScript`, ya que el sandbox de pruebas no tiene
   acceso de red al CDN real de Chart.js): el canvas de `contactResChart`
   pasa de 550px (modo normal, contenedor 552px) a 1300px (fullscreen,
   contenedor 1302px) y vuelve a 550px al cerrar con Escape — la
   diferencia constante de 2px es el `border:1px` del `.chart-container`
   (`clientWidth` excluye border), no un error.
3. Verificado sin cambios: `attachInputListeners()` ya conecta `input` en
   los 5 sliders y `change` en los 3 `<select>`, todos disparando
   `updateAll()` de forma síncrona y sin debounce — los badges bajo cada
   control ya responden en tiempo real. Confirmado en vivo con Playwright:
   mover el slider de presión a 10 MPa actualiza el badge
   (`#contact-res-pressure-val`) y `#contact-res-rc-val` inmediatamente.
4. Verificado sin cambios: tanto el `keydown` de Escape como el click en
   `#contact-res-close-btn` llaman al mismo `closeContactResFullscreen()`,
   que remueve `CFG.bodyLockClass` (`contact-res-open`) de `<body>` y
   resetea `document.body.style.overflow` en su `cleanup()` — un único
   camino de código para ambos disparadores. Confirmado con Playwright:
   `document.body.className` y `.style.overflow` quedan limpios tras
   cerrar por cualquiera de las dos vías.
5. Verificación de consola/layout: cero errores de JavaScript propios del
   laboratorio tras los cambios (los únicos mensajes de consola en el
   entorno de pruebas — `Chart is not defined`, `MathJax.typesetPromise`,
   `net::ERR_TUNNEL_CONNECTION_FAILED`/404 — son por la falta de acceso a
   los CDNs externos *del sandbox de pruebas*, no del sitio real desplegado
   con acceso a internet). El hallazgo real de esta verificación fue el
   bug de z-index del botón de cerrar, ya descrito y corregido arriba.

**Verificado**: `node --check app_v2.js` sin errores; balance de llaves
CSS 883/883 y JS 5361/5361 (ambos balanceados); `diff` de bytes de
`index.html` contra el final de la ronda 5 → 0 cambios; suite de
Playwright con stub de Chart.js confirmando resize correcto en ambas
direcciones, badges en tiempo real, y los dos ciclos completos de abrir/
cerrar fullscreen (por Escape y por click) sin quedar atascado.

Si se solicita subir el z-index de un botón de cerrar (o cualquier
elemento fixed) "por encima de todo" en algún laboratorio y no basta con
subir el z-index del propio elemento: comprobar primero si su ancestro
inmediato con `position` no-estático (aquí, el propio modal en modo
`.fullscreen`) tiene un z-index bajo — si lo tiene, ese ancestro es quien
compite contra hermanos externos (como la barra flotante superior del
sitio, `z-index:99999`), no el elemento hijo. La solución ya establecida
en el sitio (Newton/Fourier, y ahora ContactRes) es subir el z-index del
propio `.fullscreen` a un valor muy alto pero estrictamente menor al del
botón de cerrar (p. ej. `999999` de contenedor vs `1000000` de botón).

### ✅ Resistencia Térmica por Contacto — Layout fullscreen apilado, compactación de sliders, labels en una línea + fix de bug real de color en labels (ronda 7, `style.css` + `index.html`, 2026-08-21)

Séptima ronda de refinamiento de `contact-res-sim` / `#contact-res-sim-modal`.
`app_v2.js` **no se tocó** (verificado que el `resizeChart()` de la ronda 6,
ya basado en `container.clientWidth/clientHeight`, satisface automáticamente
el nuevo layout apilado sin ningún cambio adicional — ver verificación JS
más abajo). `translations.js` tampoco se tocó (estos labels usan el patrón
`.lang-es`/`.lang-en`, no el diccionario de canvas).

**1. Layout exclusivo de modo fullscreen (`style.css`) — reordenamiento vía
   Regla #8 (grid-template-areas), no vía DOM:**

Se añadió un override de `grid-template-areas` scoped exclusivamente a
`#contact-res-sim-modal.fullscreen` (después del bloque base `.fullscreen`
ya existente de la ronda 6), reutilizando los MISMOS nombres de área
("controls", "press", "results", "chart") que la regla base sin-`.fullscreen`,
sólo remapeados a una disposición apilada de 2 filas × 2 columnas:

```css
#contact-res-sim-modal.fullscreen {
    grid-template-areas:
        "openbtn   openbtn"
        "intro     intro"
        "controls  press"
        "results   chart";
}
#contact-res-sim-modal.fullscreen .animation-card:has(#contactResChart) {
    grid-column: auto;   /* anula el "1 / -1" de ancho completo de la ronda 6, */
    margin-top: 0;        /* sólo vigente en modo NO-fullscreen */
}
```

Como el modo normal (sin `.fullscreen`) no se tocó, su `grid-template-areas`
de la ronda 5 (`"controls press" / "results press" / "chart chart"`) sigue
intacto — verificado con Playwright: en modo normal la gráfica sigue en
552px de ancho abarcando ambas columnas y la prensa en su columna angosta
de 184px; en fullscreen, gráfica y prensa comparten exactamente la misma
`x` y el mismo ancho (934px de tarjeta / 932px de canvas), apiladas una
sobre otra en la columna visual derecha. El espacio entre la tarjeta de la
prensa y la de la gráfica en fullscreen es exactamente los 22px de
`row-gap` ya declarado (verificado vía `getBoundingClientRect` de ambos
`.animation-card`, no de los canvases internos — medir los canvases
directamente da una cifra mayor porque incluye el título `h4.sim-subheading`
y el padding interno de cada tarjeta, lo cual llevó a una sospecha inicial
de "gap excesivo" que resultó ser una medición equivocada, no un bug).

**2. Compactación máxima de sliders (`style.css`):**

- `#contact-res-controls` (contenedor flex-column): `gap` 6px→4px (este
  gap ES el "margin-bottom" entre bloques — ver nota de diseño en el CSS:
  usar un `margin-bottom` adicional en `.control-group-compact` duplicaría
  el espaciado sobre este gap ya existente).
- `.control-group-compact-row` (grid de 2 columnas): `gap` 6px→4px.
- `.control-group.control-group-compact`: `padding` 6px 8px→4px; `gap`
  interno (label→slider) 4px→3px; `font-size` añadido 0.85rem.
- `input[type="range"]` scoped a `#contact-res-controls`: `height` 4px→3px
  (ya existente de ronda anterior, ahora reforzado); thumb
  `::-webkit-slider-thumb` 14px (global) → 11px scoped; añadidas las
  equivalentes `::-moz-range-track`/`::-moz-range-thumb` (Firefox), que la
  regla global del sitio no cubre.

**3. Labels/headers en una sola línea horizontal (`style.css`):**

`#contact-res-sim-modal .control-group.control-group-compact label`:
`display:flex; align-items:center; justify-content:space-between;
flex-wrap:nowrap; white-space:nowrap; gap:8px; margin-bottom:0;
font-size:0.80rem` (antes 0.85rem). El `white-space:nowrap` en el `<label>`
se hereda a sus hijos de texto, así ningún nombre de variable, símbolo LaTeX
o paréntesis de unidad puede partirse en dos líneas.

**4. Acortamiento de texto en `index.html` (para que quepa en una línea sin
   overflow dentro de las columnas de ~150-160px de `.control-group-compact-row`):**

| Control | ES antes → ahora | EN antes → ahora |
|---|---|---|
| Material | "Material de los Sólidos en Contacto:" → "Material de Contacto:" | "Material of the Solids in Contact:" → "Contact Material:" |
| Fluido | "Fluido / Material Intersticial:" → "Medio Intersticial:" | "Interstitial Fluid / Material:" → "Interstitial Medium:" |
| Rugosidad 1 | "Rugosidad Superficial 1 ($R_{a,1}$):" → "Rugosidad 1 ($R_{a,1}$):" | "Surface Roughness 1 ($R_{a,1}$):" → "Roughness 1 ($R_{a,1}$):" |
| Rugosidad 2 | "Rugosidad Superficial 2 ($R_{a,2}$):" → "Rugosidad 2 ($R_{a,2}$):" | "Surface Roughness 2 ($R_{a,2}$):" → "Roughness 2 ($R_{a,2}$):" |
| T caliente | "Temperatura Extremo Caliente ($T_{\text{hot}}$):" → "Extremo Caliente ($T_{\text{hot}}$):" | "Hot End Temperature ($T_{\text{hot}}$):" → "Hot End ($T_{\text{hot}}$):" |
| T fría | "Temperatura Extremo Frío ($T_{\text{cold}}$):" → "Extremo Frío ($T_{\text{cold}}$):" | "Cold End Temperature ($T_{\text{cold}}$):" → "Cold End ($T_{\text{cold}}$):" |
| Presión (EN) | (multi-línea implícita) → "Contact Pressure ($P$):" en una sola línea | — |

Todos los IDs (`for=`, `id=` de selects/inputs) y la estructura
`.lang-es`/`.lang-en` se preservaron sin cambios — sólo el texto interno
se acortó. Verificado con `scrollWidth` vs `clientWidth` de cada `<label>`
vía Playwright, en modo normal Y en fullscreen: cero labels con overflow
(`scrollWidth === clientWidth` en las 7 filas compactas).

**⚠️ Bug real encontrado y corregido durante la verificación visual (no
   estaba en la lista de 5 puntos, análogo al bug de z-index de la ronda
   6):** al inspeccionar visualmente el fullscreen ya con labels en una
   línea, el texto de las etiquetas se veía naranja en vez del azul celeste
   que la ronda 6 supuestamente ya había aplicado. Causa raíz: la regla
   azul de ronda 6 (`#contact-res-sim-modal .control-group.control-group-
   compact label { color: #38bdf8; }`) sólo fija el color del propio
   `<label>`, pero el TEXTO real vive dentro de `<span class="lang-es">`/
   `<span class="lang-en">` hijos — y existe una regla GLOBAL, sitewide,
   usada por todos los laboratorios (`style.css` línea ~832:
   `.control-group label span { color: var(--accent-orange); }`,
   especificidad 0-1-2) que sí compite directamente por esos `<span>` y
   gana porque la regla azul de ronda 6 no incluye `span` en su selector
   (nunca compitió por ese elemento). Se corrigió añadiendo un selector con
   ID que apunta explícitamente a `.lang-es`/`.lang-en` (nunca a
   `.value-badge`, cuyo naranja es intencional y ya estaba protegido por su
   propia regla con ID):

```css
#contact-res-sim-modal .control-group.control-group-compact label .lang-es,
#contact-res-sim-modal .control-group.control-group-compact label .lang-en {
    color: #38bdf8;
}
body.light-theme #contact-res-sim-modal .control-group.control-group-compact label .lang-es,
body.light-theme #contact-res-sim-modal .control-group.control-group-compact label .lang-en {
    color: #0369a1;
}
```

Verificado con `getComputedStyle` vía Playwright antes/después: las 7
etiquetas pasan de `rgb(249,115,22)` (naranja, bug) a `rgb(56,189,248)`
(azul celeste, correcto) en ambos modos (normal/fullscreen), mientras
`.value-badge` permanece en naranja como estaba previsto. Los títulos
`h4.sim-subheading` ("Prensa Mecánica..." / "Perfil de Temperatura...") NO
tenían este bug — ya computaban azul correctamente, porque sus `<span>`
hijos no son descendientes de ningún `.control-group` y por tanto nunca
coincidían con la regla global naranja.

**Verificación JS (`app_v2.js`, sin cambios de código):** el `resizeChart()`
reescrito en la ronda 6 (basado en `_chart.canvas.parentElement.
clientWidth/clientHeight`) y la función `draw()` del canvas de la prensa
(que también lee las dimensiones de su contenedor en cada frame) ya
resuelven dinámicamente el nuevo ancho de columna compartido sin necesitar
ningún cambio — confirmado con un stub de Chart.js vía Playwright: en
fullscreen, tanto el canvas de la prensa como el canvas de la gráfica miden
932px (contenedor 934px, la diferencia de 2px es el `border:1px` del
`.chart-container`/`.canvas-container`), es decir, ambos usan el 100% del
ancho de su columna compartida, y vuelven a sus anchos de modo normal
(182px / 550px respectivamente) al cerrar.

**Verificado**: balance de llaves CSS 890/890; `node --check app_v2.js`
sin errores (sin cambios); `grep` confirma cero restos del texto verbose
anterior en `index.html`; suite de Playwright confirmando: (a) layout
apilado correcto en fullscreen sin alterar modo normal, (b) cero overflow
de labels en las 7 filas compactas en ambos modos, (c) color azul celeste
correcto tras el fix de especificidad, (d) cierre limpio por click Y por
Escape sin regresión del fix de z-index de ronda 6, (e) cero errores de
consola reales (sólo ruido de CDN/sandbox ya conocido).

Nota para rondas futuras: cualquier nuevo color de texto que se quiera
aplicar a labels de `.control-group` en CUALQUIER laboratorio del sitio
debe apuntar explícitamente a los `span` hijos (o usar un selector con
especificidad ≥ ID), no sólo al `<label>` — la regla global
`.control-group label span { color: var(--accent-orange) }` (línea ~832)
siempre ganará sobre un color puesto sólo en el `<label>` padre, porque
`color` no se hereda "a través" de una regla ya explícita en el hijo.
