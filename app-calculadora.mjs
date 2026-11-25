import { calcular, necesaria } from './calculadora.mjs';
import { CLAVE, leerEstado, notasDe } from './repaso.mjs';
import { casillasHoy, escenariosHoy } from './nota-hoy.mjs';
const root = document.getElementById('calculadora');
const reglas = JSON.parse(root.dataset.reglas);
const fuentes = JSON.parse(root.dataset.fuentes || '{}');
const select = document.getElementById('comunidad-cal'), campos = document.getElementById('campos-nota'), salida = document.getElementById('resultado-nota'), fuente = document.getElementById('fuente-puntuacion'), avisos = document.getElementById('avisos-cal');
const coma = n => n.toFixed(2).replace('.', ',');
const parrafo = texto => { const p = document.createElement('p'); p.textContent = texto; return p; };
let regla, notas, hoy = null;
const cajaHoy = document.getElementById('nota-hoy'), botonHoy = document.getElementById('rellenar-simulacros');

function leer() {
  regla.partes.forEach((p, a) => p.materias.forEach((_, b) => {
    const v = campos.querySelector(`#nota-${a}-${b}`).value.trim().replace(',', '.');
    notas[a][b] = v !== '' && /^(?:\d+(?:\.\d*)?|\.\d+)$/.test(v) && Number(v) <= 10 ? Number(v) : null;
  }));
}

function actualizar() {
  leer();
  pintarHoy();
  const vacias = [];
  regla.partes.forEach((p, a) => { if (!p.tipo) p.materias.forEach((m, b) => { if (notas[a][b] === null) vacias.push([a, b, m.nombre]); }); });
  if (vacias.length === 1) {
    const [a, b, nombre] = vacias[0], n = necesaria(regla, notas, a, b);
    salida.replaceChildren(parrafo(n === null ? `Ni con un 10 en ${nombre} llegarías al aprobado con estas notas.` : n === 0 ? `Con estas notas ya apruebas, saques lo que saques en ${nombre}.` : `Necesitas al menos ${coma(n)} en ${nombre}.`));
    return;
  }
  const r = calcular(regla, notas);
  const filas = [parrafo(r.final === null ? (r.completo ? `No llega al aprobado. ${r.motivos.join(' ')}` : 'Completa tus notas para ver la estimación.') : `Nota final: ${coma(r.final)}. ${r.aprueba ? 'Aprobado orientativo.' : 'No llega al aprobado.'}`)];
  if (r.final !== null && r.motivos.length) filas.push(parrafo(r.motivos.join(' ')));
  if (r.notaAdmision !== null) filas.push(parrafo(`Puntuación de admisión: ${coma(r.notaAdmision)}.`));
  r.partes.filter(x => x.nota !== null && regla.partes.length > 1).forEach(x => filas.push(parrafo(`${x.nombre}: ${coma(x.nota)}`)));
  salida.replaceChildren(...filas);
}

// «Tu nota de hoy»: rellena con la media de tus 3 últimos simulacros y da tres escenarios.
const nombreEst = c => `${c.nombre} (${c.est.n === 1 ? '1 simulacro' : `media de ${c.est.n}`}: ${coma(c.est.central)})`;
function pintarHoy() {
  if (!hoy) { cajaHoy.replaceChildren(); return; }
  // Si cambias a mano una casilla rellenada, deja de contar como estimación.
  hoy.celdas = hoy.celdas.filter(c => notas[c.a][c.b] === c.est.central);
  if (!hoy.celdas.length) { hoy = null; cajaHoy.replaceChildren(); return; }
  const filas = [parrafo(`Rellenado con tus simulacros de este dispositivo: ${hoy.celdas.map(nombreEst).join(', ')}.`)];
  if (hoy.sinDatos.length) filas.push(parrafo(`Sin simulacros: ${hoy.sinDatos.join(', ')}. Escribe esa nota a mano o haz un simulacro.`));
  const e = escenariosHoy(regla, notas, hoy.celdas);
  const txt = x => x.final === null ? 'no llega' : `${coma(x.final)}${x.aprueba ? '' : ', no llega'}${x.notaAdmision !== null ? ` (admisión ${coma(x.notaAdmision)})` : ''}`;
  filas.push(parrafo(e ? `Si el examen fuera hoy: día flojo ${txt(e.minimo)}; lo esperable ${txt(e.central)}; día bueno ${txt(e.maximo)}.` : 'Completa las notas que faltan para ver los tres escenarios.'));
  filas.push(parrafo('Es una estimación propia con tus simulacros autocorregidos (margen de ±1 con un solo simulacro y de ±0,5 con más), no una predicción.'));
  cajaHoy.replaceChildren(...filas);
}
botonHoy.addEventListener('click', () => {
  let estado; try { estado = leerEstado(localStorage.getItem(CLAVE)); } catch { estado = leerEstado(null); }
  const r = casillasHoy(regla, id => notasDe(estado, id, 3));
  if (!r.celdas.length) {
    hoy = null;
    const p = parrafo('Aún no tienes simulacros de las materias de esta comunidad en este dispositivo. ');
    const a = document.createElement('a'); a.href = './simulacro-prueba-acceso-grado-superior'; a.textContent = 'Haz un simulacro';
    p.append(a, '.'); cajaHoy.replaceChildren(p); return;
  }
  r.celdas.forEach(c => { campos.querySelector(`#nota-${c.a}-${c.b}`).value = coma(c.est.central); });
  hoy = r; actualizar();
});

function pintar() {
  hoy = null; cajaHoy.replaceChildren();
  regla = reglas[select.value];
  notas = regla.partes.map(p => p.materias.map(() => null));
  fuente.href = fuentes[select.value] || `./prueba-acceso-grado-superior-${select.value}#puntuacion`;
  avisos.replaceChildren(...(regla.avisos || []).map(t => { const li = document.createElement('li'); li.textContent = t; return li; }));
  campos.replaceChildren();
  regla.partes.forEach((p, i) => {
    const fs = document.createElement('fieldset'), legend = document.createElement('legend');
    legend.textContent = p.tipo && !/voluntari/i.test(p.nombre) ? `${p.nombre} (opcional)` : p.nombre; fs.append(legend);
    p.materias.forEach((m, j) => {
      const label = document.createElement('label'); label.className = 'campo-nota'; label.htmlFor = `nota-${i}-${j}`; label.textContent = m.nombre;
      const input = document.createElement('input'); input.id = `nota-${i}-${j}`; input.type = 'text'; input.inputMode = 'decimal'; input.autocomplete = 'off'; input.placeholder = '0 a 10';
      input.addEventListener('input', actualizar); label.append(input); fs.append(label);
    });
    campos.append(fs);
  });
  salida.replaceChildren(parrafo('Escribe tus notas (de 0 a 10). Si dejas una sola en blanco, te digo cuánto necesitas en ella.'));
}

function desdeHash() { const id = location.hash.slice(1); if (reglas[id]) { select.value = id; pintar(); } }
select.addEventListener('change', () => { history.replaceState(null, '', `#${select.value}`); pintar(); });
addEventListener('hashchange', desdeHash);
if (reglas[location.hash.slice(1)]) desdeHash(); else pintar();
