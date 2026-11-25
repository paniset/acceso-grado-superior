// Calendario (.ics) con la fecha de examen que pone el propio alumno en el plan. No es una fecha oficial.
const esc = s => String(s).replace(/[\\;,]/g, c => '\\' + c).replace(/\r?\n/g, '\\n');
const valida = iso => /^\d{4}-\d{2}-\d{2}$/.test(iso || '') && new Date(`${iso}T12:00:00Z`).toISOString().slice(0, 10) === iso;
const mover = (iso, dias) => { const d = new Date(`${iso}T12:00:00Z`); d.setUTCDate(d.getUTCDate() + dias); return d.toISOString().slice(0, 10); };
const compacta = iso => iso.replaceAll('-', '');

// examen y hoy en AAAA-MM-DD. Añade simulacros a 14 y 7 días si aún no han pasado.
export function crearIcs({ examen, titulo, hoy, simulacroDias = [14, 7] }, ahora = Date.now()) {
  if (!valida(examen) || !valida(hoy) || examen < hoy) return null;
  const sello = new Date(ahora).toISOString().replace(/[-:]|\.\d+/g, '');
  const ev = (uid, dia, resumen) => ['BEGIN:VEVENT', `UID:${uid}-${compacta(examen)}@acceso-grado-superior`, `DTSTAMP:${sello}`,
    `DTSTART;VALUE=DATE:${compacta(dia)}`, `DTEND;VALUE=DATE:${compacta(mover(dia, 1))}`, `SUMMARY:${esc(resumen)}`, 'END:VEVENT'];
  const lineas = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Acceso a Grado Superior//ES', 'CALSCALE:GREGORIAN', ...ev('examen', examen, `Examen: ${titulo}`)];
  for (const d of simulacroDias) {
    const dia = mover(examen, -d);
    if (dia > hoy) lineas.push(...ev(`simulacro-${d}`, dia, `Simulacro completo de la prueba (a ${d} días del examen)`));
  }
  lineas.push('END:VCALENDAR');
  return lineas.join('\r\n') + '\r\n';
}
