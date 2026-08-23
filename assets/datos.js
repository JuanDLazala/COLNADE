/* ============================================================
   Observatorio COLNADE — lector de la hoja de cálculo
   ------------------------------------------------------------
   Lee las pestañas publicadas como CSV y pinta las entradas del
   Observatorio, las columnas de Tribuna y los documentos de la
   Biblioteca. No hay servidor ni base de datos: la hoja es la
   fuente y la página la lee cada vez que alguien la abre.

   Regla de oro: si la hoja no está configurada, tarda o falla,
   la página conserva el contenido que ya trae escrito en el HTML.
   Nunca se queda en blanco por culpa de la conexión.
   ============================================================ */
(function () {
  'use strict';

  var CONF = window.OBS_HOJA || {};

  /* ---------- Lectura de CSV ----------
     Comillas dobles, comas dentro de un campo entrecomillado y
     saltos de línea dentro de una celda. Google exporta así. */
  function leerCSV(texto) {
    var filas = [], campo = '', fila = [], dentro = false, i;
    texto = texto.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    for (i = 0; i < texto.length; i++) {
      var c = texto.charAt(i);
      if (dentro) {
        if (c === '"') {
          if (texto.charAt(i + 1) === '"') { campo += '"'; i++; }
          else { dentro = false; }
        } else { campo += c; }
      } else if (c === '"') {
        dentro = true;
      } else if (c === ',') {
        fila.push(campo); campo = '';
      } else if (c === '\n') {
        fila.push(campo); filas.push(fila); fila = []; campo = '';
      } else {
        campo += c;
      }
    }
    if (campo.length || fila.length) { fila.push(campo); filas.push(fila); }
    return filas;
  }

  /* Nombres de columna sin acentos, sin mayúsculas y sin espacios,
     para que la hoja se pueda encabezar como se quiera. */
  function normalizar(s) {
    return String(s == null ? '' : s)
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().trim().replace(/\s+/g, '');
  }

  function aObjetos(filas) {
    if (!filas.length) return [];
    var cab = filas[0].map(normalizar);
    return filas.slice(1).filter(function (f) {
      return f.some(function (v) { return String(v).trim() !== ''; });
    }).map(function (f) {
      var o = {};
      cab.forEach(function (k, i) { o[k] = (f[i] || '').trim(); });
      return o;
    });
  }

  function publicada(fila) {
    var e = normalizar(fila.estado);
    return e === '' || e === 'publicado' || e === 'publicada' || e === 'si' || e === 'x';
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var LINEAS = [
    { slug: 'politicas',  nombre: 'Políticas públicas' },
    { slug: 'tendencias', nombre: 'Tendencias' },
    { slug: 'innovacion', nombre: 'Nuevos paradigmas e innovación' }
  ];

  function lineaDe(valor) {
    var v = normalizar(valor);
    if (v.indexOf('politic') > -1) return 'politicas';
    if (v.indexOf('tendenc') > -1) return 'tendencias';
    if (v.indexOf('innovac') > -1 || v.indexOf('paradigma') > -1) return 'innovacion';
    return '';
  }

  var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
               'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  function fechaLegible(v) {
    var m = String(v || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return v || '';
    return parseInt(m[3], 10) + ' de ' + MESES[parseInt(m[2], 10) - 1] + ' de ' + m[1];
  }

  function porFecha(a, b) {
    return String(b.fecha || '').localeCompare(String(a.fecha || ''));
  }

  /* ---------- Pintado ---------- */

  function entradaLi(e) {
    var titulo = e.enlace
      ? '<a href="' + esc(e.enlace) + '">' + esc(e.titulo) + '</a>'
      : esc(e.titulo);
    var firma = '';
    if (e.autor) {
      firma = '<div class="col-card__autor" style="border-top:none;padding-top:0;margin-top:0;">' +
        '<div><p class="col-card__autor-nombre">' + esc(e.autor) + '</p>' +
        '<p class="col-card__autor-datos">' +
          [e.filiacion, e.matricula ? 'Matrícula ' + e.matricula : ''].filter(Boolean).map(esc).join(' · ') +
        '</p></div></div>';
    }
    return '<li>' +
      '<p class="meta">' + esc(e.tipo || 'Entrada') +
        (e.fecha ? ' · ' + esc(fechaLegible(e.fecha)) : '') + '</p>' +
      '<h3 class="col-lista__titular">' + titulo + '</h3>' +
      (e.resumen ? '<p class="intro entrada-resumen">' + esc(e.resumen) + '</p>' : '') +
      firma +
      '</li>';
  }

  function pintarLineas(entradas, cont) {
    cont.innerHTML = LINEAS.map(function (L) {
      var propias = entradas.filter(function (e) { return lineaDe(e.linea) === L.slug; }).sort(porFecha);
      return '<section class="linea-grupo" id="' + L.slug + '">' +
        '<div class="seccion-head">' +
          '<h2>' + esc(L.nombre) + '</h2>' +
          '<p class="meta" style="margin:0;">' + propias.length +
            (propias.length === 1 ? ' entrada' : ' entradas') + '</p>' +
        '</div>' +
        (propias.length
          ? '<ul class="col-lista">' + propias.map(entradaLi).join('') + '</ul>'
          : '<p class="intro">Esta línea todavía no tiene entradas publicadas.</p>') +
        '</section>';
    }).join('');
  }

  function pintarTribuna(entradas, cont) {
    var cols = entradas.filter(function (e) {
      return normalizar(e.tipo).indexOf('tribuna') > -1;
    }).sort(porFecha);
    if (!cols.length) return;
    cont.innerHTML = cols.map(entradaLi).join('');
  }

  function pintarBiblioteca(docs, cont) {
    var vivos = docs.filter(publicada);
    if (!vivos.length) return;
    cont.innerHTML = vivos.map(function (d) {
      var col = normalizar(d.coleccion);
      var tipo = col.indexOf('normativ') > -1 ? 'normativa'
               : col.indexOf('cientif') > -1 ? 'cientifica'
               : col.indexOf('concepto') > -1 ? 'conceptos'
               : 'oficiales';
      var accion = d.enlace
        ? '<a class="btn btn--ghost" href="' + esc(d.enlace) + '" target="_blank" rel="noopener">Consultar</a>'
        : '<span class="btn btn--ghost is-disabled" aria-disabled="true">Archivo pendiente</span>';
      return '<article class="doc-row" data-tipo="' + tipo + '">' +
        '<div>' +
          '<h3 class="doc-row__title">' + esc(d.titulo) + '</h3>' +
          '<p class="doc-row__meta"><b>' + esc(d.coleccion) + '</b>' +
            (d.fuente ? ' · ' + esc(d.fuente) : '') +
            (d.anio ? ' · ' + esc(d.anio) : '') + '</p>' +
        '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">' +
          (d.cita ? '<button class="citar-btn" type="button" data-cita="' + esc(d.cita) + '">Copiar cita</button>' : '') +
          accion +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* Las filas repintadas son nodos nuevos: los oyentes que el guion de la
     página había puesto sobre las filas viejas ya no las alcanzan. Esto
     vuelve a conectar el copiar-cita, el buscador y el filtro por colección
     sobre lo que acaba de llegar de la hoja. */
  function reconectarBiblioteca(cont) {
    cont.addEventListener('click', function (ev) {
      var btn = ev.target.closest && ev.target.closest('.citar-btn');
      if (!btn || !cont.contains(btn)) return;
      var texto = btn.getAttribute('data-cita') || '';
      var previo = btn.textContent;
      var hecho = function () {
        btn.classList.add('is-copiado');
        btn.textContent = 'Cita copiada';
        setTimeout(function () {
          btn.classList.remove('is-copiado');
          btn.textContent = previo;
        }, 2200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).then(hecho, function () {});
      }
    });

    var chips = Array.prototype.slice.call(document.querySelectorAll('.filter-chip'));
    var buscar = document.querySelector('.search-input');
    var vacio = document.getElementById('doc-empty');
    var coleccion = 'todos';

    function aplicar() {
      var q = ((buscar && buscar.value) || '').trim().toLowerCase();
      var visibles = 0;
      Array.prototype.slice.call(cont.querySelectorAll('.doc-row')).forEach(function (fila) {
        var okCol = coleccion === 'todos' || fila.getAttribute('data-tipo') === coleccion;
        var okTxt = !q || fila.textContent.toLowerCase().indexOf(q) > -1;
        var ver = okCol && okTxt;
        fila.hidden = !ver;
        if (ver) visibles++;
      });
      if (vacio) vacio.hidden = visibles > 0;
    }

    chips.forEach(function (chip) {
      // Clonar descarta los oyentes anteriores y evita el doble filtrado.
      var nuevo = chip.cloneNode(true);
      chip.parentNode.replaceChild(nuevo, chip);
      nuevo.addEventListener('click', function () {
        coleccion = nuevo.getAttribute('data-filter');
        document.querySelectorAll('.filter-chip').forEach(function (c) {
          var on = c === nuevo;
          c.classList.toggle('is-active', on);
          c.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        aplicar();
      });
    });

    if (buscar) {
      var nuevoBuscar = buscar.cloneNode(true);
      buscar.parentNode.replaceChild(nuevoBuscar, buscar);
      buscar = nuevoBuscar;
      buscar.addEventListener('input', aplicar);
    }
    aplicar();
  }

  /* ---------- Arranque ---------- */

  function traer(url) {
    if (!url) return Promise.reject(new Error('hoja sin configurar'));
    return fetch(url, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    }).then(function (t) { return aObjetos(leerCSV(t)); });
  }

  function ocultarAvisos() {
    Array.prototype.slice.call(document.querySelectorAll('[data-hoja-aviso]'))
      .forEach(function (n) { n.hidden = true; });
  }

  function avisar(que, e) {
    if (window.console && console.info) {
      console.info('[Observatorio] ' + que + ': se conserva el contenido escrito (' + e.message + ')');
    }
  }

  /* El formulario es la única puerta de participación. Su enlace se pega
     una sola vez en hoja.js y desde ahí se reparte a todos los botones. */
  function activarFormulario() {
    var url = CONF.formulario;
    var botones = Array.prototype.slice.call(document.querySelectorAll('[data-formulario]'));
    if (!url) {
      botones.forEach(function (b) {
        b.classList.add('is-disabled');
        b.setAttribute('aria-disabled', 'true');
      });
      return;
    }
    botones.forEach(function (b) {
      b.href = url;
      b.target = '_blank';
      b.rel = 'noopener';
      b.classList.remove('is-disabled');
      b.removeAttribute('aria-disabled');
    });
    Array.prototype.slice.call(document.querySelectorAll('[data-formulario-aviso]'))
      .forEach(function (n) { n.hidden = true; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    activarFormulario();
    var contLineas  = document.querySelector('[data-hoja="lineas"]');
    var contTribuna = document.querySelector('[data-hoja="tribuna"]');
    var contBiblio  = document.querySelector('[data-hoja="biblioteca"]');

    if (contLineas || contTribuna) {
      traer(CONF.entradas).then(function (filas) {
        var vivas = filas.filter(publicada);
        if (contLineas) pintarLineas(vivas, contLineas);
        if (contTribuna) pintarTribuna(vivas, contTribuna);
        ocultarAvisos();
      }).catch(function (e) { avisar('Entradas', e); });
    }

    if (contBiblio) {
      traer(CONF.biblioteca).then(function (filas) {
        pintarBiblioteca(filas, contBiblio);
        reconectarBiblioteca(contBiblio);
        ocultarAvisos();
      }).catch(function (e) { avisar('Biblioteca', e); });
    }
  });
})();
