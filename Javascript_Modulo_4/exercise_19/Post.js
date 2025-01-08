const Comment = require("./Comment")

class Post {
    constructor(title,text,author){
        this.title = title
        this.text = text
        this.author = author
        this.comments = []
    }
    addComment(username,content){
        this.comments.push(new Comment(username,content))
    }
}

module.exports = Post