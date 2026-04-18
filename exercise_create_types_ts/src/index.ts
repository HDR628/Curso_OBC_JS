/* Vou tentar usar a interface, ainda não vi aula sobre apenas li a documentação e exercicios no w3schools */

let allPlanets: Planet[] = []; //Pra listar todos depois

type situationPlanet = "habitado" | "habitavel" | "inabitavel" | "inexplorado";
type cordenadas = [number, number, number, number];

interface Planet {
  name: string;
  cordenadas: cordenadas; // Tipo tupla, aceita exatamente valores do tipo number e na qtd de 4
  situation: situationPlanet;
  satelites: string[];
} // Na aula o professor utilizou objeto

function createPlanet() { 
  let name = String(prompt("Qual o nome do planeta ?") || "") // Caso o usuario nao digite nada

  while (name === "") {
    alert("Nome invalido, digite novamente...")
    name = String(prompt("Qual o nome do planeta ?") || "")
  }

  /* Como estava recebendo 1 texto de numeros, creio que resolve se eu pegar 1 por 1 */
  let cord1 = Number(prompt("Qual a primeira cordenada ?"))
  let cord2 = Number(prompt("Qual a segunda cordenada ?"))
  let cord3 = Number(prompt("Qual a terceira cordenada ?"))
  let cord4 = Number(prompt("Qual a quarta cordenada ?"))

  let cordenadas: cordenadas = [cord1, cord2, cord3, cord4] // Se passar texto da ruim

  // 1 vez usando o metodo some, pelo que entendi e como se perguntase "tem alguem aqui que atende essa condição?" ele retorna true/false se 1 qualquer cordenada for do tipo NaN ele retorna true...
  while (cordenadas.some((valor) => Number.isNaN(valor))) {
    alert("Cordenadas invalidas, digite novamente...")
    cord1 = Number(prompt("Qual a primeira cordenada ?"))
    cord2 = Number(prompt("Qual a segunda cordenada ?"))
    cord3 = Number(prompt("Qual a terceira cordenada ?"))
    cord4 = Number(prompt("Qual a quarta cordenada ?"))

    cordenadas = [cord1, cord2, cord3, cord4];
  }

  // if(cordenadas.includes(NaN) || ""){
  //   alert("Cordenadas invalidas, digite novamente...")
  //   cord1 = Number(prompt("Qual a primeira cordenada ?"))
  //   cord2 = Number(prompt("Qual a segunda cordenada ?"))
  //   cord3 = Number(prompt("Qual a terceira cordenada ?"))
  //   cord4 = Number(prompt("Qual a quarta cordenada ?"))
  // } So funcionava a 1 verificaçào, caso passase 1 tipo diferente nos demais tentativas ele passava como "numero"
  // TODO[X]: Verificar se da erro ao passar um texto ou outro caractere, ai coloco igual ali em cima o while  


  let situation: situationPlanet
  while (true) { // devido ao true inicia 1 vez 
    const situationInput = String(prompt("Qual a situação do planeta ? (habitado, habitavel, inabitavel, inexplorado)"))
    // let onlyAccept = ["habitado","habitavel","inabitavel","inexplorado"]
    if (["habitado", "habitavel", "inabitavel", "inexplorado"].includes(situationInput)) { /// se o input do usuario for um desse e estiver incluido no situationInput ele entra no if
      situation = situationInput as situationPlanet;
      break;
    } else {
      alert("Situação invalida, tente novamente")
    }
  }

  const planet: Planet = {
    name,
    cordenadas,
    situation,
    satelites: []
  }

  allPlanets.push(planet)
  return planet
} // Na aula o professor utilizou apenas o metodo push no array global de planetas


function findPlanet(name: string) { // Vi no site do mdn, estava com dificuldade de lembrar como usar "certinho"
  return allPlanets.find((nomePlaneta) => nomePlaneta.name === name)
}  // Professor armazenou numa variavel e utilizou o return no final da seguinte maneira ->  return planet ?? false (caso nao ache)

function updatePlanet(name: string, newSituation?: string) {
  let planetName = findPlanet(name)

  // Esqueci de anotar mas chamam essa verificação de existencia(neste caso) como early return, pra nao ficar indentando if e if
  if (!planetName) {
    alert("Esse planeta não esta registrado")
    return
  } else {
    newSituation = String(prompt(`Qual a nova situação do planete ?\n
      habitado\n
      habitavel\n
      inabitavel\n
      inexplorado\n `))

    if (newSituation !== "habitado" && newSituation !== "habitavel" && newSituation !== "inabitavel" && newSituation !== "inexplorado") {
      alert("informe um valor valido")
      newSituation = String(prompt(`Qual a nova situação do planete ?\n
          habitado\n
          habitavel\n
          inabitavel\n
          inexplorado\n `))
    } else {
      planetName.situation = newSituation
    }
  }
}


function addSatelite(name: string, sateliteName?: string) {
  let planetName = findPlanet(name)

  if (!planetName) {
    alert("Esse planeta não existe!")
  } else {
    sateliteName = String(prompt(`Informe o nome do novo satelite: `))
    if (planetName.satelites.includes(sateliteName)) {
      alert("Esse planeta ja tem esse satelite, não e possivel adicionar!")
    } else {
      planetName.satelites.push(sateliteName)
      alert("Satelite add com sucesso!")
    }
  }
}

function removeSatelite(name: string, sateliteName?: string) {
  let planetName = findPlanet(name)

  if (!planetName) {
    alert("Esse planeta não existe")
  } else {
    alert(`Atualmente temos esses satelites ao entorno desse planeta: \n
      ${planetName.satelites}`)
    sateliteName = String(prompt("Qual satelite deseja remover ?"))
    let sateliteIndex = planetName.satelites.indexOf(sateliteName)

    planetName.satelites.splice(sateliteIndex, 1)
    alert("Removido com sucesso")
  }
}

function listPlanets() {
  console.log(allPlanets)
}



createPlanet()
listPlanets()
updatePlanet("Marte")
listPlanets()
addSatelite("Marte")
listPlanets()
removeSatelite("Marte")
listPlanets()