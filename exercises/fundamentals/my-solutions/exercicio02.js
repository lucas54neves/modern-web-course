// Equilátero: Os três lados são iguais.
// Isósceles:  Dois lados iguais.
// Escaleno: Todos os lados são diferentes
function classificacaoTriangulo(a, b, c) {
    if (verificaTriangulo(a, b, c)) {
        if (a == b && b == c) {
            return 'Triangulo Equilatero'
        } else if (a == b || a == c || b == c) {
            return 'Trianguslo Isosceles'
        } else {
            return 'Triangulo Escaleno'
        }
    } else {
        return 'Nao eh triangulo'
    }
}

function verificaTriangulo(a, b, c) {
    return (a + b) > c && (a + c) > b && (b + c) > a
}

console.log(1, 2, 3, classificacaoTriangulo(1, 2, 3))
console.log(1, 2, 2, classificacaoTriangulo(1, 2, 2))
console.log(3, 3, 3, classificacaoTriangulo(3, 3, 3))