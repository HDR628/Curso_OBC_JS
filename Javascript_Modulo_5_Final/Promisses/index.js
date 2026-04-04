// Para melhorar a visualização no terminal, comenta as partes que voce nao deseje ver, assim ficara mais facil/entender o processo de cada um.

/* Promises são objetos que retornam um valor que foi gerado por elementos/blocos de codigo sincronos/assincronos
ele tem 3 status: 
pending = pendente, ou seja, a promise ainda não foi cumprida ou rejeitada
resolved = resolvida, ou seja, a promise foi cumprida com sucesso
rejected = rejeitada, ou seja, a promise foi cumprida com falha

Parece interessante quando temos que buscar algum dado que demora um certo periodo de tempo para ser processado, enquanto ainda podemos trabalhar com outros blocos de codigo, se necessario
a informação que fomos buscar usando a promise pode ser usado para termos um resultado mais consistente. Imagine buscar o historico de gastos do mes, no seu banco, ver o balanço atual e uma ideia de gastos fixo e variaveis, assim podemos nos planejar para ter um controle melhor, excluindo/inserindo essas flutuações de gastos
*/

// const examplePromise = new Promise(() => {
//   console.log(`A promise está sendo executada...`);
//   let seconds = 0;
//   setTimeout(() => {
//     seconds += 2;
//     console.log(`A promise foi executada nesses ${seconds} segundos`);
//   }, 2000);
// });
// console.log(examplePromise);
/* No bloco de codigo acima temos a criaçÃo de uma promise, que cai primeiramente no console.log(exencutada...) logo apos temos o setTimeout que vai ser executado apos 2 segundos, e fora do bloco de codigo de criação da promise, apresntamos ela no console para termos uma representação visual do seu status...Percebendo que a forma como ela trabalha com assincronidade(foi exeuctado, iniciado o settimeout -> continuo para o prox bloco que é o console enquanto ainda estava processando o setTimeout) */

/* Nos exemplos a seguir ela está mais complexa/completa pois passamos os parametros resolve e reject e tambem trabalhamos com possiveis condições */

const resolvePromise = new Promise((resolve) => {
  console.log(
    `A promise de resolução está sendo executada...`,
  ); /* Antes de entrar no setTimeout, executando de forma "linear" */
  setTimeout(() => {
    console.log(`Resolvendo a promise`);
    resolve("Resultado da promise");
  }, 4000); /* Entrou no bloco de codigo do setTimeout, logo pulamos para o codigo seguinte, que no caso seria o console.log(resolvePromise) que está do lado de fora. Nesse momento, a promise ainda está pendente e sera resolvida em 4 sec */
});

console.log(
  resolvePromise,
); /* Pulou para essa parte do codigo, onde o parametro resolve ainda está pendente */

setTimeout(() => {
  /* Esse bloco de codigo sera executado logo apos o console.log(resolvePromise) e tem um temporizador de 5 seg, dando o tempo de execução do timeout do bloco de codigo do setTimeout la em cima, apresentando o resultado da promise */
  console.log(
    `=============================== RESOLVE PROMISE ===============================`,
  );
  console.log(resolvePromise);
}, 5000);

setTimeout(() => {
  console.log(
    `--------------------------------------------------------`,
  ); /* So pra dividir no terminal os resultados das promises com resolve e reject */
}, 6000);

const rejectPromise = new Promise((resolve, reject) => {
  console.log(`A promise de rejeição está sendo executada...`);
  setTimeout(() => {
    if (true) {
      reject(false);
    } else {
      console.log(`Rejeitando a promise`);
      resolve(true);
    }
  }, 8000);
}); /* Da erro pois caiu no bloco de if(true)demonstrando que a promise foi rejeitada, teve erro */

setTimeout(() => {
  console.log(
    `=============================== REJECT PROMISE ===============================`,
  );
  console.log(rejectPromise);
}, 9000);

setTimeout(() => {
  console.log(`-----------------------------`); /* Dividir conteúdo */
  console.log(
    `=============================== EXECUTE PROMISE ===============================`,
  );
}, 10000);

function executePromise() {
  return new Promise((resolve, reject) => {
    console.log(`Executando a promise...`);
    setTimeout(() => {
      console.log(`A promise foi executada...`);
      resolve(`Resultado da promise executada`);
    }, 12000);
  });
}

const executedPromise = executePromise();
console.log(executedPromise);
