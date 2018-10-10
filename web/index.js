const http = require('http');

const server = http.createServer((req, res) => {
  // res.write("what's up?");
  res.end('Hello World');
});

server.listen(8080, () => {
  console.log('server is listening');
});
