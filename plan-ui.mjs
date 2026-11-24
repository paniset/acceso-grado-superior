import { rutaLocal } from './continuar-validacion.mjs';
const fechaValida = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(`${s}T12:00:00Z`)) && new Date(`${s}T12:00:00Z`).toISOString().slice(0,10) === s;
const MAX_DIAS = 400, MAX_TAREAS = 2400;
export function validarPlan(p) {
  if (!p || typeof p !== 'object' || !fechaValida(p.actualizado) || !fechaValida(p.hoy) || !fechaValida(p.examen) || !Number.isInteger(p.diasSemana) || p.diasSemana < 3 || p.diasSemana > 7 || !Number.isInteger(p.minutosDia) || p.minutosDia < 15 || p.minutosDia > 180 || !Array.isArray(p.dias) || p.dias.length > MAX_DIAS) return null;
  let total = 0;
  for (const d of p.dias) {
    if (!d || !fechaValida(d.fecha) || !Array.isArray(d.tareas)) return null;
    total += d.tareas.length;
    if (total > MAX_TAREAS || d.tareas.some(t => !t || !['tema','test','simulacro','repaso'].includes(t.tipo) || typeof t.texto !== 'string' || t.texto.length > 300 || typeof t.materia !== 'string' || t.materia.length > 100 || typeof t.tema !== 'string' || t.tema.length > 200 || typeof t.url !== 'string' || t.url.length > 500 || (t.url && !rutaLocal(t.url)))) return null;
  }
  return { actualizado: p.actualizado, hoy: p.hoy, comunidad: typeof p.comunidad === 'string' && /^[a-z-]{1,40}$/.test(p.comunidad) ? p.comunidad : '', examen: p.examen, diasSemana: p.diasSemana, minutosDia: p.minutosDia, materias: Array.isArray(p.materias) ? p.materias.filter(x => typeof x === 'string' && x.length <= 60).slice(0,50) : [],
    dias: p.dias.map(d => ({ fecha: d.fecha, tareas: d.tareas.map(({ tipo, materia, tema, texto, url }) => ({ tipo, materia, tema, texto, url })) })) };
}
