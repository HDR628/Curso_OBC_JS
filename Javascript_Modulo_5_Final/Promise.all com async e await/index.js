function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const numbers = [3, 1, 3, 6, 55];

/* Criação de uma variavel que ira armezenar os squares atraves do map, itera cada um e aplica/retorna o numero */
const squares = numbers.map(async (number) => {
  await waitFor(2); //função la de cima
  return number * number;
});

console.log(squares); // Retorna uma array de promises, no caso os estados dela (pending, resolved ou rejected)

// Utilizando o promise.all para resolver/mostrar os resultados(tratando com o then)
Promise.all(squares).then((results) => {
  console.log(`Apenas usando o promise.all com o then`);
  console.log(results); // Aqui ja retorna os valores/numeros ao quadrado e apresenta no terminal
});

// Utilizando eles em conjunto
async function calculate() {
  // Metodo para calcular tempo de execução do codigo
  console.time("map");
  console.log(`Utilizando o promise.all com async e await`);

  // criação de variavel paara armazenar os resultados, utilizando o await antes do promise para esperar o map percorrer/iterar os numeros e retornar os resultados.
  const numberSquares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(2);
      return number * number;
    }),
  );
  console.log(numberSquares);
  console.timeEnd("map");
}

calculate();
