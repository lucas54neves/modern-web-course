/**
 * Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função
 * recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que
 * foi paga e o valor da anuidade. Aanuidade deve ser paga no mês de janeiro. Por mês, é
 * cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser
 * pago para o respectivo mês escolhido.
 */
function calcularJurosCompostos(divida, tempo) {
    return divida * Math.pow(1 + 0.05, tempo)
}

function calcularValor(mesPago, valor) {
    const tempo = mesPago - 1
    if (tempo > 0) {
        return calcularJurosCompostos(valor, tempo)
    } else {
        return valor
    }
}

for (let i = 1; i <= 12; i++) {
    console.log(i, calcularValor(i, 1000))
}