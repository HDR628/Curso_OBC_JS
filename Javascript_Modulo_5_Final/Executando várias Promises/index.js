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

function baixarArquivo(archive) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof archive !== "string") {
        reject("O arquivo deve ser do tipo string");
      } else {
        resolve("Arquivo baixado com sucesso");
      }
    }, 2000);
  });
}

function processarArquivo(process) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof process !== "string") {
        reject("O arquivo necessita ser do tipo string para ser processado");
      } else {
        console.log("Processando arquivo...");
        resolve("Arquivo processado com sucesso");
      }
    }, 3000);
  });
}

function salvarArquivo(save) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof save !== "string") {
        reject("O arquivo necessita ser do tipo string para ser salvo");
      } else {
        console.log("Salvando arquivo...");
        resolve("Arquivo salvo com sucesso");
      }
    });
  });
}
/* Tem que colocar em array
Se quiser da pra fazer assim tambem:
let baixar = baixarArquivo("meuArquivo.txt");
let processar = processarArquivo("meuArquivo.txt");
let salvar = salvarArquivo("meuArquivo.txt");

let infoArquivo = [baixar, processar, salvar];

Promise.all(infoArquivo)
ai so concatenar o then e catch, fica mais organizado
*/
Promise.all([baixarArquivo("meuArquivo.txt"), processarArquivo("meuArquivo.txt"), salvarArquivo("meuArquivo.txt")])
  .then((results) => {
    console.log(`Todas as operações foram concluídas com sucesso! 
      baixarArquivo - ${results[0]}
      processarArquivo - ${results[1]}
      salvarArquivo - ${results[2]}`);
  })
  .catch((err) => {
    console.log(err);
  });
/* Agora da pra ver o texto/resultado de cada parametro que passei */
