function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: [],
  };

  alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão.`);

  return spaceship;
}

function accelerate(targetSpeed: number, spaceship: { name: string; speed: number }) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`);
  } else if (spaceship.speed < targetSpeed) {
    alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`);
  } else {
    alert(`Mantendo a velocidade da ${spaceship.name}...`);
  }
}

// O prompt interpreta o valor inserido como string || null(caso o usuario cancele a ação). Para evitar erros posso passar isso aqui no final:
// prompt("Insira o nome da nave a ser enviada:")! operador chamado non-null assertion que meio que diz "isso aqui sempre vai ser sting" o que pode dar erro futuramente tambe
// outra forma e add um valor padrão caso seja null, utilizando || "Valor Padrão" --- Também podemos fazer a verificação padrão com if(condição)...
const spaceshipName = prompt("Insira o nome da nave a ser enviada:") || "Nome padrão da nave";
const spaceshipCaptain = prompt("Insira o nome do capitão da nave:") || "Sem capitão";

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);

const speedInput = Number(prompt("Insira a velocidade desejada para a nave:") || "0");
accelerate(speedInput, currentShip);
