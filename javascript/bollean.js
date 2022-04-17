let teste = true
console.log(teste)

teste = false
console.log(teste)

teste = 0
console.log(!!teste)

console.log('tipos que sao verdaddeiros')
console.log(!!3)
console.log(!!' ')
console.log(!!Infinity)
console.log(!!{})
console.log(!![])
console.log(!!(teste = true))

console.log('tipos falsos')
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!0)
console.log(!!(teste = false))
console.log(!!('' || null || 0 || 'oi'))//apenas o oi e verdadeiro entao so ele aparecera

nome = "oi"
console.log(nome || 'desconhecido') // operacao logica se nao tiver nada na variavel pela logica ira aparecer desconhecido, se adicionar algo na variavel aparecera


