/* Creation of variables */
let damage;
let calculateDamage;

const characterAtkName = prompt("Digite o nome do personagem de ataque: ");
const xAtk = prompt("Digite o poder de ataque: ");
let atkPower = parseFloat(xAtk);

alert("Declare as informacoes do personagem de defesa");
confirm("Entendido ? ");

const characterDefName = prompt("Digite o nome do personagem de defesa: ");
const defHealth = prompt("Digite a quantidade de vida do personagem: ");
const yDef = prompt("Digite o poder de defesa: ");
let defPower = parseFloat(yDef);
const shield = prompt("O personagem usa escudo ?: ");
let afterAtk;

if (atkPower > defPower) {
  if (shield === "yes" || shield === "Yes") {
    calculateDamage = (atkPower - defPower) / 2;
  } else {
    calculateDamage = atkPower - defPower;
  }
  damage = calculateDamage;
} else {
  calculateDamage = 0;
  damage = calculateDamage;
}

/* Final Results */
afterAtk = defHealth - damage;

alert(
  "Resultado Finais\n" +
    "Personagem de Ataque" +
    "\nNome: " +
    characterAtkName +
    "\nPoder de ATK: " +
    atkPower +
    "\n\nPersonagem na defesa " +
    "\nNome: " +
    characterDefName +
    "\nQTD de vida: " +
    defHealth +
    "\nPoder de defesa: " +
    defPower +
    "\nO personagem usou escudo: " +
    shield +
    "\nO dano causado pelo " +
    characterAtkName +
    " foi de " +
    damage +
    ". Sobrando de vida apenas " +
    afterAtk
);
