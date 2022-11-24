let escolha = "";
let objeto = { names: [], rooms: [], bath: [], garage: [] };

//console.log(objeto["nomes"].length); test

do {
  escolha = prompt(
    "Olá seja bem vindo a consultoria de imoveis, atualmente temos: " +
      objeto["names"].length +
      " catalogados. Você deseja : \n\n1 - Cadastrar imovel\n2 - Consultar imoveis cadastrados\n3 - Sair"
  );

  switch (escolha) {
    case "1":
      let nome = prompt("Digite o nome do proprietario: ");
      let quarto = prompt("Digite a quantidade de quartos do imovel: ");
      let banheiro = prompt("Digite a quantidade de banheiros do imovel: ");
      let garagem = prompt("O imovel possui garagem ? (sim/não) ");
      objeto.names.push(nome);
      objeto.rooms.push(quarto);
      objeto.bath.push(banheiro);
      objeto.garage.push(garagem);
      break;

    case "2":
      let imovelString = "";
      for (let i = 0; i < objeto["names"].length; i++) {
        imovelString +=
          "\n\nNome do proprietario: " +
          objeto.names[i] +
          "\nQuantidade de quartos do imovel: " +
          objeto.rooms[i] +
          "\nQuantidade de banheiros do imovel: " +
          objeto["bath"][i] +
          "\nO imovel possui garagem: " +
          objeto.garage[i] +
          "\n";
      }
      alert(imovelString);
      break;
    case "3":
      alert("Encerrando expediente...");
      break;
    default:
      alert("Opção Inválida");
      break;
  }
} while (escolha !== "3");
