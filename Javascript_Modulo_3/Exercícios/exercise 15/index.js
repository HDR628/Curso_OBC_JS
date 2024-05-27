const main = document.querySelector(`main`)/* Facilitou o acesso a tag main e utilização do encadeamento com os atributo/classes referentes a ele... */
const root = document.querySelector(`:root`) /* Selecionou de forma indireta os padroes do navegador(alterados via css), facilitando a modificação do teme light/dark */
const input = document.getElementById(`input`)
const resultInput = document.getElementById(`result`) /* Fácil acesso ao resultado do input */

let allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


/* Keydown = tecla pressionada */
document.querySelectorAll(`.charKey`).forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener(`click`, function () {
    let value = charKeyBtn.dataset.value
    input.value += value
  })/* Aplicou/iterou todos os botões/bnt acessando/tomando os valor/parâmetro como charKeyBtn. Ademais facilitando/incrementando o encadeamento com o dataset */
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
/* Method: includes(elementoPesquisado,indexInicial)
Basicamente o método includes verifica se o valor/elemento pesquisado existe dentro do objeto/array... O retorno volta um valor  boolean,no caso true e/ou false.
indexInicial e opcional e pode ser usado em casos que seja necessário informar o índice/partindo de um elemento da entrada de uma usuário...
No caso acima caso um tecla presente no array(allowedKeys existisse)os elementos/entradas vão concatenando.
Backspace,o index inicial em JS e zero,logo "123" onde o cursor do mouse e igual a zero, tipo assim (123 = Indices: 210-1), onde o -1 é o ultimo carácter. */

function calculate() {
  resultInput.value = 'ERROR' /* Pre-definido o erro */
  resultInput.classList.add(`error`) /* Adição de classe ao elemento no html */
  let result = eval(input.value) /* Caso o calculo da operação de erro irá aparecer as mensagens acima */
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
    /* Encadeamento com o elemento root possibilitou a utilização do métodos/funções que podem alterar propriedades/atributos aos elementos presentes no css/html raiz da pagina */
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
/* O navigator utilizado acima e possivel atraves do user agent(navegador simplificando muito) que permite/facilita, tem meios/funções pré definidos que podem ser usados pelo desenvolvedor */