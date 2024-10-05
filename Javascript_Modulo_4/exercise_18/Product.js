class Product {
    constructor(name, description,price,instock){
        this.name = name
        this.description = description
        this.price = price
        this.instock = 0
    }

    addToStock(quantity){
        this.instock =+ quantity
        console.log(this.instock)
    }

    calculateDiscount(discount){
        let finalPrice = this.price - (this.price * (discount/ 100))
        this.price = finalPrice
        console.log(finalPrice)
    }
    /* 
    addToStock  
    calculateDiscount    
    */
}

const produtoNovo = new Product("computador","tecnologico",150)
console.log(produtoNovo)

produtoNovo.addToStock(10)
console.log(produtoNovo)

produtoNovo.calculateDiscount(5)
console.log(produtoNovo)