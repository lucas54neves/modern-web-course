/**
 * Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
 * como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​
 * termos, bem como a soma dos elementos.
 */
function arithmeticProgression(quantityTerms, firstTerm, reason) {
    const array = []
    let sun = 0
    let term
    for (let i = 1; i <= quantityTerms; i++) {
        term = getTermN(firstTerm, i, reason)
        array.push(term)
        sun += term
    }
    console.log(array, sun)
}

function getTermN(firstTerm, quantityTerms, reason) {
    return (firstTerm + (quantityTerms - 1) * reason)
}

arithmeticProgression(10, 1, 2)