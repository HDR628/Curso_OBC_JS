function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(a + b);
    }
  });
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(a - b);
    }
  });
}

const sumResult = asyncSum(50, 33);
const subtractResult = asyncSubtract(50, 10);
// const subtractResult = asyncSubtract(50, null); Com esse parametros da erro

Promise.all([sumResult, subtractResult])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Divisão do terminal, outro exemplo de uso da promisse all");

const numbers = [4, 9, 5, 13, 77]; /* Criação de um array de numeros */

/* Obter o quadrado de cada número */
function asyncSquare(x) {
  return new Promise((resolve, reject) => {
    resolve(x * x);
  });
}

/* O map nos retorna um array.
Promise.all() retorna um array de promises caso todas sejam resolvidas, retorna um array com os resultados respectivamente */
/* Tambem podemos utilizar os tratamentos ja usados como then,catch e finally. Encadeando/concatenando o metodo map neles */
Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
});

/* Vou testar ordenando um array de numeros */
const unsortedNumbers = [5, 2, 9, 1, 6];

/* Usando map, pra retornar uma array de promises */
let arrPromises = unsortedNumbers.map((number) => {
  return new Promise((resolve) => {
    resolve(number);
  });
});

setTimeout(() => {
  console.log(arrPromises);
}, 3000); // Visualizar o arr de promises depois do resultado do promise.all

Promise.all(arrPromises)
  .then((sortedNumbers) => {
    let sorted = sortedNumbers.sort((a, b) => a - b);
    console.log(`Numeros ordenados: ${sorted}`);
  })
  .catch((err) => {
    console.log(err);
  });
/* 

O metodo sort que utilizei nao funciona com promises/assicronismo, ficando meio travado. Da pra fazer funcionar, se usar o map para criar um array de promises, e no then concatenar o sort

Promise.all(unsortedNumbers.sort((numerosDesordenados) => compareNumbers(numerosDesordenados)))
  .then((sortedNumbers) => {
    console.log(sortedNumbers);
  })
  .catch((erro) => {
    console.log(erro);
  });  */
