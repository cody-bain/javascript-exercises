const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  array = array.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0);
  return array;
};

const multiply = function (array) {
  array = array.reduce((total, currentNum) => {
    return total * currentNum;
  });
  return array;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
