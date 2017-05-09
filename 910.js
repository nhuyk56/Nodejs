var fs = require('fs');
//có khả năng đọc file trên server
var noidung = fs.readFileSync(__dirname + "/Data.txt");
console.log(noidung);
console.log(noidung.toString());