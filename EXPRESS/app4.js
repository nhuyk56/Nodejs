///truyền tham số cho thanh địa chỉ
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

app.get("/tinhtong/:so1/:so2", function(req, res){
	//bắt số 1 và 2
	//:so1 là biến
	var n = req.params.so1;
	n = parseInt(n);
	var m = req.params.so2;
	m = parseInt(m);
	var tong = n + m
	res.send("<h1>Kết quả = "+ tong + "<h1>");

} )