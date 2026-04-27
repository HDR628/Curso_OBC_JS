import { useState } from "react"

function getInitialValue(){
  console.log("Obtendo o valor inicial!")
  return 1 + 1
}


export default function useCounter(){
  const [count, setCount] = useState(() => getInitialValue())    /* Tenho que passar atraves de uma array function, senão ele ficaria obtendo o valor
  inicial repetidas vezes, no entanto dessa forma e apenas como o nome diz inicial */

  const increment = () => {
    setCount(count + 1)
    /* setCount(count + 1) 
    se eu botar 2 setCount aqui, ele vai rodar de forma assincrona, fazendo um 
    "batch" do count, que evita ficar renderizando 2 vezes \
    
    agr se fosse dessa forma aqui:
    setCount((currentState) => currentState + 1) // 2 + 1 = 3 
    setCount((currentState) => currentState + 1) // 3 + 1 = 4
    
    ai sim conseguiriamos chamar o setCount 2 vezes, que ele rodaria de forma sincrona*/
  }

  return {
    count,
    increment
  }
}