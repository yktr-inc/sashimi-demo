const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('src/static/index.html');

http.createServer( (req, res) => {
  console.log(process.cwd());
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(8080);
