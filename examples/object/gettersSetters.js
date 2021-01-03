/**
 * Getters e Setters
 * Os getters e setters sao utilizados para melhorar o encapsulamentos do objetos. Os atributos sao
 * privados, ou seja, nao devem ser acessados diretamente. O acesso aos atributos sao feitos por
 * meio de funcoes. As funcoes getters acessam o valor do atributo e as funcoes setters alteram o
 * valor das funcoes.
 * No JavaScript, existe uma conversao que os atributos privados devem ser nomeados com um '_' no
 * inicio. Dessa forma, fica entendido entre os desenvolvedores que os atributos so podem ser acessados
 * por getters e setters. Ainda eh possivel acessar os atributos privados do objetos diretamente, mas
 * essa conversao passa a informacao ao desenvolvedor que esse atributo nao deveria ser acessado
 * diretamente.
 * Para criar getters e setters no JavaScript, deve-se usar as funcoes get() e set().
 */
const sequencia = {
    _valor: 1, // Conversao
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
