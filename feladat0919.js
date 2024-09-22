/*
Vizsgáljátok meg hogy a bemenetek valóban számok-e (a típusa szám-e).
1-4: Írjatok js függvényeket két szám összeadására, kivonására, szorzásra, osztásra.
5: Írjatok hatványozásra saját implementációt (kettő a harmadikon egyenlő nyolc).
6: Írjatok függvényt egy 0 és 1ből álló string beolvasására. A bináris kódot alakítsátok számmá (Saját implementáció).
*/

const isNum = (a) => {return typeof(a) === "number";}
const isBothNum = (a, b) => {return (isNum(a) && isNum(b));}
const customAdd = (a, b) => {
    return isBothNum(a, b) ? (a + b) : '';
}
const customSubtract = (a, b) => {
    return isBothNum(a, b) ? (a - b) : '';
}
const customMultiply = (a, b) => {
    return isBothNum(a, b) ? (a * b) : '';
}
const customDivision = (a, b) => {
    return isBothNum(a, b) ? (a / b) : '';
}
const _customPow = (a, b) => {
    let x = a;
    for(;b>1; b--){
        x = a
    }
    return x;
}
const customPow = (a, b) => {
    return isBothNum(a, b) ? _customPow(a, b) : ''
}
function isBin(b) {
    return (typeof(b) === "string" && new RegExp(/^[01]+$/).test(b));
}
const _customBinToDec = (s) => {
    let val = 0;
    let placeVal = 1;
    let arr = s.split("").reverse();
    arr.forEach((c, index) => {
        c === '1' ? val += placeVal : '';
        placeVal= 2;
    });
    return val;
}
const customBinToDec = (s) => {
    return isBin(s) ? _customBinToDec(s) : ''
}

console.log(customAdd(5,2))
console.log(customSubtract(5,2))
console.log(customMultiply(5,2))
console.log(customDivision(5,2))
console.log(customPow(5,2))
console.log(customBinToDec("011101"))
