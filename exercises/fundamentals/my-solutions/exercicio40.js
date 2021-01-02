/**
 * Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma
 * de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C,
 * de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
 */
function checkNotes(array) {
    for (let i = 0; i < array.length; i++) {
        console.log({
            'Note': array[i],
            'Concept': checkNote(array[i])
        })
    }
}

function checkNote(note) {
    if (note >= 0 && note < 5) {
        return 'D'
    } else if (note >= 5 && note < 7) {
        return 'C'
    } else if (note >= 7 && note < 9) {
        return 'B'
    } else {
        return 'A'
    }
}

checkNotes([2.6, 7.8, 8.5, 9.9, 4.5])