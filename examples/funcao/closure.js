/**
 * Closure eh o escopo criado quando uma funcao eh declarada
 * Esse escopo permite a funcao acessar e manipular variaveis
 * externas a funcao.
 * 
 * A funcao carrega consigo informacoes sobre o contexto em
 * que ela foi declarada.
 * 
 * Contexto lexico em acao!
 */
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())