// Agrupa los días del plan por semana (de lunes a domingo).
export function porSemanas(dias) {
  const semanas = new Map();
  for (const d of dias) {
    const f = new Date(`${d.fecha}T12:00:00Z`);
    f.setUTCDate(f.getUTCDate() - (f.getUTCDay() + 6) % 7);
    const lunes = f.toISOString().slice(0, 10);
    if (!semanas.has(lunes)) semanas.set(lunes, []);
    semanas.get(lunes).push(d);
  }
  return [...semanas].map(([lunes, lista]) => ({ lunes, dias: lista }));
}

const parse = s => { const d = new Date(`${s}T12:00:00Z`); return typeof s === 'string' && !Number.isNaN(d.valueOf()) ? d : null; };
const iso = d => d.toISOString().slice(0, 10);
// Lunes = 0 … domingo = 6.
const diaSemana = d => (d.getUTCDay() + 6) % 7;
const lunes = d => { const x = new Date(d); x.setUTCDate(x.getUTCDate() - diaSemana(x)); return iso(x); };
const MIN_POR_TEMA = 25;
const SIMULACRO = './simulacro-prueba-acceso-grado-superior';

export function planificar({ hoy, examen, diasSemana = 5, minutosDia = 60, materias = [] }) {
  const avisos = [], dias = [];
  const fechaHoy = parse(hoy), fechaExamen = parse(examen);
  if (!fechaHoy || !fechaExamen) return { avisos: ['Indica fechas válidas.'], dias };
  if (fechaExamen <= fechaHoy) return { avisos: ['El examen es hoy o ya ha pasado; elige una fecha futura.'], dias };
  diasSemana = Math.max(3, Math.min(7, Math.trunc(Number(diasSemana) || 5)));
  minutosDia = Math.max(15, Math.min(180, Math.trunc(Number(minutosDia) || 60)));
  // Temas alternando materias: uno de cada materia por turno.
  const colas = materias.map(m => (m.temas || []).map(t => ({ materia: m, tema: t })));
  const todos = [];
  while (colas.some(q => q.length)) for (const q of colas) if (q.length) todos.push(q.shift());
  // Días de estudio: los diasSemana primeros de cada semana, de lunes a domingo (7 = todos).
  const sesiones = [];
  for (let d = new Date(fechaHoy); d < fechaExamen; d.setUTCDate(d.getUTCDate() + 1)) if (diaSemana(d) < diasSemana) sesiones.push(iso(d));
  if (!sesiones.length) return { avisos: ['No quedan días de estudio antes del examen.'], dias };
  const repaso = new Date(fechaExamen); repaso.setUTCDate(repaso.getUTCDate() - 14);
  const repasoDesde = iso(repaso);
  const normales = sesiones.filter(f => f < repasoDesde);
  const porDia = normales.length ? Math.max(1, Math.ceil(todos.length / normales.length)) : 0;
  if (todos.length && !normales.length) avisos.push('Quedan menos de dos semanas: no da tiempo a ver todos los temas. El plan se centra en simulacros y en repasar tus falladas.');
  if (porDia > 3) avisos.push(`El plazo es corto: tocan ${porDia} temas por día. Si puedes, estudia más días a la semana o prioriza los temas que peor llevas.`);
  if (porDia && porDia * MIN_POR_TEMA > minutosDia) avisos.push(`Con ${minutosDia} minutos al día te quedarás corto: calcula unos ${porDia * MIN_POR_TEMA} minutos para ${porDia === 1 ? 'el tema y su test' : `${porDia} temas con sus tests`}.`);
  let indice = 0;
  sesiones.forEach((fecha, s) => {
    const tareas = [];
    if (fecha >= repasoDesde) {
      tareas.push({ tipo: 'simulacro', materia: '', tema: '', texto: 'Haz un simulacro y revisa tus resultados.', url: SIMULACRO });
      tareas.push({ tipo: 'repaso', materia: '', tema: '', texto: 'Repasa tus falladas.', url: SIMULACRO });
    } else {
      for (let n = 0; n < porDia && indice < todos.length; n++, indice++) {
        const { materia, tema } = todos[indice];
        tareas.push({ tipo: 'tema', materia: materia.nombre, tema: tema.titulo, texto: `Estudia ${materia.nombre}: ${tema.titulo}.`, url: materia.urlTemario || '' });
        tareas.push({ tipo: 'test', materia: materia.nombre, tema: tema.titulo, texto: `Haz el test del tema: ${tema.titulo}.`, url: materia.urlTest || '' });
      }
      const siguiente = sesiones[s + 1];
      const ultimoDeSemana = !siguiente || siguiente >= repasoDesde || lunes(parse(siguiente)) !== lunes(parse(fecha));
      if (ultimoDeSemana) tareas.push({ tipo: 'simulacro', materia: '', tema: '', texto: 'Haz un simulacro semanal.', url: SIMULACRO });
      else if (!tareas.length) tareas.push({ tipo: 'repaso', materia: '', tema: '', texto: 'Repasa tus falladas.', url: SIMULACRO });
    }
    dias.push({ fecha, tareas });
  });
  return { avisos, dias };
}
