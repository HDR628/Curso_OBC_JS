function register(ev) {
  console.log(ev) /* Referencia de forma "global" os eventos */

  let sectionElements = ev.currentTarget.parentNode

  let username = sectionElements.children.username.value
  let password = sectionElements.children.password.value
  let passwordConfirmation = sectionElements.children.passwordConfirmation.value
  /* Outra forma de "pegar"/referenciar elementos sem ser através do document.get.. e this */

  if (password === passwordConfirmation) {
    alert(`O usuário ${username} foi registrado com sucesso`)
  } else {
    alert(`As senhas não batem.Tente novamente`)
  }

}

let button = document.getElementById(`register-button`)

button.addEventListener(`click`, register) /* Fique em modo de "espera" até o evento ser acionado/"ouvido". */

function removeEvent() {
  button.removeEventListener(`click`, register)
  alert(`Event Removed`)
}
/* Remove o elemento/evento com as características especificas passadas, não afetando os demais eventos/funcionalidades */