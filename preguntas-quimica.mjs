// Generado por generar.py desde datos/materias. No editar a mano.
export default {
"id": "quimica",
"nombre": "Química",
"idioma": "es",
"idiomaExplicacion": "es",
"temas": [
{
"id": "q1",
"titulo": "Estructura atómica y sistema periódico"
},
{
"id": "q2",
"titulo": "Enlace químico y fuerzas intermoleculares"
},
{
"id": "q3",
"titulo": "Formulación inorgánica y orgánica"
},
{
"id": "q4",
"titulo": "Mol, estequiometría y disoluciones"
},
{
"id": "q5",
"titulo": "Gases ideales y termoquímica"
},
{
"id": "q6",
"titulo": "Cinética y equilibrio químico"
},
{
"id": "q7",
"titulo": "Reacciones ácido-base y pH"
},
{
"id": "q8",
"titulo": "Reacciones de oxidación-reducción"
}
],
"preguntas": [
{
"id": "qui-001",
"tema": "q1",
"nivel": 1,
"enunciado": "¿Cuántos protones, neutrones y electrones tiene el ion Na⁺ del isótopo ²³Na (Z = 11)?",
"opciones": [
"11 protones, 12 neutrones y 10 electrones",
"11 protones, 12 neutrones y 11 electrones, como el átomo neutro",
"12 protones, 11 neutrones, 10 electrones",
"10 protones, 12 neutrones y 11 electrones"
],
"correcta": 0,
"explicacion": "Z = 11 da 11 protones; neutrones = A − Z = 23 − 11 = 12; el ion Na⁺ ha perdido un electrón, así que tiene 11 − 1 = 10. Con 11 electrones sería el átomo neutro, y el número de protones nunca cambia al formarse un ion."
},
{
"id": "qui-002",
"tema": "q1",
"nivel": 1,
"enunciado": "¿Cuál es la configuración electrónica del átomo de cloro (Z = 17) en estado fundamental?",
"opciones": [
"1s² 2s² 2p⁶ 3s² 3p⁶",
"1s² 2s² 2p⁶ 3s² 3p⁵",
"1s² 2s² 2p⁶ 3s² 3p⁴",
"1s² 2s² 2p⁶ 3s² 3d⁵"
],
"correcta": 1,
"explicacion": "Hay que colocar 17 electrones: 2 + 2 + 6 + 2 = 12 hasta 3s y quedan 5 en 3p. La opción con 3p⁶ tiene 18 electrones (sería el ion Cl⁻), la de 3p⁴ tiene 16 y la de 3d⁵ ocupa 3d antes de completar 3p, lo que contradice el orden de llenado."
},
{
"id": "qui-003",
"tema": "q1",
"nivel": 2,
"enunciado": "Un elemento tiene la configuración electrónica [Ne] 3s² 3p³. ¿En qué grupo y periodo de la tabla periódica está?",
"opciones": [
"Grupo 13 y periodo 3, como el aluminio",
"Grupo 15 y periodo 5",
"Grupo 15 y periodo 3",
"Grupo 3 y periodo 5"
],
"correcta": 2,
"explicacion": "El periodo es el mayor valor de n ocupado (3). La capa de valencia tiene 2 + 3 = 5 electrones, lo que corresponde al grupo 15 (el del nitrógeno); es el fósforo. El grupo 13 tendría tres electrones de valencia, y confundir n con el número de electrones daría los otros errores."
},
{
"id": "qui-004",
"tema": "q1",
"nivel": 2,
"enunciado": "¿Cuál de estos conjuntos de números cuánticos (n, l, mₗ) NO es posible para un electrón?",
"opciones": [
"(3, 2, −2)",
"(2, 1, 1)",
"(4, 0, 0)",
"(2, 2, 0)"
],
"correcta": 3,
"explicacion": "El número cuántico l toma valores desde 0 hasta n − 1; con n = 2 solo puede ser 0 o 1, de modo que l = 2 es imposible. Los otros tres cumplen las reglas: (3, 2, −2) es un orbital 3d, (2, 1, 1) uno 2p y (4, 0, 0) el orbital 4s."
},
{
"id": "qui-005",
"tema": "q1",
"nivel": 2,
"enunciado": "Ordena los átomos Na, Mg y Al (todos del tercer periodo) de mayor a menor radio atómico.",
"opciones": [
"Al > Mg > Na, porque el Al tiene más protones",
"Na > Mg > Al",
"Mg > Na > Al",
"Son iguales"
],
"correcta": 1,
"explicacion": "En un periodo, al avanzar hacia la derecha aumenta la carga nuclear mientras que los electrones se añaden en la misma capa, de modo que la atracción crece y el radio disminuye. Por eso el sodio es el mayor y el aluminio el menor. El orden inverso corresponde a un grupo, no a un periodo."
},
{
"id": "qui-006",
"tema": "q1",
"nivel": 3,
"enunciado": "La primera energía de ionización del oxígeno (Z = 8) es algo menor que la del nitrógeno (Z = 7), pese a que el oxígeno está más a la derecha. ¿Cuál es la causa?",
"opciones": [
"El oxígeno tiene menos protones que el nitrógeno y por eso atrae menos a sus electrones externos, que están más lejos",
"El oxígeno tiene un nivel de energía más que el nitrógeno y su radio es mayor",
"El nitrógeno tiene los tres electrones 2p desapareados (semillena, más estable); en el oxígeno hay un par repelido",
"El nitrógeno tiene menor electronegatividad y retiene peor sus electrones"
],
"correcta": 2,
"explicacion": "El N es 2p³ (un electrón por orbital) y el O es 2p⁴, con un orbital doblemente ocupado; la repulsión entre los dos electrones apareados facilita arrancar uno. El O tiene más protones (8 frente a 7), ambos están en el periodo 2 y el N es menos electronegativo, pero eso no explica la irregularidad."
},
{
"id": "qui-007",
"tema": "q1",
"nivel": 3,
"enunciado": "El cloro natural es una mezcla de dos isótopos: ³⁵Cl (75 %) y ³⁷Cl (25 %). ¿Cuál es su masa atómica media?",
"opciones": [
"36,0 u (media aritmética simple)",
"35,0 u",
"36,5 u",
"35,5 u (media ponderada)"
],
"correcta": 3,
"explicacion": "La masa media se pondera por la abundancia: 35·0,75 + 37·0,25 = 26,25 + 9,25 = 35,5 u. El promedio simple de 35 y 37 (36,0) ignora que el ³⁵Cl es tres veces más abundante, y los otros valores no resultan de ninguna ponderación posible con estos datos."
},
{
"id": "qui-008",
"tema": "q2",
"nivel": 1,
"enunciado": "¿Cuál de estas sustancias conduce la electricidad en estado sólido y es maleable?",
"opciones": [
"Cobre, por su enlace metálico con electrones deslocalizados",
"Cloruro de sodio, porque sus iones se mueven libremente en la red sólida",
"Diamante, por su red covalente",
"Hielo, por sus enlaces de hidrógeno"
],
"correcta": 0,
"explicacion": "En los metales los electrones de valencia se mueven libremente por toda la red, lo que da conductividad y maleabilidad. El NaCl sólido tiene los iones fijos y es frágil; el diamante no tiene electrones libres y el hielo es un sólido molecular aislante."
},
{
"id": "qui-009",
"tema": "q2",
"nivel": 1,
"enunciado": "Según el modelo RPECV, ¿cuál es la geometría de la molécula de agua (H₂O)?",
"opciones": [
"Lineal, con dos pares enlazantes y ninguno libre sobre el oxígeno, como el CO₂",
"Trigonal plana, con tres pares enlazantes",
"Angular, con dos pares enlazantes y dos no enlazantes sobre el oxígeno",
"Tetraédrica, con cuatro pares enlazantes"
],
"correcta": 2,
"explicacion": "El oxígeno tiene cuatro pares de electrones (dos enlazantes y dos libres) orientados hacia los vértices de un tetraedro, pero la geometría molecular solo considera los átomos: queda angular. Sería lineal únicamente sin pares libres y con dos pares en total, como en el CO₂."
},
{
"id": "qui-010",
"tema": "q2",
"nivel": 2,
"enunciado": "¿Cuál es la geometría de la molécula de amoníaco (NH₃)?",
"opciones": [
"Trigonal plana",
"Angular",
"Tetraédrica regular, como el metano",
"Piramidal trigonal"
],
"correcta": 3,
"explicacion": "El nitrógeno tiene cuatro pares de electrones: tres enlazantes (con H) y uno libre. Esa distribución es tetraédrica, pero la forma de la molécula, que solo cuenta los átomos, es una pirámide. Sería trigonal plana sin el par libre, como el BF₃, y tetraédrica si los cuatro pares fueran enlazantes, como en el CH₄."
},
{
"id": "qui-011",
"tema": "q2",
"nivel": 2,
"enunciado": "¿Cuál de estas moléculas es apolar a pesar de tener enlaces polares?",
"opciones": [
"CO₂",
"H₂O",
"NH₃",
"HCl"
],
"correcta": 0,
"explicacion": "En el CO₂ cada enlace C=O es polar, pero la molécula es lineal y los dos momentos dipolares, iguales y opuestos, se anulan. El H₂O (angular) y el NH₃ (piramidal) tienen momento dipolar neto, y el HCl, al ser diatómico heteronuclear, también es polar."
},
{
"id": "qui-012",
"tema": "q2",
"nivel": 3,
"enunciado": "De los siguientes compuestos iónicos, ¿cuál tendrá el punto de fusión más alto?",
"opciones": [
"NaCl",
"MgO",
"KBr",
"CsI"
],
"correcta": 1,
"explicacion": "La energía reticular aumenta con el producto de las cargas de los iones y al disminuir su tamaño. El MgO tiene iones con carga 2+ y 2− y de radio pequeño, frente a los iones 1+ y 1− de las otras sales. Entre estas, el CsI tiene los iones mayores y por tanto el punto de fusión más bajo."
},
{
"id": "qui-013",
"tema": "q2",
"nivel": 2,
"enunciado": "El H₂O hierve a 100 °C y el H₂S, de mayor masa molecular, a unos −60 °C. ¿Qué explica esta diferencia?",
"opciones": [
"Los enlaces O–H son iónicos y los S–H covalentes, de modo que el agua se comporta como un sólido iónico",
"El agua tiene mayor masa molecular y por eso aparecen más fuerzas de dispersión",
"El H₂S es una molécula apolar y el agua es polar, así que solo el agua tiene dipolos",
"Entre las moléculas de agua hay enlaces de hidrógeno, que son más intensos que las fuerzas del H₂S"
],
"correcta": 3,
"explicacion": "El H unido a O (muy electronegativo, pequeño) forma enlaces de hidrógeno intermoleculares, que exigen mucha energía para romperse. Los enlaces O–H son covalentes; el H₂S tiene más masa, no menos; y el H₂S es polar (angular), solo que con dipolo-dipolo más débil."
},
{
"id": "qui-014",
"tema": "q2",
"nivel": 3,
"enunciado": "En la molécula de eteno (CH₂=CH₂), ¿cuántos enlaces σ y cuántos π hay en total?",
"opciones": [
"5 enlaces σ y 1 enlace π",
"4 enlaces σ y 2 π",
"6 enlaces σ y ningún enlace π",
"3 enlaces σ y 3 enlaces π"
],
"correcta": 0,
"explicacion": "Cuatro enlaces C–H son σ y el doble enlace C=C aporta un σ y un π: en total 5 σ y 1 π (los carbonos tienen hibridación sp²). La molécula tiene seis átomos y cinco uniones, y cada unión tiene un σ, de modo que 6 σ no es posible ni 2 π."
},
{
"id": "qui-015",
"tema": "q3",
"nivel": 1,
"enunciado": "¿Cuál es la fórmula del óxido de aluminio?",
"opciones": [
"AlO",
"Al₂O₃",
"Al₃O₂",
"AlO₃"
],
"correcta": 1,
"explicacion": "El aluminio actúa con +3 y el oxígeno con −2; al intercambiar los números se obtiene Al₂O₃ (2·3 = 6 cargas positivas y 3·2 = 6 negativas). Las demás fórmulas no equilibran las cargas: AlO daría +3 − 2 = +1."
},
{
"id": "qui-016",
"tema": "q3",
"nivel": 1,
"enunciado": "¿Cómo se nombra el compuesto Fe₂O₃ en nomenclatura de Stock?",
"opciones": [
"Óxido de hierro(II)",
"Óxido de hierro(VI)",
"Óxido de hierro(III)",
"Peróxido de hierro(III)"
],
"correcta": 2,
"explicacion": "Dos hierros y tres oxígenos (−2 cada uno): 3·(−2) = −6, luego cada hierro es +3, es decir, hierro(III). El hierro(II) daría FeO, el número (VI) no es el que corresponde a la relación 2:3 y un peróxido tendría el ion O₂²⁻."
},
{
"id": "qui-017",
"tema": "q3",
"nivel": 2,
"enunciado": "¿Cuál es la fórmula del hidróxido de calcio?",
"opciones": [
"Ca(OH)₂",
"CaOH",
"CaOH₂",
"Ca₂OH"
],
"correcta": 0,
"explicacion": "El calcio forma Ca²⁺ y el hidróxido es OH⁻, así que hacen falta dos OH⁻ por cada Ca²⁺, y como el anión es poliatómico se escribe entre paréntesis: Ca(OH)₂. CaOH no equilibra la carga, y CaOH₂ indicaría dos H unidos solo al oxígeno."
},
{
"id": "qui-018",
"tema": "q3",
"nivel": 2,
"enunciado": "¿Cuál es la fórmula del sulfato de aluminio?",
"opciones": [
"Al₃(SO₄)₂",
"Al₂(SO₄)₃",
"AlSO₄",
"Al₂SO₄"
],
"correcta": 1,
"explicacion": "Al³⁺ y SO₄²⁻: el mínimo común múltiplo de las cargas es 6, así que hacen falta 2 Al³⁺ y 3 SO₄²⁻, y el sulfato lleva paréntesis. Al₃(SO₄)₂ tiene los subíndices cambiados y los otros dos no equilibran las cargas."
},
{
"id": "qui-019",
"tema": "q3",
"nivel": 2,
"enunciado": "¿Cuál es el nombre IUPAC del hidrocarburo CH₃–CH₂–CH=CH₂?",
"opciones": [
"But-2-eno",
"Butano",
"But-1-eno",
"But-3-eno"
],
"correcta": 2,
"explicacion": "La cadena tiene cuatro carbonos (but-), con un doble enlace (-eno) y se numera desde el extremo más cercano al doble enlace, que queda entre C1 y C2: but-1-eno. Numerar desde la derecha daría el localizador 3, mayor, y but-2-eno tendría el doble enlace en el centro de la cadena."
},
{
"id": "qui-020",
"tema": "q3",
"nivel": 1,
"enunciado": "¿Cómo se llama el compuesto CH₃–CH₂–COOH?",
"opciones": [
"Propanal",
"Propanona, una cetona",
"Propan-1-ol",
"Ácido propanoico"
],
"correcta": 3,
"explicacion": "El grupo –COOH es un ácido carboxílico (sufijo -oico) y la cadena tiene tres carbonos contando el del grupo: ácido propanoico. El propanal sería CH₃CH₂CHO, la propanona CH₃COCH₃ y el propan-1-ol CH₃CH₂CH₂OH."
},
{
"id": "qui-021",
"tema": "q3",
"nivel": 3,
"enunciado": "¿Qué pareja de compuestos son isómeros de función?",
"opciones": [
"Butano y 2-metilpropano, que comparten fórmula C₄H₁₀",
"Etanol (CH₃CH₂OH) y metoximetano (CH₃OCH₃)",
"Butan-1-ol y butan-2-ol",
"Pent-1-eno y pent-2-eno"
],
"correcta": 1,
"explicacion": "El etanol (alcohol) y el metoximetano (éter) tienen la misma fórmula C₂H₆O pero distinto grupo funcional. Butano y 2-metilpropano son isómeros de cadena; butan-1-ol y butan-2-ol, y pent-1-eno y pent-2-eno, lo son de posición."
},
{
"id": "qui-022",
"tema": "q4",
"nivel": 1,
"enunciado": "¿Cuántos moles hay en 36 g de agua? (H = 1, O = 16)",
"opciones": [
"0,5 mol",
"18 mol",
"2 mol",
"4 mol"
],
"correcta": 2,
"explicacion": "M(H₂O) = 2·1 + 16 = 18 g/mol, luego n = 36/18 = 2 mol. Dividir al revés (18/36) da 0,5; 18 es la masa molar, no los moles, y 4 saldría de usar 9 g/mol."
},
{
"id": "qui-023",
"tema": "q4",
"nivel": 1,
"enunciado": "¿Cuántas moléculas hay en 0,5 mol de CO₂? (Nₐ = 6,02·10²³ mol⁻¹)",
"opciones": [
"1,20·10²⁴ moléculas en total",
"6,02·10²³ moléculas",
"3,01·10²² moléculas",
"3,01·10²³ moléculas de CO₂"
],
"correcta": 3,
"explicacion": "N = n·Nₐ = 0,5 · 6,02·10²³ = 3,01·10²³. Una mol entera contendría 6,02·10²³; dividir entre 0,5 en lugar de multiplicar daría 1,20·10²⁴, y 3,01·10²² sería 0,05 mol."
},
{
"id": "qui-024",
"tema": "q4",
"nivel": 2,
"enunciado": "Se disuelven 29,25 g de NaCl en agua hasta completar 500 mL de disolución. ¿Cuál es su molaridad? (Na = 23, Cl = 35,5)",
"opciones": [
"1 mol/L",
"0,5 mol/L",
"2 mol/L",
"0,1 mol/L"
],
"correcta": 0,
"explicacion": "M(NaCl) = 58,5 g/mol; n = 29,25/58,5 = 0,5 mol; V = 0,5 L; M = 0,5/0,5 = 1 mol/L. Dar 0,5 es olvidar convertir los mL a litros, y 2 mol/L resulta de dividir entre 0,25 L."
},
{
"id": "qui-025",
"tema": "q4",
"nivel": 2,
"enunciado": "Se toman 50 mL de una disolución de HCl 2 M y se diluyen con agua hasta 250 mL. ¿Cuál es la molaridad de la disolución final?",
"opciones": [
"0,5 mol/L",
"0,1 mol",
"0,4 mol/L",
"2,5 mol/L"
],
"correcta": 2,
"explicacion": "Se conserva el soluto: n = 2·0,050 = 0,1 mol, y M = 0,1/0,250 = 0,4 mol/L (o M₁V₁ = M₂V₂ con 2·50 = M₂·250). 0,5 resulta de dividir mal los volúmenes y 2,5 de invertirlos; 0,1 es el número de moles, no la molaridad."
},
{
"id": "qui-026",
"tema": "q4",
"nivel": 2,
"enunciado": "En la reacción 2 H₂ + O₂ → 2 H₂O, ¿qué masa de agua se forma a partir de 8 g de H₂ con oxígeno en exceso? (H = 1, O = 16)",
"opciones": [
"36 g",
"144 g",
"18 g",
"72 g"
],
"correcta": 3,
"explicacion": "n(H₂) = 8/2 = 4 mol; la relación es 2:2, luego se forman 4 mol de H₂O, es decir, 4·18 = 72 g. 36 g corresponde a 2 mol de agua; 144 g sería duplicar el resultado y 18 g es la masa de un solo mol."
},
{
"id": "qui-027",
"tema": "q4",
"nivel": 3,
"enunciado": "Se hacen reaccionar 28 g de N₂ con 3 g de H₂ según N₂ + 3 H₂ → 2 NH₃. ¿Qué masa de NH₃ se forma? (N = 14, H = 1)",
"opciones": [
"17 g",
"34 g",
"20 g",
"8,5 g"
],
"correcta": 0,
"explicacion": "n(N₂) = 28/28 = 1 mol y n(H₂) = 3/2 = 1,5 mol. Para 1 mol de N₂ harían falta 3 mol de H₂, así que el limitante es el H₂: 1,5 mol H₂ · (2 NH₃/3 H₂) = 1 mol NH₃ = 17 g. 34 g saldría de suponer que el N₂ es el limitante."
},
{
"id": "qui-028",
"tema": "q4",
"nivel": 3,
"enunciado": "Al calentar 200 g de CaCO₃ (CaCO₃ → CaO + CO₂) se obtienen 84 g de CaO. ¿Cuál es el rendimiento de la reacción? (Ca = 40, C = 12, O = 16)",
"opciones": [
"42 %",
"75 %",
"150 %",
"60 %"
],
"correcta": 1,
"explicacion": "n(CaCO₃) = 200/100 = 2 mol, que darían 2 mol de CaO = 112 g (teórico). Rendimiento = 84/112 · 100 = 75 %. 42 % sería comparar 84 con 200, y un rendimiento del 150 % es imposible porque el real no puede superar al teórico."
},
{
"id": "qui-029",
"tema": "q5",
"nivel": 1,
"enunciado": "Un gas ocupa 4 L a 1 atm. Si se comprime a temperatura constante hasta 2 atm, ¿qué volumen ocupa?",
"opciones": [
"8 L, al duplicarse el volumen",
"1 L",
"4 L",
"2 L, la mitad"
],
"correcta": 3,
"explicacion": "Ley de Boyle: P₁V₁ = P₂V₂, luego V₂ = 1·4/2 = 2 L. Al aumentar la presión el volumen disminuye (no aumenta a 8 L); 1 L resultaría de aplicar la presión al cuadrado y 4 L supondría que no varía."
},
{
"id": "qui-030",
"tema": "q5",
"nivel": 2,
"enunciado": "¿Qué presión ejercen 2 mol de un gas ideal en un recipiente de 12,3 L a 300 K? (R = 0,082 atm·L/(mol·K))",
"opciones": [
"4 atm",
"2 atm",
"8 atm",
"0,25 atm"
],
"correcta": 0,
"explicacion": "P = nRT/V = 2·0,082·300/12,3 = 49,2/12,3 = 4 atm. 2 atm resulta de olvidar el factor RT; 0,25 atm de invertir la fracción (12,3/49,2) y 8 atm de duplicar el resultado."
},
{
"id": "qui-031",
"tema": "q5",
"nivel": 1,
"enunciado": "¿Qué volumen ocupan 0,5 mol de un gas ideal a 0 °C y 1 atm?",
"opciones": [
"22,4 L, un mol",
"11,2 L, media mol",
"5,6 L",
"44,8 L, el de dos moles"
],
"correcta": 1,
"explicacion": "En condiciones normales 1 mol ocupa 22,4 L, así que 0,5 mol ocupan 11,2 L (también PV = nRT con T = 273 K da 0,5·0,082·273/1 ≈ 11,2 L). 22,4 L es el volumen de un mol entero y 44,8 L el de dos moles."
},
{
"id": "qui-032",
"tema": "q5",
"nivel": 2,
"enunciado": "Una mezcla contiene 2 mol de N₂ y 3 mol de O₂ y su presión total es 5 atm. ¿Cuál es la presión parcial del O₂?",
"opciones": [
"2 atm",
"2,5 atm",
"3 atm",
"5 atm"
],
"correcta": 2,
"explicacion": "Fracción molar de O₂ = 3/(2 + 3) = 0,6, y por la ley de Dalton P(O₂) = 0,6·5 = 3 atm. 2 atm es la presión del N₂; 2,5 atm supondría que cada gas ejerce la mitad y 5 atm es la presión total."
},
{
"id": "qui-033",
"tema": "q5",
"nivel": 1,
"enunciado": "Una reacción tiene ΔH = −200 kJ. ¿Qué significa ese signo?",
"opciones": [
"La reacción es exotérmica: desprende 200 kJ de calor al entorno",
"La reacción es endotérmica: absorbe 200 kJ de calor procedente del entorno",
"La reacción no es espontánea a ninguna temperatura",
"La reacción necesita energía de activación igual a 200 kJ"
],
"correcta": 0,
"explicacion": "Un ΔH negativo indica que los productos tienen menos entalpía que los reactivos y se libera calor (exotérmica). Absorber calor corresponde a ΔH > 0. El signo de ΔH por sí solo no decide la espontaneidad ni es la energía de activación."
},
{
"id": "qui-034",
"tema": "q5",
"nivel": 2,
"enunciado": "Datos: A → B, ΔH = +40 kJ; B → C, ΔH = −90 kJ. ¿Cuánto vale ΔH para A → C?",
"opciones": [
"+130 kJ",
"−50 kJ",
"−130 kJ",
"50 kJ"
],
"correcta": 1,
"explicacion": "Por la ley de Hess, al sumar las dos etapas A → B → C se suman las entalpías: +40 + (−90) = −50 kJ. +130 y −130 salen de ignorar el signo de alguna de ellas, y +50 de cambiar el signo del resultado."
},
{
"id": "qui-035",
"tema": "q5",
"nivel": 3,
"enunciado": "Calcula ΔH de CH₄ + 2 O₂ → CO₂ + 2 H₂O(l) con ΔHf (kJ/mol): CH₄ = −75, CO₂ = −394, H₂O(l) = −286 (O₂ = 0).",
"opciones": [
"−605 kJ",
"891 kJ",
"−891 kJ",
"−1 041 kJ"
],
"correcta": 2,
"explicacion": "ΔH = [(−394) + 2(−286)] − [(−75) + 0] = −966 + 75 = −891 kJ. −605 resulta de no multiplicar por 2 el agua; +891 de invertir productos y reactivos; −1 041 de sumar los −75 en vez de restarlos."
},
{
"id": "qui-036",
"tema": "q5",
"nivel": 3,
"enunciado": "Una reacción tiene ΔH = +30 kJ y ΔS = +100 J/K, ambos constantes. ¿A qué temperaturas es espontánea?",
"opciones": [
"A temperaturas inferiores a 300 K",
"A cualquier temperatura, porque ΔS es positiva",
"A ninguna temperatura",
"A temperaturas superiores a 300 K"
],
"correcta": 3,
"explicacion": "ΔG = ΔH − TΔS < 0 exige T > ΔH/ΔS = 30 000 J / 100 J/K = 300 K. Con ΔH > 0 y ΔS > 0 es espontánea solo a temperatura alta; para que lo fuese a cualquier temperatura haría falta ΔH < 0 y ΔS > 0."
},
{
"id": "qui-037",
"tema": "q6",
"nivel": 1,
"enunciado": "¿Cuál es el efecto de un catalizador sobre una reacción química?",
"opciones": [
"Aumenta la energía de activación de la reacción y la ralentiza",
"Disminuye la energía de activación sin modificar ΔH ni Kc",
"Hace más negativo ΔH y así desprende más calor",
"Aumenta Kc y produce una mayor cantidad de productos"
],
"correcta": 1,
"explicacion": "El catalizador ofrece un camino alternativo con menor Eₐ, de modo que la reacción es más rápida, pero los estados inicial y final son los mismos: ΔH y Kc no cambian. Solo se alcanza antes el equilibrio, nunca se obtiene más producto."
},
{
"id": "qui-038",
"tema": "q6",
"nivel": 2,
"enunciado": "¿Por qué suele aumentar la velocidad de una reacción al elevar la temperatura?",
"opciones": [
"Porque disminuye la energía de activación de la reacción al subir la temperatura",
"Porque aumenta el número de moléculas de reactivo",
"Porque aumenta la fracción de moléculas con energía ≥ la de activación",
"Porque la reacción pasa a ser exotérmica"
],
"correcta": 2,
"explicacion": "Al calentar, las moléculas se mueven más y con más energía, y más choques superan la energía de activación. La temperatura no modifica Eₐ (eso lo hace un catalizador), no crea reactivo ni cambia el signo de ΔH."
},
{
"id": "qui-039",
"tema": "q6",
"nivel": 2,
"enunciado": "Una reacción tiene la ecuación de velocidad v = k[A]²[B]. Si se duplican a la vez [A] y [B], ¿cómo cambia la velocidad?",
"opciones": [
"Se multiplica por 4, como el orden de A",
"Se duplica",
"Se multiplica por 6",
"Se multiplica por 8"
],
"correcta": 3,
"explicacion": "Con [A] y [B] doble, v' = k(2[A])²(2[B]) = 4·2·k[A]²[B] = 8v. Si solo se duplicase [A] sería ×4, y si solo se duplicase [B], ×2. El orden total es 3, no se suman los factores."
},
{
"id": "qui-040",
"tema": "q6",
"nivel": 2,
"enunciado": "En el equilibrio H₂(g) + I₂(g) ⇌ 2 HI(g) las concentraciones son [H₂] = 0,1 M, [I₂] = 0,1 M y [HI] = 0,4 M. ¿Cuánto vale Kc?",
"opciones": [
"16",
"4",
"8",
"0,0625"
],
"correcta": 0,
"explicacion": "Kc = [HI]²/([H₂][I₂]) = 0,4²/(0,1·0,1) = 0,16/0,01 = 16. 4 resulta de no elevar [HI] al cuadrado, y 0,0625 es el valor de la reacción inversa (1/16)."
},
{
"id": "qui-041",
"tema": "q6",
"nivel": 2,
"enunciado": "En N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), ΔH < 0, ¿qué efecto tiene aumentar la presión total (reduciendo el volumen)?",
"opciones": [
"El equilibrio se desplaza hacia la izquierda, formándose más N₂ y H₂",
"No cambia nada, porque la presión no afecta a los equilibrios",
"El equilibrio se desplaza hacia la derecha, formándose más NH₃",
"Aumenta Kc, porque la reacción es exotérmica"
],
"correcta": 2,
"explicacion": "El aumento de presión favorece el lado con menos moles de gas: 4 mol de reactivos frente a 2 mol de producto, luego se desplaza hacia el NH₃. Un cambio de presión sí altera la posición del equilibrio cuando varía el número de moles gaseosos, pero Kc solo depende de la temperatura."
},
{
"id": "qui-042",
"tema": "q6",
"nivel": 3,
"enunciado": "Para A + B ⇌ C + D a cierta temperatura, Kc = 4. En un instante, [A] = [B] = 1 M y [C] = [D] = 3 M. ¿Qué ocurrirá?",
"opciones": [
"El sistema evoluciona hacia los productos, porque Q = 9 es mayor que Kc, así que le faltan productos",
"El sistema está en equilibrio, porque hay más productos que reactivos",
"El sistema evoluciona hacia los reactivos, porque Q = 3 es menor que Kc",
"El sistema evoluciona hacia los reactivos, porque Q = 9 es mayor que Kc"
],
"correcta": 3,
"explicacion": "Q = [C][D]/([A][B]) = 3·3/(1·1) = 9. Como Q > Kc = 4 hay demasiados productos, y la reacción neta va hacia la izquierda hasta que Q baje a 4. Q = 3 no sale de los datos, y tener más productos no implica equilibrio."
},
{
"id": "qui-043",
"tema": "q6",
"nivel": 3,
"enunciado": "Una reacción exotérmica está en equilibrio. Si se aumenta la temperatura, ¿qué ocurre con el equilibrio y con Kc?",
"opciones": [
"Se desplaza hacia los reactivos y Kc disminuye",
"Se desplaza hacia los productos y Kc aumenta, favoreciendo el sentido directo",
"Se desplaza hacia los reactivos y Kc no cambia",
"No se desplaza, y Kc tampoco cambia"
],
"correcta": 0,
"explicacion": "Según Le Châtelier, al calentar se favorece el sentido endotérmico, que en una reacción exotérmica es el inverso; por ello disminuyen los productos y Kc baja. Kc depende de la temperatura, así que no puede permanecer constante si el equilibrio se desplaza por T."
},
{
"id": "qui-044",
"tema": "q7",
"nivel": 1,
"enunciado": "¿Cuál es el pH de una disolución de HCl 0,01 M a 25 °C?",
"opciones": [
"12",
"2",
"1",
"0,01"
],
"correcta": 1,
"explicacion": "El HCl es un ácido fuerte monoprótico, [H⁺] = 0,01 = 10⁻² M y pH = 2. 12 sería el pH de una base de igual concentración y 1 corresponde a [H⁺] = 0,1 M; 0,01 es la concentración, no el pH."
},
{
"id": "qui-045",
"tema": "q7",
"nivel": 1,
"enunciado": "¿Cuál es el pH de una disolución de NaOH 0,001 M a 25 °C?",
"opciones": [
"3",
"10",
"14",
"11"
],
"correcta": 3,
"explicacion": "NaOH es una base fuerte: [OH⁻] = 10⁻³ M, pOH = 3 y pH = 14 − 3 = 11. El valor 3 es el pOH; 10 resultaría de [OH⁻] = 10⁻⁴ M, y 14 sería el pH de una base 1 M, mil veces más concentrada."
},
{
"id": "qui-046",
"tema": "q7",
"nivel": 2,
"enunciado": "Una disolución tiene pH = 4 a 25 °C. ¿Cuánto valen [H⁺] y [OH⁻]?",
"opciones": [
"[H⁺] = 10⁻⁴ M y [OH⁻] = 10⁻¹⁰ M",
"[H⁺] = 10⁻¹⁰ M y [OH⁻] = 10⁻⁴ M",
"[H⁺] = 4 M y [OH⁻] = 10 M",
"[H⁺] = 10⁻⁴ M y [OH⁻] = 10⁻⁴ M, ambos iguales"
],
"correcta": 0,
"explicacion": "pH = 4 implica [H⁺] = 10⁻⁴ M, y con Kw = [H⁺][OH⁻] = 10⁻¹⁴ resulta [OH⁻] = 10⁻¹⁰ M. Intercambiar ambos valores corresponde a un pH de 10, y ambos iguales solo ocurre en el agua neutra (pH 7)."
},
{
"id": "qui-047",
"tema": "q7",
"nivel": 3,
"enunciado": "Un ácido débil HA 0,1 M tiene Kₐ = 1·10⁻⁵. Suponiendo que se disocia muy poco, ¿cuál es su pH?",
"opciones": [
"5",
"3",
"1",
"4"
],
"correcta": 1,
"explicacion": "[H⁺] ≈ √(Kₐ·c) = √(10⁻⁵·10⁻¹) = √10⁻⁶ = 10⁻³ M, luego pH = 3. Un pH de 1 correspondería a un ácido fuerte 0,1 M, que se disocia por completo; 5 sale de tomar Kₐ como [H⁺]."
},
{
"id": "qui-048",
"tema": "q7",
"nivel": 2,
"enunciado": "¿Qué volumen de NaOH 0,1 M se necesita para neutralizar 25 mL de HCl 0,2 M?",
"opciones": [
"25 mL",
"12,5 mL",
"50 mL",
"100 mL"
],
"correcta": 2,
"explicacion": "n(HCl) = 0,2·0,025 = 0,005 mol, que reaccionan 1:1 con NaOH: V = 0,005/0,1 = 0,05 L = 50 mL. 25 mL solo valdría si ambas concentraciones fueran iguales, y 12,5 mL o 100 mL salen de operar mal las concentraciones."
},
{
"id": "qui-049",
"tema": "q7",
"nivel": 2,
"enunciado": "En la reacción NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, ¿cuál es el ácido conjugado de la base NH₃?",
"opciones": [
"NH₄⁺",
"OH⁻",
"H₂O",
"NH₂⁻"
],
"correcta": 0,
"explicacion": "El NH₃ actúa como base al aceptar un protón del agua y se convierte en NH₄⁺, su ácido conjugado. El OH⁻ es la base conjugada del H₂O (que aquí actúa como ácido) y el NH₂⁻ resultaría de perder un protón, no de ganarlo."
},
{
"id": "qui-050",
"tema": "q7",
"nivel": 3,
"enunciado": "Se mezclan 100 mL de HCl 0,1 M con 100 mL de NaOH 0,08 M. ¿Cuál es el pH de la mezcla? (volúmenes aditivos)",
"opciones": [
"1",
"2",
"7",
"12"
],
"correcta": 1,
"explicacion": "n(H⁺) = 0,01 mol y n(OH⁻) = 0,008 mol, sobran 0,002 mol de H⁺ en 0,2 L: [H⁺] = 0,01 M, pH = 2. El pH 7 solo aparecería con cantidades iguales; 1 sería el del HCl sin neutralizar y 12 el de una mezcla con exceso de base."
},
{
"id": "qui-051",
"tema": "q8",
"nivel": 1,
"enunciado": "¿Cuál es el número de oxidación del manganeso en el KMnO₄?",
"opciones": [
"+2",
"+4",
"+7",
"+6"
],
"correcta": 2,
"explicacion": "K = +1 y O = −2 (cuatro átomos, −8), y la suma debe ser 0: +1 + x − 8 = 0, luego x = +7. +2 es el Mn en Mn²⁺ y +4 en el MnO₂; +6 corresponde al manganato MnO₄²⁻."
},
{
"id": "qui-052",
"tema": "q8",
"nivel": 2,
"enunciado": "En la reacción Zn + Cu²⁺ → Zn²⁺ + Cu, ¿qué especie actúa como agente reductor?",
"opciones": [
"Cu²⁺, porque se reduce pasando a Cu",
"Zn²⁺, porque está cargado",
"Cu, porque es el producto sólido",
"Zn, porque se oxida pasando a Zn²⁺"
],
"correcta": 3,
"explicacion": "El Zn pierde 2 electrones (0 → +2): se oxida y por eso reduce al cobre, de modo que es el reductor. El Cu²⁺ gana electrones, y es el oxidante. Los productos Zn²⁺ y Cu no son los agentes de esta reacción."
},
{
"id": "qui-053",
"tema": "q8",
"nivel": 2,
"enunciado": "¿Cuál es el número de oxidación del cromo en el ion dicromato, Cr₂O₇²⁻?",
"opciones": [
"+7",
"+6",
"+3",
"+12"
],
"correcta": 1,
"explicacion": "Siete oxígenos suman −14 y la carga total es −2, así que los dos Cr suman +12 y cada uno vale +6. +7 es el número del Mn en el permanganato, +3 es el del Cr³⁺ y +12 es la suma de los dos átomos, no el valor de cada uno."
},
{
"id": "qui-054",
"tema": "q8",
"nivel": 2,
"enunciado": "En medio ácido, ¿cuántos electrones intervienen en la semirreacción MnO₄⁻ → Mn²⁺ (ajustada con H⁺ y H₂O)?",
"opciones": [
"7 electrones ganados, el nº de oxidación inicial",
"5 electrones cedidos",
"5 electrones ganados",
"2 e⁻ ganados"
],
"correcta": 2,
"explicacion": "El Mn pasa de +7 a +2: gana 5 electrones (reducción). MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O queda ajustada también en carga (−1 + 8 − 5 = +2). En una reducción siempre se ganan electrones, no se ceden."
},
{
"id": "qui-055",
"tema": "q8",
"nivel": 2,
"enunciado": "En la pila Daniell, con E°(Zn²⁺/Zn) = −0,76 V y E°(Cu²⁺/Cu) = +0,34 V, ¿cuánto vale E° de la pila y cuál es el cátodo?",
"opciones": [
"1,10 V; el cátodo es el electrodo de cinc",
"0,42 V; el cátodo es el electrodo de cobre",
"−1,10 V; el cátodo es el electrodo de cobre",
"1,10 V; el cátodo es el electrodo de cobre"
],
"correcta": 3,
"explicacion": "E° = E°cátodo − E°ánodo = 0,34 − (−0,76) = 1,10 V; en el cátodo se reduce la especie de mayor potencial de reducción, el Cu²⁺. El cinc es el ánodo (se oxida). 0,42 V sale de sumar mal los potenciales, y un valor negativo indicaría una pila no espontánea."
},
{
"id": "qui-056",
"tema": "q8",
"nivel": 3,
"enunciado": "Se hace pasar una corriente de 2 A durante 4 825 s por una disolución de AgNO₃. ¿Qué masa de plata se deposita? (Ag = 108; F = 96 500 C/mol)",
"opciones": [
"10,8 g",
"5,4 g",
"21,6 g",
"1,08 g, con 0,01 mol de e⁻"
],
"correcta": 0,
"explicacion": "Carga = 2·4 825 = 9 650 C; n(e⁻) = 9 650/96 500 = 0,1 mol, y como Ag⁺ + e⁻ → Ag se depositan 0,1 mol = 0,1·108 = 10,8 g. 5,4 g supondría 2 e⁻ por átomo, y los otros valores resultan de errores de potencias de 10."
},
{
"id": "qui-057",
"tema": "q8",
"nivel": 3,
"enunciado": "En medio ácido, 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → 5 Fe³⁺ + Mn²⁺ + 4 H₂O. ¿Cuántos moles de Fe²⁺ se oxidan con 0,02 mol de MnO₄⁻?",
"opciones": [
"0,02 mol",
"0,04 mol",
"0,10 mol",
"0,50 mol"
],
"correcta": 2,
"explicacion": "La relación molar es 5 Fe²⁺ por cada MnO₄⁻, así que 0,02·5 = 0,10 mol de Fe²⁺. 0,02 supone una relación 1:1; 0,04 sale de usar 2 en lugar de 5, y 0,50 sería multiplicar por 25."
}
]
};
