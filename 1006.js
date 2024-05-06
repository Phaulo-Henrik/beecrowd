export function problem (lines){
const [nota1, nota2, nota3] = lines;
const peso1 = 2
const peso2 = 3
const peso3 = 5

media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
console.log(`MEDIA = ${media.toFixed(1)}`)
}