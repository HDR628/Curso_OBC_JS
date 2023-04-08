let vagas = [] // inicializando um array para receber os objetos

vagas.qtdTotal = [] // criação da propriedade que irá receber a qtdTotal de candidatos

function listarVaga() {
  let stringText = vagas.reduce(function (accString, nameVaga, indice) {
    accString += (`Indice da vaga: ${indice} - Vaga: ${nameVaga.nomeVaga}\n`)
    return accString
  }, "")
  alert(stringText)
} /* Agrupar as vagas em uma string de texto para exibir de forma completa ao inves de utilizar um alert p/ cada vaga e indice */

function criarVaga() {
  nomeVaga = prompt("Digite o nome da vaga: ")
  descVaga = prompt("Digite a descrição da vaga: ")
  dataLimite = prompt("Data limite(dd/mm/aaaa)")
  /* Criação previa de propriedades que serão utilizadas depois */
  candidatos = []
  nomesCandidatos = []
  let confirmação = confirm(`Voce deseja salvar as seguintes informações: \n
  Vaga: ${nomeVaga} \n
  Descrição: ${descVaga} \n
  Data Limite: ${dataLimite} `)
  if (confirmação) {
    vagas.push({ nomeVaga, descVaga, dataLimite, candidatos, nomesCandidatos })
    alert("A vaga foi devidamente crida 😃")
  } else {
    alert("A criação da vaga foi cancelada 🥲")
  }
}

function verVagas() {
  listarVaga()
  let escolha = parseFloat(prompt(`Qual o indice da vaga desejada ?`))
  if (escolha >= vagas.length || escolha < 0) {
    alert("Indice indisponivel.")
    return
  }/* Estava retornando undefined quando indicado uma vaga/indice não existente. Adicionando o if para testar se existia a vaga não ocorria/prevenia o erro de acontecer. O return posto ao fim age como se fosse um break(tipo do switch) e não continua a função. Outra forma também seria colocar o bloco de codigo seguinte dentro do else */
  alert(`Indice: ${escolha}\n
  Vaga: ${vagas[escolha].nomeVaga}\n
  Descrição: ${vagas[escolha].descVaga}\n
  Data Limite: ${vagas[escolha].dataLimite}\n
  Quantidade de Candidatos: ${vagas[escolha].candidatos.length}\n 
  Nome dos candidato: ${vagas[escolha].nomesCandidatos} `)
}

function inscreverCandidato() {
  listarVaga()
  let indiceDaVaga = parseFloat(prompt(`Informe o indice da vaga desejada`))
  let candidatoInscrever = prompt("Informe o nome do candidato ")
  let essaMesmo = confirm(`Essa e a vaga desejada para inscrição: \n
  ${vagas[indiceDaVaga].nomeVaga}, ${candidatoInscrever} ? `)
  if (essaMesmo) {
    vagas[indiceDaVaga].candidatos.push(Number(1))
    vagas[indiceDaVaga].nomesCandidatos.push(`${candidatoInscrever} `)
    alert(`A inscrição do candidato ${candidatoInscrever} na ${vagas[indiceDaVaga].nomeVaga} foi realizada com sucesso`)
  } else {
    alert(`A inscrição do candidato ${candidatoInscrever} foi cancelada 🥲`)
  }
}

function excluirVaga() {
  alert("Vagas disponiveis para exclusão: ")
  listarVaga()
  let indiceExcluir = parseFloat(prompt(`Informe o indice da vaga que deseja excluir`))
  let confirmarExclusao = confirm(`A vaga atualmente está disposta da seguinte maneira: \n
  Vaga: ${vagas[indiceExcluir].nomeVaga} \n
  Descrição: ${vagas[indiceExcluir].descVaga} \n
  Data Limite: ${vagas[indiceExcluir].dataLimite} \n 
  Quantidade de Candidatos: ${vagas[indiceExcluir].candidatos.length} \n 
  Nome dos candidato: ${vagas[indiceExcluir].nomesCandidatos} `)
  if (confirmarExclusao) {
    vagas.splice(indiceExcluir, 1)
    alert("Vaga excluida...")
  } else {
    alert("Vaga não foi excluida")
  }
}

function showMenu() { // função para passar o valor da escolha a outra variavel
  return parseFloat(prompt(`Sistema de vagas de Emprego. Selecione a opção desejada:\n
  1 - Listar vagas disponiveis\n
  2 - Criar uma nova vaga\n
  3 - Visualizar uma vaga\n
  4 - Inscrever um candidato em uma vaga\n
  5 - Excluir uma vaga\n
  6 - Sair\n`))
}

function loopSistema() {
  let respostaMenu = showMenu()
  do {
    switch (respostaMenu) {
      case 1:
        listarVaga()
        break;
      case 2:
        criarVaga()
        break;
      case 3:
        verVagas()
        break;
      case 4:
        inscreverCandidato()
        break;
      case 5:
        excluirVaga();
        break;
      case 6:
        alert("Saindo meu patrao 🫡")
        break;
      default:
        alert("Tu apertou o numero errado ")
    }
    respostaMenu = showMenu()
  } while (respostaMenu !== 6);
}

loopSistema()