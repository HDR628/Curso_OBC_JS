import {Character} from "./Character"

class Warrior extends Character {
    constructor(name,lifePoints,attack,defense,shield,position){
        super(name,lifePoints,attack,defense)
        this.shield = shield
        this.position = position
    }

    targetCharacter(target){
        if(this.position == defense){
            console.log("Não e possivel atacar no momento")
        }else{
            let damageLevel = this.attack - target.defense
            target.lifePoints =  target.lifePoints - damageLevel
        }
    }

    switchPosition(){
        if(this.position === "ataque"){
            this.position = "defesa"
            this.defense += this.shield  // Adiciona o escudo à defesa
        } else {
            this.position = "ataque"
            this.defense -= this.shield  // Restaura a defesa original removendo o escudo
        }
    }
    
}