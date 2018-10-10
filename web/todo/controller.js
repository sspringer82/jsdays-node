const render = require('./view');
const model = require('./model');

module.exports = async (req, res) => {
  try {
    const data = await model.getItems();
    res.send(await render(data));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
