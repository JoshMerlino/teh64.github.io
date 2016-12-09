var drawable = function(s){
	var c = document.querySelector(s);
	var ctx = c.getContext("2d");
	ctx.moveTo(0,0);
	return ctx;
}
var l = new drawable("canvas#l");
var d = new drawable("canvas#d");
function termDef(){
	$("div.wipe").animate({
		height: "100%"
	},500,function(){
		$(this).css({
			bottom:"0px"
		});
		$(this).animate({
			height: "0%",
			top: "100%"
		},500, function(){
			$(this).css({
				top: "0%"
			});
		});
		var n = $("input#term").val().toStanderedCase();
		$("div.before").remove();
		$("div.after").show()
		var def = eval("vocab." + n.toUpperCase());
			
		l.font = "30px Calibri";
		l.fillStyle = "black";
		l.fillText(n,10,170);
		l.font = "14px Calibri";
		l.fillText(def,10,205);

		d.font = "30px Calibri";
		d.fillStyle = "white";
		d.fillText(n,10,170);
		d.font = "14px Calibri";
		d.fillText(def,10,205);
		
		canvasImg(n)
	});
}
String.prototype.toStanderedCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
function canvasImg(tag){
	var image_src;
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: tag,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);
            var url = data.items[rnd]['media']['m'].replace("_m", "_b");
			var img = new Image();
			img.onload = function() {
				l.drawImage(img, 300, 0);
				d.drawImage(img, 300, 0);
			};
		img.src = url;
	});
}