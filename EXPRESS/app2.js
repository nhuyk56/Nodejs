var express = require('express');
var app = express();
var server = require("http").createServer(app);
server.listen(3000);
//bắt sự kiện
app.get("/", function(req, res)
{
	res.sendFile(__dirname + "/index.html");
});