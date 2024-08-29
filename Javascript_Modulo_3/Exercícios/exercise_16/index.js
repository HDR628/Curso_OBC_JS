const dayjs = require("dayjs")
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat)

function giveMeDate(day,month,year){

const dateNow = dayjs()

 day = day
 month = month
 year = year  /* Posso obter tanto ta copia do objeto dayJs como posso utilizar ele diretamente. Se for algo simples parece mais interessante utiliza-lo diretamente, mas caso deseje mais organização e bom separar e criar novas variaveis para receber os dados/cahaves do dayJs/biblioteca do npm */

 let birthYearDay = day.toString()
 let birthMonth = month.toString()
 let birthYear = year.toString()
// //  birthYearDay.toString()
//  birthMonth.toString()
//  birthYear.toString()

 let resultDate = birthYearDay.concat('-',birthMonth,"-",birthYear)
 console.log(resultDate)

//  console.log(dateNow) 
 console.log(birthYearDay,birthMonth,birthYear)




let oneYearFuture = dateNow.add(1,'year').format('DD/MM/YYYY')  /* obtendo data futura do aniversario da pessoa  */


console.log(dateNow.diff(birthYear,'year'))      

/*  
console.log(`
${dateNow}
${day}
${month}
${year}
${oneYearFuture}
Idade atual: ${ageNow}

`)*/

}
giveMeDate(25,6,2003)

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


/*
    Pegando os dados
const dateNow = dayjs()

let dia = dateNow.date()
console.log(dia)
console.log(dateNow.month()) */
