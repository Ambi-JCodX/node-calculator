var rs = require('readline-sync');

let num1 = 0;
let num2 = 0;


function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return 'Division by zero is not allowed';
      }
    default:
      return 'Invalid Operation';
  };
};

while (true) {
 let operator = rs.question('What operation would you like to perform? ');
  if (operator === '+'
  || operator === '-'
  || operator === '*'
  || operator === '/') {

    do {
      num1 = rs.question('Please enter the first number: ');
      if (isNaN(num1)) {
        console.log('This is not a number');
      };
    } while (isNaN(num1));
    do {
      num2 = rs.question('Please enter the second number: ');
      if (isNaN(num2)) {
        console.log('This is not a number');
      };
    } while (isNaN(num2));

    let result = calculate(Number(num1), Number(num2), operator);
    console.log(`The result is: ${result}`);
    
    break;
  } else {
    console.log('This is not a valid operation');
  };
};