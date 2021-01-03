// Important functions of Object
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Retorna um array com as chaves do objeto
console.log(Object.keys(pessoa))
// Retorna um array com os valores do objeto
console.log(Object.values(pessoa))
// Retorna um array com subarray com os conjuntos chave/valor
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/**
 * Define uma propriedade do objeto. Com essa funcao,
 * caracteristicas dessa propriedade podem ser definidas
 * e essa propriedade eh congelada.
 */
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

/**
 * Object.assign (ECMAScript 2015)
 * Essa funcao concatena todos os atributos dos objetos
 * passados por parametro e sobrescreve os valores que
 * foram lido por ultimo.
 */
const dest = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3,
    a: 4
}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)