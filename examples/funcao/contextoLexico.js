/**
 * A funcao carrega consigo tambem o contexto em que ela
 * eh declarada. Ela tem conhecimento do local onde ela
 * foi declarada.
 * 
 * No exemplo abaixo, a funcao exec() vai imprimir a string
 * 'Global', porque, quando a funcao minhaFuncao() foi
 * declarada, a variavel 'valor' tinha como valor a string
 * 'Global'.
 */
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()