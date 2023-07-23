const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log("Utilizando o towns com o console.log:")
console.log(...towns) /* Separou o elementos do arrays em strings de texto */



console.log('Usando o ... em uma posição especifica do elemento presente no array ')
console.log(...towns[1]) /* Ocorre a separação dos caracteres quando e levado em consideração apenas um elemento/"posição" */

console.log("Realizando a copia do array")
let townsCopy = [...towns] /* Dependendo do elemento que voce deseja 'separar'/"copiar" é utilizado parenteses e/ou chaves(Dessa forma não afetará o array original caso algum elemento seja substituído */
console.log({ towns, townsCopy })

townsCopy.push("Hehe Boy") /* E colocado apenas no array de copia, não afetando o original, caso precise manter um "backup" */

/* Copia que afeta array original */
console.log(`Realizando copia do array que afeta o original`)
let townsCopyWrong = towns

/* Adicão e remoção do array original */
towns.pop()
towns.shift("THE FIRST ONE HEHE")
/* Agora colocando algo no array de copia errada */
townsCopyWrong.unshift("ADD ELEMENTS ON THE WRONG ARRAY")
townsCopyWrong.pop()   /* Os dois acima afetou o array original que não e algo muito legal, pode causar uma confusão acerca do array/objeto... que estamos trabalhando, para evitar e utilizado a forma acima com parenteses e/ou chaves */

console.log({ towns, townsCopyWrong })



/* Com objeto agora */

let townsObj = { ...towns }
console.log(townsObj) /* Exibe os elementos com propriedades fictícias/ordenada(0,1,2...). Dessa forma apresentando os elementos que anteriormente era elementos de um array cujo não tinham propriedades receberam uma e foram transformados em objetos */


/* Objeto clonado agora */

let townsObjCopy = { ...townsObj }
townsObjCopy.newProp = "HELLO DEAR"
/* Segue a mesma logica do arrays, quando utilizado os parenteses/chaves futuras modificações não afetaram o original */


console.log({ townsObj, townsObjCopy })
