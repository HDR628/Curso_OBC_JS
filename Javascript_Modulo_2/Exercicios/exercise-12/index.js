let addTechButton = document.getElementById(`addTechButton`)

addTechButton.addEventListener(`click`, function (ev) {
  ev.preventDefault()

  let localReference = document.getElementById(`formHere`)

  let div = document.createElement(`div`)
  div.id = Math.floor(Math.random() * 50) + 1

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
  labelRadioZero.htmlFor = Math.floor(Math.random() * 50) + 1  /* id para ligar com o for */
  labelRadioZero.innerText = `0-2 anos experiencia` /* isso aqui e para o label */

  let inputRadioZero = document.createElement(`input`)
  inputRadioZero.type = `radio`
  inputRadioZero.id = labelRadioZero.htmlFor
  inputRadioZero.name = `radios` + div.id
  inputRadioZero.value = `0-2 years of experience`


  /* 1 */
  let labelRadioOne = document.createElement('label')
  labelRadioOne.htmlFor = Math.floor(Math.random() * 50) + 1
  labelRadioOne.innerText = `3-4 anos experiencia`

  let inputRadioOne = document.createElement(`input`)
  inputRadioOne.type = `radio`
  inputRadioOne.id = labelRadioOne.htmlFor
  inputRadioOne.name = `radios` + div.id
  inputRadioOne.value = `3-4 years of experience`

  /* 2 */
  let labelRadioTwo = document.createElement('label')
  labelRadioTwo.htmlFor = Math.floor(Math.random() * 50) + 1
  labelRadioTwo.innerText = `5+ anos experiencia`

  let inputRadioTwo = document.createElement(`input`)
  inputRadioTwo.type = `radio`
  inputRadioTwo.id = labelRadioTwo.htmlFor
  inputRadioTwo.name = `radios` + div.id
  inputRadioTwo.value = `5+ years of experience`

  let submit = document.createElement(`input`)
  submit.type = `submit`
  submit.id = div.id /* Utilizar o id desse submit ao addEventListener de submit para ser acionado, referenciando a div por completa */
  submit.value = `Cadastrar`

  /* Juntando/mesclando os nós */
  labelTech.append(nameTech, document.createElement(`br`))
  labelRadioZero.append(inputRadioZero, document.createElement(`br`))
  labelRadioOne.append(inputRadioOne, document.createElement(`br`))
  labelRadioTwo.append(inputRadioTwo, document.createElement(`br`))

  div.append(labelTech, labelRadioZero, labelRadioOne, labelRadioTwo, submit)
  localReference.appendChild(div)

  console.log(localReference)
})

let removeLineButton = document.getElementById(`removeLine`)

removeLineButton.addEventListener(`click`, function (ev) {
  /* Necessário o preventDefault, pois a pagina é carregada novamente ao ser "clicada" */
  ev.preventDefault()

  let localRemove = document.getElementById(`formHere`)/* Referencia ao local onde tinha os elementos a serem excluídos */

  let divRemove = document.getElementsByTagName(`div`) /* Selecionei a partir da tag desejada para excluir */

  localRemove.removeChild(divRemove[divRemove.length - 1])/* Os colchetes são usados para referenciar posições numéricas, no entanto pode-se utilizar da propriedade length para remover o ultimo elemento, como nesse caso */

})

let waitSubmit = addEventListener(`submit`, function (ev) {
  ev.preventDefault()

  let nameDev = document.getElementById(`name`).value
  console.log(nameDev) /* it's work */

  let div = document.querySelector(`div`)

  let firstInput = div.querySelector(`input`).value
  console.log(firstInput)

  let radioValue = div.getElementsByTagName(`input>radio`).value
  console.log(radioValue)/* Return undefined 🤔 */

})

/* Small Steps/Check's
  []  Criar um contador para cada elemento(input + label e agrega-lo ao contador) 
  [] Criação de um botão de excluir as linhas em conjunto com os inputs e label
  []  Criação de um array que irá guardar os respectivos dados dos desenvolvedores
  []  Facilitar/padronizar o acesso as div e seus respectivos conteúdos(input/label)
*/

/* Todas label tem innerText,htmlFor e todos inputs tem id,name and value */
