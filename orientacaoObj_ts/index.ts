class Spaceship {
    /* Necessario add/declarar fora do construtor nas classes */
    /* Possibilidade de encapsulamento TS private, protected e public
    Private so e possivel acessar a prop/method na classa atual/"original"
    protected pode ser acessado nas classes que herdam a classe "mãe"
     */
    private _name: string
    protected captain: string
    protected speed: number

    /* Disponibilizar pra mudança a variavel name atraves do get e set */
    get name(){
        return this._name   
    }    

    set name(name){
        this._name = name
    }

    constructor(_name:string, captain:string) {
      this._name = _name
      this.captain = captain
      this.speed = 0
    }
  
    public accelerate(rate:number, time: number) {
      this.speed = rate * time
    }
  } 
  
  class Fighter extends Spaceship { 

    weapons: number

    constructor(name:string, captain: string, weapons:number) {
      super(name, captain)
      this.weapons = weapons
    }
  
    shoot() {
      for (let i = 0; i < this.weapons; i++) {
        console.log('Pew!')
      }
    }
  
    erase() {
    //   this.name = '' 
      this.captain = ''
      this.speed = 0
    }
  }
  
  let ship = new Fighter('USS Enterprise', 'James T. Kirk',2)
  
//   ship.speed = 50
  ship.accelerate(50, 10)
  ship.weapons = 2 // Sem declaração/encapsulamento sendo possivel mudar manualmente/sempre que quiser

  ship.name = "New spaceship name"

  