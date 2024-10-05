class User {
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if(email === this.email && password === this.password){
            console.log("Logado com sucesso")
        }
        else{
            console.log("Email/Senha incorretos")
        }
    }

}

const usuario = new User("Henrique","henriquedias@gmail.com","login4321")
usuario.login('henriquedias@gmail.com','login4321')
console.log(usuario)

// Os metodos criados dentro da classe user e suas instancias que devem chamar o metodo a ser utilizado
/* Estava utilizando da seguinte maneira: 
login('henriquedias@gmail.com','login4321')
logo dava erro ao chamar o metodo de forma global,
*/