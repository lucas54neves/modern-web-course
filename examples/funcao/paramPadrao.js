// Estragia 1 para gerar um valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// Estragia 2 para gerar um valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = b !== undefined ? b : 1
    c = c !== undefined ? c : 1
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Estragia 3 para gerar um valor padrao
function soma3(a, b, c) {
    a = 1 in arguments ? a : 1
    b = 1 in arguments ? b : 1
    c = 1 in arguments ? c : 1
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

// Estragia 4 para gerar um valor padrao
function soma4(a, b, c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma4(), soma4(3), soma4(1, 2, 3), soma4(0, 0, 0))

// Estrategia padrao ES2015
function soma5(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma5(), soma5(3), soma5(1, 2, 3), soma5(0, 0, 0))