const Address = require('./Address')
const Person = require('./Person')

const addr = new Address('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ')
const none = new Person("Henry", addr)

console.log(none)
console.log(addr)
// e possivel chamar as funções/metodos presentes na classe, como a seguir
console.log(addr.fullAddress())
console.log(none.address.fullAddress())
