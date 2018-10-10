const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const todoController = require('./todo/controller');

const todoRouter = require('./todo');

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' },
);

app.use(morgan('combined', { stream: accessLogStream }));

app.use((req, res, next) => {
  console.log('I am your middleware');
  next();
});

//app.use('/todo', todoRouter);

app.get('/', todoController);

app.listen(8080, () => console.log('I am listening!'));
