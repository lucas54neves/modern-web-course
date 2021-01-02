function retornaSeDiaUtilFimSemana(dia) {
    if (dia == 0) {
        console.log('Data inválida')
    } else {
        dia = dia % 7
        switch (dia) {
            case 1:
                console.log('Fim de semana')
                break
            case 2:
                console.log('Dia de semana')
                break
            case 3:
                console.log('Dia de semana')
                break
            case 4:
                console.log('Dia de semana')
                break
            case 5:
                console.log('Dia de semana')
                break
            case 6:
                console.log('Dia de semana')
                break
            case 0:
                console.log('Fim de semana')
                break
            default:
                console.log('Data inválida')
                break
        }
    }
}

retornaSeDiaUtilFimSemana(1)
retornaSeDiaUtilFimSemana(2)
retornaSeDiaUtilFimSemana(3)
retornaSeDiaUtilFimSemana(4)
retornaSeDiaUtilFimSemana(5)
retornaSeDiaUtilFimSemana(6)
retornaSeDiaUtilFimSemana(7)
retornaSeDiaUtilFimSemana(24)
retornaSeDiaUtilFimSemana(35)
retornaSeDiaUtilFimSemana(56)
retornaSeDiaUtilFimSemana(77)
