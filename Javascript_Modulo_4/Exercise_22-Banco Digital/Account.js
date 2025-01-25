module.exports = class Account {
    #balance

    constructor(user) {
      this.owner = user
      this.#balance = 0
      this.deposits = []
      this.loans = []
      this.transfers = []
    }
    
    /* Visualização do saldo atual */
    get balance() {
      return this.#balance
    }
  
    /* Métodos */
    addDeposit(deposit) {
      this.#balance += deposit.value
      this.deposits.push(deposit)
    }
  
    addLoan(loan) {
      this.#balance =+ loan.value
      this.loans.push(loan)
    }
  
    addTransfer(transfer) {
      if (transfer.receiver.email === this.owner.email) {
        this.#balance += transfer.value
        this.transfers.push(transfer)
      } else if (transfer.sender.email === this.owner.email) {
        this.#balance -= transfer.value
        this.transfers.push(transfer)
      }
    }
  }