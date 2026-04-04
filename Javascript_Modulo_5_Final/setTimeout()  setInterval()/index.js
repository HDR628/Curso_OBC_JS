console.log("Processo iniciado"); //Apenas para ter como base de comparação com o tempo de execução do setTimeout e setInterval

/* Esperar um tempo determinado para executar o bloco de codigo/função */
setTimeout(() => {
  console.log("4 segundos se passaram");
}, 4000);
/* O tempo e medido em milissegundos, 4sec = 4000ms. No entanto, caso deseje podemos separar/quebrar o tempo que desejamos utilizar para melhor visualição, como por exemplo:
 1000 * 4 para segundos, 1000 * 60 * 4 para termos 4 minutos, 1000 * 60 * 60 * 4 para termos 4 horas */

/* Tambem podemos armazenar o ID do setTimeout para usarmos outra função posteriomente, chamada clearTimeout() que fara a limpeza do ID obtido, no entanto o setTimeout que esperaria o tempo  determinado ja não ocorre mais, passa direto like this:
 
 const timeoutId = setTimeout(() => {
  console.log("4 segundos se passaram");
}, 4000); Ele será armazenado na variavel, e nao esperara o tempo determinado, caso queira limpar utilize o clearTimeout(timeoutId) 

clearTimeout(timeoutId)
 */

let seconds = 0;
const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos`);
  /* Podemos colocar uma condição para parar a execução do intervalo */
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Intervalo parado");
  }
}, 3000);
/* O setInterval se passa os mesmo parametros do setTimeout, mas ele executa o bloco de codigo/função de forma repetida a cada intervalo de tempo especificado. Sendo essa a principal diferença entre eles */

// clearInterval(intervalId);
/* O clearInterval tem a mesma função do clearTimeout, ou seja, limpar o ID do setInterval para que ele não execute mais o bloco de codigo/função de forma repetida a cada intervalo de tempo especificado */
