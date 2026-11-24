import { MAX_NOTAS, sanearRepaso } from './repaso.mjs';
import { CLAVE_DESARROLLO, sanearDesarrollo } from './desarrollo.mjs';
import { validarPlan } from './plan-ui.mjs';
import { sanearUltimo } from './continuar-validacion.mjs';

// Claves que se pueden importar, cada una con su comprobación de forma; el resto se descarta.
const SANEAR = { 'ags-repaso-v1': sanearRepaso, [CLAVE_DESARROLLO]: sanearDesarrollo,
  'ags-plan-v1': validarPlan, 'ags-ultimo-v1': sanearUltimo };
export function sanear(datos) {
  const salida = {};
  for (const [k, f] of Object.entries(SANEAR)) if (datos && datos[k] !== undefined) { const valor = f(datos[k]); if (valor !== null) salida[k] = valor; }
  return salida;
}

export function exportar(lector = clave => localStorage.getItem(clave)) {
  const datos = {};
  const claves = [];
  if (lector && typeof lector.getItem === 'function' && typeof lector.key === 'function') for (let i = 0; i < lector.length; i++) claves.push(lector.key(i));
  else if (typeof lector === 'function') return { web: 'acceso-grado-superior', version: 1, fecha: new Date().toISOString(), datos };
  else if (lector && typeof lector !== 'function') claves.push(...Object.keys(lector));
  for (const clave of claves || []) if (clave?.startsWith('ags-')) {
    try { const valor = lector.getItem ? JSON.parse(lector.getItem(clave)) : lector[clave]; if (valor !== undefined && valor !== null) datos[clave] = valor; } catch { /* ignora JSON roto */ }
  }
  return { web: 'acceso-grado-superior', version: 1, fecha: new Date().toISOString(), datos };
}

function fechaNota(n) { return `${n.materia}|${n.fecha}|${n.nota}|${n.total}`; }

export function fusionar(local, recibido) {
  local = sanear(local); recibido = sanear(recibido);
  const salida = { ...local, ...recibido };
  const a = local?.['ags-repaso-v1']; const b = recibido?.['ags-repaso-v1'];
  if (a || b) {
    const preguntas = { ...(a?.preguntas || {}) };
    for (const [id, nueva] of Object.entries(b?.preguntas || {})) {
      const vieja = preguntas[id];
      if (!vieja || Number(nueva.caja) > Number(vieja.caja) ||
          (Number(nueva.caja) === Number(vieja.caja) && String(nueva.proxima) > String(vieja.proxima))) preguntas[id] = nueva;
    }
    const notas = new Map();
    for (const n of [...(b?.notas || []), ...(a?.notas || [])]) notas.set(fechaNota(n), n);
    salida['ags-repaso-v1'] = { preguntas, notas: [...notas.values()].sort((x, y) => String(x.fecha).localeCompare(String(y.fecha))).slice(-MAX_NOTAS) };
  }
  const da = local[CLAVE_DESARROLLO], db = recibido[CLAVE_DESARROLLO];
  if (da || db) {
    const notas = new Map();
    for (const n of [...(da?.notas || []), ...(db?.notas || [])]) notas.set(`${n.ejercicio}|${n.fecha}|${n.nota}`, n);
    salida[CLAVE_DESARROLLO] = sanearDesarrollo({ notas: [...notas.values()].sort((x, y) => x.fecha.localeCompare(y.fecha)) });
  }
  if (local['ags-plan-v1'] || recibido['ags-plan-v1']) {
    const aPlan = local['ags-plan-v1'], bPlan = recibido['ags-plan-v1'];
    salida['ags-plan-v1'] = !aPlan ? bPlan : !bPlan ? aPlan : (String(bPlan.actualizado || '') > String(aPlan.actualizado || '') ? bPlan : aPlan);
  }
  if (local['ags-ultimo-v1'] || recibido['ags-ultimo-v1']) {
    const aUltimo = local['ags-ultimo-v1'], bUltimo = recibido['ags-ultimo-v1'];
    salida['ags-ultimo-v1'] = !aUltimo ? bUltimo : !bUltimo ? aUltimo : (String(bUltimo.fecha || '') > String(aUltimo.fecha || '') ? bUltimo : aUltimo);
  }
  for (const k of Object.keys(salida)) if (salida[k] === null) delete salida[k];
  return salida;
}

export function codificar(datos) {
  const bytes = new TextEncoder().encode(JSON.stringify(datos));
  let bin = ''; for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function leer(token, validarDatos = null) {
  try {
    if (typeof token !== 'string' || !/^[A-Za-z0-9_-]+$/.test(token) || token.length > 100000) return null;
    const bin = atob(token.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - token.length % 4) % 4));
    const obj = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(bin, c => c.charCodeAt(0))));
    if (!obj || obj.web !== 'acceso-grado-superior' || obj.version !== 1 || !obj.datos || typeof obj.datos !== 'object' || Array.isArray(obj.datos) ||
        Object.keys(obj.datos).some(k => !k.startsWith('ags-'))) return null;
    if (validarDatos && !validarDatos(obj.datos)) return null;
    return obj;
  } catch { return null; }
}

// Sin temasPorBanco no comprueba los temas: la página lo hace al cargar el banco.
export function leerReto(token, materias, temasPorBanco = null) {
  let d;
  try {
    if (typeof token !== 'string' || !/^[A-Za-z0-9_-]+$/.test(token) || token.length > 100000) return null;
    const bin = atob(token.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4-token.length%4)%4));
    d = JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(bin,c=>c.charCodeAt(0))));
  } catch { return null; }
  if (!d || Object.keys(d).some(k => !['banco', 'numero', 'minutos', 'temas', 'opciones', 'penalizacion', 'semilla', 'nota'].includes(k)) ||
      !materias.includes(d.banco) || !Number.isInteger(d.numero) || d.numero < 5 || d.numero > 80 ||
      !Number.isInteger(d.minutos) || d.minutos < 5 || d.minutos > 240 || !Array.isArray(d.temas) ||
      d.temas.some(t => typeof t !== 'string' || (temasPorBanco && !temasPorBanco[d.banco]?.includes(t))) || ![3, 4].includes(d.opciones) ||
      ![0, 0.25, 0.3333, 0.5].includes(d.penalizacion) || !Number.isInteger(d.semilla) ||
      typeof d.nota !== 'number' || d.nota < 0 || d.nota > 10) return null;
  return d;
}
