let word = String; // variavel para entrada/palavra do usuário
let reverseWordPosition = String; // variavel para caracteres ao contrário
let reverseWordFinal = "";

word = prompt("Olá amigo informe a palavra para verificarmos se é um palíndromo: \n\nPor favor utilize caracteres na forma minusculas");
const numberWord = parseFloat(word.length); /* Obter a qtd de caracteres necessarias para utilizar no for */

/* obter os caracteres da palavra, o menos "-1 " apos o numberWord e utilizado pois o let "i" começa com a posição 0, tendo um caractere a mais da letra, segue exemplo
Uva - 3 caracteres
let i - inicia com 0, então 0 = U; v = 1 ; 2 = a(3 caracters ja utilizados); 3 = empty/vazio */
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
