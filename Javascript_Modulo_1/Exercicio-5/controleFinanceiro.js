let initialMoney;
let choice;
let addMoney;
let removeMoney;

initialMoney = prompt("Olá amigo 👋 qual a quantia inicial? ");
choice = prompt("Voce deseja adicionar ou remover dinheiro (add/remove)");

do {
  switch (choice) {
    case "add":
      addMoney = prompt("Muito bem, qual a quantia a ser adicionada? ");
      initialMoney = parseFloat(initialMoney) + parseFloat(addMoney);
      break;
    case "remove":
      removeMoney = prompt("Muito bem, qual a quantia a ser removida? ");
      parseFloat(removeMoney);
      initialMoney = parseFloat(initialMoney) - parseFloat(removeMoney);
      break;
    case "encerrar":
      alert("Quantia final : " + initialMoney);
      break;
  }
  alert("Quantia neste momento : " + initialMoney);
  choice = prompt("Voce deseja adicionar or remover dinheiro(add/remove/encerrar)");
} while (choice !== "encerrar");
