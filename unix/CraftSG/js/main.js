var ping = {};
function application(){
	window.open("https://goo.gl/forms/wbRLBnSBst8XIzy93");
}

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
		
		$(".application").fadeOut(200);
	})
	
	$(".explorer, .navbar .menu, .application, .staffapply").click(function(e){
		e.stopPropagation();
	});
	
	$(".card.info.staff").height($(".card.info.staff").height() + 48);
	
	$("hr").each(function(){
		$(this).css({
			left:$(this).parent().offset().left
		})
	})
	
	$(".staffcontact").click(function(){
		var mail = "mailto:" + $(this).attr("contact");
		window.location.href = mail;
	})
	
	$(".explorer").children("option").click(function(){
		var c = $(this).text().toLowerCase()
		
		if(c == "home") {
			loc = "http://csg.biz.tm";
		} else if(c == "forum"){
			loc = "http://csg.biz.tm/forum";
		} else if(c == "store"){
			loc = "http://csg.biz.tm/donate";
		} else if(c == "vote"){
			loc = "http://csg.biz.tm/vote";
		}
		
		window.location.href = loc;
	})
	
})