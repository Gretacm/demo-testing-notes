let drambliai;
 
console.log(drambliai);
 
drambliai = 4;
console.log(drambliai);
 
drambliai = 66;
console.log(drambliai);
 
const zirafos = 5;
 
 
const sodas = ["zirafa", "drambliai"];
console.log(sodas);
 
sodas.push("lakstingala")
 
console.log(sodas);
 
console.log(1_000_000);
console.clear();
 
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
 
 
 