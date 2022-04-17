const ex1 = []

for (var i = 0; i < 10; i++) { // pelo caso de estar usando o var sempre vai imprimir o 10
    ex1.push(function () {
        console.log(i)
    })
}
ex1 [2] ()
ex1 [8] ()