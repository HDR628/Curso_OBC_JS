const Character = require("./Character");

module.exports = class Thief extends Character {
   targetCharacter(target){
    if(this.attack > target.defense){
        let damageLevel = (this.attack - target.defense) * 2
        target.lifePoints = target.lifePoints - damageLevel
    }
   }
}