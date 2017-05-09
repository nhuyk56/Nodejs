//Ảnh, nhạc đều có thể chuyển thành BF
var buffer = new Buffer("hello","utf-8");
//có thể lưu vào database
console.log(buffer);


//ngược lại
console.log(buffer.toString());
console.log(buffer.toJSON());