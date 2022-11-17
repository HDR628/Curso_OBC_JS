let queue = [];
choose = ""; // receber resposta de continuacao/add/remove

// numeros são melhores para "menu interativo"

do {
  let patients = ""; // String para receber os pacientes em texto da queue/fila
  for (let i = 0; i < queue.length; i++) {
    /*  iterar os elementos adicionados no array e coloca-los em variaveis de textos para mostra-los todos juntos ao inves de um alert/prompt para apenas 1 elemetos(bug no commit no anterior)   */
    patients += i + 1 + "º " + queue[i] + "\n";
  }

  choose = prompt(
    "Consultorio - Fila de Espera:\n" +
      patients +
      "\nOpções: \n1 - Adicionar novo paciente \n2 - Consultar paciente \n3 - Sair"
  );

  switch (choose) {
    case "1":
      let newPatients = prompt("Qual o nome do paciente ? ");
      queue.push(newPatients);
      break;
    case "2":
      let checkPatients = queue.shift();
      alert("Paciente consultado: " + checkPatients);
      break;
    case "3":
      alert("Encerrando expediente...");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (choose !== "3");
