// Interfaz del simulacro cronometrado. Todo ocurre en el navegador: no se envía nada. Los fallos y las notas
// se guardan solo en el localStorage de este navegador para el repaso entre días, y se pueden borrar.
import { crearSimulacro, corregir, porTemas, nivelPorTema, testNivel, falladas, temasFlojos, codificarFalladas, leerFalladas, segundosRestantes, formatoTiempo, validarAjustes, unirBancos, textoPenalizacion, estadosMapa, resumenMapa, hojaRespuestas, ritmo, tiempoUsado, LIMITES } from './simulacro.mjs';
import { CLAVE, leerEstado, registrar, anotarNota, pendientes, notasDe, enRepaso, hoyISO, estadoVacio, veredicto } from './repaso.mjs';
import { exportar, fusionar, codificar as codificarProgreso, leer as leerProgreso, leerReto } from './progreso.mjs';
import { azar } from './simulacro.mjs';
import { CLAVE_ERRORES, TIPOS, sanearErrores, registrarError, resumenErrores } from './error-tipo.mjs';

const raiz = document.getElementById('simulacro');
const $ = sel => raiz.querySelector(sel);
const form = $('#ajustes');
const selMateria = $('#materia');
const inNumero = $('#numero');
const inMinutos = $('#minutos');
const cajaTemas = $('#temas');
const avisos = $('#avisos');
const examen = $('#examen');
const lista = $('#preguntas');
const reloj = $('#reloj');
const indicadorRitmo = $('.ritmo') ?? el('span', { clase: 'ritmo' });
if (!indicadorRitmo.isConnected) reloj.closest('.reloj-caja').append(indicadorRitmo);
const anuncio = $('#anuncio');
const btnEntregar = $('#entregar');
const resultado = $('#resultado');
const selPenal = $('#penalizacion');
const selOpciones = $('#opciones');
const presetInfo = $('#preset-info');
const papel = el('section', { id: 'papel', clase: 'papel', hidden: '' });
raiz.append(papel);

const MATERIAS = JSON.parse(raiz.dataset.materias || '[]');
const TEMARIOS = JSON.parse(raiz.dataset.temarios || '{}');
const bancos = new Map();
let banco = null;
let actual = null;
let temporizador = null;
let confirmarBlanco = false;
let avisado = new Set();
let penalActual = 0;
let preguntasForzadas = null;
let semillaActual;
let retoPendiente = null;
let marcadas = new Set();
let mapa = null;
let resumenMapaEl = null;
let modoActual = 'simulacro';

function aplicarProgreso(paquete) {
  if (!paquete || paquete.web !== 'acceso-grado-superior' || paquete.version !== 1) return false;
  const local = {};
  for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('ags-')) { try { local[k] = JSON.parse(localStorage.getItem(k)); } catch {} } }
  for (const [k, v] of Object.entries(fusionar(local, paquete.datos))) if (k.startsWith('ags-')) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  pintarRepaso(); return true;
}

// Repaso entre días. Si el navegador no deja guardar (modo privado estricto), la caja no aparece.
const cajaRepaso = document.createElement('div');
cajaRepaso.className = 'repaso-hoy';
cajaRepaso.setAttribute('aria-live', 'polite');
form.before(cajaRepaso);
function guardable() { try { localStorage.setItem(`${CLAVE}-prueba`, '1'); localStorage.removeItem(`${CLAVE}-prueba`); return true; } catch { return false; } }
const PUEDE_GUARDAR = guardable();
function cargarEstado() { try { return leerEstado(localStorage.getItem(CLAVE)); } catch { return estadoVacio(); } }
function guardarEstado(e) { try { localStorage.setItem(CLAVE, JSON.stringify(e)); } catch { /* lleno o bloqueado: se sigue sin guardar */ } }

function el(etiqueta, props = {}, ...hijos) {
  const nodo = document.createElement(etiqueta);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'texto') nodo.textContent = v;
    else if (k === 'clase') nodo.className = v;
    else nodo.setAttribute(k, v);
  }
  for (const h of hijos) if (h) nodo.append(h);
  return nodo;
}

async function cargarUno(id) {
  if (!/^[a-z-]+$/.test(id)) throw new Error('Materia desconocida');
  if (!bancos.has(id)) bancos.set(id, (await import(`./preguntas-${id}.mjs`)).default);
  return bancos.get(id);
}

// Acepta un banco («lengua») o varios unidos con «+» («biologia+quimica+fisica»).
async function cargarBanco(id) {
  if (!MATERIAS.includes(id)) throw new Error('Materia desconocida');
  return unirBancos(await Promise.all(id.split('+').map(cargarUno)));
}

// Atributo lang de enunciados y explicaciones según el banco de cada pregunta.
function idiomaDe(p) { return p.idioma ?? banco.idioma ?? 'es'; }
function idiomaExpDe(p) { return p.idiomaExplicacion ?? banco.idiomaExplicacion ?? 'es'; }
function conLang(nodo, idioma) { if (idioma && idioma !== 'es') nodo.setAttribute('lang', idioma); return nodo; }

function validarFormularioAjustes() {
  if (!banco) { avisos.textContent = 'Cargando preguntas… Pulsa otra vez en un momento.'; return null; }
  const a = ajustes();
  const errores = validarAjustes(a, banco);
  if (a.temas.length === 0) errores.push('Marca al menos un tema.');
  if (errores.length) { avisos.textContent = errores.join(' '); return null; }
  avisos.textContent = '';
  return a;
}

function pintarPapel(simulacro, a, semilla) {
  papel.replaceChildren();
  const tituloMateria = selMateria?.selectedOptions[0]?.textContent ?? banco.nombre;
  const cabecera = el('header', { clase: 'cabecera-papel' });
  cabecera.append(el('h1', { texto: tituloMateria }));
  cabecera.append(el('p', { texto: `${simulacro.preguntas.length} preguntas · ${a.minutos} minutos` }));
  cabecera.append(el('p', { texto: textoPenalizacion(a.penalizacion) }));
  cabecera.append(el('p', { texto: 'Nombre: ____________________  Fecha: ____________________' }));
  cabecera.append(el('p', { clase: 'codigo-papel', texto: `Código del simulacro: ${semilla}` }));
  papel.append(cabecera);

  const examenPapel = el('ol', { clase: 'preguntas-papel' });
  let contextoAnterior = null;
  simulacro.preguntas.forEach((p, i) => {
    const item = el('li', { clase: 'pregunta-papel' });
    const idioma = idiomaDe(p);
    if (p.contexto && p.contexto !== contextoAnterior) item.append(conLang(el('div', { clase: 'contexto', texto: p.contexto }), idioma));
    contextoAnterior = p.contexto || null;
    item.append(conLang(el('p', { clase: 'enunciado', texto: p.enunciado }), idioma));
    const opciones = el('ul', { clase: 'opciones-papel' });
    p.opciones.forEach((op, j) => opciones.append(conLang(el('li', { texto: `${'abcd'[j]}) ${op}` }), idioma)));
    item.append(opciones);
    examenPapel.append(item);
  });
  const bloqueExamen = el('section', { clase: 'examen-papel' });
  bloqueExamen.append(examenPapel);
  papel.append(bloqueExamen);

  const hoja = el('section', { clase: 'salto-pagina hoja-papel' });
  const tabla = el('table');
  tabla.append(el('caption', { texto: 'Hoja de respuestas: marca con una X' }));
  const filas = hojaRespuestas(simulacro);
  const filaTitulos = el('tr', {}, el('th', { scope: 'col', texto: 'Nº' }), ...'abcd'.slice(0, Math.max(...filas.map(f => f.letras.length))).split('').map(letra => el('th', { scope: 'col', texto: letra })));
  tabla.append(el('thead', {}, filaTitulos));
  const cuerpo = el('tbody');
  for (const fila of filas) cuerpo.append(el('tr', {}, el('th', { scope: 'row', texto: String(fila.numero) }), ...fila.letras.map(letra => el('td', { clase: 'casilla-papel', 'aria-label': `${fila.numero} ${letra}` }))));
  tabla.append(cuerpo); hoja.append(tabla); papel.append(hoja);

  const soluciones = el('section', { clase: 'salto-pagina soluciones-papel' });
  soluciones.append(el('h2', { texto: 'Soluciones (no las mires hasta acabar)' }));
  soluciones.append(el('p', { texto: `Cada acierto suma ${(10 / filas.length).toLocaleString('es-ES')} puntos. ${textoPenalizacion(a.penalizacion)}` }));
  soluciones.append(el('p', { clase: 'lista-soluciones', texto: filas.map(f => `${f.numero} ${f.correcta}`).join(' · ') }));
  const explicaciones = el('ol');
  simulacro.preguntas.forEach((p, i) => {
    const lp = idiomaDe(p);
    const li = el('li', {}, conLang(el('strong', { texto: `${filas[i].correcta}) ` }), lp), conLang(el('span', { texto: p.explicacion ?? '' }), idiomaExpDe(p)));
    explicaciones.append(li);
  });
  soluciones.append(explicaciones); papel.append(soluciones);
}

function imprimirPapel() {
  const a = validarFormularioAjustes();
  if (!a) return;
  anuncio.textContent = '';
  const semilla = crypto.getRandomValues(new Uint32Array(1))[0] >>> 0;
  const simulacro = crearSimulacro(banco, { ...a, rnd: azar(semilla) });
  pintarPapel(simulacro, a, semilla);
  papel.hidden = false;
  document.body.classList.add('imprimir-papel');
  anuncio.textContent = 'Simulacro listo para imprimir';
  window.print();
  const limpiar = () => { document.body.classList.remove('imprimir-papel'); papel.hidden = true; window.removeEventListener('afterprint', limpiar); };
  window.addEventListener('afterprint', limpiar, { once: true });
  setTimeout(limpiar, 500);
}

function pintarTemas() {
  cajaTemas.replaceChildren();
  for (const t of banco.temas) {
    const n = banco.preguntas.filter(p => p.tema === t.id).length;
    const caja = el('input', { type: 'checkbox', name: 'tema', value: t.id });
    caja.checked = true;
    cajaTemas.append(el('label', { clase: 'tema' }, caja, ` ${t.titulo} (${n})`));
  }
}

async function elegirMateria() {
  avisos.textContent = '';
  banco = null;
  // Si se cambia de materia (o se pulsan dos presets) antes de que cargue un banco, gana el último pedido.
  const pedido = selMateria?.value ?? MATERIAS[0];
  try {
    const b = await cargarBanco(pedido);
    if (selMateria && selMateria.value !== pedido) return;
    banco = b;
    pintarTemas();
    pintarRepaso();
    inNumero.max = String(Math.min(LIMITES.maxPreguntas, banco.preguntas.length));
  } catch {
    if (selMateria && selMateria.value !== pedido) return;
    avisos.textContent = 'No se ha podido cargar el banco de preguntas. Recarga la página.';
  }
}

// Botones «Como en el examen de…»: ponen materia, número de preguntas, tiempo y penalización oficiales.
async function aplicarPreset(boton) {
  const d = boton.dataset;
  if (selMateria && [...selMateria.options].some(o => o.value === d.banco)) {
    selMateria.value = d.banco;
    await elegirMateria();
  }
  if (!banco || (selMateria && selMateria.value !== d.banco)) return;
  const disponibles = banco.preguntas.length;
  const numero = Math.min(Number(d.numero), disponibles, LIMITES.maxPreguntas);
  inNumero.value = String(numero);
  inMinutos.value = String(Math.min(Math.max(Number(d.minutos), LIMITES.minMinutos), LIMITES.maxMinutos));
  if (selPenal) selPenal.value = [...selPenal.options].some(o => o.value === d.penalizacion) ? d.penalizacion : '0';
  if (selOpciones) selOpciones.value = d.opciones === '3' ? '3' : '4';
  // Temas del ejercicio real (p. ej. solo comprensión lectora); sin «data-temas», todos.
  const temas = d.temas ? d.temas.split(',') : null;
  cajaTemas.querySelectorAll('input').forEach(c => { c.checked = !temas || temas.includes(c.value); });
  const recorte = numero < Number(d.numero) ? ` (el examen tiene ${d.numero}; el banco solo da ${numero})` : '';
  const extra = (temas ? ` ${d.avisoTemas || 'Solo los temas del ejercicio real.'}` : '') + (d.opciones === '3' ? ' Tres opciones por pregunta.' : '');
  presetInfo.textContent = `Ajustado: ${boton.textContent}, ${numero} preguntas${recorte}, ${inMinutos.value} minutos. ${textoPenalizacion(Number(selPenal?.value || 0))}${extra} Pulsa «Empezar simulacro».`;
}

function ajustes() {
  const temas = [...cajaTemas.querySelectorAll('input:checked')].map(c => c.value);
  return { numero: Number(inNumero.value), minutos: Number(inMinutos.value), temas, penalizacion: Number(selPenal?.value || 0),
    opciones: Number(selOpciones?.value || 4) };
}

function textoTema(id) {
  return banco.temas.find(t => t.id === id)?.titulo ?? id;
}

// «¿Estás listo?»: el estado va en el texto y en la clase (no solo en el color).
function cajaVeredicto(estado) {
  const v = veredicto(estado, banco.id);
  const caja = el('div', { clase: `veredicto veredicto-${v.estado}` });
  caja.append(el('p', {}, el('strong', { texto: '¿Estás listo? ' }), v.texto));
  const temario = TEMARIOS[banco.id];
  const pie = el('p', { clase: 'mini' });
  if (temario && v.estado !== 'listo') pie.append(el('a', { href: temario, texto: `Repasa el temario de ${banco.nombre ?? 'la materia'}` }), '. ');
  pie.append('Es una estimación con tus simulacros, no una garantía.');
  caja.append(pie);
  return caja;
}

function pintarRepaso() {
  cajaRepaso.replaceChildren();
  if (!banco) return;
  const estado = cargarEstado();
  const tocan = pendientes(estado, banco, hoyISO());
  const notas = notasDe(estado, banco.id);
  const enCola = enRepaso(estado, banco);
  if (tocan.length) {
    cajaRepaso.append(el('p', {}, el('strong', { texto: `Hoy tienes ${tocan.length} ${tocan.length === 1 ? 'pregunta' : 'preguntas'} para repasar` }), ' (las que fallaste otros días).'));
    const b = el('button', { type: 'button', texto: 'Repasar ahora' });
    b.addEventListener('click', () => iniciar(tocan.slice(0, LIMITES.maxPreguntas)));
    cajaRepaso.append(b);
  } else if (enCola) {
    cajaRepaso.append(el('p', { texto: `Hoy no te toca repasar nada. ${enCola} ${enCola === 1 ? 'pregunta volverá' : 'preguntas volverán'} otro día.` }));
  }
  if (notas.length) cajaRepaso.append(el('p', { clase: 'mini', texto: `Tus últimas notas aquí: ${notas.map(n => n.nota.toLocaleString('es-ES')).join(' · ')}` }));
  cajaRepaso.append(cajaVeredicto(estado));
  const descargar = el('button', { type: 'button', clase: 'sec', texto: 'Descargar copia de mi progreso' });
  descargar.addEventListener('click', () => { const blob = new Blob([JSON.stringify(exportar(localStorage), null, 2)], { type: 'application/json' }); const a = el('a', { href: URL.createObjectURL(blob), download: 'copia-progreso-acceso-grado-superior.json' }); a.click(); URL.revokeObjectURL(a.href); });
  const archivo = el('input', { type: 'file', accept: 'application/json,.json', 'aria-label': 'Seleccionar copia de progreso' }); archivo.hidden = true;
  const cargar = el('button', { type: 'button', clase: 'sec', texto: 'Cargar copia' }); cargar.addEventListener('click', () => archivo.click());
  archivo.addEventListener('change', async () => { try { const p = JSON.parse(await archivo.files[0].text()); anuncio.textContent = p?.web === 'acceso-grado-superior' && p.version === 1 && aplicarProgreso(p) ? 'Copia fusionada con el progreso de este dispositivo.' : 'La copia no es válida para esta web.'; } catch { anuncio.textContent = 'No se pudo leer la copia.'; } });
  const compartir = el('button', { type: 'button', clase: 'sec', texto: 'Copiar enlace para otro dispositivo' });
  compartir.addEventListener('click', async () => { const u = new URL(location.href); u.hash = `progreso=${codificarProgreso(exportar(localStorage))}`; try { await navigator.clipboard.writeText(u.href); anuncio.textContent = 'Enlace copiado.'; } catch { anuncio.textContent = u.href; } });
  cajaRepaso.append(el('p', {}, descargar, cargar, compartir, archivo));
  const borrar = el('button', { type: 'button', clase: 'sec', texto: 'Borrar mi progreso de este navegador' });
  borrar.addEventListener('click', () => { try { localStorage.removeItem(CLAVE); localStorage.removeItem(CLAVE_ERRORES); } catch { /* nada */ } pintarRepaso(); anuncio.textContent = 'Progreso borrado.'; });
  cajaRepaso.append(el('p', { clase: 'mini' }, 'Se guarda solo en este navegador; no se envía a ningún sitio. ', borrar));
}

function pintarExamen() {
  lista.replaceChildren();
  // Un solo mapa: al empezar otro simulacro se sustituye el anterior.
  mapa?.remove(); resumenMapaEl?.remove();
  mapa = el('nav', { clase: 'mapa', 'aria-label': 'Mapa de preguntas' });
  resumenMapaEl = el('p', { clase: 'resumen-mapa' });
  lista.before(mapa, resumenMapaEl);
  let contextoAnterior = null;
  actual.preguntas.forEach((p, i) => {
    const item = el('li', { clase: 'pregunta' });
    conLang(item, idiomaDe(p));
    if (p.contexto && p.contexto !== contextoAnterior) {
      item.append(el('div', { clase: 'contexto', texto: p.contexto }));
    }
    contextoAnterior = p.contexto || null;
    const grupo = el('fieldset');
    grupo.append(el('legend', { texto: p.enunciado }));
    const marcar = el('button', { type: 'button', clase: 'marcar', 'aria-pressed': 'false', 'aria-label': `Marcar la pregunta ${i + 1} para revisar`, texto: 'Marcar para revisar' });
    marcar.addEventListener('click', () => {
      if (marcadas.has(i)) marcadas.delete(i); else marcadas.add(i);
      const activa = marcadas.has(i);
      marcar.setAttribute('aria-pressed', String(activa));
      item.classList.toggle('marcada', activa);
      actualizarMapa();
    });
    grupo.append(marcar);
    p.opciones.forEach((op, j) => {
      const radio = el('input', { type: 'radio', name: `p${i}`, value: String(j) });
      const label = el('label', { clase: 'opcion' }, radio, ` ${'abcd'[j]}) ${op}`);
      const tachar = el('button', { type: 'button', clase: 'tachar', 'aria-pressed': 'false', 'aria-label': `Tachar la opción ${'abcd'[j]} de la pregunta ${i + 1}`, texto: 'Tachar' });
      tachar.addEventListener('click', () => {
        const activa = tachar.getAttribute('aria-pressed') !== 'true';
        tachar.setAttribute('aria-pressed', String(activa));
        label.classList.toggle('tachada', activa);
      });
      grupo.append(el('div', { clase: 'fila-opcion' }, label, tachar));
    });
    item.append(grupo);
    lista.append(item);
  });
  actualizarMapa();
}

function actualizarMapa() {
  if (!actual || !mapa) return;
  const estados = estadosMapa(respuestas(), marcadas);
  mapa.replaceChildren();
  estados.forEach((estado, i) => {
    const descripcion = estado === 'respondida' ? 'respondida' : estado === 'blanco' ? 'en blanco' : 'marcada para revisar';
    const boton = el('button', { type: 'button', clase: `mapa-${estado}`, 'aria-label': `Pregunta ${i + 1}: ${descripcion}`, texto: estado === 'marcada' ? `${i + 1} ★` : String(i + 1) });
    boton.addEventListener('click', () => {
      const pregunta = lista.querySelectorAll(':scope > .pregunta')[i];
      pregunta?.setAttribute('tabindex', '-1');
      pregunta?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      pregunta?.focus();
    });
    mapa.append(boton);
  });
  const resumen = resumenMapa(estados);
  resumenMapaEl.textContent = `${resumen.respondidas} respondidas · ${resumen.blanco} en blanco · ${resumen.marcadas} marcadas`;
}

function tic() {
  const s = segundosRestantes(actual);
  reloj.textContent = formatoTiempo(s);
  reloj.classList.toggle('poco', s <= 300);
  const nRespondidas = respuestas().filter(x => x !== null).length;
  const r = ritmo({ total: actual.preguntas.length, respondidas: nRespondidas, segundosTotales: Math.floor((actual.fin - actual.inicio) / 1000), segundosRestantes: s });
  indicadorRitmo.textContent = `Ritmo: ${r.porPregunta} s por pregunta · llevas ${nRespondidas} de ${actual.preguntas.length}`;
  if (r.estado === 'detras' && estadoRitmo !== 'detras') anuncio.textContent = `Vas por detrás del ritmo: deberías llevar ${r.deberias} preguntas`;
  estadoRitmo = r.estado;
  for (const marca of [300, 60]) {
    if (s <= marca && s > 0 && !avisado.has(marca)) {
      avisado.add(marca);
      anuncio.textContent = marca === 300 ? 'Quedan 5 minutos.' : 'Queda 1 minuto.';
    }
  }
  if (s === 0) entregar(true);
}

let estadoRitmo = 'sin-datos';

// Respuestas marcadas a tiempo: lo que se toque después de la hora de fin no cuenta.
let congeladas = null;

function respuestas() {
  return actual.preguntas.map((_, i) => {
    const marcada = lista.querySelector(`input[name="p${i}"]:checked`);
    return marcada ? Number(marcada.value) : null;
  });
}

function entregar(porTiempo = false) {
  if (!actual) return;
  // Entregado a mano con el tiempo ya agotado (pestaña en segundo plano): cuentan las respuestas congeladas, pero no fue «solo».
  const aMano = !porTiempo;
  if (!porTiempo && segundosRestantes(actual) === 0) porTiempo = true;
  const r = porTiempo ? (congeladas ?? actual.preguntas.map(() => null)) : respuestas();
  const enBlanco = r.filter(x => x === null).length;
  const nMarcadas = marcadas.size;
  if (!porTiempo && (enBlanco || nMarcadas) && !confirmarBlanco) {
    confirmarBlanco = true;
    btnEntregar.textContent = enBlanco
      ? `Tienes ${enBlanco} en blanco${nMarcadas ? ` y ${nMarcadas} marcadas para revisar` : ''}. Pulsa otra vez para entregar`
      : `Tienes ${nMarcadas} marcadas para revisar. Pulsa otra vez para entregar`;
    anuncio.textContent = btnEntregar.textContent + '.';
    return;
  }
  clearInterval(temporizador);
  const usado = porTiempo ? tiempoUsado(actual, actual.fin) : tiempoUsado(actual);
  congeladas = null;
  anuncio.textContent = '';
  const res = corregir(actual, r, { penalizacion: penalActual });
  if (PUEDE_GUARDAR) {
    const hoy = hoyISO();
    let e = registrar(cargarEstado(), actual.preguntas.map((p, i) => ({ id: p.id, estado: res.detalle[i].estado })), hoy);
    if (modoActual !== 'nivel') e = anotarNota(e, { materia: banco.id, nota: res.nota, total: res.total, fecha: hoy });
    guardarEstado(e);
  }
  pintarResultado(res, porTiempo, aMano, usado);
  actual = null;
}

function pintarResultado(res, porTiempo, aMano = false, usado) {
  const preguntasResultado = actual.preguntas;
  examen.hidden = true;
  resultado.hidden = false;
  resultado.replaceChildren();
  const niveles = modoActual === 'nivel' ? nivelPorTema(res) : [];
  const titulo = el('h2', { tabindex: '-1', texto: modoActual === 'nivel' ? `Tu nivel: ${res.nota.toLocaleString('es-ES')} sobre 10` : `Tu nota: ${res.nota.toLocaleString('es-ES')} sobre 10` });
  resultado.append(titulo);
  if (porTiempo) resultado.append(el('p', { clase: 'aviso', texto: aMano
    ? 'Se acabó el tiempo antes de entregar: solo cuentan las respuestas marcadas antes del final.'
    : 'Se acabó el tiempo y el simulacro se entregó solo.' }));
  resultado.append(el('p', { texto: `${res.aciertos} aciertos, ${res.fallos} fallos y ${res.blanco} en blanco de ${res.total}. ${textoPenalizacion(penalActual)}` }));
  const minutosUsados = Math.floor(usado / 60);
  const segundosUsados = usado % 60;
  const media = res.total ? Math.round(usado / res.total) : 0;
  resultado.append(el('p', { texto: `Tiempo usado: ${minutosUsados}m ${segundosUsados}s de ${Math.floor((actual.fin - actual.inicio) / 60000)} min (${media} s por pregunta de media).` }));
  if (modoActual !== 'nivel' && PUEDE_GUARDAR) resultado.append(cajaVeredicto(cargarEstado()));
  if (modoActual === 'nivel') {
    const listaNivel = el('ul', { clase: 'niveles-tema' });
    const textosNivel = { empieza: 'Empieza por aquí', medias: 'A medias', domina: 'Lo dominas' };
    for (const t of niveles) listaNivel.append(el('li', { clase: `nivel-${t.nivel}`, texto: `${textoTema(t.tema)}: ${textosNivel[t.nivel]} (${t.aciertos} de ${t.total})` }));
    resultado.append(el('h3', { texto: 'Tu nivel por tema (empieza por arriba)' }), listaNivel);
  }
  const tabla = el('ul', { clase: 'por-temas' });
  for (const t of porTemas(res)) tabla.append(el('li', { texto: `${textoTema(t.tema)}: ${t.aciertos} de ${t.total}` }));
  resultado.append(el('h3', { texto: 'Por temas (de peor a mejor)' }), tabla);
  resultado.append(el('h3', { texto: 'Corrección' }));
  const ol = el('ol', { clase: 'correccion' });
  preguntasResultado.forEach((p, i) => {
    const d = res.detalle[i];
    const li = el('li', { clase: `pregunta ${d.estado}` });
    if (p.contexto && p.contexto !== actual.preguntas[i - 1]?.contexto) {
      li.append(conLang(el('div', { clase: 'contexto', texto: p.contexto }), idiomaDe(p)));
    }
    li.append(conLang(el('p', { clase: 'enunciado', texto: p.enunciado }), idiomaDe(p)));
    const etiqueta = { acierto: 'Correcta', fallo: 'Incorrecta', blanco: 'En blanco' }[d.estado];
    const lp = idiomaDe(p);
    if (d.elegida !== null) li.append(el('p', {}, `${etiqueta}. Marcaste: ${'abcd'[d.elegida]}) `, conLang(el('span', { texto: p.opciones[d.elegida] }), lp)));
    else li.append(el('p', { texto: etiqueta }));
    li.append(el('p', { clase: 'solucion' }, `Respuesta: ${'abcd'[p.correcta]}) `, conLang(el('span', { texto: p.opciones[p.correcta] }), lp)));
    li.append(conLang(el('p', { clase: 'explicacion', texto: p.explicacion }), idiomaExpDe(p)));
    ol.append(li);
  });
  resultado.append(ol);
  const erroresGuardados = () => { try { return sanearErrores(JSON.parse(localStorage.getItem(CLAVE_ERRORES) || 'null')); } catch { return sanearErrores(null); } };
  const resumenEl = el('p', { 'aria-live': 'polite' });
  const pintarResumenErrores = () => {
    const r = resumenErrores(erroresGuardados());
    resumenEl.textContent = r.dominante ? `Tu error más frecuente: ${TIPOS[r.dominante]}. ${r.consejo}` : r.consejo;
  };
  preguntasResultado.forEach((p, i) => {
    if (res.detalle[i].estado !== 'fallo' || !PUEDE_GUARDAR) return;
    const bloque = String(p.tema).includes(':') ? String(p.tema) : `${banco.id}:${p.tema}`;
    const grupo = el('div', { clase: 'marcar-error', role: 'group', 'aria-label': `Por qué fallaste la pregunta ${i + 1}` });
    grupo.append(el('span', { texto: '¿Por qué fallaste?' }));
    for (const [tipo, texto] of Object.entries(TIPOS)) {
      const boton = el('button', { type: 'button', 'aria-pressed': 'false', texto });
      boton.addEventListener('click', () => {
        let datos;
        try { datos = registrarError(JSON.parse(localStorage.getItem(CLAVE_ERRORES) || 'null'), { bloque, tipo }); localStorage.setItem(CLAVE_ERRORES, JSON.stringify(datos)); }
        catch { return; }
        grupo.querySelectorAll('button').forEach(b => { b.disabled = true; b.setAttribute('aria-pressed', String(b === boton)); });
        grupo.append(el('span', { texto: `Anotado: ${texto}` }));
        pintarResumenErrores();
      });
      grupo.append(boton);
    }
    ol.children[i].append(grupo);
  });
  pintarResumenErrores();
  resultado.append(resumenEl);
  if (actual.semilla !== undefined) {
    const a = ajustes(); const datos = { banco: banco.id, numero: preguntasResultado.length, minutos: a.minutos, temas: a.temas, opciones: a.opciones, penalizacion: penalActual, semilla: actual.semilla, nota: res.nota };
    const retar = el('button', { type: 'button', texto: 'Reta a un amigo' });
    retar.addEventListener('click', async () => { const u = new URL(location.href); u.hash = `reto=${codificarProgreso(datos)}`; try { await navigator.clipboard.writeText(u.href); anuncio.textContent = 'Enlace del reto copiado.'; } catch { anuncio.textContent = u.href; } }); resultado.append(retar);
  }
  if (retoPendiente) { resultado.append(el('p', { texto: `Tú: ${res.nota.toLocaleString('es-ES')} · Tu amigo: ${Number(retoPendiente.nota).toLocaleString('es-ES')}` })); retoPendiente = null; }
  const idsFallados = falladas(res);
  if (idsFallados.length) {
    const repetir = el('button', { type: 'button', texto: 'Repetir solo las falladas' });
    repetir.addEventListener('click', () => iniciarConPreguntas(idsFallados));
    const imprimir = el('button', { type: 'button', texto: 'Imprimir mis fallos' });
    imprimir.addEventListener('click', () => { document.body.classList.add('imprimir-fallos'); window.print(); setTimeout(() => document.body.classList.remove('imprimir-fallos'), 500); });
    const guardar = el('a', { href: codificarFalladas(idsFallados), texto: 'Guarda este enlace para repasar otro día' });
    resultado.append(repetir, imprimir, el('p', {}, guardar));
  }
  const flojos = modoActual === 'nivel' ? niveles.filter(t => t.nivel !== 'domina').map(t => t.tema) : temasFlojos(res);
  if (idsFallados.length || (modoActual === 'nivel' && flojos.length)) {
    const otroFlojos = el('button', { type: 'button', texto: 'Otro simulacro de mis temas flojos' });
    otroFlojos.disabled = flojos.length === 0;
    otroFlojos.addEventListener('click', () => iniciarTemasFlojos(flojos));
    resultado.append(otroFlojos);
  }
  const otro = el('button', { type: 'button', texto: 'Hacer otro simulacro' });
  otro.addEventListener('click', () => {
    resultado.hidden = true;
    form.hidden = false;
    cajaRepaso.hidden = false;
    pintarRepaso();
    form.querySelector('button[type="submit"]').focus();
  });
  resultado.append(otro);
  titulo.focus();
}

function iniciarConPreguntas(ids) {
  preguntasForzadas = banco.preguntas.filter(p => ids.includes(p.id));
  if (!preguntasForzadas.length) return;
  iniciar(preguntasForzadas);
}

function iniciarTemasFlojos(temas) {
  if (!temas.length) return;
  cajaTemas.querySelectorAll('input').forEach(c => { c.checked = temas.includes(c.value); });
  const candidatas = banco.preguntas.filter(p => temas.includes(p.tema));
  iniciar(candidatas.slice(0, Math.min(Math.max(1, Number(inNumero.value)), candidatas.length)));
}

function iniciar(preguntas = null, a = ajustes(), modo = 'simulacro') {
  if (preguntas && modo !== 'nivel') a = { ...a, minutos: Math.min(Math.max(Number(inMinutos.value) || 10, LIMITES.minMinutos), LIMITES.maxMinutos) };
  const semilla = preguntas ? undefined : (semillaActual ?? crypto.getRandomValues(new Uint32Array(1))[0] >>> 0);
  semillaActual = undefined;
  actual = preguntas ? { materia: banco.id, preguntas: preguntas.map(p => ({ ...p })), inicio: Date.now(), fin: Date.now() + a.minutos * 60_000 } : { ...crearSimulacro(banco, { ...a, rnd: azar(semilla) }), semilla };
  if (preguntas) retoPendiente = null;
  penalActual = a.penalizacion;
  modoActual = modo;
  confirmarBlanco = false; congeladas = null; avisado = new Set(); marcadas = new Set();
  estadoRitmo = 'sin-datos';
  btnEntregar.textContent = 'Entregar y corregir';
  pintarExamen(); form.hidden = true; cajaRepaso.hidden = true; resultado.hidden = true; examen.hidden = false;
  tic(); temporizador = setInterval(tic, 1000);
  const primera = lista.querySelector('li'); primera?.setAttribute('tabindex', '-1'); primera?.focus();
}

const hashParams = new URLSearchParams(location.hash.slice(1));
if (hashParams.has('progreso')) {
  const paquete = leerProgreso(hashParams.get('progreso'), d => Object.values(d).every(v => v && typeof v === 'object'));
  if (paquete) { const fusionarBtn = el('button', { type: 'button', texto: 'Fusionar el progreso recibido' }); fusionarBtn.addEventListener('click', () => { aplicarProgreso(paquete); anuncio.textContent = 'Progreso fusionado.'; }); cajaRepaso.before(fusionarBtn); }
}
if (hashParams.has('reto')) {
  const d = leerReto(hashParams.get('reto'), MATERIAS);
  if (d && MATERIAS.includes(d.banco) && Number.isInteger(d.numero) && d.numero >= LIMITES.minPreguntas && d.numero <= LIMITES.maxPreguntas && Number.isInteger(d.minutos) && d.minutos >= LIMITES.minMinutos && d.minutos <= LIMITES.maxMinutos && Number.isInteger(d.semilla) && typeof d.nota === 'number' && d.nota >= 0 && d.nota <= 10 && Array.isArray(d.temas) && [3, 4].includes(d.opciones) && [0, 0.25, 0.3333, 0.5].includes(d.penalizacion)) {
    const cajaReto = el('section', { clase: 'repaso-hoy', 'aria-live': 'polite' });
    cajaReto.append(el('p', { texto: `Te han retado: sacó ${d.nota.toLocaleString('es-ES')} sobre 10 en ${[...selMateria.options].find(o => o.value === d.banco)?.textContent || d.banco} (${d.numero} preguntas, ${d.minutos} minutos). Haz el mismo simulacro y compara.` }));
    const empezarReto = el('button', { type: 'button', texto: 'Empezar el mismo simulacro' });
    empezarReto.addEventListener('click', async () => { selMateria.value = d.banco; await elegirMateria(); const validos = new Set(banco.temas.map(t => t.id)); if (d.temas.some(t => !validos.has(t))) { avisos.textContent = 'El reto contiene temas que no existen.'; return; } inNumero.value = String(d.numero); inMinutos.value = String(d.minutos); selOpciones.value = String(d.opciones); selPenal.value = String(d.penalizacion); cajaTemas.querySelectorAll('input').forEach(c => c.checked = d.temas.length === 0 || d.temas.includes(c.value)); semillaActual = d.semilla; retoPendiente = d; iniciar(); });
    cajaReto.append(empezarReto); cajaRepaso.before(cajaReto);
  } else avisos.textContent = 'El enlace del reto no es válido y se ha ignorado.';
}

form.addEventListener('submit', ev => {
  ev.preventDefault();
  anuncio.textContent = '';
  const a = validarFormularioAjustes();
  if (!a) return;
  if (preguntasForzadas) { const p = preguntasForzadas; preguntasForzadas = null; iniciar(p, a); }
  else iniciar(null, a);
});

const imprimirSimulacro = el('button', { type: 'button', clase: 'sec', texto: 'Imprimir este simulacro en papel' });
imprimirSimulacro.addEventListener('click', imprimirPapel);
const btnTestNivel = el('button', { type: 'button', clase: 'sec', texto: 'Test de nivel (2 por tema)' });
btnTestNivel.addEventListener('click', () => {
  if (!banco) { avisos.textContent = 'Cargando preguntas… Pulsa otra vez en un momento.'; return; }
  const preguntas = testNivel(banco, { rnd: azar(crypto.getRandomValues(new Uint32Array(1))[0] >>> 0) });
  if (!preguntas.length) { avisos.textContent = 'Este banco aún no tiene preguntas para evaluar el nivel.'; return; }
  const minutos = Math.min(240, Math.max(5, Math.ceil(preguntas.length * 1.5)));
  iniciar(preguntas, { ...ajustes(), minutos, penalizacion: 0 }, 'nivel');
});
form.querySelector('[type="submit"]').after(imprimirSimulacro, btnTestNivel);

const idsHash = new URLSearchParams(location.hash.slice(1)).get('f');
if (idsHash) {
  const bancoHash = selMateria?.value ?? MATERIAS[0];
  cargarBanco(bancoHash).then(b => {
    banco = b;
    const preguntas = leerFalladas(`#f=${idsHash}`, b);
    if (!preguntas.length) return;
    const enlace = el('button', { type: 'button', texto: `Empezar simulacro con ${preguntas.length} preguntas guardadas` });
    enlace.addEventListener('click', () => iniciar(preguntas));
    resultado.hidden = false; resultado.append(el('p', { clase: 'aviso', texto: 'Este enlace contiene preguntas para repasar; los identificadores que ya no existan se omiten.' }), enlace);
  });
}

btnEntregar.addEventListener('click', () => entregar(false));
// Con la pestaña en segundo plano los intervalos se frenan: al volver se actualiza el reloj al momento.
document.addEventListener('visibilitychange', () => { if (actual && !document.hidden) tic(); });
lista.addEventListener('change', () => {
  if (actual && segundosRestantes(actual) > 0) congeladas = respuestas();
  if (confirmarBlanco) {
    confirmarBlanco = false;
    anuncio.textContent = '';
    btnEntregar.textContent = 'Entregar y corregir';
  }
  actualizarMapa();
});

// Modo estudio del banco: cada opción es un control real y revela la corrección al instante.
document.querySelectorAll('ol.banco > li').forEach(item => {
  const detalle = item.querySelector('details');
  const botones = item.querySelectorAll('button.opcion-estudio');
  if (!detalle || !botones.length) return;
  item.classList.add('modo-estudio');
  const correcta = [...item.querySelectorAll('details .solucion')][0]?.textContent.match(/Respuesta:\s*([abcd])/i)?.[1];
  botones.forEach(b => b.addEventListener('click', () => {
    botones.forEach(x => { x.disabled = true; });
    const acierto = b.dataset.indice === String('abcd'.indexOf(correcta?.toLowerCase()));
    b.classList.add(acierto ? 'acierto-estudio' : 'fallo-estudio');
    item.querySelector('.resultado-estudio').textContent = acierto ? 'Correcto.' : `Incorrecto. La respuesta es ${correcta}).`;
    detalle.open = true;
  }));
});
$('#todos').addEventListener('click', () => cajaTemas.querySelectorAll('input').forEach(c => { c.checked = true; }));
$('#ninguno').addEventListener('click', () => cajaTemas.querySelectorAll('input').forEach(c => { c.checked = false; }));
selMateria?.addEventListener('change', () => { presetInfo.textContent = ''; elegirMateria(); });
raiz.querySelectorAll('.preset').forEach(b => b.addEventListener('click', () => aplicarPreset(b)));
// Aviso antes de salir con un simulacro a medias.
window.addEventListener('beforeunload', ev => { if (actual) ev.preventDefault(); });

raiz.classList.add('js');
elegirMateria();
