function calcularIMC(peso, altura) {
  return new Promise((resolve, reject) => {
    console.log("Iniciando cálculo do IMC...");
    if (typeof peso !== "number" || typeof altura !== "number") {
      reject("Peso e altura devem ser números.");
    } else {
      const imc = peso / (altura * altura);
      resolve(`O resultado do IMC é: ${imc}`);
    }
  });
}

console.log(
  `Função de calcular o IMC será chamada.Atualmente estamos no bloco de codigo de fora da função calcularIMC, ou seja, fora do escopo da função/prmise`,
);

let recebendoParametros = calcularIMC(74, 178);

recebendoParametros.then((result) => {
  setTimeout(()=>{
    if(result < 18.5){
      console.log(`O resultado do IMC é: ${result} - Magreza`)
    }else if(result >= 18.5 && result <= 24.9){
      console.log(`O resultado do IMC é: ${result} - Normal`)
    }else if(result >= 25 && result <= 29.9){
      console.log(`O resultado do IMC é: ${result} - Sobrepeso`)
    }else if(result >= 30 && result <= 39.9){
      console.log(`O resultado do IMC é: ${result} - Obesidade`)
    }else if(result >= 40){
      console.log(`O resultado do IMC é: ${result} - Obesidade Grave`)
    }
  },2000)
}.catch((err)=>{
  console.log(`Erro: ${err}`);
}.finally(()=>{
  console.log(`Cálculo do IMC finalizado`);
})

