const name = prompt("Qual seu nome?");
let question = prompt(name + " voce ja visitou alguma cidade? (sim/não)");
let numberCity = 0;
let allCitys = " ";


while (question !== "não") {
  let city = prompt("Serio, qual cidade?");
  allCitys += city + ", ";
  numberCity++;
  question = prompt("Voce ja visitou mais alguma ? (sim/não)");
}
/* A saida undefined foi resolvida apenas adicionando/iniciando a variavel allCitys com " empty "   */
alert(
  name +
  " ja visitou um total de " +
  numberCity +
  "  cidades sendo elas as seguintes: " +
  allCitys
);
