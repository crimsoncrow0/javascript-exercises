const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
  let total = 0;
	for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
	for (let i = 0; i < array.length; i++) {
    total *= array[i]
  }
  return total;
};

const power = function(x, power) {
  let num = x;
	for (let i = 1; i < power; i++) {
    num *= x
  }
  return num;
};

const factorial = function(factorial) {
  let total = 1;
	for (let i = factorial; i > 0; i-- ) {
    total *= i;
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
