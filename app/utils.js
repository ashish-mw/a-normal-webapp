// const add = (n1, n2) => {
//   return n1 + n2;
// }

export const add = (n1, n2) => n1 + n2
export const subtract = (n1, n2) => n1 - n2

export function divide(n1, n2) {
  return n1/n2;
}

export default {
  add,
  subtract: subtract,
  divide: divide
}

