# Auditoría Web COLNADE — Antes del Deploy en Netlify

**Fecha:** 10 junio 2026  
**Archivos revisados:** `index.html`, `colnade-website.html`, `DESIGN-MANIFEST.json`, `DESIGN-HANDOFF.md` + 14 assets de marca

---

## Diagnóstico rápido

Tienes **dos versiones del sitio** que coexisten en la misma carpeta:

| Archivo | Estado | Recomendación |
|---|---|---|
| `index.html` | Versión base limpia. Logo en texto. Sin sección Portal ni T'suena. | Consolidar |
| `colnade-website.html` | Versión avanzada. Logo PNG real. Portal del Afiliado + T'suena Platform. Más animaciones. | **Esta es la que va a producción** |

**Acción inmediata:** renombrar `colnade-website.html` → `index.html` (y archivar el actual `index.html` como `index-v1-backup.html`).

---

## CRÍTICO — Bloquea o daña el lanzamiento

### 1. Formularios sin backend (🔴 Bloqueante para producción real)
Los formularios de afiliación y empresas simulan envío con JS (`btn.textContent = '¡Solicitud enviada!'`) pero no envían datos a ningún servidor. Los datos se pierden.

**Solución con Netlify Forms (5 min):** agregar `netlify` al `<form>` y un campo oculto:
```html
<form id="form-aff" name="afiliacion" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate>
  <input type="hidden" name="form-name" value="afiliacion" />
  <p class="sr"><label>No llenar: <input name="bot-field" /></label></p>
  <!-- resto del formulario igual -->
</form>
```
Netlify captura las respuestas automáticamente en su dashboard. Sin costo.

### 2. Logo PNG no conectado en `index.html`
La carpeta tiene **11 variantes del logo en PNG** pero `index.html` los ignora completamente (usa texto). `colnade-website.html` sí los usa (referencia la variante color vertical). Confirmar que la ruta relativa sea correcta cuando el HTML se llame `index.html`.

### 3. `og:image` ausente — Redes sociales se verán vacías
```html
<!-- Agregar en <head> de ambos archivos -->
<meta property="og:image" content="https://colnade.org.co/logo-og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://colnade.org.co" />
<meta name="twitter:card" content="summary_large_image" />
```
Sin esto, cuando alguien comparta el link en WhatsApp, LinkedIn o Twitter, aparece en blanco.

### 4. Sin favicon
```html
<!-- Agregar en <head> -->
<link rel="icon" type="image/png" href="mq8otj7v-__1-ID-full-color.png" />
<link rel="apple-touch-icon" href="mq8otj7v-__1-ID-full-color.png" />
```

---

## DISEÑO — Impacta credibilidad y percepción

### 5. Imágenes reales vs. gradientes CSS (🟡 Alta prioridad)
Las tres tarjetas de noticias muestran **gradientes oscuros con un ícono** en lugar de fotografías. La sección de Junta Directiva tiene **círculos de colores con iniciales** en lugar de fotos. El banco de empleo usa **siglas** en lugar de logos de empresa.

Esto comunica: *"sitio en construcción"*. Para el lanzamiento se necesitan:
- Al menos 3 fotos de ecosistemas colombianos para las noticias (fuente: Unsplash, búsqueda "Colombia ecology", licencia libre)
- Fotos o avatares reales de la junta directiva
- Si no hay logos de empresas: usar placeholder con la inicial en color corporativo (ya está) pero es aceptable solo si se etiqueta como "Demo"

### 6. Tipografía — Fuentes del sistema
El sitio usa `Segoe UI` (Windows) y `Georgia`. En Mac o Linux se verá diferente. Para consistencia de marca en todos los sistemas:

```html
<!-- Agregar en <head> antes del <style> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lora:wght@400;700&display=swap" rel="stylesheet">
```
Y en los tokens:
```css
--font-display: 'Inter', 'Segoe UI', Arial, system-ui, sans-serif;
--font-body:    'Lora', Georgia, serif;
--font-sans:    'Inter', 'Segoe UI', Arial, system-ui, sans-serif;
```

### 7. Sección T'suena — Mapa SVG de Colombia incompleto
`colnade-website.html` tiene estilos completos para `.colombia-map` y `.map-region` pero en el HTML el SVG del mapa no está (solo hay el contenedor). Esta sección funciona a medias. Hay dos opciones:
- **Opción A (rápida):** ocultar la pestaña "Mapa Sonoro" hasta tener el SVG completo
- **Opción B (completa):** insertar el SVG de Colombia con los 32 departamentos como `<path>` individuales

### 8. Contraste de texto — Riesgo WCAG
`.text-muted` (`#4a5e44`) sobre `--off-white` (`#f6f9f5`) = ratio ~3.8:1. **No cumple WCAG AA** (requiere 4.5:1 para texto normal). Corrección:
```css
--text-muted: #3d5038; /* Oscurecer ligeramente: ratio ~5.1:1 */
```

### 9. Sin indicador de scroll en el hero
El hero es 90vh y el CTA está en la parte inferior. En móvil no es claro que hay contenido debajo. Agregar flecha o animación de scroll ayuda a la conversión.

### 10. Texturas de marca sin usar
Los tres archivos de texturas (`Texturas.png`, `Texturas2.png`, `Texturas3.png`) están en la carpeta pero **ningún HTML los referencia**. Podrían usarse como overlays en el hero o en secciones de fondo oscuro para dar profundidad visual a la marca.

---

## SEO y PERFORMANCE — Para posicionamiento post-lanzamiento

### 11. Archivos faltantes para Netlify
Para un deploy limpio crear:

**`netlify.toml`** (en raíz de la carpeta):
```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
    [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[redirects]]
  from = "/afiliacion"
  to = "/#afiliacion"
  status = 301
```

**`robots.txt`**:
```
User-agent: *
Allow: /
Sitemap: https://colnade.org.co/sitemap.xml
```

### 12. Structured Data (Schema.org) ausente
Para que Google entienda que es una organización profesional:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "COLNADE – Colegio Nacional de Ecólogos de Colombia",
  "url": "https://colnade.org.co",
  "logo": "https://colnade.org.co/mq8otj7v-__1-ID-full-color.png",
  "foundingDate": "2001",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contacto@colnade.org.co",
    "contactType": "customer service"
  }
}
</script>
```

### 13. Animaciones continuas en móvil (Performance)
`colnade-website.html` tiene varias animaciones en loop (`wave-drift`, `spiral-rot`, `tsWave`, etc.). En dispositivos de gama baja esto consume batería. Todas ya están protegidas con `prefers-reduced-motion`, lo cual es correcto. Sin embargo, considerar aplicar `will-change: transform` solo a los elementos que realmente animan para no saturar el compositor del navegador.

---

## Resumen de prioridades

| # | Acción | Impacto | Dificultad |
|---|--------|---------|------------|
| 1 | Renombrar colnade-website.html → index.html | 🔴 Crítico | ⚡ 2 min |
| 2 | Activar Netlify Forms en ambos formularios | 🔴 Crítico | ⚡ 15 min |
| 3 | Agregar og:image y favicon | 🔴 Crítico | ⚡ 10 min |
| 4 | Crear netlify.toml + robots.txt | 🟡 Alto | ⚡ 10 min |
| 5 | Integrar Google Fonts (Inter + Lora) | 🟡 Alto | ⚡ 5 min |
| 6 | Oscurecer text-muted para cumplir WCAG | 🟡 Alto | ⚡ 2 min |
| 7 | Fotos reales en noticias y junta directiva | 🟡 Alto | ⏱ 30 min |
| 8 | Integrar texturas de marca en hero/secciones | 🟢 Medio | ⏱ 20 min |
| 9 | Completar SVG de Colombia para T'suena | 🟢 Medio | ⏱ 45 min |
| 10 | Agregar structured data (Schema.org) | 🟢 Medio | ⚡ 10 min |

---

## Checklist Git + Netlify

```
□ Renombrar colnade-website.html → index.html
□ Crear netlify.toml
□ Crear robots.txt
□ Actualizar og:image con URL final del dominio
□ Verificar rutas de logo PNG relativas
□ Activar Netlify Forms (atributo netlify en <form>)
□ Commit inicial: git init → git add . → git commit -m "feat: sitio COLNADE v1"
□ Crear repositorio en GitHub (público o privado)
□ Conectar repo a Netlify → Build settings: publish directory "."
□ Configurar dominio personalizado en Netlify
□ Verificar HTTPS activo (Netlify provee certificado gratis)
□ Test en móvil 360px y 390px post-deploy
```

---

*Auditoría generada por MAESTRO COLNADE — Segundo Cerebro Estratégico del proyecto*
