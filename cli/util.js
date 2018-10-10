module.exports = function getNumber(l) {
  let multiplicator;

  switch (l) {
    case 1:
      multiplicator = 10;
      break;
    case 2:
      multiplicator = 100;
      break;
    case 3:
      multiplicator = 1000;
      break;
  }

  return Math.floor(Math.random() * multiplicator);
};
