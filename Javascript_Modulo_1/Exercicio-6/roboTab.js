let input; // receber o input/numero do usuário
let resultados = String; // receber a posição do número calculado

input = prompt("Olá amigo qual numero voce deseja a tabuada? ");
let tabuadaCompleta = ""

for (let i = 1; i <= 20; i++) {
  resultados[i] = input * i;
  tabuadaCompleta += (input + " X " + i + " = " + resultados[i] + "\n");
}

alert("Aqui está o resultado da tabuada: \n" + tabuadaCompleta)