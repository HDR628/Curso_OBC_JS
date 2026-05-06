import { useEffect, useState } from "react"

function Counter(){
  const [countErase,setCounterErase] = useState(0)


  useEffect(() => {
    console.log("O useEffect foi ativado! (esse aqui e o que faz a limpeza)")

    return () => {
      console.log("Fazendo a limpeza")
      console.log("Componente Desmontado")
    }

  }, [])

  return(
    <button onClick={() => setCounterErase(countErase => countErase + 1)}>Contador: {countErase}</button>
  )
}

export default function App(){
  const [count,setCounter] = useState(0)
  const [count2,setCounter2] = useState(0)

  const [show,setShow] = useState(false)

  /* Tem que ser usado antes do return(top-level) */
  // Ele sempre é chamado 1 vez
  // e necessario 1 função de callback e outro elemento que esta a ser observado pra chamar o effect (setup, dependencies)
  // "mecanismo de limpeza"
  useEffect(() => {
    alert("O useEffect foi ativado!")
  }, [count])


  return(
    <>
      <h1>Salve</h1>
      <h2>Conhecendo o useEffect</h2>
      {/* So ativa o effect com esse aqui */}
      <button onClick={() => setCounter(count => count + 1)}>Contador: {count}</button>
      {/* <Counter/> */}
      <hr />
      <button onClick={() => setCounter2(count2 => count2 + 1)}>Contador: {count2}</button>  
      <hr />
      <div>
        <label htmlFor="show"></label>
        <input 
        type="text" 
        value={show}
        onChange={() => setShow(s => !s)} />
      </div>
      {show ? <Counter/> : null}
    </>
  )
}

/* 
  OS 3 CASOS DE USO DO useEffect NESTE CÓDIGO:

  1. MAPEANDO O CICLO DE VIDA (Mount / Montagem):
     No componente <Counter/>, o useEffect tem um array de dependências vazio [].
     Isso faz com que ele execute APENAS UMA VEZ, logo quando o componente aparece na tela.

  2. MECANISMO DE LIMPEZA (Unmount / Desmontagem):
     Dentro do useEffect do <Counter/>, temos o 'return () => { ... }'.
     O React executa essa função sempre que o componente é REMOVIDO da tela (quando você limpa o input).
     Útil para cancelar timers, requisições ou limpar registros na memória.

  3. SINCRONIZAÇÃO COM ESTADO (Update / Dependências):
     No componente <App/>, o useEffect tem o [count] no array de dependências.
     Isso significa que ele "observa" o count. Toda vez que o count mudar, o alerta dispara.
     Se você clicar no contador 2 (count2), o alerta NÃO dispara, pois ele não está sendo observado.
*/

