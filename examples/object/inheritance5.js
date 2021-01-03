/**
 * Heranca - Aula 4
 * Usando a tecnica da heranca, eh possivel implementar funcoes que nao estao disponiveis para
 * os tipos primitivos por padrao. Eh possivel, por exemplo, implementar uma funcao que inverte
 * as strings usando o prototype.
 * Nao eh aconselhavel sobrescrever metodos que ja estao implementados pois pode causar serios
 * danos colaterais.
 */

/**
 * String, Array e Object sao do mesmo tipo, function. Sendo assim, o prototype deles apontam
 * todos para function.
 */
console.log(`typeof String: `, typeof String)
console.log(`typeof Array: `, typeof Array)
console.log(`typeof Object: `, typeof Object)

/**
 * Usando heranca, eh possivel implementar novos metodos para os tipos primitivos.
 * Abaixo estao dois exemplos de metodos que podem ser implementados (inversao de strings e o
 * retorno do primeiro elemento do array) e um exemplo de metodos que nao sao recomendados de
 * serem sobrescritos, como o toString.
 */
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() {
    return 'Lascou TUDO!'
}
console.log('Escola Cod3r'.reverse())