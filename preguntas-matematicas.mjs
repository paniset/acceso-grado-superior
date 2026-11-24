// Generado por generar.py desde datos/materias. No editar a mano.
export default {
"id": "matematicas",
"nombre": "Matemáticas",
"idioma": "es",
"idiomaExplicacion": "es",
"temas": [
{
"id": "m1",
"titulo": "Números reales, potencias, raíces y notación científica"
},
{
"id": "m2",
"titulo": "Proporcionalidad y porcentajes"
},
{
"id": "m3",
"titulo": "Polinomios e identidades notables"
},
{
"id": "m4",
"titulo": "Ecuaciones de 1.º y 2.º grado, bicuadradas y racionales"
},
{
"id": "m5",
"titulo": "Sistemas de ecuaciones e inecuaciones"
},
{
"id": "m6",
"titulo": "Funciones: dominio, recta, parábola, exponencial y gráficas"
},
{
"id": "m7",
"titulo": "Trigonometría y geometría plana"
},
{
"id": "m8",
"titulo": "Geometría del espacio y vectores básicos"
},
{
"id": "m9",
"titulo": "Estadística: medidas y tablas"
},
{
"id": "m10",
"titulo": "Probabilidad: Laplace, sucesos compuestos y diagramas de árbol"
}
],
"preguntas": [
{
"id": "mat-001",
"tema": "m1",
"nivel": 1,
"enunciado": "El valor de (2³ · 2⁴) / 2² es:",
"opciones": [
"64",
"128",
"16",
"32"
],
"correcta": 3,
"explicacion": "Se suman los exponentes del numerador (3 + 4 = 7) y se restan los del denominador: 2⁷⁻² = 2⁵ = 32. 128 sale de olvidar la división entre 2²."
},
{
"id": "mat-002",
"tema": "m1",
"nivel": 1,
"enunciado": "Al simplificar √48 se obtiene:",
"opciones": [
"2√6",
"4√3",
"6√2",
"24"
],
"correcta": 1,
"explicacion": "48 = 16·3, así que √48 = √16 · √3 = 4√3 (≈ 6,93). 2√6 ≈ 4,9 y 6√2 ≈ 8,5 no coinciden; 24 es 48/2."
},
{
"id": "mat-003",
"tema": "m1",
"nivel": 2,
"enunciado": "Calcula (3·10⁵) · (4·10⁻²) y exprésalo en notación científica.",
"opciones": [
"1,2·10⁴",
"7·10³",
"1,2·10³",
"1,2·10⁷"
],
"correcta": 0,
"explicacion": "3·4 = 12 y 10⁵·10⁻² = 10³, luego 12·10³. Para que el número esté entre 1 y 10 se pasa a 1,2·10⁴. 7·10³ sale de sumar en vez de multiplicar; 1,2·10³ renormaliza mal: al pasar de 12 a 1,2 hay que sumar 1 al exponente."
},
{
"id": "mat-004",
"tema": "m1",
"nivel": 2,
"enunciado": "Un virus mide 1,2·10⁻⁷ m. ¿Cuántos virus colocados en fila hacen falta para cubrir 6 mm?",
"opciones": [
"5 000",
"500 000",
"50 000",
"720"
],
"correcta": 2,
"explicacion": "6 mm = 6·10⁻³ m. Se divide: (6·10⁻³)/(1,2·10⁻⁷) = 5·10⁴ = 50 000. 5 000 y 500 000 fallan al restar exponentes (−3 − (−7) = 4); 720 sale de multiplicar en lugar de dividir."
},
{
"id": "mat-005",
"tema": "m1",
"nivel": 1,
"enunciado": "¿Cuál de estos números es irracional?",
"opciones": [
"√9",
"√2",
"0,121212… (periódico)",
"3/7"
],
"correcta": 1,
"explicacion": "√2 tiene infinitos decimales sin periodo. √9 = 3, el decimal periódico y 3/7 se pueden escribir como fracción, así que son racionales."
},
{
"id": "mat-006",
"tema": "m1",
"nivel": 2,
"enunciado": "El valor de (2/3)⁻² es:",
"opciones": [
"4/9",
"−4/9",
"9/4",
"−9/4"
],
"correcta": 2,
"explicacion": "El exponente negativo invierte la fracción: (2/3)⁻² = (3/2)² = 9/4. 4/9 sería (2/3)². El signo menos del exponente no cambia el signo del resultado."
},
{
"id": "mat-007",
"tema": "m1",
"nivel": 2,
"enunciado": "Racionaliza y simplifica 6/√3.",
"opciones": [
"3√2",
"√3",
"18",
"2√3"
],
"correcta": 3,
"explicacion": "6/√3 = 6√3/3 = 2√3 (≈ 3,46). Comprobación: 6/1,732 ≈ 3,46. 3√2 ≈ 4,24, √3 ≈ 1,73 y 18 no coinciden."
},
{
"id": "mat-008",
"tema": "m1",
"nivel": 3,
"enunciado": "¿Qué intervalo representa el conjunto de números x que cumplen |x − 3| ≤ 2?",
"opciones": [
"[1, 5]",
"(1, 5)",
"[−1, 5]",
"(−∞, 1] ∪ [5, ∞)"
],
"correcta": 0,
"explicacion": "|x − 3| ≤ 2 equivale a −2 ≤ x − 3 ≤ 2, es decir, 1 ≤ x ≤ 5. Los extremos se incluyen por el ≤. Con ≥ saldría el último intervalo."
},
{
"id": "mat-009",
"tema": "m2",
"nivel": 1,
"enunciado": "Seis operarios tardan 10 días en pintar un edificio. Con el mismo ritmo, ¿cuántos días tardarían 15 operarios?",
"opciones": [
"25 días",
"4 días",
"6 días",
"2,5 días"
],
"correcta": 1,
"explicacion": "Es proporcionalidad inversa: 6·10 = 60 jornadas de trabajo; 60/15 = 4 días. 25 sale de tratarla como directa (10·15/6)."
},
{
"id": "mat-010",
"tema": "m2",
"nivel": 1,
"enunciado": "En un mapa a escala 1:50 000, dos pueblos están a 3,5 cm. ¿Qué distancia real hay entre ellos?",
"opciones": [
"1,75 km",
"17,5 km",
"175 m",
"0,175 km"
],
"correcta": 0,
"explicacion": "3,5 · 50 000 = 175 000 cm = 1 750 m = 1,75 km. Los otros resultados son errores de conversión de unidades en una potencia de 10."
},
{
"id": "mat-011",
"tema": "m2",
"nivel": 2,
"enunciado": "Un producto cuesta 80 €. Primero sube un 25 % y después baja un 20 %. ¿Cuál es el precio final?",
"opciones": [
"84 €",
"85 €",
"76 €",
"80 €"
],
"correcta": 3,
"explicacion": "80·1,25 = 100 y 100·0,80 = 80. Los porcentajes no se suman: +25 % y −20 % no equivalen a +5 % (que daría 84 €)."
},
{
"id": "mat-012",
"tema": "m2",
"nivel": 2,
"enunciado": "Una factura tiene una base imponible de 250 € y un IVA del 21 %. ¿Cuál es el total a pagar?",
"opciones": [
"52,50 €",
"271,00 €",
"302,50 €",
"197,50 €"
],
"correcta": 2,
"explicacion": "IVA = 250·0,21 = 52,50 €. Total = 250 + 52,50 = 302,50 € (o 250·1,21). 52,50 € es solo el IVA; 197,50 € resultaría de restarlo."
},
{
"id": "mat-013",
"tema": "m2",
"nivel": 2,
"enunciado": "Pagas 121 € por un artículo con el IVA del 21 % incluido. ¿Cuál era el precio sin IVA?",
"opciones": [
"95,59 €",
"110 €",
"146,41 €",
"100 €"
],
"correcta": 3,
"explicacion": "Precio con IVA = base·1,21, luego base = 121/1,21 = 100 €. Si se resta el 21 % de 121 se obtiene 95,59 € (error típico). 146,41 € es 121·1,21."
},
{
"id": "mat-014",
"tema": "m2",
"nivel": 2,
"enunciado": "Un capital de 4 000 € se coloca a interés simple del 3 % anual durante 5 años. ¿Qué interés produce?",
"opciones": [
"637,10 €",
"120 €",
"600 €",
"3 000 €"
],
"correcta": 2,
"explicacion": "Interés simple: I = 4000·0,03·5 = 600 €. 637,10 € sería el interés con capitalización compuesta; 120 € es el interés de un solo año."
},
{
"id": "mat-015",
"tema": "m2",
"nivel": 3,
"enunciado": "Se depositan 2 000 € al 5 % de interés compuesto anual. ¿Qué capital se tiene al cabo de 3 años?",
"opciones": [
"2 315,25 €",
"2 300,00 €",
"2 250,00 €",
"2 415,25 €"
],
"correcta": 0,
"explicacion": "2000·1,05³ = 2000·1,157625 = 2 315,25 €. Comprobación año a año: 2100 → 2205 → 2315,25. 2 300 € es el resultado con interés simple."
},
{
"id": "mat-016",
"tema": "m2",
"nivel": 3,
"enunciado": "Un abrigo de 120 € tiene un 30 % de descuento en rebajas y, además, un 10 % adicional por pagar con tarjeta, aplicado sobre el precio ya rebajado. ¿Cuánto cuesta?",
"opciones": [
"72,00 €",
"75,60 €",
"80,00 €",
"84,00 €"
],
"correcta": 1,
"explicacion": "120·0,70 = 84 y 84·0,90 = 75,60 €. El descuento total no es el 40 % (daría 72 €) porque el segundo 10 % se aplica sobre 84, no sobre 120."
},
{
"id": "mat-017",
"tema": "m3",
"nivel": 1,
"enunciado": "Desarrolla (x + 3)².",
"opciones": [
"x² + 9",
"x² + 3x + 9",
"x² + 6x + 9",
"x² + 6x + 3"
],
"correcta": 2,
"explicacion": "(a + b)² = a² + 2ab + b² = x² + 2·3·x + 9 = x² + 6x + 9. x² + 9 olvida el doble producto."
},
{
"id": "mat-018",
"tema": "m3",
"nivel": 1,
"enunciado": "Calcula P(−2) para P(x) = x³ − 2x + 1.",
"opciones": [
"−3",
"−11",
"5",
"13"
],
"correcta": 0,
"explicacion": "(−2)³ = −8; −2·(−2) = +4; así P(−2) = −8 + 4 + 1 = −3. Los errores típicos son usar (−2)³ = 8 o mal el signo del término −2x."
},
{
"id": "mat-019",
"tema": "m3",
"nivel": 2,
"enunciado": "El resultado de (2x − 5)(2x + 5) es:",
"opciones": [
"4x² + 25",
"4x² − 25",
"4x² − 20x + 25",
"2x² − 25"
],
"correcta": 1,
"explicacion": "Suma por diferencia: (2x)² − 5² = 4x² − 25. 4x² − 20x + 25 es (2x − 5)²."
},
{
"id": "mat-020",
"tema": "m3",
"nivel": 2,
"enunciado": "El cociente de (x² − 5x + 6) : (x − 2) es:",
"opciones": [
"x + 3",
"x − 6",
"x + 2",
"x − 3"
],
"correcta": 3,
"explicacion": "Comprobación: (x − 2)(x − 3) = x² − 3x − 2x + 6 = x² − 5x + 6. También, x² − 5x + 6 se anula en x = 2, así que x − 2 es factor."
},
{
"id": "mat-021",
"tema": "m3",
"nivel": 2,
"enunciado": "¿Cuál es el resto de dividir P(x) = x³ − 3x² + 2x + 5 entre (x − 3)?",
"opciones": [
"−55",
"5",
"11",
"6"
],
"correcta": 2,
"explicacion": "Teorema del resto: P(3) = 27 − 27 + 6 + 5 = 11. Con x = −3 saldría −55 (confundir x − 3 con x + 3); 6 olvida el término independiente."
},
{
"id": "mat-022",
"tema": "m3",
"nivel": 2,
"enunciado": "La factorización de x² − 5x − 14 es:",
"opciones": [
"(x + 7)(x − 2)",
"(x − 7)(x − 2)",
"(x + 14)(x − 1)",
"(x − 7)(x + 2)"
],
"correcta": 3,
"explicacion": "Se buscan dos números de producto −14 y suma −5: −7 y 2. Comprobación: (x − 7)(x + 2) = x² − 5x − 14. (x + 7)(x − 2) daría +5x."
},
{
"id": "mat-023",
"tema": "m3",
"nivel": 3,
"enunciado": "Un jardín cuadrado de lado x metros se amplía de modo que cada lado mide 3 m más. ¿Cuántos m² aumenta su área?",
"opciones": [
"6x + 9",
"x² + 9",
"6x",
"9"
],
"correcta": 0,
"explicacion": "Área nueva = (x + 3)² = x² + 6x + 9. El aumento es (x² + 6x + 9) − x² = 6x + 9. Olvidar el doble producto da x² + 9 o solo 9."
},
{
"id": "mat-024",
"tema": "m3",
"nivel": 3,
"enunciado": "Simplifica (x² − 4)/(x² + 4x + 4).",
"opciones": [
"(x + 2)/(x − 2)",
"(x − 2)/(x + 2)",
"(x − 2)/(x + 4)",
"(x − 4)/(x + 4)"
],
"correcta": 1,
"explicacion": "Numerador = (x − 2)(x + 2); denominador = (x + 2)². Se cancela (x + 2) y queda (x − 2)/(x + 2). No se pueden cancelar los x² ni los números sueltos."
},
{
"id": "mat-025",
"tema": "m4",
"nivel": 1,
"enunciado": "Resuelve 3x − 7 = 2x + 5.",
"opciones": [
"x = −2",
"x = 12",
"x = 2",
"x = −12"
],
"correcta": 1,
"explicacion": "3x − 2x = 5 + 7, luego x = 12. Comprobación: 36 − 7 = 29 y 24 + 5 = 29."
},
{
"id": "mat-026",
"tema": "m4",
"nivel": 1,
"enunciado": "La suma de tres números enteros consecutivos es 72. ¿Cuál es el mayor?",
"opciones": [
"24",
"23",
"26",
"25"
],
"correcta": 3,
"explicacion": "Si son x − 1, x y x + 1, su suma es 3x = 72, así que x = 24 y el mayor es 25. Comprobación: 23 + 24 + 25 = 72."
},
{
"id": "mat-027",
"tema": "m4",
"nivel": 2,
"enunciado": "Las soluciones de x² − 5x + 6 = 0 son:",
"opciones": [
"x = −2 y x = −3",
"x = 1 y x = 6",
"x = 2 y x = 3",
"x = −1 y x = −6"
],
"correcta": 2,
"explicacion": "Δ = 25 − 24 = 1 y x = (5 ± 1)/2 = 3 o 2. Comprobación: suma 5 y producto 6. Con signos cambiados la suma sería −5."
},
{
"id": "mat-028",
"tema": "m4",
"nivel": 2,
"enunciado": "Resuelve 2x² − 8x = 0.",
"opciones": [
"x = 0 y x = 4",
"x = 4 solamente",
"x = 0 y x = −4",
"x = 2 y x = −2"
],
"correcta": 0,
"explicacion": "Se saca factor común: 2x(x − 4) = 0, luego x = 0 o x = 4. Dividir entre x pierde la solución x = 0. x = ±2 sería la solución de 2x² − 8 = 0."
},
{
"id": "mat-029",
"tema": "m4",
"nivel": 2,
"enunciado": "¿Cuáles son las soluciones reales de x⁴ − 13x² + 36 = 0?",
"opciones": [
"x = 4 y x = 9",
"x = 2 y x = 3",
"x = ±4 y x = ±9",
"x = ±2 y x = ±3"
],
"correcta": 3,
"explicacion": "Con t = x²: t² − 13t + 36 = 0 → t = 4 o t = 9. Entonces x = ±2 o x = ±3. Comprobación en x = 2: 16 − 52 + 36 = 0. Hay cuatro soluciones, no dos."
},
{
"id": "mat-030",
"tema": "m4",
"nivel": 2,
"enunciado": "Resuelve 3/(x − 1) = 2/x.",
"opciones": [
"x = −2",
"x = 2",
"x = 1",
"x = 3"
],
"correcta": 0,
"explicacion": "Multiplicando en cruz: 3x = 2(x − 1) → x = −2. Comprobación: 3/(−3) = −1 y 2/(−2) = −1. x = 1 anularía el denominador."
},
{
"id": "mat-031",
"tema": "m4",
"nivel": 3,
"enunciado": "Un rectángulo tiene un largo 3 m mayor que el ancho y un área de 40 m². ¿Cuánto mide el ancho?",
"opciones": [
"8 m",
"4 m",
"5 m",
"6,5 m"
],
"correcta": 2,
"explicacion": "x(x + 3) = 40 → x² + 3x − 40 = 0 → x = (−3 ± 13)/2 = 5 o −8; se descarta −8. Ancho 5 m (el largo es 8 m, el distractor). Comprobación: 5·8 = 40."
},
{
"id": "mat-032",
"tema": "m4",
"nivel": 3,
"enunciado": "Un taller cobra 45 € fijos más 30 € por hora; otro cobra 20 € fijos más 35 € por hora. ¿Con cuántas horas de trabajo cuestan lo mismo?",
"opciones": [
"4 horas",
"5 horas",
"13 horas",
"25 horas"
],
"correcta": 1,
"explicacion": "45 + 30h = 20 + 35h → 25 = 5h → h = 5. Comprobación: 45 + 150 = 195 y 20 + 175 = 195."
},
{
"id": "mat-033",
"tema": "m5",
"nivel": 1,
"enunciado": "Resuelve el sistema x + y = 10, x − y = 4.",
"opciones": [
"x = 3, y = 7",
"x = 7, y = 3",
"x = 6, y = 4",
"x = 14, y = −4"
],
"correcta": 1,
"explicacion": "Sumando: 2x = 14, x = 7 y y = 3. Comprobación: 7 + 3 = 10 y 7 − 3 = 4. (6, 4) solo cumple la primera."
},
{
"id": "mat-034",
"tema": "m5",
"nivel": 2,
"enunciado": "En un cine, 3 entradas de adulto y 2 infantiles cuestan 29 €; 1 de adulto y 4 infantiles cuestan 23 €. ¿Cuánto cuesta cada tipo?",
"opciones": [
"Adulto 4 €, infantil 7 €",
"Adulto 9 €, infantil 1 €",
"Adulto 7 €, infantil 4 €",
"Adulto 5 €, infantil 7 €"
],
"correcta": 2,
"explicacion": "De la segunda, a = 23 − 4i; en la primera: 69 − 12i + 2i = 29 → i = 4 y a = 7. Comprobación: 21 + 8 = 29 y 7 + 16 = 23. Ninguna otra opción cumple las dos ecuaciones (9 y 1, o 5 y 7, solo cumplen la primera)."
},
{
"id": "mat-035",
"tema": "m5",
"nivel": 2,
"enunciado": "Resuelve la inecuación 3x − 5 > 7.",
"opciones": [
"x > 4",
"x < 4",
"x > 2",
"x > 12"
],
"correcta": 0,
"explicacion": "3x > 12, luego x > 4 (se divide entre 3, positivo, y el sentido no cambia). Con x = 5: 10 > 7 es cierto."
},
{
"id": "mat-036",
"tema": "m5",
"nivel": 2,
"enunciado": "Resuelve −2x + 6 ≥ 0.",
"opciones": [
"x ≥ 3",
"x ≤ −3",
"x ≥ −3",
"x ≤ 3"
],
"correcta": 3,
"explicacion": "−2x ≥ −6; al dividir entre −2 la desigualdad se invierte: x ≤ 3. Con x = 0: 6 ≥ 0 es cierto."
},
{
"id": "mat-037",
"tema": "m5",
"nivel": 2,
"enunciado": "El sistema x + 2y = 4, 2x + 4y = 8 es:",
"opciones": [
"Compatible determinado con solución (4, 0)",
"Compatible indeterminado (infinitas soluciones)",
"Incompatible (sin solución)",
"Compatible determinado con dos soluciones"
],
"correcta": 1,
"explicacion": "La segunda ecuación es el doble de la primera, así que son la misma recta y hay infinitas soluciones. (4, 0) es solo una de ellas. Un sistema lineal nunca tiene exactamente dos soluciones."
},
{
"id": "mat-038",
"tema": "m5",
"nivel": 3,
"enunciado": "Dos números cumplen x + y = 5 y x·y = 6. ¿Cuánto vale x² + y²?",
"opciones": [
"19",
"25",
"11",
"13"
],
"correcta": 3,
"explicacion": "x² + y² = (x + y)² − 2xy = 25 − 12 = 13. Comprobación: los números son 2 y 3 y 4 + 9 = 13. 25 − 6 = 19 olvida el factor 2."
},
{
"id": "mat-039",
"tema": "m5",
"nivel": 3,
"enunciado": "Un tendero mezcla café de 8 €/kg con café de 12 €/kg para obtener 20 kg de mezcla a 9 €/kg. ¿Cuántos kg del café de 12 €/kg necesita?",
"opciones": [
"15 kg",
"10 kg",
"5 kg",
"4 kg"
],
"correcta": 2,
"explicacion": "x + y = 20 y 8x + 12y = 180 → 160 + 4y = 180 → y = 5 kg del caro (y x = 15 del barato). Comprobación: 120 + 60 = 180."
},
{
"id": "mat-040",
"tema": "m5",
"nivel": 3,
"enunciado": "¿Qué valores de x cumplen x² − 4x − 5 < 0?",
"opciones": [
"−1 < x < 5",
"x < −1 o x > 5",
"−5 < x < 1",
"−1 ≤ x ≤ 5"
],
"correcta": 0,
"explicacion": "Las raíces son x = −1 y x = 5 y la parábola abre hacia arriba, así que es negativa entre ellas. Comprobación: x = 0 da −5 < 0. Los extremos no se incluyen (desigualdad estricta)."
},
{
"id": "mat-041",
"tema": "m6",
"nivel": 1,
"enunciado": "El dominio de f(x) = √(x − 4) es:",
"opciones": [
"(4, +∞)",
"(−∞, 4]",
"ℝ (todos los reales)",
"[4, +∞)"
],
"correcta": 3,
"explicacion": "Se necesita x − 4 ≥ 0, es decir, x ≥ 4. En x = 4 la raíz vale 0, que está definida, así que el 4 se incluye."
},
{
"id": "mat-042",
"tema": "m6",
"nivel": 1,
"enunciado": "¿Cuál es la ecuación de la recta que pasa por (1, 3) y (3, 7)?",
"opciones": [
"y = 2x + 1",
"y = x + 2",
"y = 2x − 1",
"y = 3x"
],
"correcta": 0,
"explicacion": "Pendiente m = (7 − 3)/(3 − 1) = 2; y = 2x + n con 3 = 2 + n → n = 1. Comprobación con (3, 7): 6 + 1 = 7. y = x + 2 pasa por (1, 3) pero no por (3, 7)."
},
{
"id": "mat-043",
"tema": "m6",
"nivel": 2,
"enunciado": "El vértice de la parábola y = x² − 6x + 5 es:",
"opciones": [
"(−3, −4)",
"(3, −4)",
"(3, 4)",
"(6, 5)"
],
"correcta": 1,
"explicacion": "x = −b/2a = 6/2 = 3 y y = 9 − 18 + 5 = −4. Comprobación: y = (x − 3)² − 4. Como a > 0, es un mínimo."
},
{
"id": "mat-044",
"tema": "m6",
"nivel": 2,
"enunciado": "Una tarifa de telefonía cobra 12 € fijos más 0,05 € por minuto. Si la factura es de 27 €, ¿cuántos minutos se han consumido?",
"opciones": [
"540 minutos",
"240 minutos",
"300 minutos",
"780 minutos"
],
"correcta": 2,
"explicacion": "27 = 12 + 0,05x → 15 = 0,05x → x = 300. 540 olvida la cuota fija; 780 la suma en lugar de restarla."
},
{
"id": "mat-045",
"tema": "m6",
"nivel": 2,
"enunciado": "Un cultivo tiene 500 bacterias y se duplica cada hora: N(t) = 500·2ᵗ. ¿Cuántas habrá a las 4 horas?",
"opciones": [
"2 000",
"4 000",
"16 000",
"8 000"
],
"correcta": 3,
"explicacion": "N(4) = 500·2⁴ = 500·16 = 8 000. Comprobación: 500 → 1000 → 2000 → 4000 → 8000. 4 000 sale de multiplicar la base por el exponente (500·2·4); 2 000 es el valor a las 2 horas."
},
{
"id": "mat-046",
"tema": "m6",
"nivel": 2,
"enunciado": "En una gráfica, el volumen de agua de un depósito (en L) frente al tiempo (en min) es una recta que pasa por (0, 50) y (10, 20). ¿Qué indica su pendiente?",
"opciones": [
"El depósito se llena a 3 L por minuto",
"El depósito se vacía a 3 L por minuto",
"El depósito se vacía a 30 L por minuto",
"El depósito se vacía a 5 L por minuto"
],
"correcta": 1,
"explicacion": "m = (20 − 50)/(10 − 0) = −3. Es negativa, así que el volumen disminuye 3 L cada minuto. 30 sería la variación total en 10 minutos."
},
{
"id": "mat-047",
"tema": "m6",
"nivel": 3,
"enunciado": "El beneficio (en miles de €) de un negocio es B(x) = −x² + 10x − 16, con x en cientos de unidades vendidas. ¿Cuál es el beneficio máximo?",
"opciones": [
"5 mil €",
"25 mil €",
"9 mil €",
"−16 mil €"
],
"correcta": 2,
"explicacion": "El vértice está en x = −10/(−2) = 5 y B(5) = −25 + 50 − 16 = 9. El 5 es dónde se alcanza el máximo, no su valor; −16 es B(0)."
},
{
"id": "mat-048",
"tema": "m6",
"nivel": 3,
"enunciado": "¿En qué punto se cortan las rectas f(x) = 2x − 1 y g(x) = −x + 5?",
"opciones": [
"(2, 3)",
"(3, 2)",
"(1, 4)",
"(4, 1)"
],
"correcta": 0,
"explicacion": "2x − 1 = −x + 5 → 3x = 6 → x = 2 e y = 3. Comprobación: g(2) = 3. (1, 4) está en g pero no en f; (4, 1) también está solo en g."
},
{
"id": "mat-049",
"tema": "m7",
"nivel": 1,
"enunciado": "Una escalera de 5 m se apoya en una pared con el pie a 3 m de ella. ¿A qué altura llega?",
"opciones": [
"5,83 m",
"8 m",
"2 m",
"4 m"
],
"correcta": 3,
"explicacion": "h² + 3² = 5² → h² = 16 → h = 4 m (terna 3-4-5). 5,83 m sale de sumar los cuadrados (√34) en lugar de restar."
},
{
"id": "mat-050",
"tema": "m7",
"nivel": 1,
"enunciado": "El área de un círculo de 5 cm de radio es:",
"opciones": [
"10π cm²",
"5π cm²",
"25π cm²",
"100π cm²"
],
"correcta": 2,
"explicacion": "A = π·r² = π·25. 10π es la longitud de la circunferencia (2πr), no el área."
},
{
"id": "mat-051",
"tema": "m7",
"nivel": 2,
"enunciado": "A cierta hora, un poste de 2 m proyecta una sombra de 1,5 m. A la misma hora, un edificio proyecta una sombra de 30 m. ¿Qué altura tiene?",
"opciones": [
"40 m",
"22,5 m",
"32 m",
"60 m"
],
"correcta": 0,
"explicacion": "Por semejanza: 2/1,5 = h/30 → h = 40 m. 22,5 m sale de aplicar la razón al revés (30·1,5/2)."
},
{
"id": "mat-052",
"tema": "m7",
"nivel": 2,
"enunciado": "En un triángulo rectángulo la hipotenusa mide 13 y el cateto opuesto a α mide 5. ¿Cuánto vale tan α?",
"opciones": [
"12/5",
"5/12",
"5/13",
"12/13"
],
"correcta": 1,
"explicacion": "El cateto contiguo es √(169 − 25) = 12, luego tan α = opuesto/contiguo = 5/12. 5/13 es sen α y 12/13 es cos α."
},
{
"id": "mat-053",
"tema": "m7",
"nivel": 2,
"enunciado": "Desde un punto situado a 20 m de la base de un edificio se ve su parte más alta con un ángulo de elevación de 30°. ¿Qué altura tiene el edificio? (redondea a las centésimas)",
"opciones": [
"17,32 m",
"11,55 m",
"10,00 m",
"34,64 m"
],
"correcta": 1,
"explicacion": "tan 30° = h/20 → h = 20·tan 30° = 20·0,5774 = 11,55 m. 17,32 usaría el coseno; 10 el seno; 34,64 es 20/tan 30°."
},
{
"id": "mat-054",
"tema": "m7",
"nivel": 2,
"enunciado": "Un terreno con forma de trapecio tiene bases de 10 m y 6 m y una altura de 4 m. ¿Cuál es su área?",
"opciones": [
"64 m²",
"24 m²",
"40 m²",
"32 m²"
],
"correcta": 3,
"explicacion": "A = (10 + 6)·4/2 = 32 m². 64 olvida dividir entre 2. 24 y 40 usan una sola base."
},
{
"id": "mat-055",
"tema": "m7",
"nivel": 3,
"enunciado": "¿Cuál es el área de un triángulo equilátero de 6 cm de lado?",
"opciones": [
"9√3 cm²",
"18√3 cm²",
"18 cm²",
"36 cm²"
],
"correcta": 0,
"explicacion": "La altura es h = √(36 − 9) = 3√3. Área = 6·3√3/2 = 9√3 ≈ 15,59 cm². 18√3 olvida dividir entre 2; 18 usa h = 6."
},
{
"id": "mat-056",
"tema": "m7",
"nivel": 3,
"enunciado": "Una rueda de bicicleta tiene 40 cm de diámetro. ¿Cuántas vueltas da aproximadamente al recorrer 100 m? (redondea a las décimas)",
"opciones": [
"39,8 vueltas",
"159,2 vueltas",
"79,6 vueltas",
"250,0 vueltas"
],
"correcta": 2,
"explicacion": "Perímetro = π·0,40 = 1,2566 m; 100/1,2566 = 79,6. 39,8 sale de tomar 40 cm como radio; 159,2 de usar π·r en lugar de 2π·r (mitad del perímetro); 250 es 100/0,4."
},
{
"id": "mat-057",
"tema": "m8",
"nivel": 1,
"enunciado": "Un depósito cúbico tiene 2 m de arista. ¿Cuántos litros caben?",
"opciones": [
"800 L",
"8 000 L",
"80 000 L",
"6 000 L"
],
"correcta": 1,
"explicacion": "V = 2³ = 8 m³ y 1 m³ = 1 000 L, así que 8 000 L. 800 y 80 000 L fallan en la conversión, y 6 000 L no corresponde a 2³ = 8 m³."
},
{
"id": "mat-058",
"tema": "m8",
"nivel": 1,
"enunciado": "El volumen de un cilindro de 3 cm de radio y 10 cm de altura es:",
"opciones": [
"30π cm³",
"60π cm³",
"270π cm³",
"90π cm³"
],
"correcta": 3,
"explicacion": "V = π·r²·h = π·9·10 = 90π cm³. 60π es el área lateral (2πrh); 30π usa r en lugar de r²."
},
{
"id": "mat-059",
"tema": "m8",
"nivel": 2,
"enunciado": "Una piscina rectangular mide 10 m × 5 m y tiene 1,8 m de profundidad. ¿Cuántos litros de agua caben si se llena completamente?",
"opciones": [
"9 000 L",
"900 000 L",
"90 000 L",
"18 000 L"
],
"correcta": 2,
"explicacion": "V = 10·5·1,8 = 90 m³ = 90 000 L. Los otros valores fallan en la conversión de m³ a litros (1 m³ = 1 000 L)."
},
{
"id": "mat-060",
"tema": "m8",
"nivel": 2,
"enunciado": "El volumen de una esfera de 3 cm de radio es:",
"opciones": [
"36π cm³",
"12π cm³",
"108π cm³",
"27π cm³"
],
"correcta": 0,
"explicacion": "V = (4/3)·π·3³ = (4/3)·27π = 36π cm³. 108π es 4π·27 (olvida el 1/3); 12π usa r² en lugar de r³."
},
{
"id": "mat-061",
"tema": "m8",
"nivel": 2,
"enunciado": "El volumen de un cono de 6 cm de radio y 8 cm de altura es:",
"opciones": [
"96π cm³",
"288π cm³",
"48π cm³",
"120π cm³"
],
"correcta": 0,
"explicacion": "V = (1/3)·π·36·8 = 96π cm³. 288π es el volumen del cilindro con la misma base y altura (sin el 1/3)."
},
{
"id": "mat-062",
"tema": "m8",
"nivel": 2,
"enunciado": "Dados A(1, 2) y B(4, 6), ¿cuál es el módulo del vector AB?",
"opciones": [
"7",
"5",
"25",
"12"
],
"correcta": 1,
"explicacion": "AB = (3, 4) y |AB| = √(9 + 16) = 5. 7 suma las componentes y 25 olvida la raíz."
},
{
"id": "mat-063",
"tema": "m8",
"nivel": 3,
"enunciado": "Si u = (2, −1) y v = (−3, 4), el vector 2u + v es:",
"opciones": [
"(−1, 3)",
"(7, −6)",
"(1, 2)",
"(1, −2)"
],
"correcta": 2,
"explicacion": "2u = (4, −2) y sumando v: (4 − 3, −2 + 4) = (1, 2). (−1, 3) es u + v; (7, −6) es 2u − v."
},
{
"id": "mat-064",
"tema": "m8",
"nivel": 3,
"enunciado": "Los vectores u = (3, 2) y v = (2, −3) son:",
"opciones": [
"Paralelos",
"Iguales",
"Ni paralelos ni perpendiculares",
"Perpendiculares"
],
"correcta": 3,
"explicacion": "u·v = 3·2 + 2·(−3) = 0, así que son perpendiculares. No son paralelos porque 3/2 ≠ 2/(−3)."
},
{
"id": "mat-065",
"tema": "m9",
"nivel": 1,
"enunciado": "Las notas de cinco exámenes son 5, 6, 6, 9 y 10. ¿Cuál es la media?",
"opciones": [
"7,2",
"6",
"7",
"8"
],
"correcta": 0,
"explicacion": "Suma = 36 y 36/5 = 7,2. El 6 es la mediana y la moda, no la media."
},
{
"id": "mat-066",
"tema": "m9",
"nivel": 1,
"enunciado": "¿Cuál es la mediana de los datos 3, 9, 1, 7, 5, 11?",
"opciones": [
"7",
"5",
"9",
"6"
],
"correcta": 3,
"explicacion": "Ordenados: 1, 3, 5, 7, 9, 11. Hay 6 datos, así que la mediana es la media de los centrales: (5 + 7)/2 = 6."
},
{
"id": "mat-067",
"tema": "m9",
"nivel": 2,
"enunciado": "En una tienda se vendieron en un día: talla 38 (5 pares), 39 (8), 40 (12) y 41 (6). ¿Cuál es la talla media? (redondea a las centésimas)",
"opciones": [
"39,50",
"39,61",
"40,00",
"38,50"
],
"correcta": 1,
"explicacion": "Σxf = 190 + 312 + 480 + 246 = 1228 y N = 31; 1228/31 = 39,61. 40 es la moda; 39,5 es la media de las cuatro tallas sin ponderar."
},
{
"id": "mat-068",
"tema": "m9",
"nivel": 2,
"enunciado": "¿Cuál es la desviación típica poblacional de los datos 2, 4, 4, 4, 5, 5, 7, 9?",
"opciones": [
"4",
"2,14",
"2",
"5"
],
"correcta": 2,
"explicacion": "La media es 40/8 = 5. Los cuadrados de las desviaciones suman 9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32; varianza 32/8 = 4 y σ = 2. 4 es la varianza; 2,14 divide entre n − 1."
},
{
"id": "mat-069",
"tema": "m9",
"nivel": 2,
"enunciado": "La media de las notas de 5 alumnos es 6. Se incorpora un sexto alumno con un 12. ¿Cuál es la nueva media?",
"opciones": [
"9",
"8",
"6,5",
"7"
],
"correcta": 3,
"explicacion": "Suma anterior = 30; nueva suma = 42; 42/6 = 7. 9 sería la media de 6 y 12 sin tener en cuenta a los cinco alumnos."
},
{
"id": "mat-070",
"tema": "m9",
"nivel": 2,
"enunciado": "Se suma 3 a todos los datos de una muestra. ¿Qué ocurre con la desviación típica?",
"opciones": [
"No cambia",
"Aumenta en 3",
"Se multiplica por 3",
"Aumenta en 9"
],
"correcta": 0,
"explicacion": "Las desviaciones respecto a la media no cambian, porque la media también aumenta 3. Solo la multiplicación por un número cambiaría σ."
},
{
"id": "mat-071",
"tema": "m9",
"nivel": 3,
"enunciado": "La nota final se calcula así: examen 30 %, trabajo 20 % y proyecto 50 %. Con un 6, un 8 y un 7, respectivamente, ¿cuál es la nota final?",
"opciones": [
"7,0",
"6,9",
"6,5",
"7,4"
],
"correcta": 1,
"explicacion": "0,30·6 + 0,20·8 + 0,50·7 = 1,8 + 1,6 + 3,5 = 6,9. 7 sería la media aritmética sin ponderar."
},
{
"id": "mat-072",
"tema": "m9",
"nivel": 3,
"enunciado": "Número de hijos de 30 familias: 0 hijos (4 familias), 1 (9), 2 (12) y 3 (5). ¿Cuál es la mediana?",
"opciones": [
"1",
"1,5",
"2",
"15"
],
"correcta": 2,
"explicacion": "Con N = 30 la mediana está entre los datos 15.º y 16.º. Las frecuencias acumuladas son 4, 13, 25 y 30: ambos datos caen en «2 hijos». El 15 es la posición, no el valor."
},
{
"id": "mat-073",
"tema": "m10",
"nivel": 1,
"enunciado": "Se lanza un dado de 6 caras. ¿Cuál es la probabilidad de obtener un múltiplo de 3?",
"opciones": [
"1/6",
"1/2",
"2/3",
"1/3"
],
"correcta": 3,
"explicacion": "Los casos favorables son 3 y 6 (2 casos) de 6: 2/6 = 1/3."
},
{
"id": "mat-074",
"tema": "m10",
"nivel": 1,
"enunciado": "Una bolsa tiene 5 bolas rojas, 3 azules y 2 verdes. Se saca una al azar. ¿Cuál es la probabilidad de que sea azul?",
"opciones": [
"3/10",
"3/7",
"3/5",
"1/3"
],
"correcta": 0,
"explicacion": "Hay 10 bolas y 3 azules: 3/10. 3/7 compara azules con las no rojas, que no es lo que se pide."
},
{
"id": "mat-075",
"tema": "m10",
"nivel": 2,
"enunciado": "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 7?",
"opciones": [
"1/12",
"7/36",
"1/6",
"5/36"
],
"correcta": 2,
"explicacion": "Resultados favorables: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 de 36 → 6/36 = 1/6."
},
{
"id": "mat-076",
"tema": "m10",
"nivel": 2,
"enunciado": "Una bolsa tiene 4 bolas rojas y 6 azules. Se sacan dos sin reemplazamiento. ¿Cuál es la probabilidad de que ambas sean rojas?",
"opciones": [
"4/25",
"2/15",
"3/25",
"1/3"
],
"correcta": 1,
"explicacion": "P = 4/10 · 3/9 = 12/90 = 2/15. 4/25 sería con reemplazamiento (4/10·4/10)."
},
{
"id": "mat-077",
"tema": "m10",
"nivel": 2,
"enunciado": "Se lanza una moneda 3 veces. ¿Cuál es la probabilidad de obtener al menos una cara?",
"opciones": [
"1/8",
"3/8",
"1/2",
"7/8"
],
"correcta": 3,
"explicacion": "Suceso contrario: ninguna cara (tres cruces) = (1/2)³ = 1/8. Entonces P = 1 − 1/8 = 7/8."
},
{
"id": "mat-078",
"tema": "m10",
"nivel": 3,
"enunciado": "La máquina A produce el 60 % de las piezas y un 2 % salen defectuosas; la máquina B produce el 40 % y un 5 % salen defectuosas. Se elige una pieza al azar. ¿Qué probabilidad hay de que sea defectuosa?",
"opciones": [
"0,035",
"0,032",
"0,07",
"0,32"
],
"correcta": 1,
"explicacion": "Por el árbol: 0,6·0,02 + 0,4·0,05 = 0,012 + 0,020 = 0,032. 0,035 es la media simple de 2 % y 5 %, sin ponderar por el reparto de producción."
},
{
"id": "mat-079",
"tema": "m10",
"nivel": 3,
"enunciado": "En un grupo de 100 personas, 60 hablan inglés, 40 francés y 25 ambos idiomas. Si una persona habla francés, ¿qué probabilidad hay de que también hable inglés?",
"opciones": [
"5/12",
"1/4",
"5/8",
"3/5"
],
"correcta": 2,
"explicacion": "P(inglés | francés) = P(ambos)/P(francés) = 25/40 = 5/8. 5/12 = 25/60 condiciona al revés; 3/5 es P(inglés) sin condicionar."
},
{
"id": "mat-080",
"tema": "m10",
"nivel": 3,
"enunciado": "Si P(A) = 0,5, P(B) = 0,4 y P(A ∩ B) = 0,2, ¿cuánto vale P(A ∪ B)?",
"opciones": [
"0,7",
"0,9",
"0,5",
"0,3"
],
"correcta": 0,
"explicacion": "P(A ∪ B) = 0,5 + 0,4 − 0,2 = 0,7. 0,9 olvida restar la intersección."
}
]
};
