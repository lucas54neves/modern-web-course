function calculaValor(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500:
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8
        default:
            return 'Produto nao existe'
    }
}

console.log(calculaValor(100, 12))
console.log(calculaValor(200, 12))
console.log(calculaValor(300, 12))
console.log(calculaValor(400, 12))
console.log(calculaValor(500, 12))
console.log(calculaValor(600, 12))
console.log(calculaValor(700, 12))