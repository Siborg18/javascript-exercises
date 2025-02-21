const add = function(numA, numB) {
  return numA + numB;
	
};

const subtract = function(numA, numB) {
  return numA - numB;
	
};

const sum = function(arrayIn) {
  if (arrayIn.length == 0) {
    return 0;
  }
  if (arrayIn.length == 1)
  {
    return arrayIn[0];
  }
  else {
    let sum = 0;
    for (let i = 0; i < arrayIn.length; i++)
    {
      sum += arrayIn[i];
    }
    return sum;
  };
	
};

const multiply = function(arrayIn) {
  let sum = 1;
    for (let i = 0; i < arrayIn.length; i++)
    {
      sum = sum * arrayIn[i];
    }
    return sum;
};

const power = function(numA, numB) {
  return numA ** numB;
	
};

function createArray(min, max) {
  let arrayOuput = [];
  for (let i = min; i <= max; i++) {
    arrayOuput.push(i);
  }
  return arrayOuput;
};

const factorial = function(numIn) {
  if (numIn == 0 || numIn == 1)
  {
    return 1;
  }
  else {
    let min = 1;
    let max = numIn;
    let factorialArray = createArray(min, max);
    return multiply(factorialArray);
  }
	
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
