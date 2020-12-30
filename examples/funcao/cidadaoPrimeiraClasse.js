/**
 * Funcao em JS eh First-Class Object (Citizens)
 * Higher-order function
 */

// Criacao de funcao de forma literal
function fun1() {}

// Funcoes podem ser armazenadas em uma variavel
const fun2 = function () {}

// Funcoes podem ser armazenadas em um array
const array = [ function (a, b) { return a + b }, fun1, fun2 ]
console.log(array[0](2, 3))

// Funcoes podem ser armazenadas em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa!' }
console.log(obj.falar())

// Funcoes podem ser passadas como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Funcoes podem retornar/conter funcoes
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)