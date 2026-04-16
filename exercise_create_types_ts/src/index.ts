/* Vou tentar usar a interface, ainda não vi aula sobre apenas li a documentação e exercicios no w3schools */

let allPlanets: Planet[] = []; //Pra listar todos depois

interface Planet {
  name: string;
  cordenadas: [number, number, number, number]; // Tipo tupla, aceita exatamente valores do tipo number e na qtd de 4
  situation: "habitado" | "habitavel" | "inabitavel" | "inexplorado";
  satelites: string[];
}

function createPlanet(name: Planet, cordenadas: Planet, sitaution: Planet) {
  const planet = {
    name: String(prompt("Qual o nome do planeta ?")),
    cordenadas: Number(prompt("Cordenadas do planeta ? ")),
    situation: String(prompt("Qual a situação do planeta ?")),
    satelites: [] as string[], // esse as serve pra tipo falar isso aqui vai ser um array de strings, para nao dar erro de tipagem
  };

  allPlanets.push(planet);
  return planet;
}



function updatePlanet(planetName: String, situation: string){

  let findPlanet = allPlanets.find((planet: Planet) => planet.name === planetName)

  if(findPlanet){
    let newSituation = String(prompt("Qual a nova situação do planeta ?"))

    if (newSituation !== "habitado" && newSituation !== "habitavel" && newSituation !== "inabitavel" && newSituation !== "inexplorado"){
      alert("Situação invalida, escolha entre habitado, habitavel, inabitavel ou inexplorado...")
      return;
    }else{
      findPlanet.situation = newSituation as "habitado" | "habitavel" | "inabitavel" | "inexplorado"
      return findPlanet.situation as "habitado" | "habitavel" | "inabitavel" | "inexplorado";
    }
  } else {
    alert("Planeta nao encontrado...")
  }

  alert("Planeta atualizado com sucesso!")
}


function addSatelite(planetName: String, sateliteName: String){

  let findPlanet = allPlanets.find((planet: Planet) => planet.name === planetName)

  if(findPlanet){
    findPlanet.satelites.push(sateliteName as string)
  }else{
    alert("Planeta nao encontrado...")
  }
}


function removeSatelite(planetName: String, sateliteName: String){

  let findPlanet = allPlanets.find((planet: Planet) => planet.name === planetName)

  if(findPlanet){
    if(findPlanet.satelites.includes(sateliteName as string)){
    findPlanet.satelites.splice(findPlanet.satelites.indexOf(sateliteName as string), 1)
    alert("Satelite removido com sucesso!")
  }else{
    alert("Satelite nao encontrado...")
  }

}}


function listPlanets(){
  return console.log(allPlanets);
}