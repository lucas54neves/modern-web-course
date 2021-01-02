/**
 * De 4 em 4 anos é ano bissexto
 * De 100 em 100 anos não é ano bissexto
 * De 400 em 400 anos é ano bissexto
 * Prevalecem as últimas regras sobre as primeiras
 */
function ehBissexto(ano) {
    if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(`1004 - ${ehBissexto(1004)}`)
console.log(`1005 - ${ehBissexto(1005)}`)
console.log(`2016 - ${ehBissexto(2016)}`)
console.log(`2017 - ${ehBissexto(2017)}`)
console.log(`2024 - ${ehBissexto(2024)}`)
console.log(`2025 - ${ehBissexto(2025)}`)
console.log(`1347 - ${ehBissexto(1347)}`)
console.log(`1348 - ${ehBissexto(1348)}`)
console.log(`1442 - ${ehBissexto(1442)}`)
console.log(`1440 - ${ehBissexto(1440)}`)
console.log(`1889 - ${ehBissexto(1889)}`)
console.log(`1888 - ${ehBissexto(1888)}`)