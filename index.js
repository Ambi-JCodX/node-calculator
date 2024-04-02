const rs = require('readline-sync');
const arrOperators = ['+', '-', '*', '/'];

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
        console.log('Division by zero is not allowed');
      }
    default:
      return 'Invalid Operation';
  };
};

const getOperation = (limit) => {
  return rs.question('What operation would you like to perform? ', {
      limit : limit,
      limitMessage:'This is not a valid operation!',
    });
};

const giveNum = (order, isDivision = false) => {
  const num = rs.questionInt(`Please enter the ${order} number: `, {
      limitMessage: 'This is not a number!'
    });
    if (order === 'second' && isDivision && num === 0) {
      return giveNum(order, isDivision);
    }
    
    return num;
};

const calculator = (opList) => {
  const operator = getOperation(opList);
  const [firstNum, secondNum] = ['first','second'].map((item) => {
    if (operator === '/' && item === 'second') {
      return giveNum(item, true);
    } else {
      return giveNum(item);
    }
  });
  let result = calculate(firstNum, secondNum, operator);
  console.log(`The result is: ${result}`);
};

calculator(arrOperators);