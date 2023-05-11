let addTechButton = document.getElementById(`addTechButton`)

addTechButton.addEventListener(`click`, function (ev) {
  ev.preventDefault()

  let localReference = document.getElementById(`formHere`)

  let div = document.createElement(`div`)
  div.id = Math.floor(Math.random() * 20) + 1



  let labelTech = document.createElement(`label`)
  labelTech.htmlFor = Math.floor(Math.random() * 10) + 1
  /* `nameTech` */
  labelTech.innerText = `Digite o nome da tecnologia: `

  let nameTech = document.createElement(`input`)
  nameTech.type = `text`
  nameTech.id = labelTech.htmlFor
  /* `nameTech` */

  /* Radio input's */

  let labelRadioZero = document.createElement('label')
  labelRadioZero.htmlFor = Math.floor(Math.random() * 20) + 1   /* 'zeroTwo' */ /* id para ligar com o for */
  labelRadioZero.innerText = `0-2 anos experiencia` /* isso aqui e para o label */

  let inputRadioZero = document.createElement(`input`)
  inputRadioZero.type = `radio`
  inputRadioZero.id = labelRadioZero.htmlFor
  /* `zeroTwo` */
  inputRadioZero.name = `radios` + div.id


  /* 1 */
  let labelRadioOne = document.createElement('label')
  labelRadioOne.htmlFor = 'threeFour' /* id para ligar com o for */
  labelRadioOne.innerText = `3-4 anos experiencia` /* isso aqui e para o label */

  let inputRadioOne = document.createElement(`input`)
  inputRadioOne.type = `radio`
  inputRadioOne.id = `threeFour`
  inputRadioOne.name = `radios` + div.id

  /* 2 */
  let labelRadioTwo = document.createElement('label')
  labelRadioTwo.htmlFor = 'moreFive' /* id para ligar com o for */
  labelRadioTwo.innerText = `5+ anos experiencia` /* isso aqui e para o label */

  let inputRadioTwo = document.createElement(`input`)
  inputRadioTwo.type = `radio`
  inputRadioTwo.id = `moreFive`
  inputRadioTwo.name = `radios` + div.id

  labelTech.append(nameTech, document.createElement(`br`))

  labelRadioZero.append(inputRadioZero, document.createElement(`br`))
  labelRadioOne.append(inputRadioOne, document.createElement(`br`))
  labelRadioTwo.append(inputRadioTwo, document.createElement(`br`))

  div.append(labelTech, labelRadioZero, labelRadioOne, labelRadioTwo)
  localReference.appendChild(div)

  console.log(localReference)







})


/* Small Steps
  [x] Gerar um numero/id aleatório para div 
  [x] Gerar um id/htmlFor único para cada grupo de div's(e seus inputs)
  [x] Conectar as label e inputs respectivamente para não haver conflitos com outras div
  []  Como acessar esses input's/id gerados aleatoriamente ?
  []  Criação de um botão de excluir as linhas(Div, por completo na minha interpretação)
  []  Criação de um array que irá guardar os respectivos dados dos desenvolvedores
*/