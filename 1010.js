export function problem (lines){

    const space= ' '
    let [peca1, nmrpeca1, vlrpeca1] = lines[0].split(space)
    let [peca2, nmrpeca2, vlrpeca2] = lines[1].split(space)
    
    let valorapagar = (nmrpeca1 * vlrpeca1) + (nmrpeca2 * vlrpeca2)
    
    console.log(`VALOR A PAGAR: R$ ${valorapagar.toFixed(2)}`)
    }