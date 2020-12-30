const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// Parametros de forEach => elemento, indice
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))