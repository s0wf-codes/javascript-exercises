const convertToCelsius = function(num) {
  let celciusTemp = (num - 32) * (5/9);
  return Math.round((celciusTemp) * 10) / 10;
};

const convertToFahrenheit = function(num) {
  let fahTemp = (num * (9/5)) + 32;
  return Math.round((fahTemp) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
