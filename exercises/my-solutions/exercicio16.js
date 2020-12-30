function calculadora(operador1, operacao, operador2) {
    switch (operacao) {
        case '+':
            return operador1 + operador2
        case '-':
            return operador1 - operador2
        case '/':
            return operador1 / operador2
        case '*':
            return operador1 * operador2
        default:
            return 'Operacao invalida'
    }
}

console.log(1, '+', 2, calculadora(1, '+', 2))
console.log(4, '-', 2, calculadora(4, '-', 2))
console.log(4, '/', 2, calculadora(4, '/', 2))
console.log(3, '*', 2, calculadora(3, '*', 2))
console.log(1, '&', 2, calculadora(1, '&', 2))