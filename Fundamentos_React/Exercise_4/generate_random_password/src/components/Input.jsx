

export default function Input(props){

  return (
    <input 
    type="number" 
    id='passwordSize' 
    value={props.passwordSize} 
    onChange={(ev) => props.setPasswordSize(ev.target.value)} 
    min={1} />
  )

}

/* Acho que desestruturado fica melhor, mais facil de entender */


/* Essa parte do ev.target.value e importante, normalmente devolve com string que em 
algumas linguagens pode dar erro no entanto no formato JS/JSX ele consegue converter  
em numero e nao da erro, mas a questão principal e ele estar basicamente dizendo 
"Olha pro meu elemento(no caso input) e salva/passa o valor dele pra variavel passwordSize" */
