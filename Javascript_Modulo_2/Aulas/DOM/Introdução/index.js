function show() {
  /* Pegando elementos pelo id */
  let listCompleta = document.getElementById(`contact-list`)
  console.log(`getElementsByID`)
  console.log(listCompleta) // expect output contact-list completa - retorna um monte de atributos presente na lista

  /* Pegando o segundo contato da lista */
  let secondContact = document.getElementById(`contact2`)
  console.log("getElementsById")
  console.log(secondContact) /* Retorna um monte de atributos também */

  /* Pegando pelo seletor/tag  */
  let tagName = document.getElementsByTagName("label")
  console.log("getElementsByTagName")
  console.log(tagName)/* Return HTML Collection */

  /* Pegando pela classe geral agora */
  let classeBacana = document.getElementsByClassName("contact-input")
  console.log("getElementsByClassName")
  console.log(classeBacana) /* Return HTML Collection */


  /* Pegando por name agora */
  let thirdContact = document.getElementsByName("contact3")
  console.log("getElementsByName")
  console.log(thirdContact) /* Node list, podemos usar alguns métodos */

  console.log("Abaixo está utilização do query selector")

  let querySelectorAll = document.querySelectorAll(`#contact-list > li > label`)
  console.log(`query Selector ALl, ele apresenta como "array" no entanto não é um🤔`)
  console.log(querySelectorAll) /* Ele é utilizado em "etapas"(estava tentando ser colocar o li, estava apresentando o NodeList vazio) */


  console.log("Utilizando o querySelector - Ele 'pega' o primeiro elemento")
  let querySelectorDefault = document.querySelector(`#contact-list > li > label `)
  console.log(querySelectorDefault) /* Return null, se tentar determinar o seletor/elemento que voce deseja */

}