let a = 0

let b = a || 20
/* Na atribuição de valor a variável b está ocorrendo uma "curto-circuito" que tenta verificar se o objeto do lado esquerdo e falseável, como no caso do 0 que o operador OU(||) entende como falso. Logo o retorno desse elemento será 20 pois 0 e interpretado/entendido como falso... */

console.log({ a, b })

b = a ?? 20
// /* Ja neste nova atribuição a variável b utilizamos o operador(??) que analisa os elementos da esquerda para a direita verificando se o valor do esquerdo e null e/ou undefined caso seja sera retornado o valor da direita caso não se encaixe no padrão null/undefined. Sendo essa a principal diferença entre o operador || (p/ "curto-circuito") e (??) que analisa null/undefined */

console.log({ a, b })


let c = false ?? 25 /* Demonstrando a principal diferença do operador ||, caso atribuíssemos isso com || retornaria 25, diferente desse caso */

console.log({ c })