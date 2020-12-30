// Objeto eh uma colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        sexo: 'M',
        idade: 19
    }, {
        nome: 'Ana',
        sexo: 'F',
        idade: 42
    }],
    calcularValorSeguro: function() {
        let taxaValor = 0
        for (condutorIndex in this.condutores) {
            if (this.condutores[condutorIndex].sexo == 'M') {
                taxaValor += 0.02
            } else if (this.condutores[condutorIndex].sexo == 'F') {
                taxaValor += 0.01
            }
            if (this.condutores[condutorIndex].idade < 18) {
                taxaValor += 0.9
            } else if (this.condutores[condutorIndex].idade >= 18 && this.condutores[condutorIndex].idade < 25) {
                taxaValor += 0.04
            } else if (this.condutores[condutorIndex].idade >= 25 && this.condutores[condutorIndex].idade < 30) {
                taxaValor += 0.03
            } else if (this.condutores[condutorIndex].idade >= 30 && this.condutores[condutorIndex].idade < 45) {
                taxaValor += 0.02
            } else if (this.condutores[condutorIndex].idade >= 45 && this.condutores[condutorIndex].idade < 50) {
                taxaValor += 0.03
            } else if (this.condutores[condutorIndex].idade >= 50 && this.condutores[condutorIndex].idade < 60) {
                taxaValor += 0.04
            } else {
                taxaValor += 0.05
            }
        }
        return taxaValor * this.valor
    },
    seguro: this.calcularValorSeguro
}

console.log(carro.calcularValorSeguro())

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)