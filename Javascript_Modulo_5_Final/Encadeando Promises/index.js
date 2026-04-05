function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error("age is required"));
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("birthday is required"));
    }
  });
}

/* Um dos jeitos de encadear promises, no entanto como mencionado na aula e inviavel devido a ilegibilidade/falta de clareza/organização do codigo */
getAge("2025-09-29")
  .then((age) => {
    checkAge(age).then((above18) => {
      if (above18) {
        console.log("Maior de idade");
      } else console.log(`Menor de idade`);
    });
  })
  .catch((err) => {
    console.log(`Mensagem de erro: ${err.message}`);
  });
(err) => {
  console.log(err.message);
};

/* Forma mais eficiente/clean de encadear as promises seria da seguinte maneira: */
/* Devido a forma como encadeamos as promises, segue um fluxo de pensamento mais limpo/logico, pois neste caso 
estamos falando assim: 
pegamos a data de nascimento pela função getAge, nesta função pegamos o ano de nascimento e ano atual
e confirmamos atraves da outra promise, se a pessoa tem mais de 18 anos. Dispensando o uso da funcao checkAge dentro do then da funcao getAge, o que torna o codigo mais limpo e organizado.
 */
getAge("2006-09-29")
  .then((age) => {
    return checkAge(age);
  })
  .then((above18) => {
    if (above18) {
      console.log("Maior de idade");
    } else console.log(`Menor de idade`);
  })
  .catch((err) => {
    console.log(`Mensagem de erro: ${err.message}`);
  });

/* Outro exemplo */
function groupMembers(group) {
  return new Promise((resolve, reject) => {
    if (group > 1) {
      // const valuePerMember = value / group;
      resolve(valuePerMember);
    } else if (typeof group !== "number" || group <= 0) {
      reject(new Error("O grupo dever ser um numero e maior que 0"));
    }
  });
}

function getBills(value) {
  return new Promise((resolve, reject) => {
    if (group) {
      resolve(value / groupMembers);
    } else if (groupMembers == 1) {
      resolve(value);
    } else {
      reject(new Error("O valor deve ser um numero e maior que 0"));
    }
  });
}
