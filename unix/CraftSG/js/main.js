var ping = {};

$(function(){
	
	$("[ping]").each(function(){
		var d = 58//$(this).height();
		$(this).html('<svg class="spinner" width="'+d+'px" height="'+d+'px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>');
	})
	
	$.getJSON("https://api.minetools.eu/ping/psg.biz.tm/25565", function(json){
        ping = json;
		$("*").filter("[ping]").each(function(){
			var a = $(this).attr("ping");
			$(this).html(eval("ping." + a));
		});
    });
	
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