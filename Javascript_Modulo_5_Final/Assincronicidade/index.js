/* Codigo sincrono, algo linear. Like this: */
function step2() {
  console.log("Step 2");
}
console.log("Step 1");
step2();
console.log("Step 3");

/* Codigo assincrono, algo não linear. Like this: */

console.log("Step 4");
setTimeout(() => {
  console.log("Step 5");
}, 2000);
console.log("Step 6");
/* Basicamente oque ocorre é que o codigo continua executando enquanto espera a função setTimeout(tempo determinado), que e assíncrona. Logo por isso o step 6 e executado antes do step 5(Mesmo se colocar em ms o step 5 ele não sera executado antes que o step 6). Não travando o fluxo de execução*/
