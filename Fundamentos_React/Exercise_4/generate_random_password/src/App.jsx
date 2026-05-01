import { useState } from 'react'
import Input from './components/Input'

function App() {

  const [password,setPassword] = useState('')

  /* Sempre alterar o valor/variavel atraves do setter...Estava tentando atribuir um novo valor assim: password = math... 
  setpassword = password... Alem de ser uma constante, logo nunca seria possivel atribuir isso*/
  function handlePassword(){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"

    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar") // Sempre que uma senha for gerada o botão que poderia estar como copiado, retorna ao "copiar"
    // Meio que um reset 
  }
  
  /* Função que altera o texto copiar p/ copiado */
  const [copy,setCopyText] = useState('Copiar')

  function handleCopy(){
    navigator.clipboard.writeText(password) 
    alert("Copiado")
    setCopyText('Copiado!')

    /* E possivel colocar o metodo setTimeout aqui */
    setTimeout(() => {
      setCopyText("Copiar")
    }, 3000)
    
  }

  /* Use State para colocar o tamanho que o usuario desejar na senha, sendo o padrão 12 */
  const [customSize,setCustomSize] = useState(12) // Atribuição de valor inicial, diferente de valor padrão


  const [showInput,setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  
  return (
    <>
    <div className='container'>
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="showInput" id='showInput'>Customizar Tamanho:</label>
        <input 
        type="checkbox" 
        id='showInput'
        value={showInput}
        onChange={(ev) => setShowInput(currentState => !currentState)}
        />
      </div>
      {/* Parte de mostrar o input ou não */}

      {showInput ? (
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
      </div> 
      ): null  }

      <div className='btnContainer'>
        {/* Aqui fica uma padrão fixo sem o checkbox marcado, no caso 8(Gerando apenas uma senha de 8 caracteres) */}
        <button onClick={handlePassword}>Gerar Senha de {passwordSize}</button>
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
// [X] - Fazer o botão copiar funcionar, copiar p/area de trasnferencia
// [X] - Usuario decidir o tamanho da senha

