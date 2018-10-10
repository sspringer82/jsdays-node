const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

fs.appendFile('input.txt', 'bye bye', err => {
  if (err) {
    console.error(err);
  }
  console.log('done');
});
