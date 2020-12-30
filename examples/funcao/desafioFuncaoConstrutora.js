/**
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome eh ${this.nome}`)
    }
}
*/
function criarPessoa(nome) {
    return {
        nome,
        falar: function () {
            console.log(`Meu nome eh ${nome}`)
        }
    }
}

function Pessoa(nome) {
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome eh ${this.nome}`)
    }
}

const p1 = criarPessoa('Joao'), p2 = new Pessoa('Maria')

p1.falar()
console.log(p1.nome)

p2.falar()
console.log(p2.nome)