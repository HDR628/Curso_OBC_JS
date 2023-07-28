function sum(...numbers) {
  return numbers.reduce((acc, number) => acc + number, 0)
  /*Declaração de uma função anonima através da arrow functions que não necessita do sintaxe/uso do returns */
}
// /* A função acima irá praticamente considerar todos os parâmetros passados como elementos de um array e fara a soma deles, não havendo limites. Uma coisa interessante de ressaltar e que caso tenha a presença de outros parâmetros e necessário colocar o ...(rest/restante) no final para que não ocorra erro */

/* 
Transformando função acima em ARROW FUNCTION

  let sum = (...numbers) => {
    return numbers.reduce((acc,number) => acc + number, 0)
  }

*/

/* 
DESESTRUTURAÇÃO

let sum = (...numbers) => {
  return numbers.reduce(accFunction, 0)
}

let accFunction = (acc, number) => acc + number
 */



console.log(sum(1, 1, 1)) // Expect output 3 
console.log(sum(3, 4, 123, 123)) 