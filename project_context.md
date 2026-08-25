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
| `nat-conv-sim` | Convección Natural | ✅ |
| `nusselt-sim` | Número de Nusselt | ✅ |
| `reynolds-sim` | Número de Reynolds | ✅ |
| `prandtl-sim` | Número de Prandtl | ✅ |
| `doublepipe-sim` | Intercambiador Doble Tubo | ✅ |
| `microchannel-sim` | Microcanales | ✅ |
| `boiling-sim` | Ebullición | ✅ |
| `planck-sim` | Radiación de Planck | ✅ |
| `vf-sim` | Factor de Vista | ✅ |
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

---

## 🔵 Categorización de Laboratorios en "Conducción" (LOTE 1-3, 2026-08-24)

Reorganización solicitada de 13 laboratorios para que queden agrupados bajo
la categoría **Conducción** del filtro de laboratorios (píldoras 🔵/🟢/🔴 en
`#tc-pill-filters`, `index.html` ~línea 360-386). Trabajo en 3 lotes.

### Hallazgo clave (LOTE 1) — dónde vive realmente la categorización

`timelineEvents` (biografías históricas, `app_v2.js` líneas 2-~1770) **NO**
controla el filtro de laboratorios — sólo pinta las tarjetas de la línea de
tiempo. El mecanismo real que decide si un laboratorio aparece bajo el pill
"Conducción" es:

- `window.filterLabs()` (`app_v2.js` ~línea 2214): lee el atributo
  **`data-tags`** de cada `<button class="tab-btn">` del nav lateral
  (`hasTag()`, línea 2221-2224) y compara contra el token `"conduccion"`
  (español, sin tilde, minúscula). Un botón con `class="lab-otros"` o
  `data-category="Otros"` queda excluido del filtro "Todos" (línea 2245-2247).
- `window.activatePillFilter()` (~línea 2300) sincroniza el pill clicado con
  el `<select id="lab-filter-category">` y llama a `filterLabs()`.

Estructuras secundarias, independientes del filtro de laboratorios:
- `wikiDatabase` (`app_v2.js` líneas 2340-2462): sólo 11 conceptos para el
  modal "Wiki Interactiva", con su propio `category` (minúsculas sin tilde,
  valor único, comparado con `===`). Sólo 3 de los 13 labs tienen entrada
  ahí: `fourier-ley` (conduccion, ya correcto), `heisler-transitorio`
  (conduccion, ya correcto), `nusselt-numero` (**se dejó en `conveccion`**
  a petición expresa del usuario — el campo es de valor único y el concepto
  compara ambos mecanismos; cambiarlo lo sacaría del filtro Convección de
  esa mini-enciclopedia).
- `timelineEvents`: sólo 6 entradas tienen `"tab-target"` explícito
  vinculándolas a un lab (`chatelet-sim`, `foote-sim`, `maxwell-sim`,
  `pennington-sim`, `telkes-sim`, `contact-res-sim`); su `category` sólo
  afecta el color/filtro de la propia línea de tiempo, no el nav de labs.

### LOTE 2 (`app_v2.js`) — sólo 2 cambios reales posibles

De los 13 laboratorios, **10 no tienen ningún objeto con propiedad
`category`/`discipline` en `app_v2.js`** — lo único que tienen ahí son los
`CFG` de sus controllers de fullscreen (`modalId`/`openBtnId`/`closeBtnId`),
que están fuera de alcance por regla explícita ("no modificar controllers de
fullscreen"). Sólo existían 2 objetos editables con sentido real:

- `timelineEvents` → entrada de **Mary Engler Pennington** (`tab-target:
  "pennington-sim"`): `category: "Otros"` → `category: "Conducción"`
  (línea 455).
- `timelineEvents` → entrada de **Maria Telkes** (`tab-target:
  "telkes-sim"`): `category: "Otros"` → `category: "Conducción"`
  (línea 588).

Se usó el string `"Conducción"` (no `"conduction"`) porque es la convención
ya usada por Fourier/Biot/Cooper-Mikic-Yovanovich en ese mismo array.
Verificado: ambas entradas tienen `tab-target` explícito (tiene prioridad
sobre el fallback por `category` en la función que resuelve a qué lab
navegar el timeline, líneas ~1511-1537 y ~2002-2028), así que el cambio de
`category` es puramente de clasificación/color, sin efecto en la navegación.
`node --check` OK; diff de bytes contra el original → exactamente esas 2
líneas cambiaron.

### LOTE 3 (`index.html` + `translations.js`) — el cambio que sí controla el filtro

Edición quirúrgica de `data-tags` en 5 de los 13 `<button class="tab-btn">`
del nav lateral (los otros 8 ya tenían `conduccion` en `data-tags` desde
antes: `fourier-sim`, `nusselt-sim`, `transient-sim`, `contact-res-sim`,
`res-sim`, `multicapa-custom-sim`, `gen-sim`, `fin-sim`):

| Lab (`data-target`) | Línea | Cambio |
|---|---|---|
| `pennington-sim` | 451 | Se agregó `data-tags="transferencia-calor conduccion"` (no tenía) |
| `multi-sim` | 479 | Se agregó `data-tags="transferencia-calor conduccion"`; se quitó `class="lab-otros"` |
| `par-sim` | 480 | `data-tags` pasó de `"transferencia-calor conveccion radiacion"` a `"transferencia-calor conduccion conveccion radiacion"` |
| `insulated-sim` | 484 | Se agregó `data-tags="transferencia-calor conduccion"`; se quitó `class="lab-otros"` |
| `telkes-sim` | 494 | Se agregó `data-tags="transferencia-calor conduccion"` (no tenía) |

Sin cambios de texto visible, IDs, callbacks ni estructura de grid (Regla
#8 no aplica: no se tocó ningún `grid-template-areas` ni wrapper
`display:contents`). Diff de bytes contra el original → exactamente esas 5
líneas cambiaron; conteo de `<button`/`</button>` idéntico antes/después
(214/214); `lab-otros` bajó de 6 a 4 ocurrencias (quedan sólo
`clausius-sim`, `maxwell-sim`, `pelton-sim`, `microchannel-sim`, fuera de
alcance de este lote).

**`translations.js`**: verificado, sin cambios necesarios. La clave
`"Conducción": "Conduction"` ya existía (línea 514). Los 13 nombres de
laboratorio ya tenían su par ES/EN, ya sea vía spans `.lang-es`/`.lang-en`
inline en el botón (`contact-res-sim`, `pennington-sim`, `telkes-sim`) o vía
entrada en el diccionario `window.uiTranslations` para el texto plano del
botón, ya usado por el walker de nodos de texto de `app_v2.js` (~línea
20930) al cambiar a inglés (`"Pared Multicapa": "Multilayer Wall"` línea
815, `"Placa Plana Aislada": "Insulated Flat Plate"` línea 827,
`"Resistencias en Paralelo": "Parallel Resistors"` línea 877, todas
preexistentes). No se agregó ninguna clave nueva.

### Verificación funcional (Playwright headless, `file://index.html` local)

1. **Filtro de categoría**: se simuló el click en el pill `data-filter=
   "conduccion"` (`activatePillFilter` → `filterLabs`) y se listaron los
   `.tab-btn` visibles: **exactamente 13**, y coinciden 1:1 con los 13
   `data-target` esperados (`fourier-sim`, `nusselt-sim`, `transient-sim`,
   `contact-res-sim`, `pennington-sim`, `multi-sim`, `par-sim`, `res-sim`,
   `insulated-sim`, `multicapa-custom-sim`, `gen-sim`, `telkes-sim`,
   `fin-sim`). Verificado también por análisis estático (parseo de los 44
   botones `.tab-btn` del nav) con el mismo resultado.
2. **Fullscreen (abrir/cerrar) de los 5 labs recién editados**
   (`pennington-sim`, `telkes-sim`, `multi-sim`, `par-sim`,
   `insulated-sim`): en los 5, `switchTab()` activa el pane, el botón
   `<prefijo>-lab-open-btn` añade la clase `.fullscreen`, el botón de cerrar
   es el elemento superior en sus propias coordenadas (`elementFromPoint`,
   sin bloqueo de z-index) y `Escape` cierra correctamente (clase
   `.fullscreen` removida). Sin regresión — no se tocó ningún controller de
   fullscreen en estos lotes.
3. **Lazy init / dimensiones de Canvas**: para los 13 labs, al activar su
   pestaña vía `switchTab()`, todos sus `<canvas>` internos reportan
   `offsetWidth`/`offsetHeight` > 0 (no 0×0), confirmando que el guard de
   inicialización diferida no abortaría en un entorno real con Chart.js
   cargado.
4. Los únicos errores de consola observados en el sandbox de pruebas son
   `Chart is not defined` / `MathJax.typesetPromise is not a function` /
   `net::ERR_FILE_NOT_FOUND` — por falta de acceso a los CDNs externos y a
   recursos de imagen en el entorno de pruebas local, no por el sitio real
   desplegado con acceso a internet (mismo patrón ya documentado en rondas
   anteriores de `contact-res-sim`).

**Estado final**: los 13 laboratorios pedidos quedan bajo la categoría
Conducción del filtro de laboratorios. Si se pide extender esta misma
categorización a otro laboratorio en el futuro: agregar `conduccion` a su
`data-tags` en `index.html` (o crearlo si el botón no tiene `data-tags`) y,
si el botón tenía `class="lab-otros"`, quitarla — ésa es la única edición
que controla el filtro real; no hace falta tocar `timelineEvents` ni
`wikiDatabase` salvo que ese laboratorio tenga una entrada específica ahí.

---

## 🟠 Reubicación de "Newcomen vs. Watt" a "Motores de Calor" (2026-08-24)

Se movió el laboratorio `watt-sim` (Newcomen vs. Watt, 1712-1769) de la
sección "Laboratorios de Termodinámica" a la sección "Motores de Calor" en
el nav lateral de `index.html`.

**Hallazgo clave — no existe `data-subcategory` en el sitio (verificado con
grep, 0 resultados).** La pertenencia de un laboratorio a una
sección/subcategoría del nav (Principios, Mecánica de Fluidos,
Termodinámica, Motores de Calor, Circuitos Térmicos, Aplicaciones,
Comunidad) **no se decide por ningún atributo `data-*`, sino por posición
en el DOM**: tanto `window.filterLabs()` (`app_v2.js` ~línea 2229-2240,
usado por `#lab-filter-category`) como el `<option value="Motores">` de ese
mismo `<select>` (`index.html` línea 335-336) resuelven la sección de cada
`.tab-btn` recorriendo `previousElementSibling` hasta el `.tab-category-
title` más cercano y comparando su `textContent`. Por eso el único cambio
real posible (y el que se aplicó) fue mover físicamente el `<button
data-target="watt-sim">` en `index.html`, no agregar un atributo nuevo.

**`index.html`** (diff de bytes: sólo esas 2 líneas — una borrada de su
posición anterior y una insertada en la nueva; conteo `<button`/`</button>`
idéntico antes/después, 214/214; el string `data-target="watt-sim"`
sigue apareciendo exactamente 1 vez):
- Se quitó `<button class="tab-btn" data-target="watt-sim">Newcomen vs.
  Watt (1712-1769)</button>` de la sección "Laboratorios de Termodinámica"
  (entre `chatelet-sim` y `pennington-sim`).
- Se agregó la misma línea, sin cambios de contenido/atributos, justo
  después del `<div class="tab-category-title">Motores de Calor</div>` y
  antes de `carnot-sim` (orden cronológico: Newcomen/Watt 1712-1769 →
  Carnot 1824 → Otto/Diesel 1876-1892).

**`app_v2.js` — no se modificó `category` de la entrada de Watt en
`timelineEvents` (línea 156, sigue en `"Termodinámica"`), a diferencia del
LOTE 2 de Conducción.** Motivo: la taxonomía de `category` en
`timelineEvents` (Historia/Conducción/Convección/Radiación/Termodinámica/
Otros) **no tiene ningún valor "Motores de Calor"/"Motores"/"heat-engines"**
— ese es un concepto exclusivo de las secciones estructurales del nav de
laboratorios, no de la línea de tiempo. Introducir un valor nuevo ahí
habría sido inconsistente con el resto del array y sin ningún lector que lo
reconozca. Además, el trabajo de Watt sobre eficiencia calor→trabajo sigue
siendo, con toda razón, "Termodinámica" en esa clasificación. Se verificó
que esto no afecta la navegación: la tarjeta de Watt en la línea de tiempo
ya resuelve su `tabTarget` por `ev.surname === "Watt"` (línea 1515/2006,
con prioridad sobre el fallback por `category`), así que sigue abriendo
`watt-sim` sin cambios.

**Hallazgo lateral (no corregido, fuera de alcance de este pedido):** la
entrada `carnot-eficiencia` de `wikiDatabase` (~línea 22430-22438, modal
"Wiki Interactiva") tiene `simTarget: "watt-sim"` en vez de `"carnot-sim"`
— parece un cruce/mislabel preexistente, anterior a este cambio y no
relacionado con la reubicación del nav. Se deja documentado por si se pide
corregir en un lote futuro.

**`translations.js`**: verificado, sin cambios necesarios. Ya existían
`"Motores de Calor": "Heat Engines"` (línea 772) y `"Newcomen vs. Watt
(1712-1769)": "Newcomen vs. Watt (1712-1769)"` (línea 778, el nombre propio
+ fecha no cambia de un idioma a otro).

**Verificación funcional (Playwright headless)**:
1. Seleccionar "Motores de Calor" en `#lab-filter-category` → visibles
   exactamente `["watt-sim", "carnot-sim", "ottodiesel-sim"]`.
2. El `.tab-category-title` más cercano hacia atrás desde el botón de
   `watt-sim` es "Motores de Calor" (antes era "Laboratorios de
   Termodinámica").
3. `switchTab('watt-sim')` activa el pane; sus 3 elementos internos
   (`newcomen-canvas`, `watt-canvas`, `watt-temp-chart`) reportan
   dimensiones > 0 (no 0×0).
4. Ciclo de pantalla completa: abrir con `watt-lab-open-btn` → clase
   `.fullscreen` añadida; `watt-lab-close-btn` es el elemento superior en
   sus propias coordenadas (sin bloqueo de z-index); `Escape` cierra
   correctamente. Sin regresión — no se tocó el controller IIFE de
   `watt-sim` (CFG en `app_v2.js` ~línea 27580) ni sus animaciones de
   cilindro/vapor.
5. Sin errores de consola propios (sólo el ruido ya conocido de
   CDN/sandbox: `Chart is not defined`, `MathJax`, `net::ERR_FILE_NOT_FOUND`).

### ✅ Reorganización de Layout Vertical a Ancho Completo en Modo Normal — Superó al "Grid Maestro 2 Columnas B.2" (LOTE, `style.css`, 2026-08-24)

Refinamiento exclusivo del **modo normal** de `#multicapa-custom-sim`
(`#multicapa-custom-sim:not(.fullscreen)` en todas las reglas nuevas/
tocadas). `#multicapa-custom-sim.fullscreen` **no se tocó** (verificado
con Playwright: bounding boxes de `cm-layout-wrapper`,
`cm-panel-left-bc/-layers/-right-bc/-canvas/-chart/-results/-guide`
idénticos byte a byte antes/después del cambio). `index.html` y
`app_v2.js` **no se tocaron** (diff de bytes de `index.html` → 0; se
reutilizan los wrappers `#cm-row-top`/`#cm-row-center`/
`#cm-center-left-col`, ya `display:contents`, aditivos desde LOTEs
anteriores).

**⚠️ SUPERSEDE al bloque "GRID MAESTRO 2 COLUMNAS (VARIANTE B.2)"**
(2 columnas maestro, fronteras apiladas en la columna izquierda, capas
a ancho completo en la base) documentado en la ronda anterior. Si ese
bloque antiguo aparece en algún commit/backup, es obsoleto — no
restaurar.

**Estructura nueva (jerarquía vertical descendente, pedida
explícitamente por el usuario):**

1. Fila superior — Panel de Configuración Inicial, **3 columnas
   iguales** (`minmax(0,1fr)` × 3): Frontera Izquierda
   (`#cm-panel-left-bc`) | Selector/Configuración de Capas
   (`#cm-panel-layers` / `#cm-layers-container`) | Frontera Derecha
   (`#cm-panel-right-bc`).
2. Esquema Térmico y Flujo de Calor (`#cm-panel-canvas`) — ancho
   completo (`grid-column: 1 / -1`).
3. Perfil de Temperatura `T(x)` (`#cm-panel-chart`) — ancho completo,
   `min-height/height: 340px` en `.chart-container-cm`.
4. Resultados de la Simulación (`#cm-panel-results`) → Guía Didáctica
   (`#cm-panel-guide`) → Tabulación + Gráfica Paramétrica
   (`.cm-row-5`) — cada una a ancho completo, en ese orden.

**Mecanismo (Regla #8, sin tocar el DOM):** `#cm-layout-wrapper` pasa a
`display:grid !important` con `grid-template-columns: minmax(0,1fr)
minmax(0,1fr) minmax(0,1fr)` y `grid-template-areas` nombradas:

```
"bcL     layers  bcR"
"canvas  canvas  canvas"
"chart   chart   chart"
"results results results"
"guide   guide   guide"
"row5    row5    row5"
```

`#cm-row-top`/`#cm-row-center` siguen aplanadas con `display:contents
!important` (ya lo estaban desde la ronda anterior). El orden del
documento HTML no cambió — sólo la posición visual vía `grid-area`.

**Fix necesario en `#cm-layers-container` (mini-grid de 3 columnas por
capa, de la ronda 4):** con `#cm-panel-layers` compartiendo ahora la
fila superior de 3 columnas iguales, su track mide sólo ~130-200px en
la inmensa mayoría del rango de escritorio (Regla #10) — insuficiente
para `repeat(3,1fr)` (regla base sin scoping, ~3760). Se agregó
`@media (min-width:1001px) { #multicapa-custom-sim:not(.fullscreen)
#cm-layers-container { grid-template-columns: 1fr !important; } }`
— fuerza 1 columna mientras el layout de 3 columnas maestro está
activo (>1000px). **Esta regla SUPERSEDE la excepción puntual anterior
"franja angosta 1025-1100px"** (que sólo reducía a 2 columnas en esa
banda estrecha): con el nuevo layout TODO el rango >1000px queda
angosto, no sólo esa banda — la excepción vieja se retiró del CSS.
Verificado con Playwright inyectando 3 tarjetas `.layer-card` de
prueba: 1 columna sin overflow en 1920/1280/1024px (columna
~145-273px), vuelve a `repeat(3,1fr)` sin overflow en ≤1000px (columna
completa ~766-786px, 3 sub-columnas ~251px cada una).

**Breakpoint responsive:** `@media (max-width: 1000px)` (pedido
explícitamente por el usuario, reemplaza el breakpoint de 768px que
usaba la ronda anterior para este laboratorio) — colapsa
`#cm-layout-wrapper` a 1 columna, mismo orden de documento (Frontera
Izq. → Esquema → Frontera Der. → Capas → Perfil `T(x)` → Resultados →
Guía → Tabulación/Gráfica Paramétrica). Dentro de este bloque también
se resetea `grid-column: auto` en `#cm-panel-canvas`/`#cm-panel-chart`
(el `1 / -1` de la regla base ya no aplica con una sola columna, pero
se resetea por claridad/robustez ante futuros cambios de nº de
columnas en este breakpoint).

**Verificado con Playwright** (barrido 320px-1920px de viewport,
`file://index.html` local, tab forzado `.active` sin depender de
`app_v2.js`): cero desbordamiento horizontal nuevo introducido por
este cambio en ningún ancho (`wrap.scrollWidth === wrap.clientWidth`
en 320-1920px salvo el desbordamiento **preexistente** ya documentado
en la ronda anterior, de 27px/82px en 375px/320px, confirmado
idéntico en el archivo SIN modificar — vive en la tabla
`white-space:nowrap` de `#cm-panel-tabulation`, fuera de alcance de
este LOTE). Orden de documento verificado en el breakpoint colapsado
(bcL → canvas → bcR → layers → chart → results → guide). Fullscreen
verificado con los mismos bounding boxes exactos que antes de esta
ronda. Balance de llaves CSS verificado (911/911) antes y después del
cambio. Capturas de pantalla (Playwright, viewport 1440px) confirman
visualmente la estructura pedida: fila superior de 3 columnas iguales,
esquema/gráfica/resultados/guía/tabulación a ancho completo debajo.

Si se pide una distribución distinta para este mismo laboratorio en el
futuro: los nombres de área ya cubren los 8 paneles reales
(`bcL`/`layers`/`bcR`/`canvas`/`chart`/`results`/`guide`/`row5`) —
casi cualquier reordenamiento pedido se resuelve reescribiendo sólo
`grid-template-areas` (Regla #8), sin tocar `index.html`. Si un panel
que hoy es angosto (p. ej. `#cm-panel-layers`) pasa a ser ancho
completo de nuevo, revisar si la excepción de `#cm-layers-container`
(`@media min-width:1001px`, fuerza 1 columna) sigue siendo necesaria o
debe ajustarse/retirarse — depende del ancho real medido con
Playwright (Regla #10), no del viewport asumido.

### ✅ Entrada Numérica Directa Bidireccional con Sliders (`#multicapa-custom-sim`) — LOTE piloto (`index.html` + `app_v2.js` + `style.css`, 2026-08-24)

Implementado exclusivamente en el laboratorio **"Conducción Multicapa con
Condiciones de Frontera Generales"** (`#multicapa-custom-sim`), como
arquitectura modelo antes de extenderlo a otros laboratorios. Afecta tanto
modo normal como fullscreen (los `<input type="number">` conviven bien en
ambos anchos de columna, verificado con Playwright en los dos modos — a
diferencia de otros LOTEs de este laboratorio, esta funcionalidad no está
scopeada a `:not(.fullscreen)` porque el pedido es "sincronización
bidireccional" en sí, no un reacomodo de layout). No se tocó ninguna
fórmula/lógica de cálculo (`solveSimulation()`), ningún ID funcional
existente (`customMultiCanvas`, `customMultiChart`, `cm-rcond-val`,
`cm-rtot-val`, `cm-q-val`, etc.), ni ningún controller de fullscreen.

**14 variables intervenidas** (12 de frontera + los 2 patrones L_i/k_i que
se repiten por capa):
- Frontera Izquierda: `cm-l-temp`, `cm-l-h`, `cm-l-tinf`, `cm-l-eps`,
  `cm-l-tsur`, `cm-l-flux`.
- Frontera Derecha: `cm-r-temp`, `cm-r-h`, `cm-r-tinf`, `cm-r-eps`,
  `cm-r-tsur`, `cm-r-flux`.
- Capas (`renderLayersConfig()`, por cada capa activa): `cm-layer-L-{idx}`,
  `cm-layer-k-{idx}`.

**1. `index.html` — fronteras (12 campos):** los antiguos `<span
id="cm-l-temp-val">100</span>` de sólo lectura dentro de cada `<label>` se
reemplazaron EN EL MISMO LUGAR por `<input type="number" id="cm-l-temp-num"
class="cm-num-sync" min="-273" max="2000" step="1" value="100">` — mismos
`min`/`max`/`step` que su `<input type="range">` hermano. Cambio puramente
aditivo/sustitutivo de un elemento por otro en la misma posición del DOM;
no se movió ni se agregó ningún wrapper nuevo. IDs nuevos: `cm-l-temp-num`,
`cm-l-h-num`, `cm-l-tinf-num`, `cm-l-eps-num`, `cm-l-tsur-num`,
`cm-l-flux-num` (y sus espejos `cm-r-*-num`).

**2. `app_v2.js` — capas (`renderLayersConfig()`, ~línea 14607):** el
`<span id="cm-l{idx}-L-val">` dentro de `.value-badge` se reemplazó por
`<input type="number" id="cm-l{idx}-L-num" class="cm-layer-L-num
cm-num-sync" data-idx="{idx}" min="0.001" max="1.00" step="0.001">` (mismo
patrón para k con `cm-l{idx}-k-num` / `cm-layer-k-num`, min/max/step
0.001-2200). La estructura interna de cada `.control-row` pasó de una fila
en línea (`label | slider | badge`) a **cabecera + slider apilados**
(`.control-row-head` con label+badge arriba, slider a ancho completo
debajo) — ver punto 4 (motivo: el badge de ancho fijo dejaba el slider con
~0px útil en las columnas más angostas). Se extrajo la lógica de
actualización de cada capa a `applyLayerL(idx, value)` /
`applyLayerK(idx, value)` (antes vivía inline en el listener del slider)
para que tanto el slider como el número numérico la reutilicen sin
duplicar código — ninguna fórmula cambió, sólo se factorizó.

**3. `app_v2.js` — sincronización bidireccional:**
- **Fronteras:** `updateBcVisibility()` (que ya corría en cada `input` de
  los sliders de frontera) ahora también sincroniza los 12 inputs
  numéricos desde sus sliders (`numFieldsMap`, antes `spansMap` con
  `.innerText`, ahora `.value`) — con un guard `document.activeElement !==
  numEl` para no pisar lo que el usuario esté escribiendo. Función nueva
  `bindBcNumberInput(numId, rangeEl)`: al escribir en el número, mueve el
  slider (`rangeEl.value = raw`, que clampa internamente a `[min,max]`) y
  llama a `updateBcVisibility()` — mismo camino de cálculo que ya usaban
  los sliders, sin lógica duplicada; al confirmar (`change`/blur) refleja
  en el número el valor final ya clampado por el slider.
- **Capas:** mismo patrón, con `applyLayerL`/`applyLayerK` en vez de
  `updateBcVisibility()`. Los listeners de los inputs numéricos se
  re-adjuntan en cada `renderLayersConfig()` (igual que ya hacían los de
  los sliders), porque el contenido de `#cm-layers-container` se
  regenera por completo al cambiar el número de capas.
- **Validación mientras se escribe:** en ambos casos, si el campo está
  vacío, es sólo `"-"`, o no parsea a número (`isNaN`), el listener de
  `input` no hace nada — evita que el usuario pierda el carácter que
  acaba de borrar o el signo negativo a medio escribir.
- **Clamp final:** el `<input type="range">` clampa su propio `.value` a
  `[min,max]` de forma nativa incluso al asignarlo por script — se lee
  ese valor YA clampado de vuelta (`parseFloat(rangeEl.value)`) en vez de
  usar el texto crudo tal cual lo escribió el usuario, así que un valor
  fuera de rango nunca llega al solver ni queda "pegado" en el número
  tras perder el foco.

**4. `style.css` — hallazgos reales de overflow corregidos durante la
verificación con Playwright (no estaban en la lista original de
instrucciones, surgieron de medir con Playwright en el rango completo
320px-1920px, siguiendo la Regla #10 del proyecto):**
- Los inputs numéricos de ancho fijo (`.cm-num-sync`, `flex-shrink:0`,
  necesario para no recortar texto como "2200.000" o "10000") dentro de
  un `<label>` con `display:flex` (patrón preexistente del laboratorio)
  forzaban overflow del propio label hacia arriba en la cadena del grid
  maestro, específicamente en la banda **~1025-1280px** (Regla #10: ahí
  `.tabs-container` cae a su mínimo local). Corregido con `flex-wrap:wrap`
  + `min-width:0` en `#multicapa-custom-sim label` y en los 3 grid items
  de la fila superior (`#cm-panel-left-bc`/`-right-bc`/`-layers`) — el
  label pasa a 2 líneas en vez de desbordar.
- El mini-grid `#cm-layers-container` (`@media (min-width:1001px)`, ya
  forzado a 1 columna desde el LOTE anterior) usaba `1fr` a secas en vez
  de `minmax(0,1fr)` (Regla #9) — con el input numérico ya no cabía su
  contenido mínimo en la banda 1025-1100px y desbordaba su propio
  contenedor (sin llegar a desbordar el grid maestro completo, gracias al
  `min-width:0` de arriba, pero sí pintaba contenido fuera de su caja).
  Corregido a `minmax(0,1fr)`.
- **Bug real más serio, encontrado en esta misma verificación:** dentro
  de cada tarjeta de capa, el `.control-row` original en línea (grid
  `auto 1fr auto`: label | slider | badge) dejaba al **slider con
  ~0-1px de ancho útil** en las columnas más angostas — el label y el
  badge (ninguno se encogía) absorbían todo el espacio, y en las filas de
  "k" (unidad "W/mK", más larga que la "m" de "L") el **label llegaba a
  aplastarse a 0px de ancho (`clientWidth:0`), quedando invisible**.
  Corregido restructurando `.control-row` a **cabecera + slider
  apilados** (ver punto 2): con el slider en su propia fila a ancho
  completo, deja de competir por espacio horizontal con el label/badge.
  Complementado con `flex-wrap:wrap` en `.control-row-head` y
  `flex-shrink:0` en `.layer-card label` para que, si aun así no cabe
  todo en una línea, el badge baje a una 2ª línea en vez de aplastar el
  label.
- Ancho fijo elegido para `.cm-num-sync`: 58px en fronteras y en capas,
  con las flechas nativas de incremento/decremento **retiradas por
  completo** (`-webkit-appearance:none` en los pseudo-elementos, no sólo
  atenuadas) — con flechas visibles, el texto de valores largos como
  "10000" o "2200.000" se recortaba dentro del propio input incluso sin
  desbordar la página (`scrollWidth > clientWidth` del input mismo,
  detectado con Playwright antes de este ajuste).

**Verificado con Playwright** (barrido 320px-1920px, `file://index.html`
local con un stub mínimo de `Chart` para poder ejecutar
`initMulticapaCustomSimulation()` completo sin acceso a CDN): cero
overflow horizontal nuevo introducido por este LOTE en todo el rango
(el único residual, 27px/82px en 375px/320px, es el mismo preexistente ya
documentado en el LOTE anterior, confirmado idéntico). Pruebas
funcionales directas (`dispatchEvent` de `input`/`change`): slider→número
(frontera y capa), número→slider en rango, número→slider fuera de rango
con clamp correcto al perder el foco, entrada parcial inválida (`"-"`,
vacío) sin romper nada, y el caso más exigente de longitud de texto
(`k=2200.000`, `h=10000`) sin recorte — todo confirmado en modo normal Y
en fullscreen. `node --check app_v2.js` sin errores; balance de llaves
CSS (915/915) y diffs de bytes revisados antes de aplicar.

Si se extiende este patrón a otro laboratorio: reutilizar
`bindBcNumberInput`/`applyLayer*` como referencia de arquitectura (rango
= fuente de verdad, el número sólo escribe en el rango y deja que éste
clampe nativamente), y medir SIEMPRE con Playwright el ancho real del
contenedor en el laboratorio destino antes de fijar un ancho en px para
`.cm-num-sync` — no asumir que 56-58px alcanza; depende de cuántos
dígitos puede tener el valor máximo de cada control y de qué tan angosta
es la columna en ese laboratorio (Regla #10).

### ✅ Condiciones de Frontera con Irradiación Externa (`#multicapa-custom-sim`) — LOTE (`index.html` + `app_v2.js` + `translations.js`, 2026-08-25)

Se agregaron dos tipos de frontera nuevos a `#cm-bc-l-type`/`#cm-bc-r-type`
(hasta ahora: `temp`, `conv`, `rad`, `flux`, `comb`, `comb-flux`):

- **`irr_conv`** ("Irradiación + Convección"): balance
  `q''_net,in = α·G + h·(T∞ - Ts) = q''_cond`.
- **`irr_rad`** ("Irradiación + Radiación"): balance
  `q''_net,in = α·G - ε·σ·(Ts⁴ - T_surr⁴) = q''_cond`.

**Decisión de diseño clave:** en vez de crear campos nuevos para h/T∞ o
ε/T_surr, ambos tipos **reutilizan** los grupos existentes
`cm-{l,r}-conv-group`/`cm-{l,r}-rad-group` (mismo patrón ya usado por
`comb`/`comb-flux` para mostrar dos grupos a la vez) y sólo agregan un
grupo nuevo `cm-{l,r}-irr-group` con los dos parámetros propios de la
irradiación: `G` (0-1500 W/m², slider+número) y `α` (0-1, slider+número).
Los inputs nuevos (`inputLG/inputLAlpha/inputRG/inputRAlpha`) se suman a
`numFieldsMap`, `inputsToBind` y a la lista de `bindBcNumberInput` junto
a los ya existentes — mismo mecanismo de sincronización bidireccional
slider↔número del LOTE anterior, sin tocar su implementación.

**Solver (`solveSimulation`):** `getFluxLeft`/`getFluxRight` ganan una
rama `irr_conv`/`irr_rad` que suma `α·G` como fuente CONSTANTE (no
depende de T0/TN, por lo que no aporta término en
`getDFluxLeftDT`/`getDFluxRightDT` — su derivada es 0). Las ramas de
convección/radiación existentes se extendieron con `|| type ===
'irr_conv'`/`|| type === 'irr_rad'` respectivamente para que `irr_conv`
reutilice exactamente la misma física de `conv` (mismo h/T∞) y `irr_rad`
la misma de `rad` (mismo ε/T_surr) — la única diferencia real es el
término `α·G` sumado aparte. Convención de signo verificada explícitamente
(ver comentarios en el código): en `getFluxLeft` (flujo ENTRANDO a la
pared) `α·G` se SUMA; en `getFluxRight` (flujo SALIENDO de la pared) se
RESTA, porque la irradiación siempre entra a la pared sin importar de
qué lado incide. Las semillas iniciales de Newton-Raphson (T0_guess/
TN_guess en los 4 casos A-D) también se extendieron para usar T∞ como
punto de partida cuando el tipo es `irr_conv` (igual que ya hacían para
`conv`).

**`boundaryResistanceInfo()` (circuito equivalente):** `irr_conv` ->
`R = 1/h_conv` (misma fórmula que `conv` puro); `irr_rad` -> `R =
1/h_rad` (misma fórmula que `rad` puro); ambos con `isSource: true`
(hay una fuente de flujo superpuesta, igual que `comb-flux`).

**Canvas esquemático (`render()`):** las franjas de convección (líneas
onduladas + capa límite térmica en el Chart.js) y de radiación (flechas
punteadas + bóveda de "Alrededores") ya dibujadas para `conv`/`rad` se
reutilizan automáticamente para `irr_conv`/`irr_rad` (mismas condiciones
`||` extendidas). Se agregó un bloque nuevo de rayos de irradiación
(color dorado `clrSolar`, franja más externa que la de conv/rad para no
solaparse) y una línea nueva de etiqueta `G_L/α_L` (o `_R`) en el bloque
de texto de frontera existente, reutilizando `drawSubscriptText()` sin
modificarla.

**Circuito de resistencias (`renderCircuit()` / `drawBoundary()`):**
rama nueva `irr_conv`/`irr_rad` — misma resistencia zigzag única que
`conv`/`rad` puro, más un ícono de fuente (`drawFluxSource`, reutilizado
sin cambios) tapeado al nodo de superficie mostrando `α·G`, mismo patrón
vertical que usa `comb-flux` para su fuente de flujo pero con una sola
rama resistiva en vez de dos en paralelo.

**Traducciones:** 4 entradas nuevas en `window.uiTranslations`
("Irradiación + Convección", "Irradiación + Radiación", "Irradiación
(G)", "Absortividad (α)") — las dos primeras traducen el `<option>` vía
`translateDOM()` (recorrido genérico de nodos de texto); las etiquetas
de los sliders G/α en los paneles de frontera usan en cambio el patrón
`.lang-es`/`.lang-en` ya establecido para el resto de controles de este
mismo panel (no dependen de `translateDOM()`).

**Verificado con Playwright** (`file://index.html` local, stub mínimo de
`Chart` con `update`/`destroy`/`resize` para poder ejecutar
`initMulticapaCustomSimulation()` completo sin acceso a CDN — mismo
método ya usado en el LOTE anterior): `irr_conv` con `G=0` reproduce
exactamente los mismos T0/T_N/q''/R_tot que `conv` puro con los mismos
h/T∞ (y lo mismo `irr_rad` vs. `rad` con `G=0`); `irr_conv`/`irr_rad`
con `α=0` también reproduce el caso puro sin importar `G`; con `G` y `α`
altos (1200 W/m², 0.9) la temperatura de superficie sube de forma
coherente en ambos lados (izq. y der.) y con ambos mecanismos; toggling
de visibilidad de los 4 grupos (conv/rad/flux/irr) verificado para
`irr_conv` e `irr_rad`; traducción ES→EN de las 2 opciones nuevas
verificada; entrada y salida de pantalla completa sin errores de
consola; `multicapa-custom-sim`, `contact-res-sim` y `fourier-sim`
siguen funcionando con normalidad. `node --check app_v2.js` y `node
--check translations.js` sin errores.

---

## 🗑️ Eliminación del Laboratorio "Conducción en Pared Multicapa (3 Capas en Serie)" (`multi-sim`) — 2026-08-25

Se retiró por completo el laboratorio estático antiguo de 3 capas fijas en
serie (`id="multi-sim"`, título "Conducción en Pared Multicapa (3 Capas en
Serie)"), reemplazado hace tiempo en la práctica por el laboratorio dinámico
**`multicapa-custom-sim`** ("Conducción Multicapa con Condiciones de
Frontera Generales"), el cual **no fue tocado** y sigue 100% operativo.

⚠️ **Si `multi-sim` aparece en algún commit/backup antiguo o en referencias
de LOTEs anteriores en este mismo documento (LOTE 5, LOTE 9, LOTE 1-3 de
categorización de Conducción), es un ID obsoleto — no restaurarlo.** Esos
registros históricos se dejaron intactos porque describen hechos de cuando
el laboratorio SÍ existía; no deben editarse retroactivamente ni usarse
como referencia para recrear el módulo.

**Cambios aplicados:**
- **`index.html`**: se eliminó el `<div class="tab-pane" id="multi-sim">`
  completo (~206 líneas: intro, canvas `multiChart`, sliders de fronteras
  convectivas y de las 3 capas, tarjeta de resultados) y el botón de nav
  `<button class="tab-btn" data-target="multi-sim" ...>Pared Multicapa</button>`
  de la sección "Circuitos Térmicos". El botón vecino `data-target=
  "multicapa-custom-sim"` ("Pared Multicapa Personalizada") no se tocó.
- **`app_v2.js`**: se eliminaron `initMultiLayerSimulation()` (función
  completa + variable `multiChartInstance`), su registro
  `safeInit('MultiLayer', ...)`, y el controller IIFE de fullscreen
  dedicado ("MULTI-LAYER WALL LAB — FULLSCREEN CONTROLLER", `CFG.modalId:
  'multi-sim'`, exponía `window.MultiLab`). Cero referencias residuales a
  `multi-sim`/`multiChart`/`MultiLab` en todo el archivo tras el cambio.
- **`style.css`**: se eliminó el bloque completo "LOTE 5 — FULLSCREEN
  STYLES / multi-sim" (fullscreen, animación de cierre, scrollbar, botones
  abrir/cerrar, responsive) y el bloque "LOTE 3 — #multi-sim: CONTRASTE EN
  body.light-theme"; además se quitó únicamente la línea `#multi-sim
  .control-group label,` de una regla compartida de selectores múltiples
  (línea ~7558 antes del cambio) sin tocar ninguna otra entrada de esa
  lista. Ninguna regla `#multicapa-custom-sim`/`.layer-card`/`.cm-row` fue
  modificada.
- **`translations.js`**: se eliminaron 33 líneas — todas las claves del
  diccionario exclusivas de este laboratorio (título, intro, fórmulas,
  labels de fronteras/capas T∞/h/L/k, desglose de resistencias,
  temperaturas de interfase), incluyendo duplicados residuales con
  variantes de espacio/dos-puntos de una migración anterior al patrón
  `.lang-es`/`.lang-en` inline. Todas se confirmaron huérfanas (cero usos
  en `index.html`) antes de eliminarlas mediante búsqueda exacta de cada
  cadena.
- **`project_context.md`**: se retiró la fila `| \`multi-sim\` | 
  Multi-simulador | ✅ |` de la tabla de inventario de fullscreen.

**Verificación (Playwright headless, `file://index.html`, stub de
Chart.js):**
- `#multi-sim`, `#multi-lab-open-btn`, `#multi-lab-close-btn`,
  `#multiChart`, `[data-target="multi-sim"]` y `window.MultiLab`: los 6
  ausentes del DOM/`window` tras la carga.
- Filtro de categoría "Conducción" (`activatePillFilter`): carga sin
  errores, sin botones rotos, muestra los laboratorios restantes de la
  categoría (`fourier-sim`, `nusselt-sim`, `transient-sim`,
  `contact-res-sim`, `pennington-sim`, `multicapa-custom-sim`, `gen-sim`,
  `telkes-sim`, `fin-sim`). *(Nota: `par-sim`, `res-sim` e
  `insulated-sim`, presentes en el registro de LOTE 1-3 de categorización
  de 2026-08-24, ya no existen como `data-target` independientes en el
  archivo actual — cambio de una sesión anterior no relacionado con este
  LOTE; no se investigó más por estar fuera de alcance.)*
- `multicapa-custom-sim`: `switchTab()` activa la pestaña, el lazy-init
  (`window._multicapaInited`) se dispara correctamente, `customMultiCanvas`
  reporta dimensiones > 0, cambiar la temperatura de frontera izquierda
  recalcula y actualiza `cm-rtot-val`/`cm-q-val` en tiempo real, y el ciclo
  completo de apertura/cierre de pantalla completa funciona sin
  interferencia.
- Cero errores de consola reales (sólo ruido esperado de CDN/sandbox).
- `node --check app_v2.js` y `node --check translations.js` sin errores;
  balance de `<div>`/`</div>` (1375/1375) y llaves (929/929 HTML-embebido,
  5274/5274 JS) verificado antes/después.
