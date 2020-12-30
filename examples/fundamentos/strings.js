const escola = "Cod3r"

// Retorna o caractere da posicao dada
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// Retorna em Unicode o caractere da posicao dada
console.log(escola.charCodeAt(3))

// Retorna o index do elemento dado
console.log(escola.indexOf('3'))

// Retorna as substrings
console.log(escola.substring(1)) // Da posicao 1 ate o final
console.log(escola.substring(0, 3)) // Da posicao 0 ate a posicao 3, menos a posicao 3

// Concatena strings
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

// Substitui na posicao dada pelo elemento dado
console.log(escola.replace(3, 'e'))

// Separa a string em array
console.log('Ana,Maria,Pedro,Jose'.split(','))