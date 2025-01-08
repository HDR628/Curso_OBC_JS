const Post = require("./Post")

class Author {
    constructor(name){
        this.name = name
        this.posts = [] 
    }

    newPost(title,text){
        const post = new Post(title,text,this.name)
        this.posts.push(post)
        return post
    }
}

module.exports = Author