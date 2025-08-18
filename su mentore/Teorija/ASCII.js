// ASCII ir UNICODE
// https://ascii.cl/
// https://symbl.cc/
 
// .charAt(index) - grąžina simbolį, esantį nurodytame indekse;
// console.log(string.charAt(0));
 
 
// .charCodeAt(index) .codePointAt(index) - grąžina simbolio ASCII arba Unicode reikšmę, esančią nurodytame index'e
 
// console.log(string.charCodeAt(1)); //97 <--pakankamas, kai naudojami paprasti simboliai
// console.log(string.codePointAt(1)); //97 <-- reiktų naudoti, kai naudojami surogatiniai simboliai, pvz., emoji ir pan.
 
// Palyginimas
// Funkcija     | Grąžina               | Veikia su surogatais?          | Pavyzdys su 😊 (128522)
// charCodeAt   | 16 bitų reikšmę       | Grąžina tik dalinę reikšmę     | charCodeAt(0) -> 55357
// codePointAt  | Unicode kodų tašką    | Grąžina pilną Unicode reikšmę  | codePointAt(0) -> 128522
 
// .normalize() - yra naudojamas normalizuoti Unicode simbolius pagal nurodytą Unicode normalizacijos formą. Tai padeda užtikrinti, kad skirtingai užrašyti simboliai, kurie vizualiai atrodo vienodai, būtų laikomi identiškais.
 
// const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
// const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
 
// console.log(`${name1}, ${name2}`); //"Amélie, Amélie"
// console.log(name1 === name2); // false
// console.log(name1.length === name2.length); // false
 
// const normalizeName1 = name1.normalize();
// const normalizeName2 = name2.normalize();
 
// console.log(`${normalizeName1}, ${normalizeName2}`); //"Amélie, Amélie"
// console.log(normalizeName1 === normalizeName2); // true
// console.log(normalizeName1.length === normalizeName2.length); // true
 
// Normalizacijos formos
// normalize(forma) metodas leidžia pasirinkti vieną iš šių Unicode normalizacijos formų:
 
// Forma    Aprašymas
// NFC  | Normalizuotas sudėtinis formatas(Canonical Composition).Kombinuoja simbolius, kai įmanoma.
// NFD  | Normalizuotas išskaidytas formatas(Canonical Decomposition).Išskaido simbolius.
// NFKC | Sudėtinis formatas su suderinamumu(Compatibility Composition), bet pašalina stiliaus skirtumus.
// NFKD | Išskaidytas formatas su suderinamumu(Compatibility Decomposition), bet pašalina stiliaus skirtumus.
 
// 1. Normalizavimas su NFC ir NFD
// let strN = "a\u0301"; // "a" su akcentu (U+0061 ir U+0301)
// console.log(strN); // "á" (atrodo kaip "á")
 
// a) Naudojant NFC
// let normalizedNFC = strN.normalize("NFC");
// console.log(normalizedNFC); // "á" (vienas simbolis U+00E1)
 
// b) Naudojant NFD
// let normalizedNFD = strN.normalize("NFD");
// console.log(normalizedNFD); // "á" (du simboliai: U+0061 ir U+0301)
 
// 2. Normalizavimas su NFKC ir NFKD
// let strApskritime = "①"; // Cirkuliarinis numeris "1" (U+2460)
// let paprastasVienetas = '1';
 
// console.log(strApskritime === paprastasVienetas); //false
 
// a) naudojant NFC
// console.log(strApskritime.normalize("NFC")); // "①" (nekeičia)
// console.log(strApskritime.normalize("NFC") === paprastasVienetas); //false
 
// b) naudojant NFKC (NFKD veikia atitinkamai)
// console.log(strApskritime.normalize("NFKC")); // "1" (pakeičia į įprastą "1")
// console.log(strApskritime.normalize("NFKC") === paprastasVienetas); //true
ASCII Codes - Table of ascii characters and symbols
ASCII Codes - Table for easy reference of ascii characters and symbols, with conversion tables and HTML codes
 