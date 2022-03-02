const numbers = [1, 2, 3];

const squaredNumbers = numbers.map(num => {
  return num * num;
});

console.log(squaredNumbers); 

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla',discount: 60 }
  ];

const nameAndDiscountMessages = namesAndDiscounts.map(abc => {
    return `Hi ${abc.name}! ${abc.discount}% off our best candies for you today!`;
});

console.log(nameAndDiscountMessages);