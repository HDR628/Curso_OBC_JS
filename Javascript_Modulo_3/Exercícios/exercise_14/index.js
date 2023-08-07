function mediaSimples(...numbers) {
  let sumNumber = numbers.reduce((acc, num) => acc += num, 0)
  return sumNumber / numbers.length
}

// console.log(mediaSimples(4, 3, 3, 4))
