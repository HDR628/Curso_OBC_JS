function areaTriangle (base,altura){
    let resultTriangle = (base * altura)/2
    return resultTriangle
}

function areaRectangle(base,altura){
    let resultRectangle = base * altura
    return resultRectangle
}

function areaSquare(side){
    let resultSquare = side * side;
    return resultSquare
} 

function trapezio (base1,base2,altura){
    let trapezioResult = ((base1 + base2) * altura)/2
    return trapezioResult
}

function areaCircle(){
    let raio = prompt("Informe o valor do raio: ")
    return 3.14 * (raio * raio);
}

let escolha = ""

while (escolha !== 6){
    escolha = parseFloat(prompt("Olá seja bem-vindo a calculadora geometrica. Escolha entre as seguintes opções: \n\n 1 - Area do Triangulo\n 2 - Area do retangulo\n 3 - Area do quadrado\n 4 - Area do trapezio\n 5 - Area do circulo\n 6 - Sair "));

    switch(escolha){
        case 1:
            let baseTriangle = parseFloat(prompt("Escolha o valor da base para ser utilizado: "))
            let heigthTriangle = parseFloat(prompt("Escolha o valor da altura para ser utilizado: "))
            let resultadoTriangle =  areaTriangle(baseTriangle,heigthTriangle)
            alert("O resultado da area do triangulo de base: " + baseTriangle + " e altura: " + heigthTriangle + " é " + resultadoTriangle)
            break
        case 2 :
            let baseRectangle = parseFloat(prompt("Escolha o valor da base para ser utilizado: "))
            let heigthRectangle = parseFloat(prompt("Escolha o valor da altura para ser utilizado: "))
            let resultadoRectangle =  areaRectangle(baseRectangle,heigthRectangle)
            alert("O resultado da area do retangulo de base: " + baseRectangle + " e altura: " + heigthRectangle + " é " + resultadoRectangle) 
            break 
        case 3 :
            let sideSquare = parseFloat(prompt("Escolha o valor do lado para ser utilizado: "))
            let resultadoSquare = areaRectangle(sideSquare,sideSquare)                
            alert("O resultado da area do quadrado é " + resultadoSquare)  
            break
        case 4 :                
            let baseOne = parseFloat(prompt("Escolha o valor da base 1 para ser utilizado: "))
            let baseTwo = parseFloat(prompt("Escolha o valor da base 2 para ser utilizado: "))
            let heigthTrapezio = parseFloat(prompt("Escolha o valor da altura para ser utilizado: "))
            let resultadoTrapezio = trapezio(baseOne,baseTwo,heigthTrapezio)                
            alert("O resultado da area do trapezio é " + resultadoTrapezio)  
            break
        case 5 :
           resultCircle = areaCircle()
           alert("O resultado da area do circulo é: " + resultCircle)
            break
        case 6 :
            alert("Saindo da calculadora...")
            break
        default :
            alert("Opção invalida")
            break
        }
}