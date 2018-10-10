import fs from 'fs';
// import { Calculator } from './child-module';
import { Calculator, PI } from './child-module';
import _ from 'lodash';

fs.readFile('input.txt', 'utf-8', (err, d) => console.log(d));

const calc = new Calculator();
console.log(calc.add(1, PI));
