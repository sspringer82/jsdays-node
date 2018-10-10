// npm require
// const _ = require('lodash');
const _ = require('lodash');
const flat = _.flatten([1, [2, [3, [4]], 5]]);
console.log(flat);

// core modules
// const http = require('http');

const os = require('os');
console.log(os.release());

// own modules
// const myModule = require('./myModule');

const Calculator = require('./my-module');

const calc = new Calculator();
console.log(calc.add(1, 1));

const name = 'Klaus';
console.log('Hello ', name);
