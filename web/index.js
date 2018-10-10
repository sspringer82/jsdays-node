const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

// npm install morgan

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' },
);
app.use(morgan('combined', { stream: accessLogStream }));

app.use((req, res, next) => {
  console.log('I am your middleware');
  next();
});

app.get('/', (req, res) => res.send('Hello world'));

app.listen(8080, () => console.log('I am listening!'));
