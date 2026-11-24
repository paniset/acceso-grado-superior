import { leerEstado, hoyISO, racha } from './repaso.mjs';
import { sanearDesarrollo } from './desarrollo.mjs';
import { rutaLocal } from './continuar-validacion.mjs';

export function contarRepaso(estado, hoy) {
  return Object.values(estado?.preguntas || {}).filter(p => p && typeof p.proxima === 'string' && p.proxima <= hoy).length;
}

// Racha y objetivo diario: un simulacro (o una nota de desarrollo) al día.
export function textoRacha({ dias, hechoHoy }) {
  if (!dias) return '';
  const d = `${dias} ${dias === 1 ? 'día' : 'días'} seguido${dias === 1 ? '' : 's'}`;
  return hechoHoy ? `Racha: ${d} estudiando. El objetivo de hoy está hecho.` : `Racha: ${d}. Haz hoy un simulacro para no perderla.`;
}

export function urlLocal(url) {
  if (typeof url === 'string' && url.startsWith('#')) return /^#[a-z0-9_-]{1,40}$/i.test(url);
  return rutaLocal(url);
}

const almacen = () => { try { return localStorage; } catch { return null; } };

export function iniciarContinuar({ document: doc = document, storage = almacen(), hoy = hoyISO() } = {}) {
  if (!storage) return;
  const page = doc.getElementById('contenido')?.dataset;
  const ruta = page?.continuar;
  const seguimiento = ['calculadora-nota-prueba-acceso-grado-superior', 'plan-de-estudio-prueba-acceso-grado-superior', 'simulacro-prueba-acceso-grado-superior'].some(x => ruta === x) || ruta?.startsWith('temario-') || ruta?.startsWith('test-') || ruta?.startsWith('ejercicios-desarrollo-');
  if (seguimiento && ruta && urlLocal(`./${ruta}`)) {
    try { storage.setItem('ags-ultimo-v1', JSON.stringify({ url: `./${ruta}`, titulo: (page.titulo || doc.title).slice(0, 120), fecha: hoy })); } catch {}
  }
  if (!page?.portada) return;
  let caja = doc.getElementById('continuar-estudio');
  if (!caja) { caja = doc.createElement('section'); caja.id = 'continuar-estudio'; caja.className = 'panel'; caja.setAttribute('aria-live', 'polite'); doc.querySelector('main')?.prepend(caja); }
  // Se construye con nodos: nada guardado (ni de una copia importada) se interpreta como HTML.
  const filas = [];
  const parrafo = (...hijos) => { const p = doc.createElement('p'); p.append(...hijos); filas.push(p); };
  const enlace = (href, texto) => { const a = doc.createElement('a'); a.href = href; a.textContent = texto; return a; };
  try {
    const ultimo = JSON.parse(storage.getItem('ags-ultimo-v1') || 'null');
    if (ultimo && urlLocal(ultimo.url) && typeof ultimo.titulo === 'string' && ultimo.titulo.length <= 120) parrafo('Continuar donde lo dejaste: ', enlace(ultimo.url, ultimo.titulo));
  } catch {}
  try {
    const plan = JSON.parse(storage.getItem('ags-plan-v1') || 'null');
    const tareas = (Array.isArray(plan?.dias) && plan.dias.find(d => d?.fecha === hoy)?.tareas) || [];
    const textos = Array.isArray(tareas) ? tareas.filter(t => typeof t?.texto === 'string' && t.tipo !== 'test').map(t => t.texto.slice(0, 300)) : [];
    if (textos.length) parrafo(`Hoy en tu plan: ${textos.join(' · ')} `, enlace('./plan-de-estudio-prueba-acceso-grado-superior', 'Ver mi plan'));
  } catch {}
  try {
    const n = contarRepaso(leerEstado(storage.getItem('ags-repaso-v1')), hoy);
    if (n) parrafo(enlace('./simulacro-prueba-acceso-grado-superior', `Hoy tienes ${n} ${n === 1 ? 'pregunta' : 'preguntas'} para repasar`));
  } catch {}
  try {
    const fechas = [...leerEstado(storage.getItem('ags-repaso-v1')).notas.map(x => x.fecha),
      ...sanearDesarrollo(JSON.parse(storage.getItem('ags-desarrollo-v1') || 'null')).notas.map(x => x.fecha)];
    const r = textoRacha(racha(fechas, hoy));
    if (r) parrafo(r);
  } catch {}
  caja.hidden = !filas.length;
  caja.replaceChildren(...filas);
}

if (typeof document !== 'undefined') iniciarContinuar();
