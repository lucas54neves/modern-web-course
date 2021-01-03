/**
 * Heranca - Aula 4
 * Simulador do operador new
 */
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

/**
 * O simulador 'novo' do operador new recebe, como parametro, a
 * funcao f e varios parametros representados pelo operador de
 * spread e params. Na funcao 'novo', um objeto eh criado seu
 * atributo 'proto' aponta para o 'prototype' da funcao 'f'. Alem
 * disso, um objeto eh criado utilizando a funcao 'apply', passando
 * como parametro o objeto vazio que foi criado e um array com os
 * parametros.
 * @param {*} f 
 * @param  {...any} params 
 */
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)