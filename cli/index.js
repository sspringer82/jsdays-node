const question = require('./question');
const getNumber = require('./util');
const rl = require('./rl');

// console.log(process.argv);

if (process.argv.indexOf('-v') > -1) {
  console.log('Version 1.0');
}

// question(getNumber(), getNumber())
//   .then(() => console.log('yes'))
//   .catch(() => console.log('nope!'))
//   .finally(() => rl.close());

(async () => {
  try {
    for (let i = 0; i < 4; i++) {
      const result = await question(getNumber(), getNumber());
      if (result) {
        console.log('yes');
      } else {
        console.log('no');
      }
    }
  } catch (e) {
    console.error('you fool', e);
  }
  rl.close();
})();
