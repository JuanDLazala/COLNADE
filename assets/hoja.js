/* ============================================================
   Observatorio COLNADE — conexión con la hoja de cálculo
   ------------------------------------------------------------
   Este es el ÚNICO archivo que hay que tocar para que la web se
   alimente sola. Todo lo demás queda quieto.

   Cómo se obtiene cada enlace, una sola vez:
     1. Abrir la hoja en Google Sheets.
     2. Archivo › Compartir › Publicar en la web.
     3. En el primer desplegable elegir la pestaña («Entradas» o
        «Biblioteca»). En el segundo elegir «Valores separados
        por comas (.csv)».
     4. Publicar, copiar el enlace y pegarlo abajo entre comillas.

   Mientras estén vacíos, la web muestra el contenido que ya trae
   escrito y no se rompe nada. En cuanto se peguen los enlaces,
   las páginas de Líneas, Tribuna y Biblioteca pasan a leer la
   hoja y se actualizan solas cada vez que alguien edita una fila.
   ============================================================ */

window.OBS_HOJA = {
  entradas: '',
  biblioteca: '',

  /* Enlace del formulario de Google por el que entra toda la
     participación. Se pega aquí una vez y queda puesto en las cinco
     páginas que lo invocan. Mientras esté vacío, los botones «Clic
     aquí» quedan inertes y la página lo advierte en voz baja. */
  formulario: ''
};
