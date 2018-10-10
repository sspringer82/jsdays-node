const render = require('./view');
const data = require('./model');

module.exports = (req, res) => {
  res.send(render(data));
};
