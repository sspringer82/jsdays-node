const render = require('./view');
const model = require('./model');

module.exports = async (req, res) => {
  try {
    const data = await model.getItems();
    res.send(render(data));
  } catch (e) {
    res.sendStatus(500);
  }
};
