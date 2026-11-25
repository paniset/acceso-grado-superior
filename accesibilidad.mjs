// Ajustes de accesibilidad guardados solo en este navegador: lectura fácil, alto contraste, tiempo extra y lectura en voz alta.
export const CLAVE_A11Y = 'ags-accesibilidad-v1';
export const EXTRAS = [0, 25, 50];
const base = () => ({ legible: false, contraste: false, extra: 0 });

export function sanear(x) {
  const o = x && typeof x === 'object' && !Array.isArray(x) ? x : {};
  return { legible: o.legible === true, contraste: o.contraste === true, extra: EXTRAS.includes(o.extra) ? o.extra : 0 };
}
export function leer(almacen = globalThis.localStorage) {
  try { return sanear(JSON.parse(almacen.getItem(CLAVE_A11Y) || 'null')); } catch { return base(); }
}
export function guardar(a, almacen = globalThis.localStorage) {
  const v = sanear(a);
  try { almacen.setItem(CLAVE_A11Y, JSON.stringify(v)); } catch { /* sin almacenamiento */ }
  return v;
}
export function aplicar(a, raiz = globalThis.document?.documentElement) {
  const v = sanear(a);
  raiz?.classList?.toggle('a11y-legible', v.legible);
  raiz?.classList?.toggle('a11y-contraste', v.contraste);
  return v;
}
// Minutos con el tiempo extra, redondeando al minuto hacia arriba.
export const minutosConExtra = (minutos, a) => { const { extra } = sanear(a); return extra ? Math.ceil(minutos * (1 + extra / 100)) : minutos; };
// Alarga el examen en curso ({ inicio, fin }). `tiempoExtra` evita sumarlo dos veces.
export function conTiempoExtra(examen, a) {
  const { extra } = sanear(a);
  if (!extra || examen.tiempoExtra) return examen;
  const minutos = Math.round((examen.fin - examen.inicio) / 60_000);
  return { ...examen, fin: examen.inicio + minutosConExtra(minutos, a) * 60_000, tiempoExtra: extra };
}
export function trocear(texto, max = 200) {
  const trozos = [];
  for (const frase of String(texto).split(/(?<=[.!?])\s+|\n+/)) {
    let resto = frase.trim();
    while (resto.length > max) {
      const espacio = resto.lastIndexOf(' ', max), corte = espacio > 0 ? espacio : max;
      trozos.push(resto.slice(0, corte)); resto = resto.slice(corte).trim();
    }
    if (resto) trozos.push(resto);
  }
  return trozos;
}
// Por trozos: los motores de voz cortan los textos muy largos.
export function leerEnVoz(texto, sintesis = globalThis.speechSynthesis, Voz = globalThis.SpeechSynthesisUtterance) {
  if (!sintesis || !Voz || !texto) return false;
  sintesis.cancel();
  for (const trozo of trocear(texto)) { const u = new Voz(trozo); u.lang = 'es-ES'; sintesis.speak(u); }
  return true;
}
export const parar = (sintesis = globalThis.speechSynthesis) => sintesis?.cancel?.();
