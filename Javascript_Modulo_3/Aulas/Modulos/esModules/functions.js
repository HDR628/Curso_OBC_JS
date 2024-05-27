export let name = "Henrique"    
/* export sempre antes do "alvo" funcões,variaveis... */


export function label(attributes) {
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
  }
  
export function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
  }
  
export  function br() {
    const element = document.createElement('br')
    return element
  }
  