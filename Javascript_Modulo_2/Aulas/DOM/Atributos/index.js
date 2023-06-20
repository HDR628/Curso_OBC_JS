/* Selecionar o input geral */
const input = document.getElementById(`input`)

/* Switch value */
document.getElementById(`value`).addEventListener(`click`, function () {
  console.log(input.value)
  // input.value = `Receba...`
  input.value = input.value == "" ? "Novo valor" : ""
})

/* Switch type */
document.getElementById(`type`).addEventListener(`click`, function () {
  // input.type = input.type == "checkbox" ? "text" : "checkbox"
  input.setAttribute(`type`, `checkbox`) /* O primeiro "parâmetro" e para buscar/selecionar o elemento/valor desejado, já o segundo sera o "substituto" dele. No entanto so serve para aplicar e não fica dinâmico */
})

/* Switch placeholder */
document.getElementById(`placeholder`).addEventListener(`click`, function () {
  console.log(input.placeholder)
  input.placeholder = input.placeholder == "" ? "Apenas escreva..." : ""
  /* fica dinâmico aplicando/checando se o elemento esta vazio ou não(Estrutura Condicional) */
})

document.getElementById(`disable`).addEventListener(`click`, function () {
  // console.log(input.disable) /* Return undefined */
  // input.getAttribute(`disable`)/* Return first element/code with attribute disable.Pre-defined html  */
  input.setAttribute(`disable`, !input.disable) /* Precisa encadear o input novamente e negar(not) o atributo caso esteja ativo...😅 */
})

document.getElementById(`data`).addEventListener(`click`, function () {
  // console.log(input.dataset) Retorna uma DOMSTRING
  let data = input.dataset.somethingElse
  console.log(`Valor inicial da data... ${data}`)/* Retornou o "Algum Valor" */
  data = "Outro valor maneiro"
  console.log(`Valor posterior a troca da data... ${data}`)/* Retornou outro valor maneiro */
})