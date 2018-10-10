const fs = require('fs').promises;

module.exports = async data => {
  const template = await fs.readFile('./todo/list.html', 'utf-8');
  return template.replace(
    '//list//',
    `<ul>${data.map(todo => `<li>${todo.title}</li>`).join('')}</ul>`,
  );
};
