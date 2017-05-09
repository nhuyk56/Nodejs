var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('hello Node.js\n');
}).listen(1000, "127.0.0.1");
console.log('Tôi đang test');