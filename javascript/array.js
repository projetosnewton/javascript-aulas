const lista = 
[
    'pao', 'cafe', 'suco', 'queijo'
]
console.log(lista[1], lista[0], lista[3])//itens que quero que apareça

lista[4] = 12 // adicionando item no array
console.log(lista[4])//mostra o item adicionado

console.log(lista.length)// mostra quantidades de item 

lista.push('newton', 45,{id: 3}, null)// push() codigo usado para adicionar itens no array

console.log(lista)

console.log(lista.pop())// retira o ultimo item do array
console.log(lista)
delete lista[0]// deleta o item selecionado, pelo indice ex: [0]
console.log(lista)

console.log(typeof lista)//tipo do array e object


