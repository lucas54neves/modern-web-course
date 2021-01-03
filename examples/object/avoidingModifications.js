/**
 * Aula sobre como evitar a modificacoes de objetos
 *  - Object.preventExtensions
 *      Nao permite que o objeto seja extendido, ou seja,
 *  nao eh possivel adicionar novos atributos. Eh possivel
 *  excluir e modificar atributos, mas nao eh possivel
 *  adicionar atributos.
 *  - Object.seal
 *      Nao eh possivel adicionar nem remover atributos.
 *  Apenas eh possivel modificar os atributos ja existentes.
 *  - Object.freeze = selado + valores constantes
 *      Nao eh possivel adicionar, modificar nem remover
 *  atributos.
 */

// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes