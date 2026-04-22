/* Add info extras*/

function Decorator() {
    return function (target, key, descriptor) {
      // console.log('Chamando Decorator')

      descriptor.value = function(value: number){
        console.log(`Calculando ${value} elevado ao quadrado`)
        return value ** 2
      }
    }

    
  }
  
  class Planet {
    name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    @Decorator() // Quando alterei la em cima ele simplemente não passou pela função calculate
    calculate(value: number) {
      // ...
      console.log(`Calculando ${value} * 2`);
      return value * 2
    }
  }


const planet = new Planet("Terra")


const result = planet.calculate(4)

console.log(`Resultado =  ${result}`)

