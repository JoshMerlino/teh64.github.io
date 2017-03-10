var sys = {
	poweroff: function(){
		$(".progress").fadeIn(200)
		setTimeout(function(){
			$(".poweroff").animate({
				width:"100%",
				left:"0px"
			})
		},loadingtime*4)
	},
	info: function(){
		return "Printer Model : Spectre 3"
	}
}