function verificarJogos(results) {
    const resultsArray = results.split(' ')
    let bestResult = resultsArray[0]
    let countBreakingRecords = 0
    let worstResult = resultsArray[0]
    let worstResultIndex = 0
    for (let i = 1; i < resultsArray.length; i++) {
        if (resultsArray[i] >= bestResult) {
            countBreakingRecords++
            bestResult = resultsArray[i]
        }
        if (resultsArray[i] < worstResult) {
            worstResult = resultsArray[i]
            worstResultIndex = i
        }
    }
    return [ countBreakingRecords, worstResultIndex+1 ]
}

console.log(verificarJogos("10 20 20 8 25 3 0 30 1"))