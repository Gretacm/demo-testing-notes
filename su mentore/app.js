
// NUMBER: sveikieji skaičiai, dešimtainiai skaičiai, NaN, Infinity, -Infinity
 
let number = NaN;
console.log(typeof number);
 
// dideliems skaičiams galime naudoti skyriklį, kuris neįtakoja pačios reikšmės:
let numberSkyriklis = 1_000_000;
console.log(numberSkyriklis);
 
// number gali būti iki ±9,007,199,254,740,991
 
// Matematiniai operatoriai: +, -, *, /, %, **
 
// number metodai:
 
// .toFixed(kiekSkaičiųPoKablelio) - nurodome, kiek skaičių po kablelio palikti
let pi = 3.14159
console.log(pi.toFixed(2)); // 3.14
 
// Number.isNan(x) - patikrina ar skaičius yra NaN
console.log(Number.isNaN(pi)); // false
console.log(!Number.isNaN(pi)); // true
 
// Number.isInteger() - patikrina ar skaičius yra sveikasis:
let numberInteger = 6
let numberInteger2 = 6.6
 
console.log(Number.isInteger(numberInteger), Number.isInteger(numberInteger2));
 
// Number.parseFloat() - išskiria realųjį skaičių iš string'o pradžios
let numberParseFloat = '3.14159hdjhdfk23434';
console.log(Number.parseFloat(numberParseFloat)); // 3.14159
 
// Number.parseInt() - išskiria sveikąjį skaičių iš string'o pradžios
let numberParseInt = '3.14159';
console.log(Number.parseInt(numberParseInt)); // 3
 
// Number.isSafeInteger() - patikrina ar skaičius gali būti saugomas kaip number ar reikia naudoti BigInt
console.log(Number.isSafeInteger(3)); // true
console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
 
// .toLocaleString()-verčia į nurodytą locale (grąžina stringą):
let numberLocale = 5.789;
console.log(numberLocale.toLocaleString('lt-LT')); // 5,789
 
// .toPrecision(kiekSkaitmenų palikti) - palieka tiek skaitmenų kiek mes nurodome (grąžina stringą)
let numberPrecision = 5.123456789;
console.log(numberPrecision.toPrecision()); // 5.123456789
console.log(numberPrecision.toPrecision(1)); // 5
console.log(numberPrecision.toPrecision(2)); // 5.1
console.log(numberPrecision.toPrecision(3)); // 5.12
console.log(numberPrecision.toPrecision(6)); // 5.12346
 
let numberPrecision2 = 195.123456789;
console.log(numberPrecision2.toPrecision()); // 195.123456789
console.log(numberPrecision2.toPrecision(1)); // 2e+2
console.log(numberPrecision2.toPrecision(2)); // 2.0e+2
console.log(numberPrecision2.toPrecision(3)); // 195
console.log(numberPrecision2.toPrecision(6)); // 195.123
 
// .toString() - paverčia skaičių į stringą
let numberString = 3.14159;
console.log(numberString.toString());
 
// .valueOf - ištraukia reikšmę
let numberValueOf = 5;
let numberValueOf2 = numberValueOf.valueOf();
console.log(numberValueOf, numberValueOf2);
 
 
// MATH metodai:
 
// 1. Apvalinimo metodai:
// a) Math.round(x) - suapvalina iki artimiausio sveikojo skaičiaus
console.log(Math.round('4.5')); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(-4.6)); // -5
 
// b) Math.ceil(x) - suapvalina skaičių į didesnę pusę
console.log(Math.ceil(4.01)); // 5
console.log(Math.ceil(-4.01)); // -4
 
// c) Math.floor(x) - suapvalina skaičių į mažesnę pusę
console.log(Math.floor(4.01)); // 4
console.log(Math.floor(-4.01)); // -5
 
// d) Math.trunc(x) - pašalina dešimtainę dalį
console.log(Math.trunc(4.01)); // 4
console.log(Math.trunc(-4.01)); // -4
 
// 2. Maksimumo ir minimumo paieška
// a) Math.max(2, 3, 4) - grąžina didžiausią iš perduotų skaičių
 
console.log(Math.max(5, 10, 2, 78, 12)); // 78
console.log(Math.max()); // -Infinity
 
// b) Math.min(2, 3, 4) - grąžina mažiausią iš perduotų skaičių
 
console.log(Math.min(5, 10, 2, -78, 12)); // -78
console.log(Math.min()); // Infinity
 
// 3. Atsitiktinių skaičių generavimas
// Math.random() - grąžina atsitiktinį skaičių nuo 0(imtinai) iki 1 (imtinai)
 
console.log(Math.random()); // 0.628962383048338
console.log(Math.floor(Math.random() * 10 + 1)); // 5
 
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
 
console.log(getRandomIntInclusive(10, 50)); // 14
 
// 4. Absoliuti reikšmė
// Math.abs(x) - grąžina absoliučią skaičiaus reikšmę
 
console.log(Math.abs(-4.55)); // 4.55
console.log(Math.abs(4.5)); // 4.5
console.log(Math.abs(0)); // 0
 
// 5. Laipsniai ir šaknys
// a) Math.pow(skaicius, laipsniu) - pakelia skaičių laipsniu
 
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(-5, 3)); // -125
 
// b) Math.sqrt(x) - grąžina kvadratinę šaknį
 
console.log(Math.sqrt(16)); // 4
 
// b) Math.cbrt(x) - grąžina kubinę šaknį
 
console.log(Math.cbrt(64)); // 4
 
// d) Math.hypot(a, b) - grąžina rezultatą pritaikęs Pitagoro teoremą
 
console.log(Math.hypot(3, 4)); // 5
 
// 6. Logaritmai
// Math.log(x); Math.log10(x); Math.log2(x);
 
// 7. Trigonometrijos funkcijos
// Math.sin(x); Math.cos(x); Math.tan(x);
 
// Stringą verčiam į skaičių:
 
let stringas = '5';
console.log(stringas);
 
// 1 būdas:
let skaicius = +stringas
console.log(skaicius);
 
// 2 būdas:
let skaicius1 = Number(stringas)
console.log(skaicius1);
 
// 3 būdas:
// .parseInt(), .parseFloat()
 
// 4 būdas:
// Math apvalinimo metodai
 
// 5 būdas:
let skaicius2 = JSON.parse(stringas);
console.log(skaicius2);
 


//1. Sukurk funkciją isValidNumber(str), kuri:
//gauna string'ą kaip argumentą,
//grąžina true, jei tai galiojantys skaitmenys (t.y. ne NaN), kitu atveju false.
//isValidNumber("123.45") → trueisValidNumber("abc") → false

function isValidNumber(a){
  return !isNaN(a);
};

let numeris = 6;
let numeris1 = "sss5ddd";
console.log(isValidNumber(numeris));

console.log(isValidNumber("hshsh1"));


//2. Sukurk funkciją, kuri grąžina suapvalintą (iki sveikojo) atsitiktinį skaičių nuo 100 iki 200 (imtinai)

/*function funkcijaSveikas (a){
    a = rand(100, 200);
    Math.round(a)
}

console.log(funkcijaSveikas(7.3433));
*/
//3. Turint skaičių kaip tekstą '1_000_000.99eur', ištrauk tik sveikąją dalį kaip number

/*let trecias = '1_000_000.99eur';
console.log(Number.parseFloat(trecias));
console.log(Number.parseInt() (trecias));

Number.parseInt();
Number.parseFloat();
*/

//4. Koks bus rezultatas ir kodėl?
//console.log(Math.round('4.5abc')); atsakymas: suapvalina iki artimiausio sveikojo skaiciaus 5

 
// Number.isNan(x) - patikrina ar skaičius yra NaN



// TRINTI let numeris = 6;
// let numeris1 = "sss5ddd"; 
// console.log(Number.isNaN(numeris1)); // false
// console.log(!Number.isNaN(numeris1)); // true
//5. Sukurk funkciją toEuroFormat(number), kuri: gauna skaičių, grąžina jį kaip tekstą lietuvišku valiutos formatu (pvz., 1 234,56 €)

function toEuroFormat(number){
    let numberLocale = 6.7688;
console.log(numberLocale.toLocaleString('lt-LT'));
}

console.log('')


//nauji nd:

// 6. Parašyk funkciją clamp(x, min, max), kuri:
/*gauna skaičių x ir du rėžius: min ir max,
grąžina x, jei jis yra tarp min ir max (imtinai),
jei x mažesnis už min, grąžina min,
jei x didesnis už max, grąžina max.





7. Sukurk funkciją, kuri:
gauna du string tipo skaičius (pvz., '12.5kg', '4.3m'),
iš jų ištraukia skaičius (float) ir grąžina jų sandaugą, suapvalintą iki dviejų skaičių - po kablelio.
8. Sukurk funkciją safeDivide(a, b), kuri:
dalina a iš b,
jei rezultatas yra Infinity arba NaN, grąžina null, kitaip – rezultatą su dviem skaičiais po kablelio.
9. Gauti skaičių 1234567.89123:
parodyk jį su toLocaleString('lt-LT'),
tada su toPrecision(4).
10. Parašyk funkciją, kuri tikrina, ar du number tipo argumentai turi tokią pat sveikąją dalį (pvz., 5.99 ir 5.01 → true).
11. Sukurk funkciją, kuri gauna bet kokį string’ą ir grąžina:
{ original: , isNaN: , parsed: }
12. Sugeneruok atsitiktinį sveiką skaičių nuo -50 iki +50, bet jei jis yra neigiamas – paversk jį į teigiamą.
13. Parašyk funkciją isSafeFloat(x), kuri:
patikrina, ar skaičius x yra saugus (Number.isSafeInteger) ir turi ne daugiau nei 2 skaičius po kablelio.
14. Sukurk funkciją compareDecimals(a, b), kuri:
grąžina true, jei a ir b yra skirtingi kaip number,
bet toFixed(2) reikšmės yra vienodos kaip string’ai.
15. Parašyk funkciją, kuri:
gauna kelis skaičius (naudojant ...args),
grąžina objektą su savybėmis: max, min, average (suapvalintas iki 2 skaičių po kablelio).
16. Parašyk funkciją, kuri:
gauna stringą '3.14159',
grąžina { float: 3.14, int: 3 }.
17. Sukurk funkciją, kuri:
grąžina kvadratinę šaknį tik tuomet, jei skaičius yra sveikasis ir teigiamas, priešingu atveju – null.
18. Parašyk funkciją randomEven(min, max), kuri:
grąžina atsitiktinį lyginį skaičių tarp min ir max.
19. Sukurk funkciją roundToNearestTen(x), kuri:
suapvalina skaičių iki artimiausio dešimtuko (pvz., 23 → 20, 27 → 30).
20. Parašyk funkciją generateRandomPrice(), kuri:
grąžina atsitiktinę prekių kainą nuo 0.99 iki 99.99,
reikšmė turi būti number, su dviem skaičiais po kablelio.

// 6. Parašyk funkciją clamp(x, min, max), kuri:
// gauna skaičių `x` ir du rėžius: `min` ir`max`,
// grąžina`x`, jei jis yra tarp `min` ir`max`(imtinai),
// jei`x` mažesnis už`min`, grąžina`min`,
// jei`x` didesnis už`max`, grąžina`max`.
 
function clamp(x, min, max) {
    return Math.max(min, Math.min(max, x));
}
 
console.log(clamp(15, 10, 20));
 
// 7. Sukurk funkciją, kuri:
// - gauna du string tipo skaičius(pvz., '12.5kg', '4.3m'),
// - iš jų ištraukia skaičius(float) ir grąžina jų sandaugą, suapvalintą iki dviejų skaičių - po kablelio.
 
function multiplyStrings(a, b) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    return (num1 * num2).toFixed(2);
}
 
// 8. Sukurk funkciją safeDivide(a, b), kuri:
// - dalina a iš b,
// - jei rezultatas yra Infinity arba NaN, grąžina null, kitaip – rezultatą su dviem skaičiais po kablelio.
 
function safeDivide(a, b) {
    const result = a / b;
    if (!Number.isFinite(result)) return null;
    return +result.toFixed(2);
}
 
// 9. Gauti skaičių 1234567.89123:
// parodyk jį su toLocaleString('lt-LT'),
// tada su toPrecision(4).
 
function showFormatted(number) {
    return {
        locale: number.toLocaleString('lt-LT'),
        precision: number.toPrecision(4)
    };
}
 
// 10. Parašyk funkciją, kuri tikrina, ar du number tipo argumentai turi tokią pat sveikąją dalį (pvz., 5.99 ir 5.01 → true).
 
function sameIntegerPart(a, b) {
    return Math.trunc(a) === Math.trunc(b);
}
 
console.log(sameIntegerPart(5.01, 5.99));
 
// 11. Sukurk funkciją, kuri gauna bet kokį string’ą ir grąžina:
// { original: <string>, isNaN: <boolean>, parsed: <number> }
 
function analyzeString(input) {
    const parsed = Number(input);
    return {
        original: input,
        isNaN: Number.isNaN(parsed),
        parsed: parsed
    };
}
 
// 12. Sugeneruok atsitiktinį sveiką skaičių tarp nurodyto `min` ir `max`, bet jei jis yra neigiamas – paversk jį į teigiamą.
 
function randomPositiveInRange(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.abs(random);
}
 
console.log(randomPositiveInRange(-50, 50));
console.log(randomPositiveInRange(-10, -1));
console.log(randomPositiveInRange(5, 15));
 
// 13. Parašyk funkciją isSafeFloat(x), kuri:
// patikrina, ar skaičius x yra saugus(Number.isSafeInteger) ir turi ne daugiau nei 2 skaičius po kablelio.
 
function isSafeFloat(x) {
 
    return Number.isFinite(x) && x.toString().split('.')[1]?.length <= 2;
}
 
console.log(isSafeFloat(123.45));
console.log(isSafeFloat(123.456));
console.log(isSafeFloat(9007199254740992.12));
 
function isSafeFloat2(x) {
    // 1. Paverčiame skaičių į tekstą, kad galėtume patikrinti skaičius po kablelio
    const textVersion = x.toString();
 
    // 2. Padalijame tekstą į dvi dalis: prieš kablelį ir po kablelio
    // Jei nėra kablelio, antra dalis bus undefined
    const parts = textVersion.split('.');
 
    // 3. Paimame tik sveikąją dalį (prieš kablelį) ir paverčiame atgal į skaičių
    const integerPart = Number(parts[0]);
 
    // 4. Patikriname, ar sveikoji dalis yra "saugus sveikasis skaičius"
    const isSafeIntegerPart = Number.isSafeInteger(integerPart);
 
    // 5. Išsiaiškiname, kiek skaitmenų yra po kablelio
    const decimalPartLength = parts[1] ? parts[1].length : 0;
 
    // 6. Patikriname, ar skaitmenų po kablelio yra ne daugiau nei 2
    const hasMaxTwoDecimals = decimalPartLength <= 2;
 
    // 7. Funkcija grąžina true tik tada, kai abi sąlygos yra teisingos
    return isSafeIntegerPart && hasMaxTwoDecimals;
}
 
console.log(isSafeFloat(123.45));
console.log(isSafeFloat(123.456));
console.log(isSafeFloat(9007199254740992.12));
 
// 14. Sukurk funkciją compareDecimals(a, b), kuri:
// grąžina true, jei a ir b yra skirtingi kaip number,
// bet toFixed(2) reikšmės yra vienodos kaip string’ai.
function compareDecimals(a, b) {
    return a !== b && a.toFixed(2) === b.toFixed(2);
}
 
// 15. Parašyk funkciją, kuri:
// gauna kelis skaičius(naudojant ...args),
// grąžina objektą su savybėmis: max, min, average(suapvalintas iki 2 skaičių po kablelio).
function analyzeNumbers(...args) {
    const sum = args.reduce((a, b) => a + b, 0);
    return {
        max: Math.max(...args),
        min: Math.min(...args),
        average: +(sum / args.length).toFixed(2)
    };
}
 
// 16. Parašyk funkciją, kuri:
// gauna stringą '3.14159',
// grąžina { float: 3.14, int: 3 }.
 
function parseFloatAndInt(str) {
    const float = +parseFloat(str).toFixed(2);
    const int = parseInt(str);
    return { float, int };
}
 
// 17. Sukurk funkciją, kuri:
// grąžina kvadratinę šaknį tik tuomet, jei skaičius yra sveikasis ir teigiamas, priešingu atveju – null.
function safeSqrt(n) {
    if (n >= 0 && Number.isInteger(n)) return Math.sqrt(n);
    return null;
}
 
// 18. Parašyk funkciją randomEven(min, max), kuri:
// grąžina atsitiktinį lyginį skaičių tarp min ir max.
function randomEven(min, max) {
    const evenMin = Math.ceil(min / 2) * 2;
    const evenMax = Math.floor(max / 2) * 2;
    const count = ((evenMax - evenMin) / 2) + 1;
    const randomIndex = Math.floor(Math.random() * count);
    return evenMin + randomIndex * 2;
}
 
// 19. Sukurk funkciją roundToNearestTen(x), kuri:
// suapvalina skaičių iki artimiausio dešimtuko(pvz., 23 → 20, 27 → 30).
function roundToNearestTen(x) {
    return Math.round(x / 10) * 10;
}
 
// 20. Parašyk funkciją generateRandomPrice(), kuri:
// grąžina atsitiktinę prekių kainą nuo 0.99 iki 99.99,
// reikšmė turi būti number, su dviem skaičiais po kablelio.
 
function generateRandomPrice() {
    return +((Math.random() * (99.99 - 0.99)) + 0.99).toFixed(2);
}
 
*/
 