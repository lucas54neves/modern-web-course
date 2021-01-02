function verificaEstoque(fruta) {
    switch (fruta) {
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        case 'kiwi':
            console.log('Estamos comescassez de kiwis')
            break
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break
        default:
            console.log('Error! Palavra inválida')
            break
    }
}

verificaEstoque('maçã')
verificaEstoque('melancia')
verificaEstoque('kiwi')
verificaEstoque('uva')