function escreveNumero(numero) {
    switch (numero) {
        case 1:
            return('Um')
        case 2:
            return('Dois')
        case 3:
            return('Tres')
        case 4:
            return('Quatro')
        case 5:
            return('Cinco')
        case 6:
            return('Seis')
        case 7:
            return('Sete')
        case 8:
            return('Oito')
        case 9:
            return('Nove')
        default:
            return('Numero fora do intervalo')
    }
}

for (let i = 0; i < 15; i++) {
    console.log(i, escreveNumero(i))
}