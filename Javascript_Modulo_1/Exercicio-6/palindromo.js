let word = String; // variavel para entrada/palavra do usuário
let reverseWordPosition = String; // variavel para caracteres ao contrário
let reverseWordFinal = "";

word = prompt("Olá amigo informe a palavra para verificarmos se é um palíndromo: ");
const numberWord = parseFloat(word.length);

/* obter os caracteres da palavra */
for (let i = numberWord - 1; i >= 0; i--) {
  reverseWordPosition[i] = word[i];
  reverseWordFinal += reverseWordPosition[i] + "";
}

if (reverseWordFinal === word) {
  alert(
    "Olha só amigo há palavra digitada e um palíndromo, observe o resultado: " +
      "\nPalavra normal: " +
      word +
      "\nPalavra ao contrário: " +
      reverseWordFinal
  );
} else {
  alert(
    "Infelizmente sua palavra não e um palíndromo, aqui estão os resultados: " +
      "\nPalavra normal : " +
      word +
      "\nPalavra ao contrário : " +
      reverseWordFinal
  );
}
