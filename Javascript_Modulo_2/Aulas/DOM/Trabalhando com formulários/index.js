let form = document.getElementById(`orderForm`)

form.addEventListener(`submit`, function (ev) {

  ev.preventDefault()
  /* Utilizado para parar um evento padrão/automático do navegador/funções.*/
  let name = document.getElementById(`name`).value
  let address = document.querySelector(`input[name= "address"]`).value
  /* Acessando o elemento diretamente/especificamente através do name presente no html */
  let breadType = document.querySelector(`select[name="breadType"]`).value
  let radioInput = document.querySelector(`input[name= "main"]`).value
  const observations = document.getElementById(`observations`).value

  /* Pegando as checkbox marcadas */
  let salad = ""
  document.querySelectorAll(`input[name="salad"]:checked`).forEach(function (ingrediente) {
    salad += " - " + ingrediente.value
  }) /* Aplica/itera sobre todos os elementos e concatena  */


  console.log(`
  name: ${name}\n
  endereço: ${address}\n
  Pão: ${breadType}\n
  Mistura: ${radioInput}\n
  Saladinha: ${salad}\n
  Comentário: ${observations}\n 
  `)
})