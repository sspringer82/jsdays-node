const rl = require('./rl');

module.exports = function question(a, b) {
  return new Promise((resolve, reject) => {
    rl.question(`what is ${a} + ${b}? `, answer => {
      if (parseInt(answer, 10) === a + b) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
