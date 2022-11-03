/* Creation of variables */
const vehicleName1 = prompt("Insira o nome do primeiro veiculo: ");
const vehicleSpeed1 = prompt("Insira a velocidade do primeiro veiculo: ");

const vehicleName2 = prompt("Insira o nome do segundo veiculo: ");
const vehicleSpeed2 = prompt("Insira a velocidade do segundo veiculo: ");

/* Simple logic test*/

if (vehicleSpeed1 === vehicleSpeed2) {
  alert("Ambas as velocidades se igualam");
} else if (vehicleSpeed1 > vehicleSpeed2) {
  alert("A velocidade do " + vehicleName1 + " e superior ao " + vehicleName2);
} else {
  alert("A velocidade do " + vehicleName2 + " e superior ao " + vehicleName1);
}
