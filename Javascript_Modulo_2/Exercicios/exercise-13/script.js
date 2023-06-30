/* 
[X] Como saber o turno de cada jogador ? Resolução temporario e ir pelo data-turn atrelado ao container de grid
[X] Como capturar o elemento/espaço a ser usado ?  Utilização do addEventListener 
[X] Como passar/criar a imagem a partir do clique do usuário ? Foi adicionado classes aos respectivos cliques do usuários baseados no data-turn
[ ] Criação de uma função/iteração que passe por todos os espaços e realize as funções abaixo da mesma forma 
[ ] Como identificar/checar o vencedor ?

*/

document.getElementById(`space1`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space1.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space1.classList.remove("xTurn")
    space1.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"
  }
})

document.getElementById(`space2`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space2.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space2.classList.remove("xTurn")
    space2.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"

  }
})

document.getElementById(`space3`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space3.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space3.classList.remove("xTurn")
    space3.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"
  }
})

document.getElementById(`space4`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space4.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space4.classList.remove("xTurn")
    space4.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"
  }
})

document.getElementById(`space5`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space5.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space5.classList.remove("xTurn")
    space5.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"
  }
})

document.getElementById(`space6`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space6.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space6.classList.remove("xTurn")
    space6.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"
  }
})

document.getElementById(`space7`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space7.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space7.classList.remove("xTurn")
    space7.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"
  }
})

document.getElementById(`space8`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space8.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space8.classList.remove("xTurn")
    space8.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"
  }
})

document.getElementById(`space9`).addEventListener(`click`, function () {
  if (gridArea.dataset.turn === `playerOneTurn`) {
    alert("Jogador 1")
    space9.classList = "xTurn"
    gridArea.dataset.turn = `playerTwoTurn`
  } else if (gridArea.dataset.turn === 'playerTwoTurn') {
    alert("Jogador 2")
    space9.classList.remove("xTurn")
    space9.classList = "oTurn"
    gridArea.dataset.turn = "playerOneTurn"
  }
})

let dataSpace = document.querySelectorAll('[data-space]')
// console.log(dataSpace)


dataSpace.forEach(function (elemento) {
  console.log(elemento.classList)
}) /* Consigo pegar todas as classes através dod dataset, no entanto aparece a classe grid... e não as com classes desejadas xTurn e oTurn..  */






// className traz o texto da classe escrito "normalmente"
// classList traz a tag junto com texto 