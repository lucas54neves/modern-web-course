/**
 * Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que
 * o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim
 * sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
 */
function checkArrays(arrayA, arrayB) {
    console.log(
        {
            'Old Array A': arrayA,
            'Old Array B': arrayB
        }
    )
    for (let i = 0; i < arrayA.length; i++) {
        [ arrayA[i], arrayB[i] ] = [ arrayB[i], arrayA[i] ]
    }
    console.log(
        {
            'New Array A': arrayA,
            'New Array B': arrayB
        }
    )
}

checkArrays([1,2,3,4,5],[6,7,8,9,10])