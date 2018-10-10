const express = require('express');

const app = express();

// npm install morgan

app.use((req, res, next) => {
  console.log('I am your middleware');
  next();
});

app.get('/', (req, res) => res.send('Hello world'));

app.listen(8080, () => console.log('I am listening!'));
