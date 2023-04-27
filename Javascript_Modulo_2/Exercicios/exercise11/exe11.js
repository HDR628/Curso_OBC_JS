function addPlayer() {
  /* Referenciando os inputs do usuários */
  let position = document.getElementById(`position`).value
  let name = document.getElementById(`name`).value
  let number = document.getElementById(`number`).value
  /* Value irá retornar/acessar o valor/input do usuário*/

  let confirmation = confirm(`Deseja escalar o seguinte jogador:  ${name} na posição:  ${position}`)

  if (confirmation) {
    /* Referenciar o local onde sera "jogado" os jogadores */
    let team = document.getElementById(`team-list`)

    /* Criar elemento da lista */
    let playerLi = document.createElement(`li`)
    playerLi.id = `player` + number
    playerLi.innerText = `Posição: ${position} - Jogador: ${name}(${number})`

    team.appendChild(playerLi)

    /* Reset/limpando os inputs dos usuários */
    document.getElementById(`position`).value = ``
    document.getElementById(`name`).value = ``
    document.getElementById(`number`).value = ``
  }
}

function removePlayer() {
  /* Local para remoção */
  let localRemove = document.getElementById(`team-list`)

  let removePlayerByNumber = document.getElementById(`NumberToRemove`)

  let confirmation = confirm(`Deseja remover o jogador: ${name} da posição: ${position}`)

  if (confirmation) {
    localRemove.removeChild(removePlayerByNumber)

    document.getElementById(`numberToRemove`).value = ""
  }
}