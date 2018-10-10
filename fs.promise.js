const fs = require('fs').promises;

fs.readFile('input.txt', 'utf-8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

(async () => {
  try {
    const data = await fs.readFile('input.txt', 'utf-8');
    console.log('async: ', data);
  } catch (e) {
    console.error(e);
  }
})();
