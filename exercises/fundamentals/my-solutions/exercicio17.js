function calculaSalario(planoTrabalho, salarioAtual) {
    let aumento
    switch (planoTrabalho) {
        case 'A':
            aumento = 0.1
            break
        case 'B':
            aumento = 0.15
            break
        case 'C':
            aumento = 0.2
            break 
        default:
            return 'Plano de trabalho invalido'
    }
    return salarioAtual * (1 + aumento)
}

console.log('A', 1000, calculaSalario('A', 1000))
console.log('B', 1000, calculaSalario('B', 1000))
console.log('C', 1000, calculaSalario('C', 1000))
console.log('D', 1000, calculaSalario('D', 1000))