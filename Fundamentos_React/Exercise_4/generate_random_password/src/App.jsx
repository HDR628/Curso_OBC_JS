import { useState } from 'react'


function App() {

  const [password,setPassword] = useState('')

  /* Sempre alterar o valor/variavel atraves do setter...Estava tentando atribuir um novo valor assim: password = math... 
  setpassword = password... Alem de ser uma constante, logo nunca seria possivel atribuir isso*/
  function handlePassword(){
    setPassword(Math.random().toString(36).slice(2))  
    alert("Senha gerada")
  }

  /* Função que altera o texto copiar p/ copiado */
  const [copy,setCopyText] = useState('Copiar')

  function handleCopy(){
    navigator.clipboard.writeText(password) 
    alert("Copiado")
    setCopyText('Copiado!')
    
  }

  
  return (
    <>
    <div className='container'>
      <h1>Gerador de Senhas</h1>
      <div className='btnContainer'>
        <button onClick={handlePassword}>Gerar Senha</button>
        <button onClick={handleCopy}>{copy}</button>
      </div>
      <span>{password}</span>
    </div>
    </>
  )
}

export default App


// [X] - Usar o useState para gerar a senha e colocar o valor dentro de uma tag separada
// [X] - Usar o useState para trocar o texto do botão copiar p/ copiado
// [] - Fazer o botão copiar funcionar, copiar p/area de trasnferencia

