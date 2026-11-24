if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('./sw.js', import.meta.url)).then(() => {
    const caja = document.getElementById('descarga-offline');
    if (!caja) return;
    caja.hidden = false;
    const boton = caja.querySelector('button');
    const estado = caja.querySelector('.estado-offline');
    navigator.serviceWorker.addEventListener('message', ev => {
      const d = ev.data || {};
      if (d.tipo === 'progreso') estado.textContent = `Guardando ${d.actual} de ${d.total} archivos…`;
      if (d.tipo === 'completo') { estado.textContent = 'Guardada: ya puedes usarla sin conexión en este dispositivo.'; boton.disabled = false; }
      if (d.tipo === 'error') { estado.textContent = 'No se pudo guardar todo. Comprueba la conexión y el espacio, y vuelve a intentarlo.'; boton.disabled = false; }
    });
    boton.addEventListener('click', async () => {
      boton.disabled = true;
      estado.textContent = 'Guardando…';
      const reg = await navigator.serviceWorker.ready;
      reg.active.postMessage({ tipo: 'guardar-todo' });
    });
  }).catch(() => {});
}
