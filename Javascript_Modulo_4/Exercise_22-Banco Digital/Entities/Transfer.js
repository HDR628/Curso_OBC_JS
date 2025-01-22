module.exports = class Transfer {
    constructor(sender,receiver,value){
        if(value <= 0){
            console.log("Impossivel transferir este valor")
        }else{
            this.sender = sender
            this.receiver = receiver
            this.value = value
            this.creationDate = new Date()
        }
    }
}

