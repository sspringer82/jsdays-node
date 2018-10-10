const question = require('./question');
const getNumber = require('./util');
const rl = require('./rl');

const program = require('commander');

program
  .option('-l, --level [type]', 'Level of difficulty', v => parseInt(v, 10), 1)
  .parse(process.argv);

(async () => {
  try {
    for (let i = 0; i < 4; i++) {
      const result = await question(
        getNumber(program.level),
        getNumber(program.level),
      );
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
