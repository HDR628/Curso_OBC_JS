/* Utilizar o constructor Promise concatenado com o metodo .reject() para manter o mesmo padrão que utilizamos nos exemplos anteriores */
async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be of type number");
  }
  return a + b;
}

async function asyncSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be of type number");
  }
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

Promise.all([asyncSum(50, 25), asyncSubtract(70, 35)])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
