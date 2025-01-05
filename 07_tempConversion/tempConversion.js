const convertToCelsius = function (tempFahrenheit) {
  const tempCelsius = (tempFahrenheit - 32) / (9 / 5);
  return Math.round(tempCelsius * 10) / 10;
};

const convertToFahrenheit = function (tempCelsius) {
  const tempFahrenheit = tempCelsius * (9 / 5) + 32;
  return Math.round(tempFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
