// Casillas de autocorrección de los ejercicios de desarrollo. Todo en el navegador: no se guarda ni se envía nada.
import { puntuarRubrica, textoNota } from './rubrica.mjs';
import { CLAVE_DESARROLLO, guardarNota, notasDeEjercicio, sanearDesarrollo, CLAVE_BORRADORES, contarPalabras, estadoPalabras, sanearBorradores, guardarBorrador, encargoConRespuesta } from './desarrollo.mjs';

for (const form of document.querySelectorAll('form.rubrica')) {
  const casillas = [...form.querySelectorAll('input[type="checkbox"][data-puntos]')];
  const salida = form.querySelector('output');
  const criterios = casillas.map(c => ({ puntos: Number(c.dataset.puntos) }));
  const actualizar = () => {
    const marcados = casillas.flatMap((c, i) => (c.checked ? [i] : []));
    salida.textContent = textoNota(puntuarRubrica(criterios, marcados));
  };
  form.addEventListener('change', actualizar);
  form.addEventListener('reset', () => setTimeout(actualizar, 0));
  form.addEventListener('submit', ev => ev.preventDefault());
  actualizar();
  form.classList.add('js');
}

// Redactar en la web: contador de palabras frente a la extensión pedida, reloj con el tiempo del ejercicio
// y borrador guardado solo en este navegador. El texto entra en el encargo de corrección al copiarlo.
function leerBorradores() { try { return sanearBorradores(JSON.parse(localStorage.getItem(CLAVE_BORRADORES))); } catch { return {}; } }
function formatoReloj(s) { return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }
for (const seccion of document.querySelectorAll('section.desarrollo')) {
  const id = seccion.id;
  const minutos = Number(seccion.dataset.minutos) || 0;
  const min = seccion.dataset.min ? Number(seccion.dataset.min) : null;
  const max = seccion.dataset.max ? Number(seccion.dataset.max) : null;
  const caja = document.createElement('div'); caja.className = 'redactar';
  const label = document.createElement('label'); label.textContent = 'Escribe aquí tu respuesta (opcional; también puedes hacerlo en papel)';
  const area = document.createElement('textarea'); area.rows = 8; area.maxLength = 8000; area.spellcheck = false;
  if (seccion.dataset.idioma && seccion.dataset.idioma !== 'es') area.lang = seccion.dataset.idioma;
  label.append(area);
  const contador = document.createElement('p'); contador.className = 'contador mini'; contador.setAttribute('aria-live', 'polite');
  const pintarContador = () => { const r = estadoPalabras(contarPalabras(area.value), min, max); contador.textContent = r.texto; contador.dataset.estado = r.estado; };
  area.value = leerBorradores()[id]?.texto || '';
  let espera = null;
  area.addEventListener('input', () => {
    pintarContador();
    clearTimeout(espera);
    espera = setTimeout(() => { try { localStorage.setItem(CLAVE_BORRADORES, JSON.stringify(guardarBorrador(leerBorradores(), id, area.value))); } catch {} }, 400);
  });
  const fila = document.createElement('p'); fila.className = 'reloj-redactar';
  const boton = document.createElement('button'); boton.type = 'button'; boton.className = 'sec';
  const tiempo = document.createElement('span'); tiempo.setAttribute('role', 'timer'); tiempo.setAttribute('aria-label', 'Tiempo restante del ejercicio');
  const aviso = document.createElement('span'); aviso.className = 'mini'; aviso.setAttribute('aria-live', 'polite');
  let fin = 0, intervalo = null;
  const parar = () => { clearInterval(intervalo); intervalo = null; boton.textContent = `Empezar reloj (${minutos} min)`; };
  const tic = () => {
    const s = Math.max(0, Math.round((fin - Date.now()) / 1000));
    tiempo.textContent = ` Quedan ${formatoReloj(s)}`;
    if (s === 0) { parar(); aviso.textContent = ` Se acabó el tiempo del ejercicio (${minutos} min). Puedes seguir escribiendo.`; }
  };
  boton.addEventListener('click', () => {
    if (intervalo) { parar(); aviso.textContent = ' Reloj parado.'; return; }
    fin = Date.now() + minutos * 60_000; aviso.textContent = ` Reloj en marcha: ${minutos} minutos.`;
    boton.textContent = 'Parar reloj'; tic(); intervalo = setInterval(tic, 1000);
  });
  document.addEventListener('visibilitychange', () => { if (intervalo && !document.hidden) tic(); });
  if (minutos > 0) { parar(); fila.append(boton, tiempo, aviso); }
  const borrar = document.createElement('button'); borrar.type = 'button'; borrar.className = 'sec'; borrar.textContent = 'Borrar mi texto';
  borrar.addEventListener('click', () => { area.value = ''; pintarContador(); try { localStorage.setItem(CLAVE_BORRADORES, JSON.stringify(guardarBorrador(leerBorradores(), id, ''))); } catch {} area.focus(); });
  const nota = document.createElement('p'); nota.className = 'mini'; nota.textContent = 'Se guarda solo en este navegador y entra en el encargo al pulsar «Copiar encargo de corrección».';
  caja.append(label, contador, fila, borrar, nota);
  (seccion.querySelector('ol.apartados') || seccion.querySelector('.enunciado'))?.after(caja);
  pintarContador();
}

function estadoDesarrollo() { try { return sanearDesarrollo(JSON.parse(localStorage.getItem(CLAVE_DESARROLLO))); } catch { return { notas: [] }; } }
for (const boton of document.querySelectorAll('button.copiar-encargo')) {
  const caja = boton.parentElement.querySelector('[data-ejercicio]') || boton.parentElement;
  const id = caja.dataset.ejercicio || boton.closest('section.desarrollo')?.id || 'ejercicio';
  const label = document.createElement('label'); label.textContent = 'Nota que te dio el asistente (0 a 10)';
  const input = document.createElement('input'); input.inputMode = 'decimal'; input.setAttribute('aria-label', label.textContent); label.append(input);
  const guardar = document.createElement('button'); guardar.type = 'button'; guardar.textContent = 'Guardar nota';
  const salida = document.createElement('p'); salida.setAttribute('aria-live', 'polite');
  const lista = document.createElement('ul'); lista.className = 'notas-desarrollo';
  const pintar = () => { lista.replaceChildren(...notasDeEjercicio(estadoDesarrollo(), id).map(n => { const li = document.createElement('li'); li.textContent = `${n.nota.toLocaleString('es-ES')} sobre 10 · ${n.fecha.slice(0,10)}. Es una estimación del asistente, no una nota oficial.`; return li; })); };
  guardar.addEventListener('click', () => { try { const nuevo = guardarNota(estadoDesarrollo(), id, input.value); localStorage.setItem(CLAVE_DESARROLLO, JSON.stringify(nuevo)); salida.textContent = 'Nota guardada en este navegador.'; input.value = ''; pintar(); } catch { salida.textContent = 'Escribe una nota entre 0 y 10.'; } });
  caja.append(label, guardar, salida, lista); pintar();
}

for (const boton of document.querySelectorAll('button.copiar-encargo')) {
  const selector = document.createElement('select'); selector.setAttribute('aria-label', 'Asistente para corregir');
  for (const [url, nombre] of [['https://chatgpt.com/','ChatGPT'],['https://gemini.google.com/app','Gemini'],['https://copilot.microsoft.com/','Copilot']]) { const op = document.createElement('option'); op.value = url; op.textContent = nombre; selector.append(op); }
  const abrir = document.createElement('button'); abrir.type='button'; abrir.textContent='Copiar encargo y abrir el asistente';
  const aviso = document.createElement('p'); aviso.className='mini'; aviso.textContent='Lo que pegues en el asistente lo envías tú a ese servicio; aquí no se envía nada';
  boton.after(selector, abrir, aviso);
  abrir.addEventListener('click', async () => { await copiarEncargo(boton); window.open(selector.value, '_blank', 'noopener'); });
  boton.addEventListener('click', () => copiarEncargo(boton));
}

async function copiarEncargo(boton) {
  const texto = encargoConRespuesta(boton.dataset.encargo, boton.closest('section.desarrollo')?.querySelector('.redactar textarea')?.value);
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Portapapeles no disponible');
    await navigator.clipboard.writeText(texto);
    boton.textContent = 'Encargo copiado';
  } catch {
    const caja = boton.parentElement.querySelector('.encargo-alternativo');
    caja.hidden = false;
    const area = caja.querySelector('textarea'); area.value = texto; area.focus(); area.select();
    boton.textContent = 'Selecciona y copia el encargo';
  }
}
