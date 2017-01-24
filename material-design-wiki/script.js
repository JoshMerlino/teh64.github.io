$(document).ready(function(){
	
	$(".material-icons.menu").click(function(e){
		e.stopPropagation();
		$(".banner.sidebar").animate({
			left: "0px"
		}, 200).noclick(function(){
			$(".banner.sidebar").animate({
				left: "-360px"
			}, 200)
		})
	})
	$(".navmenu.option").click(function(){
		if(!$(this).hasClass("sel")){
			$(".navmenu.option").removeClass("sel");
			$(this).addClass("sel")
			
			var w = $(this).width() - 16
			$(this).animate({
				borderWidth:"16px",
				width:w
			}, 200).siblings().animate({
				borderWidth:"0px",
				width:w + 16
			}, 200)
		}
		var cn = $(this).attr("class").split(" ")[2]
		$(".content").css({
			display: "none"
		})
		$(".content." + cn).css({
			display: "block" 
		})
		$(".content-name").text($(this).text().toProperCase())
	})
});