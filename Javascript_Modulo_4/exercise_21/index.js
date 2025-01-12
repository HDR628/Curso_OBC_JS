// Importando as classes
const Character = require("./Character")
const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

// Testando a classe Character
console.log("Teste da classe Character");
const char1 = new Character("Warrior", 100, 50, 30);
const char2 = new Character("Mage", 100, 40, 20);
console.log(char1);
console.log(char2);

// Testando o ataque entre dois personagens
console.log("\nTestando o ataque entre dois personagens");
char1.targetCharacter(char2);
console.log(`Vida de ${char2.name}: ${char2.lifePoints}`);

// Testando a classe Thief
console.log("\nTeste da classe Thief");
const thief = new Thief("Thief", 100, 60, 10);
const target = new Character("Target", 100, 30, 20);
thief.targetCharacter(target);
console.log(`Vida de ${target.name} após ataque do Thief: ${target.lifePoints}`);

// Testando a classe Mage
console.log("\nTeste da classe Mage");
const mage = new Mage("Mage", 100, 50, 30, 20);
mage.targetCharacter(char2);  // Ataque do mago
console.log(`Vida de ${char2.name} após ataque do Mage: ${char2.lifePoints}`);

console.log("\nTestando a cura do Mage");
mage.healingCharacter(char2);  // Cura o mago
console.log(`Vida de ${char2.name} após cura: ${char2.lifePoints}`);

// Testando a classe Warrior
console.log("\nTeste da classe Warrior");
const warrior = new Warrior("Warrior", 150, 80, 50, 30, "ataque");
console.log(`Pontos de defesa do Warrior: ${warrior.defense}`);
warrior.targetCharacter(char1);  // Ataque do guerreiro
console.log(`Vida de ${char1.name} após ataque do Warrior: ${char1.lifePoints}`);

console.log("\nMudando para posição de defesa");
warrior.switchPosition();  // Mudando para defesa
console.log(`Nova posição: ${warrior.position}`);
console.log(`Pontos de defesa do Warrior agora: ${warrior.defense}`);

warrior.targetCharacter(char1);  // Ataque do guerreiro em defesa
console.log(`Vida de ${char1.name} após ataque do Warrior na defesa: ${char1.lifePoints}`);

console.log("\nMudando para posição de ataque novamente");
warrior.switchPosition();  // Mudando de volta para ataque
console.log(`Nova posição: ${warrior.position}`);
console.log(`Pontos de defesa do Warrior agora: ${warrior.defense}`);
