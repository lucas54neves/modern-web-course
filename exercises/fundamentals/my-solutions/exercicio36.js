/**
 * Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
 * inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação
 * de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira
 * se e somente se o valor do elemento for maior que 5.
 */
function multiplyArray(array, number) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * number
    }
    return array
}

function multiplyArrayIfElementGreaterThan5(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            array[i] = array[i] * number
        }
    }
    return array
}

console.log({
    'Array 1': multiplyArray([1,2,3,4,5,6,7,8,9,10], 3),
    'Array 2': multiplyArrayIfElementGreaterThan5([1,2,3,4,5,6,7,8,9,10], 3)
})