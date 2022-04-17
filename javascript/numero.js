const peso = Number('2.0')
const peso1 = 3.0

console.log(peso1, peso)
console.log(Number.isInteger(peso)) //saber se o numero e inteiro
console.log(Number.isInteger(peso1))

const avaliacao = 9.88
const avaliacao2 = 8.78

const total = avaliacao * peso + avaliacao2 * peso1
const media = total / (peso + peso1)

console.log(media.toFixed(2)) //funcao usada para limitar casas decimais
console.log(media.toString(2)) //usada para passar a variavel para string, com o numero 2 converte para binario
console.log(typeof media)




