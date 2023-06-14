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
let form = document.getElementById(`devForm`)
let developers = []
let inputRows = 0

addTechBtn.addEventListener(`click`, function (ev) {
  /* Peguei o local onde será colocado/aparecera as tecnologias/inputs */
  const stackInputs = document.getElementById(`stackInputs`)

  /* Criação de uma nova linha que posteriormente sera passada ao local de referencia  */
  const newRow = document.createElement(`li`)
  const rowIndex = inputRows /* Atribuição de um contador a cada elemento que for criado, acrescentando o numero */
  inputRows++
  newRow.id = `inputRow-` + rowIndex
  newRow.className = `inputRow`

  const techNameLabel = createLabel(`Nome: `, `techName-` + rowIndex) /* Passando os parâmetros em ordem */
  const techNameInput = createInput(`techName-` + rowIndex, null, `techName`) /* Mesclar/unir com o htmlFor acima */

  const expLabel = createLabel('Experiência: ')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel1 = createLabel('0-2 anos', id1)
  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel2 = createLabel('3-4 anos', id2)
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)
  /* Foi criado o name inicialmente com techExp para identificar todos os elementos, mas ocorre o problema de selecionar um linha e marcar nos outros elementos.Dessa forma sendo necessário diferencia-los com o lineIndex, nesse caso. Aprendi como diferencia-los e acesso-los de forma dinâmica😊 */

  const removeRowBtn = document.createElement(`button`)
  removeRowBtn.type = `button`
  removeRowBtn.innerHTML = `Remover`

  removeRowBtn.addEventListener(`click`, function () {
    stackInputs.removeChild(newRow)
    /* Ligação com o li criado inicialmente acima */
  })

  newRow.append(
    techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
  )
  stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)
})

/* Small Steps/Check's
  [x]  Criar um contador para cada elemento(input + label e agrega-lo ao contador) 
  [x] Criação de um botão de excluir as linhas em conjunto com os inputs e label
  [x]  Criação de um array que irá guardar os respectivos dados dos desenvolvedores
  [x]  Facilitar/padronizar o acesso as div e seus respectivos conteúdos(input/label)
*/

/* Todas label tem innerText,htmlFor e todos inputs tem id,name and value */
