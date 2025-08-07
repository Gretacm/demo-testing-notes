
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


/*function isValidNumber (a)
if {
    (Number.isNan(a)) 
}else {
    console.log(`${a} is Valid number`)
}*/





//2. Sukurk funkciją, kuri grąžina suapvalintą (iki sveikojo) atsitiktinį skaičių nuo 100 iki 200 (imtinai)

function funkcijaSveikas (a){
    a = rand(100, 200);
    Math.round(a)
}

//3. Turint skaičių kaip tekstą '1_000_000.99eur', ištrauk tik sveikąją dalį kaip number

let trecias = '1_000_000.99eur';
console.log(Number.parseFloat(trecias));
console.log(Number.parseInt() (trecias));

Number.parseInt();
Number.parseFloat();

//4. Koks bus rezultatas ir kodėl?
//console.log(Math.round('4.5abc')); atsakymas: suapvalina iki artimiausio sveikojo skaiciaus 5

 
