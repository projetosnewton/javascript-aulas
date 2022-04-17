const pessoa = {
    nome: 'newton',
    idade: 23,
    endereco: {
        numero: 18,
        cep: 6521000,
        rua: 'americo jose'
    }
}

const {nome, idade,} = pessoa// msm que tire nomee idade do objeto pessoa
console.log(nome, idade)

const {endereco: {numero, cep, rua,}} = pessoa// acessando o objeto dentro de outro
console.log(numero, cep, rua)

const {nome: n, idade: i} = pessoa// pegado dados do objeto e atribuindo variaveis
console.log(n, i)