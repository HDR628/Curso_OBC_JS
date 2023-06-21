const main = document.querySelector(`main`)
const root = document.querySelector(`:root`)
const input = document.getElementById(`input`)
const resultInput = document.getElementById(`result`)

let allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
/* Keydown = tecla pressionada */

document.querySelectorAll(`.charKey`).forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener(`click`, function () {
    let value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById(`clear`).addEventListener(`click`, function () {
  input.value = ""
  input.focus() /* Foca/destaca o elemento selecionado */
})

document.getElementById(`equal`).addEventListener(`click`, calculate)/* Passou a função sem parenteses/parâmetros */


input.addEventListener(`keydown`, function (ev) {
  ev.preventDefault() /* Não altera/modifica a pagina atual automaticamente */
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
})

function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add(`error`)
  let result = eval(input.value)
  resultInput.value = result/* Pegou o resultInput selecionado inicialmente e atribui o resultado acima a variável/elemento */
  resultInput.classList.remove(`error`)
  /* Função eval roda o código igual ao JS, até mesmo se for códigos JS e executa-los. Então so e recomendado usa-la em ambientes que não tem dados sensíveis*/
}

document.getElementById(`themeSwitcher`).addEventListener(`click`, function () {
  if (main.dataset.theme === `dark`) {
    root.style.setProperty(`--bg-color`, '#f1f5f9')
    root.style.setProperty(`--font-color`, '#212529')
    root.style.setProperty(`--border-color`, '#aaa')
    root.style.setProperty(`--primary-color`, '#26834a')
    main.dataset.theme = "light"
  } else {
    root.style.setProperty(`--bg-color`, '#212529')
    root.style.setProperty(`--font-color`, '#f1f5f9')
    root.style.setProperty(`--border-color`, '#666')
    root.style.setProperty(`--primary-color`, '#4dff91')
    main.dataset.theme = "dark"
  }
})

document.getElementById(`copyToClipboard`).addEventListener(`click`, function (ev) {
  let button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})