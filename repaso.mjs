// Repaso entre días (cajas de Leitner). Funciones puras: el estado vive solo en el localStorage de este navegador.
// Una pregunta fallada o en blanco vuelve mañana; cada acierto la manda más lejos; tras la última caja se da por dominada.
export const CLAVE = 'ags-repaso-v1';
export const INTERVALOS = [1, 3, 7, 16, 35];
export const MAX_NOTAS = 30;

export function estadoVacio() { return { preguntas: {}, notas: [] }; }

// «biologia:bio-001» (banco combinado) y «bio-001» son la misma pregunta.
export function idBase(id) { return String(id).split(':').pop(); }

export function hoyISO(fecha = new Date()) {
  const d = new Date(fecha.getTime() - fecha.getTimezoneOffset() * 60_000);
  return d.toISOString().slice(0, 10);
}

export function sumarDias(iso, dias) {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + dias);
  return d.toISOString().slice(0, 10);
}

// Admite JSON roto o de otra versión: devuelve siempre un estado válido.
export function leerEstado(texto) {
  try {
    const e = JSON.parse(texto);
    return sanearRepaso(e);
  } catch { return estadoVacio(); }
}

// Deja solo entradas con la forma esperada (el estado puede venir de una copia o un enlace ajeno).
const FECHA = /^\d{4}-\d{2}-\d{2}$/;
export function sanearRepaso(e) {
  if (!e || typeof e !== 'object' || !e.preguntas || typeof e.preguntas !== 'object' || Array.isArray(e.preguntas) || !Array.isArray(e.notas)) return estadoVacio();
  const preguntas = {};
  for (const [id, v] of Object.entries(e.preguntas)) {
    if (id.length <= 80 && v && Number.isInteger(v.caja) && v.caja >= 0 && v.caja < 10 && typeof v.proxima === 'string' && FECHA.test(v.proxima)) preguntas[id] = { caja: v.caja, proxima: v.proxima };
  }
  const notas = e.notas.filter(n => n && typeof n.materia === 'string' && n.materia.length <= 60 && Number.isFinite(n.nota) && n.nota >= 0 && n.nota <= 10 &&
    Number.isFinite(n.total) && n.total >= 0 && typeof n.fecha === 'string' && n.fecha.length <= 40).map(({ materia, nota, total, fecha }) => ({ materia, nota, total, fecha }));
  return { preguntas, notas: notas.slice(-MAX_NOTAS) };
}

// detalle: [{ id, estado: 'acierto' | 'fallo' | 'blanco' }]. Devuelve un estado nuevo.
export function registrar(estado, detalle, hoy) {
  const preguntas = { ...estado.preguntas };
  for (const { id, estado: e } of detalle) {
    const k = idBase(id);
    const previa = preguntas[k];
    if (e !== 'acierto') preguntas[k] = { caja: 0, proxima: sumarDias(hoy, INTERVALOS[0]) };
    else if (previa) {
      // Solo sube de caja si tocaba repasarla; un acierto antes de tiempo no la adelanta.
      if (previa.proxima > hoy) continue;
      const caja = previa.caja + 1;
      if (caja >= INTERVALOS.length) delete preguntas[k];
      else preguntas[k] = { caja, proxima: sumarDias(hoy, INTERVALOS[caja]) };
    }
  }
  return { preguntas, notas: estado.notas };
}

export function anotarNota(estado, { materia, nota, total, fecha }) {
  return { preguntas: estado.preguntas, notas: [...estado.notas, { materia, nota, total, fecha }].slice(-MAX_NOTAS) };
}

// Preguntas del banco que tocan hoy (o están atrasadas), las más atrasadas primero.
export function pendientes(estado, banco, hoy) {
  return banco.preguntas
    .filter(p => estado.preguntas[idBase(p.id)]?.proxima <= hoy)
    .sort((a, b) => estado.preguntas[idBase(a.id)].proxima.localeCompare(estado.preguntas[idBase(b.id)].proxima));
}

export function notasDe(estado, materia, n = 5) {
  return estado.notas.filter(x => x.materia === materia).slice(-n);
}

// Cuántas preguntas del banco están en repaso (aún no dominadas).
export function enRepaso(estado, banco) {
  return banco.preguntas.filter(p => estado.preguntas[idBase(p.id)]).length;
}

// «¿Estás listo?» (como el GED Ready): veredicto con la media de los 3 últimos simulacros de la materia
// de al menos 10 preguntas. Es una estimación, no una garantía.
export const MIN_PREGUNTAS_VEREDICTO = 10;
export function veredicto(estado, materia) {
  const notas = (estado?.notas || []).filter(x => x.materia === materia && x.total >= MIN_PREGUNTAS_VEREDICTO).slice(-3);
  if (notas.length < 2) return { estado: 'sin-datos', media: null, simulacros: notas.length,
    texto: `Haz al menos 2 simulacros de ${MIN_PREGUNTAS_VEREDICTO} preguntas o más para ver si estás listo.` };
  const media = Math.round(notas.reduce((s, x) => s + x.nota, 0) / notas.length * 100) / 100;
  const peor = Math.min(...notas.map(x => x.nota));
  const m = media.toLocaleString('es-ES');
  if (media >= 6.5 && peor >= 5) return { estado: 'listo', media, simulacros: notas.length, texto: `Probablemente listo: media de ${m} en tus ${notas.length} últimos simulacros y ninguno suspendido.` };
  if (media >= 5) return { estado: 'filo', media, simulacros: notas.length, texto: `En el filo: media de ${m}. Refuerza tus temas flojos antes del examen.` };
  return { estado: 'aun-no', media, simulacros: notas.length, texto: `Aún no: media de ${m}. Empieza por los temas con más fallos.` };
}

// Racha: días seguidos con al menos un simulacro (o una nota de desarrollo), terminando hoy o ayer.
export function racha(fechas, hoy) {
  const dias = new Set((fechas || []).filter(f => typeof f === 'string').map(f => f.slice(0, 10)).filter(f => FECHA.test(f)));
  const hechoHoy = dias.has(hoy);
  let dia = hechoHoy ? hoy : sumarDias(hoy, -1);
  let n = 0;
  while (dias.has(dia)) { n++; dia = sumarDias(dia, -1); }
  return { dias: n, hechoHoy };
}
