// console.log(process.argv);

if (process.argv.indexOf('-v') > -1) {
  console.log('Version 1.0');
}

function getNumber() {
  return Math.floor(Math.random() * 10);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const n1 = getNumber();
const n2 = getNumber();

rl.question(`what is ${n1} + ${n2}? `, answer => {
  if (parseInt(answer, 10) === n1 + n2) {
    console.log('🎉🏆');
  } else {
    console.log('💩');
  }
  rl.close();
});
