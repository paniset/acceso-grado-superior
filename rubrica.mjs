// Autocorrección de ejercicios de desarrollo por criterios. Funciones puras: sin DOM, sin red, sin almacenamiento.

export const NOTA_MAXIMA = 10;

// Suma los puntos de los criterios marcados. Los criterios negativos son descuentos (p. ej. faltas de ortografía).
// La nota se queda entre 0 y la suma de los criterios positivos, y se redondea a cuartos de punto para evitar
// decimales falsos (0,1 + 0,2).
export function puntuarRubrica(criterios, marcados) {
  const elegidos = new Set(marcados);
  let maximo = 0;
  let suma = 0;
  let descuentos = 0;
  criterios.forEach((c, i) => {
    const puntos = Number(c.puntos);
    if (!Number.isFinite(puntos)) throw new Error(`Criterio ${i} sin puntos`);
    if (puntos > 0) maximo += puntos;
    if (!elegidos.has(i)) return;
    if (puntos > 0) suma += puntos;
    else descuentos += puntos;
  });
  const bruta = Math.min(maximo, Math.max(0, suma + descuentos));
  return { nota: Math.round(bruta * 4) / 4, maximo: Math.round(maximo * 4) / 4, sinDescuentos: Math.round(suma * 4) / 4 };
}

// «7,25» en vez de «7.25»; sin decimales si es entero.
export function formatoNota(n) {
  return Number.isInteger(n) ? String(n) : String(n).replace('.', ',');
}

// Frase para el alumno: nota estimada y, si hay descuentos, cuánto le han quitado.
export function textoNota({ nota, maximo, sinDescuentos }) {
  const base = `Nota estimada: ${formatoNota(nota)} sobre ${formatoNota(maximo)}.`;
  if (sinDescuentos > nota) return `${base} Sin descuentos tendrías ${formatoNota(Math.min(sinDescuentos, maximo))}.`;
  return base;
}
