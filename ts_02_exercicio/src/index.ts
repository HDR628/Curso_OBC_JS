let spaceships: object[] = [];

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

  spaceships.push(spaceship);
  return spaceship;
}

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
/* TODO: Como criar uma esse mesmo codigo usando interface 
  TODO: Add notas para o codigo

*/
