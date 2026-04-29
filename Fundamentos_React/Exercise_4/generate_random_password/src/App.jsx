import { useState } from 'react'


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
  const [passwordSize,setPasswordSize] = useState(12) // Atribuição de valor padrão

  
  return (
    <>
    <div className='container'>
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        {/* Essa parte do ev.target.value e importante, normalmente devolve com string que em algumas linguagens pode dar erro no entanto no formato JS/JSX ele consegue converter
        em numero e nao da erro, mas a questão principal e ele estar basicamente dizendo "Olha pro meu elemento(no caso input) e salva/passa o valor dele pra variavel passwordSize" */}
        <input type="number" id='passwordSize' value={passwordSize} onChange={(ev) => setPasswordSize(ev.target.value)} min={1} />
      </div>
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
// [X] - Fazer o botão copiar funcionar, copiar p/area de trasnferencia
// [X] - Usuario decidir o tamanho da senha

