function addInput() {
  /* Referenciar o local onde colocaremos os novos elementos */
  let grandFather = document.getElementById(`inputs`)

  /* Criar "pai"/elemento/tag que ira receber os atributos passados */
  let father = document.createElement("li") /* tipo da tag */
  father.className = "Father Class"
  father.innerText = "Just a new input"

  /* Criar "filho" do "father" com alguns atributos */
  let fatherSon = document.createElement("input") //tipo da tag
  fatherSon.type = "text" /* passou atributo a tag */
  fatherSon.name = "Father Son Here" /* Adicionou name a tag  */

  /* Ligando os nós */
  father.appendChild(fatherSon)
  grandFather.appendChild(father)
}


