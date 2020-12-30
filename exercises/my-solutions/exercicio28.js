/**
 * Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
 */
function quantidadeParesEImpares(arrayNumeros) {
    let quantidadePares = 0, quantidadeImpares = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 == 0) {
            quantidadePares++
        } else {
            quantidadeImpares++
        }
    }
    return [quantidadePares, quantidadeImpares]
}

console.log(quantidadeParesEImpares([1,4,6,7,2,6,7,4,2,234,546,234,45,234,36,56,67,897,234,524,56,235,325]))