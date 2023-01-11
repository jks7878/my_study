const http = require('http')
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let url = req.url;
  if(url == '/') {
    url = '/index.html';
  }
  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + url));
});

server.listen(port, hostname, () => {
  console.log(`Server runnig at ${hostname}:${port}/`);
});
