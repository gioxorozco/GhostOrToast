var http = require('http');
var fs = require('fs');
var THREE = require('three');

http.createServer(function (req, res) {
fs.readFile('index.html', function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
  });
}).listen(8080);