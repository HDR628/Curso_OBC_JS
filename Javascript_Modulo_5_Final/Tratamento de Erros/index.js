function sum(a, b) {
    const firstNumber = Number(a)/* Transformar em numeros */
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')/* Mensagem de erro */
    }

    return firstNumber + secondNumber
}

try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22)) /* Da erro */
    console.log(sum(18, "0"))
    console.log(sum(39, null)) 
    // console.log(sum(13, "zero"))   /* Da erro */
} catch (error) {    /* O catch presente facilita a visualização do erro e a mensagem passada(no throw error acima) */
    console.log("An error ocurred!")
    console.log(error.message)
} finally {   /* Quando terminar de realizar os testes, se der erro so será mostrado ate onde foi executado corretamente */
    console.log('Calculations finished.')
}