/**
 * Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse
 * vetore imprime a quantidade no console
 */
function checkNegativeNumbers(array) {
    let countNegatives = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            countNegatives++
        }
    }
    return countNegatives
}

console.log(checkNegativeNumbers([1,2,-4,-6,3,-2,5,6,7]))