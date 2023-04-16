function addPerson() {
  /* Referenciar o local de adicionar pessoas */
  let localPerson = document.getElementById(`listPeople`)

  /* Pegar os seguintes dados das pessoas 
   - Nome
   - Telefone
   - Endereço
   - Trabalho
  */

  /* Para melhor compreensão/divisão adicionar titulo junto com as informações da pessoa */
  let newContact = document.createElement(`h2`)
  newContact.innerText = "New person" /* o innerText passa o texto diretamente a tag */

  /* Criando lista para receber os li com os elementos/input solicitados */
  let listUl = document.createElement("ul")


  /* Criação da tag/input relacionadas ao nome da pessoa */
  let nameContact = document.createElement("li") /*  */
  nameContact.innerText = "Nome: " /* passou o texto para a tag li */
  // nameContact.ariaLabel = "Nome" testar somente com este depois

  let nameInput = document.createElement(`input`) /* cria uma nova tag para receber input do usuário e atrelar a tag nameContact  */
  nameInput.type = "text"
  nameInput.name = "fullName"

  /* Conectar nó entre input name e "label" nameContact */
  nameContact.appendChild(nameInput)
  /* Conectar nó entre nameContact e listUl */
  listUl.appendChild(nameContact)
  listUl.appendChild(document.createElement("br")) /* Adicionar quebra de linha ao final  */
  /* Conectar nó entre listUl e localPerson */
  localPerson.appendChild(listUl)



  let phoneNumber = document.createElement("li")
  phoneNumber.ariaLabel = "Telefone: " /* Tentativa de adicionar label e usar como referencia/linkar posterior */

  let phoneInput = document.createElement("input")
  phoneInput.type = "text"
  phoneInput.id = "Telefone: "
  phoneInput.name = "Telefone"

  /* Conexão dos nós */
  phoneNumber.appendChild(phoneInput)
  listUl.appendChild(phoneNumber)
  localPerson.append(listUl)


  let address = document.createElement("li")
  /* Utilização do innerHTML, ele consegue alterar a estrutura da pagina html(inserir/remover... tags de uma forma muito mais "perigosa/intuitiva" usando html no JS) */
  address.innerHTML = `<label for="address" >Endereço: </label>`

  let addressInput = document.createElement("input")
  addressInput.type = `text`
  addressInput.id = `address` /* "Linkar com o for do label" */
  addressInput.name = `address`

  address.appendChild(addressInput)
  listUl.append(address, document.createElement(`br`)) /* Utilizando o método append e possível passar mais de um elemento/nó  */
  localPerson.append(listUl)

  let job = document.createElement(`li`)
  job.innerHTML = `<label for="job">Trabalho: </label>` //legal de usar dependendo do caso

  let jobInput = document.createElement(`input`)
  jobInput.type = `text`
  jobInput.id = `job`

  job.appendChild(jobInput)
  listUl.appendChild(job)
  // localPerson.appendChild(listUl)
  localPerson.append(newContact, listUl) /* Passando elementos. New person aparece em cima dos inputs/label normalmente */
}


function removePerson() {
  /* Referenciar o local de onde será retirado a pessoa */
  let removeLocal = document.getElementById(`listPeople`)

  let removeTitle = document.getElementsByTagName("h2")
  let removePerson = document.getElementsByTagName(`ul`)

  /* Pegar os últimos elementos através da propriedade length. Os colchetes são utilizados de forma numérica para referenciar a posição do elemento a ser retirado/removido */
  removeLocal.removeChild(removeTitle[removeTitle.length - 1])
  removeLocal.removeChild(removePerson[removePerson.length - 1])
}