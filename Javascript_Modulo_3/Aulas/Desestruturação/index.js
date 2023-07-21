const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"]
}

/* Forma que estávamos fazendo anteriormente */

let nameNormal = person.name

/* Forma desestruturada */

let { name } = person   /* Indicamos antes as propriedades que desejamos "pegar" e "atribuímos" elas ao objeto relacionado, neste caso o person acima que tem a propriedade name */

console.log(name)

/* Além disso podemos pegar mais de uma propriedade como abaixo: */

let { job, parents } = person

console.log(`${job}
${parents}`) /* Dessa maneira e 'pego' apenas os texto sem indicativos(Array,Object...), como no exemplo abaixo */
console.log(job, parents) /* Dessa forma aparece de maneira mais "detalhada" os objetos e/ou arrays presentes no objeto 'inicial/referencial'  */

/* Arrays */

console.log('Exemplo com arrays')
let [dad, mom] = parents
/* A utilização do array necessitamos criar uma variável/elemento para podemos realizar a desestruturação, como no caso acima */

console.log(dad, mom)
console.log(`Pai: ${dad}
Mãe: ${mom}`)


let [work] = job
console.log(work)
/* Caso o elemento não esteja dentro de um array voltara apenas a posição do carácter relacionado a posição, como no caso acima onde eu tento pegar Farmer do objeto person, mas ele apenas me retorna a letra 'F' */


/* Funções da forma antiga, sem desestruturação */
/* function createUser(person) {
  let id = Math.floor(Math.random() * 321123)
  return {
    id,
    person: person.name,
    job: person.job,
    parents: person.parents
  }
} */

/* Funções com desestruturação 😎 */
/* Ocorre a referencia das propriedades diretamente no campo dos parâmetros, facilitando o uso do retorno(sem ter que referenciar objeto.chave como fazemos normalmente) */
function createUser({ name, job, parents }) {
  let id = Math.floor(Math.random() * 2312312)
  return {
    id,
    name,
    job,
    parents
  }
}

let Luke = createUser(person)
console.log(Luke)






