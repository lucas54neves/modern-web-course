/**
 * Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */
function checkArithmeticAverage(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

console.log(checkArithmeticAverage([1,2,3,4,5,6,7,8,9]))