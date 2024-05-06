export function problem (lines){
    let nota1 = Number (lines[0])
    let nota2 = Number (lines[1])
    let MEDIA = (nota1 * 3.5 + nota2 * 7.5) / 11
       console.log(`MEDIA = ${MEDIA.toFixed(5)}`)
    }