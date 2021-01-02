function getMontanteJurosSimples(capital, taxa, tempo) {
    return capital * (1 + taxa * tempo) 
}

function getMontanteJurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa), tempo)
}

console.log(`Juros simples -> ${getMontanteJurosSimples(100, 0.02, 40)} - Juros compostos -> ${getMontanteJurosCompostos(100, 0.02, 40)}`)