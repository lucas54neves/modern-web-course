/**
 * Fazer um programa para encontrar todos os pares entre 1 e 100.
 */
function encontrarParesAteN(numero) {
    const pares = []
    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            pares.push(i)
        }
    }
    return pares
}

function imprimirArray(array) {
    console.log(array)
}

imprimirArray(encontrarParesAteN(100))