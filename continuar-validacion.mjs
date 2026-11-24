const fechaValida = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(`${s}T12:00:00Z`)) && new Date(`${s}T12:00:00Z`).toISOString().slice(0,10) === s;
// Ruta interna de esta web: ./pagina o ./pagina#ancla (sin comillas, barras, puntos ni protocolos).
export const rutaLocal = u => typeof u === 'string' && /^\.\/[a-z0-9-]{1,150}(?:#[a-z0-9_-]{1,40})?$/.test(u);
export function sanearUltimo(x) {
  if (!x || typeof x !== 'object' || !rutaLocal(x.url) || typeof x.titulo !== 'string' || !x.titulo.trim() || x.titulo.length > 120 || !fechaValida(x.fecha)) return null;
  return { url: x.url, titulo: x.titulo, fecha: x.fecha };
}
