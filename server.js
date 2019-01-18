const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('src/static/index.html');

http.createServer( function(req, res) {
  console.log("Sashimi app is running !");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(index);
  res.end();
}).listen(8081);
