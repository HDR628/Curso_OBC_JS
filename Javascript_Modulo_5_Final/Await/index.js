async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Both arguments must be numbers");
  }
  return a + b;
}

/*
Referencia - Modo "Antigo"
async function execute() {
  asyncSum(5, 10)
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
} */

/* So funciona dentro de funções assincronas, e fica aguardando a resolução da Promise...Depois podemos prosseguir com o codigo de forma sincrona. Tambem ocorre o retorno do travemento que tinhamos antes de usar async/await, nao executnado no segundo plano enquanto poderiamos fazer outro procedimento
Para trabalharmos com rejeição nos podemos utilizar o elementos try/catch.

*/
async function execute() {
  /* Tentativa de execução, caso seja numeros validos ent exibira o resultado normalmente */
  try {
    let result = await asyncSum(5, 10);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

execute();
