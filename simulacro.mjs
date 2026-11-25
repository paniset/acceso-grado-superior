// Lógica pura del simulacro (sin DOM): selección, barajado, corrección y tiempo.

export const LIMITES = { minPreguntas: 5, maxPreguntas: 80, minMinutos: 5, maxMinutos: 240 };

export function estadosMapa(respuestas, marcadas) {
  return respuestas.map((respuesta, i) => marcadas.has(i) ? 'marcada' : respuesta === null || respuesta === undefined ? 'blanco' : 'respondida');
}

export function resumenMapa(estados) {
  return estados.reduce((resumen, estado) => {
    if (estado === 'respondida') resumen.respondidas++;
    else if (estado === 'blanco') resumen.blanco++;
    else if (estado === 'marcada') resumen.marcadas++;
    return resumen;
  }, { respondidas: 0, blanco: 0, marcadas: 0 });
}

// Generador pseudoaleatorio con semilla (mulberry32) para pruebas reproducibles.
export function azar(semilla = Date.now()) {
  let a = semilla >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function barajar(lista, rnd = Math.random) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Devuelve una copia con las opciones barajadas y el índice correcto recalculado.
export function barajarOpciones(pregunta, rnd = Math.random) {
  const orden = barajar(pregunta.opciones.map((_, i) => i), rnd);
  return { ...pregunta, opciones: orden.map(i => pregunta.opciones[i]), correcta: orden.indexOf(pregunta.correcta) };
}

// Deja la pregunta con «n» opciones (p. ej. 3, como en Galicia): quita distractores al azar y conserva la correcta.
export function reducirOpciones(pregunta, n = 4, rnd = Math.random) {
  if (!Number.isInteger(n) || n < 2 || n >= pregunta.opciones.length) return pregunta;
  const distractores = barajar(pregunta.opciones.map((_, i) => i).filter(i => i !== pregunta.correcta), rnd).slice(0, n - 1);
  const quedan = pregunta.opciones.map((_, i) => i).filter(i => i === pregunta.correcta || distractores.includes(i));
  return { ...pregunta, opciones: quedan.map(i => pregunta.opciones[i]), correcta: quedan.indexOf(pregunta.correcta) };
}

// Une varios bancos en uno (p. ej. «biologia+quimica+fisica»). Los ids de tema y de pregunta llevan el
// prefijo del banco para que no choquen; cada pregunta guarda el idioma de su banco.
export function unirBancos(lista) {
  if (lista.length === 1) return lista[0];
  return {
    id: lista.map(b => b.id).join('+'),
    nombre: lista.map(b => b.nombre).join(', '),
    idioma: lista.every(b => b.idioma === lista[0].idioma) ? lista[0].idioma : 'es',
    idiomaExplicacion: lista.every(b => b.idiomaExplicacion === lista[0].idiomaExplicacion) ? lista[0].idiomaExplicacion : 'es',
    temas: lista.flatMap(b => b.temas.map(t => ({ id: `${b.id}:${t.id}`, titulo: `${b.nombre}: ${t.titulo}` }))),
    preguntas: lista.flatMap(b => b.preguntas.map(p => ({
      ...p, id: `${b.id}:${p.id}`, tema: `${b.id}:${p.tema}`,
      idioma: p.idioma ?? b.idioma, idiomaExplicacion: p.idiomaExplicacion ?? b.idiomaExplicacion,
    }))),
  };
}

// Texto que explica cómo puntúan los fallos.
export function textoPenalizacion(penalizacion) {
  if (!penalizacion) return 'Los fallos no restan.';
  const frac = { 0.2: '1/5', 0.25: '1/4', 0.3333: '1/3' }[penalizacion] ?? String(penalizacion).replace('.', ',');
  return `Cada fallo resta ${frac} de acierto; las preguntas en blanco no restan.`;
}

export function validarAjustes({ numero, minutos, temas }, banco) {
  const errores = [];
  const disponibles = banco.preguntas.filter(p => !temas || temas.length === 0 || temas.includes(p.tema)).length;
  if (!Number.isInteger(numero) || numero < LIMITES.minPreguntas || numero > LIMITES.maxPreguntas) {
    errores.push(`El número de preguntas debe estar entre ${LIMITES.minPreguntas} y ${LIMITES.maxPreguntas}.`);
  } else if (numero > disponibles) {
    errores.push(`Con esos temas solo hay ${disponibles} preguntas.`);
  }
  if (!Number.isInteger(minutos) || minutos < LIMITES.minMinutos || minutos > LIMITES.maxMinutos) {
    errores.push(`El tiempo debe estar entre ${LIMITES.minMinutos} y ${LIMITES.maxMinutos} minutos.`);
  }
  return errores;
}

export function falladas(resultado) {
  return resultado.detalle.filter(d => d.estado !== 'acierto').map(d => d.id);
}

export function temasFlojos(resultado) {
  return porTemas(resultado).filter(t => t.aciertos / t.total < 0.5).map(t => t.tema);
}

export function codificarFalladas(ids) { return `#f=${[...new Set(ids)].join(',')}`; }

export function leerFalladas(hash, banco) {
  const m = String(hash).replace(/^#/, '').match(/(?:^|&)f=([^&]*)/);
  if (!m) return [];
  const ids = new Set(m[1].split(',').filter(Boolean));
  return banco.preguntas.filter(p => ids.has(p.id));
}

// Crea un simulacro: preguntas al azar (sin repetir), equilibradas entre temas cuando se puede.
export function crearSimulacro(banco, { numero, minutos, temas = [], opciones = 4, semilla, rnd = semilla === undefined ? Math.random : azar(semilla), ahora = Date.now() }) {
  const errores = validarAjustes({ numero, minutos, temas }, banco);
  if (errores.length) throw new Error(errores.join(' '));
  const candidatas = banco.preguntas.filter(p => temas.length === 0 || temas.includes(p.tema));
  // Reparto por turnos: primero entre bancos (en los combinados «a+b» el tema lleva el prefijo «a:»), y dentro de
  // cada banco entre sus temas, para que no salgan diez preguntas del mismo tema ni casi todas de una materia.
  const porBanco = new Map();
  for (const p of barajar(candidatas, rnd)) {
    const b = String(p.tema).includes(':') ? String(p.tema).split(':')[0] : '';
    if (!porBanco.has(b)) porBanco.set(b, new Map());
    const temasB = porBanco.get(b);
    if (!temasB.has(p.tema)) temasB.set(p.tema, []);
    temasB.get(p.tema).push(p);
  }
  // Unidades: una pregunta suelta o una lectura entera (todas las preguntas que comparten contexto, juntas).
  const unidadDe = new Map();
  for (const p of candidatas) if (p.contexto) {
    if (!unidadDe.has(p.contexto)) unidadDe.set(p.contexto, []);
    unidadDe.get(p.contexto).push(p);
  }
  const seleccion = [];
  const elegidos = new Set();
  const quedan = () => numero - seleccion.length;
  const tomar = lista => { for (const p of lista) if (!elegidos.has(p.id) && quedan() > 0) { seleccion.push(p); elegidos.add(p.id); } };
  const unidad = p => (p.contexto ? unidadDe.get(p.contexto) : [p]).filter(q => !elegidos.has(q.id));
  // Cada banco es un turnero de sus temas: siguiente() da la próxima unidad que cabe entera, rotando de tema.
  const turneros = barajar([...porBanco.values()], rnd).map(temasB => {
    const colas = barajar([...temasB.values()], rnd);
    let k = 0;
    return () => {
      for (let n = 0; n < colas.length; n++, k++) {
        const cola = colas[k % colas.length];
        while (cola.length && elegidos.has(cola[0].id)) cola.shift();
        const i = cola.findIndex(p => unidad(p).length <= quedan());
        if (i >= 0) { k++; return unidad(cola.splice(i, 1)[0]); }
      }
      return null;
    };
  });
  while (quedan() > 0) {
    let algo = false;
    for (const siguiente of turneros) {
      if (quedan() <= 0) break;
      const u = siguiente();
      if (u?.length) { tomar(u); algo = true; }
    }
    // Si ya no cabe ninguna lectura entera, se completa con las primeras preguntas de una lectura.
    if (!algo) tomar(barajar(candidatas.filter(p => !elegidos.has(p.id)), rnd).flatMap(p => unidad(p)).slice(0, quedan()));
  }
  return {
    materia: banco.id,
    preguntas: agruparContextos(barajar(seleccion, rnd)).map(p => barajarOpciones(reducirOpciones(p, opciones, rnd), rnd)),
    inicio: ahora,
    fin: ahora + minutos * 60_000,
  };
}

// Diagnóstico breve: prioriza preguntas independientes para que una lectura compartida no monopolice el test.
export function testNivel(banco, { porTema = 2, rnd = Math.random } = {}) {
  const seleccion = [];
  const ids = new Set();
  for (const tema of banco.temas) {
    if (seleccion.length >= LIMITES.maxPreguntas) break;
    const candidatas = banco.preguntas.filter(p => p.tema === tema.id);
    const independientes = barajar(candidatas.filter(p => !p.contexto), rnd);
    const contextuales = barajar(candidatas.filter(p => p.contexto), rnd);
    const cupo = Math.max(0, porTema);
    const elegibles = [...independientes.slice(0, cupo), ...contextuales.slice(0, Math.max(0, cupo - independientes.length))];
    for (const p of elegibles) {
      if (seleccion.length >= LIMITES.maxPreguntas) break;
      if (!ids.has(p.id)) { ids.add(p.id); seleccion.push(p); }
    }
  }
  return agruparContextos(barajar(seleccion, rnd)).map(p => barajarOpciones(p, rnd));
}

// Junta las preguntas que comparten lectura (contexto) para mostrar el texto una sola vez.
export function agruparContextos(preguntas) {
  const grupos = new Map();
  for (const p of preguntas) {
    const clave = p.contexto || `\u0000${p.id}`;
    if (!grupos.has(clave)) grupos.set(clave, []);
    grupos.get(clave).push(p);
  }
  return [...grupos.values()].flat();
}

// Clave imprimible de cada pregunta, derivada del orden y las opciones del simulacro.
export function hojaRespuestas(simulacro) {
  return simulacro.preguntas.map((p, i) => ({
    numero: i + 1,
    letras: p.opciones.map((_, j) => 'abcd'[j]),
    correcta: 'abcd'[p.correcta],
  }));
}

export function segundosRestantes(simulacro, ahora = Date.now()) {
  return Math.max(0, Math.ceil((simulacro.fin - ahora) / 1000));
}

export function ritmo({ total, respondidas, segundosTotales, segundosRestantes }) {
  if (!total || !segundosTotales) return { porPregunta: 0, deberias: 0, estado: 'sin-datos' };
  const porPregunta = Math.round(segundosTotales / total);
  const transcurridos = Math.max(0, segundosTotales - segundosRestantes);
  const deberias = Math.floor(transcurridos / (segundosTotales / total));
  const estado = transcurridos >= 120 && respondidas < deberias - 1 ? 'detras' : 'bien';
  return { porPregunta, deberias, estado };
}

export function tiempoUsado(simulacro, ahora = Date.now()) {
  return Math.max(0, Math.floor((Math.min(ahora, simulacro.fin) - simulacro.inicio) / 1000));
}

export function formatoTiempo(segundos) {
  const s = Math.max(0, Math.floor(segundos));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = String(s % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${r}` : `${m}:${r}`;
}

// respuestas: array con el índice elegido o null (en blanco). penalizacion: fracción que resta cada fallo (0 = no resta).
export function corregir(simulacro, respuestas, { penalizacion = 0 } = {}) {
  let aciertos = 0, fallos = 0, blanco = 0;
  const detalle = simulacro.preguntas.map((p, i) => {
    const r = respuestas[i];
    const estado = r === null || r === undefined ? 'blanco' : r === p.correcta ? 'acierto' : 'fallo';
    if (estado === 'acierto') aciertos++; else if (estado === 'fallo') fallos++; else blanco++;
    return { id: p.id, tema: p.tema, elegida: r ?? null, correcta: p.correcta, estado };
  });
  const total = simulacro.preguntas.length;
  const factor = penalizacion === 0.3333 ? 1 / 3 : penalizacion; // el desplegable guarda 1/3 redondeado
  const bruta = Math.max(0, aciertos - fallos * factor);
  const nota = total ? Math.round((bruta / total) * 1000) / 100 : 0;
  return { total, aciertos, fallos, blanco, nota, aprobado: nota >= 5, detalle };
}

// Resumen por tema: aciertos y total, para saber qué repasar.
export function porTemas(resultado) {
  const temas = new Map();
  for (const d of resultado.detalle) {
    const t = temas.get(d.tema) ?? { tema: d.tema, aciertos: 0, total: 0 };
    t.total++;
    if (d.estado === 'acierto') t.aciertos++;
    temas.set(d.tema, t);
  }
  return [...temas.values()].sort((a, b) => a.aciertos / a.total - b.aciertos / b.total);
}

export function nivelPorTema(resultado) {
  const orden = { empieza: 0, medias: 1, domina: 2 };
  return porTemas(resultado).map(t => ({ ...t, nivel: t.aciertos === t.total ? 'domina' : t.aciertos / t.total >= 0.5 ? 'medias' : 'empieza' }))
    .sort((a, b) => orden[a.nivel] - orden[b.nivel]);
}
