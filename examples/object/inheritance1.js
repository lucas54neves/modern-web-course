/**
 * Heranca - Aula 1
 * Heranca eh a caracteristica da programacao orientada a
 * objetos em que um objeto recebe todas caracteristicas
 * do objeto pai, ou seja, o objeto filho recebe todos os
 * atributos e metodos do objeto pai.
 */
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    model: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
console.log(MeuObjeto.prototype)