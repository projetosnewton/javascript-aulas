// array nao entendi a aula kk
function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj))// vai daum valor enre 50 e 40

function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj1 = {max: 50, min: 40}
console.log(rand({}))//ele vai de0a 1000 aleatoriamente 
