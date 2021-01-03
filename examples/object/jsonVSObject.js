/**
 * Aula sobre a comparacao entre JSON e Objeto
 * JSON formato textual para representar dados. Uma das grandes
 * diferencas entre JSON e Objeto eh que funcoes nao sao
 * representadas em JSON. JSON eh ideal para sistemas se
 * comunicarem.
 */
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 "))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 "))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))