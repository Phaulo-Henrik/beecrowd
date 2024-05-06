export function problem (lines){

const [nome, salario, venda] = lines
const total = Number(salario) + (Number(venda) * 0.15)

console.log(`TOTAL = R$ ${total.toFixed(2)}`)
}