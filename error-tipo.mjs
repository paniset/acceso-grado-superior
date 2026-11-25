export const CLAVE_ERRORES = 'ags-errores-v1';
export const TIPOS = Object.freeze({
  concepto: 'No sabía el concepto',
  calculo: 'Lo sabía pero me equivoqué al calcular o aplicar',
  enunciado: 'No entendí el enunciado',
});

const crearConteo = () => ({ concepto: 0, calculo: 0, enunciado: 0 });
const tipoValido = tipo => Object.hasOwn(TIPOS, tipo);

function sanearConteo(x) {
  const r = crearConteo();
  if (!x || typeof x !== 'object' || Array.isArray(x)) return null;
  for (const tipo of Object.keys(TIPOS)) {
    if (!Number.isInteger(x[tipo]) || x[tipo] < 0) return null;
    r[tipo] = x[tipo];
  }
  return r;
}

export function sanearErrores(x) {
  const salida = { porTipo: crearConteo(), porBloque: {} };
  if (!x || typeof x !== 'object' || Array.isArray(x)) return salida;
  if (x.porTipo && typeof x.porTipo === 'object' && !Array.isArray(x.porTipo)) {
    for (const tipo of Object.keys(TIPOS)) if (Number.isInteger(x.porTipo[tipo]) && x.porTipo[tipo] >= 0) salida.porTipo[tipo] = x.porTipo[tipo];
  }
  if (x.porBloque && typeof x.porBloque === 'object' && !Array.isArray(x.porBloque)) {
    const bloques = Object.entries(x.porBloque).filter(([id, cuenta]) => typeof id === 'string' && id.length > 0 && id.length <= 80 && sanearConteo(cuenta));
    for (const [id, cuenta] of bloques.slice(-100)) salida.porBloque[id] = sanearConteo(cuenta);
  }
  return salida;
}

export function registrarError(errores, { bloque, tipo } = {}) {
  const salida = sanearErrores(errores);
  if (typeof bloque !== 'string' || !bloque.length || bloque.length > 80 || !tipoValido(tipo)) return salida;
  if (!Object.hasOwn(salida.porBloque, bloque)) {
    const ids = Object.keys(salida.porBloque);
    if (ids.length >= 100) delete salida.porBloque[ids[0]];
    salida.porBloque[bloque] = crearConteo();
  }
  salida.porTipo[tipo]++;
  salida.porBloque[bloque][tipo]++;
  return salida;
}

export function consejo(tipo) {
  return {
    concepto: 'Repasa la teoría del tema y comprueba que entiendes la idea antes de hacer más test.',
    calculo: 'El concepto ya lo sabes: haz ejercicios del tema despacio y revisa cada paso.',
    enunciado: 'Lee con calma qué pide cada pregunta y subraya los datos antes de mirar las opciones.',
  }[tipo] ?? '';
}

export function resumenErrores(errores) {
  const porTipo = sanearErrores(errores).porTipo;
  const tipos = Object.keys(TIPOS);
  const total = tipos.reduce((s, tipo) => s + porTipo[tipo], 0);
  if (total < 5) return { dominante: null, total, consejo: 'Aún pocos datos para ver un patrón: marca el motivo de al menos 5 fallos.' };
  const dominante = tipos.reduce((mejor, tipo) => porTipo[tipo] > porTipo[mejor] ? tipo : mejor, tipos[0]);
  return { dominante, total, consejo: consejo(dominante) };
}
