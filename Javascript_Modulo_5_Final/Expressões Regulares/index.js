function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, ""); //Criação de variavel para pegar um numero mal inserido/formatado, retirando/extraindo caracteres de a-z
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]; // apos extração dos elementos/caracteres indevidos,buscar de forma geral com o positive lookbehind(olha p/ tras)uma qtd de elemtentos que contenham a qtd de numero de 1 a 3, utilzição do [0] e porque o match traz um array
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]; // positive lookbehind para achar (, "escapou o caracterer"+ para buscar o ddd dos paises, positive look ahead para achar o fechamento do ddd com )
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+55 (22) 9 9876-5432"));
console.log(new PhoneNumber("+1 (555) a555-999-8888"));
