/* Cadastro de Recrutas */

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

window.alert("Passando para o proximo exercicio");

/* Calculadora de 4 Operações */

// Create two variables to receive numbers;
let x = prompt("Digite o primeiro numero:");
let y = prompt("Digite o segundo numero:");

/* Returning a number */
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
