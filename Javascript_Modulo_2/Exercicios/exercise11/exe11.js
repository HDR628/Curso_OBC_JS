function escalarJogador() {
  /* referenciar local */
  let players = document.getElementById(`escalacao`)

  let camposPreencher = document.createElement(`ol`) /* Campo para receber labels e inputs */
  camposPreencher.type = `I`

  let position = document.createElement(`li`)
  position.innerHTML = `<label for="position">Posição do Jogador: </label>`

  let positionInput = document.createElement(`input`)
  positionInput.type = `text`
  positionInput.id = `position`

  /* Conectando */
  position.appendChild(positionInput)
  // players.appendChild(position) teste - funciona label e input 

  let namePlayer = document.createElement('li')
  namePlayer.innerHTML = `<label for="name">Nome do Jogador: </label>`

  let namePlayerInput = document.createElement('input')
  namePlayerInput.type = `text`
  namePlayerInput.id = `name`

  namePlayer.appendChild(namePlayerInput)


  let number = document.createElement(`li`)
  number.innerHTML = `<label for="number">Numero da camisa</label>`

  let numberInput = document.createElement("input")
  numberInput.type = `text`
  numberInput.id = `number`

  number.appendChild(numberInput)

  let confirmarEscalar = document.createElement("alert")
  confirmarEscalar.innerText = `Deseja salvar essa escalação: `

  if (confirmarEscalar) {
    camposPreencher.append(position, namePlayer, number)
    players.appendChild(camposPreencher)
  } else {
    alert("A escalação inserida não foi salva😶")
  }
} /* Funcionando parcialmente - Adicionar quebras de linhas/css para melhor exibição*/




