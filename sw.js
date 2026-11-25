const CACHE = 'ags-' + "21ecacf892de0537";
const URL_DE = r => new URL(r, self.registration.scope).href;
const TODAS = ["", "404.html", "app-calculadora.mjs", "app-desarrollo.mjs", "app-plan.mjs", "app-simulacro.mjs", "calculadora-nota-prueba-acceso-grado-superior", "calculadora.mjs", "continuar-validacion.mjs", "continuar.mjs", "desarrollo.mjs", "ejercicios-desarrollo-ingles-acceso-grado-superior", "ejercicios-desarrollo-lengua-castellana-acceso-grado-superior", "ejercicios-desarrollo-matematicas-acceso-grado-superior", "error-tipo.mjs", "estilo.css", "examenes-oficiales-prueba-acceso-grado-superior", "examenes-resueltos-matematicas-grado-superior-madrid", "favicon.svg", "fechas-prueba-acceso-grado-superior-2027", "fuentes-y-metodo", "nota-hoy.mjs", "offline.mjs", "plan-de-estudio-prueba-acceso-grado-superior", "plan-ui.mjs", "plan.mjs", "preguntas-aleman.mjs", "preguntas-biologia.mjs", "preguntas-catalan.mjs", "preguntas-ciencias-tierra.mjs", "preguntas-dibujo-tecnico.mjs", "preguntas-digitalizacion.mjs", "preguntas-economia.mjs", "preguntas-educacion-fisica.mjs", "preguntas-euskera.mjs", "preguntas-filosofia.mjs", "preguntas-fisica.mjs", "preguntas-frances.mjs", "preguntas-gallego.mjs", "preguntas-geografia.mjs", "preguntas-historia-arte.mjs", "preguntas-historia-contemporanea.mjs", "preguntas-historia-espana.mjs", "preguntas-ingles.mjs", "preguntas-lengua.mjs", "preguntas-matematicas.mjs", "preguntas-psicologia.mjs", "preguntas-quimica.mjs", "preguntas-tecnologia.mjs", "progreso.mjs", "prueba-acceso-grado-superior-andalucia", "prueba-acceso-grado-superior-aragon", "prueba-acceso-grado-superior-asturias", "prueba-acceso-grado-superior-baleares", "prueba-acceso-grado-superior-canarias", "prueba-acceso-grado-superior-cantabria", "prueba-acceso-grado-superior-castilla-la-mancha", "prueba-acceso-grado-superior-castilla-y-leon", "prueba-acceso-grado-superior-cataluna", "prueba-acceso-grado-superior-ceuta", "prueba-acceso-grado-superior-comunitat-valenciana", "prueba-acceso-grado-superior-extremadura", "prueba-acceso-grado-superior-galicia", "prueba-acceso-grado-superior-la-rioja", "prueba-acceso-grado-superior-madrid", "prueba-acceso-grado-superior-melilla", "prueba-acceso-grado-superior-murcia", "prueba-acceso-grado-superior-navarra", "prueba-acceso-grado-superior-pais-vasco", "repaso.mjs", "rubrica.mjs", "simulacro-prueba-acceso-grado-superior", "simulacro.mjs", "sitemap.xml", "temario-aleman-acceso-grado-superior", "temario-biologia-acceso-grado-superior", "temario-catalan-acceso-grado-superior", "temario-dibujo-tecnico-acceso-grado-superior", "temario-digitalizacion-acceso-grado-superior", "temario-economia-de-la-empresa-acceso-grado-superior", "temario-educacion-fisica-acceso-grado-superior", "temario-euskera-acceso-grado-superior", "temario-filosofia-acceso-grado-superior", "temario-fisica-acceso-grado-superior", "temario-frances-acceso-grado-superior", "temario-gallego-acceso-grado-superior", "temario-geografia-acceso-grado-superior", "temario-geologia-y-ciencias-ambientales-acceso-grado-superior", "temario-historia-de-espana-acceso-grado-superior", "temario-historia-del-arte-acceso-grado-superior", "temario-historia-del-mundo-contemporaneo-acceso-grado-superior", "temario-ingles-acceso-grado-superior", "temario-lengua-castellana-acceso-grado-superior", "temario-matematicas-acceso-grado-superior", "temario-psicologia-acceso-grado-superior", "temario-quimica-acceso-grado-superior", "temario-tecnologia-e-ingenieria-acceso-grado-superior", "test-aleman-acceso-grado-superior", "test-biologia-acceso-grado-superior", "test-catalan-acceso-grado-superior", "test-dibujo-tecnico-acceso-grado-superior", "test-digitalizacion-acceso-grado-superior", "test-economia-de-la-empresa-acceso-grado-superior", "test-educacion-fisica-acceso-grado-superior", "test-euskera-acceso-grado-superior", "test-filosofia-acceso-grado-superior", "test-fisica-acceso-grado-superior", "test-frances-acceso-grado-superior", "test-gallego-acceso-grado-superior", "test-geografia-acceso-grado-superior", "test-geologia-y-ciencias-ambientales-acceso-grado-superior", "test-historia-de-espana-acceso-grado-superior", "test-historia-del-arte-acceso-grado-superior", "test-historia-del-mundo-contemporaneo-acceso-grado-superior", "test-ingles-acceso-grado-superior", "test-lengua-castellana-acceso-grado-superior", "test-matematicas-acceso-grado-superior", "test-psicologia-acceso-grado-superior", "test-quimica-acceso-grado-superior", "test-tecnologia-e-ingenieria-acceso-grado-superior"].map(URL_DE);
const ESQUELETO = ["", "404.html", "estilo.css", "favicon.svg", "simulacro-prueba-acceso-grado-superior", "simulacro.mjs", "app-simulacro.mjs", "rubrica.mjs", "app-desarrollo.mjs", "repaso.mjs", "progreso.mjs", "desarrollo.mjs", "calculadora.mjs", "app-calculadora.mjs", "plan.mjs", "plan-ui.mjs", "app-plan.mjs", "continuar.mjs", "continuar-validacion.mjs", "offline.mjs", "error-tipo.mjs", "nota-hoy.mjs"].map(URL_DE);
// La versión nueva entra en cuanto se instala; si la anterior tenía la web entera guardada, la vuelve a guardar.
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ESQUELETO)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil((async () => {
  let entera = false;
  for (const k of await caches.keys()) {
    if (!k.startsWith('ags-') || k === CACHE) continue;
    if ((await (await caches.open(k)).keys()).length >= TODAS.length) entera = true;
    await caches.delete(k);
  }
  await self.clients.claim();
  if (entera) { const c = await caches.open(CACHE); for (const u of TODAS) { try { if (!await c.match(u)) await c.add(u); } catch { /* se reintenta al navegar */ } } }
})()));
self.addEventListener('message', e => {
  if (e.data?.tipo !== 'guardar-todo') return;
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    try {
      for (let i = 0; i < TODAS.length; i++) {
        if (!await c.match(TODAS[i])) await c.add(TODAS[i]);
        if (i % 5 === 4 || i === TODAS.length - 1) e.source.postMessage({ tipo: 'progreso', actual: i + 1, total: TODAS.length });
      }
      e.source.postMessage({ tipo: 'completo' });
    } catch { e.source.postMessage({ tipo: 'error' }); }
  })());
});
const guardar = async (req, r) => { if (r.ok && r.type === 'basic') (await caches.open(CACHE)).put(req, r.clone()); return r; };
self.addEventListener('fetch', e => {
  const req = e.request;
  const u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => guardar(req, r)).catch(async () => {
      const limpia = u.origin + u.pathname;
      return await caches.match(limpia) || await caches.match(limpia.replace(/[.]html$/, '')) || await caches.match(URL_DE('404.html'));
    }));
  } else {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(x => x || fetch(req).then(r => guardar(req, r))));
  }
});
