function sum(a, b) {
  const firstNumber = Number(a); /* Transformar em números */
  const secondNumber = Number(b);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("arguments must be two numbers"); /* Mensagem de erro */
  }

  return firstNumber + secondNumber;
}

try {
  console.log(sum(2, 9));
  console.log(sum(true, 14));
  console.log(sum(undefined, 22)); /* Da erro */
  console.log(sum(18, "0"));
  console.log(sum(39, null));
  // console.log(sum(13, "zero"))   /* Da erro */
} catch (error) {
  /* O catch presente facilita a visualização do erro e a mensagem passada(no throw error acima) 
    alias o paramentro que e colocado antes das chaves(normalmente e/error)mostra a msg que aparece quando normalmente nÃo temos o catch ou finally, dessa forma caso deseja possa colocar um console.log
    no erro.
    */
  console.log("An error ocurred!");
  console.log(error.message);
} finally {
  /* Quando terminar de realizar os testes, se der erro so será mostrado ate onde foi executado corretamente */
  console.log("Calculations finished.");
}
