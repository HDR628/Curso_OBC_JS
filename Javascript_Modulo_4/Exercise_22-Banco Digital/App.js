const Deposit = require("./Entities/Deposit")
const Loan = require("./Entities/Loan")
const Transfer = require("./Entities/Transfer")
const User = require("./User")

module.exports = class App {
  static #users = []

  /* Criação de metodo estatico para checar email e achar usuarios com mais facilidades */
  static findUser(email) {
    const user = this.#users.find(user => user.email === email)
    return user ?? null
  }

  /* Criação de usuario */
  static createUser(email, fullname) {
    const userExists = App.findUser(email)
    if (!userExists) {
      this.#users.push(new User(email, fullname))
    }
  }

  /* Achar pelo metodo findUser criado anteriormente e depositar o valor desejado  */
  static deposit(email, value) {
    const user = App.findUser(email)
    if (user) {
      const newDeposit = new Deposit(value)
      user.account.addDeposit(newDeposit)
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail)
    const toUser = App.findUser(toUserEmail)
    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value)
      fromUser.account.addTransfer(newTransfer)
      toUser.account.addTransfer(newTransfer)
    }
  }

  static takeLoan(email, value, numberOfInstallments) {
    const user = App.findUser(email)
    if (user) {
      const newLoan = new Loan(value, numberOfInstallments)
      user.account.addLoan(newLoan)
    }
  }

  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage
  }
}