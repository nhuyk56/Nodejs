var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	res.writeHead(200, {"Conten-Type":"application/json"});
	var obj = {
		ho :"Pham",
		ten :"Khoa",
		namsinh:1997
	};
	res.end(JSON.stringify(obj))//chuyển obj sang json
}).listen(7777);