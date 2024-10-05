class Book  {
    constructor(title){  ///atributos - dados
        this.title = title
        this.published = false
    }
    //metodos
    publish(){
        this.published = true
    }

}
// eragon = instancia e book = classe
const eragon = new Book("Eragon")
const toradora = new Book("Tiger")

// criando/chamando metodo published
toradora.publish()

console.log(eragon)
console.log(toradora)

console.log(toradora instanceof Book) //confirma se a instancia e do objeto/classe, no caso Book
