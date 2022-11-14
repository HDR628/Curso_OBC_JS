let cards = ["valete", "dama", "rei", "coringa"];
let cardsLength = cards.length;
let answer = ""; // receive answer from user (add/remove/end)
// apply method LIFO(Last in Fisrt out)

do {
  answer = prompt(
    "Bem vindo a mesa, atualmente o baralho esta disposto com " +
      cardsLength +
      " cartas. Deseja adicionar/tirar carta ou sair ? (adicionar/tirar/sair)"
  );

  if (answer === "adicionar") {
    let addCard = prompt("Infome o nome da carta");
    addCard = cards.push(addCard);
    cardsLength++;
  } else if (answer === "tirar") {
    let take = cards.pop();
    alert("Carta tirada: " + take);
    cardsLength--;
  }
  /* alert(
    "Muito bem, agora a mesa está disposta com " +
      cardsLength +
      ". Sendo elas: " +
      cards
  );  teste  */
} while (answer !== "sair");
