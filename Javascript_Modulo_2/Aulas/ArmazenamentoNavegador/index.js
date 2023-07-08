/* Session Storage apenas mantém/guarda as informações quando a aba responsável por coletar as infos está aberta, caso seja recarregada ainda ficara salvo os elementos/infos salvas/coletas, no entanto caso a aba/janela seja fechado os dados serão "expirados"/"descartados"*/
document.getElementById(`sessionBtn`).addEventListener('click', function () {
  let inputSession = document.getElementById(`session`)
  sessionStorage.setItem(`sessionInput`, inputSession.value) /* Também pode ser acessado/"pego" da seguinte forma: window.sessionStorage...   */
  inputSession.value = ``
})

document.getElementById(`readSession`).addEventListener('click', function () {
  let readSession = sessionStorage.getItem(`sessionInput`)
  alert(readSession)
})


/* Local Storage guarda/mantém as informações/dados mesmo após o fechamento da aba/janela */

document.getElementById('localBtn').addEventListener(`click`, function () {
  let localInput = document.getElementById(`local`)
  localStorage.setItem('localInput', localInput.value)
  localInput.value = ''
})

document.getElementById(`readLocal`).addEventListener(`click`, function () {
  let localRead = localStorage.getItem(`localInput`)
  alert(localRead)
})

document.getElementById(`deleteLocal`).addEventListener(`click`, function () {
  localStorage.removeItem(`localInput`)
}) /* HEHE mucho legal😄 */

/* Cookies(uma forma mais "antiga") de salvar dados/infos. As informações passadas juntamente ao cookie pode levar consigo os caminhos(path) permitidos que essa info/dados funcione, nome(key, e padrão), data de expiração(expire) podendo informar uma data fixa ou não.Ademais a outros "complementos" como o secure,SameSite e outros*/

document.getElementById(`cookieBtn`).addEventListener(`click`, function () {
  let cookieInput = document.getElementById(`cookie`)
  // cookieName=value; expires=UTCStringDate; path=/;
  let cookieName = `cookieOne=${cookieInput.value};`
  let expireCookie = 'expires=' + new Date(2022, 9, 9) + ';'
  let pathCookie = `path=/;`
  document.cookie = `${cookieName} ${expireCookie} ${pathCookie}`
  cookieInput.value = ``
  // console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
  const input = document.getElementById('cookie2')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

