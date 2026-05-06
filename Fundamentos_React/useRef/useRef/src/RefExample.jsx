import { useRef } from "react"

export default function RefExample(){
  /* Inicia como "vazio"/null  */
  const inputRef = useRef(null)


  function handleClick(){
    /* Pega o valor/"estado" atual do ref e atraves dele podemos usar maior parte do metodos/propriedades JS */
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = "blue"
    console.log("focou no btn ?")
  }
  
  return(
    <div>
      {/* Referenciamos qual o elemento que queremos com a "prop/metodo" ref 
      a função handleClick trata de chamar/mudar o estado do inputRef com o metodo JS posterior atrelado a ele 
      Da pra mudar o style tbm...Ele altera diretamente no DOM do JS não no Virtual DOM do react
      */}
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus btn</button>
    </div>  
  )
}