/**
 * Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais
 * de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor
 * ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades
 * de medida.
 */
function existeCriancaMenor(altura1, altura2) {
    return altura1 < altura2 || altura1 > altura2
}

function criancaMenorUltrapassara(altura1, altura2, taxa1, taxa2) {
    if (!existeCriancaMenor()) {
        if ((altura1 < altura2 && taxa1 < taxa2) || (altura1 > altura2 && taxa1 > taxa2)) {
            return 'A crianca menor nunca vai alcancar a crianca maior'
        } else {
            let anos = 0, alturaMenor, alturaMaior, taxaMenor, taxaMaior

            if (altura1 < altura2) {
                alturaMaior = altura2
                alturaMenor = altura1
                taxaMenor = taxa1
                taxaMaior = taxa2
            } else {
                alturaMaior = altura1
                alturaMenor = altura2
                taxaMenor = taxa2
                taxaMaior = taxa1
            }

            while (alturaMenor < alturaMaior) {
                alturaMaior += alturaMaior * taxaMaior
                alturaMenor += alturaMenor * taxaMenor
                anos++
            }

            return `A crianca menor vai alcancar a crianca maior em ${anos} ano(s)`
        }
    } else {
        return 'Nao existe crianca menor'
    }
}

console.log(criancaMenorUltrapassara(1.5, 1.7, 0.03, 0.02))