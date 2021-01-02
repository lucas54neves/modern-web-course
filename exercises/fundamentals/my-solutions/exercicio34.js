/**
 * Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False
 * caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em
 * ambas palavras.
 */
function checkString(string1, string2) {
    let characterExists
    for (let i = 0; i < string1.length; i++) {
        characterExists = false
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] == string2[j]) {
                characterExists = true
            }
            if (string1[i] == string2[j].toLowerCase()) {
                characterExists = true
            }
            if (string1[i] == string2[j].toUpperCase()) {
                characterExists = true
            }
        }
        if (characterExists == false) {
            return characterExists
        }
    }
    return characterExists
}
const string1 = 'algorb'
const string2 = 'arogla'
console.log(string1, string2, checkString(string1, string2))