function validarEmail(email) {
  const regex = /^\w{2,}@\w{2,}\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
//Se quisesse usar match() em vez de test(), seria: if (email.match(regex)) { ... }

function validarSenha(senha) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{8,}$/;
  return regex.test(senha);
}

function Cadastrar(nome, email, senha) {
  if (
    typeof nome !== "string" ||
    typeof email !== "string" ||
    typeof senha !== "string"
  ) {
    throw new Error("Todos os argumentos devem ser strings.");
  }

  if (!validarEmail(email)) {
    throw new Error("Email inválido.");
  }

  if (!validarSenha(senha)) {
    throw new Error(
      "Senha inválida. Deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.",
    );
  }

  return {
    nome: nome,
    email: email,
    senha: senha,
  };
}

// Código para integração com HTML
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o reload da página

  const nome = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("password").value.trim();
  const messageElement = document.getElementById("message");

  try {
    const usuario = Cadastrar(nome, email, senha);
    messageElement.textContent = `Cadastro realizado com sucesso para ${usuario.nome}!`;
    messageElement.style.color = "green";
    // Limpar campos
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  } catch (error) {
    messageElement.textContent = error.message;
    messageElement.style.color = "red";
  }
});
