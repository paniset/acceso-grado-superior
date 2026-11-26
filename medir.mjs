// Recuento anónimo de visitas y pulsaciones. Solo se carga si datos/medicion.json tiene URL.
// Sin cookies, sin almacenamiento, sin identificador, sin consulta ni fragmento de la dirección.
export function permitido(nav, host) {
  return !(nav.doNotTrack === '1' || nav.globalPrivacyControl === true || /^(localhost|127\.|\[::1\])/.test(host));
}

export const mensaje = (evento, ruta) => JSON.stringify({ evento, web: 'acceso-grado-superior', pagina: ruta });

if (typeof document !== 'undefined') {
  const url = document.querySelector('script[data-medir]')?.dataset.medir;
  if (url && permitido(navigator, location.hostname)) {
    const enviar = evento => navigator.sendBeacon?.(url, mensaje(evento, location.pathname));
    enviar('visita');
    document.addEventListener('click', e => { const el = e.target.closest?.('[data-evento]'); if (el) enviar(el.dataset.evento); }, true);
  }
}
