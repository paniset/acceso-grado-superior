// Panel de accesibilidad del pie (todas las páginas) y botón «Escuchar esta página».
import { leer, guardar, aplicar, leerEnVoz, parar } from './accesibilidad.mjs';

let ajustes = aplicar(leer());
const $ = id => document.getElementById(id);
const legible = $('a11y-legible'), contraste = $('a11y-contraste'), extra = $('a11y-extra'), estado = $('a11y-estado');
if (legible && contraste && extra) {
  legible.checked = ajustes.legible; contraste.checked = ajustes.contraste; extra.value = String(ajustes.extra);
  const cambiar = () => {
    ajustes = aplicar(guardar({ legible: legible.checked, contraste: contraste.checked, extra: Number(extra.value) }));
    if (estado) estado.textContent = 'Guardado en este navegador.';
  };
  for (const campo of [legible, contraste, extra]) campo.addEventListener('change', cambiar);
}

const cabecera = document.querySelector('main .cabecera');
if (cabecera && globalThis.speechSynthesis && globalThis.SpeechSynthesisUtterance) {
  const boton = Object.assign(document.createElement('button'), { type: 'button', className: 'sec escuchar no-imprimir', textContent: 'Escuchar esta página' });
  boton.setAttribute('aria-pressed', 'false');
  const fin = () => { boton.textContent = 'Escuchar esta página'; boton.setAttribute('aria-pressed', 'false'); };
  boton.addEventListener('click', () => {
    if (speechSynthesis.speaking) { parar(); fin(); return; }
    const main = document.getElementById('contenido');
    if (!leerEnVoz(main?.innerText || '')) return;
    boton.textContent = 'Parar la lectura'; boton.setAttribute('aria-pressed', 'true');
    const espera = setInterval(() => { if (!speechSynthesis.speaking) { clearInterval(espera); fin(); } }, 500);
  });
  cabecera.append(boton);
  addEventListener('pagehide', () => parar());
}
