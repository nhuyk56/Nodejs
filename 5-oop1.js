var person = {
	ho : "Pham",
	ten : "Khoa",
	chaomung : function() {
			console.log("Chao Ban " + this.ho + " " + this.ten);
	}
}
//Persion là một biến gồm 2 biến và 1 hành  động giống với class
person.chaomung();
console.log(person["ten"]);