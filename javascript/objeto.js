const nt =  {} // forma 1 de criar objeto
nt.nome = 'oi'
nt.valor = 123.45 
nt ['desconto bom'] = 20
console.log(nt)

const produto = { // forma 2 de criar objeto
    nome: 'app remoto de sucesso',
    val: 234.99,
    id: 1,
    obj: {
        ola: 1,
        obj2: {
            ola2: 2,
            obj: {
                olhala:6
            }
        }

    }
}
console.log(produto)

