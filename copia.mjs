// Aviso de copia de seguridad (portado de Aula PAU c9cf3c9): si hace más de 14 días que no descargas
// una copia (o nunca) y ya llevas estudio acumulado, se recuerda con discreción. Solo localStorage.
export const CLAVE_COPIA = 'ags-copia-v1'; // fecha de la última copia descargada: no entra en la copia
export const DIAS_AVISO = 14;
export const MINIMO_ACTIVIDAD = 10;
const DIA = 86400000;

const json = (almacen, clave) => { try { return JSON.parse(almacen.getItem(clave) || 'null'); } catch { return null; } };

// Preguntas en el repaso + notas de simulacro + notas de desarrollo.
export function actividad(almacen) {
  const r = json(almacen, 'ags-repaso-v1'), d = json(almacen, 'ags-desarrollo-v1');
  const n = (x) => (x && typeof x === 'object' ? Object.keys(x).length : 0);
  return n(r?.preguntas) + (Array.isArray(r?.notas) ? r.notas.length : 0) + (Array.isArray(d?.notas) ? d.notas.length : 0);
}

export function anotarCopia(almacen, ahora = Date.now()) { try { almacen.setItem(CLAVE_COPIA, String(ahora)); } catch { /* sin almacenamiento */ } }

export function necesitaAvisoCopia(almacen, ahora = Date.now()) {
  if (!almacen) return false;
  let ultima = 0;
  try { ultima = Number(almacen.getItem(CLAVE_COPIA)); } catch { return false; }
  if (Number.isFinite(ultima) && ultima > 0 && ultima <= ahora && ahora - ultima <= DIAS_AVISO * DIA) return false;
  return actividad(almacen) >= MINIMO_ACTIVIDAD;
}

export const TEXTO_AVISO = 'Llevas más de 14 días sin descargar una copia de tu progreso. Si el navegador borra sus datos, lo perderías.';

// persist() puede mostrar un permiso (Firefox): solo se llama tras pulsar un botón. persisted() no pregunta nada.
export async function pedirPersistencia(nav = globalThis.navigator) {
  try { if (nav?.storage?.persist) return await nav.storage.persist(); } catch { /* sin soporte */ }
  return false;
}
export async function yaPersistente(nav = globalThis.navigator) {
  try { if (nav?.storage?.persisted) return await nav.storage.persisted(); } catch { /* sin soporte */ }
  return null;
}
