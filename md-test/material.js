(function($) {
	$.fn.matches = function(t){ return this.filter(function(i){return $(this).text() === t})}
	
	var mousedown = false;
	
	$(document).mousedown(function(){
		mousedown = true
	})
	
	$(document).mouseup(function(){
		mousedown = false
	})
	
	$.mousedown = function(){
		return mousedown
	}
}($));

function GETMDYEARPICKERVALUE(p){
	p = $(p);
	var v = p.parent().siblings(".md-content").children(".md-selected").text();
	p.parent().parent().siblings("input").attr("value", v)
}
function GETMDCOLORPICKERVALUE(p){
	var e = $(p).parent().siblings(".md-content").children("[checked]").attr("color")
	switch(e){case"red":e="#f7412c";break;case"pink":e="#eb1460";break;case"purple":e="#9c1ab1";break;case"deepPurple":e="#6633b9";break;case"indigo":e="#3e50b4";break;case"blue":e="#2095f2";break;case"lightBlue":e="#02a8f4";break;case"cyan":e="#01bbd4";break;case"teal":e="#019587";break;case"green":e="#4baf4f";break;case"lightGreen":e="#8baf4f";break;case"lime":e="#ccdb38";break;case"yellow":e="#efec16";break;case"amber":e="#fec107";break;case"orange":e="#ff9800";break;case"deepOrange":e="#ff5500";break;case"brown":e="#7a5545";break;case"grey":e="#b9b9b9";break;case"steel":e="#607d8d";break;}
	$(p).parent().parent().siblings("input").attr("value", e)
	$(p).parent().parent().siblings(".md-coloropen").css("background-color", e)
}
function GETMDTIMEPICKERVALUE(p){
	p = $(p).parent();
	var t = p.siblings(".md-bar").children("div").children(".md-hour").text() + ":" + p.siblings(".md-bar").children("div").children(".md-minute").text()
	var tm = p.siblings(".md-bar").children(".md-timemode").children(".md-selected").text();
	if(tm == "AM"){
		tm = "a.m."
	} else {
		tm = "p.m."
	}	
	p.parent().siblings("input").attr("value", t + " " + tm)
}
Material = {
	init: function(o){
		
	},
	notify: function(a,b){
		
		if(!b){
			b = 5000
		}
		
		Snarl.addNotification({
			title: a,
			timeout: b
		});
	},
	theme: function(o){
		
		o = $.extend({
			primary:"#AAA",
			secondary:"#000"
		}, o)
		
		var p = Material.getColor(o.primary);
		var s = Material.getColor(o.secondary);
		
		this.primary = p
		this.secondary = s
		
	},
	attachTheme: function(e,t){

		var p = t.primary;
		var s = t.secondary;
		
		var c = Material.color.textcolor(p);
		
		var w

		if(c == "#FFF"){
			w = "waves-fab-light"
		} else {
			w = "waves-fab-dark"
		}
		
		
		if(e.is("button:not([md-fab])")){
			e.css({
				backgroundColor:p,
				color:c
			});
			
			Waves.attach(e, w)
		} else {
			Waves.attach(e, ["waves-circle", w])
		}
		
	},
	appBar: function(o){
		var c = o.color;
		c = Material.getColor(c);
		
		var t = o.title
		
		var cb = o.menuAction
		
		var q = $("body").html()
		
		var glml = 8
		var glmm = ""
		
		if(o.menu){
			glml = 72;
			glmm = "<i class='material-icons md-menu'>&#xE5D2;</i>"
		}
		
		$("body").append("<div class='md-bodyContent md-64'>" + q + "</div>")
		$("body").children().not(".md-bodyContent").remove();
		$("body").append("<div class='md-appBar'>" + glmm + "<h1 class='md-title' style='left:" + glml + "px;'>" + t + "</h1><div class='md-more-buttons'></div></div>");
		var ab = $(".md-appBar");
		
		if(o.graded){
			ab.addClass("md-graded");
			$(".md-bodyContent").removeClass("md-64").addClass("md-86")
		}
		
		if(o.menu){
			$(".md-appBar .md-menu").click(cb)
		}
		
		ab.css({
			backgroundColor:c
		});
		
		
		if(o.addButtons){
			
			for(var i = 0; i < o.addButtons.length; i++){
				var h = o.addButtons[i][0];
				var g = o.addButtons[i][1];
				
				var r = "md-" + Math.random().toString().split(".")[1]
				
				var mb = "<i class='material-icons " + r + "'>" + h + "</i>"
				$(".md-more-buttons").append(mb)
				$("." + r).click(g)
			}
			
		}
		
	},
	getColor: function(p){
		var color = {red:{D50:"#ffebee",D100:"#ffcdd2",D200:"#ef9a9a",D300:"#e57373",D400:"#ef5350",D500:"#f44336",D600:"#e53935",D700:"#d32f2f",D800:"#c62828",D900:"#b71c1c",Da100:"#ff8a80",Da200:"#ff5252",Da400:"#ff1744",Da700:"#d50000"},pink:{D50:"#fce4ec",D100:"#f8bbd0",D200:"#f48fb1",D300:"#f06292",D400:"#ec407a",D500:"#e91e63",D600:"#d81b60",D700:"#c2185b",D800:"#ad1457",D900:"#880e4f",Da100:"#ff80ab",Da200:"#ff4081",Da400:"#f50057",Da700:"#c51162"},purple:{D50:"#f3e5f5",D100:"#e1bee7",D200:"#ce93d8",D300:"#ba68c8",D400:"#ab47bc",D500:"#9c27b0",D600:"#8e24aa",D700:"#7b1fa2",D800:"#6a1b9a",D900:"#4a148c",Da100:"#ea80fc",Da200:"#e040fb",Da400:"#d500f9",Da700:"#aa00ff"},deeppurple:{D50:"#ede7f6",D100:"#d1c4e9",D200:"#b39ddb",D300:"#9575cd",D400:"#7e57c2",D500:"#673ab7",D600:"#5e35b1",D700:"#512da8",D800:"#4527a0",D900:"#311b92",Da100:"#b388ff",Da200:"#7c4dff",Da400:"#651fff",Da700:"#6200ea"},indigo:{D50:"#e8eaf6",D100:"#c5cae9",D200:"#9fa8da",D300:"#7986cb",D400:"#5c6bc0",D500:"#3f51b5",D600:"#3949ab",D700:"#303f9f",D800:"#283593",D900:"#1a237e",Da100:"#8c9eff",Da200:"#536dfe",Da400:"#3d5afe",Da700:"#304ffe"},blue:{D50:"#e3f2fd",D100:"#bbdefb",D200:"#90caf9",D300:"#64b5f6",D400:"#42a5f5",D500:"#2196f3",D600:"#1e88e5",D700:"#1976d2",D800:"#1565c0",D900:"#0d47a1",Da100:"#82b1ff",Da200:"#448aff",Da400:"#2979ff",Da700:"#2962ff"},lightblue:{D50:"#e1f5fe",D100:"#b3e5fc",D200:"#81d4fa",D300:"#4fc3f7",D400:"#29b6f6",D500:"#03a9f4",D600:"#039be5",D700:"#0288d1",D800:"#0277bd",D900:"#01579b",Da100:"#80d8ff",Da200:"#40c4ff",Da400:"#00b0ff",Da700:"#0091ea"},cyan:{D50:"#e0f7fa",D100:"#b2ebf2",D200:"#80deea",D300:"#4dd0e1",D400:"#26c6da",D500:"#00bcd4",D600:"#00acc1",D700:"#0097a7",D800:"#00838f",D900:"#006064",Da100:"#84ffff",Da200:"#18ffff",Da400:"#00e5ff",Da700:"#00b8d4"},teal:{D50:"#e0f2f1",D100:"#b2dfdb",D200:"#80cbc4",D300:"#4db6ac",D400:"#26a69a",D500:"#009688",D600:"#00897b",D700:"#00796b",D800:"#00695c",D900:"#004d40",Da100:"#a7ffeb",Da200:"#64ffda",Da400:"#1de9b6",Da700:"#00bfa5"},green:{D50:"#e8f5e9",D100:"#c8e6c9",D200:"#a5d6a7",D300:"#81c784",D400:"#66bb6a",D500:"#4caf50",D600:"#43a047",D700:"#388e3c",D800:"#2e7d32",D900:"#1b5e20",Da100:"#b9f6ca",Da200:"#69f0ae",Da400:"#00e676",Da700:"#00c853"},lightgreen:{D50:"#f1f8e9",D100:"#dcedc8",D200:"#c5e1a5",D300:"#aed581",D400:"#9ccc65",D500:"#8bc34a",D600:"#7cb342",D700:"#689f38",D800:"#558b2f",D900:"#33691e",Da100:"#ccff90",Da200:"#b2ff59",Da400:"#76ff03",Da700:"#64dd17"},lime:{D50:"#f9fbe7",D100:"#f0f4c3",D200:"#e6ee9c",D300:"#dce775",D400:"#d4e157",D500:"#cddc39",D600:"#c0ca33",D700:"#afb42b",D800:"#9e9d24",D900:"#827717",Da100:"#f4ff81",Da200:"#eeff41",Da400:"#c6ff00",Da700:"#aeea00"},yellow:{D50:"#fffde7",D100:"#fff9c4",D200:"#fff59d",D300:"#fff176",D400:"#ffee58",D500:"#ffeb3b",D600:"#fdd835",D700:"#fbc02d",D800:"#f9a825",D900:"#f57f17",Da100:"#ffff8d",Da200:"#ffff00",Da400:"#ffea00",Da700:"#ffd600"},amber:{D50:"#fff8e1",D100:"#ffecb3",D200:"#ffe082",D300:"#ffd54f",D400:"#ffca28",D500:"#ffc107",D600:"#ffb300",D700:"#ffa000",D800:"#ff8f00",D900:"#ff6f00",Da100:"#ffe57f",Da200:"#ffd740",Da400:"#ffc400",Da700:"#ffab00"},orange:{D50:"#fff3e0",D100:"#ffe0b2",D200:"#ffcc80",D300:"#ffb74d",D400:"#ffa726",D500:"#ff9800",D600:"#fb8c00",D700:"#f57c00",D800:"#ef6c00",D900:"#e65100",Da100:"#ffd180",Da200:"#ffab40",Da400:"#ff9100",Da700:"#ff6d00"},deeporange:{D50:"#fbe9e7",D100:"#ffccbc",D200:"#ffab91",D300:"#ff8a65",D400:"#ff7043",D500:"#ff5722",D600:"#f4511e",D700:"#e64a19",D800:"#d84315",D900:"#bf360c",Da100:"#ff9e80",Da200:"#ff6e40",Da400:"#ff3d00",Da700:"#dd2c00"},brown:{D50:"#efebe9",D100:"#d7ccc8",D200:"#bcaaa4",D300:"#a1887f",D400:"#8d6e63",D500:"#795548",D600:"#6d4c41",D700:"#5d4037",D800:"#4e342e",D900:"#3e2723"},grey:{D50:"#fafafa",D100:"#f5f5f5",D200:"#eeeeee",D300:"#e0e0e0",D400:"#bdbdbd",D500:"#9e9e9e",D600:"#757575",D700:"#616161",D800:"#424242",D900:"#212121"},steel:{D50:"#eceff1",D100:"#cfd8dc",D200:"#b0bec5",D300:"#90a4ae",D400:"#78909c",D500:"#607d8b",D600:"#546e7a",D700:"#455a64",D800:"#37474f",D900:"#263238"}		}
	
		var d = p.split(":")[1]
		p = p.split(":")[0].toLowerCase()
		if(!d){
			d = "500"
		}
		d = "D" + d.toLowerCase()
		var q
		if(p.includes("#")){
			q = p
		} else {
			q = eval("color." + p + "." + d);
		}
		return q
	},
	dialog: function(o){
		switch(o.type.toLowerCase()){
			default: {
				var dvi = "<div class='md-popup md-alert'><div class='md-title'>" + o.title + "</div><div class='md-content'>" + o.msg + "</div><div class='md-options'><button md-flat color='steel' onclick='$(this).parent().parent().fadeOut(200, function(){$(this).remove()})'>OK</button></div></div>"
				
				$(".md-popup").remove()
				$("body").append(dvi)
				$(".md-popup").css({
					display:"none"
				}).fadeIn(200)
				break;
			}
		}
	},
	color:{
		textcolor: function(d){
			var r = Material.color.hexToR(d)
			var g = Material.color.hexToG(d)
			var b = Material.color.hexToB(d)
				
			var t = r*0.299 + g*0.594 + b*0.114;
			if(t.toString() == "NaN") {
				t = 0;
			}
			
			
			if(t > 186){
				return "rgba(0,0,0,0.539582)"
			} else {
				return "#FFF";
			}
		},
		hexToR: function(h) {return parseInt((Material.color.cutHex(h)).substring(0,2),16)},
		hexToG: function(h) {return parseInt((Material.color.cutHex(h)).substring(2,4),16)},
		hexToB: function(h) {return parseInt((Material.color.cutHex(h)).substring(4,6),16)},
		cutHex: function(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h},
		hexToRgbA: function(hex){
			var c;
			if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
				c= hex.substring(1).split('');
				if(c.length== 3){
					c= [c[0], c[0], c[1], c[1], c[2], c[2]];
				}
				c= '0x'+c.join('');
				return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.2)';
			}
			throw new Error('Bad Hex');
		}
	}
}

alert = function(m){
	Material.dialog({
		type:"alert",
		title:"This Page says:",
		msg:m
	})
}

!function(){
	var MATERIALCSS = ""
	addcss(MATERIALCSS);
	$(document).ready(function(){
		$("head").append('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">')
	})
	var color = {red:{D50:"#ffebee",D100:"#ffcdd2",D200:"#ef9a9a",D300:"#e57373",D400:"#ef5350",D500:"#f44336",D600:"#e53935",D700:"#d32f2f",D800:"#c62828",D900:"#b71c1c",Da100:"#ff8a80",Da200:"#ff5252",Da400:"#ff1744",Da700:"#d50000"},pink:{D50:"#fce4ec",D100:"#f8bbd0",D200:"#f48fb1",D300:"#f06292",D400:"#ec407a",D500:"#e91e63",D600:"#d81b60",D700:"#c2185b",D800:"#ad1457",D900:"#880e4f",Da100:"#ff80ab",Da200:"#ff4081",Da400:"#f50057",Da700:"#c51162"},purple:{D50:"#f3e5f5",D100:"#e1bee7",D200:"#ce93d8",D300:"#ba68c8",D400:"#ab47bc",D500:"#9c27b0",D600:"#8e24aa",D700:"#7b1fa2",D800:"#6a1b9a",D900:"#4a148c",Da100:"#ea80fc",Da200:"#e040fb",Da400:"#d500f9",Da700:"#aa00ff"},deeppurple:{D50:"#ede7f6",D100:"#d1c4e9",D200:"#b39ddb",D300:"#9575cd",D400:"#7e57c2",D500:"#673ab7",D600:"#5e35b1",D700:"#512da8",D800:"#4527a0",D900:"#311b92",Da100:"#b388ff",Da200:"#7c4dff",Da400:"#651fff",Da700:"#6200ea"},indigo:{D50:"#e8eaf6",D100:"#c5cae9",D200:"#9fa8da",D300:"#7986cb",D400:"#5c6bc0",D500:"#3f51b5",D600:"#3949ab",D700:"#303f9f",D800:"#283593",D900:"#1a237e",Da100:"#8c9eff",Da200:"#536dfe",Da400:"#3d5afe",Da700:"#304ffe"},blue:{D50:"#e3f2fd",D100:"#bbdefb",D200:"#90caf9",D300:"#64b5f6",D400:"#42a5f5",D500:"#2196f3",D600:"#1e88e5",D700:"#1976d2",D800:"#1565c0",D900:"#0d47a1",Da100:"#82b1ff",Da200:"#448aff",Da400:"#2979ff",Da700:"#2962ff"},lightblue:{D50:"#e1f5fe",D100:"#b3e5fc",D200:"#81d4fa",D300:"#4fc3f7",D400:"#29b6f6",D500:"#03a9f4",D600:"#039be5",D700:"#0288d1",D800:"#0277bd",D900:"#01579b",Da100:"#80d8ff",Da200:"#40c4ff",Da400:"#00b0ff",Da700:"#0091ea"},cyan:{D50:"#e0f7fa",D100:"#b2ebf2",D200:"#80deea",D300:"#4dd0e1",D400:"#26c6da",D500:"#00bcd4",D600:"#00acc1",D700:"#0097a7",D800:"#00838f",D900:"#006064",Da100:"#84ffff",Da200:"#18ffff",Da400:"#00e5ff",Da700:"#00b8d4"},teal:{D50:"#e0f2f1",D100:"#b2dfdb",D200:"#80cbc4",D300:"#4db6ac",D400:"#26a69a",D500:"#009688",D600:"#00897b",D700:"#00796b",D800:"#00695c",D900:"#004d40",Da100:"#a7ffeb",Da200:"#64ffda",Da400:"#1de9b6",Da700:"#00bfa5"},green:{D50:"#e8f5e9",D100:"#c8e6c9",D200:"#a5d6a7",D300:"#81c784",D400:"#66bb6a",D500:"#4caf50",D600:"#43a047",D700:"#388e3c",D800:"#2e7d32",D900:"#1b5e20",Da100:"#b9f6ca",Da200:"#69f0ae",Da400:"#00e676",Da700:"#00c853"},lightgreen:{D50:"#f1f8e9",D100:"#dcedc8",D200:"#c5e1a5",D300:"#aed581",D400:"#9ccc65",D500:"#8bc34a",D600:"#7cb342",D700:"#689f38",D800:"#558b2f",D900:"#33691e",Da100:"#ccff90",Da200:"#b2ff59",Da400:"#76ff03",Da700:"#64dd17"},lime:{D50:"#f9fbe7",D100:"#f0f4c3",D200:"#e6ee9c",D300:"#dce775",D400:"#d4e157",D500:"#cddc39",D600:"#c0ca33",D700:"#afb42b",D800:"#9e9d24",D900:"#827717",Da100:"#f4ff81",Da200:"#eeff41",Da400:"#c6ff00",Da700:"#aeea00"},yellow:{D50:"#fffde7",D100:"#fff9c4",D200:"#fff59d",D300:"#fff176",D400:"#ffee58",D500:"#ffeb3b",D600:"#fdd835",D700:"#fbc02d",D800:"#f9a825",D900:"#f57f17",Da100:"#ffff8d",Da200:"#ffff00",Da400:"#ffea00",Da700:"#ffd600"},amber:{D50:"#fff8e1",D100:"#ffecb3",D200:"#ffe082",D300:"#ffd54f",D400:"#ffca28",D500:"#ffc107",D600:"#ffb300",D700:"#ffa000",D800:"#ff8f00",D900:"#ff6f00",Da100:"#ffe57f",Da200:"#ffd740",Da400:"#ffc400",Da700:"#ffab00"},orange:{D50:"#fff3e0",D100:"#ffe0b2",D200:"#ffcc80",D300:"#ffb74d",D400:"#ffa726",D500:"#ff9800",D600:"#fb8c00",D700:"#f57c00",D800:"#ef6c00",D900:"#e65100",Da100:"#ffd180",Da200:"#ffab40",Da400:"#ff9100",Da700:"#ff6d00"},deeporange:{D50:"#fbe9e7",D100:"#ffccbc",D200:"#ffab91",D300:"#ff8a65",D400:"#ff7043",D500:"#ff5722",D600:"#f4511e",D700:"#e64a19",D800:"#d84315",D900:"#bf360c",Da100:"#ff9e80",Da200:"#ff6e40",Da400:"#ff3d00",Da700:"#dd2c00"},brown:{D50:"#efebe9",D100:"#d7ccc8",D200:"#bcaaa4",D300:"#a1887f",D400:"#8d6e63",D500:"#795548",D600:"#6d4c41",D700:"#5d4037",D800:"#4e342e",D900:"#3e2723"},grey:{D50:"#fafafa",D100:"#f5f5f5",D200:"#eeeeee",D300:"#e0e0e0",D400:"#bdbdbd",D500:"#9e9e9e",D600:"#757575",D700:"#616161",D800:"#424242",D900:"#212121"},steel:{D50:"#eceff1",D100:"#cfd8dc",D200:"#b0bec5",D300:"#90a4ae",D400:"#78909c",D500:"#607d8b",D600:"#546e7a",D700:"#455a64",D800:"#37474f",D900:"#263238"}		}

	function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
	function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
	function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
	function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
	function mdMax(n,m){
		if(n > m){
			return m
		} else {
			return n
		}
	}
	function getMDColor(p){
		var d = p.split(":")[1]
		p = p.split(":")[0].toLowerCase()
		
		if(!p){
			p = "#aaa"
		}
		
		
		if(!d){
			d = "500"
		}
		d = "D" + d.toLowerCase()
		
		var q
		
		if(p.includes("#")){
			q = p
		} else {
			q = eval("color." + p + "." + d);
		}
		
		return q
	}
	
	function textcolor(d){
		var r = hexToR(d)
		var g = hexToG(d)
		var b = hexToB(d)
			
		var t = r*0.299 + g*0.594 + b*0.114;
		if(t.toString() == "NaN") {
			t = 0;
		}
		
		
		if(t > 186){
			return "rgba(0,0,0,0.539582)"
		} else {
			return "#FFF";
		}
	}
	
	$(document).ready(function(){
				
		$("table span").each(function(){
			var w = $(this).next().width() - 15;
			
			$(this).css({
				width:w
			})
		})		
		
		$("table").each(function(){
			$(this).css({
				position:"relative"
			})
		})		
		$("body").append("<div class='md-1cm'></div>");
		screen.dpi = Math.round($(".md-1cm").width() * 2.54);
		$(".md-1cm").remove()
		
		$("[color]").each(function(){
			var p = $(this).attr("color")
			var p = getMDColor(p);
			
			if(!p){
				p = "#AAA"
			}
			
			var d = p.split("#")[1]
			
			$(this).attr("color", p);
			
			var r = hexToR(d)
			var g = hexToG(d)
			var b = hexToB(d)
			
			var t = r*0.299 + g*0.594 + b*0.114;
			if(t.toString() == "NaN") {
				t = 0;
			}

			$(this).attr("color", p)
			
		})	
		Waves.init();
		$("input[type='time']").each(function(){
			$(this).wrap("<span></span>");
			
			var c = $(this).attr("color")
			
			$(this).after("<button md-fab class='md-timepicker-init' color='" + c + "'>&#xE192;</button>")
		})
		
		$(".md-timepicker-init").click(function(){
			
			var v = $(this).siblings("input").attr("value");
			if(!v){
				h = "12";
				m = "00";
				tm = 0
			} else {
				h = v.split(":")[0]
				m = v.split(":")[1].split(" ")[0]
				tm = v.split(" ")[1].toLowerCase();
				
				if(tm != "p.m."){
					tm = 0
				} else {
					tm = 1
				}
			}
			
			var tmdvi = ""
			
			if(tm == 0){
				tmdvi = "<div class='md-timemode'>\
							<span class='md-am md-selected'>AM</span>\
							<span class='md-pm'>PM</span>\
						</div>"
			} else {
				tmdvi = "<div class='md-timemode'>\
							<span class='md-am'>AM</span>\
							<span class='md-pm md-selected'>PM</span>\
						</div>"
			}
			
			
			var c = $(this).attr("color")
			
			var dvi = "<div class='md-popup md-time' style='display:none'>\
				<div class='md-bar' style='background-color:" + c + "'>\
					<div>\
						<span class='md-timesel md-selected md-hour'>" + h + "</span>\
						<span class='md-timesel md-split'>:</span>\
						<span class='md-timesel md-minute'>" + m + "</span>\
					</div>\
					" + tmdvi + "\
				</div>\
				<div class='md-clock md-hour'>\
					<div style='background:linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, " + c + " 50%, " + c + " 100%);' class='md-timethumb'>\
						<div style='background-color:" + c + "' class='md-timeblob'></div>\
					</div>\
					<div class='md-timecell md-0'>12</div>\
					<div class='md-timecell md-1'>1</div>\
					<div class='md-timecell md-2'>2</div>\
					<div class='md-timecell md-3'>3</div>\
					<div class='md-timecell md-4'>4</div>\
					<div class='md-timecell md-5'>5</div>\
					<div class='md-timecell md-6'>6</div>\
					<div class='md-timecell md-7'>7</div>\
					<div class='md-timecell md-8'>8</div>\
					<div class='md-timecell md-9'>9</div>\
					<div class='md-timecell md-10'>10</div>\
					<div class='md-timecell md-11'>11</div>\
				</div>\
				<div class='md-clock md-minute' style='display:none'>\
					<div style='background:linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, " + c + " 50%, " + c + " 100%);' class='md-timethumb'>\
						<div style='background-color:" + c + "' class='md-timeblob'></div>\
					</div>\
					<div class='md-timecell md-0'>00</div>\
					<div class='md-timecell md-1'>05</div>\
					<div class='md-timecell md-2'>10</div>\
					<div class='md-timecell md-3'>15</div>\
					<div class='md-timecell md-4'>20</div>\
					<div class='md-timecell md-5'>25</div>\
					<div class='md-timecell md-6'>30</div>\
					<div class='md-timecell md-7'>35</div>\
					<div class='md-timecell md-8'>40</div>\
					<div class='md-timecell md-9'>45</div>\
					<div class='md-timecell md-10'>50</div>\
					<div class='md-timecell md-11'>55</div>\
				</div>\
				<div class='md-options'>\
					<button style='color:" + c + "' md-flat onclick='$(this).parent().parent().fadeOut(200, function(){$(this).remove()})'>CANCEL</button>\
					<button style='color:" + c + "' md-flat onclick='GETMDTIMEPICKERVALUE(this); $(this).parent().parent().fadeOut(200, function(){$(this).remove()});'>OK</button>\
				</div>\
			</div>"
			
			$(".md-popup").remove()
			
			$(this).after(dvi);
			
			$(".md-popup").fadeIn(200)
			
			$(this).siblings(".md-popup").children(".md-clock.md-hour").children(".md-timecell").css({
				color:"#000"
			})
			
			$(this).siblings(".md-popup").children(".md-clock.md-hour").children(".md-timethumb").each(function(){
				
				$(this).animateRotate(parseInt(h) * 30,0);
				$(this).siblings(":contains('" + h + "')").css({
					color:"#FFF"
				})
				
			})
			
			$(this).siblings(".md-popup").children(".md-clock.md-minute").children(".md-timethumb").each(function(){
				
				$(this).animateRotate(parseInt(m) * 6,0);
				$(this).siblings(":contains('" + m + "')").css({
					color:"#FFF"
				})
				
			})
			
			$(".md-popup .md-bar").each(function(){
				var c = $(this).css("background-color");
				
				if(textcolor(c) == "#FFF"){
					Waves.attach(this, "waves-light")
				} else {
					Waves.attach(this, "waves-dark")
				}
				
			})
			
			$(".md-popup.md-time .md-bar div").not(".md-timemode").click(function(){
				$(".md-time .md-clock.md-hour").toggle("scale", 200)
				$(".md-time .md-clock.md-minute").toggle("scale", 200)
				
				$(this).children().toggleClass("md-selected", 200);
			})
			
			$(".md-timemode").click(function(){
				$(this).children().toggleClass("md-selected", 200)
			})
			
			$(".md-timecell").click(function(){
				var h = $(this).parent().siblings(".md-bar").children("div").children(".md-hour")
				var m = $(this).parent().siblings(".md-bar").children("div").children(".md-minute")
				
				$(this).siblings().not(".md-timethumb").animate({
					color:"#000"
				}, 200)
				
				$(this).animate({
					color:"#FFF"
				}, 200)
				
				if(h.hasClass("md-selected")){
					h.text($(this).text());
					
					var d = parseInt($(this).text()) * 30;
					
					$(this).siblings(".md-timethumb").animateRotate(d, 0)
					
				} else {
					m.text($(this).text())
					
					var d = parseInt($(this).text()) * 6;
					
					$(this).siblings(".md-timethumb").animateRotate(d, 0)
					
				}
				
			})
		}).each(function(){
			var c = $(this).attr("color");
			
			if(textcolor(c) == "#FFF"){
				Waves.attach(this, ["waves-circle", "waves-fab-light"])
			} else {
				Waves.attach(this, ["waves-circle", "waves-fab-dark"])
			}
			
		})
		
		$("button:not([md-flat])").each(function(){
			var d = $(this).attr("color");	
			
			$(this).css("background-color", d)
			
			var t = textcolor(d);
			
			$(this).css({
				color:t
			})
			
			if(t == "#FFF"){
				Waves.attach(this, "waves-fab-light")
			} else {
				Waves.attach(this, "waves-fab-dark")
			}
			
		})
		$("button[md-flat]").each(function(){
			
			var d = $(this).attr("color");

			Waves.attachColor(this, d);
			
			$(this).css("color", d)
		})
		$("label:not(.md-nolabel)").each(function(){
			var f = $(this).attr("for")
			var d = $("#" + f)
			
			if(d.is("input[type='checkbox']")){
				var l = d.offset().left + 24;
				var t = d.offset().top - 2;
				$(this).css({
					top:t,
					left:l
				})
			} else if(d.is("input[type='radio']")){
				var l = d.offset().left + 24;
				var t = d.offset().top - 2;
				$(this).css({
					top:t,
					left:l
				})
			} else if(d.is("input[type='switch']")){
				var l = d.offset().left + 78;
				var t = d.offset().top + 28;
				$(this).css({
					top:t,
					left:l
				})
			}
		})
		
		$("input[type='checkbox']:not(:disabled)").click(function(){
			$(this).next("div").fadeOut(100);
			
			if(!$(this).parent().parent("tr").length){
				var l = $(this).offset().left + 7
				var t = $(this).offset().top + 7
				
				var dl = $(this).offset().left
				var dt = $(this).offset().top
				
			} else {
				var l = $(this).offset().left - 2
				var t = $(this).offset().top - 2
				
				var dl = $(this).offset().left - 8
				var dt = $(this).offset().top - 8
				
			}
			
			$(this).after("<span class='md-rippleBubble'></span>")
			
			var c = $(this).attr("color");
			
			if(!c){
				c = "#c1c1c1"
			}
			
			if(!$(this)[0].checked) {
				c = "#aaa";
			} else {
				
				$(this).after("<div style='user-select:none;'><i class='material-icons' style='color:#FFF;cursor:pointer;font-size:18px'>&#xE5CA;</i></div>");
				
				$(this).next("div").css({
					position:"absolute",
					width:"18px",
					height:"18px",
					borderRadius:"2px",
					margin:"0px",
					backgroundColor:c,
					top:dt,
					left:dl,
					display:"none",
					textAlign: "center",
					lineHeight: "18px",
					verticalAlign: "middle",
					fontSize: "2px"
				}).fadeIn(100).animate({
					fontSize: "18px"
				})
			}
			
			
			$(this).next("div").click(function(){
				$(this).fadeOut(100, function(){
					$(this).remove()
				});
				$(this).prev().click()
			});
			
			$(".md-rippleBubble").css({
				left: l + "px",
				top: t + "px",
				backgroundColor: c
			})
			
			
			setTimeout(function(){
				$(".md-rippleBubble").remove();
			},350)
		})
		$("input[type='checkbox']").each(function(){
			$(this).wrap("<span style='display:inline-block'></span>")

			
			var l = $(this).offset().left + 7
			var t = $(this).offset().top + 7
			
			var dl = $(this).offset().left
			var dt = $(this).offset().top
			
			
			
			var c = $(this).attr("color");
			
			if(!c){
				c = "#c1c1c1"
			}
			
			if(!$(this)[0].checked) {
				c = "#aaa";
			} else {
				
				$(this).after("<div style='user-select:none;'><i class='material-icons' style='color:#FFF;cursor:pointer;font-size:18px'>&#xE5CA;</i></div>");
				
				$(this).next("div").css({
					position:"absolute",
					width:"18px",
					height:"18px",
					borderRadius:"2px",
					margin:"0px",
					backgroundColor:c,
					top:dt,
					left:dl,
					display:"none",
					textAlign: "center",
					lineHeight: "18px",
					verticalAlign: "middle",
					fontSize: "2px"
				}).fadeIn(100).animate({
					fontSize: "18px"
				})
			}
			
			$(this).next("div").click(function(){
				$(this).fadeOut(100, function(){
					$(this).remove()
				});
				$(this).prev().click()
			});
			
			$(".md-rippleBubble").css({
				left: l + "px",
				top: t + "px",
				backgroundColor: c
			})
			
			setTimeout(function(){
				$(".md-rippleBubble").remove();
			},350)
		})
		$("input[type='radio']:not([md-fly='true'])").click(function(){
			
			$(this).next("div").fadeOut(100)
			
			var l = $(this).offset().left + 7
			var t = $(this).offset().top + 7
			
			var dl = $(this).offset().left
			var dt = $(this).offset().top
			
			$(this).after("<span class='md-rippleBubble'></span>")
			
			var n = $(this).attr("name")
			n = $("input[name='" + n + "']")
			n.next("div").css({
				width:"0px",
				height:"0px",
				left:l + 2,
				top:t + 2
			}, 500).prev().animate({
				borderColor:"#c1c1c1"
			}, 200)
			
			
			var c = $(this).attr("color");
			
			if(!c){
				c = "#c1c1c1"
			}
			
			if(!$(this)[0].checked) {
				c = "#aaa";
			} else {
				
				$(this).after("<div style='user-select:none;'></div>");
				
				$(this).next("div").css({
					position:"absolute",
					
					width:"4px",
					height:"4px",
					top:dt + 7,
					left:dl + 7,
					
					borderRadius:"50%",
					margin:"0px",
					backgroundColor:c,
					textAlign: "center",
					lineHeight: "18px",
					verticalAlign: "middle",
					fontSize: "2px",
				}).animate({
					width:"10px",
					height:"10px",
					left:dl + 4,
					top:dt + 4
				}, 200).prev().animate({
					borderColor:c
				}, 200)
				
			}
			
			
			$(this).next("div").click(function(){
				$(this).fadeOut(100, function(){
					$(this).remove()
				});
				$(this).prev().click()
			});
			
			$(".md-rippleBubble").css({
				left: l + "px",
				top: t + "px",
				backgroundColor: c
			})
			
			
			setTimeout(function(){
				$(".md-rippleBubble").remove();
			},350)
		});
		
		$("input[type='radio']").click(function(){
			
			$(this).next("div").fadeOut(100)
			
			var l = $(this).offset().left + 7
			var t = $(this).offset().top + 7
			
			var dl = $(this).offset().left
			var dt = $(this).offset().top
			
			$(this).after("<span class='md-rippleBubble'></span>")
			
			var n = $(this).attr("name")
			n = $("input[name='" + n + "']")
			n.next("div").animate({
				width:"0px",
				height:"0px",
				left:l + 2,
				top:t + 2
			}, 500).prev().animate({
				borderColor:"#c1c1c1"
			}, 200)
			
			
			var c = $(this).attr("color");
			
			if(!c){
				c = "#c1c1c1"
			}
			
			if(!$(this)[0].checked) {
				c = "#aaa";
			} else {
				
				$(this).after("<div style='user-select:none;'></div>");
				
				$(this).next("div").css({
					position:"absolute",
					
					width:"4px",
					height:"4px",
					top:dt + 7,
					left:dl + 7,
					
					borderRadius:"50%",
					margin:"0px",
					backgroundColor:c,
					textAlign: "center",
					lineHeight: "18px",
					verticalAlign: "middle",
					fontSize: "2px",
				}).animate({
					width:"10px",
					height:"10px",
					left:dl + 4,
					top:dt + 4
				}, 200).prev().animate({
					borderColor:c
				}, 200)
				
			}
			
			
			$(this).next("div").click(function(){
				$(this).fadeOut(100, function(){
					$(this).remove()
				});
				$(this).prev().click()
			});
			
			$(".md-rippleBubble").css({
				left: l + "px",
				top: t + "px",
				backgroundColor: c
			})
			
			
			setTimeout(function(){
				$(".md-rippleBubble").remove();
			},350)
		});
		
		$("input[type='switch']").each(function(){
			var c = $(this).attr("color");
			
			var f = $(this).attr("checked")
			if(f){
				$(this).attr("switched", "true")
			}
			
			$(this).wrap("<span class='md-switch-w'></span>");
			
			$(this).after("<span class='md-switch'></span>");
			$(this).before("<span class='md-switch-track'></span>");
			
			var thumb = $(this).next(".md-switch");
			var track = $(this).prev(".md-switch-track");
			
			var r = hexToR(c);
			var g = hexToG(c);
			var b = hexToB(c);
			var c = "rgb(" + r + "," + g + "," + b + ")"
			
			var k = 60;
			var light = mdMax(r+k,255) + "," + mdMax(g+k,255) + "," + mdMax(b+k,255)
			light = "rgb(" + light + ")"
			
			var t = thumb.offset().top + 100;
			var l = thumb.offset().left;
			
			
			var v = ($(this).attr("switched") == "true");
			
			if(v || $(this).attr("checked")){
				thumb.animate({
					backgroundColor:c,
					left:l+28
				}, 150)
				track.animate({
					backgroundColor:light
				}, 150)
			} else {
				thumb.animate({
					backgroundColor:"#c1c1c1c"
				}, 150)
				track.animate({
					backgroundColor:"#ddd"
				}, 150)
			}
		})
		$(".md-switch-w").click(function(){
			var e = $(this).children("input");
			var v = (e.attr("switched") == "true")
			var c = e.attr("color");
			var q = e.attr("disabled");
			
			var thumb = $(this).children(".md-switch")
			var track = $(this).children(".md-switch-track")
			
			var l = track.offset().left
			if(!q){
				if(!v){
					e.attr("switched", "true");
					
					l += 28
					
					thumb.animate({
						left:l,
						backgroundColor:c
					}, 150);
					
					var r = hexToR(c);
					var g = hexToG(c);
					var b = hexToB(c);
					var c = "rgb(" + r + "," + g + "," + b + ")"
					
					var k = 60;
					var light = mdMax(r+k,255) + "," + mdMax(g+k,255) + "," + mdMax(b+k,255)
					light = "rgb(" + light + ")"
					
					track.animate({
						backgroundColor:light
					}, 150)
				} else {
					e.attr("switched", "undefined");
					
					thumb.animate({
						left:l,
						backgroundColor:"#c1c1c1"
					}, 150);
					
					track.animate({
						backgroundColor: "#ddd"
					}, 150)
				}
			}
			return false;
			thumb.promise().done(function(){
				return true
			});
		})
		
		$("meter, progress").each(function(){
			var e = $(this).attr("color");
			if(!e) e = $(this).css("bacckground-color")
			
			var c = hexToRgb(e);
			var r = c.r,
				g = c.g,
				b = c.b
		
			var c = "rgba(" + r + "," + g + "," + b + ",.2)"
		
			var w = $(this).width();
			var v = $(this).val() * w
			var z = $(this).css("z-index")
			
			if(z == "auto") {
				z = 1;
			} else {
				z++
			}
			
			$(this).wrap("<span></span>")
			
			$(this).after("<div class='md-meter-backlayer'></div>")
			$(this).after("<div class='md-meter-frontlayer'></div>")
			
			var back = $(this).next().next();
			var front = $(this).next();
			
			back.css({
				width:w + "px",
				backgroundColor:c
			})
			
			front.css({
				width:v + "px",
				zIndex:z,
				backgroundColor:e
			})
		})
		$("input[type='text']").each(function(){
			$(this).wrap("<span></span>")
			
			var c = $(this).attr("color")
			
			var p = $(this).attr("placeholder");
			$(this).attr('placeholder', "");
			var u = $(this).attr("under");
			
			if (typeof p == "undefined"){
				p = " "
			}
			if (typeof u == "undefined"){
				u = " "
			}
			
			$(this).after("<span class='md-input md-placeholder'>" + p + "</span>");
			$(this).after("<span class='md-input md-undertext'>" + u + "</span>");
			
			var x = $(this).offset().left;
			var y = $(this).offset().top;
			
			$(this).siblings(".md-input.md-placeholder").css({
				left:x,
				top:y
			}).click(function(){
				$(this).siblings("input").click()
				$(this).siblings("input").focus()
			})
			
			$(this).siblings(".md-input.md-undertext").css({
				left:x,
				top:y + 38,
				color:c
			})
			
		}).click(function(e){
			
			var c = $(this).attr("color")
			var x = e.pageX;
			var t = $(this).offset().top + 30;
			var d = $(this).offset().left
			var w = $(this).width();
			
			$(this).siblings(".md-bar").remove();
			
			$(this).after("<div class='md-input md-bar'></div>");
			
			var q = $(this).siblings(".md-bar");
			
			q.css({
				left:x,
				top:t,
				backgroundColor:c
			}).animate({
				left:d,
				width:w
			}, 200)
			
			var pc = $(this).siblings(".md-input.md-placeholder");
			
			var t = $(this).offset().top - 22
			
			if($(this).val().length == 0){
			
				pc.animate({
					color:c,
					top: t,
					fontSize:"14px"
				}, 200)
			} else {
				pc.animate({
					color:c
				}, 200)
			}
			
		}).blur(function(){
			var l = $(this).width()/2 + $(this).offset().left
			$(this).siblings(".md-bar").animate({
				width: "0px",
				left:l
			}, 200)
			
			var pc = $(this).siblings(".md-input.md-placeholder");
			var t = $(this).offset().top
			
			if($(this).val().length == 0){
			
				pc.animate({
					color:"#c1c1c1",
					top: t,
					fontSize:"18px"
				}, 200)
			} else {
				pc.animate({
					color:"#c1c1c1"
				}, 200)
			}
		});
		
		$('input[type="color"]').each(function(){
			$(this).wrap("<span></span>");
			
			$(this).after("<div class='md-coloropen'></div>")
		}).change(function(){
			var c = $(this).val()
			$(this).siblings(".md-coloropen").css("background-color", c)
		})
		
		$(".md-coloropen").click(function(){
				var dvi = '<div class="md-popup md-colorpicker">\
			<span class="md-popupTitle">Select a Color :</span>\
				<div class="md-content">\
					<div class="md-colorblob" color="red"></div>\
					<div class="md-colorblob" color="pink"></div>\
					<div class="md-colorblob" color="purple"></div>\
					<div class="md-colorblob" color="deepPurple"></div>\
					<div class="md-colorblob" color="indigo"></div>\
					<div class="md-colorblob" color="green"></div>\
					<div class="md-colorblob" color="teal"></div>\
					<div class="md-colorblob" color="cyan"></div>\
					<div class="md-colorblob" color="lightBlue"></div>\
					<div class="md-colorblob" color="blue"></div>\
					<div class="md-colorblob" color="lightGreen"></div>\
					<div class="md-colorblob" color="lime"></div>\
					<div class="md-colorblob" color="yellow"></div>\
					<div class="md-colorblob" color="amber"></div>\
					<div class="md-colorblob" color="orange"></div>\
					<div class="md-colorblob md-other"></div>\
					<div class="md-colorblob" color="steel"></div>\
					<div class="md-colorblob" color="grey"></div>\
					<div class="md-colorblob" color="brown"></div>\
					<div class="md-colorblob" color="deepOrange"></div>\
					<div class="md-check"><i class="material-icons">&#xE5CA;</i></div>\
				</div>\
				<div class="md-opts">\
					<button md-flat style="color:#000" onclick="$(this).parent().parent().fadeOut(200, function(){$(this).remove()})">Cancel</button>\
					<button md-flat style="color:#000" onclick="$(this).parent().parent().fadeOut(200, function(){$(this).remove()}); GETMDCOLORPICKERVALUE(this);">OK</button>\
				</div>\
				<button md-flat style="color:#000;bottom:16px;left:16px; position:absolute;" onclick="$(this).parent().fadeOut(200, function(){$(this).remove()}); $(this).parent().siblings(&quot;input&quot;).click()">CUSTOM</button>\
			</div>'
				
			$(".md-popup").remove()
			$(this).after(dvi);
			$(".md-popup").fadeIn(200)
			
			$(".md-colorblob:not(.md-other)").each(function(){
				var c = $(this).attr("color");
				c = getMDColor(c);
				$(this).css({
					backgroundColor:c
				})
			}).click(function(){
				
				var k = $(".md-popup.md-colorpicker .md-content .md-check");
				
				var q = $(this).siblings();
				
				q.removeAttr("checked")
				
				$(this).attr("checked", "true")
				
				var l = $(this).position().left + screen.dpi * 0.8
				var t = $(this).position().top + screen.dpi * 0.925

				k.fadeOut(200, function(){
					$(this).css({
						left:l,
						top:t
					}).fadeIn(200)
				});
			})
		})
		$("[md-linear-loader]").each(function(){

		})
		$("[md-linear-loader][md-indeterminate]").each(function(){
			$(this).wrap("<span></span>");
			
			var c = $(this).attr("color");
			
			$(this).append("<div class='md-linear-loader-bar md-indeterminate'></div>");
			
			var q = $(this).children(".md-linear-loader-bar.md-indeterminate")
			
			q.css({
				backgroundColor:c
			})
		})
		$("[md-linear-loader][md-query]").each(function(){
			$(this).wrap("<span></span>");
			
			var c = $(this).attr("color");
			
			$(this).append("<div class='md-linear-loader-bar md-query'></div>");
			
			var q = $(this).children(".md-linear-loader-bar.md-query")
			
			q.css({
				backgroundColor:c
			})
		})
		$("[md-linear-loader][md-determinate]").each(function(){
			$(this).wrap("<span></span>");
			
			var c = $(this).attr("color");
			var t = parseInt($(this).attr("time"));
			if(!t) {
				t = 2000
			}
			
			$(this).append("<div class='md-linear-loader-bar md-determinate'></div>");
			
			var q = $(this).children(".md-linear-loader-bar.md-determinate")
			
			q.css({
				backgroundColor:c,
				left: "0px",
				width: "0px",
				height: "4px",
				bottom: "0px"
			}).animate({
				width: "100%"
			}, t).delay(500).animate({
				width: "0%",
				left:"100%"
			}, 1000)
			
			$(this).click(function(){
				q.css({
					backgroundColor:c,
					left: "0px",
					width: "0px",
					height: "4px",
					bottom: "0px"
				}).animate({
					width: "100%"
				}, t).delay(500).animate({
					width: "0%",
					left:"100%"
				}, 1000)
			})
		})
		$("[tooltip]").each(function(){
			var v = $(this).attr("tooltip");
			
			var r = "md-tooltip-" + Math.random().toString().split(".")[1];
			$(this).addClass(r);
			
			$(this).hover(function(){
				$("body").append("<div class='md-tooltip " + r + "'>" + v + "</div>");
				
				var t = $(".md-tooltip." + r);

				var ce = ($(this).width() - t.width())/2
				
				var x = $(this).offset().left - ce + 3
				var y = $(this).offset().top + $(this).height() + 8
				
				if(x < 0){
					x = 8
				}
				if (x > screen.width - t.width()){
					x = screen.width - t.width() - 20
				}
				
				t.css({
					top:y,
					left:x
				})
				
				t.fadeIn(200);
				
				
				
			}, function(){
				var t = $(".md-tooltip." + r);
				
				t.fadeOut(200, function(){
					
					t.remove();
					
				})
			})
		});
		
		$("input[type='range']").each(function(){
			
			var c = $(this).attr("color")
			
			var v = $(this).attr("value")
			if(!v){
				v = 0.5
			}
			
			$(this).wrap("<div class='md-range-slider'></div>")
			
			$(this).after("<div class='md-slider-ball'></div>");
			$(this).after("<div class='md-slider-track'></div>");
			$(this).after("<div class='md-slider-before'></div>");
			
			var ball = $(this).siblings(".md-slider-ball");
			var before = $(this).siblings(".md-slider-before");
			var track = $(this).siblings(".md-slider-track");
			
			var w = $(this).width() + 3
			var p = $(this).parent()
			
			ball.draggable({
				axis: "x",
				containment: "parent"
			})
			
			var bl = (p.offset().left + (p.width() * v))/10 - ball.width()/2 - 1
			var r = v * 100 + "%";
			
			ball.css({
				backgroundColor:c,
				left:r
			})
			
			before.css({
				backgroundColor:c,
				width:r
			})
			track.css({
				width:w - 2
			})
			p.css({
				width:w
			})
			var v
			
			var qh = $(this).offset().left
			
			var bc = function(){
				
				qh = qh*.85 - 6
				
				p.children("input").val(qh)
				p.children("input").attr("value",qh)
			}
			
			ball.on("drag", function(e){
				
				var h = $(this).offset().left
				
				qh = h
				
				before.css({
					width:h
				})
				
				bc()
			})
			
			p.click(function(e){
				
				v = e.pageX - $(this).offset().left
				
				qh = v
				
				ball.animate({
					left:e.pageX - 12
				}, 200);
				before.animate({
					width:v
				}, 200);
				
				bc()
			})
			
		});
		
		$(".md-popup .md-bar").each(function(){
			
			var c = $(this).css("background-color");
			var t = textcolor(c);
			
			if(t == "#FFF"){
				Waves.attach(this, "waves-fab-light")
			} else {
				Waves.attach(this, "waves-fab-dark")
			}
			
		})
	});
}();