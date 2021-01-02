// R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1
function calculaNotas(valor) {
    let notas100 = 0, notas50 = 0, notas10 = 0, notas5 = 0, notas1 = 0
    // Calcula as notas de 100
    notas100 = Math.floor(valor / 100)
    valor = valor % 100
    // Calcula as notas de 50
    notas50 = Math.floor(valor / 50)
    valor = valor % 50
    // Calcula as notas de 10
    notas10 = Math.floor(valor / 10)
    valor = valor % 10
    // Calcula as notas de 5
    notas5 = Math.floor(valor / 5)
    // Calcula as notas de 1
    notas1 = valor % 5
    let resultado = ''
    if (notas100 > 0)
        resultado += `${notas100} nota(s) de 100. `
    if (notas50 > 0)
        resultado += `${notas50} nota(s) de 50. `
    if (notas10 > 0)
        resultado += `${notas10} nota(s) de 10. `
    if (notas5 > 0)
        resultado += `${notas5} nota(s) de 5. `
    if (notas1 > 0)
        resultado += `${notas1} nota(s) de 1.`
    return resultado
}

console.log(calculaNotas(18))
console.log(calculaNotas(43))
console.log(calculaNotas(234))
console.log(calculaNotas(45))
console.log(calculaNotas(123))
console.log(calculaNotas(45))
console.log(calculaNotas(321))
console.log(calculaNotas(3))