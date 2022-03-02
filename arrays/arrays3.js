// const numbers = [1, 2, 3];

// const squaredNumbers = numbers.map(num => {
//   return num * num;
// });

// console.log(squaredNumbers);

// squaredNumbers value is [1, 4, 9]

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = names.map(name =>{
    return `Hi ${name} ! 50% off our best candies for you today!`;
});

console.log(generateMessages);


// Alt solution


// const generateMessages = (names) => {
//     return names.map(name => {
//       return `Hi ${name}! 50% off our best candies for you today!`;
//     });
//   }

//   const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

//   console.log(generateMessages(names));