# Contexto del Proyecto: Historia de las Ciencias Térmicas (UdeA)

Este documento describe la arquitectura, tecnologías y propósito del proyecto para que cualquier modelo de Inteligencia Artificial entienda rápidamente el contexto del código.

## 📌 Propósito General
Es una **aplicación web educativa e interactiva** desarrollada para la Universidad de Antioquia (UdeA). Su objetivo es enseñar la historia de las ciencias térmicas (termodinámica, transferencia de calor, fluidos) a través de una **línea de tiempo interactiva**, biografías de científicos históricos (Newton, Carnot, Boyle, etc.), simulaciones y explicaciones matemáticas.

## 📍 Ubicación de Trabajo y Regla Crítica
El entorno de trabajo local actual está ubicado en la ruta:
`D:\OneDrive - Universidad de Antioquia\Heat transfer history\v3`

**Regla estricta:** En este directorio existirá una **carpeta de restauración**. Esta carpeta contiene copias de seguridad y archivos originales, por lo que **bajo ningún motivo** modificaremos, eliminaremos o alteraremos su contenido durante nuestro trabajo.

## 🛠️ Stack Tecnológico (Frontend Puro)
El proyecto no utiliza frameworks pesados como React o Angular. Está construido con tecnologías web estándar:
* **HTML5**: Estructura principal, dividida principalmente en un contenedor para la línea de tiempo y controles flotantes.
* **CSS3 (`style.css`)**: Diseño responsive, animaciones y un sistema de variables para soportar **Modo Claro / Modo Oscuro**.
* **Vanilla JavaScript (`app_v2.js`)**: Lógica de la aplicación, renderizado dinámico de la línea de tiempo (basado en un arreglo de objetos `timelineEvents`), manejo de eventos y estados.
* **MathJax**: Utilizado para renderizar fórmulas y ecuaciones matemáticas (ej. $Nu_d = 3.66$) directamente en el navegador. Configurado para renderizado manual/controlado.
* **Chart.js (+ plugin annotations)**: Para graficar datos en módulos interactivos y simulaciones.

## 🧩 Funcionalidades Clave
1. **Línea de Tiempo Dinámica**: Los eventos históricos se cargan desde una estructura de datos en JS (`timelineEvents`) que contiene título, descripción, autor, país, imágenes y datos biográficos.
2. **Sistema de Traducción Bilingüe (ES/EN)**: Implementado de forma nativa a través del archivo `translations.js`. Funciona reemplazando dinámicamente cadenas de texto en el DOM (DOM translation).
3. **Módulos/Simuladores Adicionales**: Incluye sub-aplicaciones o "laboratorios" interactivos, como `water-lab.js`, módulos de psicrometría (`PsychrometryLab`) y un avanzado **Laboratorio de Enfriamiento de Newton** (integrado en `app_v2.js`), el cual cuenta con gráficos en tiempo real (Chart.js), motor de partículas en Canvas, cálculo del número de Biot con renderizado de MathJax y modo de pantalla completa (HUD).
4. **Interactividad UI**: Botones flotantes para alternar idioma, cambiar tema oscuro/claro, abrir una "Wiki Térmica" y mostrar estadísticas (usuarios online/registrados).

## 📁 Estructura de Archivos Principal (versión `v3/`)
* `index.html`: Archivo principal con la estructura de la página, carga de scripts (MathJax, Chart.js, Analytics), barra de controles flotante y modales interactivos (incluyendo el Laboratorio de Newton).
* `app_v2.js`: Contiene el núcleo lógico, incluyendo la base de datos de eventos (`timelineEvents`), funciones de renderizado de UI y la lógica avanzada del Laboratorio de Enfriamiento de Newton (animaciones Canvas, gráficas y pantalla completa).
* `style.css`: Hojas de estilo generales, incluyendo los estilos de los modales y simuladores integrados.
* `translations.js`: Diccionario gigante (objeto `window.uiTranslations`) que mapea textos en español a sus equivalentes en inglés, abarcando UI y contenido histórico/técnico.
* `water-lab.js` / Carpeta `PsychrometryLab`: Scripts para simulaciones adicionales.
* Múltiples imágenes de científicos (Boyle, Maxwell, Carnot, etc.) y esquemas técnicos.

## 📝 Reglas para IA al modificar el código
* Mantener la compatibilidad con Vanilla JS (no introducir dependencias de frameworks externos).
* Al agregar contenido textual nuevo (alertas, descripciones), recordar agregarlo al diccionario en `translations.js` para mantener el soporte bilingüe.
* Las fórmulas matemáticas deben escribirse en formato TeX/LaTeX (encerradas en `$$` o `\(` `\)`) para que MathJax las procese correctamente.
* Respetar el patrón de diseño actual: la data (eventos) se define en JS y el HTML se inyecta/modifica de forma dinámica a través del DOM.
