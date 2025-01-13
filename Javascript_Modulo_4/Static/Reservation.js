class Reservation {
    constructor(guest,room,days){
        this.guest = guest
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee /* Valor estatico, acessa diretamento da classe como se fosse um metodo padrão JS */
    }

    /* Utiliza palavra reservada da linguagem + nomeDaVarievel + Valor Estatico */
    static baseFee = 150 

    static showBaseFee(){
        console.log(`O valor da taxa base é ${Reservation.baseFee}`)
    }

    /* Pode se utilizar get/set sem conflitos com o static */
    static get premiumFee(){
        /* Tem que utilizar o nome da classe em todos os escopos */
        return Reservation.baseFee * 1.5
    }
}

/* Chamando o metodo baseFee */
Reservation.showBaseFee()
/* showBaseFee() da erro, falo que não foi definido */

/* Valor inicial da taxa premium */
console.log(`A taxa premium é ${Reservation.premiumFee}`)

const reserva1 = new Reservation(3,"105",3)
console.log(reserva1)

/* Alterando o valor da taxa base */
Reservation.baseFee = 200

/* A taxa de base padrao foi alterada pra 200, o resultado esperado para saida no terminal e de 1000(200 * 5) */
const rese2 = new Reservation(4,"202",5)
console.log(rese2)

/* Tambem foi alterado o valor da taxa premium, ja que a  base que ela tinha era a baseFee, sendo atribuido outro valor  */
console.log(`A taxa premium agora está no valor de $${Reservation.premiumFee}`)

