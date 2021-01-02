/**
 * Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos
 * números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui
 * o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.
 */
function checkInterval(array) {
    let countIn = 0, countOut = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10 && array[i] <= 20) {
            countIn++
        } else {
            countOut++
        }
    }
    return {
        countIn,
        countOut
    }
}

const array = [1,2,3,4,56,45,23432,456,234,12,24,456,234,123,435,4,6,45,2,12,144,15,16]
console.log(checkInterval(array))