function useLightTheme() {
  document.body.style.color = `#212529` /* Altera a cor do texto presente no body */
  document.body.style.backgroundColor = `#f1f5f9` /* Altera a cor de fundo presente no body */
}

function useDarkTheme() {
  document.body.style.color = `#f1f5f9`
  document.body.style.backgroundColor = `#212529`
}

function switchTheme() {
  /* o classList acessa os elementos e permite usar as classes presentes no css, para possíveis alterações...  */
  document.body.classList.toggle(`is-light`)
  document.body.classList.toggle(`is-dark`)

}

document.getElementById(`lightBtn`).addEventListener(`click`, useLightTheme) /* Possivel utilizar o addEventListener devido ao encadeamento */
document.getElementById(`darkBtn`).addEventListener(`click`, useDarkTheme)
document.getElementById(`switchBtn`).addEventListener(`click`, switchTheme)