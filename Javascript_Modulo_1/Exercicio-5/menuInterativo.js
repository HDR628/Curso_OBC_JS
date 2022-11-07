let choice = prompt("Ola amigo 👋🏻, escolha uma das alternativas: \n A - B - C - D - Encerrar ");

do {
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
      alert("Alternativa escolhida " + choice + ". O sistema está encerrando ");
      break;
  }
  choice = prompt("Muito bem amigo, agora escolha outra alternativa :  \n A - B - C - D - Encerrar");
} while (choice !== "Encerrar");
