// Generado por generar.py desde datos/materias. No editar a mano.
export default {
"id": "fisica",
"nombre": "Física",
"idioma": "es",
"idiomaExplicacion": "es",
"temas": [
{
"id": "fi1",
"titulo": "Cinemática: MRU, MRUA, caída libre, tiro y movimiento circular"
},
{
"id": "fi2",
"titulo": "Dinámica: leyes de Newton, rozamiento y plano inclinado"
},
{
"id": "fi3",
"titulo": "Trabajo, energía y potencia: conservación de la energía"
},
{
"id": "fi4",
"titulo": "Gravitación: ley de Newton, campo gravitatorio y órbitas"
},
{
"id": "fi5",
"titulo": "Electrostática y circuitos de corriente continua"
},
{
"id": "fi6",
"titulo": "Magnetismo e inducción electromagnética"
},
{
"id": "fi7",
"titulo": "Ondas y sonido"
},
{
"id": "fi8",
"titulo": "Óptica geométrica básica: reflexión, refracción, espejos y lentes"
}
],
"preguntas": [
{
"id": "fis-001",
"tema": "fi1",
"nivel": 1,
"enunciado": "Un coche circula en MRU a 20 m/s. ¿Qué distancia recorre en 15 s?",
"opciones": [
"300 m",
"35 m",
"150 m",
"1,33 m"
],
"correcta": 0,
"explicacion": "En MRU, x = v·t = 20 m/s · 15 s = 300 m. 150 m resulta de dividir por 2 sin motivo, y 1,33 m de dividir 20 entre 15, que no tiene sentido físico aquí."
},
{
"id": "fis-002",
"tema": "fi1",
"nivel": 1,
"enunciado": "Un cuerpo parte del reposo con aceleración constante de 3 m/s². ¿Qué velocidad tiene a los 8 s?",
"opciones": [
"11 m/s",
"24 m/s",
"12 m/s",
"2,67 m/s"
],
"correcta": 1,
"explicacion": "v = v₀ + a·t = 0 + 3 · 8 = 24 m/s. Sumar 3 + 8 = 11 mezcla magnitudes distintas, y 2,67 m/s sale de dividir 8 entre 3, operación que no corresponde a ninguna fórmula del MRUA."
},
{
"id": "fis-003",
"tema": "fi1",
"nivel": 2,
"enunciado": "Un tren que va a 20 m/s frena con aceleración constante de −4 m/s² hasta pararse. ¿Qué distancia recorre mientras frena?",
"opciones": [
"100 m",
"25 m",
"50 m",
"80 m"
],
"correcta": 2,
"explicacion": "De v² = v₀² + 2·a·Δx: 0 = 400 − 8·Δx, luego Δx = 50 m. 100 m sale de usar v²/a sin el factor 2, y 80 m de multiplicar 20 por 4."
},
{
"id": "fis-004",
"tema": "fi1",
"nivel": 2,
"enunciado": "Se deja caer una piedra desde el reposo (g = 10 m/s²). ¿Qué altura ha descendido a los 3 s?",
"opciones": [
"30 m",
"90 m",
"15 m",
"45 m"
],
"correcta": 3,
"explicacion": "h = ½·g·t² = ½ · 10 · 3² = 45 m. 30 m resulta de g·t sin elevar el tiempo al cuadrado (es la velocidad), y 90 m de olvidar el factor ½."
},
{
"id": "fis-005",
"tema": "fi1",
"nivel": 2,
"enunciado": "Se lanza una bola horizontalmente a 15 m/s desde una azotea de 80 m de altura (g = 10 m/s², sin rozamiento del aire). ¿A qué distancia horizontal del pie del edificio cae?",
"opciones": [
"30 m",
"60 m",
"120 m",
"240 m"
],
"correcta": 1,
"explicacion": "Tiempo de caída: 80 = ½·10·t², t = 4 s. Alcance = v₀·t = 15 · 4 = 60 m. 30 m sale de usar 2 s, y 120 m o 240 m de errores al calcular el tiempo de caída."
},
{
"id": "fis-006",
"tema": "fi1",
"nivel": 1,
"enunciado": "Una rueda gira a 120 rpm. ¿Cuál es su velocidad angular?",
"opciones": [
"2π rad/s",
"8π rad/s",
"4π rad/s",
"240π rad/s"
],
"correcta": 2,
"explicacion": "120 rpm = 2 vueltas por segundo, es decir, f = 2 Hz y ω = 2π·f = 4π rad/s. 2π rad/s correspondería a 60 rpm, y 8π rad/s a 240 rpm."
},
{
"id": "fis-007",
"tema": "fi1",
"nivel": 3,
"enunciado": "Un objeto describe una circunferencia de radio 0,5 m con velocidad constante de 10 m/s. ¿Cuánto vale su aceleración centrípeta?",
"opciones": [
"20 m/s²",
"100 m/s²",
"5 m/s²",
"200 m/s²"
],
"correcta": 3,
"explicacion": "aₙ = v²/r = 100/0,5 = 200 m/s². 100 m/s² se obtiene al olvidar dividir entre 0,5, y 20 m/s² sale de v/r, cociente que no tiene unidades de aceleración."
},
{
"id": "fis-008",
"tema": "fi1",
"nivel": 3,
"enunciado": "Un proyectil se lanza desde el suelo con velocidad de 20 m/s y un ángulo de 30° sobre la horizontal (g = 10 m/s²). ¿Cuánto tarda en volver al suelo?",
"opciones": [
"2 s",
"4 s",
"1 s",
"3,5 s"
],
"correcta": 0,
"explicacion": "La componente vertical es v_y = 20·sen 30° = 10 m/s. Tiempo de vuelo = 2·v_y/g = 2 s. 4 s resulta de usar toda la velocidad (20 m/s), y 3,5 s de aplicar el coseno en lugar del seno."
},
{
"id": "fis-009",
"tema": "fi2",
"nivel": 1,
"enunciado": "Sobre un cuerpo de 5 kg actúa una fuerza neta que le produce una aceleración de 4 m/s². ¿Cuánto vale la fuerza neta?",
"opciones": [
"1,25 N",
"9 N",
"20 N",
"25 N"
],
"correcta": 2,
"explicacion": "Según la segunda ley, ΣF = m·a = 5 · 4 = 20 N. 1,25 N sale de dividir 5 entre 4 y 9 N de sumar ambos datos; ninguna operación corresponde a la segunda ley."
},
{
"id": "fis-010",
"tema": "fi2",
"nivel": 1,
"enunciado": "Un libro descansa sobre una mesa. La Tierra atrae al libro con su peso. ¿Cuál es la fuerza de reacción a ese peso según la tercera ley de Newton?",
"opciones": [
"La fuerza normal que ejerce la mesa sobre el libro",
"La fuerza con que el libro presiona sobre la mesa",
"La fuerza de rozamiento entre libro y mesa",
"La fuerza con que el libro atrae a la Tierra"
],
"correcta": 3,
"explicacion": "La pareja acción-reacción actúa sobre cuerpos distintos y es de la misma naturaleza: Tierra atrae al libro / libro atrae a la Tierra. La normal solo equilibra al peso porque el libro está en reposo, pero no es su reacción."
},
{
"id": "fis-011",
"tema": "fi2",
"nivel": 2,
"enunciado": "Un bloque de 10 kg se desliza sobre un suelo horizontal con coeficiente de rozamiento dinámico μ = 0,3 (g = 10 m/s²). ¿Cuánto vale la fuerza de rozamiento?",
"opciones": [
"30 N",
"3 N",
"33 N",
"300 N"
],
"correcta": 0,
"explicacion": "En horizontal N = m·g = 100 N y Fr = μ·N = 0,3 · 100 = 30 N. 300 N se obtiene al olvidar multiplicar por μ, y 3 N al multiplicar μ por 10 en lugar de por la normal."
},
{
"id": "fis-012",
"tema": "fi2",
"nivel": 2,
"enunciado": "Un bloque desliza sin rozamiento por un plano inclinado 30° respecto de la horizontal (g = 10 m/s²). ¿Cuál es su aceleración?",
"opciones": [
"10 m/s²",
"5 m/s²",
"8,7 m/s²",
"2,5 m/s²"
],
"correcta": 1,
"explicacion": "a = g·sen 30° = 10 · 0,5 = 5 m/s². 10 m/s² sería la caída libre, y 8,7 m/s² resulta de usar el coseno en lugar del seno."
},
{
"id": "fis-013",
"tema": "fi2",
"nivel": 2,
"enunciado": "Una persona de 70 kg está sobre una báscula dentro de un ascensor que sube acelerando a 2 m/s² (g = 10 m/s²). ¿Cuántos newtons marca la báscula?",
"opciones": [
"700 N",
"560 N",
"140 N",
"840 N"
],
"correcta": 3,
"explicacion": "La báscula mide la normal: N − m·g = m·a, luego N = m·(g + a) = 70 · 12 = 840 N. 700 N es el peso en reposo, y 560 N resultaría si el ascensor bajara acelerando."
},
{
"id": "fis-014",
"tema": "fi2",
"nivel": 3,
"enunciado": "Sobre una caja de 2 kg que está en un suelo horizontal se aplica una fuerza horizontal de 20 N y hay una fuerza de rozamiento de 6 N. ¿Cuál es su aceleración?",
"opciones": [
"7 m/s²",
"10 m/s²",
"13 m/s²",
"3 m/s²"
],
"correcta": 0,
"explicacion": "La fuerza neta es 20 − 6 = 14 N y a = 14/2 = 7 m/s². 10 m/s² ignora el rozamiento, y 13 m/s² suma el rozamiento en lugar de restarlo."
},
{
"id": "fis-015",
"tema": "fi2",
"nivel": 3,
"enunciado": "Dos masas de 3 kg y 1 kg cuelgan de los extremos de una cuerda ideal que pasa por una polea sin rozamiento (máquina de Atwood, g = 10 m/s²). ¿Cuál es la aceleración del sistema?",
"opciones": [
"10 m/s²",
"5 m/s²",
"2,5 m/s²",
"7,5 m/s²"
],
"correcta": 1,
"explicacion": "a = (m₁ − m₂)·g/(m₁ + m₂) = 2 · 10 / 4 = 5 m/s². 10 m/s² sería la caída libre, y 7,5 m/s² sale de dividir 30 entre 4 con el peso de una sola masa."
},
{
"id": "fis-016",
"tema": "fi3",
"nivel": 1,
"enunciado": "Una fuerza constante de 50 N empuja un carrito en la misma dirección y sentido del movimiento a lo largo de 4 m. ¿Qué trabajo realiza?",
"opciones": [
"12,5 J",
"54 J",
"200 J",
"400 J"
],
"correcta": 2,
"explicacion": "W = F·Δx·cos 0° = 50 · 4 = 200 J. 12,5 J resulta de dividir 50 entre 4, y 54 J de sumar los datos en lugar de multiplicarlos."
},
{
"id": "fis-017",
"tema": "fi3",
"nivel": 1,
"enunciado": "¿Cuál es la energía cinética de un cuerpo de 2 kg que se mueve a 6 m/s?",
"opciones": [
"36 J",
"12 J",
"72 J",
"18 J"
],
"correcta": 0,
"explicacion": "Ec = ½·m·v² = ½ · 2 · 36 = 36 J. 12 J es m·v, 72 J olvida el factor ½ y 18 J sale de ½·m·v³/… sin base: es el producto 3·6, que no corresponde a ninguna energía."
},
{
"id": "fis-018",
"tema": "fi3",
"nivel": 2,
"enunciado": "Una fuerza de 100 N forma un ángulo de 60° con el desplazamiento horizontal de 10 m que provoca. ¿Qué trabajo realiza?",
"opciones": [
"1 000 J",
"500 J",
"866 J",
"100 J"
],
"correcta": 1,
"explicacion": "W = F·Δx·cos 60° = 100 · 10 · 0,5 = 500 J. 1 000 J ignora el coseno y 866 J usa el seno en lugar del coseno."
},
{
"id": "fis-019",
"tema": "fi3",
"nivel": 2,
"enunciado": "Una grúa eleva una carga de 200 kg a 15 m de altura en 30 s a velocidad constante (g = 10 m/s²). ¿Qué potencia útil desarrolla?",
"opciones": [
"100 W",
"3 000 W",
"1 000 W",
"450 W"
],
"correcta": 2,
"explicacion": "Trabajo = m·g·h = 200 · 10 · 15 = 30 000 J; P = W/t = 30 000/30 = 1 000 W. 100 W sale de un factor 10 erróneo y 450 W de multiplicar 15 por 30 sin usar la masa."
},
{
"id": "fis-020",
"tema": "fi3",
"nivel": 2,
"enunciado": "Un objeto se deja caer desde 20 m de altura sin rozamiento (g = 10 m/s²). ¿Con qué velocidad llega al suelo?",
"opciones": [
"10 m/s",
"14 m/s",
"40 m/s",
"20 m/s"
],
"correcta": 3,
"explicacion": "Por conservación de la energía, m·g·h = ½·m·v², luego v = √(2·g·h) = √400 = 20 m/s. 40 m/s duplica el resultado correcto, y 14 m/s sale de calcular √(g·h) = √200 sin el factor 2."
},
{
"id": "fis-021",
"tema": "fi3",
"nivel": 3,
"enunciado": "Un muelle de constante k = 200 N/m se comprime 0,1 m. ¿Qué energía potencial elástica almacena?",
"opciones": [
"20 J",
"1 J",
"2 J",
"0,1 J"
],
"correcta": 1,
"explicacion": "Ep = ½·k·x² = ½ · 200 · 0,01 = 1 J. 20 J resulta de k·x (que es una fuerza), y 2 J de omitir el factor ½."
},
{
"id": "fis-022",
"tema": "fi3",
"nivel": 3,
"enunciado": "Un bloque de 4 kg lleva 5 m/s sobre una superficie horizontal rugosa y se detiene tras recorrer 5 m. ¿Cuánto vale la fuerza de rozamiento, supuesta constante?",
"opciones": [
"20 N",
"5 N",
"10 N",
"50 N"
],
"correcta": 2,
"explicacion": "La energía cinética inicial (½·4·25 = 50 J) se disipa por el trabajo del rozamiento: Fr·5 m = 50 J, así que Fr = 10 N. 50 N es la energía, no la fuerza; 20 N sale de usar m·v sin dividir entre el recorrido."
},
{
"id": "fis-023",
"tema": "fi4",
"nivel": 1,
"enunciado": "Si se duplica la distancia entre dos masas, ¿cómo cambia la fuerza gravitatoria entre ellas?",
"opciones": [
"Se reduce a la mitad",
"Se duplica",
"Se cuadruplica",
"Se reduce a la cuarta parte"
],
"correcta": 3,
"explicacion": "F = G·M·m/r², así que con 2r la fuerza es F/4. Reducirse a la mitad correspondería a una dependencia lineal en 1/r, que no es la de la ley de Newton."
},
{
"id": "fis-024",
"tema": "fi4",
"nivel": 1,
"enunciado": "En la Luna la gravedad vale 1,6 m/s². ¿Cuánto pesa allí una persona de 60 kg?",
"opciones": [
"96 N",
"600 N",
"37,5 N",
"960 N"
],
"correcta": 0,
"explicacion": "P = m·g = 60 · 1,6 = 96 N. 600 N sería con g = 10 m/s² (la Tierra), y 37,5 N sale de dividir 60 entre 1,6, que no es una fuerza."
},
{
"id": "fis-025",
"tema": "fi4",
"nivel": 2,
"enunciado": "Un planeta orbita a 4 UA del Sol. Según la tercera ley de Kepler (T² = r³ con T en años y r en UA), ¿cuál es su periodo?",
"opciones": [
"4 años",
"16 años",
"8 años",
"64 años"
],
"correcta": 2,
"explicacion": "T² = 4³ = 64, luego T = 8 años. 64 es el valor de T², no de T; 4 años supondría una relación lineal y 16 años una dependencia con r²."
},
{
"id": "fis-026",
"tema": "fi4",
"nivel": 2,
"enunciado": "En la superficie de un planeta de radio R la gravedad es 10 m/s². ¿Cuánto vale a una altura R sobre la superficie, es decir, a 2R del centro?",
"opciones": [
"5 m/s²",
"7,5 m/s²",
"1,25 m/s²",
"2,5 m/s²"
],
"correcta": 3,
"explicacion": "g ∝ 1/r²: a distancia 2R, g = 10/4 = 2,5 m/s². 5 m/s² corresponde a una dependencia 1/r y 1,25 m/s² a dividir entre 2 una vez más sin motivo (10/8)."
},
{
"id": "fis-027",
"tema": "fi4",
"nivel": 2,
"enunciado": "Un satélite describe una órbita circular. Si su radio orbital se cuadruplica, ¿qué ocurre con su velocidad orbital?",
"opciones": [
"Se reduce a la mitad",
"Se reduce a la cuarta parte",
"Se duplica",
"Se reduce a 0,71 veces su valor"
],
"correcta": 0,
"explicacion": "v = √(G·M/r): con 4r, v pasa a √(1/4) = 1/2 del valor inicial. Reducirse a la cuarta parte supondría v ∝ 1/r, y 0,71 corresponde a duplicar el radio, no a cuadruplicarlo."
},
{
"id": "fis-028",
"tema": "fi4",
"nivel": 3,
"enunciado": "Para un satélite en órbita circular alrededor de un planeta, ¿cuánto vale el cociente entre su energía cinética y el valor absoluto de su energía potencial gravitatoria?",
"opciones": [
"1",
"1/2",
"2",
"1/4"
],
"correcta": 1,
"explicacion": "Ec = G·M·m/(2r) y |Ep| = G·M·m/r, luego Ec/|Ep| = 1/2. El cociente 1 haría Em = 0 (órbita parabólica) y 2 invierte los términos."
},
{
"id": "fis-029",
"tema": "fi4",
"nivel": 3,
"enunciado": "Comparada con la velocidad de una órbita circular rasante, la velocidad de escape de un planeta es:",
"opciones": [
"2 veces mayor",
"1/√2 veces la anterior",
"igual a ella",
"√2 veces mayor"
],
"correcta": 3,
"explicacion": "v_orb = √(G·M/R) y v_esc = √(2·G·M/R), por lo que v_esc = √2·v_orb. Si fuesen iguales, un satélite rasante escaparía sin más; y 2 veces mayor exigiría v_esc² = 4·G·M/R."
},
{
"id": "fis-030",
"tema": "fi5",
"nivel": 1,
"enunciado": "Una resistencia de 4 Ω está conectada a una batería de 12 V. ¿Qué intensidad circula por ella?",
"opciones": [
"3 A",
"48 A",
"0,33 A",
"8 A"
],
"correcta": 0,
"explicacion": "Según la ley de Ohm, I = V/R = 12/4 = 3 A. 48 A resulta de multiplicar V por R, y 0,33 A de dividir al revés."
},
{
"id": "fis-031",
"tema": "fi5",
"nivel": 1,
"enunciado": "Se conectan en serie dos resistencias de 6 Ω y 12 Ω. ¿Cuál es la resistencia equivalente?",
"opciones": [
"2 Ω",
"18 Ω",
"9 Ω",
"72 Ω"
],
"correcta": 1,
"explicacion": "En serie las resistencias se suman: 6 + 12 = 18 Ω. 72 Ω es su producto, y 9 Ω la media aritmética; ninguna corresponde a la asociación en serie."
},
{
"id": "fis-032",
"tema": "fi5",
"nivel": 2,
"enunciado": "Se conectan en paralelo dos resistencias de 6 Ω y 12 Ω. ¿Cuál es la resistencia equivalente?",
"opciones": [
"18 Ω",
"9 Ω",
"4 Ω",
"8 Ω"
],
"correcta": 2,
"explicacion": "R = R₁·R₂/(R₁ + R₂) = 72/18 = 4 Ω, menor que la menor de las dos. 18 Ω es la asociación en serie, y 9 Ω la media, que nunca da el equivalente en paralelo."
},
{
"id": "fis-033",
"tema": "fi5",
"nivel": 2,
"enunciado": "Una resistencia de 50 Ω se conecta a 100 V. ¿Qué potencia disipa?",
"opciones": [
"200 W",
"2 W",
"400 W",
"5 000 W"
],
"correcta": 0,
"explicacion": "P = V²/R = 10 000/50 = 200 W. 2 W es la intensidad (2 A), no la potencia; 5 000 W resulta de multiplicar V por R en vez de V² entre R."
},
{
"id": "fis-034",
"tema": "fi5",
"nivel": 2,
"enunciado": "Un radiador eléctrico de 2 000 W funciona durante 3 horas. ¿Cuánta energía consume, expresada en kWh?",
"opciones": [
"0,67 kWh",
"6 kWh",
"18 kWh",
"6 000 kWh"
],
"correcta": 1,
"explicacion": "E = P·t = 2 kW · 3 h = 6 kWh. 0,67 kWh sale de dividir 2 entre 3, y 6 000 kWh de no convertir los vatios a kilovatios."
},
{
"id": "fis-035",
"tema": "fi5",
"nivel": 2,
"enunciado": "Dos cargas puntuales de 2 μC y 3 μC están separadas 0,3 m en el vacío (K = 9·10⁹ N·m²/C²). ¿Qué fuerza se ejercen entre sí?",
"opciones": [
"0,06 N",
"6 N",
"0,6 N",
"0,18 N"
],
"correcta": 2,
"explicacion": "F = K·q₁·q₂/r² = 9·10⁹ · 2·10⁻⁶ · 3·10⁻⁶ / 0,09 = 0,054/0,09 = 0,6 N. 6 N y 0,06 N provienen de errores en las potencias de 10, y 0,18 N de usar r en lugar de r²."
},
{
"id": "fis-036",
"tema": "fi5",
"nivel": 3,
"enunciado": "Una fuente de 12 V alimenta una resistencia de 4 Ω en serie con dos resistencias en paralelo de 6 Ω y 12 Ω. ¿Qué intensidad circula por la resistencia de 12 Ω?",
"opciones": [
"1,5 A",
"1 A",
"0,25 A",
"0,5 A"
],
"correcta": 3,
"explicacion": "El paralelo equivale a 4 Ω, la resistencia total es 8 Ω y I = 12/8 = 1,5 A. La tensión en el paralelo es 1,5 · 4 = 6 V, de modo que por la de 12 Ω pasan 6/12 = 0,5 A. 1,5 A es la corriente total y 1 A la de la resistencia de 6 Ω."
},
{
"id": "fis-037",
"tema": "fi5",
"nivel": 3,
"enunciado": "Una carga de 2 μC colocada en un campo eléctrico experimenta una fuerza de 0,01 N. ¿Cuál es la intensidad del campo en ese punto?",
"opciones": [
"500 N/C",
"5 000 N/C",
"0,02 N/C",
"20 000 N/C"
],
"correcta": 1,
"explicacion": "E = F/q = 0,01/(2·10⁻⁶) = 5 000 N/C. 500 N/C resulta de equivocar una potencia de 10, y 0,02 N/C de multiplicar F por q sin convertir a culombios."
},
{
"id": "fis-038",
"tema": "fi6",
"nivel": 1,
"enunciado": "Una carga de 2·10⁻⁶ C se mueve a 500 m/s perpendicularmente a un campo magnético de 0,4 T. ¿Qué fuerza magnética actúa sobre ella?",
"opciones": [
"4·10⁻³ N",
"1·10⁻³ N",
"4·10⁻⁴ N",
"4·10⁻⁵ N"
],
"correcta": 2,
"explicacion": "F = q·v·B·sen 90° = 2·10⁻⁶ · 500 · 0,4 = 4·10⁻⁴ N. 1·10⁻³ N olvida multiplicar por B, y las otras dos son errores de potencia de 10."
},
{
"id": "fis-039",
"tema": "fi6",
"nivel": 2,
"enunciado": "¿Qué campo magnético crea un hilo recto muy largo con una corriente de 10 A a 0,1 m de distancia? (μ₀ = 4π·10⁻⁷ T·m/A)",
"opciones": [
"2·10⁻⁶ T",
"2·10⁻⁴ T",
"1,26·10⁻⁴ T",
"2·10⁻⁵ T"
],
"correcta": 3,
"explicacion": "B = μ₀·I/(2π·d) = 4π·10⁻⁷ · 10/(2π · 0,1) = 2·10⁻⁵ T. 1,26·10⁻⁴ T sale de olvidar el factor 2π del denominador."
},
{
"id": "fis-040",
"tema": "fi6",
"nivel": 2,
"enunciado": "Por un conductor recto de 0,5 m circulan 4 A y está en un campo magnético uniforme de 0,3 T perpendicular al hilo. ¿Qué fuerza actúa sobre él?",
"opciones": [
"0,6 N",
"0,06 N",
"6 N",
"0,15 N"
],
"correcta": 0,
"explicacion": "F = I·L·B = 4 · 0,5 · 0,3 = 0,6 N. 0,15 N sale de olvidar la intensidad, y 0,06 N o 6 N de equivocar la potencia de 10."
},
{
"id": "fis-041",
"tema": "fi6",
"nivel": 2,
"enunciado": "Una partícula cargada entra perpendicularmente en un campo magnético uniforme y describe una circunferencia. Si se duplica su velocidad manteniendo el campo, ¿qué ocurre con el radio de la trayectoria?",
"opciones": [
"Se mantiene",
"Se reduce a la mitad",
"Se duplica",
"Se cuadruplica"
],
"correcta": 2,
"explicacion": "De q·v·B = m·v²/r se obtiene r = m·v/(q·B), proporcional a v. Cuadruplicarse supondría r ∝ v², y mantenerse sería cierto solo para el periodo, no para el radio."
},
{
"id": "fis-042",
"tema": "fi6",
"nivel": 2,
"enunciado": "El flujo magnético a través de una bobina de una sola espira pasa de 0,2 Wb a 0,8 Wb en 0,3 s. ¿Qué fem media se induce?",
"opciones": [
"0,2 V",
"0,6 V",
"0,5 V",
"2 V"
],
"correcta": 3,
"explicacion": "ε = |ΔΦ|/Δt = 0,6/0,3 = 2 V. 0,6 V es la variación de flujo sin dividir entre el tiempo, y 0,2 V un error de potencia de 10."
},
{
"id": "fis-043",
"tema": "fi6",
"nivel": 2,
"enunciado": "Una espira cuadrada de 0,04 m² está en un campo magnético uniforme de 0,5 T perpendicular a su plano. ¿Cuánto vale el flujo magnético?",
"opciones": [
"0,02 Wb",
"0,2 Wb",
"0,002 Wb",
"0,08 Wb"
],
"correcta": 0,
"explicacion": "Φ = B·S·cos 0° = 0,5 · 0,04 = 0,02 Wb. 0,08 Wb resulta de dividir S entre B; 0,2 y 0,002 son errores de potencias de 10."
},
{
"id": "fis-044",
"tema": "fi6",
"nivel": 2,
"enunciado": "Un transformador ideal tiene 500 espiras en el primario y 50 en el secundario. Si el primario se conecta a 100 V alterna, ¿qué tensión hay en el secundario?",
"opciones": [
"1 000 V",
"10 V",
"50 V",
"5 V"
],
"correcta": 1,
"explicacion": "V₂/V₁ = N₂/N₁ = 50/500 = 0,1, luego V₂ = 10 V. 1 000 V invierte la relación, y 50 V supondría igualar V y N."
},
{
"id": "fis-045",
"tema": "fi6",
"nivel": 3,
"enunciado": "Una bobina de 100 espiras y 0,05 m² de superficie gira a 10 rad/s en un campo uniforme de 0,2 T. ¿Cuánto vale la fem máxima inducida?",
"opciones": [
"1 V",
"100 V",
"31,4 V",
"10 V"
],
"correcta": 3,
"explicacion": "ε_máx = N·B·S·ω = 100 · 0,2 · 0,05 · 10 = 10 V. 31,4 V resulta de multiplicar además por π sin motivo, y 1 V o 100 V de errores en N o ω."
},
{
"id": "fis-046",
"tema": "fi7",
"nivel": 1,
"enunciado": "Una onda sonora tiene una frecuencia de 440 Hz y una longitud de onda de 0,75 m. ¿Con qué velocidad se propaga?",
"opciones": [
"330 m/s",
"587 m/s",
"33 m/s",
"3 300 m/s"
],
"correcta": 0,
"explicacion": "v = λ·f = 0,75 · 440 = 330 m/s. 587 m/s sale de dividir f entre λ, y 33 m/s y 3 300 m/s son errores de potencia de 10."
},
{
"id": "fis-047",
"tema": "fi7",
"nivel": 1,
"enunciado": "Una onda tiene una frecuencia de 50 Hz. ¿Cuál es su periodo?",
"opciones": [
"0,2 s",
"0,02 s",
"5 s",
"0,002 s"
],
"correcta": 1,
"explicacion": "T = 1/f = 1/50 = 0,02 s. 0,2 s y 0,002 s son errores de potencia de 10, y 5 s no corresponde a ninguna operación con 50."
},
{
"id": "fis-048",
"tema": "fi7",
"nivel": 2,
"enunciado": "Una persona emite un grito frente a una pared y oye el eco 1,5 s después. Si el sonido viaja a 340 m/s, ¿a qué distancia está la pared?",
"opciones": [
"510 m",
"340 m",
"255 m",
"226,7 m"
],
"correcta": 2,
"explicacion": "El sonido hace ida y vuelta, así que 2·d = 340 · 1,5 = 510 m y d = 255 m. 510 m es la distancia total recorrida, y 226,7 m resulta de dividir 340 entre 1,5."
},
{
"id": "fis-049",
"tema": "fi7",
"nivel": 2,
"enunciado": "Una fuente sonora produce una intensidad de 10⁻⁶ W/m² en un punto. ¿Cuál es el nivel de intensidad sonora allí? (I₀ = 10⁻¹² W/m²)",
"opciones": [
"60 dB",
"6 dB",
"600 dB",
"12 dB"
],
"correcta": 0,
"explicacion": "β = 10·log(10⁻⁶/10⁻¹²) = 10·log(10⁶) = 60 dB. 6 dB olvida el factor 10, y 12 dB suma los exponentes en lugar de restarlos."
},
{
"id": "fis-050",
"tema": "fi7",
"nivel": 2,
"enunciado": "Una onda en una cuerda viene dada por y = 0,02·sen(10π·t − 2π·x) en unidades del SI. ¿Cuál es su velocidad de propagación?",
"opciones": [
"10 m/s",
"5 m/s",
"0,2 m/s",
"π m/s"
],
"correcta": 1,
"explicacion": "ω = 10π rad/s y k = 2π rad/m, por lo que v = ω/k = 5 m/s. 0,2 m/s resulta de invertir el cociente, y 10 m/s de usar ω/π."
},
{
"id": "fis-051",
"tema": "fi7",
"nivel": 3,
"enunciado": "Una cuerda de 1,2 m, sujeta por ambos extremos, vibra en su modo fundamental. Las ondas viajan por ella a 120 m/s. ¿Cuál es la frecuencia fundamental?",
"opciones": [
"100 Hz",
"25 Hz",
"50 Hz",
"200 Hz"
],
"correcta": 2,
"explicacion": "En el fundamental λ = 2L = 2,4 m y f = v/λ = 120/2,4 = 50 Hz. 100 Hz resulta de tomar λ = L, y 25 Hz de λ = 4L."
},
{
"id": "fis-052",
"tema": "fi7",
"nivel": 1,
"enunciado": "Una ambulancia con la sirena activada se acerca a un peatón en reposo. ¿Cómo percibe este la frecuencia del sonido respecto a la emitida?",
"opciones": [
"Menor que la emitida",
"Igual a la emitida",
"Variable, sin tendencia fija",
"Mayor que la emitida"
],
"correcta": 3,
"explicacion": "Por el efecto Doppler, cuando la fuente se acerca las crestas llegan más seguidas y la frecuencia percibida es mayor. Si se alejase, sería menor."
},
{
"id": "fis-053",
"tema": "fi7",
"nivel": 2,
"enunciado": "Un foco puntual emite sonido en todas direcciones. Si un oyente duplica su distancia al foco, la intensidad que recibe:",
"opciones": [
"Se reduce a la mitad",
"Se reduce a la cuarta parte",
"Se duplica",
"Se mantiene"
],
"correcta": 1,
"explicacion": "La energía se reparte sobre una esfera de área 4π·r², así que I ∝ 1/r². Al duplicar r, I pasa a I/4. La mitad correspondería a una dependencia lineal."
},
{
"id": "fis-054",
"tema": "fi8",
"nivel": 1,
"enunciado": "Un rayo de luz incide en un espejo plano con un ángulo de 35° respecto a la normal. ¿Cuál es el ángulo de reflexión respecto a la normal?",
"opciones": [
"55°",
"70°",
"35°",
"145°"
],
"correcta": 2,
"explicacion": "La ley de la reflexión dice que el ángulo de reflexión es igual al de incidencia, ambos medidos respecto a la normal. 55° sería el ángulo con la superficie, y 70° es el ángulo entre rayo incidente y reflejado."
},
{
"id": "fis-055",
"tema": "fi8",
"nivel": 1,
"enunciado": "La luz viaja en el vacío a 3·10⁸ m/s. ¿Con qué velocidad se propaga en un vidrio de índice de refracción 1,5?",
"opciones": [
"4,5·10⁸ m/s",
"3·10⁸ m/s",
"1,5·10⁸ m/s",
"2·10⁸ m/s"
],
"correcta": 3,
"explicacion": "v = c/n = 3·10⁸/1,5 = 2·10⁸ m/s. 4,5·10⁸ m/s multiplica en lugar de dividir, lo que daría una velocidad mayor que c, imposible."
},
{
"id": "fis-056",
"tema": "fi8",
"nivel": 2,
"enunciado": "Un rayo pasa del aire (n = 1) a un medio transparente con un ángulo de incidencia de 60° y se refracta con un ángulo de 30°. ¿Cuál es el índice de refracción del medio? (sen 60° = 0,866; sen 30° = 0,5)",
"opciones": [
"1,73",
"0,58",
"2",
"1,5"
],
"correcta": 0,
"explicacion": "Por Snell, 1·sen 60° = n·sen 30°, así que n = 0,866/0,5 = 1,73. 0,58 es el cociente invertido y daría un índice menor que 1 para un medio material, lo que es imposible."
},
{
"id": "fis-057",
"tema": "fi8",
"nivel": 3,
"enunciado": "Un rayo de luz intenta pasar de un medio de índice 2 al aire (n = 1). ¿A partir de qué ángulo de incidencia se produce reflexión total?",
"opciones": [
"60°",
"45°",
"30°",
"90°"
],
"correcta": 2,
"explicacion": "sen θ_c = n₂/n₁ = 1/2 = 0,5, luego θ_c = 30°. 60° es el complementario, y 90° corresponde a la incidencia rasante, no al ángulo límite."
},
{
"id": "fis-058",
"tema": "fi8",
"nivel": 2,
"enunciado": "Un objeto real se sitúa a 0,4 m de una lente convergente de distancia focal 0,2 m. ¿Cómo es la imagen? (1/s + 1/s′ = 1/f)",
"opciones": [
"Virtual, derecha y mayor que el objeto",
"Real, invertida y menor que el objeto",
"Real, derecha y del mismo tamaño",
"Real, invertida, del mismo tamaño y a 0,4 m de la lente"
],
"correcta": 3,
"explicacion": "1/s′ = 1/0,2 − 1/0,4 = 2,5, luego s′ = 0,4 m y el aumento m = −s′/s = −1: imagen real, invertida y del mismo tamaño (el objeto está en 2f). Una imagen virtual y derecha solo se da con el objeto dentro de f."
},
{
"id": "fis-059",
"tema": "fi8",
"nivel": 1,
"enunciado": "Una lente convergente tiene una distancia focal de 0,25 m. ¿Cuál es su potencia?",
"opciones": [
"4 dioptrías",
"0,25 dioptrías",
"2 dioptrías",
"40 dioptrías"
],
"correcta": 0,
"explicacion": "P = 1/f = 1/0,25 = 4 D. 0,25 sería la propia focal en metros, y 40 D implicaría una focal de 2,5 cm."
},
{
"id": "fis-060",
"tema": "fi8",
"nivel": 2,
"enunciado": "Un objeto se coloca entre el foco y el vértice de un espejo cóncavo. ¿Cómo es la imagen?",
"opciones": [
"Real, invertida y mayor",
"Virtual, derecha y mayor",
"Real, invertida y menor",
"Virtual, derecha y menor"
],
"correcta": 1,
"explicacion": "Con el objeto entre el foco y el espejo, los rayos reflejados divergen y su prolongación forma una imagen virtual, derecha y mayor (efecto lupa). Real e invertida solo ocurre con el objeto más allá del foco."
},
{
"id": "fis-061",
"tema": "fi8",
"nivel": 3,
"enunciado": "Un objeto está a 0,15 m de una lente convergente de distancia focal 0,1 m. ¿Cuánto vale el aumento lateral? (1/s + 1/s′ = 1/f; m = −s′/s)",
"opciones": [
"+2",
"−0,5",
"−3",
"−2"
],
"correcta": 3,
"explicacion": "1/s′ = 1/0,1 − 1/0,15 = 10 − 6,67 = 3,33, de donde s′ = 0,3 m y m = −0,3/0,15 = −2: imagen real, invertida y del doble de tamaño. +2 describiría una imagen derecha, que no se da con el objeto fuera del foco."
}
]
};
