async function calcularIMC(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    return Promise.reject("Peso e altura devem ser números.");
  } else {
    return peso / (altura * altura);
  }
}

async function receberParametros(weight, height) {
  try {
    console.log(`Peso: ${weight}, Altura: ${height}`);
    let result = await calcularIMC(weight, height);
    console.log(`O IMC é: ${result}`);

    if (result < 18.5) {
      console.log("Abaixo do peso");
    } else if (result >= 18.5 && result < 25) {
      console.log("Peso normal");
    } else if (result >= 25 && result < 30) {
      console.log("Sobrepeso");
    } else {
      console.log("Obesidade");
    }
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

receberParametros(70, 1.75);
receberParametros("setenta", 1.75);
