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

let combinationsWin = [
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


function getWinRegions() {
  const winRegions = [];
  /* A primeira parte da verificação fala/retorna se o elemento está com algum elemento, logo após pegar/verificar o elemento existente ocorre a comparação com as demais regiões */
  if (copyArray[0][0] && copyArray[0][0] === copyArray[0][1] && copyArray[0][0] === copyArray[0][2])
    winRegions.push("0.0", "0.1", "0.2");

  if (copyArray[1][0] && copyArray[1][0] === copyArray[1][1] && copyArray[1][0] === copyArray[1][2])
    winRegions.push("1.0", "1.1", "1.2");

  if (copyArray[2][0] && copyArray[2][0] === copyArray[2][1] && copyArray[2][0] === copyArray[2][2])
    winRegions.push("2.0", "2.1", "2.2");
  if (copyArray[0][0] && copyArray[0][0] === copyArray[1][0] && copyArray[0][0] === copyArray[2][0])
    winRegions.push("0.0", "1.0", "2.0");
  if (copyArray[0][1] && copyArray[0][1] === copyArray[1][1] && copyArray[0][1] === copyArray[2][1])
    winRegions.push("0.1", "1.1", "2.1");
  if (copyArray[0][2] && copyArray[0][2] === copyArray[1][2] && copyArray[0][2] === copyArray[2][2])
    winRegions.push("0.2", "1.2", "2.2");
  if (copyArray[0][0] && copyArray[0][0] === copyArray[1][1] && copyArray[0][0] === copyArray[2][2])
    winRegions.push("0.0", "1.1", "2.2");
  if (copyArray[0][2] && copyArray[0][2] === copyArray[1][1] && copyArray[0][2] === copyArray[2][0])
    winRegions.push("0.2", "1.1", "2.0");

  if (winRegions.length > 0) {
    return winRegions;
  } else {
    return [];
  }
}


gameBoard.forEach(function (element) {
  element.addEventListener('click', function (ev) {

    let span = ev.currentTarget /* Pega/localiza o elemento clicado simultaneamente/atual */

    let region = span.dataset.region /* Pega o valores do data, neste caso dessa forma N.N */

    let rowColumnPair = region.split('.') /* O rowColumnPair será responsável pela separação da linha e coluna do elemento, apresentando-os dessa forma ["N","N"] ao invés de ["N.N"] */

    let row = rowColumnPair[0] /* o valor 0 atribuído ao rowColumnPair não influencia o clique,função da row, pois o rowColumPair ira pegar os elementos separados acima e atribuir ao elemento atual que será a row, exemplo caso o jogador clique na região 0.0 a linha/row sera passada como o 0 inicial e a coluna da mesma forma */

    let column = rowColumnPair[1]

    if (gridArea.dataset.turn == 'playerOneTurn') {

      element.classList = 'xTurn'

      copyArray[row][column] = "X"
      // console.table(copyArray)
      switchPlayer()
    } else if (gridArea.dataset.turn === 'playerTwoTurn') {

      element.classList = "oTurn"

      copyArray[row][column] = "O"
      // console.table(copyArray)
      switchPlayer()
    }

    let winner = getWinRegions()
    console.log(winner + gridArea.dataset.turn)

  })
})

