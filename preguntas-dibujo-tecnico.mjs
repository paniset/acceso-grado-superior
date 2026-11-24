// Generado por generar.py desde datos/materias. No editar a mano.
export default {
"id": "dibujo-tecnico",
"nombre": "Dibujo técnico",
"idioma": "es",
"idiomaExplicacion": "es",
"temas": [
{
"id": "d1",
"titulo": "Trazados fundamentales y ángulos"
},
{
"id": "d2",
"titulo": "Polígonos y triángulos"
},
{
"id": "d3",
"titulo": "Tangencias, enlaces y curvas"
},
{
"id": "d4",
"titulo": "Escalas y proporcionalidad"
},
{
"id": "d5",
"titulo": "Sistemas de representación"
},
{
"id": "d6",
"titulo": "Vistas y normalización"
}
],
"preguntas": [
{
"id": "dib-001",
"tema": "d1",
"nivel": 1,
"enunciado": "La mediatriz de un segmento es:",
"opciones": [
"La recta paralela al segmento por su punto medio",
"La recta que une un extremo con el punto medio",
"La recta perpendicular al segmento por su punto medio",
"La bisectriz del ángulo formado por sus extremos"
],
"correcta": 2,
"explicacion": "La mediatriz es perpendicular al segmento y pasa por su punto medio; todos sus puntos equidistan de los extremos. Una paralela por el punto medio no cumple esa propiedad."
},
{
"id": "dib-002",
"tema": "d1",
"nivel": 1,
"enunciado": "Un punto cualquiera de la bisectriz de un ángulo equidista de:",
"opciones": [
"Los dos lados del ángulo",
"El vértice y un lado",
"Los dos extremos de los lados",
"El vértice y la mediatriz"
],
"correcta": 0,
"explicacion": "La bisectriz es el lugar geométrico de los puntos que equidistan de los lados. Equidistar de dos puntos corresponde a la mediatriz."
},
{
"id": "dib-003",
"tema": "d1",
"nivel": 2,
"enunciado": "Con escuadra y cartabón, sumando o restando ángulos de 30°, 45°, 60° y 90°, ¿cuál de estos ángulos puede obtenerse?",
"opciones": [
"20°",
"50°",
"80°",
"75°"
],
"correcta": 3,
"explicacion": "75° = 45° + 30°. Los otros no son combinaciones de sumas o restas de 30°, 45°, 60° y 90°."
},
{
"id": "dib-004",
"tema": "d1",
"nivel": 2,
"enunciado": "El centro de la circunferencia circunscrita a un triángulo es el punto donde se cortan:",
"opciones": [
"Las bisectrices de los ángulos",
"Las mediatrices de los lados",
"Las medianas",
"Las alturas"
],
"correcta": 1,
"explicacion": "El circuncentro equidista de los tres vértices y es el corte de las mediatrices. Las bisectrices dan el incentro, las medianas el baricentro y las alturas el ortocentro."
},
{
"id": "dib-005",
"tema": "d1",
"nivel": 2,
"enunciado": "Un ángulo central de una circunferencia mide 80°. ¿Cuánto mide un ángulo inscrito que abarca el mismo arco?",
"opciones": [
"160°",
"40°",
"80°",
"20°"
],
"correcta": 1,
"explicacion": "El ángulo inscrito mide la mitad del arco que abarca, y el arco es igual al ángulo central, así que 80°/2 = 40°. 160° sería el doble."
},
{
"id": "dib-006",
"tema": "d1",
"nivel": 2,
"enunciado": "¿Qué se utiliza para dividir un segmento en 5 partes iguales con regla y compás?",
"opciones": [
"La mediatriz repetida cinco veces",
"La bisectriz de un ángulo",
"El arco capaz",
"El teorema de Thales, con paralelas"
],
"correcta": 3,
"explicacion": "Se traza una semirrecta auxiliar, se marcan cinco partes iguales y se unen con paralelas, por Thales. La mediatriz solo divide en dos partes."
},
{
"id": "dib-007",
"tema": "d1",
"nivel": 3,
"enunciado": "El lugar geométrico de los puntos desde los que se ve un segmento AB bajo un ángulo constante α es:",
"opciones": [
"Dos arcos de circunferencia simétricos respecto de AB",
"Una recta paralela a AB",
"La mediatriz de AB",
"Una elipse con focos en los extremos del segmento"
],
"correcta": 0,
"explicacion": "Es el arco capaz, formado por dos arcos simétricos respecto del segmento. La mediatriz o una paralela no mantienen el ángulo constante."
},
{
"id": "dib-008",
"tema": "d1",
"nivel": 3,
"enunciado": "En un triángulo rectángulo, el ortocentro coincide con:",
"opciones": [
"El punto medio de la hipotenusa",
"El baricentro",
"El vértice del ángulo recto",
"El incentro"
],
"correcta": 2,
"explicacion": "Dos de las alturas son los propios catetos, que se cortan en el vértice recto. El punto medio de la hipotenusa es el circuncentro."
},
{
"id": "dib-009",
"tema": "d2",
"nivel": 1,
"enunciado": "¿Cuánto mide cada ángulo interior de un pentágono regular?",
"opciones": [
"120°",
"72°",
"108°",
"100°"
],
"correcta": 2,
"explicacion": "Suma interior = 180°·(5 − 2) = 540° y cada ángulo es 540°/5 = 108°. 72° es el ángulo central y 120° el del hexágono."
},
{
"id": "dib-010",
"tema": "d2",
"nivel": 1,
"enunciado": "¿Cuánto suman los ángulos interiores de un hexágono?",
"opciones": [
"720°",
"540°",
"360°",
"1080°"
],
"correcta": 0,
"explicacion": "180°·(6 − 2) = 720°. 540° corresponde al pentágono, 360° al cuadrilátero y 1080° al octógono."
},
{
"id": "dib-011",
"tema": "d2",
"nivel": 1,
"enunciado": "Un polígono regular se caracteriza por tener:",
"opciones": [
"Todos sus lados iguales, aunque los ángulos sean distintos",
"Todos sus ángulos iguales, aunque los lados sean distintos",
"Sus lados paralelos dos a dos",
"Todos sus lados y todos sus ángulos iguales"
],
"correcta": 3,
"explicacion": "Regular exige igualdad de lados y de ángulos a la vez. Un rombo tiene los lados iguales y no es regular, y un rectángulo tiene los ángulos iguales y tampoco."
},
{
"id": "dib-012",
"tema": "d2",
"nivel": 2,
"enunciado": "El ángulo central de un octógono regular mide:",
"opciones": [
"135°",
"45°",
"60°",
"30°"
],
"correcta": 1,
"explicacion": "360°/8 = 45°. 135° es el ángulo interior del octógono."
},
{
"id": "dib-013",
"tema": "d2",
"nivel": 2,
"enunciado": "Un hexágono regular está inscrito en una circunferencia de radio 5 cm. ¿Cuánto mide su lado?",
"opciones": [
"2,5 cm",
"5 cm",
"10 cm",
"Unos 8,66 cm"
],
"correcta": 1,
"explicacion": "El lado del hexágono regular inscrito es igual al radio, pues los radios y el lado forman un triángulo equilátero. 8,66 cm es 5·√3, el lado del triángulo inscrito."
},
{
"id": "dib-014",
"tema": "d2",
"nivel": 2,
"enunciado": "En un triángulo equilátero de altura 9 cm, ¿a qué distancia de cada lado se encuentra el baricentro?",
"opciones": [
"4,5 cm",
"6 cm",
"2 cm",
"3 cm"
],
"correcta": 3,
"explicacion": "El baricentro está a un tercio de la altura respecto del lado: 9/3 = 3 cm. 6 cm es la distancia al vértice (dos tercios)."
},
{
"id": "dib-015",
"tema": "d2",
"nivel": 3,
"enunciado": "Un triángulo equilátero está inscrito en una circunferencia de radio 4 cm. ¿Cuánto mide su lado?",
"opciones": [
"4√3 cm, unos 6,93 cm",
"4 cm",
"8 cm",
"4√2 cm, unos 5,66 cm"
],
"correcta": 0,
"explicacion": "El lado del triángulo equilátero inscrito es R·√3 = 4√3 ≈ 6,93 cm. 4 cm es el lado del hexágono y 4√2 el del cuadrado inscrito."
},
{
"id": "dib-016",
"tema": "d2",
"nivel": 3,
"enunciado": "Un cuadrado está inscrito en una circunferencia de diámetro 10 cm. ¿Cuánto mide su lado?",
"opciones": [
"5 cm",
"10 cm",
"5√2 cm, unos 7,07 cm",
"7,5 cm"
],
"correcta": 2,
"explicacion": "La diagonal del cuadrado es el diámetro (10 cm), así que el lado es 10/√2 = 5√2 ≈ 7,07 cm. 10 cm sería la diagonal y 5 cm el radio."
},
{
"id": "dib-017",
"tema": "d3",
"nivel": 1,
"enunciado": "En el punto de tangencia, una recta tangente a una circunferencia forma con el radio un ángulo de:",
"opciones": [
"45°",
"60°",
"90°",
"180°"
],
"correcta": 2,
"explicacion": "La tangente es perpendicular al radio en el punto de tangencia, por lo que forma 90°."
},
{
"id": "dib-018",
"tema": "d3",
"nivel": 2,
"enunciado": "Dos circunferencias de radios 3 cm y 5 cm son tangentes exteriores. ¿A qué distancia están sus centros?",
"opciones": [
"8 cm",
"2 cm",
"15 cm",
"4 cm"
],
"correcta": 0,
"explicacion": "En tangencia exterior d = r₁ + r₂ = 8 cm. 2 cm sería la distancia en tangencia interior."
},
{
"id": "dib-019",
"tema": "d3",
"nivel": 2,
"enunciado": "Dos circunferencias de radios 7 cm y 4 cm son tangentes interiores. ¿A qué distancia están sus centros?",
"opciones": [
"11 cm",
"28 cm",
"5,5 cm",
"3 cm"
],
"correcta": 3,
"explicacion": "En tangencia interior d = |r₁ − r₂| = 7 − 4 = 3 cm. 11 cm correspondería a tangentes exteriores."
},
{
"id": "dib-020",
"tema": "d3",
"nivel": 2,
"enunciado": "El centro de una circunferencia de radio R que es tangente a una recta dada se encuentra en:",
"opciones": [
"La perpendicular a la recta por un punto cualquiera",
"Una paralela a la recta a distancia R",
"La mediatriz de la recta",
"La bisectriz de la recta con el eje"
],
"correcta": 1,
"explicacion": "El centro debe estar a distancia R de la recta, es decir, en una de las dos paralelas a esa distancia. Las otras opciones no fijan la distancia."
},
{
"id": "dib-021",
"tema": "d3",
"nivel": 2,
"enunciado": "Una curva técnica formada por cuatro arcos de circunferencia y que tiene dos ejes de simetría es:",
"opciones": [
"El ovoide",
"El óvalo",
"La espiral de dos centros",
"La hipérbola"
],
"correcta": 1,
"explicacion": "El óvalo tiene dos ejes de simetría; el ovoide solo uno. La hipérbola es una cónica, no una curva técnica de arcos."
},
{
"id": "dib-022",
"tema": "d3",
"nivel": 2,
"enunciado": "Si un punto de una parábola está a 7 cm del foco, su distancia a la directriz es:",
"opciones": [
"3,5 cm",
"14 cm",
"0 cm",
"7 cm"
],
"correcta": 3,
"explicacion": "La parábola es el lugar geométrico de los puntos que equidistan del foco y de la directriz, por lo que la distancia también es 7 cm."
},
{
"id": "dib-023",
"tema": "d3",
"nivel": 3,
"enunciado": "Una elipse tiene semieje mayor a = 5 cm y semieje menor b = 3 cm. ¿Cuál es la distancia entre sus focos?",
"opciones": [
"8 cm",
"6 cm",
"4 cm",
"10 cm"
],
"correcta": 0,
"explicacion": "c² = a² − b² = 25 − 9 = 16, así que c = 4 y la distancia focal es 2c = 8 cm. 4 cm es solo c y 10 cm es el eje mayor."
},
{
"id": "dib-024",
"tema": "d3",
"nivel": 3,
"enunciado": "Un punto de una hipérbola dista 13 cm de un foco y 7 cm del otro. ¿Cuánto mide su eje real 2a?",
"opciones": [
"20 cm",
"10 cm",
"6 cm",
"3 cm"
],
"correcta": 2,
"explicacion": "En la hipérbola la diferencia de distancias a los focos es 2a: |13 − 7| = 6 cm. 20 cm sería la suma, propia de la elipse."
},
{
"id": "dib-025",
"tema": "d4",
"nivel": 1,
"enunciado": "En un plano a escala 1:50, un muro mide 4 cm en el dibujo. ¿Cuánto mide en la realidad?",
"opciones": [
"0,8 m",
"20 m",
"2 m",
"12,5 cm"
],
"correcta": 2,
"explicacion": "Real = 4 cm · 50 = 200 cm = 2 m. 12,5 cm sale de dividir entre 50 y no multiplicar."
},
{
"id": "dib-026",
"tema": "d4",
"nivel": 1,
"enunciado": "La escala 2:1 es una escala de:",
"opciones": [
"Ampliación",
"Reducción",
"Tamaño natural",
"Proporción áurea"
],
"correcta": 0,
"explicacion": "El dibujo es el doble de grande que el objeto real, es decir, ampliación. La reducción tiene la forma 1:n y el tamaño natural es 1:1."
},
{
"id": "dib-027",
"tema": "d4",
"nivel": 2,
"enunciado": "Una pieza mide 120 mm en la realidad y se dibuja con 24 mm. ¿Cuál es la escala?",
"opciones": [
"5:1",
"1:4",
"1:10",
"1:5"
],
"correcta": 3,
"explicacion": "Escala = 24/120 = 1/5, o sea 1:5. 5:1 sería ampliación."
},
{
"id": "dib-028",
"tema": "d4",
"nivel": 2,
"enunciado": "En un mapa a escala 1:25 000, dos puntos están separados 3,2 cm. ¿Qué distancia real hay entre ellos?",
"opciones": [
"80 m",
"800 m",
"8 km",
"1,28 km"
],
"correcta": 1,
"explicacion": "3,2 cm · 25 000 = 80 000 cm = 800 m. 8 km sale de equivocarse en una potencia de diez al convertir."
},
{
"id": "dib-029",
"tema": "d4",
"nivel": 2,
"enunciado": "Los segmentos AB = 4 cm y BC = 6 cm de una recta se cortan con paralelas, y A'B' = 6 cm. Por Thales, ¿cuánto mide B'C'?",
"opciones": [
"4 cm",
"9 cm",
"8 cm",
"12 cm"
],
"correcta": 1,
"explicacion": "AB/BC = A'B'/B'C' implica 4/6 = 6/x, y x = 9 cm. 4 cm es AB y 12 cm sale de multiplicar 6 por 2."
},
{
"id": "dib-030",
"tema": "d4",
"nivel": 2,
"enunciado": "Hallar la cuarta proporcional x de a = 2, b = 5 y c = 6, de modo que a/b = c/x, da:",
"opciones": [
"2,4",
"5",
"30",
"15"
],
"correcta": 3,
"explicacion": "2/5 = 6/x implica x = 6·5/2 = 15. 2,4 sale de dividir 12 entre 5, que correspondería a a·c/b."
},
{
"id": "dib-031",
"tema": "d4",
"nivel": 3,
"enunciado": "Un plano está a escala 1:200 y una habitación mide 2 cm × 3 cm en él. ¿Cuál es su superficie real?",
"opciones": [
"24 m²",
"12 m²",
"48 m²",
"240 m²"
],
"correcta": 0,
"explicacion": "Los lados reales son 4 m y 6 m, y la superficie 24 m². Aplicar 1:200 solo al área sería un error, porque las áreas varían con el cuadrado de la escala."
},
{
"id": "dib-032",
"tema": "d4",
"nivel": 3,
"enunciado": "Dos triángulos semejantes tienen razón de semejanza 2:3. Si el menor tiene 40 cm² de área, ¿cuál es el área del mayor?",
"opciones": [
"60 cm²",
"80 cm²",
"90 cm²",
"135 cm²"
],
"correcta": 2,
"explicacion": "La razón de áreas es el cuadrado: (3/2)² = 9/4, y 40·9/4 = 90 cm². 60 cm² aplicaría solo la razón lineal."
},
{
"id": "dib-033",
"tema": "d5",
"nivel": 1,
"enunciado": "¿Qué sistema de representación utiliza dos planos de proyección perpendiculares entre sí?",
"opciones": [
"El sistema axonométrico",
"El sistema cónico",
"El sistema diédrico",
"La perspectiva caballera"
],
"correcta": 2,
"explicacion": "El diédrico proyecta sobre el plano horizontal y el vertical, perpendiculares entre sí. Los sistemas axonométricos y la caballera usan un solo plano de proyección."
},
{
"id": "dib-034",
"tema": "d5",
"nivel": 1,
"enunciado": "El coeficiente de reducción habitual para las aristas perpendiculares al frente en la perspectiva caballera es:",
"opciones": [
"0,5",
"1",
"0,816",
"2"
],
"correcta": 0,
"explicacion": "En la caballera se dibuja la profundidad a la mitad, es decir, con coeficiente 0,5. 0,816 es el coeficiente teórico de la isométrica."
},
{
"id": "dib-035",
"tema": "d5",
"nivel": 2,
"enunciado": "En la perspectiva isométrica, los ejes forman entre sí ángulos de:",
"opciones": [
"90°",
"135°",
"60°",
"120°"
],
"correcta": 3,
"explicacion": "Los tres ejes isométricos se reparten la circunferencia en tres ángulos iguales de 120°."
},
{
"id": "dib-036",
"tema": "d5",
"nivel": 2,
"enunciado": "En el sistema cónico, las rectas paralelas entre sí y no paralelas al plano del cuadro se cortan en:",
"opciones": [
"La línea de tierra",
"Un punto de fuga",
"El punto de vista",
"El origen de coordenadas"
],
"correcta": 1,
"explicacion": "Convergen en un punto de fuga situado en la línea de horizonte. Esa convergencia es la característica del sistema cónico."
},
{
"id": "dib-037",
"tema": "d5",
"nivel": 2,
"enunciado": "Un punto con alejamiento positivo y cota positiva se encuentra en el:",
"opciones": [
"Segundo diedro",
"Primer diedro",
"Tercer diedro",
"Cuarto diedro"
],
"correcta": 1,
"explicacion": "El primer diedro es el situado por encima del plano horizontal y delante del vertical. En los demás cambia el signo de alguna coordenada."
},
{
"id": "dib-038",
"tema": "d5",
"nivel": 2,
"enunciado": "En perspectiva caballera, una arista de 40 mm perpendicular al plano frontal, con coeficiente de reducción 0,5, se dibuja con una longitud de:",
"opciones": [
"40 mm",
"80 mm",
"28 mm",
"20 mm"
],
"correcta": 3,
"explicacion": "40 · 0,5 = 20 mm. 80 mm sería ampliar y 40 mm no aplicaría la reducción."
},
{
"id": "dib-039",
"tema": "d5",
"nivel": 3,
"enunciado": "Una recta horizontal (paralela al plano horizontal de proyección) en el sistema diédrico tiene:",
"opciones": [
"La proyección vertical paralela a LT y la horizontal en verdadera magnitud",
"La proyección horizontal paralela a LT y la vertical en verdadera magnitud",
"Ambas proyecciones perpendiculares a LT",
"Ambas proyecciones reducidas a un punto"
],
"correcta": 0,
"explicacion": "Por ser paralela al plano horizontal, su cota es constante, y por eso la proyección vertical es paralela a LT, mientras que la horizontal mide lo mismo que la recta."
},
{
"id": "dib-040",
"tema": "d5",
"nivel": 3,
"enunciado": "En isométrica con el coeficiente de reducción teórico 0,816, una arista real de 30 mm se mide en el dibujo aproximadamente:",
"opciones": [
"30 mm",
"36,8 mm",
"24,5 mm",
"15 mm"
],
"correcta": 2,
"explicacion": "30 · 0,816 ≈ 24,5 mm. 36,8 mm resulta de dividir entre 0,816, es decir, de aplicar el coeficiente al revés."
},
{
"id": "dib-041",
"tema": "d6",
"nivel": 1,
"enunciado": "Las medidas del formato A4 son:",
"opciones": [
"297 × 420 mm",
"148 × 210 mm",
"210 × 297 mm",
"210 × 420 mm"
],
"correcta": 2,
"explicacion": "A4 mide 210 × 297 mm. 297 × 420 mm es A3 y 148 × 210 mm es A5."
},
{
"id": "dib-042",
"tema": "d6",
"nivel": 1,
"enunciado": "La sigla ISO corresponde a:",
"opciones": [
"La Organización Internacional de Normalización",
"La Asociación Española de Normalización",
"El Instituto de Seguridad Operativa",
"La Industria Siderúrgica Oficial"
],
"correcta": 0,
"explicacion": "ISO es la organización internacional. La entidad española de normalización es UNE."
},
{
"id": "dib-043",
"tema": "d6",
"nivel": 2,
"enunciado": "¿Cuántas hojas A4 equivalen en superficie a una hoja A2?",
"opciones": [
"2",
"8",
"16",
"4"
],
"correcta": 3,
"explicacion": "Cada formato se obtiene doblando el anterior: A2 → A3 → A4, o sea 2·2 = 4 hojas A4."
},
{
"id": "dib-044",
"tema": "d6",
"nivel": 2,
"enunciado": "Las aristas y contornos ocultos de una pieza se dibujan con línea:",
"opciones": [
"Continua gruesa",
"Discontinua (de trazos)",
"De trazo y punto fina",
"Continua fina"
],
"correcta": 1,
"explicacion": "La línea de trazos representa lo oculto. La continua gruesa es para lo visible y la de trazo y punto fina para ejes."
},
{
"id": "dib-045",
"tema": "d6",
"nivel": 1,
"enunciado": "Los ejes de simetría se representan con línea:",
"opciones": [
"Continua gruesa",
"De trazo y punto fina",
"Discontinua gruesa",
"Continua fina en zigzag"
],
"correcta": 1,
"explicacion": "El eje de simetría es una línea de trazo y punto fina. La continua gruesa se reserva para contornos y aristas vistas."
},
{
"id": "dib-046",
"tema": "d6",
"nivel": 2,
"enunciado": "Una pieza de 30 mm se dibuja a escala 1:2 y por tanto ocupa 15 mm en el papel. ¿Qué cota debe escribirse?",
"opciones": [
"15",
"60",
"7,5",
"30"
],
"correcta": 3,
"explicacion": "La cota indica siempre la medida real de la pieza, con independencia de la escala, por lo que se escribe 30 (en mm)."
},
{
"id": "dib-047",
"tema": "d6",
"nivel": 2,
"enunciado": "Las superficies seccionadas de una pieza se rayan con líneas:",
"opciones": [
"Continuas finas y paralelas, por lo general a 45°",
"Continuas gruesas horizontales",
"Discontinuas a 90°",
"De trazo y punto a 30°"
],
"correcta": 0,
"explicacion": "El rayado normalizado de secciones usa líneas continuas finas y paralelas, habitualmente a 45°."
},
{
"id": "dib-048",
"tema": "d6",
"nivel": 3,
"enunciado": "En el sistema europeo de proyección (primer diedro), la vista lateral izquierda se dibuja:",
"opciones": [
"A la izquierda del alzado",
"Debajo del alzado",
"A la derecha del alzado",
"Encima del alzado"
],
"correcta": 2,
"explicacion": "En el primer diedro el observador, el objeto y el plano se colocan de modo que cada vista queda en el lado opuesto: la lateral izquierda se sitúa a la derecha del alzado. La planta va debajo."
}
]
};
