/* Creation of variables */

let convertedNumber; // will receive meters and simbols to get result

const meters = prompt("Digite o valor da medida (metros)");

let unidadeMedida = prompt(
  "Selecione a unidade de medida desejada para conversao: \n milímetro (mm) \n centímetro (cm) \n decímetro (dm) \n decâmetro (dam) \n hectômetro (hm) \n quilômetro (km) \n Favor utilizar unidade de medida abreviada"
);

switch (unidadeMedida) {
  case "mm":
    convertedNumber = meters * 1000;
    alert("O resultado obtido atraves da conversao foi = " + convertedNumber);
    break;
  case "cm":
    convertedNumber = meters * 100;
    alert("O resultado obtido atraves da conversao foi = " + convertedNumber);
    break;
  case "dm":
    convertedNumber = meters * 10;
    alert("O resultado obtido atraves da conversao foi = " + convertedNumber);
    break;
  case "dam":
    convertedNumber = meters / 10;
    alert("O resultado obtido atraves da conversao foi = " + convertedNumber);
    break;
  case "hm":
    convertedNumber = meters / 100;
    alert("O resultado obtido atraves da conversao foi = " + convertedNumber);
    break;
  case "km":
    convertedNumber = meters / 1000;
    alert("O resultado obtido atraves da conversao foi = " + convertedNumber);
    break;
  default:
    alert("Opção inválida,tente novamente");
    break;
}
