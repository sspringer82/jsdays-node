const fs = require('fs').promises;

fs.readFile('input.txt', 'utf-8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

(async () => {
  try {
    const data = await fs.readFile('input.txt', 'utf-8');
    console.log('async: ', data);
    await fs.writeFile('input.txt', 'noch mehr bla bla');
    const data2 = await fs.readFile('input.txt', 'utf-8');
    console.log('async: ', data2);
  } catch (e) {
    console.error(e);
  }
})();
