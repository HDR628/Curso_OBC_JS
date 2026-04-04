function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada.");
    setTimeout(() => {
      if (true) {
        reject("Para facilitação visual do processo de rejeição da promise");
      } else {
        console.log("Resolvendo a promise...");
        resolve("Resultado");
      }
    }, 2000);
  });
}

const p = execute();
/* O metodo then() que pode ser utilizado junto com as promises, é usado para pegar/"armazenar" o valor resolvido pela promise, neste caso "Resultado" */

/* O metodo catch() que pode ser utilizado junto com as promises, é usado para tratar erros, mostra-los de maneira mais clara/agradavel...Diferente do erro que ocorre ao tentar ver o resultado da promise, logo apos a mudança de pending para resolved */

/* Alias podemos encadear os metodos then(),catch() e finally() */
p.then((result) => {
  console.log(`O resultado da promise é: ${result}`);
})
  .catch((err) => {
    console.log(`Mensagem de erro: ${err}`);
  })
  .finally(() => {
    console.log(`A promise foi finalizada`);
  });

/* Bom nos criamos uma variavel para armazenar a promise, que neste caso foi a variavel "p", no entanto e comum/padrão que encadeamos diretamente no função, neste caso a execute() ficando nesse formato 

execute().then((result) => {    console.log(`O resultado da promise é: ${result}`);})
  .catch((err) => { console.log(`Mensagem de erro: ${err}`);})
  .finally(() => {  console.log(`A promise foi finalizada`);});
*/

function sum(a, b) {
  return new Promise((resolve, reject) => {
    console.log(`Executando a função de soma...`);
    setTimeout(() => {
      if (a <= 0 || b <= 0) {
        reject(`Os numeros devem ser maiores que 0`);
      } else {
        resolve(`Soma dos numeros: ${a + b}`);
      }
    }, 2000);
  });
}

sum(5, 10)
  .then((result) => {
    console.log(`Resultado: ${result}`);
  })
  .catch((err) => {
    console.log(`Erro: ${err}`);
  })
  .finally(() => {
    console.log(`Operação finalizada`);
  });
