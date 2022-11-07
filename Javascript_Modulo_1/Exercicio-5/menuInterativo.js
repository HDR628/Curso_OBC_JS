let choice;

do {
  choice = prompt("Ola amigo 👋🏻, escolha uma das alternativas: \n A - B - C - D - Encerrar ");
  /*colocando o "input" dentro do "do while " a mensagem do encerrar aparece, caso contrario o loop apenas se encerra
   */

  switch (choice) {
    case "A":
      alert("Alternativa escolhida: " + choice);
      break;
    case "B":
      alert("Alternativa escolhida: " + choice);
      break;
    case "C":
      alert("Alternativa escolhida: " + choice);
      break;
    case "D":
      alert("Alternativa escolhida: " + choice);
      break;
    case "Encerrar":
      alert("Alternativa escolhida " + choice);
      alert("Encerrando...");
      break;
    default: // caso a pessoa nao digite nenhuma das alternativas
      alert("Opção invalida");
  }
} while (choice !== "Encerrar");
