export function problem (lines){
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [NUMERO, htrab, valorh] = lines
let SALARY = (htrab * valorh)

console.log(`NUMBER = ${NUMERO}\nSALARY = U$ ${SALARY.toFixed(2)}`);
}