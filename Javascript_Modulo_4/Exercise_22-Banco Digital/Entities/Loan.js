module.exports = class Loan {
    #taxes = 0
    constructor(loanAmount,numberParcel,){
        this.loanAmount = loanAmount
        this.numberParcel = numberParcel
        this.installments = this.calculateInstallments();
    }

    //Método para calcular as parcelas
    calculateInstallments() {
        const installmentValue = (this.loanAmount / this.numberParcel) * (1 + this.#taxes);
        const installments = [];

        // Criando as instâncias de Installment,para maior conveniencia iniciei o let em 1
        for (let i = 1; i <= this.numberParcel; i++) {
            const installment = new Installment(installmentValue, i, 'pendente');
            installments.push(installment);
        }

        return installments;
    }



    /* Acessar/visualizar o atributo privado taxes */
    get getInterestRate(){
        return this.#taxes
    }
   
    /* Setar nova taxa de juros */
    set setInterestRate(newRate){
        this.#taxes = newRate
    }

}