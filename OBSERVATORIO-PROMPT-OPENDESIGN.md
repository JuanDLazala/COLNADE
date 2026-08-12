# Prompt para Open Design — Observatorio COLNADE

**Adjuntar junto al prompt:**

1. `OBSERVATORIO-ESTRUCTURA-v2.md` — arquitectura, rutas, pantalla por pantalla, sistema de diseño
2. `OBSERVATORIO-CONTENIDO.md` — textos y datos reales para poblar el diseño
3. Manual de marca `COLNADE_MM_2026.pdf`
4. Archivos de logo (identificador full color, monotono, negativo y positivo)

El prompt repite a propósito los datos críticos de marca. Si la herramienta resume o interpreta los adjuntos, lo primero que se pierde son las prohibiciones — y ahí es donde se cuela la estética que estamos evitando.

---

## ▼ COPIAR DESDE AQUÍ

Diseña el sitio web del **Observatorio del Colegio Nacional de Ecólogos de Colombia (COLNADE)**.

**Qué es.** Una plataforma de análisis técnico y verificable sobre las decisiones ecológicas de Colombia. No es una ONG ambiental, no es un blog y no es una fundación. El referente de registro es un centro de datos institucional —sobrio, editorial, citable—, más cercano a Our World in Data o a una unidad de verificación periodística que a una organización de causas. Quien llega debe pensar «esto es una fuente», no «esto es una campaña».

**Archivos adjuntos y para qué sirve cada uno.**

- `OBSERVATORIO-ESTRUCTURA-v2.md` — la arquitectura completa: rutas, orden de bloques de cada pantalla, componentes e inventario. Es la fuente de verdad de la estructura.
- `OBSERVATORIO-CONTENIDO.md` — los textos y las cifras reales. **Usa este contenido, no inventes textos de relleno ni datos de ejemplo.** Las cifras son reales y verificadas.
- Manual de marca COLNADE 2026 y archivos de logo — identidad obligatoria.

---

### 1. Paleta — obligatoria y cerrada

Son los colores del manual de marca. **No introduzcas ningún color que no esté en esta lista.**

| Uso | Color | Hex |
|---|---|---|
| Principal — banda de cifras, pie, titulares, enlaces | Petróleo | `#24474c` |
| Acento — bordes, filos, detalles | Oliva | `#88a329` |
| Acento y datos | Ámbar | `#f8ae13` |
| Acento y datos | Cian | `#2eb9d5` |
| Separadores y bordes | Arena | `#c3ad8e` |
| Fondo de sección alterna | Hueso | `#f0ecec` |
| Texto | Carbón | `#353435` |
| Fondo dominante | Blanco | `#ffffff` |

**Reglas de aplicación, no negociables:**

- El fondo dominante del sitio es blanco. El petróleo se reserva para la banda de cifras y el pie: no inundes el sitio de color oscuro.
- Para texto de enlace sobre fondo claro usa `#61751d`, un oliva oscurecido. El oliva puro `#88a329` tiene 2,87:1 de contraste sobre blanco y no es legible a tamaño de texto; consérvalo para bordes, filos y uso sobre la banda oscura.
- Ámbar, cian y arena **nunca** para texto sobre blanco. Solo en gráficos o sobre fondos oscuros.
- **Prohibido:** verdes tipo bosque, esmeralda, lima o menta. No pertenecen a la marca. Si tu primer impulso al leer «ecología» es un verde intenso, es exactamente el color que no va.

### 2. Tipografía — obligatoria

El manual asigna **Bebas Neue** a titulares y textos cortos, y **Calibri** a párrafos y textos extensos.

- **Bebas Neue** — cifras grandes de la banda, etiquetas de sección, encabezados de tabla, botones y la marca del encabezado. Siempre en versales y siempre en textos cortos.
- **Carlito** —equivalente libre y métricamente idéntica a Calibri, que no tiene licencia web— para cuerpo, bajadas, metadatos **y titulares de artículo**.
- **Los titulares de artículo no van en Bebas Neue.** Un titular de quince palabras es un texto extenso; en una condensada y en mayúsculas resulta ilegible. Esta distinción respeta el criterio del propio manual.
- Cuerpo de 18–19 px, interlineado 1.65, ancho de lectura máximo de 68 caracteres.

### 3. Prohibiciones visuales

Nada de fotografías de selva o naturaleza, degradados verdes, manos sosteniendo plantas, iconografía de hojas u hojitas, siluetas de animales, frases inspiracionales, carruseles, contadores animados ni ilustraciones de tipo *flat* corporativo. Cualquiera de esas cosas destruye la credibilidad que el sitio existe para construir. El movimiento debe ser mínimo: una aparición suave al hacer scroll y nada más.

### 4. Principios de composición

- **La portada abre con una cifra, no con un titular.** Es lo que separa un observatorio de un blog a los ojos de un periodista.
- **Todo dato lleva su fuente y su fecha de corte visibles al lado del dato**, no en un pie de página.
- **La voz institucional y la voz individual nunca se parecen.** Si un lector no distingue en dos segundos si está leyendo una posición del Colegio o la opinión de un colegiado, el diseño falló.
- Mucho espacio en blanco. Escala de 8 px. Separación de 96 px entre secciones en escritorio y 56 px en móvil.
- Responsive con prioridad móvil real, no una reducción del escritorio.

### 5. Pantallas a diseñar

**1 · Portada.** En orden: banda de fondo petróleo con cuatro cifras grandes en Bebas Neue, cada una con etiqueta y fuente al pie —«1.379 · Ecólogos con matrícula profesional», «4 · Programas universitarios activos», «63% · De los ecólogos del país son mujeres», «84% · Concentrados en tres departamentos»—. Luego el tema del mes destacado a ancho completo. Luego tres tarjetas de línea de observación: una activa con su tema y dos en estado «próximamente» con fecha visible. Luego dos o tres notas de análisis. Luego una franja de fondo hueso con tres columnas de opinión con foto de autor. Al cierre, dos líneas sobre qué es el Observatorio y el pie.

**2 · Página de tema.** Cabecera con la línea a la que pertenece, título, fecha de apertura y editor responsable. Navegación de cuatro pestañas: Descripción del tema, Repositorio documental, Estado del arte y Concepto técnico. **La cuarta aparece deshabilitada, en gris, con la leyenda «Previsto: 28 de septiembre».** Muestra desplegada la pestaña de Repositorio documental, con los enlaces agrupados en cuatro categorías.

**3 · Nota técnica individual.** Etiqueta de sección, titular, bajada, firma institucional, cuerpo de lectura cómoda, lista de fuentes numeradas y enlazadas al cierre, y un bloque destacado de «cómo citar esta nota» con el texto seleccionable.

**4 · Columna de Tribuna.** Debe verse distinta de la nota técnica desde el primer vistazo. Fondo más claro y un aviso destacado **en la cabecera, antes del titular**, sobre fondo hueso con filo ámbar: «Opinión personal del autor. No representa la posición institucional del Colegio Nacional de Ecólogos de Colombia». Con foto del autor, universidad, año de grado y ciudad.

**5 · Cifras.** Página de datos con tablas y gráficos sobrios. Incluye un gráfico de barras de matrículas profesionales por año entre 2010 y 2026 que muestra el pico de 2014 y el descenso sostenido posterior: barras en petróleo y los años 2014 y 2023 destacados en ámbar. Cada bloque de datos con su fuente y fecha de corte, y las advertencias metodológicas visibles, no escondidas.

**6 · Biblioteca.** Listado de documentos descargables con buscador y filtro por tipo.

### 6. Nombres provisionales

Los nombres de personas del contenido —«Editor», «Coordinador», «Responsable 1» a «Responsable 6»— son marcadores de posición. Muéstralos resaltados con un fondo tenue, para que sea imposible publicar sin reemplazarlos.

## ▲ COPIAR HASTA AQUÍ

---

## Qué revisar cuando llegue el diseño

Antes de aprobar nada, verificar en este orden:

1. **Cuentagotas sobre los colores.** Si aparece cualquier hex fuera de la lista, se devuelve. El error más probable es un verde inventado.
2. **Los titulares de artículo, ¿están en Bebas Neue?** Si sí, se corrigen: van en Carlito.
3. **¿Hay alguna imagen de naturaleza?** Si la hay, fuera.
4. **¿La portada abre con cifra o con titular?** Si abre con titular, el concepto no se entendió.
5. **¿Se distingue Tribuna de Análisis a primera vista?** Si hay que leer para saber cuál es cuál, no sirve.
6. **¿Cada dato tiene su fuente al lado?** Es la mecánica de credibilidad del sitio, no un detalle.
7. **Contraste real de los enlaces.** El oliva puro sobre blanco no pasa; debe ser el tinte oscurecido.
