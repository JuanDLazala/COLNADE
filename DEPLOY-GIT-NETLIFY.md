# Guía: Git + Netlify para el boceto COLNADE

## Paso 1 — Instalar Git (si no está instalado)
Descarga desde https://git-scm.com y sigue el instalador con opciones por defecto.

Para verificar que funciona, abre una terminal (CMD o Git Bash) y ejecuta:
```
git --version
```

---

## Paso 2 — Inicializar el repositorio

Abre una terminal **dentro de la carpeta Pagina_Web** o navega hasta ella:
```
cd "C:\Users\juand\Documents\2026\COLNADE\COLNADE\Pagina_Web"
```

Luego inicializa Git:
```
git init
git add .
git commit -m "feat: boceto COLNADE v1 — primera versión para revisión cliente"
```

---

## Paso 3 — Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repo: `colnade-boceto` (privado recomendado para boceto)
3. **No marques** ninguna opción adicional (sin README, sin .gitignore)
4. Clic en **Create repository**

GitHub te mostrará comandos. Usa los de "push an existing repository":
```
git remote add origin https://github.com/TU-USUARIO/colnade-boceto.git
git branch -M main
git push -u origin main
```
(Reemplaza `TU-USUARIO` con tu usuario de GitHub)

---

## Paso 4 — Conectar con Netlify

1. Ve a https://app.netlify.com
2. Clic en **Add new site → Import an existing project**
3. Elige **GitHub** y autoriza el acceso
4. Selecciona el repo `colnade-boceto`
5. Configuración de build:
   - **Build command:** (dejar vacío — es HTML estático)
   - **Publish directory:** `.` (un punto — la carpeta raíz)
6. Clic en **Deploy site**

Netlify genera una URL automática tipo `random-name-123.netlify.app` en ~30 segundos.

---

## Paso 5 — Personalizar la URL del boceto (opcional)

En Netlify → Site settings → General → **Site name**:
- Cambia a `colnade-boceto` → quedará `colnade-boceto.netlify.app`

---

## Paso 6 — Compartir con el cliente

Envíale el link: `https://colnade-boceto.netlify.app`

El banner amarillo en la parte superior ya le indica que es un boceto.

---

## Cómo actualizar después de hacer cambios

Cada vez que hagas cambios al HTML o assets, ejecuta:
```
git add .
git commit -m "update: descripción del cambio"
git push
```
Netlify detecta el push automáticamente y redeploya en ~20 segundos.

---

## Checklist final antes de compartir

- [x] index.html con banner de boceto visible
- [x] netlify.toml con headers de seguridad
- [x] robots.txt bloqueando indexación (boceto privado)
- [ ] Git init y primer commit
- [ ] Repo en GitHub creado
- [ ] Conectado a Netlify
- [ ] URL compartida con el cliente

---

*Cuando COLNADE apruebe el diseño y se lance oficialmente:*
- Remover el banner de boceto del index.html
- Actualizar robots.txt para permitir indexación
- Configurar dominio personalizado (colnade.org.co) en Netlify
- Activar Netlify Forms en los formularios
