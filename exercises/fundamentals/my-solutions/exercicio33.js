/**
 * Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá
 * conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro
 * com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras
 * diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor
 * resultado deverão aparecer no console
 */
function concatenateVectors(intergerArray, stringArray, doubleArray) {
    return {
        'Array1': intergerArray.concat(doubleArray),
        'Array2': stringArray.concat(intergerArray.concat(doubleArray))
    }
}

console.log(concatenateVectors([1,2,3,4],['algo','alguma','aguado','aguido'],[11.4,23.4,27.4,56.3]))