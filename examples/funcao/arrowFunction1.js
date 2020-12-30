let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Retorno implicito

const triplo = a => 3 * a // Retorno implicito

const quadruplo = a => 4 * a // Retorno implicito

console.log(1, dobro(1), triplo(1), quadruplo(1))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'

ola = _ => 'Ola' // Possui um parametro

console.log(ola())