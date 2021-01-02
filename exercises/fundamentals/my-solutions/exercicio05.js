function mostrarEmReal(valor) {
    const parteInteira = Math.trunc(valor)
    const parteDecimal = Math.floor((valor - parteInteira) * 100)
    return `R$ ${parteInteira},${parteDecimal}`
}

console.log(mostrarEmReal(2.34534))
console.log(mostrarEmReal(45.34))
console.log(mostrarEmReal(2342.539))
console.log(mostrarEmReal(2213.34534))