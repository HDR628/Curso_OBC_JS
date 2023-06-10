function createLabel(text, htmlFor) {
  const label = document.createElement(`label`)
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = `text`, placeholder = ``) {
  const input = document.createElement(`input`)
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

let addTechBtn = document.getElementById(`addTechBtn`)
let formDev = document.getElementById(`formDev`)
let arrayDev = []
let count = 0

addTechBtn.addEventListener(`click`, function (ev) {
  /* Peguei o local onde será colocado/aparecera as tecnologias/inputs */
  const inputsTech = document.getElementById(`inputsTech`)

  /* Criação de uma nova linha que posteriormente sera passada ao local de referencia  */
  const newLine = document.createElement(`li`)
  const lineIndex = count /* Atribuição de um contador a cada elemento que for criado, acrescentando o numero */
  count++
  newLine.id = `newLine-` + lineIndex
  newLine.className = `inputLine`

  const techNameLabel = createLabel(`Nome: `, `techName-` + lineIndex) /* Passando os parâmetros em ordem */
  const techNameInput = createInput(`techName-` + lineIndex, null, `techName`) /* Mesclar/unir com o htmlFor acima */

  const expLabel = createLabel(` - Experiencias`)
  const radioId1 = `expRadio-` + lineIndex + `.1`
  const expRadio1 = createInput(radioId1, `0-2 anos`, `techExp-` + lineIndex, `radio`)
  const expLabel1 = createLabel(`0-2 anos`, radioId1)

  const radioId2 = `expRadio-` + lineIndex + `.2`
  const expRadio2 = createInput(radioId2, `3-4 anos`, `techExp-` + lineIndex, `radio`)
  const expLabel2 = createLabel(`3-4 anos`, radioId2)

  const radioId3 = `expRadio-` + lineIndex + `.3`
  const expRadio3 = createInput(radioId3, `5+ anos`, `techExp-` + lineIndex, `radio`)
  const expLabel3 = createLabel(`5+ anos`, radioId3)
  /* Foi criado o name inicialmente com techExp para identificar todos os elementos, mas ocorre o problema de selecionar um linha e marcar nos outros elementos.Dessa forma sendo necessário diferencia-los com o lineIndex, nesse caso  */

  newLine.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3)

  inputsTech.appendChild(newLine)
})

/* Small Steps/Check's
  [x]  Criar um contador para cada elemento(input + label e agrega-lo ao contador) 
  [x] Criação de um botão de excluir as linhas em conjunto com os inputs e label
  [x]  Criação de um array que irá guardar os respectivos dados dos desenvolvedores
  []  Facilitar/padronizar o acesso as div e seus respectivos conteúdos(input/label)
*/

/* Todas label tem innerText,htmlFor e todos inputs tem id,name and value */
