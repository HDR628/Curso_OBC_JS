/* 
[X] Como saber o turno de cada jogador ? Resolução temporario e ir pelo data-turn atrelado ao container de grid
[X] Como capturar o elemento/espaço a ser usado ?  Utilização do addEventListener 
[X] Como passar/criar a imagem a partir do clique do usuário ? Foi adicionado classes aos respectivos cliques do usuários baseados no data-turn
[x] Criação de uma função/iteração que passe por todos os espaços e realize as funções abaixo da mesma forma 
[ ] Como identificar/checar o vencedor ?
[ ] Verificar se elemento/espaço está vazio ou preenchido 
*/

let copyArray = [['', '', ''], ['', '', ''], ['', '', '']]

let gameBoard = document.querySelectorAll(`#gridArea span`)
// console.log(gameBoard)


gameBoard.forEach(function (element) {
  element.addEventListener('click', function (ev) {
    if (gridArea.dataset.turn == 'playerOneTurn') {
      alert('Jogador 1')
      element.classList = 'xTurn'
      gridArea.dataset.turn = 'playerTwoTurn'
      // element.removeEventListener(`click`) não funciona🥲

    } else if (gridArea.dataset.turn === 'playerTwoTurn') {
      alert("Jogador 2")
      element.classList = "oTurn"
      gridArea.dataset.turn = "playerOneTurn"
    }
  })
})





// let dataSpace = document.querySelectorAll('[data-space]')
// console.log(dataSpace)








/* possibilidades de ganhar:
  horizontal
  1-2-3
  4-5-6
  7-8-9
  vertical
  1-4-7
  258
  369
  Diagonal
  159
  357
*/




/* dataSpace.forEach(function (elemento) {
  console.log(elemento.classList)
})  Consigo pegar todas as classes através dod dataset, no entanto aparece a classe grid... e não as com classes desejadas xTurn e oTurn..  */

// className traz o texto da classe escrito "normalmente"
// classList traz a tag junto com texto 

