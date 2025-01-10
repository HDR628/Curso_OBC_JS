class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getBySquaredMeters(){
        return this.area / this.price
    }
}

const imovel = new Property(250,177000)
console.log(imovel)
console.log(imovel.getBySquaredMeters())

class House extends Property { } /* Herdando comportamentos/construtores da classe mãe */

const newHouse = new House(122,1222000)
console.log(newHouse)

class Apartament extends Property {
    constructor(number,area,price){
        super(area,price)
        this.number = number
    }
    
    getFloor() {
       return this.number.slice(0, -2)
    }
}

const apt = new Apartament(211,200,20000000)
console.log(apt)
console.log(apt.getFloor())