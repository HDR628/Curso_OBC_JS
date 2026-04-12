const spaceship = {
  name: "Galatic",
  speed: 0,
};

// Melhor visualização do codigo/objeto spaceship,mostrando tambem as propriedades do objeto
function accelarate(spaceship: { name: string; speed: number }, speed: number) {
  spaceship.speed = speed;
}

accelarate(spaceship, 100);
