module.exports = class Character {
    constructor(name,lifePoints, attack, defense){
        this.name = name
        this.lifePoints = lifePoints
        this.attack = attack
        this.defense = defense
    }

    /* Personagem alvo  */
    targetCharacter(target){
        if(this.attack > target.defense){
            let damageLevel = this.attack - target.defense
            target.lifePoints =  target.lifePoints - damageLevel
        }else{
            return `O alvo não perdeu de pontos de vida, por sua defesa ser maior`
        }
    }
}
/* const one = new Character("H",100,70,60)
const two = new Character("J",100,30,60)
console.log(one)
console.log(two)

one.targetCharacter(two)
console.log(two) */


