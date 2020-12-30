/**
 * Factory eh uma funcao que retorna um objeto
 */
// Factory simples
function criarMulher() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

// Factory melhorada
function criarHomem(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

console.log(criarMulher())
console.log(criarHomem('João', 'Pereira'))