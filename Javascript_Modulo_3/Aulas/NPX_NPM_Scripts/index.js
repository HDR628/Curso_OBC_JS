const helloWorld = require("hello-world-npm")

console.log(`Opa, executando o arquivo ${helloWorld()}`)

/* 
Posso executar esse arquivo atraves de um scritp criado no package.json(neste caso foi o start), como ja e uma palavra reservada
do package.json nõo e necessário colocar o "run" antes do comando.

Os npx são executaveis da biblioteca npm utilizada

Os scripts são atalhos criados pelos usuarios para facilitar a chamada de comando no "terminal", bem util caso o comando for longo
*/