// «Tu nota de hoy» (portado de Aula PAU, js/nota-hoy.js): rellena la calculadora con tus simulacros.
// Regla propia de orientación, no estadística validada: media de hasta los 3 últimos simulacros de la materia,
// con margen por autocorrección (±1 si solo hay uno, ±0,5 si hay más) sobre el peor y el mejor.
import { calcular } from './calculadora.mjs';

const sinTildes = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

// Nombre de materia de datos/calculadora.json → id del banco de simulacros. Solo los que coinciden sin dudas:
// «Lengua extranjera», «Lengua y literatura» o «Matemáticas o Historia de España» pueden ser varias cosas y no se rellenan.
const MAPA = {
  'matematicas': 'matematicas', 'matematica': 'matematicas', 'matematico': 'matematicas', 'fundamentos de matematicas': 'matematicas',
  'lengua castellana': 'lengua', 'lengua castellana y literatura': 'lengua', 'comunicativa': 'lengua', 'comunicativo': 'lengua',
  'comunicativa en lengua castellana': 'lengua', 'lingua castela': 'lengua',
  'ingles': 'ingles', 'lengua catalana': 'catalan', 'lingua galega': 'gallego',
  'digitalizacion': 'digitalizacion', 'digital': 'digitalizacion', 'tratamiento de la informacion y competencia digital': 'digitalizacion',
};
export function bancoDeMateria(nombre) { return MAPA[sinTildes(nombre)] || null; }

const r2 = x => Math.round(x * 100) / 100;
export function estimarMateria(notas, { ultimos = 3 } = {}) {
  const lim = Number.isInteger(ultimos) && ultimos > 0 ? ultimos : 3;
  const validas = (Array.isArray(notas) ? notas : []).map(x => x?.nota).filter(n => Number.isFinite(n) && n >= 0 && n <= 10).slice(-lim);
  if (!validas.length) return null;
  const margen = validas.length === 1 ? 1 : 0.5;
  return { n: validas.length, central: r2(validas.reduce((a, b) => a + b, 0) / validas.length),
    minimo: r2(Math.max(0, Math.min(...validas) - margen)), maximo: r2(Math.min(10, Math.max(...validas) + margen)) };
}

// Casillas de la comunidad que se pueden rellenar con simulacros y materias sin datos.
// notasDeBanco(id) devuelve las notas del banco en orden cronológico (repaso.mjs → notasDe).
export function casillasHoy(regla, notasDeBanco) {
  const celdas = [], sinDatos = [];
  (regla?.partes || []).forEach((p, a) => (p.materias || []).forEach((m, b) => {
    const banco = bancoDeMateria(m.nombre);
    if (!banco) return;
    const est = estimarMateria(notasDeBanco(banco));
    if (est) celdas.push({ a, b, nombre: m.nombre, banco, est }); else sinDatos.push(m.nombre);
  }));
  return { celdas, sinDatos };
}

// Tres escenarios con las demás notas tal como estén escritas: null si falta alguna obligatoria.
export function escenariosHoy(regla, notas, celdas) {
  if (!celdas?.length) return null;
  const salida = {};
  for (const esc of ['minimo', 'central', 'maximo']) {
    const copia = (regla.partes || []).map((p, a) => p.materias.map((_, b) => notas?.[a]?.[b] ?? null));
    celdas.forEach(c => { copia[c.a][c.b] = c.est[esc]; });
    const r = calcular(regla, copia);
    if (!r.completo) return null;
    salida[esc] = { final: r.final, aprueba: r.aprueba, notaAdmision: r.notaAdmision };
  }
  return salida;
}
