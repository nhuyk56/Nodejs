function  KhoaHoc(ten, hocphi) {
	this.Ten = ten;
	this.HocPhi = hocphi;
}

KhoaHoc.prototype.mota = function(){
	console.log("Hello " + this.Ten + " " + this.HocPhi);
}

var nodejs = new KhoaHoc("Lap trinh Nodejs", 800000);
nodejs.mota();