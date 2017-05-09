function tinhtong(a, b){
	return a + b; 
}
var x = tinhtong(5, 3);
console.log(tinhtong(5, 3));
/////////////////////////
function hello()
{
	console.log("Xin chao!");
}


function goiHam(fn){
	fn();
}

goiHam(hello);
//////////////
var tong = function(){
	console.log("Lap Trinh");
}
tong();