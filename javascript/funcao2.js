//armazenando uma funçao em uma variavel
// funçao anonima
const soma = function (a, b, c) {

    return (a + b) /c
}
console.log(soma (3, 5, 2))

//exemplo 2 funcao anonima
const soma1 = function (a, b) {
    console.log(a + b)
}
soma1 (2, 3)

//armazenado funçao arrow em uma variavel
const ex1 = (a, b) => {
    return a + b
}
console.log(ex1(2, 4))
//ex2
const ex2 = (f, r) => {
    console.log(f * r)

}
ex2(2, 5)

// retorno implicito arrow, executa apenas uma unica linha de codigos
const sub = (q, r) => q - r // q - r representa o return
console.log(sub (10, 4))
