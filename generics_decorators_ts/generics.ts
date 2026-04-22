// /* Passar argumentos para uma funçao/classe de types, passar tipo como argumento  */
// function first(arr){
//     return arr[0]
// }

// /* Sintaxe function nomeFuncao <nomeQueVoceDesejar>(elemento/item : nomeQueVoceDesejar[tipoElemento]): NomequeVoceDesejar |(essa parte e opcional) )      */
// function last<Type>(arr: Type[]): Type | undefined {
//     return arr[arr.length -1]
// }

// const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']


// /* No caso do primeiro elemento do arr, nos obtemos/ganhomos a inferencia que 
// é do ANY, pois não ha nenhuma definição de tipo ou "padrão"  */
// const firstPilot = first(pilots)

// /* Utilização do generics da uma noção/fala oq é para o TS, neste caso 
// falamos que o type/tipo que estamos recebendo e um array */
// const lastPilot = last(pilots)



interface Ship {
    name: string
    pilot: string
  }
  
  interface Fighter extends Ship {
    weapons: number
    shields: number
  }
  
  interface Transport extends Ship {
    capacity: number
  }
  
  interface Speeder extends Ship {
    speed: number
    acceleration: number
  }
  
    // Se deixássemos sem o tipo Ship desativaríamos
    // totalmente o typescript para esse argumento
    //   function cloneShip(ship: Ship, newName: string, newPilot: string) {
    //     const newShip = ship
    //     newShip.name = newName
    //     newShip.pilot = newPilot
    //     return newShip
    //   }


  function cloneShip<SpaceType extends Ship>(ship: SpaceType, newName: string, newPilot: string): SpaceType{
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
  }
  
  const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
  }
  
  const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
  }
  
  // A cópia funciona, porém a tipagem está incorreta
  // pois a ambas é atribuido o tipo Ship
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe')