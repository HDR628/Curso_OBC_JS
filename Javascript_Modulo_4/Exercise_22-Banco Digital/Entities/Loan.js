const Installment = require("./Installment")

module.exports = class Loan {
    static #fee = 1.05
    
    constructor(value,installments){
        this.value = value
        this.installments = []
        for(let i = 1; i <= installments ; i++){
            this.installments.push(new Installment((value * Loan.#fee) / installments), i )
        }

        this.creationDate = new Date()
    }

    /* Acessar/visualizar o atributo privado taxes */
    get getInterestRate(){
        return Loan.#fee
    }
   
    /* Setar nova taxa de juros */
    static set fee(newFeePercentage){
        Loan.#fee = 1 + (newFeePercentage / 100)
    }

}