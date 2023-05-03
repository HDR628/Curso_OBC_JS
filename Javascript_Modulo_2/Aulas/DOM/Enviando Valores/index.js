function register(element) {
  /* Element feito para receber/referenciar os "parentes filhos" relacionados aos inputs */
  let username = element.children.username.value
  let password = element.children.password.value
  let passwordConfirmation = element.children.passwordConfirmation.value
  /* Outra forma de capturar elementos dentro do ParentNode, sem ser apenas pelo document.get...
   */

  console.log(username, password, passwordConfirmation)
}