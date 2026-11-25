import { planificar } from './plan.mjs';
import { validarPlan } from './plan-ui.mjs';
import { codificar } from './progreso.mjs';
import { crearIcs } from './ics.mjs';

const root = document.getElementById('planificador'), config = JSON.parse(root.dataset.config);
const $ = id => document.getElementById(id);
const comunidad = $('comunidad-plan'), fecha = $('fecha-examen'), dias = $('dias-semana'), minutos = $('minutos-dia'), lista = $('lista-materias'), estado = $('estado-plan');
const CLAVE = 'ags-plan-v1';
const SIMULACRO = 'simulacro-prueba-acceso-grado-superior';
const hoy = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
const fechaLarga = s => new Date(`${s}T12:00:00Z`).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });
const MESES = { enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6, julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12 };
let resultado = null;

const seleccionadas = () => [...lista.querySelectorAll('input:checked')].map(x => x.value);

function materias(marcadas = null) {
  lista.replaceChildren();
  for (const m of config.materias[comunidad.value] || []) {
    const l = document.createElement('label'); l.className = 'tema';
    const c = document.createElement('input'); c.type = 'checkbox'; c.value = m.id; c.checked = marcadas ? marcadas.includes(m.id) : m.comun !== false;
    c.addEventListener('change', generar);
    l.append(c, ` ${m.nombre} (${m.temas.length} temas)`); lista.append(l);
  }
}

function origen() {
  const t = config.fechas[comunidad.value] || '';
  const previsto = t.startsWith('Previsión'), sinFecha = t.startsWith('Sin publicar');
  $('origen-fecha').textContent = previsto ? `Fecha orientativa (${t.replace(/^Previsión:\s*/, '')}): aún no hay convocatoria. Pon una fecha aproximada y cámbiala cuando se publique.`
    : sinFecha ? 'La fecha aún no está publicada. Pon una fecha aproximada y cámbiala cuando salga la convocatoria.'
    : `Fecha publicada en la convocatoria: ${t}. Compruébala en «Fechas y cambios 2027».`;
  const m = !previsto && !sinFecha && t.match(/(\d{1,2})\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i);
  const anio = (t.match(/\b(20\d{2})\b/) || [])[1] || '2027';
  fecha.value = m ? `${anio}-${String(MESES[m[2].toLowerCase()]).padStart(2, '0')}-${m[1].padStart(2, '0')}` : '';
}

function pintarDias(nodo, lista) {
  nodo.replaceChildren();
  if (!lista.length) { const p = document.createElement('p'); p.className = 'mini'; p.textContent = 'Nada previsto.'; nodo.append(p); return; }
  for (const d of lista) {
    const art = document.createElement('article'); art.className = 'dia-plan';
    const h = document.createElement('h3'); h.textContent = fechaLarga(d.fecha); art.append(h);
    const ul = document.createElement('ul');
    for (const t of d.tareas) {
      const li = document.createElement('li');
      if (t.url) { const a = document.createElement('a'); a.href = t.url; a.textContent = t.texto; li.append(a); } else li.textContent = t.texto;
      ul.append(li);
    }
    art.append(ul); nodo.append(art);
  }
}

function render() {
  if (!resultado) return;
  $('resumen-plan').replaceChildren(...resultado.avisos.map(t => { const p = document.createElement('p'); p.textContent = t; return p; }));
  const hoyIso = hoy(), domingo = new Date(`${hoyIso}T12:00:00Z`);
  domingo.setUTCDate(domingo.getUTCDate() + (7 - domingo.getUTCDay()) % 7);
  const fin = domingo.toISOString().slice(0, 10);
  pintarDias($('hoy-plan').querySelector('div'), resultado.dias.filter(d => d.fecha === hoyIso));
  pintarDias($('semana-plan').querySelector('div'), resultado.dias.filter(d => d.fecha >= hoyIso && d.fecha <= fin));
  pintarDias($('plan-completo').querySelector('div'), resultado.dias);
}

function generar() {
  const elegidas = seleccionadas();
  const mats = (config.materias[comunidad.value] || []).filter(m => elegidas.includes(m.id));
  resultado = fecha.value ? planificar({ hoy: hoy(), examen: fecha.value, diasSemana: Number(dias.value), minutosDia: Number(minutos.value), materias: mats })
    : { avisos: ['Indica la fecha del examen para crear el plan.'], dias: [] };
  render();
}

const paquete = () => validarPlan({ actualizado: hoy(), hoy: hoy(), comunidad: comunidad.value, examen: fecha.value, diasSemana: Number(dias.value), minutosDia: Number(minutos.value), materias: seleccionadas(), dias: resultado?.dias || [] });

function guardar() {
  generar();
  const p = paquete();
  if (!p) { estado.textContent = 'Indica la fecha del examen para guardar el plan.'; return null; }
  try { localStorage.setItem(CLAVE, JSON.stringify(p)); estado.textContent = 'Plan guardado solo en este navegador.'; return p; }
  catch { estado.textContent = 'No se pudo guardar en este navegador.'; return null; }
}

function restaurar() {
  let p = null;
  try { p = validarPlan(JSON.parse(localStorage.getItem(CLAVE) || 'null')); } catch {}
  const id = location.hash.slice(1);
  if (config.materias[id]) comunidad.value = id;
  else if (p?.comunidad && config.materias[p.comunidad]) comunidad.value = p.comunidad;
  const mismo = p && (!p.comunidad || p.comunidad === comunidad.value);
  materias(mismo ? p.materias : null);
  origen();
  if (mismo) {
    fecha.value = p.examen; dias.value = String(p.diasSemana); minutos.value = String(p.minutosDia);
    estado.textContent = 'Tienes un plan guardado en este navegador; lo he actualizado a partir de hoy.';
  }
  generar();
}

comunidad.addEventListener('change', () => { history.replaceState(null, '', `#${comunidad.value}`); materias(); origen(); generar(); });
for (const campo of [fecha, dias, minutos]) campo.addEventListener('change', generar);
$('crear-plan').addEventListener('click', generar);
$('guardar-plan').addEventListener('click', guardar);
$('borrar-plan').addEventListener('click', () => { try { localStorage.removeItem(CLAVE); } catch {} estado.textContent = 'Plan borrado de este navegador.'; });
$('enlace-plan').addEventListener('click', async () => {
  const p = guardar(); if (!p) return;
  const token = codificar({ web: 'acceso-grado-superior', version: 1, fecha: new Date().toISOString(), datos: { [CLAVE]: p } });
  const url = new URL(`./${SIMULACRO}#progreso=${token}`, location.href).href;
  try { await navigator.clipboard.writeText(url); estado.textContent = 'Enlace copiado. Ábrelo en tu otro dispositivo y pulsa «Fusionar el progreso recibido».'; }
  catch { estado.textContent = 'No se pudo copiar el enlace en este navegador.'; }
});
$('imprimir-plan').addEventListener('click', () => { generar(); print(); });
$('calendario-plan').addEventListener('click', () => {
  const nombre = comunidad.selectedOptions[0]?.textContent || '';
  const ics = crearIcs({ examen: fecha.value, hoy: hoy(), titulo: `prueba de acceso a grado superior${nombre ? ` (${nombre})` : ''}` });
  if (!ics) { estado.textContent = 'Pon una fecha de examen de hoy en adelante para crear el calendario.'; return; }
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })), download: 'examen-grado-superior.ics' });
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  estado.textContent = 'Calendario descargado: ábrelo para añadir el examen y dos simulacros (a 14 y 7 días) a tu calendario. Es la fecha que has puesto tú: cámbiala si sale la convocatoria.';
});
restaurar();
