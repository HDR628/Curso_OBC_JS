/* Mais pratico do que ficar retornando promises, melhor visualmente tambem */
async function asyncSum(a, b) {
  return a + b;
}

async function asyncSubtract(a, b) {
  return a - b;
}

asyncSum(50, 25)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

asyncSubtract(70, 35)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

/* Ainda continua funcionando com o Promise.all(), suspeito que seja sempre melhor colocar o elemento que deseja passar em outra variavel e depois aloca-la num array
 */
Promise.all([asyncSum(50, 25), asyncSubtract(70, 35)])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

/* Exemplo do map, que obtem o quadrado dos numeros */
const numbers = [4, 9, 5, 13, 77];

async function asyncSquare(x) {
  return x * x; // Isso aqui seria praticamento o resolve da Promise
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
});
