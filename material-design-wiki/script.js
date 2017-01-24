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
		$(".navmenu.option").removeClass("sel");
		$(this).addClass("sel")
		
		var t = $(this).offset().top + 172
		
		$(this).animate({
			color:"#FFF"
		}, 200).siblings().not(".tit").animate({
			color: "#000"
		}, 200)
		
		$(".navmenu.option.back").animate({
			top:t
		}, 200);
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