/* 
[ ] Como saber o turno de cada jogador ?
[ ] Como capturar o elemento/espaço a ser usado
[ ] Como passar/criar a imagem a partir do clique do usuário
[ ] Definir turno ?
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