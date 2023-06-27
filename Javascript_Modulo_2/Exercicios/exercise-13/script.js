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
  } else {
    alert("Jogador 2")
  }
})