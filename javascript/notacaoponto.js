console.log(Math.floor(4.2)) // essa funcao arredonda sempre o numero pra baixo

console.log(Math.ceil(4.2)) // essa funcao arredonda sempre o numero pra cima

/*const obj1 = {
    nome: 'newton',
    idade: 23
}
console.log(obj1) */ // objeto de um forma 

const obj1 = {}
obj1.nome = 'newton',
obj1.idade = 23
//obj1['nome'] = 'bola' // segundo jeito de fazer a mesma coisa de cima mais e mais indicado a forma de cima
console.log(obj1.nome)
console.log(obj1.idade)

function obj2(nome) {
    this.nome = nome
    this.nova = function () {
        console.log('eu sou a lenda')

    }
    
}
const obj3 = new obj2 ('estou me referindo a fuçao de cima')
const obj4 = new obj2 ('atribuindo um novo objeto')
const obj5 = new obj2 ('idade e 23')
console.log(obj3.nome)
console.log(obj4.nome)
obj3.nova()

