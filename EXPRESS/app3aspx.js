var express = require('express');
var app = express();
var server = require("http").createServer(app);
server.listen(3000);
//bắt sự kiện
app.get("/", function(req, res)
{
	res.send("<font color=red> HELLO WORLD </fomt>");
});

app.get("/anime", function(req, res)
{
	res.send("I am a OTAKU");
});