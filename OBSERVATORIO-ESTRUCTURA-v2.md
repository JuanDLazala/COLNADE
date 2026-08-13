# Observatorio COLNADE — Estructura v2

**Destino:** `observatorio.colnade.co` (vía CNAME) · provisional en Netlify
**Lanzamiento:** 28 de agosto de 2026
**Cadencia:** un tema nuevo el 28 de cada mes · notas y columnas cada semana o quincena
**Alcance v1:** sin CMS y sin módulo de participación. Ambos entran en fases posteriores.

Integra la taxonomía de *Pasos y consideraciones para el Observatorio de COLNADE* con la capa pública y de datos.

---

## 0. Principios

**La portada abre con una cifra, no con un titular.** Es lo único que separa un observatorio de un blog a los ojos de un periodista.

**Dos relojes, no uno.** El tema es mensual y es el evento. Las notas de análisis y las columnas de Tribuna son semanales o quincenales y son el latido. Si el único reloj es el mensual, el sitio queda muerto 30 días entre publicaciones.

**El 28 de cada mes.** Día fijo de publicación del tema. Genera hábito en la audiencia y en la prensa.

**Tres reglas de diseño innegociables**

1. Todo dato lleva fuente y fecha de corte visibles, al lado del dato y no en un pie.
2. Toda pieza es citable: fecha, autor, fuentes y bloque «cómo citar».
3. Voz institucional y voz individual nunca se parecen. Si el lector no distingue en dos segundos cuál es cuál, la arquitectura falló.

**Lo prohibido:** fotos de selva, degradados verdes, manos con plantas, iconografía de hojas, frases inspiracionales, carruseles, contadores animados. El referente es un centro de datos, no una ONG.

---

## 1. Taxonomía

```
LÍNEA DE OBSERVACIÓN
   └── TEMA
        ├── Descripción del tema
        ├── Repositorio documental
        ├── Estado del arte
        └── Concepto técnico          (aparece cuando existe)
```

Cada línea puede abrir tantos temas como decida COLNADE. El tema es la unidad de trabajo del Observatorio.

### Las tres líneas y su calendario

| Línea | Primer tema | Publicación |
|---|---|---|
| **Políticas públicas** | ABC del Presidente — primeros 100 días desde la mirada ecológica | **28 de agosto de 2026** |
| **Tendencias** | Por definir | **28 de septiembre de 2026** |
| **Nuevos paradigmas e innovación** | Por definir | **Octubre de 2026** |

Las tres líneas se muestran desde el día uno. Las dos inactivas llevan su fecha visible y un botón de aviso. Fecha exacta para septiembre; solo el mes para octubre — precisión decreciente según la confianza. La fecha que se anuncia obliga.

Temas futuros ya identificados en el documento fuente: Plan Nacional de Desarrollo y Reformas Ambientales (Políticas públicas); Conflictos, Temas polémicos y Lo que está pasando (Tendencias); Soluciones basadas en la naturaleza (Nuevos paradigmas).

---

## 2. Mapa de rutas

```
/                                   Portada
/lineas/politicas-publicas          Línea — listado de temas
/lineas/tendencias                  Línea — próximamente, con fecha
/lineas/nuevos-paradigmas           Línea — próximamente, con fecha
/tema/abc-del-presidente            Tema con sus cuatro pestañas
/analisis                           Notas técnicas del Observatorio
/analisis/[slug]
/tribuna                            Voz individual de los colegiados
/tribuna/[slug]
/cifras                             La ecología en cifras (RUE + SNIES)
/biblioteca                         Repositorio documental transversal
/metodo                             Qué es, objetivos, metodología, cómo participar
```

Un solo subdominio, un solo despliegue, un solo CNAME.

---

## 3. Pantalla por pantalla

### 3.1 Portada `/`

**A · Banda de cifras.** Fondo verde oscuro. Cuatro datos en Inter, etiqueta en versalitas, fuente al pie de cada uno.

| Cifra | Etiqueta | Fuente |
|---|---|---|
| 1.379 | Ecólogos con matrícula profesional | RUE · corte julio 2026 |
| 4 | Programas universitarios activos | SNIES · MinEducación |
| 63% | De los ecólogos del país son mujeres | RUE · corte julio 2026 |
| 84% | Concentrados en tres departamentos | RUE · corte julio 2026 |

**B · Tema del mes.** Ancho completo. Línea a la que pertenece, título, bajada, fecha de publicación y acceso a las cuatro pestañas.

**C · Las tres líneas.** Tres tarjetas. La activa muestra su tema; las otras dos, su fecha de apertura.

**D · Últimas notas de Análisis.** Tres piezas.

**E · Tribuna.** Franja de fondo claro, visualmente distinta. Tres columnas con foto de autor, universidad y año de grado. Debajo: *«¿Es ecólogo y quiere publicar aquí? Escríbanos.»*

**F · Qué es el Observatorio.** Dos líneas y enlace a `/metodo`.

**G · Pie.**

---

### 3.2 Tema `/tema/[slug]`

La pantalla más importante del sitio. Cabecera con línea, título, fecha de apertura, estado y editor responsable. Debajo, cuatro pestañas:

**Descripción del tema** — introducción de máximo 100 palabras, con los enlaces clave incrustados en el propio texto. Por qué importa desde la ecología. Qué se va a observar.

**Repositorio documental** — enlaces oficiales agrupados:

- *Documentos oficiales* — Presidencia, DNP, Ministerio de Ambiente
- *Normativa relacionada* — Constitución, leyes, decretos
- *Literatura científica* — Google Scholar, Scopus, IPBES, IPCC
- *Conceptos COLNADE* — lo producido por el Observatorio

**Estado del arte** — qué se sabe hoy, qué está en disputa, qué falta.

**Concepto técnico** — la posición del Colegio. Solo aparece cuando existe; mientras tanto la pestaña se muestra en gris con la fecha prevista.

**Regla de fricción cero:** los documentos citados en Descripción y Estado del arte se enlazan en el propio texto. El usuario nunca debe irse al repositorio a buscar lo que acaba de leer.

---

### 3.3 Análisis y Tribuna

**`/analisis/[slug]`** — etiqueta de sección, titular, bajada, firma institucional más el nombre de quien valida técnicamente, cuerpo a 68 caracteres de ancho, fuentes numeradas y enlazadas al cierre, bloque «cómo citar esta nota», fecha de última actualización y registro de correcciones.

**`/tribuna/[slug]`** — debe verse distinta desde el primer vistazo. **Aviso en la cabecera, antes del titular:** «Opinión personal del autor. No representa la posición institucional del Colegio Nacional de Ecólogos de Colombia.» Autor con foto, universidad, año de grado y ciudad.

Lanzamiento de Tribuna: cinco a ocho columnas por invitación, publicadas el día uno. Criterio de selección: que estén representadas las cuatro universidades activas y varias regiones.

---

### 3.4 Cifras `/cifras`

**A · Cuántos son.** 1.379 con matrícula profesional. Primer registro: 8 de enero de 2010.

**B · El ritmo se derrumbó después de 2014.** Gráfico de trámites por año.

| Periodo | Promedio anual |
|---|---|
| 2010–2014 | 106 |
| 2015–2025 | 72 |

Pico en 2014 con 126. Mínimo histórico en 2023 con 61. Caída del 31% que lleva once años sin revertirse.

**C · La brecha que se abre.** Titulados por década de grado: 1980s 7 · 1990s 32 · 2000s 225 · 2010s 337 · **2020s 335 en seis años**. Se gradúan más ecólogos que nunca mientras las matrículas caen. *Advertencia: 443 registros (32%) no tienen fecha de acta de grado.*

**D · Dónde se formaron.** Javeriana 757 (54,9%) · FUP 450 (32,6%) · UdeA 107 (7,8%) · CES 29 (2,1%) · IDEAS 12 (0,9%). Título extranjero 13 y sin dato 11 van como líneas aparte, **fuera** de la cuadrícula de instituciones.

**Formulación oficial:** *cinco instituciones colombianas han formado ecólogos; hoy cuatro mantienen el programa abierto.*

**E · Dónde se estudia hoy.** Cada programa con su SNIES enlazado a la fuente oficial:

| Institución | Ciudad | Programa | SNIES | Duración |
|---|---|---|---|---|
| Pontificia Universidad Javeriana | Bogotá | Ecología | 2842 | — |
| Universidad CES | Medellín | Ecología | 102856 | 10 semestres |
| Fundación Universitaria de Popayán | Popayán | Ecología | 105030 | 10 semestres |
| Universidad de Antioquia | Turbo | Ecología de Zonas Costeras | 15994 | 8 semestres |

**F · Quiénes son.** 63,3% mujeres (873) · 36,7% hombres (506).

**G · Dónde están.** Cundinamarca 706 · Cauca 312 · Antioquia 143 = 84,2%.

**Advertencias de dato:** el archivo trae 43 departamentos cuando Colombia tiene 33, y Bogotá aparece separado de Cundinamarca. No publicar desagregación departamental más allá de los tres primeros sin limpiar. No usar «32 departamentos».

---

### 3.5 Biblioteca `/biblioteca`

Repositorio transversal, buscable, con filtro por tipo: normatividad, estatutos, actas, formatos, conceptos COLNADE. Cada documento con título, tipo, fecha, peso y descarga. Los repositorios de cada tema se alimentan de aquí.

---

### 3.6 Método `/metodo`

Qué es el Observatorio · Objetivos · Metodología · Cómo participar · Quién valida · Qué fuentes se aceptan · **Cómo se corrige un error, con el compromiso de dejar la corrección visible** · Diferencia entre Análisis y Tribuna · Comité Editorial y sus tres roles (coordinador, revisores, editor).

Es la respuesta anticipada a «¿y ustedes con qué autoridad?». Sin ella el Observatorio es opinión con diseño bonito.

---

## 4. Fases

| Fase | Qué entra | Cuándo |
|---|---|---|
| **v1** | Portada, líneas, primer tema con cuatro pestañas, Análisis, Tribuna por invitación, Cifras, Biblioteca, Método | 28 ago 2026 |
| **v2** | CMS para que COLNADE publique sin código. Apertura de postulaciones a Tribuna con reglas publicadas | Septiembre |
| **v3** | Módulo de participación: formulario metodológico guiado, aportes argumentados, revisión entre pares, tablero de síntesis para el Comité Editorial | Por definir |

**Nota sobre v3.** El mecanismo de participación descrito en el documento fuente —interfaz guiada, base de datos estructurada, revisión por pares, síntesis automatizada hacia un concepto técnico colectivo— es el corazón del proyecto y también un desarrollo de meses: autenticación, moderación, almacenamiento de evidencia y un pipeline de análisis. No cabe en v1 y no debe intentarse en v1. La arquitectura de v1 ya lo contempla: cuando llegue, se inserta como quinta pestaña del tema.

---

## 5. Sistema de diseño

Conforme al **Manual de Marca COLNADE 2026**. `colnade-theme.css` —el tema del sitio actual— **no sigue el manual**: usa verdes `#1a4a2e`, `#2d7a4f` y `#6abf4b` que no existen en la paleta oficial. No heredar de ahí.

**Paleta oficial** (el orden es la prioridad de uso que indica el manual):

```
--petroleo  #24474c   principal — banda de datos, pie, títulos, enlaces
--oliva     #88a329   acento
--ambar     #f8ae13   acento y datos
--cyan      #2eb9d5   acento y datos
--arena     #c3ad8e   separadores y bordes
--hueso     #f0ecec   fondo de sección alterna
--carbon    #353435   texto
```

**Dos tintes derivados por accesibilidad.** El oliva puro tiene 2,87:1 sobre blanco y no alcanza el mínimo AA de 4,5:1 para texto de tamaño normal. Se deriva `--oliva-txt #61751d` (5,16:1) para enlaces y etiquetas sobre fondo claro; el oliva puro se conserva para bordes, acentos y uso sobre la banda oscura. No es un cambio de paleta: es el mismo matiz con la luminosidad ajustada. Igual criterio para `--gris #6a716a` en metadatos.

**Contraste verificado.** Petróleo sobre blanco 10,1:1 · carbón sobre blanco 12,4:1 · ámbar sobre petróleo 5,3:1 · cian sobre petróleo 4,3:1. Cian, ámbar y arena **no se usan para texto sobre blanco** (2,3 · 1,9 · 2,2): solo sobre la banda oscura o como elementos gráficos.

**Tipografía.** El manual asigna **Bebas Neue** a titulares y textos cortos, y **Calibri** a párrafos y textos extensos.

- **Bebas Neue** — cifras de la banda, etiquetas de sección, encabezados de tabla, botones, marca del header. Es condensada y va en versales: brilla en textos cortos y numerales.
- **Calibri** — cuerpo, bajadas, metadatos **y titulares de artículo**. Un titular de quince palabras es un texto extenso, no un texto corto publicitario: en Bebas Neue condensada y en mayúsculas sería ilegible. Esta lectura respeta el criterio del propio manual.
- **Sustitución técnica obligatoria:** Calibri es una fuente propietaria de Microsoft, sin licencia de uso web. En el sitio se declara `Carlito, Calibri, 'Segoe UI', sans-serif`. Carlito es la equivalente libre y **métricamente idéntica** a Calibri: quien tenga Calibri instalada verá Calibri; el resto verá un tipo indistinguible. Sin esta sustitución el sitio caería a Arial y perdería la identidad tipográfica.

Cuerpo 18–19 px, interlineado 1.65, ancho máximo 68 caracteres. Cifras de portada en Bebas Neue, de 3 a 4,6 rem fluido.

**Espacio.** Escala de 8 px. Separación entre bloques de portada: 96 px en escritorio, 56 px en móvil.

**Movimiento.** Mínimo. Aparición suave al hacer scroll y nada más.

---

## 6. Componentes

1. `StatBand` — banda de cifras con fuente por dato
2. `LineCard` — tarjeta de línea, en estado activo o con fecha
3. `TopicHeader` — cabecera de tema con línea, estado y editor
4. `TopicTabs` — cuatro pestañas, con estado deshabilitado y fecha prevista
5. `RepositoryGroup` — grupo de enlaces del repositorio
6. `AnalysisCard` / `TribuneCard`
7. `AuthorByline` — foto, nombre, universidad, año, ciudad
8. `DisclaimerBanner` — aviso de opinión personal, en cabecera
9. `SourceList` — fuentes numeradas y enlazadas
10. `CitationBlock` — cómo citar
11. `DataTable` / `DataChart` — con fuente y fecha de corte
12. `DocumentRow`
13. `SectionLabel`
14. `SiteHeader` / `SiteFooter`

---

## 7. Prompt para Open Design

> Diseña un sitio web para el **Observatorio del Colegio Nacional de Ecólogos de Colombia (COLNADE)**: una plataforma de análisis técnico y verificable sobre ecología en Colombia. No es una ONG ambiental ni un blog. El referente de registro es un centro de datos institucional —sobrio, editorial, citable— más cercano a Our World in Data o a una unidad de verificación periodística que a una fundación ambiental.
>
> **Evita por completo:** fotos de selva o naturaleza, degradados verdes, manos sosteniendo plantas, iconografía de hojas, frases inspiracionales, carruseles, contadores animados. Cualquiera de esas cosas destruye la credibilidad que el sitio existe para construir.
>
> **Paleta — obligatoria, es la del Manual de Marca COLNADE 2026. No introduzcas ningún color fuera de esta lista.** Fondo dominante blanco papel. Petróleo `#24474c` como color principal: banda de cifras, pie, titulares y enlaces. Oliva `#88a329` como acento en bordes y detalles; para texto de enlace sobre fondo claro usa el tinte oscurecido `#61751d`, porque el oliva puro no alcanza el contraste mínimo accesible. Ámbar `#f8ae13` y cian `#2eb9d5` **solo** en gráficos de datos y sobre fondos oscuros. Arena `#c3ad8e` para separadores y bordes. Hueso `#f0ecec` para fondos de sección alterna. Carbón `#353435` para el texto. Nada de verdes tipo bosque, esmeralda o lima: no pertenecen a la marca.
>
> **Tipografía — obligatoria.** Bebas Neue para las cifras grandes, las etiquetas de sección, los encabezados de tabla y los botones: siempre en versales y en textos cortos. Carlito —equivalente libre y métricamente idéntica a Calibri— para el cuerpo, las bajadas, los metadatos y los titulares de artículo. Los titulares de artículo **no** van en Bebas Neue: son textos largos y en una condensada en mayúsculas resultan ilegibles. Cuerpo de 18 px, interlineado 1.65, ancho de lectura máximo de 68 caracteres. Mucho espacio en blanco, escala de 8 px, 96 px entre secciones en escritorio.
>
> **Estructura conceptual:** el sitio organiza el contenido en tres *líneas de observación* —Políticas públicas, Tendencias, Nuevos paradigmas e innovación—. Cada línea contiene *temas*. Cada tema se despliega en cuatro pestañas: Descripción, Repositorio documental, Estado del arte y Concepto técnico.
>
> **Pantallas a diseñar:**
>
> 1. **Portada.** Arriba, banda de fondo verde oscuro con cuatro cifras grandes en Inter, cada una con etiqueta en versalitas y fuente al pie: «1.379 · Ecólogos con matrícula profesional», «4 · Programas universitarios activos», «63% · De los ecólogos del país son mujeres», «84% · Concentrados en tres departamentos». Debajo, el tema del mes destacado a ancho completo. Luego tres tarjetas de línea: una activa con su tema, dos con fecha de apertura futura. Luego tres notas de análisis. Luego una franja de fondo claro con tres columnas de opinión con foto de autor. Al final, dos líneas sobre qué es el Observatorio y el pie.
> 2. **Página de tema**, con cabecera —línea, título, fecha, editor responsable— y navegación de cuatro pestañas donde la cuarta aparece deshabilitada con una fecha prevista. Mostrar la pestaña de Repositorio documental con enlaces agrupados en cuatro categorías.
> 3. **Nota técnica individual**, con etiqueta de sección, titular, bajada, firma institucional, cuerpo de lectura cómoda, fuentes numeradas al cierre y un bloque destacado de «cómo citar esta nota».
> 4. **Columna de Tribuna**, visualmente distinta de la nota técnica: fondo más claro y un aviso destacado **en la cabecera, antes del titular**, que diga «Opinión personal del autor. No representa la posición institucional del Colegio». Con foto del autor, universidad, año de grado y ciudad.
> 5. **Cifras**: página de datos con tablas y gráficos sobrios. Incluye un gráfico de barras de matrículas por año entre 2010 y 2026 que muestra un pico en 2014 y un descenso sostenido posterior. Cada dato con su fuente y fecha de corte visibles al lado, no en un pie.
> 6. **Biblioteca**: listado de documentos descargables con buscador y filtro por tipo.
>
> **Requisitos transversales:** responsive con prioridad móvil real; toda cifra acompañada de fuente y fecha de corte; distinción visual inmediata entre contenido institucional y opinión individual; movimiento mínimo.

---

## 8. Dependencias abiertas

| Qué | Quién | Cuándo |
|---|---|---|
| Registro CNAME + redirección de `/observatorio` | Javier → Luis | Esta semana |
| Editor responsable del primer tema y de Tribuna | Javier | Antes del 28 |
| 5–8 ecólogos invitados a Tribuna | Javier | Esta semana |
| Tema de la línea Tendencias | Comité | Antes del 28 sep |
| Denominación «Ecólogo de Zonas Costeras» y matrícula | COLNADE | Antes del 28 |
| Limpieza de departamentos del RUE | Juan | Antes de publicar `/cifras` |
