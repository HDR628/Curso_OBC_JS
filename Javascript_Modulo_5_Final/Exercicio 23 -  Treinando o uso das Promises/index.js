function calcularIMC(peso, altura) {
  return new Promise((resolve, reject) => {
    console.log("Iniciando cálculo do IMC...");
    if (typeof peso !== "number" || typeof altura !== "number") {
      reject("Peso e altura devem ser números.");
    } else {
      const imc = peso / (altura * altura);
      resolve(imc);
    }
  });
}

console.log(
  `Função de calcular o IMC será chamada.Atualmente estamos no bloco de codigo de fora da função calcularIMC, ou seja, fora do escopo da função/prmise`,
);

function recebendoParametros(weight, height) {
  console.log(`Chamando a função calcularIMC/promise`);
  return calcularIMC(weight, height);
}
/* (70, 175) */
recebendoParametros(70, 1.78)
  .then((result) => {
    setTimeout(() => {
      if (result < 18.5) {
        console.log(`O resultado do IMC é: ${result} - Magreza`);
      } else if (result >= 18.5 && result <= 24.9) {
        console.log(`O resultado do IMC é: ${result} - Normal`);
      } else if (result >= 25 && result <= 29.9) {
        console.log(`O resultado do IMC é: ${result} - Sobrepeso`);
      } else if (result >= 30 && result <= 39.9) {
        console.log(`O resultado do IMC é: ${result} - Obesidade`);
      } else if (result >= 40) {
        console.log(`O resultado do IMC é: ${result} - Obesidade Grave`);
      }
    }, 2000); /* Continou a executar em segundo plano e foi passou pelo catch e caiu no bloco finally(que terminou)antes do timeout de 2 seg.Continuando assim para o settimeout fora da função recebendoParametros de 1 seg. Exibindo o resultado do IMC logo apos */
  })
  .catch((err) => {
    console.log(`Erro: ${err}`);
  })
  .finally(() => {
    console.log(
      `Cálculo do IMC finalizado. Este bloco de código é executado independentemente do resultado da Promise, seja ela resolvida ou rejeitada.`,
    );
  });

setTimeout(() => {
  console.log(`Bloco de settimeout de 1 seg.`);
}, 1000);
