/* 
TODO
[x] - função que recebe data de nascimento
[x] - idade atual
[x] - proxima data formatada (dd/mm/yyyy)
[] - quantos dias faltam para o proximo aniversario
  
*/

/* Requires of modules */
const dayjs = require("dayjs")
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat)

/* Create function */
function dateBirth(day,month,year){

const dateNow = dayjs() // data atual

/* Data de nascimento - info */
day = day
month = month
year = year

/* Transformando em string e concatenando */
birthDay = day.toString()
birthMonth = month.toString()
birthYear = year.toString()

// let concatDate = birthDay.concat('/',birthMonth,'/',birthYear) /* O dayJs interpreta/dividi as datas dessa forma e reconhece os caracteres: - ; / como "divisão" */

/* Obter a data que caira o aniversario no ano seguinte */

if(month < 10){
    month = "0" + month
}


let concatFormmated = (day + "/" + month + "/" + dateNow.$y)
let paramsToDayjs = dayjs(concatFormmated,'DD/MM/YYYY'); /* Transformando os paramentros por algo semelhante/data ao dayJs para que seja possivel interpretrar e adicionar e formatar com mais facilidade */ 
/* let oneYearFuture = dayjs(dateNow.day(day),dateNow.month(birthMonth),dateNow.add(1,"year")) */
let oneYearFuture = dayjs(paramsToDayjs.add(1,"year")).format("DD/MM/YYYY") 

console.log(`Concat Formmated = ${concatFormmated}`)
console.log(`paramns to dayjs = ${paramsToDayjs.format("DD/MM/YYYY")}`)
console.log(`one year future = ${oneYearFuture}`)

// console.log(paramsToDayjs) /* Teste para saber se esta saindo a data correta */

/* Calculando os dias restantes para o proximo aniversario */

// data1anoAFrente - dataAtual

console.log(oneYearFuture)
console.log(typeof(oneYearFuture))

let yearFutere = dayjs(oneYearFuture)
console.log(yearFutere)
console.log(typeof(yearFutere))

console.log(yearFutere.diff(dateNow,'day'))

console.log(typeof(dateNow))



}
dateBirth(25,6,2003)