module.exports = class Product{
    /* inStock tem valor base para ser incrementado/decrementado conforme solicitado */
    constructor(name,description,price,inStock = 0){
        this.name = name
        this.description = description
        this.price = price 
        this.inStock = inStock
    }
    
    addToStock(quantity){
        this.inStock += quantity
    }

    removeFromStock(quantity){
        this.inStock -= quantity
    }
}
