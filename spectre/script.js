Material.init()
var loadingtime = performance.now()*8
$(function(){
	
	//ctxOff()
	
	var loop = setInterval(function(){
		
		$("[live='time']").each(function(){
			var m = new Date().getHours();
			if(m > 12){
				
				var x = new Date().getMinutes()
				if(x < 10){
					x = "0" + x
				}
				
				m = m-12 + ":" + x + " PM"
			} else {
				
				var x = new Date().getMinutes()
				if(x < 10){
					x = "0" + x
				}
				
				m = m + ":" + x + " AM"
			}
			$(this).text(m);
		})
		
	},50)
	
	$(".navdrawer").click(function(e){
		e.stopPropagation()
		
		$(".banner.left").animate({
			left:"0px"
		},200).click(function(e){
			e.stopPropagation()
		})
	})
	
	$("body").click(function(){
		$(".banner.left").animate({
			left:"-300px"
		},200)
		$(".more-menu").children().fadeOut(200).parent().css({
			animation:"circleinmenuout .3s ease-in"
		}).fadeOut(300)
	})
	
	$(".progress").each(function(){
		var p = $(this)
		setTimeout(function(){
			p.fadeOut(200)
		}, loadingtime)
	})
	
	$(".ti .menu").click(function(e){
		e.stopPropagation();
		$(".more-menu").show().css({
			animation:"circleinmenu .3s ease-in"
		}).children().fadeIn(200).each(function(){
			Waves.attachColor(this,"#212121")
		})
	})
	
})
function ctxOff(){
	$("*").contextmenu(function(e){
		e.preventDefault();
	})
}