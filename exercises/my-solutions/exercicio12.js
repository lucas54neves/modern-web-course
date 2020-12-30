function retornaFatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * retornaFatorial(numero - 1)
    }
}

console.log(`1! = ${retornaFatorial(1)}`)
console.log(`2! = ${retornaFatorial(2)}`)
console.log(`3! = ${retornaFatorial(3)}`)
console.log(`4! = ${retornaFatorial(4)}`)
console.log(`5! = ${retornaFatorial(5)}`)
console.log(`6! = ${retornaFatorial(6)}`)