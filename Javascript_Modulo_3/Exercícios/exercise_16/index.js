/* TODO
[x] - função que recebe data de nascimento
[x] - idade atual
[x] - proxima data formatada (dd/mm/yyyy)
[x] - quantos dias faltam para o proximo aniversario
*/

/* Requires of modules */
const dayjs = require("dayjs")
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat)
/* const localeBr = require("./node_modules/dayjs/locale/br")
dayjs.locale(localeBr) */

/* Create function */
function dateBirth(day,month,year){

const dateNow = dayjs() // data atual

/* Adicionando 0 na frente do parametro passado(caso for menor que 10.Para posteriormente não dar erro na formatação) */
if(month < 10){
    month = "0" + month
}

/* Criar data de nascimento */
let birthday = dayjs(`${day}/${month}/${year}`,"DD/MM/YYYY")
// console.log(birthday)

/* Criação do aniversario atual, para posterior adição e contagem de dias */
let birthdayThisYear = dayjs(`${day}/${month}/${dateNow.year()}`,"DD/MM/YYYY")
// console.log(birthdayThisYear)

/* Descobrindo a idade atual */
let idadeAtual = birthdayThisYear.diff(birthday,"year")
// console.log(idadeAtual)

/* Proxima data de aniversario, formatada */
let nextBirthday = birthdayThisYear.add(1,"year").format("DD/MM/YYYY")
// console.log(nextBirthday)

/* Quantos dias faltam para o proximo aniversario ? */

let convertNext = dayjs(`${nextBirthday}`,"DD/MM/YYYY")
const diffDays = convertNext.diff(dateNow, 'day');
// console.log(diffDays)

/* Exibição no terminal */
console.log(`
    Idade atual: ${idadeAtual}
    Proximo aniversario: ${nextBirthday}
    Quantos dias para o proximo aniversario: ${diffDays}  `)

}
dateBirth(25,6,2003)