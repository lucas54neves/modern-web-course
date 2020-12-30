function getRaizesEquacaoSegundoGrau(a, b, c) {
    const delta = Math.pow(b, 2) - 4 * a * c
    if (delta < 0) {
        return "Delta é negativo"
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return [x1, x2]
    }
}

console.log(getRaizesEquacaoSegundoGrau(10, 120, 5))
console.log(getRaizesEquacaoSegundoGrau(20, 100, 10))
console.log(getRaizesEquacaoSegundoGrau(30, 80, 20))
console.log(getRaizesEquacaoSegundoGrau(40, 40, 25))
console.log(getRaizesEquacaoSegundoGrau(50, 20, 30))