/**
 * Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada
 * do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre
 * o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for
 * maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código
 * lido seja negativo.
 */

/**
 * To intall propt-sync model:
 *  npm install prompt-sync
 */
const prompt = require('prompt-sync')({sigint: true})

function lerCodigo() {
    return prompt('Insira o codigo do aluno: ');
}

function lerNotas() {
    const notas = []

    for (let i = 1; i <= 3; i++) {
        let resposta = ''

        resposta = prompt(`Insira a nota ${i} do aluno: `)
        
        notas.push(resposta)
    }

    return notas
}

function calcularMediaPonderada(notas) {
    let maiorNotaIndex = 0
    let outrasNotas = [1, 2]
    
    if (notas[maiorNotaIndex] < notas[1]) {
        maiorNotaIndex = 1
        outrasNotas = [0, 2]
    }

    if (notas[maiorNotaIndex] < notas[2]) {
        maiorNotaIndex = 2
        outrasNotas = [0, 1]
    }

    const total = notas[maiorNotaIndex] * 4 + notas[outrasNotas[0]] * 3 + notas[outrasNotas[1]] * 3
    
    return total / (4 + 3 + 3)
}

function executar() {
    let codigo = lerCodigo()

    while (codigo > 0) {
        notas = lerNotas()

        const mediaPonderada = calcularMediaPonderada(notas)

        if (mediaPonderada >= 5) {
            console.log('Aprovado')
        } else {
            console.log('Reprovado')
        }

        codigo = lerCodigo()
    }
}

executar()