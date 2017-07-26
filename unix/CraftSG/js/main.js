$(function(){
	
	$(".navbar .menu").click(function(){
		$(".explorer").animate({
			opacity:"1",
			left:"0px"
		},200);
	})
	
	$("body").click(function(){
		$(".explorer").animate({
			opacity:"0",
			left:"-440px"
		},200);
	})
	
	$(".explorer, .navbar .menu").click(function(e){
		e.stopPropagation();
	});
	
	$(".explorer").children("option").click(function(){
		window.location.href = $(this).attr("href");
	});
	
})