export default function calculate() {
    const resultInput = document.querySelector(`#result`)
    resultInput.value = 'ERROR' /* Pre-definido o erro */
    resultInput.classList.add(`error`) /* Adição de classe ao elemento no html */
    let result = eval(input.value) /* Caso o calculo da operação de erro irá aparecer as mensagens acima */
    resultInput.value = result/* Pegou o resultInput selecionado inicialmente e atribui o resultado acima a variável/elemento */
    resultInput.classList.remove(`error`)
    /* Função eval roda o código igual ao JS, até mesmo se for códigos JS e executa-los. Então so e recomendado usa-la em ambientes que não tem dados sensíveis*/
  }