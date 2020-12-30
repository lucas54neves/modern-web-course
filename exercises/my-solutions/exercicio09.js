function verificaNota(nota) {
    if (nota >= 37.5) {
        nota = (Math.round(nota / 10)) * 10
        return `Aprovado com nota ${nota}`
    } else {
        return `Reprovado com nota ${nota}`
    }
}

console.log(verificaNota(37.5))
console.log(verificaNota(36))
console.log(verificaNota(40))
console.log(verificaNota(50))
console.log(verificaNota(80))
console.log(verificaNota(85))
console.log(verificaNota(79))
console.log(verificaNota(92))