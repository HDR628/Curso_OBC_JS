export default function () {
    const main = document.querySelector(`main`)/* Facilitou o acesso a tag main e utilização do encadeamento com os atributo/classes referentes a ele... */
    const root = document.querySelector(`:root`) /* Selecionou de forma indireta os padroes do navegador(alterados via css), facilitando a modificação do teme light/dark */
    if (main.dataset.theme === `dark`) {
      root.style.setProperty(`--bg-color`, '#f1f5f9')
      root.style.setProperty(`--font-color`, '#212529')
      root.style.setProperty(`--border-color`, '#aaa')
      root.style.setProperty(`--primary-color`, '#26834a')
      main.dataset.theme = "light"
      /* Encadeamento com o elemento root possibilitou a utilização do métodos/funções que podem alterar propriedades/atributos aos elementos presentes no css/html raiz da pagina */
    } else {
      root.style.setProperty(`--bg-color`, '#212529')
      root.style.setProperty(`--font-color`, '#f1f5f9')
      root.style.setProperty(`--border-color`, '#666')
      root.style.setProperty(`--primary-color`, '#4dff91')
      main.dataset.theme = "dark"
    }
  }