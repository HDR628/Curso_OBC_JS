const Character = require("./Character");

module.exports = class Mage extends Character{
    constructor(name,lifePoints,attack,magePoints,defense){
        super(name,lifePoints,attack,defense)
        this.magePoints = magePoints
    }

    targetCharacter(target){
        if(this.attack > target.defense){
            let damageLevel = (this.attack + this.magePoints) - target.defense
            target.lifePoints =  target.lifePoints - damageLevel
        }else{
            return `O alvo não perdeu de pontos de vida, por sua defesa ser maior`
        }
    }

    healingCharacter(aimHeal){
        let defaultHealing = this.magePoints * 2
        let healTotal = aimHeal.lifePoints + defaultHealing
        aimHeal.lifePoints = healTotal

        console.log(`O personagem ${aimHeal.name} foi curado pelo mago, restaurando ${healTotal} de sua vida`)
    }
}