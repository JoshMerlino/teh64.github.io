var materialtoggle = 1;
function toggleMaterial(){
	if(materialtoggle == 1){
		materialtoggle = 0;
		$("head > link#material").remove();
	} else if(materialtoggle == 0){
		materialtoggle = 1;
		$("head").append('<link rel="stylesheet" type="text/css" href="materialdesign.css" id="material">')
	}
}