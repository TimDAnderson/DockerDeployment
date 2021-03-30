//random generation
module.exports.generateInbetweenSync = (max) => {
  return Math.ceil(Math.random() * max);
};

module.exports.threeValProb = (num1, num2) => {
  var random = Math.random();
  if (random <= num1) {
    return 0;
  } else if (random <= num2) {
    return 1;
  } else {
    return 2;
  }
};

module.exports.twoValProb = (num1) => {
  var random = Math.random();
  if (random <= num1) {
    return 0;
  } else {
    return 1;
  }
};