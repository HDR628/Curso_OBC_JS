/* Import */
import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById(`clear`).addEventListener(`click`, handleClearButton )

document.getElementById(`equal`).addEventListener(`click`, calculate)/* Passou a função sem parenteses/parâmetros */


document.getElementById(`input`).addEventListener(`keydown`, handleTyping )
/* Method: includes(elementoPesquisado,indexInicial)
Basicamente o método includes verifica se o valor/elemento pesquisado existe dentro do objeto/array... O retorno volta um valor  boolean,no caso true e/ou false.
indexInicial e opcional e pode ser usado em casos que seja necessário informar o índice/partindo de um elemento da entrada de uma usuário...
No caso acima caso um tecla presente no array(allowedKeys existisse)os elementos/entradas vão concatenando.
Backspace,o index inicial em JS e zero,logo "123" onde o cursor do mouse e igual a zero, tipo assim (123 = Indices: 210-1), onde o -1 é o ultimo carácter. */

// function calculate() {
//   resultInput.value = 'ERROR' /* Pre-definido o erro */
//   resultInput.classList.add(`error`) /* Adição de classe ao elemento no html */
//   let result = eval(input.value) /* Caso o calculo da operação de erro irá aparecer as mensagens acima */
//   resultInput.value = result/* Pegou o resultInput selecionado inicialmente e atribui o resultado acima a variável/elemento */
//   resultInput.classList.remove(`error`)
//   /* Função eval roda o código igual ao JS, até mesmo se for códigos JS e executa-los. Então so e recomendado usa-la em ambientes que não tem dados sensíveis*/
// }

document.getElementById(`themeSwitcher`).addEventListener(`click`,themeSwitcher)

document.getElementById(`copyToClipboard`).addEventListener(`click`, copyToClipboard )
/* O navigator utilizado acima e possivel atraves do user agent(navegador simplificando muito) que permite/facilita, tem meios/funções pré definidos que podem ser usados pelo desenvolvedor */