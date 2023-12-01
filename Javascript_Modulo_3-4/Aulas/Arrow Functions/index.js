function normalSum(a, b) {
  return a + b
}

console.log(`${normalSum(5, 4)}`)



/* Declara/cria a variável, apos isso coloque os paramentos e depois a setinha característica da arrow Function. Logo apos o 'escopo' de retorno/ações... */
// let arrowFunction = (a, b) => { return a + b }

let arrowFunction = (a, b) => a + b /* Caso a ação/retorno seja declarável em uma única linha é possível fazer dessa forma 😄*/

console.log(`${arrowFunction(3, 7)}`)

/* Não necessitou de parenteses como no caso acima */
let double = n => `O dobro do numero: ${n} é igual a = ${n * 2}`
console.log(double(3))

/* Caso comum, utilizando em conjunto com as high-order-functions */
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

let startWithLetterP = towns.filter(towns => towns[0] === 'P')
console.log(startWithLetterP)