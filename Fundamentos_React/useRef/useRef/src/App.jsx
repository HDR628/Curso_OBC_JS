import { useRef, useState } from "react"
import RefExample from "./RefExample"

export default function App(){
  let variable = 0 
  const [state,setState] = useState(0)
  const ref = useRef(0)

  function showValues(){
    alert(`
      Variavel: ${variable}
      State: ${state}
      Ref: ${ref.current}
      `)
  }

  return(
    <div>
      <h2>Focando no input</h2>
      <RefExample/>
      <hr />
      <h1>Variaveis, states e ref</h1>
      <hr />
      <p>Variavel: {variable}</p>
      <p>State: {state}</p>
      <p>Ref: {ref.current}</p>
      <hr />

      <button 
      onClick={() => variable++}>
        +1 variavel
      </button>
      <button 
      onClick={() => setState(state => state + 1)}>
        +1 state
      </button>
      <button 
      onClick={() => ref.current++}>
        +1 ref
      </button>
      <button onClick={showValues}>Show Values</button>
    </div>
  )
}


/* Ao clicar na variavel x qtd ela não atualiza na pagina, so na memoria por isso que ao clicar no bnt e ao mostrar os valores vai estar la a qtd de vezes que clicamos
O useState ja funciona de forma diferente, renderiza novamente so a parte que "mexemos"/atualizamos por isso ele aparece na tela ao clicar no btn de add/increment 1
Clicando no state a variavel que clicamos uma qtd de vezes e apagada pois ela necessita fazer o calculo novamente(devido a atualizarmos/renderizarmos a page again)

Agr o useRef ele persirte a info igual o state, no entanto nao aparece de forma visual na tela igual o state....Mas ele mantem/preserva os valores que ele tinha


Tambem e possivel usar a propridade/metodo nos elementos, neste caso usou no input
*/