// const add = (n1, n2) => {
//   return n1 + n2;
// }

const add = (n1, n2) => n1 + n2
const subtract = (n1, n2) => n1 - n2

function divide(n1, n2) {
  return n1/n2;
}

const myExport = {
  add,
  subtract: subtract,
  divide: divide
}

module.exports = myExport