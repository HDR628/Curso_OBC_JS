class Wallet {
    /* Atributo Privado */
    #amount
    #username

    /* Atribuição de valor fixo para teste, e tambem aplicar "regra interna" o transformando em numero inteiro */
    constructor (){
        this.#amount = 100.99 * 100 /* Resultado 10099 */
    }

    get amount(){
        return this.#amount / 100 /* Mostrara resultado como numero decimal, 100.99 */
    }

    set username(newUsername){
        /* Verificação do atributo que sera passado depois do "=",  */
        if (typeof newUsername === 'string') {
            this.#username = newUsername
          }else{
            console.log("Precisa ser do tipo string")
            
        }
    }

    get username(){
        return this.#username
    }
}

/* Criação da Wallet */
const myWallet = new Wallet()

/* Não necessitou passar os parenteses(), para checar o valor de amount */
console.log(myWallet.amount)

/* Foi atribuido igual uma propriedade/atributo/variavel comum
nome = "Henrique"
com metodo diferente, no caso set*/
myWallet.username = "Henrique"
console.log(myWallet.username)

/* Possibilita alterar/concatenar como variavel normal tbm */
myWallet.username += " Dias"
console.log(myWallet.username)

/* Tentar atribuir numero ao username, resultara em err devido ao tipo de variavel */
myWallet.username = 52002
console.log(myWallet.username)


