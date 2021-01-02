/**
 * Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do
 * vetor.
 */
function checkHigherAndLowerValue(array) {
    let higher = array[0], lower = array[0]
    for (let i = 1; i < array.length; i++) {
        if (higher < array[i]) {
            higher = array[i]
        }
        if (lower > array[i]) {
            lower = array[i]
        }
    }
    return {
        lower,
        higher
    }
}
console.log(checkHigherAndLowerValue([1,2,3,4,5,6,7,8,-2,34,8,9,12]))