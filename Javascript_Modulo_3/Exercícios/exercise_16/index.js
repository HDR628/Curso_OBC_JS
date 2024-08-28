const dayjs = require("dayjs")

const dateNow = dayjs()

let dia = dateNow.date()
console.log(dia)
console.log(dateNow.month())


/* function giveMeDate(day,month,year){

    day = dayjs().day
    month = dayjs().month
    year = dayjs().year

    console.log(`
        ${dateNow}
        ${day}
        ${month}
        ${year}
        `)

}
    giveMeDate(28,8,2024) */

// console.log(dayjs) // vai me retornar um objeto com todos os dados da data atual

/* const a = dayjs()
const b = a.add(2, `year`)
console.log(a)
console.log(b)
 
Dessa forma e retornado o objeto/data do dayjs com o valor adicionado pelo metodo add presente no npm...Respectivamento pelo numero desejado(no caso foi anos 2)e logo apos o que voce deseja adicionar desde a data atual(no caso foi ano/year)
*/

// let hour = dayjs().hour()
// console.log(`Hora atual: ${hour}`)

// console.log(dayjs().get('date'))
// console.log(dayjs().get('year'))
// console.log(dayjs().get('month'))


