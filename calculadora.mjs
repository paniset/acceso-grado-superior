const coma = n => String(Number(n.toFixed(2))).replace('.', ',');
const redondearCentesima = n => Math.round((n + Number.EPSILON) * 100) / 100;
const notaDeMateria = (m, n, redondeo) => {
  if (n == null || !Number.isFinite(Number(n))) return null;
  const v = Number(n);
  return redondeo === 'entero' ? Math.floor(v + 0.5) : v;
};

export function calcular(regla, notas, { exacto = false } = {}) {
  // exacto: sin redondear medias a la centésima (para no dar por buena una nota que solo aprueba por redondeo).
  const redondear = exacto ? n => n : redondearCentesima;
  const partes = (regla?.partes || []).map((p, i) => {
    const entradas = (p.materias || []).map((m, j) => notaDeMateria(m, notas?.[i]?.[j], regla.redondeo));
    const completa = entradas.every(n => n !== null);
    const pesos = (p.materias || []).map(m => Number(m.peso) || 1);
    const media = completa ? redondear(entradas.reduce((s, n, j) => s + n * pesos[j], 0) / pesos.reduce((a, b) => a + b, 0)) : null;
    const cumpleMateria = p.minimo_materia == null || entradas.every(n => n === null || n >= p.minimo_materia);
    const cumple = completa && cumpleMateria && (p.minimo_parte == null || media >= p.minimo_parte);
    let motivo = '';
    if (!completa) motivo = 'Completa todas las notas.';
    else if (!cumpleMateria) {
      const j = entradas.findIndex(n => n < p.minimo_materia);
      motivo = `${p.nombre}: ${coma(entradas[j])} en ${p.materias[j].nombre} y hace falta al menos ${coma(p.minimo_materia)} en cada materia.`;
    } else if (p.minimo_parte != null && media < p.minimo_parte) motivo = `${p.nombre}: ${coma(media)} de media y hace falta al menos ${coma(p.minimo_parte)}.`;
    return { nombre: p.nombre, nota: media, cumple, motivo, tipo: p.tipo, entradas };
  });
  const obligatorias = partes.filter(p => !p.tipo);
  const completo = obligatorias.every(p => p.entradas.every(n => n !== null));
  const motivos = partes.filter(p => p.motivo && p.motivo !== 'Completa todas las notas.').map(p => p.motivo);
  if (!completo) motivos.unshift('Completa todas las notas obligatorias.');
  const cumplen = obligatorias.every(p => p.cumple);
  let elementos = obligatorias.map(p => p.nota).filter(n => n !== null);
  let subeDesde = null;
  for (const [i, p] of (regla?.partes || []).entries()) if (p.tipo === 'opcional_media') {
    const ns = partes[i].entradas;
    if (ns.every(n => n !== null && (p.minimo_materia == null || n >= p.minimo_materia))) { elementos.push(...ns); subeDesde = p.sube_a_5_desde ?? subeDesde; }
  }
  let final = completo && cumplen && elementos.length ? redondear(elementos.reduce((a, b) => a + b, 0) / elementos.length) : null;
  // Murcia: de 4,60 a 4,99 se pone 5, solo cuando la media incluye las competencias voluntarias.
  if (final !== null && subeDesde != null && final >= subeDesde && final < 5) final = 5;
  const aprueba = final !== null && cumplen && final >= 5;
  let notaAdmision = null;
  for (const [i, p] of (regla?.partes || []).entries()) if (p.tipo === 'admision') {
    const n = partes[i].nota;
    if (aprueba && n !== null && n >= p.umbral) notaAdmision = redondear(final + Number(p.factor || 0) * n);
  }
  return { completo, aprueba, final, notaAdmision, partes: partes.map(({ nombre, nota, cumple, motivo }) => ({ nombre, nota, cumple, motivo })), motivos };
}

export function necesaria(regla, notas, i, j) {
  const partes = regla?.partes || [];
  if (!partes[i] || partes[i].tipo || !partes[i].materias?.[j]) return null;
  const copia = partes.map((p, a) => p.materias.map((_, b) => notas?.[a]?.[b] ?? null));
  for (let a = 0; a < partes.length; a++) if (!partes[a].tipo) for (let b = 0; b < copia[a].length; b++) if ((a !== i || b !== j) && copia[a][b] === null) return null;
  // Búsqueda al céntimo con las reglas de la calculadora (mínimos, pesos, redondeo por examen y opcionales),
  // pero sin redondear medias: la nota que se recomienda aprueba sin depender de que 4,995 suba a 5,00.
  for (let cents = 0; cents <= 1000; cents++) {
    copia[i][j] = cents / 100;
    if (calcular(regla, copia, { exacto: true }).aprueba) return cents / 100;
  }
  return null;
}
