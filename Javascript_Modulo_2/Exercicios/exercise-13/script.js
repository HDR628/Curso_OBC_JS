let copyArray = [['', '', ''], ['', '', ''], ['', '', '']] /* Criação de um array virtual para visualizar no console/js */

let gameBoard = document.querySelectorAll(`#gridArea span`)/* Pega todas as regiões utilizados no jogo */

function switchPlayer() {
  let playerAtual = document.getElementById(`gridArea`)
  if (playerAtual.dataset.turn === 'playerOneTurn') {
    playerAtual.dataset.turn = `playerTwoTurn`
  } else if (playerAtual.dataset.turn === 'playerTwoTurn') {
    playerAtual.dataset.turn = 'playerOneTurn'
  }
}

let winChances = [
  /* Horizontal */
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  /* Vertical */
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  /* Diagonal */
  [0, 4, 8],
  [2, 4, 6]
] /* Combinações que checam/validam o vencedor do jogo */


gameBoard.forEach(function (element) {
  element.addEventListener('click', function () {
    if (gridArea.dataset.turn == 'playerOneTurn') {
      element.classList = 'xTurn'
      console.log(copyArray)
      switchPlayer()
    } else if (gridArea.dataset.turn === 'playerTwoTurn') {
      element.classList = "oTurn"
      console.log(copyArray)
      switchPlayer()
    }
  })
})

