module.exports = data =>
  `<ul>${data.map(todo => `<li>${todo.title}</li>`).join('')}</ul>`;
