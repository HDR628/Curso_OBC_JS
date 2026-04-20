interface CelestialBody {
    name: String
    mass: Number
}

interface Star extends CelestialBody{
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody{
    population: Number
    createSatellite: (name: String) => void
}

let sun: Star = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
  }
// O sol e do tipo Star que se extende do tipo celestial body


// Criando essa classe que incorpora tudo da interface Planet, ela meio que obriga a declarar tudo que tem nela
class newPlanet implements Planet{
    name: String
    mass: Number
    population: Number

    constructor(name: String, mass: Number, population: Number){
        this.name = name
        this.mass = mass
        this.population = population
    }


    createSatellite(name: String) {
        /// codigo aqui
    }
}


// caso eu queira add mais alguma propriedade ao planet posso fazer isso atraves da interface sem nenhum problema
interface Planet{
    random?: String
}
/* Vide documentação/notebookLM(notas) */



