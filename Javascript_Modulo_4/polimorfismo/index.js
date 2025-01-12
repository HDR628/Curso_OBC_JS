class Vehicle {
    move(){
        console.log("O veiculo esta se movendo")
    }
}

class Car extends Vehicle {
    /* Herdou metodo move da classe mãe, no entanto sobrescreveu o metodo/comportamento move presente */
    move(){
        console.log("O carro esta se movendo")
    }
}

class Bike extends Vehicle{
    move(){
        console.log("A bike ta descendo a ladeira ")
    }
}

class Ship extends Vehicle {
    move(){
        console.log("O navio esta navegando")
    }
}

class Airplane extends Vehicle {
    move(speed){
        console.log(`O aviao esta voando a ${speed} km/h`)
    }
}

const honda = new Car()
const caloi = new Bike()
const ship = new Ship()
const boing = new Airplane()

honda.move()
caloi.move()
ship.move()
boing.move()

/* Utilizando uma função pra chamar o move tbm funciona */

function engineStart(Vehicle){
    console.log("Start Engine")
    move(Vehicle){
        console.log("Veiculo iniciado")
    }
}

engineStart(boing)
