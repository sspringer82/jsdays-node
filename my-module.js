class Calculator {
  add(a, b) {
    return a + b;
  }
}

module.exports = Calculator;

/*
module.exports = (a, b) => a + b;

const add = require('./my-module');

module.exports = {
  add(a, b) {return a + b}
}

const calc = require('./my-module');
calc.add(1,2);

const {add} = require('./my-module');
*/
