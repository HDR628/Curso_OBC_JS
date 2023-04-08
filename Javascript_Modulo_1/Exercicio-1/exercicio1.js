/* Cadastro de Recrutas */
window.alert("Cadastro de Recrutas");
let firstName = prompt("Escreva seu primeiro nome:");

let lastName = prompt("Escreva seu sobrenome:");

let studyArea = prompt("Campo de estudo atual:");

let birth = prompt("Ano de nascimento:");

const yearNow = 2022;

let calculateAge = yearNow - birth;

console.log(firstName);
console.log(lastName);
console.log(studyArea);
console.log("Sua idade atual e: " + calculateAge);
/* Outra forma de apresentar os dados das variaveis : */
alert(
  "Recruta cadastrado com sucesso! \n Nome do Recruta: " +
  firstName + " " +
  lastName +
  "\n Atualmente estuda/trabalho no ramo de: " +
  studyArea +
  " e tem " +
  calculateAge +
  " anos"
);

window.alert("Passando para o proximo exercicio");

/* Calculadora de 4 Operações */

// Create two variables to receive numbers; Receberam em forma de string/texto, importante passar para number
let x = prompt("Digite o primeiro numero:");
let y = prompt("Digite o segundo numero:");

/* Returning a number from string receive above */
let xFloat = parseFloat(x);
let yFloat = parseFloat(y);

let soma = xFloat + yFloat;
let sub = xFloat - yFloat;
let multi = xFloat * yFloat;
let divi = xFloat / yFloat;

console.log("Soma = " + soma);
console.log("Subtracao = " + sub);
console.log("Multiplicacao = " + multi);
console.log("Divisao =" + divi);
