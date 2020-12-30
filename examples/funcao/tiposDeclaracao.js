/**
 * Function Declaration
 * Quando as funcoes sao declaradas com function declaration,
 * o interpretador do Javascript carrega todas as funcoes
 * antes de executar o codigo, o que permite que as funcoes
 * sejam chamadas antes de serem declaradas.
 */
console.log(soma(3, 4))

function soma(x, y) {
    return x + y
}

// Function Expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

// Named Function Expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))