function  tratarErro(erro) {
    throw new Error('tem algo errado, tente novamente')
}

function exempoeErro(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
}
const obj = {nme: 'newton'}// o erro ta aqui em nome
console.log(exempoeErro(obj))