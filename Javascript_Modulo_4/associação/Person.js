class Person {
    constructor(name, address){
        this.name = name
        this.address = address
    }
}

module.exports = Person 


/* Poderiamos passar os parametros de address aqui tambem, no entanto podemos perder a flexibilidade/variabilidade do codigo */


/*
const Address = require(./Address.js)

class Person {
    constructor(name, street,number,neighborhood,city,state){
        this.name = name
        this.address = new Address(street,number...)
    }
} 
faltando so passar o endereço completo para a class Person...    
*/