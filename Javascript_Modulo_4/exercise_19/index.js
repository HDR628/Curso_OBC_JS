const Author = require('./Author')

const henri = new Author("Henrique")

const post = henri.newPost("Titulo","Conteudo")

post.addComment("Irineu","Legal")
post.addComment("Lucas","Interessante")

console.log(henri)
console.log(post)