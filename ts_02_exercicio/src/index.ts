let spaceships: object[] = []; // Criação do array global para armazenar e posteriormente listar as naves

// Criação da nave com os respectivos tipos de dados que podem ser passados, na hora que for chamar nas outras funções e
// necessario passar os dados que voce deseja usar, tipo quero saber se a nave ja ta lotada ou não, tenho que passar o crewLimit para saber...
function createSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [] as string[], // por ser um objeto e que quero que inicie vazio, e necessario usar o as string...Se fosse um variavel normal/global, nao seria necessario(podendo usar o padrão let crew: string[] = [])
    inMission: false,
  };

  alert(`Nave ${spaceship.name} criada com sucesso!
    com o piloto ${spaceship.pilot} e  numero de tripulantes de ${spaceship.crewLimit}.
    `);

  spaceships.push(spaceship); // Salvando no array
  return spaceship; // Retorno do objeto spaceship com os dados
}

// Que nem falei acima e necessario chamar a função/objeto que tu deseja acessar as propriedades/metodos...Nesse caso verifico se o numero de tripulantes esta de acordo com o limite da nave, se tiver espaço ai e add um novo membro
function addCrewMember(spaceship: { crew: string[]; crewLimit: number }, member: string) {
  if (spaceship.crew.length < spaceship.crewLimit) {
    spaceship.crew.push(member);
  } else {
    return alert(`Tripulação completa! A nave já atingiu o limite.`);
  }
}

function sendOnMission(spaceship: { inMission: boolean; crew: string[]; crewLimit: number }) {
  let needThisQtdCrew = spaceship.crewLimit / 3;
  if (spaceship.inMission === false && spaceship.crew.length >= needThisQtdCrew) {
    spaceship.inMission = true;
    alert(`Nave enviada para missão!`);
  } else if (spaceship.inMission === false && spaceship.crew.length < needThisQtdCrew) {
    alert(`Nave não possui tripulação suficiente para a missão.`);
  } else {
    alert(`Nave já está em missão!`);
  }
}

function listSpaceships() {
  if (spaceships.length === 0) {
    alert(`Nenhuma nave cadastrada!`);
  } else {
    spaceships.forEach((spaceship) => {
      console.log(spaceship);
    });
  }
}
// Pelo que pesquisei tem como fazer isso de forma mais pratica usando o interface da linguagem...
/* TODO[X]: Como criar uma esse mesmo codigo usando interface 
  TODO[X]: Add notas para o codigo


  criação de interface ficaria assim :

  interface Spaceship {
  name:string;
  pilot: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
  }

  a principal diferença que vou conseguir acessar as propriedades da interface/objeto de forma mais pratica

  antes teria que fazer assim : 

  SPACESHIP: {crew: string[]; crewLimit: number}  --- Tendo que fazer assim pra acessar os valores pares/chaves/propriedades do objeto
  function addCrewMember(spaceship: { crew: string[]; crewLimit: number }, member: string) {
  if (spaceship.crew.length < spaceship.crewLimit) {
    spaceship.crew.push(member);
  } else {
    return alert(`Tripulação completa! A nave já atingiu o limite.`);
  }
}

  com a INTERFACE fica assim :

  ai a variavel spaceship recebe a interface Spaceship, ai posso acessar as propriedades uma por uma
  fica mais easy, so passar a nave que foi criada e o nome do membro que tu quer add na tripulação
  function addCrewMember(spaceship: Spaceship, member: string){
  }

*/
