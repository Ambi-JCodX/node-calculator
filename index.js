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
        return num1 / num2;
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
      limit: /[0-9]/,
      limitMessage: 'This is not a number!'
    });
    if (order === 'second' && isDivision && num === 0) {
      console.log(`The division with 0 won\'t work!`);
      return giveNum(order, isDivision);
    }
    
    return +num; /**
    * ? +num is exactly the same as Number(num),
    * ! Even though we don't really need it because we are using the ".questionInt" which accept only integer as a input.
    */ 
};

const calculator = (opList) => {
  const operator = getOperation(opList);
  const [firstNum, secondNum] = ['first', 'second'].map(item => {
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