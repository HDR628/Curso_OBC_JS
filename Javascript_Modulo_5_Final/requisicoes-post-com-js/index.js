// Criação de função para criar os elementos do artigo, como titulo, conteudo e autor, e adicionar eles no DOM posteriormente
function renderArticle(articleData) {
  // Elemento pai do artigo - article
  // Elementos filho que compõem o artigo - title, content e author
  // Adição de classes aos elementos filhos para identificação e estilização

  const article = document.createElement("article");
  article.classList.add("article");
  article.id = `article-${articleData.id}`;

  const title = document.createElement("h3");
  title.classList.add("article-title");
  title.textContent = articleData.title;

  const content = document.createElement("div");
  content.classList.add("article-content");
  content.innerHTML = articleData.content;

  const author = document.createElement("div");
  author.classList.add("article-author");
  author.textContent = articleData.author;
  // Atribuir os elementos filhos ao elemento pai e adicionar o elemento pai ao DOM
  article.append(title, author, content);
  document.querySelector("#articles").appendChild(article);
}

// Criação de função assincrona para buscar os artigos presentes no servidor e obtenção do dados do novo artigo criado.
// A utilização do then juntamente com o fetch não ira apresentar os elementos ja na pagina html, levara para um pagina contendo as informações do artigos que foram criados.
async function fetchArticles() {
  const articles = await fetch("http://localhost:3000/articles").then((res) => res.json());
  articles.forEach(renderArticle);
}

/* Criação/Esperando o carregamento do DOM*/
document.addEventListener("DOMContentLoaded", () => {
  fetchArticles();
});

/* Criação de variavel para armazenar a seleção do formulário */
let form = document.querySelector("form");

/* Esperando o envio do formulario, previnindo o comportamento padrão de recarregamento da pagina */
/* Criação de um objeto para armazenar os dados do novo artigo, pegando diretamente os valores */
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const articleData = {
    title: document.querySelector("#title").value,
    content: document.querySelector("#content").value,
    author: document.querySelector("#author").value,
  };

  /* Requisição POST para criar o novo artigo e exibi-lo posteriormente */
  // Segundo parametro da função fetch serve para alterar o metodo da requisição(que por padrão e GET)
  // Parametro headers serve para informar o tipo de informação que sera enviada
  // Parametro body serve para pegar os dados/conteudo do novo artigo e enviar no formato JSON, neste caso e necessario utilizar o stringigy
  // para ter uma texto/string
  const response = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData), //Pegando os dados ali em cima da variavel const articleData
  });

  // Criação de variavel para armazenar a respota/POST do servido.
  // Apenas reset do formulario
  // Exibir o novo artigo na seção de artigos utilização os dados novos
  const savedArticle = await response.json();
  form.reset();
  renderArticle(savedArticle);
  console.log(savedArticle);
});
