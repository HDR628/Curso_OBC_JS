class BankAccount {
    #balance = 0
    #accountHolder = null

    get amount(){
        return this.#balance / 100
    }

    set username(nameHolder){
        if(typeof nameHolder != 'string'){
            console.log("Entrada invalida")
        }
        else{
            this.#accountHolder = nameHolder
            console.log(this.#accountHolder)
        }
    }

    set moreCash(deposit){
        if(deposit <= 0){
            console.log("Não e possivel adicionar 0, tente novamente")
        }else{
            
            this.#balance += (deposit / 100)
            console.log(this.#balance)
        }
    }

    minusCash(value){
        if(this.#balance <= 0 || value > this.#balance){
            console.log("Não e possivel retirar dinheiro")
        }else{
            this.#balance -= value
            console.log(this.#balance)
        }
    }

    get balance() {
        return this.#balance;
    }
    
    checkBalance() {
        console.log(`Saldo atual: R$ ${this.amount}`);
    }
    
}

const myAccount = new BankAccount();

// 1. Definindo o titular da conta
myAccount.username = "Henrique"; // Esperado: "Henrique"
myAccount.username = 12345; // Esperado: "Entrada invalida"

// 2. Adicionando valores válidos
myAccount.moreCash = 10000; // Esperado: saldo interno será 100
console.log(myAccount.amount); // Esperado: 100

// 3. Tentando adicionar um valor inválido
myAccount.moreCash = -5000; // Esperado: "Não e possivel adicionar 0, tente novamente"

// 4. Tentando sacar mais do que o saldo
myAccount.minusCash(200); // Esperado: "Não e possivel retirar dinheiro"

// 5. Realizando um saque válido
myAccount.minusCash(50); // Esperado: saldo interno será 50
console.log(myAccount.amount); // Esperado: 50

// 6. Tentando sacar com valor inválido
myAccount.minusCash(0); // Esperado: "Não e possivel retirar dinheiro"
myAccount.minusCash(-10); // Esperado: "Não e possivel retirar dinheiro"

// 7. Confirmando o saldo final
console.log("Saldo final:", myAccount.amount); // Esperado: 50
