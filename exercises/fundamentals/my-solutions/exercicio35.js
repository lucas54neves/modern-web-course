/**
 * Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco
 * elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona
 * [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. É importante lembrar que o método Push
 * retorna somente o tamanho do Vetor. Ao final das operações imprima os vetores no console.
 */
function addElementsToArray(stackArray, addArray) {
    for (let i = 0; i < addArray.length; i++) {
        stackArray.push(addArray[i])
    }
    console.log(stackArray)
}

addElementsToArray([1,2,3,4,5],[6,7,8,9,10])