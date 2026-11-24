export const CLAVE_DESARROLLO = 'ags-desarrollo-v1';
export const MAX_NOTAS_DESARROLLO = 100;

export function parsearNota(valor) {
  if (typeof valor !== 'string' && typeof valor !== 'number') return null;
  const texto = String(valor).trim().replace(',', '.');
  if (!texto || !/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(texto)) return null;
  const n = Number(texto);
  return Number.isFinite(n) && n >= 0 && n <= 10 ? Math.round(n * 100) / 100 : null;
}

export function guardarNota(estado, ejercicio, nota, fecha = new Date().toISOString()) {
  const n = parsearNota(nota);
  if (!n || !String(ejercicio).trim()) {
    if (n === 0 && String(ejercicio).trim()) return { notas: [...(estado?.notas || []), { ejercicio, nota: n, fecha }].slice(-MAX_NOTAS_DESARROLLO) };
    throw new RangeError('Escribe una nota entre 0 y 10.');
  }
  return { notas: [...(estado?.notas || []), { ejercicio, nota: n, fecha }].slice(-MAX_NOTAS_DESARROLLO) };
}

export function notasDeEjercicio(estado, ejercicio) {
  return (estado?.notas || []).filter(n => n.ejercicio === ejercicio).slice().reverse();
}

// Deja solo notas con la forma esperada (pueden venir de una copia o un enlace ajeno).
export function sanearDesarrollo(e) {
  const notas = Array.isArray(e?.notas) ? e.notas : [];
  return { notas: notas.filter(n => n && typeof n.ejercicio === 'string' && n.ejercicio.length <= 60 && Number.isFinite(n.nota) && n.nota >= 0 && n.nota <= 10 &&
    typeof n.fecha === 'string' && n.fecha.length <= 40).map(({ ejercicio, nota, fecha }) => ({ ejercicio, nota, fecha })).slice(-MAX_NOTAS_DESARROLLO) };
}

// Borradores de la respuesta escrita en la web (solo en este navegador) y contador de palabras.
export const CLAVE_BORRADORES = 'ags-borradores-v1';
export const MAX_BORRADORES = 40;
export const MAX_CARACTERES = 8000;

export function contarPalabras(texto) {
  return (String(texto ?? '').match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) || []).length;
}

// Devuelve el texto del contador y si está por debajo, dentro o por encima de la extensión pedida.
export function estadoPalabras(n, min = null, max = null) {
  const palabras = `${n} palabra${n === 1 ? '' : 's'}`;
  if (!Number.isInteger(min) || !Number.isInteger(max) || min >= max) return { estado: 'libre', texto: palabras };
  const pide = ` (se piden de ${min} a ${max})`;
  if (n < min) return { estado: 'corto', texto: `${palabras}${pide}: te faltan ${min - n}.` };
  if (n > max) return { estado: 'largo', texto: `${palabras}${pide}: te sobran ${n - max}.` };
  return { estado: 'bien', texto: `${palabras}${pide}: dentro de la extensión.` };
}

export function sanearBorradores(e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return {};
  const limpio = {};
  for (const [id, v] of Object.entries(e).slice(-MAX_BORRADORES)) {
    if (/^[a-z0-9-]{1,60}$/.test(id) && v && typeof v.texto === 'string' && typeof v.fecha === 'string' && v.fecha.length <= 40) limpio[id] = { texto: v.texto.slice(0, MAX_CARACTERES), fecha: v.fecha };
  }
  return limpio;
}

export function guardarBorrador(estado, id, texto, fecha = new Date().toISOString()) {
  const e = { ...sanearBorradores(estado) };
  delete e[id];
  if (String(texto).trim()) e[id] = { texto: String(texto).slice(0, MAX_CARACTERES), fecha };
  return sanearBorradores(e);
}

// Mete la respuesta escrita en el encargo de corrección; sin respuesta deja el hueco para pegarla.
export function encargoConRespuesta(encargo, respuesta) {
  const r = String(respuesta ?? '').trim();
  return r ? String(encargo).replace('[PEGA AQUÍ TU RESPUESTA]', () => r) : String(encargo);
}
