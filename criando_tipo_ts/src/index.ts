/* Tipo Literal - e quase como se fosse uma const que nao altera o valor */
// let literal: "Teste";

// literal = "Mudando teste"  Aqui vai dar erro porque oq ele ta entendendo e que a variavel literal so pode ter o tipo/valor "Teste" e nao pode ser alterado...Igual const mesmo.
// E interessante usar junto com as union types(aqueles tracinhos assim que funciona como se fosse um "ou" -> | )
// se tu querer receber um direção por exemplo, tu pode usar isso pra limitar...Aceitando apenas left,right,up e/ou down por exemplo.

/* Old way on practice
let planet = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn" | "Uranus" | "Neptune";

create a type for planets ai posso escolher uma das opções
*/

///// ------------------------- New way ///////
type Planet = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn" | "Uranus" | "Neptune";

let planet: Planet; /* Vou conseguir acessar as opções de planetas definidos no tipo Planet atraves da variavel planet */

function checkPlanet(planet: Planet) {
  if (planet === "Earth") {
    console.log("U are in home baby ");
  } else {
    console.log(`U are in ${planet}. Enjoy...`);
  }
}

checkPlanet("Earth");
checkPlanet("Mars");

// Funciona com função também

type greetingFunction = (name: string) => void;

function sayHello(greet: greetingFunction) {
  let name = String(prompt("Seu nome ?"));
  greet(`- ${name}`);
}

// sayHello("Henrique") Assim da erro, pelo que entendi e pq tenho que "encapsular" passar o parametro para função greetingFunction, ai tem que ficar assim :

sayHello((name) =>
  console.log(`Hello ${name}`),
); /* Aqui eu to passando a função anonima pra função sayHello, e ai ela vai executar a função anonima passando o nome que o usuario digitou no prompt */
