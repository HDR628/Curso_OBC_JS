let array = ["Zeus ", "Ares ", "Afrodite ", "Poseidon "];
answer = ""; // receber resposta de continuacao/add/remove

alert("Ola amigo seja bem vindo ao consultório\nPor favor aguarde a ordem do seguinte pacientes: ");
for (let i = 0; i < array.length; i++) {
  alert(i + 1 + "º -  Paciente: " + array[i]);
}
answer = prompt("Voce desaja adicionar novo paciente, consultar paciente ou Sair ? (adicionar/consultar/sair)");

// novo paciente add at the end of array (push)
// consultar paciente remove first paciente and show your name (shift)
// sair

do {
  if (answer === "adicionar") {
    let add = prompt("Por favor escreva o nome do paciente: ");
    add = array.push(add);
  } else if (answer === "consultar") {
    let consult = array.shift();
    alert("Paciente consultado : " + consult);
  }
  alert("Ordem de pacientes atual: " + array);
  answer = prompt("  Voce desaja adicionar novo paciente, consultar paciente ou Sair ? (adicionar/consultar/sair) ");
} while (answer !== "sair");
