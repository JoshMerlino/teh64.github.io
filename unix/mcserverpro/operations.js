var operation = {
	convertRAM: function(r){
		return r*1000 + r*24
	},
	genorate: function(){
		var ds = {
			ip:"",
			ram:operation.convertRAM(2),
			maxplayers:100,
			launcher:"craftbukkit",
			
		}
		console.log(ds)
	}
}