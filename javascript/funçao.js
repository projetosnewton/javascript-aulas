//fucao sem retorno
function imprimirCalculo(a, b, c, d) {

    console.log((a + b * c) /d)

}
imprimirCalculo(12, 67, 2, 2)// passando um parametro pra cada o certo
imprimirCalculo()// daqui pra baixo d ero menos a ultima pois elevai pegar os valores necessarios o resto ele ignora
imprimirCalculo(2)
imprimirCalculo(1,2,2,2,2,2,2)
// funcao comretorno

function somar (a, b) {
    return a + b
}
console.log(somar(2, 3))

//pode ser assim tbm atribuindo logo valores para os parametros
function diferente(a = 5, b = 3 + 2) {
    return a + b
}
console.log(diferente())

function diferent1(a, b = 3 + 2) {
    return a + b
}
console.log(diferent1(1))
 