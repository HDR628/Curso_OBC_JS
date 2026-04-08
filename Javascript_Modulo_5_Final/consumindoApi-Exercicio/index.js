// Esperar o DOM carregar para buscar as transações
document.addEventListener("DOMContentLoaded", () => {
  fetchTransactions();
});

// Função para achar as transações
async function fetchTransactions() {
  const transactions = await fetch("http://localhost:3000/transactions").then((res) => res.json());
  transactions.forEach(renderTransaction);
}

// Função para renderizar as transações
function renderTransaction(transactionData) {
  // Elemento pai
  let transaction = document.createElement(`div`);
  //identificador do elemento pai
  transaction.id = `transaction-${transactionData.id}`;

  //Elemento filhos
  let name = document.createElement(`div`);
  name.textContent = transactionData.name;

  let value = document.createElement(`div`);
  value.textContent = transactionData.value;

  /* Atribuir os elementos filhos ao pai e depois passar para seção que exibira as transações */
  transaction.append(name, value);
  document.querySelector("#allTransactions").appendChild(transaction);
}

// Seleção do Formulário
let form = document.querySelector("form");

// Prevenir o comportamento padrão do formulario
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  // Requisição POST
  const trasnferData = {
    name: document.querySelector("#name").value,
    value: document.querySelector("#value").value,
  };

  let response = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trasnferData),
  });

  let infoTrasnfer = await response.json();
  renderTransaction(infoTrasnfer);
  form.reset();
});
