// Generado por generar.py desde datos/materias. No editar a mano.
export default {
"id": "tecnologia",
"nombre": "Tecnología e ingeniería",
"idioma": "es",
"idiomaExplicacion": "es",
"temas": [
{
"id": "t1",
"titulo": "Materiales y ensayos"
},
{
"id": "t2",
"titulo": "Máquinas y mecanismos"
},
{
"id": "t3",
"titulo": "Electricidad y circuitos"
},
{
"id": "t4",
"titulo": "Electrónica analógica y digital"
},
{
"id": "t5",
"titulo": "Neumática e hidráulica"
},
{
"id": "t6",
"titulo": "Energía, rendimiento y motores"
},
{
"id": "t7",
"titulo": "Control y automatización"
},
{
"id": "t8",
"titulo": "Programación y robótica básica"
},
{
"id": "t9",
"titulo": "Fabricación y sostenibilidad"
}
],
"preguntas": [
{
"id": "tec-001",
"tema": "t1",
"nivel": 1,
"enunciado": "¿Qué propiedad de un material mide su resistencia a ser rayado o penetrado por otro cuerpo?",
"opciones": [
"Tenacidad",
"Elasticidad",
"Dureza",
"Plasticidad"
],
"correcta": 2,
"explicacion": "Esa definición corresponde a la dureza. La tenacidad es la energía absorbida antes de romper, la elasticidad es recuperar la forma y la plasticidad es conservar la deformación."
},
{
"id": "tec-002",
"tema": "t1",
"nivel": 1,
"enunciado": "El ensayo Charpy, que rompe de un golpe una probeta entallada con un péndulo, se utiliza para determinar:",
"opciones": [
"La resiliencia, o energía absorbida en el impacto",
"La dureza superficial del material",
"El módulo de elasticidad en tracción",
"El límite elástico bajo carga lenta"
],
"correcta": 0,
"explicacion": "Charpy mide la energía absorbida al romper por impacto (resiliencia). La dureza se mide con Brinell, Vickers o Rockwell, y el módulo y el límite elástico con el ensayo de tracción."
},
{
"id": "tec-003",
"tema": "t1",
"nivel": 2,
"enunciado": "Una probeta de 50 mm² de sección soporta una fuerza de tracción de 12 kN. ¿Qué tensión soporta?",
"opciones": [
"24 MPa",
"4,2 MPa",
"600 MPa",
"240 MPa"
],
"correcta": 3,
"explicacion": "σ = F/S = 12 000 N / 50 mm² = 240 N/mm² = 240 MPa. 24 MPa sale de perder un cero, 4,2 MPa de dividir la sección entre la fuerza y 600 de multiplicar."
},
{
"id": "tec-004",
"tema": "t1",
"nivel": 2,
"enunciado": "Una barra de acero de 100 mm de longitud inicial, en la zona elástica, se alarga 0,1 mm cuando soporta una tensión de 210 MPa. ¿Cuál es su módulo de elasticidad?",
"opciones": [
"21 GPa",
"210 GPa",
"2,1 GPa",
"210 MPa"
],
"correcta": 1,
"explicacion": "ε = 0,1/100 = 0,001 y E = σ/ε = 210 MPa / 0,001 = 210 000 MPa = 210 GPa. Las otras opciones son errores de potencia de diez o confunden E con la tensión."
},
{
"id": "tec-005",
"tema": "t1",
"nivel": 2,
"enunciado": "¿Qué ensayo de dureza emplea como penetrador una pirámide de diamante de base cuadrada?",
"opciones": [
"Brinell",
"Vickers",
"Charpy",
"Shore"
],
"correcta": 1,
"explicacion": "Vickers usa una pirámide de diamante. Brinell usa una bola, Charpy es un ensayo de impacto y no de dureza, y Shore se utiliza sobre todo con elastómeros."
},
{
"id": "tec-006",
"tema": "t1",
"nivel": 3,
"enunciado": "Una barra de acero (E = 200 GPa) de 2 m de longitud y 100 mm² de sección soporta una tracción de 10 kN en zona elástica. ¿Cuánto se alarga?",
"opciones": [
"0,1 mm",
"10 mm",
"0,5 mm",
"1 mm"
],
"correcta": 3,
"explicacion": "Δl = F·l/(S·E) = 10 000 N · 2000 mm / (100 mm² · 200 000 N/mm²) = 1 mm. Con 0,1 mm se confunde una potencia de diez al pasar los GPa a N/mm², y 10 mm olvida la sección."
},
{
"id": "tec-007",
"tema": "t1",
"nivel": 3,
"enunciado": "Un acero tiene límite elástico de 360 MPa y se aplica un coeficiente de seguridad de 1,5. ¿Qué sección mínima necesita un tirante que soporta 48 kN?",
"opciones": [
"200 mm²",
"133 mm²",
"300 mm²",
"20 mm²"
],
"correcta": 0,
"explicacion": "σadm = 360/1,5 = 240 MPa y S = 48 000 N / 240 N/mm² = 200 mm². 133 mm² es el resultado sin coeficiente de seguridad, que deja el tirante al límite."
},
{
"id": "tec-008",
"tema": "t2",
"nivel": 1,
"enunciado": "Una carretilla de obra, con la rueda en un extremo, la carga en medio y las manos en el otro, es una palanca de:",
"opciones": [
"Primer género",
"Tercer género",
"Segundo género",
"Cuarto género"
],
"correcta": 2,
"explicacion": "En el segundo género la resistencia está entre el fulcro (la rueda) y la potencia (las manos). En el primero el fulcro está en medio y en el tercero lo está la potencia; no existen palancas de cuarto género."
},
{
"id": "tec-009",
"tema": "t2",
"nivel": 1,
"enunciado": "En un motor de combustión, la biela y la manivela (cigüeñal) transforman el movimiento rectilíneo alternativo del pistón en:",
"opciones": [
"Un movimiento rectilíneo uniforme",
"Un giro alternativo de poca amplitud",
"Un giro continuo del eje",
"Un desplazamiento helicoidal"
],
"correcta": 2,
"explicacion": "El pistón empuja la biela y esta hace girar el cigüeñal de forma continua. Los otros movimientos no se producen en este mecanismo."
},
{
"id": "tec-010",
"tema": "t2",
"nivel": 2,
"enunciado": "Una palanca ideal tiene la potencia a 1,5 m del fulcro y una resistencia de 300 N a 0,5 m. ¿Qué potencia equilibra la resistencia?",
"opciones": [
"100 N",
"900 N",
"450 N",
"200 N"
],
"correcta": 0,
"explicacion": "P·1,5 = 300·0,5, luego P = 150/1,5 = 100 N. 900 N sale de invertir los brazos y 450 N de multiplicar 300 por 1,5."
},
{
"id": "tec-011",
"tema": "t2",
"nivel": 2,
"enunciado": "Con una polea móvil ideal se eleva una carga de 80 kg (g = 10 m/s²). ¿Qué fuerza hay que hacer?",
"opciones": [
"800 N",
"200 N",
"1600 N",
"400 N"
],
"correcta": 3,
"explicacion": "El peso es 800 N y la polea móvil ideal lo reparte entre dos tramos de cuerda: F = 800/2 = 400 N. Una polea fija obligaría a hacer 800 N."
},
{
"id": "tec-012",
"tema": "t2",
"nivel": 2,
"enunciado": "Un piñón de 20 dientes gira a 900 rpm y engrana con una rueda de 60 dientes. ¿A qué velocidad gira la rueda?",
"opciones": [
"2700 rpm",
"300 rpm",
"450 rpm",
"600 rpm"
],
"correcta": 1,
"explicacion": "n₂ = n₁·z₁/z₂ = 900·20/60 = 300 rpm. Es un reductor de relación 1/3. 2700 rpm resulta de aplicar la relación al revés."
},
{
"id": "tec-013",
"tema": "t2",
"nivel": 2,
"enunciado": "En un tren de engranajes, un motor gira a 1200 rpm. Primera etapa: piñón de 15 dientes que mueve una rueda de 45. Segunda etapa: piñón de 20 que mueve una rueda de 40. ¿Velocidad de salida?",
"opciones": [
"400 rpm",
"200 rpm",
"600 rpm",
"7200 rpm"
],
"correcta": 1,
"explicacion": "i total = (15/45)·(20/40) = 1/3·1/2 = 1/6, de modo que n = 1200/6 = 200 rpm. 400 rpm ignora la segunda etapa y 7200 aplica las relaciones al revés."
},
{
"id": "tec-014",
"tema": "t2",
"nivel": 3,
"enunciado": "Un piñón de 20 dientes y módulo 3 mm mueve una cremallera. ¿Cuánto avanza la cremallera en una vuelta completa del piñón?",
"opciones": [
"60 mm",
"Unos 94 mm",
"Unos 377 mm",
"Unos 188 mm"
],
"correcta": 3,
"explicacion": "El avance es el perímetro primitivo: π·m·z = π·3·20 ≈ 188,5 mm. 60 mm es solo m·z (el diámetro primitivo), 94 mm la mitad y 377 mm el doble."
},
{
"id": "tec-015",
"tema": "t2",
"nivel": 3,
"enunciado": "Un motor entrega 3 kW de potencia mecánica a 1500 rpm. ¿Qué par aproximado suministra?",
"opciones": [
"19,1 N·m",
"2,0 N·m",
"191 N·m",
"0,32 N·m"
],
"correcta": 0,
"explicacion": "ω = 1500·2π/60 ≈ 157,1 rad/s y M = P/ω = 3000/157,1 ≈ 19,1 N·m. Dividir por las rpm directamente (2,0) no es válido porque hay que usar rad/s."
},
{
"id": "tec-016",
"tema": "t3",
"nivel": 1,
"enunciado": "Por una resistencia de 4 Ω se aplica una tensión de 12 V. ¿Qué intensidad circula?",
"opciones": [
"48 A",
"0,33 A",
"3 A",
"8 A"
],
"correcta": 2,
"explicacion": "Por la ley de Ohm, I = V/R = 12/4 = 3 A. 48 A multiplica y 0,33 A es el inverso (R/V)."
},
{
"id": "tec-017",
"tema": "t3",
"nivel": 1,
"enunciado": "Una plancha conectada a 230 V consume 5 A. ¿Qué potencia tiene?",
"opciones": [
"46 W",
"235 W",
"1150 W",
"115 W"
],
"correcta": 2,
"explicacion": "P = V·I = 230·5 = 1150 W. 46 W resulta de dividir V entre I, que es la resistencia, no la potencia."
},
{
"id": "tec-018",
"tema": "t3",
"nivel": 2,
"enunciado": "Dos resistencias de 10 Ω y 15 Ω se conectan en paralelo. ¿Cuál es la resistencia equivalente?",
"opciones": [
"6 Ω",
"25 Ω",
"12,5 Ω",
"150 Ω"
],
"correcta": 0,
"explicacion": "R = 10·15/(10+15) = 150/25 = 6 Ω. 25 Ω es la suma (serie), 12,5 Ω la media y 150 Ω solo el producto."
},
{
"id": "tec-019",
"tema": "t3",
"nivel": 2,
"enunciado": "Tres resistencias de 100 Ω, 200 Ω y 300 Ω se conectan en serie a una pila de 12 V. ¿Qué tensión cae en la de 300 Ω?",
"opciones": [
"4 V",
"2 V",
"3 V",
"6 V"
],
"correcta": 3,
"explicacion": "R total = 600 Ω, I = 12/600 = 20 mA y V = 0,02·300 = 6 V. Es la mitad de la tensión porque 300 es la mitad de 600."
},
{
"id": "tec-020",
"tema": "t3",
"nivel": 2,
"enunciado": "Un horno de 2 kW funciona 3 horas. Con un precio supuesto de 0,15 € por kWh, ¿cuánto cuesta ese uso?",
"opciones": [
"0,30 €",
"0,90 €",
"0,45 €",
"1,80 €"
],
"correcta": 1,
"explicacion": "E = 2 kW · 3 h = 6 kWh y el coste es 6·0,15 = 0,90 €. 0,45 € sale de multiplicar 3 h por 0,15, olvidando los 2 kW."
},
{
"id": "tec-021",
"tema": "t3",
"nivel": 2,
"enunciado": "Un transformador ideal tiene 1200 espiras en el primario conectado a 240 V. ¿Cuántas espiras necesita el secundario para dar 12 V?",
"opciones": [
"24 000",
"60",
"120",
"600"
],
"correcta": 1,
"explicacion": "N₂ = N₁·V₂/V₁ = 1200·12/240 = 60 espiras. 24 000 resulta de aplicar la relación al revés."
},
{
"id": "tec-022",
"tema": "t3",
"nivel": 3,
"enunciado": "Por una resistencia de 50 Ω circulan 2 A durante 10 minutos. ¿Qué energía se disipa en forma de calor?",
"opciones": [
"12 kJ",
"60 kJ",
"200 J",
"120 kJ"
],
"correcta": 3,
"explicacion": "Q = I²·R·t = 4·50·600 s = 120 000 J = 120 kJ. 200 J es solo la potencia (200 W) sin multiplicar por el tiempo, y 12 kJ sale de usar 1 minuto."
},
{
"id": "tec-023",
"tema": "t3",
"nivel": 3,
"enunciado": "Una tensión alterna senoidal tiene un valor máximo de 325 V. ¿Cuál es aproximadamente su valor eficaz?",
"opciones": [
"230 V",
"460 V",
"325 V",
"162 V"
],
"correcta": 0,
"explicacion": "Vef = Vmáx/√2 = 325/1,414 ≈ 230 V. 162 V resulta de dividir entre 2 en lugar de entre √2, y 460 V de multiplicar por √2."
},
{
"id": "tec-024",
"tema": "t4",
"nivel": 1,
"enunciado": "¿Qué componente electrónico permite el paso de la corriente en un solo sentido?",
"opciones": [
"Condensador",
"Potenciómetro",
"Diodo",
"Bobina"
],
"correcta": 2,
"explicacion": "El diodo conduce en polarización directa y bloquea en inversa. El condensador almacena carga, el potenciómetro es una resistencia variable y la bobina almacena energía magnética."
},
{
"id": "tec-025",
"tema": "t4",
"nivel": 1,
"enunciado": "Una puerta lógica cuya salida vale 1 cuando al menos una de sus entradas vale 1 es la:",
"opciones": [
"AND",
"NAND",
"OR",
"NOR"
],
"correcta": 2,
"explicacion": "La OR da 1 si cualquiera de las entradas es 1. La AND exige todas a 1, la NAND es su negada y la NOR es la OR negada, que da 0 en ese caso."
},
{
"id": "tec-026",
"tema": "t4",
"nivel": 2,
"enunciado": "El sistema binario 1011 equivale en decimal a:",
"opciones": [
"11",
"13",
"9",
"7"
],
"correcta": 0,
"explicacion": "1011₂ = 1·8 + 0·4 + 1·2 + 1·1 = 11. 13 corresponde a 1101 y 9 a 1001."
},
{
"id": "tec-027",
"tema": "t4",
"nivel": 2,
"enunciado": "La función lógica S = A·B + A·B̅ (B̅ es B negada) equivale a:",
"opciones": [
"B",
"A + B",
"A·B",
"A"
],
"correcta": 3,
"explicacion": "Sacando factor común, A·(B + B̅) = A·1 = A. La salida no depende de B."
},
{
"id": "tec-028",
"tema": "t4",
"nivel": 2,
"enunciado": "Una puerta NOR de dos entradas da salida 1 cuando:",
"opciones": [
"Al menos una entrada vale 1",
"Las dos entradas valen 0",
"Las dos entradas valen 1",
"Las dos entradas son distintas"
],
"correcta": 1,
"explicacion": "NOR es una OR negada: solo da 1 con 0 y 0. Con alguna entrada a 1 la OR vale 1 y la NOR 0; entradas distintas es la condición de la XOR."
},
{
"id": "tec-029",
"tema": "t4",
"nivel": 2,
"enunciado": "Un LED de 2 V se alimenta con 5 V y debe circular por él 20 mA. ¿Qué resistencia en serie necesita?",
"opciones": [
"250 Ω",
"150 Ω",
"100 Ω",
"350 Ω"
],
"correcta": 1,
"explicacion": "R = (5 − 2)/0,02 = 150 Ω. 250 Ω ignora la caída del LED, 100 Ω usa solo esa caída y 350 Ω la suma en vez de restarla."
},
{
"id": "tec-030",
"tema": "t4",
"nivel": 3,
"enunciado": "Un condensador de 100 µF se carga a través de una resistencia de 10 kΩ. ¿Cuánto vale la constante de tiempo τ?",
"opciones": [
"1 ms",
"10 s",
"0,1 s",
"1 s"
],
"correcta": 3,
"explicacion": "τ = R·C = 10⁴ Ω · 10⁻⁴ F = 1 s. 1 ms sale de usar mal los prefijos y 10 s de olvidar que 100 µF son 10⁻⁴ F."
},
{
"id": "tec-031",
"tema": "t4",
"nivel": 3,
"enunciado": "Un divisor de tensión formado por R₁ = 10 kΩ y R₂ = 20 kΩ se alimenta con 12 V. ¿Qué tensión hay en R₂?",
"opciones": [
"8 V",
"4 V",
"6 V",
"12 V"
],
"correcta": 0,
"explicacion": "V₂ = 12·20/(10+20) = 8 V. 4 V es la tensión en R₁, que es la menor resistencia, y 6 V ocurriría con resistencias iguales."
},
{
"id": "tec-032",
"tema": "t5",
"nivel": 1,
"enunciado": "La prensa hidráulica se basa en el principio de:",
"opciones": [
"Arquímedes",
"Bernoulli",
"Pascal",
"Torricelli"
],
"correcta": 2,
"explicacion": "Pascal establece que la presión se transmite íntegra en un fluido confinado, lo que permite multiplicar la fuerza. Arquímedes trata del empuje y Torricelli de la velocidad de salida de un líquido."
},
{
"id": "tec-033",
"tema": "t5",
"nivel": 1,
"enunciado": "Una válvula 3/2 tiene:",
"opciones": [
"Tres posiciones y dos vías",
"Tres salidas y dos entradas fijas",
"Tres vías y dos posiciones",
"Tres cilindros y dos conductos"
],
"correcta": 2,
"explicacion": "La primera cifra indica las vías y la segunda las posiciones de maniobra. No tiene tres posiciones: sería una válvula x/3."
},
{
"id": "tec-034",
"tema": "t5",
"nivel": 2,
"enunciado": "Un cilindro neumático con émbolo de 20 cm² trabaja a 6 bar. ¿Qué fuerza teórica ejerce en el avance?",
"opciones": [
"1200 N",
"120 N",
"12 000 N",
"3000 N"
],
"correcta": 0,
"explicacion": "6 bar = 6·10⁵ Pa y 20 cm² = 20·10⁻⁴ m²; F = 6·10⁵·2·10⁻³ = 1200 N. 12 000 N sale de olvidar la conversión de cm² a m²."
},
{
"id": "tec-035",
"tema": "t5",
"nivel": 2,
"enunciado": "Un cilindro tiene una fuerza teórica de 1200 N y un rendimiento del 90 %. ¿Qué fuerza real da?",
"opciones": [
"1333 N",
"1320 N",
"900 N",
"1080 N"
],
"correcta": 3,
"explicacion": "F real = 1200·0,9 = 1080 N. Dividir entre 0,9 daría más fuerza que la teórica, lo que es imposible, y 900 N sale de restar el 25 %."
},
{
"id": "tec-036",
"tema": "t5",
"nivel": 2,
"enunciado": "En una prensa hidráulica, el émbolo pequeño tiene 10 cm² y el grande 200 cm². Si en el pequeño se aplican 50 N, ¿qué fuerza se obtiene en el grande?",
"opciones": [
"2,5 N",
"1000 N",
"100 N",
"10 000 N"
],
"correcta": 1,
"explicacion": "F₂ = F₁·A₂/A₁ = 50·200/10 = 1000 N. 2,5 N sale de invertir el cociente de áreas."
},
{
"id": "tec-037",
"tema": "t5",
"nivel": 3,
"enunciado": "En un cilindro de doble efecto, el émbolo tiene Ø 80 mm y el vástago Ø 20 mm. ¿Qué porcentaje de la fuerza de avance se obtiene en el retroceso a igual presión?",
"opciones": [
"100 %",
"93,75 %",
"75 %",
"50 %"
],
"correcta": 1,
"explicacion": "A retroceso/A avance = (80² − 20²)/80² = 6000/6400 = 0,9375. La fuerza no es igual porque el vástago resta área; 75 % o 50 % exigen vástagos mucho mayores."
},
{
"id": "tec-038",
"tema": "t5",
"nivel": 3,
"enunciado": "Un cilindro de 20 cm² de émbolo debe moverse a 0,25 m/s. ¿Qué caudal de aire necesita?",
"opciones": [
"3 L/min",
"300 L/min",
"50 L/min",
"30 L/min"
],
"correcta": 3,
"explicacion": "Q = A·v = 20·10⁻⁴ m² · 0,25 m/s = 5·10⁻⁴ m³/s = 0,5 L/s = 30 L/min. Los otros valores son errores de potencia de diez al convertir."
},
{
"id": "tec-039",
"tema": "t6",
"nivel": 1,
"enunciado": "¿Cuántos julios equivalen a 1 kWh?",
"opciones": [
"3,6·10⁶ J",
"3,6·10³ J",
"1·10³ J",
"6·10⁴ J"
],
"correcta": 0,
"explicacion": "1 kWh = 1000 W · 3600 s = 3,6·10⁶ J. 3,6·10³ J es mil veces menor, y 10³ J sería 1 kW durante un solo segundo."
},
{
"id": "tec-040",
"tema": "t6",
"nivel": 1,
"enunciado": "En un motor de combustión de cuatro tiempos, el orden de las fases del ciclo es:",
"opciones": [
"Compresión, admisión, escape y expansión",
"Admisión, expansión, compresión y escape",
"Admisión, compresión, expansión y escape",
"Escape, admisión, expansión y compresión"
],
"correcta": 2,
"explicacion": "Primero entra la mezcla (admisión), se comprime, se quema y empuja el pistón (expansión) y finalmente se evacúan los gases (escape)."
},
{
"id": "tec-041",
"tema": "t6",
"nivel": 2,
"enunciado": "Un motor absorbe 5 kW de potencia eléctrica y entrega 4 kW de potencia mecánica. ¿Cuál es su rendimiento?",
"opciones": [
"125 %",
"20 %",
"80 %",
"90 %"
],
"correcta": 2,
"explicacion": "η = 4/5 = 0,8 = 80 %. 125 % resulta de dividir al revés, algo imposible porque el rendimiento no supera el 100 %."
},
{
"id": "tec-042",
"tema": "t6",
"nivel": 2,
"enunciado": "Una central térmica tiene caldera con η = 0,9, turbina con η = 0,4 y alternador con η = 0,95. ¿Cuál es el rendimiento total?",
"opciones": [
"34,2 %",
"75 %",
"36 %",
"95 %"
],
"correcta": 0,
"explicacion": "Los rendimientos se multiplican: 0,9·0,4·0,95 = 0,342. Hacer la media (75 %) es incorrecto y 36 % olvida el alternador."
},
{
"id": "tec-043",
"tema": "t6",
"nivel": 2,
"enunciado": "Un motor eleva una carga de 200 kg a 15 m de altura en 30 s (g = 10 m/s², rendimiento del 100 %). ¿Qué potencia útil desarrolla?",
"opciones": [
"100 W",
"3000 W",
"450 W",
"1000 W"
],
"correcta": 3,
"explicacion": "P = m·g·h/t = 200·10·15/30 = 1000 W. 3000 W olvida dividir entre el tiempo para obtener la energía por segundo."
},
{
"id": "tec-044",
"tema": "t6",
"nivel": 3,
"enunciado": "Un motor térmico ideal trabaja entre un foco caliente a 600 K y uno frío a 300 K. ¿Cuál es su rendimiento máximo (Carnot)?",
"opciones": [
"25 %",
"50 %",
"75 %",
"33 %"
],
"correcta": 1,
"explicacion": "η = 1 − 300/600 = 0,5. Ningún motor real alcanza ese valor. 25 % y 75 % no salen de la fórmula con esos datos."
},
{
"id": "tec-045",
"tema": "t6",
"nivel": 3,
"enunciado": "Un motor tiene una cilindrada unitaria de 500 cm³ y una cámara de combustión de 50 cm³. ¿Cuál es su relación de compresión?",
"opciones": [
"10:1",
"11:1",
"5,5:1",
"50:1"
],
"correcta": 1,
"explicacion": "rc = (500 + 50)/50 = 11. 10:1 olvida que el volumen de la cámara también forma parte del volumen total al inicio de la compresión."
},
{
"id": "tec-046",
"tema": "t7",
"nivel": 1,
"enunciado": "¿Cuál de estos sistemas es de lazo abierto?",
"opciones": [
"Un termostato que regula una calefacción",
"El control de crucero de un coche",
"El piloto automático de un avión",
"Una tostadora controlada por temporizador"
],
"correcta": 3,
"explicacion": "La tostadora actúa un tiempo fijo sin medir el tostado. Los otros tres miden la salida y corrigen el error: son de lazo cerrado."
},
{
"id": "tec-047",
"tema": "t7",
"nivel": 1,
"enunciado": "¿Qué sensor se utiliza para detectar el nivel de luz ambiente?",
"opciones": [
"LDR",
"NTC",
"Final de carrera",
"Electroválvula"
],
"correcta": 0,
"explicacion": "La LDR cambia su resistencia con la luz. La NTC mide temperatura, el final de carrera detecta posición y la electroválvula es un actuador, no un sensor."
},
{
"id": "tec-048",
"tema": "t7",
"nivel": 2,
"enunciado": "En un sistema de lazo cerrado, la señal de error es:",
"opciones": [
"La suma de la consigna y la salida",
"La perturbación que actúa sobre la planta",
"La diferencia entre la consigna y la salida medida",
"La señal que mueve el actuador"
],
"correcta": 2,
"explicacion": "El comparador calcula e = consigna − medida. La señal del actuador la genera el controlador a partir del error, y la perturbación es externa."
},
{
"id": "tec-049",
"tema": "t7",
"nivel": 2,
"enunciado": "Un termostato conecta la caldera por debajo de 19 °C y la desconecta al llegar a 21 °C. Este control es:",
"opciones": [
"Proporcional puro",
"De lazo abierto",
"Todo-nada con histéresis",
"Integral continuo"
],
"correcta": 2,
"explicacion": "Actúa con dos estados (ON/OFF) y dos umbrales distintos, lo que se llama histéresis. Mide la temperatura, así que no es de lazo abierto."
},
{
"id": "tec-050",
"tema": "t7",
"nivel": 2,
"enunciado": "Una resistencia NTC se calienta. ¿Qué le ocurre a su resistencia eléctrica?",
"opciones": [
"Disminuye",
"Aumenta",
"Se mantiene constante",
"Se anula de golpe"
],
"correcta": 0,
"explicacion": "NTC significa coeficiente de temperatura negativo: su resistencia baja al subir la temperatura. La PTC se comporta al contrario."
},
{
"id": "tec-051",
"tema": "t7",
"nivel": 3,
"enunciado": "Un sistema tiene una rama directa de ganancia G = 4 y realimentación negativa con H = 1. ¿Cuánto vale la ganancia total G/(1 + G·H)?",
"opciones": [
"1,25",
"0,25",
"5",
"0,8"
],
"correcta": 3,
"explicacion": "T = 4/(1 + 4·1) = 4/5 = 0,8. 1,25 es el valor inverso y 5 resulta de sumar 1 a G sin dividir."
},
{
"id": "tec-052",
"tema": "t7",
"nivel": 3,
"enunciado": "Un control proporcional con Kp = 3 tiene consigna de 50 °C y mide 42 °C. ¿Cuánto vale la salida u = Kp·e?",
"opciones": [
"8",
"24",
"16",
"150"
],
"correcta": 1,
"explicacion": "El error es 50 − 42 = 8 y u = 3·8 = 24 (en las unidades del actuador). 150 sería Kp·consigna, y 8 es solo el error."
},
{
"id": "tec-053",
"tema": "t7",
"nivel": 2,
"enunciado": "En un autómata programable (PLC), el ciclo de funcionamiento repite siempre este orden:",
"opciones": [
"Actualizar salidas, leer entradas y ejecutar el programa",
"Leer entradas, ejecutar el programa y actualizar salidas",
"Ejecutar el programa, actualizar salidas y leer entradas",
"Leer entradas, actualizar salidas y ejecutar el programa"
],
"correcta": 1,
"explicacion": "El PLC fotografía las entradas, ejecuta la lógica con esos valores y después escribe las salidas. Actualizar las salidas antes de ejecutar usaría datos obsoletos."
},
{
"id": "tec-054",
"tema": "t8",
"nivel": 1,
"enunciado": "¿Qué estructura de programación repite un bloque de instrucciones mientras se cumpla una condición?",
"opciones": [
"Una variable",
"Un condicional simple",
"Un comentario",
"Un bucle"
],
"correcta": 3,
"explicacion": "El bucle (while, for) repite el bloque. El condicional lo ejecuta como mucho una vez, y la variable solo almacena un dato."
},
{
"id": "tec-055",
"tema": "t8",
"nivel": 1,
"enunciado": "¿Cuál de estos dispositivos es un actuador?",
"opciones": [
"Un servomotor",
"Un sensor ultrasónico",
"Una LDR",
"Un pulsador"
],
"correcta": 0,
"explicacion": "El servomotor ejecuta un movimiento. Ultrasonidos, LDR y pulsador son sensores que miden o detectan."
},
{
"id": "tec-056",
"tema": "t8",
"nivel": 2,
"enunciado": "Una entrada analógica de Arduino tiene un conversor de 10 bits. ¿Cuántos valores distintos puede devolver?",
"opciones": [
"1000",
"512",
"1024",
"10"
],
"correcta": 2,
"explicacion": "Con 10 bits hay 2¹⁰ = 1024 valores (de 0 a 1023). 1000 es una aproximación decimal."
},
{
"id": "tec-057",
"tema": "t8",
"nivel": 2,
"enunciado": "Se ejecuta: x = 3; para i desde 1 hasta 4: x = x + i. ¿Cuánto vale x al final?",
"opciones": [
"10",
"12",
"13",
"24"
],
"correcta": 2,
"explicacion": "x = 3 + 1 + 2 + 3 + 4 = 13. 10 olvida el valor inicial de x."
},
{
"id": "tec-058",
"tema": "t8",
"nivel": 2,
"enunciado": "Un programa dice: si temperatura > 30 enciende el ventilador, si no lo apaga. Si la temperatura vale exactamente 30, el ventilador:",
"opciones": [
"Se apaga",
"Se enciende",
"Queda en un estado indeterminado",
"Provoca un error"
],
"correcta": 0,
"explicacion": "La condición «30 > 30» es falsa, por lo que se ejecuta la rama «si no» y el ventilador se apaga. Habría que usar >= para encenderlo en 30."
},
{
"id": "tec-059",
"tema": "t8",
"nivel": 3,
"enunciado": "Una señal PWM de 50 Hz tiene el pulso en alto durante 1,5 ms en cada periodo. ¿Cuál es su ciclo de trabajo?",
"opciones": [
"15 %",
"3 %",
"75 %",
"7,5 %"
],
"correcta": 3,
"explicacion": "T = 1/50 = 20 ms y duty = 1,5/20 = 0,075 = 7,5 %. 15 % resulta de dividir entre 10 ms, el medio periodo."
},
{
"id": "tec-060",
"tema": "t8",
"nivel": 3,
"enunciado": "Un sensor ultrasónico recibe el eco 5 ms después de emitir el pulso. Con v = 340 m/s, ¿a qué distancia está el obstáculo?",
"opciones": [
"1,7 m",
"0,85 m",
"0,425 m",
"8,5 m"
],
"correcta": 1,
"explicacion": "El sonido hace ida y vuelta: d = v·t/2 = 340·0,005/2 = 0,85 m. 1,7 m olvida dividir entre 2."
},
{
"id": "tec-061",
"tema": "t9",
"nivel": 1,
"enunciado": "¿Cuál de estos procesos de fabricación elimina material en forma de viruta?",
"opciones": [
"Forja",
"Torneado",
"Fundición",
"Extrusión"
],
"correcta": 1,
"explicacion": "El torneado arranca viruta con una herramienta de corte. Forja y extrusión deforman el material y la fundición lo moldea."
},
{
"id": "tec-062",
"tema": "t9",
"nivel": 1,
"enunciado": "En la jerarquía de las 3R, la opción con mayor prioridad ambiental es:",
"opciones": [
"Reciclar",
"Reutilizar",
"Recuperar energía",
"Reducir"
],
"correcta": 3,
"explicacion": "Reducir evita generar residuos desde el principio. Reutilizar es la segunda y reciclar la tercera, porque necesita procesar el material."
},
{
"id": "tec-063",
"tema": "t9",
"nivel": 1,
"enunciado": "¿Cuál de estas uniones es desmontable?",
"opciones": [
"Un tornillo con tuerca",
"Una soldadura",
"Un remache",
"Un adhesivo epoxi"
],
"correcta": 0,
"explicacion": "El tornillo se puede quitar sin dañar las piezas. Soldadura, remache y adhesivo son uniones permanentes."
},
{
"id": "tec-064",
"tema": "t9",
"nivel": 2,
"enunciado": "Un torno trabaja una pieza de 50 mm de diámetro a 400 rpm. ¿Cuál es aproximadamente la velocidad de corte Vc = π·D·n/1000?",
"opciones": [
"31,4 m/min",
"125,7 m/min",
"62,8 m/min",
"200 m/min"
],
"correcta": 2,
"explicacion": "Vc = π·50·400/1000 ≈ 62,8 m/min. 31,4 resulta de usar el radio como diámetro y 125,7 de duplicarlo."
},
{
"id": "tec-065",
"tema": "t9",
"nivel": 2,
"enunciado": "La principal diferencia de la fabricación aditiva (impresión 3D) respecto a la sustractiva es que:",
"opciones": [
"Elimina material de un bloque con herramientas",
"Funde el metal en un molde",
"Construye la pieza añadiendo material capa a capa",
"Deforma la chapa con una prensa"
],
"correcta": 2,
"explicacion": "La impresión 3D deposita material capa a capa, por lo que se desperdicia menos. Arrancar viruta es sustractivo, fundir en molde es moldeo y prensar chapa es deformación."
},
{
"id": "tec-066",
"tema": "t9",
"nivel": 2,
"enunciado": "Una máquina de 2 kW funciona 4 h. Con un factor de emisión de 0,25 kg de CO₂ por kWh, ¿cuánto CO₂ se asocia a su consumo?",
"opciones": [
"2 kg",
"0,5 kg",
"8 kg",
"32 kg"
],
"correcta": 0,
"explicacion": "E = 2·4 = 8 kWh y 8·0,25 = 2 kg de CO₂. 8 kg es solo la energía, sin aplicar el factor de emisión."
},
{
"id": "tec-067",
"tema": "t9",
"nivel": 3,
"enunciado": "Un producto tiene costes fijos de 4000 €, coste variable de 5 € por unidad y precio de venta de 9 €. ¿Cuántas unidades marcan el umbral de rentabilidad?",
"opciones": [
"800",
"444",
"4000",
"1000"
],
"correcta": 3,
"explicacion": "N = 4000/(9 − 5) = 1000 unidades. 444 resulta de dividir entre el precio (9) y no entre el margen por unidad."
},
{
"id": "tec-068",
"tema": "t9",
"nivel": 2,
"enunciado": "El análisis de ciclo de vida de un producto evalúa su impacto ambiental:",
"opciones": [
"Solo durante su fabricación",
"Desde la extracción de materias primas hasta el fin de vida",
"Solo durante su uso por el consumidor",
"Solo en el reciclaje final"
],
"correcta": 1,
"explicacion": "El ACV es un análisis de cuna a tumba que incluye todas las etapas. Limitarse a una sola etapa puede ocultar el mayor impacto."
}
]
};
