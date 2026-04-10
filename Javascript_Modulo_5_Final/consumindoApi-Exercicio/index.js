// Esperar o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  fetchTransfers();
});

// Função asíncrona para buscar as transferências do servidor
async function fetchTransfers() {
  const transfers = await fetch("http://localhost:3000/transactions");

  const dataTransfers = await transfers.json();
  dataTransfers.forEach(renderTransfer);
  calculateTotal();
}

function renderTransfer(transferData) {
  // Elemento pai, e incremento o id do elemento a cada trasnferência renderizada
  const transference = document.createElement("div");
  transference.id = transferData.id;

  // Elementos filhos
  const name = document.createElement("p");
  name.textContent = transferData.name;

  const value = document.createElement("p");
  value.textContent = transferData.value;

  // Botoes para editar e excluir a transferência
  const editBtn = document.createElement("button");
  editBtn.textContent = "Editar";
  editBtn.addEventListener("click", () => {
    const newName = prompt("Digite o novo nome:");
    const newValue = prompt("Digite o novo valor:");
    updateTransfer(transferData.id, { name: newName, value: newValue });
    calculateTotal();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Excluir";
  deleteBtn.addEventListener("click", () => {
    deleteTrasnfer(transferData.id);
    calculateTotal();
  });

  transference.append(name, value, editBtn, deleteBtn);
  document.querySelector("#transactions").appendChild(transference);
}

// Seleção do form e POST
const form = document.querySelector("#transaction-form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const newTransferData = {
    name: document.querySelector("#transaction-name").value,
    value: document.querySelector("#transaction-value").value,
  };

  const responsePost = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTransferData),
  });

  const saveNewTransfer = await responsePost.json();
  console.log(saveNewTransfer);
  renderTransfer(saveNewTransfer);
  calculateTotal();
  form.reset();
});

async function updateTransfer(id, updateData) {
  updateData = {
    name: document.querySelector("#transaction-name").value,
    value: document.querySelector("#transaction-value").value,
  };

  await fetch(`http://localhost:3000/transactions/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });
}

async function deleteTrasnfer(id) {
  await fetch(`http://localhost:3000/transactions/${id}`, {
    method: "DELETE",
  });
  document.getElementById(id).remove();
}

function calculateTotal() {
  const updateAmount = document.querySelectorAll(".transaction-value");
  let totalAmount = 0;

  updateAmount.forEach((transaction) => {
    totalAmount += transaction.value;
  });

  document.getElementById("total-amount").textContent = `Total: R$ ${totalAmount}`;
}
