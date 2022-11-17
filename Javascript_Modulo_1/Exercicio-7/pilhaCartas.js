let cards = [];
let countCards;
let choose = ""; // receive answer from user
// apply method LIFO(Last in Fisrt out)

do {
  choose = prompt(
    "Bem vindo a mesa, atualmente o baralho esta disposto com " +
      cards.length +
      " cartas\n1 - Adicionar carta \n2 - Tirar carta \n3 - Sair"
  );

  switch (choose) {
    case "1":
      let newCard = prompt("Qual carta deseja adicionar ? ");
      cards.push(newCard);
      countCards++;
      break;
    case "2":
      let pullCard = cards.pop();
      alert("Carta puxada: " + pullCard);
      break;
    case "3":
      alert("Saindo da mesa...");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (choose !== "3");
