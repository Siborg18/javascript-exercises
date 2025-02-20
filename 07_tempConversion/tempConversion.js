const convertToCelsius = function(fahrenheit) {
  let conversion = (fahrenheit - 32) / 1.8;
  if (conversion % 1 == 0)
  {
    return conversion;
  }
  else {
    output = Number.parseFloat(conversion).toFixed(1);
    return Number(output);
  }
};

const convertToFahrenheit = function(celsius) {
  let conversion = (celsius * 1.8) + 32;
  if (conversion % 1 == 0)
    {
      return conversion;
    }
    else {
      output =  Number.parseFloat(conversion).toFixed(1);
      return Number(output);
    }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
