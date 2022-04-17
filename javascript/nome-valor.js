//par-nome/valor
const falando = 'opaaa'// contexto lexico 1

function executar () { //contexto lexico 2
    const falando = 'falaaa'
    return falando
}

// objetos sao grupos aninhados de pares nome/valor

const client = {
    nome: 'newton',
    idade: 23,
    profissao: 'dev junior',
    endereço: {
        rua: 'rua to de boa',
        numero: 14
    }
}
console.log(falando)
console.log(executar())
console.log(client)
