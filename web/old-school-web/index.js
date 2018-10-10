const http = require('http');
const { readFile } = require('fs').promises;

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case '/hello/world':
      try {
        const html = await readFile('index.html');
        res.end(html);
      } catch (e) {
        res.end('Whoops!');
        console.error(e);
      }
      break;
    case '/':
    default:
      res.end('Plain Text');
      break;
  }
});

server.listen(8080, () => {
  console.log('server is listening');
});

// server.on('listening', () => {console.log('listening')});
