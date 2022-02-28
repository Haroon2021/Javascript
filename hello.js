// const sayHello = (name) => {
//   return `Hello ${name}`;
// };

// console.log(sayHello("Sarah"));

// const getNumberSign = (a) => {
//   if (a === 0) {
//     return 'zero';
//   } else if (Math.abs(a) === a) {
//     return 'positive';
//   } else {
//     return 'negative';
//   }
// }

// console.log(getNumberSign(3));
// console.log(getNumberSign(0));
// console.log(getNumberSign(-5));

const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidLength('1234235345'));
console.log(isValidLength('00'));
console.log(isValidLength('0011223344'));