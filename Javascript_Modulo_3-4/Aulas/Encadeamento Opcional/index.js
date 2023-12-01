const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
}

console.log({ user })

console.log("Nome: " + user.name) /* Expect output: John Doe */

console.log("Nome: " + user?.name + "\nUtilizando operador de encadeamento opcional")/* Mesma resultado que o de cima, so que de uma forma diferente */
console.log("Idade(operador ?): " + user?.age)

console.log(`Email: ${user?.email}`)

console.log(user.friends[0]) /* Expect output: Mary, but show the all object/props inside friends */

console.log(`Expectativa de saida: "Mary" 
saida: ${user.friends[0].name}`) /* Agora funcionou, quando temos uma propriedade que tem um array e um objeto dentro e necessário colocar o colchetes e acessar a posição inicialmente do array e/ou objeto, logo apos podemos encadear com o "?" e acessar mais internamente os elementos(mesmo que sejam nullish)  */

console.log(`Nome da amiga ${user.friends[0].name}`)

// console.log(`Nome da rua : ${user.friends[1]?.address?.street}`) undefined
console.log(`Nome da rua : ${user.friends[0]?.address?.street}`) /* Não temos posição 1 então não como acessar, estava tentando acessar uma posição inexistente🥲 */

console.log(user.phone?.number)

console.log(user.phone?.ddd) /* Ja quando a prop/chave é apenas um objeto podemos acessa-los sem referenciar a posição dos elementos(inicialmente) e acessar as props/chaves mais internas */

console.log(user.phone?.countryCode) /* Legal dms */


/* Outra maneira de usar */

// console.log(user.brothers[5]?.name) Da erro quando utilizado sem o "?"

console.log(user.brothers?.[5].name)
/* Neste caso não existe a propriedade brothers, no entanto devido a presença do operador "?" a "verificação" continua ate apresentar outro erro...  */


