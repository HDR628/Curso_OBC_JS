import { inline } from "./inline.js"; /* Nomeado, caso haja conflito entre nomes de variaves e possivel atribuir/renomear o nome da função que está sendo passada da seguinte maneira:
import { inline as i } from `./inline.js` utilizando a palavra reservada "as"
*/
import DefaultInline from "./inline.js"; /* Dinamico, os export que utilizam do metodo default,seja inline ou non-inline so podem ser utilizados uma vez apenas no documento/arquivo(como algo padrão) */

// Ademais caso nao queira nomear os export default/padrão eles podem ser passados de forma anonima e ou modificar o nome utilizado no arquivo original.Exemplo abaixo:
/* import nothingHere from `./inline.js`
   import nonInline from `./non-inline.js`

    De certa forma "mudamos" o nome presente no arquivo original que seria respectivamente DefaultInline e exportDefault. Passando de forma anonima e so "tirarmos" esses nomes que eles tambem funcionarão...

*/

/* Os export feitos de forma non-inline podem ser uteis para posterior organização de documentos/arquivos ao final/inicio do documento sendo de facil acesso/encontrar.*/
import { group } from "./non-inline.js";
import exportDefault from  `./non-inline.js`

inline()
DefaultInline()

group(  )
exportDefault()