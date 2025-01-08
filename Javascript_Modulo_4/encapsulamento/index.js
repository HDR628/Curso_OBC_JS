/* Before #/hash */
class testAccount{
    constructor(testUser){
        this.email = testUser.email
        this.password = testUser.password
        this.balance = 0
    }
}

const userBeforeHash = {
    email: "email@gmail",
    password: "senhaPadrao"
}

const myAccountBefore = new testAccount(userBeforeHash)
// console.log(myAccountBefore)senha antes de ser alterada
myAccountBefore.password = "newPassword" /* Altera senha anterior */
// console.log(myAccountBefore)senha alterada

/* ----------------------------------------------------------------------------- */
/* Using/After hash */

class Account{
    /* Necessario utilizar/declarar as variaveis/instancias que seram utilizadas com hash */
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password 
    }

    getBalance(email,password){
        if(this.#authenticate(email,password)){
            return this.#balance
        }else{
            return "Invalido"
        }
    }
    /* Deixou privado e utilizou como autenticação o return presente estava no get balance, no if - Abstração do metodo acima*/
    #authenticate(email,password){
        return email === this.email && password === this.#password
    }
}

const user = {
    email: "ola@gmail.com",
    password: "123456",
    balance: 12312
}

const myAccount = new Account(user)
console.log(myAccount)/* Não aparece mais e nao é trocado por outra atribuição */
console.log(myAccount.getBalance("ola@gmail.com","123456"))
