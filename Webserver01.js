var http = require("http");
http.createServer(function(req, res){
res.writeHead(200, {"Content-Type":"text/plain"});//Truyền mã trang vd 404 là trang lỗi 
res.end("KhoaPham.vn");
}).listen(8888);