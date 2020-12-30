/**
 * Objetos Constantes
 * Objetos podem ser declarados como const (constantes)
 * porque a variavel relativa do objeto vai sempre apontar
 * para o mesmo endereco de memoria. Apenas os dados que
 * estao nesse endereco de memoria que sera alterado.
 */
const pessoa = { nome: 'Joao' }
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)
/**
 * Essas operacoes sao possiveis porque a variavel pessoa
 * aponta para um endereco de memoria e, mesmo que o atributo
 * nome seja alterado, a variavel vai sempre apontar para
 * o mesmo endereco de memoria
 */
//pessoa = { nome: 'Ana' }
/**
 * Essa operacao nao eh possivel porque a variavel pessoa
 * nao pode apontar para outro endereco de memoria. Se a
 * variavel aceitasse esse objeto, ela estaria apontando
 * para o endereco desse objeto. Apenas os atributos de um
 * objeto que foi declarado como const podem ser modificados.
 */
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)
/**
 * Usando a funcao 'freeze' de Object, eh possivel 'congelar'
 * um objeto, ou seja, nenhum atributo pode ser alterado, removido
 * ou adicionado ao objeto.
 */
const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
/**
 * Usando a funcao 'freeze' logo na declaracao do objeto,
 * o objeto sera realmente constante, pois nem seus atributos
 * poderao ser alterados.
 */