$(function(){
	$(".md-tab").click(function(){
		$(this).siblings().removeClass("tabcheck");
		$(this).addClass("tabcheck");
	})
})