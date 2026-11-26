// Botón de interés: no cobra, no pide datos y no guarda nada.
const boton = document.getElementById('quiero');
boton?.addEventListener('click', () => {
  document.getElementById('quiero-estado').textContent = 'Aún no está a la venta: no se cobra nada ni se pide ningún dato.';
  boton.disabled = true;
});
