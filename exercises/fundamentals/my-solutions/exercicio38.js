/**
 * Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os
 * números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e
 * 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior
 * antes do menor.
 */
function checkOddNumbers(began = 0, end = 100) {
    const oddNumbers = []
    if (began > end) {
        [began, end] = [end, began]
    }
    for (let i = began; i <= end; i++) {
        if (i % 2 == 1) {
            oddNumbers.push(i)
        }
    }
    console.log(oddNumbers)
}

checkOddNumbers()
checkOddNumbers(9)
checkOddNumbers(4, 20)