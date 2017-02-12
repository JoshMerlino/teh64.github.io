(function($) {
    $.fn.matches = function(t) {
        return this.filter(function(i) {
            return $(this).text() === t
        })
    }

    var mousedown = false;

    $(document).mousedown(function() {
        mousedown = true
    })

    $(document).mouseup(function() {
        mousedown = false
    })

    $.mousedown = function() {
        return mousedown
    }
}($));

function GETMDDATEPICKERVALUE(p) {
    p = $(p);
    var d = p.parent().parent().siblings(".md-bar").children(".md-fdate").text().replace("  ", " ")
    var y = p.parent().parent().siblings(".md-bar").children(".md-year").text()
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var m = d.split(", ")[1].split(" ")[0];
    var day = d.split(" ")[2]
    m = months.indexOf(m) + 1
    var id = y + "/" + m + "/" + day
    p.parent().parent().parent().siblings("input").attr("value", id);
    p.parent().parent().parent().fadeOut(200, function() {
        $(this).remove()
    })
}

function GETMDYEARPICKERVALUE(p) {
    p = $(p);
    var v = p.parent().siblings(".md-content").children(".md-selected").text();
    p.parent().parent().siblings("input").attr("value", v)
}

function GETMDCOLORPICKERVALUE(p) {
    var e = $(p).parent().siblings(".md-content").children("[checked]").attr("color")
    switch (e) {
        case "red":
            e = "#f7412c";
            break;
        case "pink":
            e = "#eb1460";
            break;
        case "purple":
            e = "#9c1ab1";
            break;
        case "deepPurple":
            e = "#6633b9";
            break;
        case "indigo":
            e = "#3e50b4";
            break;
        case "blue":
            e = "#2095f2";
            break;
        case "lightBlue":
            e = "#02a8f4";
            break;
        case "cyan":
            e = "#01bbd4";
            break;
        case "teal":
            e = "#019587";
            break;
        case "green":
            e = "#4baf4f";
            break;
        case "lightGreen":
            e = "#8baf4f";
            break;
        case "lime":
            e = "#ccdb38";
            break;
        case "yellow":
            e = "#efec16";
            break;
        case "amber":
            e = "#fec107";
            break;
        case "orange":
            e = "#ff9800";
            break;
        case "deepOrange":
            e = "#ff5500";
            break;
        case "brown":
            e = "#7a5545";
            break;
        case "grey":
            e = "#b9b9b9";
            break;
        case "steel":
            e = "#607d8d";
            break;
    }
    $(p).parent().parent().siblings("input").attr("value", e)
    $(p).parent().parent().siblings(".md-coloropen").css("background-color", e)
}
$(function(){
	$("body").append("<div class='md-toast-left'></div>")
	$("body").append("<div class='md-snackbar-wrap'></div>")
	$("body").append("<div class='md-snackbar-mobile'></div>")
})
function GETMDTIMEPICKERVALUE(p) {
    p = $(p).parent();
    var t = p.siblings(".md-bar").children("div").children(".md-hour").text() + ":" + p.siblings(".md-bar").children("div").children(".md-minute").text()
    var tm = p.siblings(".md-bar").children(".md-timemode").children(".md-selected").text();
    if (tm == "AM") {
        tm = "a.m."
    } else {
        tm = "p.m."
    }
    p.parent().siblings("input").attr("value", t + " " + tm)
}
Material = {
    init: function(o) {
        Material.run()
        $(document).ready(function() {
            var q = ""
            var b = {
                context: false,
                scrollbars: true,
                nowaves: false,
                detahced: []
            }
            o = $.extend(b,o);

            if (o.context) {
                $("body").attr("md-context", "true")
            }
            if (o.scrollbars) {
                q += "::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background-color:rgba(120,120,120,0.5);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(120,120,120,0.3)}"
            }
            if (!o.nowaves) {
                q += ".waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:100px;height:100px;margin-top:-50px;margin-left:-50px;opacity:0;background:rgba(0,0,0,.1);-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out;transition:all .5s ease-out;-webkit-transition-property:-webkit-transform,opacity;-moz-transition-property:-moz-transform,opacity;-o-transition-property:-o-transform,opacity;transition-property:transform,opacity;-webkit-transform:scale(0) translate(0,0);-moz-transform:scale(0) translate(0,0);-ms-transform:scale(0) translate(0,0);-o-transform:scale(0) translate(0,0);transform:scale(0) translate(0,0);pointer-events:none}.waves-effect.waves-fab-light .waves-ripple{background:rgba(255,255,255,0.4)}.waves-effect.waves-fab-dark .waves-ripple {background:rgba(0,0,0,0.3);}.waves-effect.waves-light .waves-ripple{background:rgba(255,255,255,.3);}.waves-effect.waves-classic .waves-ripple{background:rgba(0,0,0,.3)}.waves-effect.waves-classic.waves-light .waves-ripple{background:rgba(255,255,255,.4)}.waves-notransition{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;transition:none!important}.waves-button,.waves-circle{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle,#fff 100%,#000 100%)}.waves-button,.waves-button:hover,.waves-button:visited,.waves-button-input{white-space:nowrap;vertical-align:middle;cursor:pointer;border:none;outline:0;color:inherit;background-color:transparent;font-size:1em;line-height:1em;text-align:center;text-decoration:none;z-index:1}.waves-button{padding:.85em 1.1em;border-radius:2px}.waves-button-input{margin:0;padding:.85em 1.1em}.waves-input-wrapper{border-radius:.2em;vertical-align:bottom}.waves-input-wrapper.waves-button{padding:0}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%}.waves-float{-webkit-mask-image:none;-webkit-box-shadow:0 1px 1.5px 1px rgba(0,0,0,.12);box-shadow:0 1px 1.5px 1px rgba(0,0,0,.12);-webkit-transition:all 300ms;-moz-transition:all 300ms;-o-transition:all 300ms;transition:all 300ms}.waves-float:active{-webkit-box-shadow:0 8px 20px 1px rgba(0,0,0,.3);box-shadow:0 8px 20px 1px rgba(0,0,0,.3)}.waves-block{display:block}"
            }
            if (o.detached) {
                $.each(o.detached, function(i, v) {
                    $(v).attr("md", "false")
                })
            }
            addcss(q)
        })
    },
    toast: function(o) {
		var b = {
            delay:5000
        }
        o = $.extend(b,o);
		
		var r = "md-" + Math.random().toString().split(".")[1];
	
		if(!o.action){
	
			$(".md-toast-left").append("<div class='md-toast " + r + "'>" + o.message + "</div>");
			var e = $(".md-toast." + r);
					
			e.effect("slide", {
				direction:"left"
			})
		
		} else {
			
			var c = Material.getColor(o.actionColor)
			
			$(".md-toast-left").append("<div class='md-toast " + r + "'>" + o.message + "<div style='color:" + c + ";text-transform:uppercase;'>" + o.action + "</div></div>");
			var e = $(".md-toast." + r);
			
			e.children("div").click(o.actionClick)
			
			e.fadeIn(200)
			
		}
		setTimeout(function(){
			e.fadeOut(250)
		},o.delay)
    },
	snackbar: function(o) {
		var b = {
            delay:5000
        }
        o = $.extend(b,o);
		
		var r = "md-" + Math.random().toString().split(".")[1];
	
		if(!window.mobilecheck){
			if(!o.action){
	
				$(".md-snackbar-wrap").append("<div class='md-snackbar " + r + "'>" + o.message + "</div>");
				var e = $(".md-snackbar." + r);
						
				e.effect("slide", {
					direction:"left"
				})
			
			} else {
				
				var c = Material.getColor(o.actionColor)
				
				$(".md-snackbar-wrap").append("<div class='md-snackbar " + r + "'>" + o.message + "<div style='color:" + c + ";text-transform:uppercase;'>" + o.action + "</div></div>");
				var e = $(".md-snackbar." + r);
				
				e.children("div").click(o.actionClick)
				
				e.fadeIn(200)
				
			}
			setTimeout(function(){
				e.fadeOut(250)
			},o.delay)
		} else {
			if(!o.action){
	
				$(".md-snackbar-mobile").append("<div class='md-snackbar " + r + "'>" + o.message + "</div>");
				var e = $(".md-snackbar." + r);
						
				e.effect("slide", {
					direction:"left"
				})
			
			} else {
				
				var c = Material.getColor(o.actionColor)
				
				$(".md-snackbar-wrap").append("<div class='md-snackbar " + r + "'>" + o.message + "<div style='color:" + c + ";text-transform:uppercase;'>" + o.action + "</div></div>");
				var e = $(".md-snackbar." + r);
				
				e.children("div").click(o.actionClick)
				
				e.fadeIn(200)
				
			}
			setTimeout(function(){
				e.fadeOut(250)
			},o.delay)
		}
    },
    appBar: function(o) {
        var c = o.color;
        c = Material.getColor(c);

        var t = o.title

        var cb = o.menuAction

        var q = $("body").html()

        var glml = 8
        var glmm = ""

        if (o.menu) {
            glml = 72;
            glmm = "<i class='material-icons md-menu'>&#xE5D2;</i>"
        }

        $("body").append("<div class='md-bodyContent md-64'>" + q + "</div>")
        $("body").children().not(".md-bodyContent").remove();
        $("body").append("<div class='md-appBar'>" + glmm + "<h1 class='md-title' style='left:" + glml + "px;'>" + t + "</h1><div class='md-more-buttons'></div></div>");
        var ab = $(".md-appBar");

        if (o.graded) {
            ab.addClass("md-graded");
            $(".md-bodyContent").removeClass("md-64").addClass("md-86")
        }

        if (o.menu) {
            $(".md-appBar .md-menu").click(cb)
        }

        ab.css({
            backgroundColor: c
        });


        if (o.addButtons) {

            for (var i = 0; i < o.addButtons.length; i++) {
                var h = o.addButtons[i][0];
                var g = o.addButtons[i][1];

                var r = "md-" + Math.random().toString().split(".")[1]

                var mb = "<i class='material-icons " + r + "'>" + h + "</i>"
                $(".md-more-buttons").append(mb)
                $("." + r).click(g)
            }

        }

    },
    getColor: function(p) {
        var color = {
            red: {
                D50: "#ffebee",
                D100: "#ffcdd2",
                D200: "#ef9a9a",
                D300: "#e57373",
                D400: "#ef5350",
                D500: "#f44336",
                D600: "#e53935",
                D700: "#d32f2f",
                D800: "#c62828",
                D900: "#b71c1c",
                Da100: "#ff8a80",
                Da200: "#ff5252",
                Da400: "#ff1744",
                Da700: "#d50000"
            },
            pink: {
                D50: "#fce4ec",
                D100: "#f8bbd0",
                D200: "#f48fb1",
                D300: "#f06292",
                D400: "#ec407a",
                D500: "#e91e63",
                D600: "#d81b60",
                D700: "#c2185b",
                D800: "#ad1457",
                D900: "#880e4f",
                Da100: "#ff80ab",
                Da200: "#ff4081",
                Da400: "#f50057",
                Da700: "#c51162"
            },
            purple: {
                D50: "#f3e5f5",
                D100: "#e1bee7",
                D200: "#ce93d8",
                D300: "#ba68c8",
                D400: "#ab47bc",
                D500: "#9c27b0",
                D600: "#8e24aa",
                D700: "#7b1fa2",
                D800: "#6a1b9a",
                D900: "#4a148c",
                Da100: "#ea80fc",
                Da200: "#e040fb",
                Da400: "#d500f9",
                Da700: "#aa00ff"
            },
            deeppurple: {
                D50: "#ede7f6",
                D100: "#d1c4e9",
                D200: "#b39ddb",
                D300: "#9575cd",
                D400: "#7e57c2",
                D500: "#673ab7",
                D600: "#5e35b1",
                D700: "#512da8",
                D800: "#4527a0",
                D900: "#311b92",
                Da100: "#b388ff",
                Da200: "#7c4dff",
                Da400: "#651fff",
                Da700: "#6200ea"
            },
            indigo: {
                D50: "#e8eaf6",
                D100: "#c5cae9",
                D200: "#9fa8da",
                D300: "#7986cb",
                D400: "#5c6bc0",
                D500: "#3f51b5",
                D600: "#3949ab",
                D700: "#303f9f",
                D800: "#283593",
                D900: "#1a237e",
                Da100: "#8c9eff",
                Da200: "#536dfe",
                Da400: "#3d5afe",
                Da700: "#304ffe"
            },
            blue: {
                D50: "#e3f2fd",
                D100: "#bbdefb",
                D200: "#90caf9",
                D300: "#64b5f6",
                D400: "#42a5f5",
                D500: "#2196f3",
                D600: "#1e88e5",
                D700: "#1976d2",
                D800: "#1565c0",
                D900: "#0d47a1",
                Da100: "#82b1ff",
                Da200: "#448aff",
                Da400: "#2979ff",
                Da700: "#2962ff"
            },
            lightblue: {
                D50: "#e1f5fe",
                D100: "#b3e5fc",
                D200: "#81d4fa",
                D300: "#4fc3f7",
                D400: "#29b6f6",
                D500: "#03a9f4",
                D600: "#039be5",
                D700: "#0288d1",
                D800: "#0277bd",
                D900: "#01579b",
                Da100: "#80d8ff",
                Da200: "#40c4ff",
                Da400: "#00b0ff",
                Da700: "#0091ea"
            },
            cyan: {
                D50: "#e0f7fa",
                D100: "#b2ebf2",
                D200: "#80deea",
                D300: "#4dd0e1",
                D400: "#26c6da",
                D500: "#00bcd4",
                D600: "#00acc1",
                D700: "#0097a7",
                D800: "#00838f",
                D900: "#006064",
                Da100: "#84ffff",
                Da200: "#18ffff",
                Da400: "#00e5ff",
                Da700: "#00b8d4"
            },
            teal: {
                D50: "#e0f2f1",
                D100: "#b2dfdb",
                D200: "#80cbc4",
                D300: "#4db6ac",
                D400: "#26a69a",
                D500: "#009688",
                D600: "#00897b",
                D700: "#00796b",
                D800: "#00695c",
                D900: "#004d40",
                Da100: "#a7ffeb",
                Da200: "#64ffda",
                Da400: "#1de9b6",
                Da700: "#00bfa5"
            },
            green: {
                D50: "#e8f5e9",
                D100: "#c8e6c9",
                D200: "#a5d6a7",
                D300: "#81c784",
                D400: "#66bb6a",
                D500: "#4caf50",
                D600: "#43a047",
                D700: "#388e3c",
                D800: "#2e7d32",
                D900: "#1b5e20",
                Da100: "#b9f6ca",
                Da200: "#69f0ae",
                Da400: "#00e676",
                Da700: "#00c853"
            },
            lightgreen: {
                D50: "#f1f8e9",
                D100: "#dcedc8",
                D200: "#c5e1a5",
                D300: "#aed581",
                D400: "#9ccc65",
                D500: "#8bc34a",
                D600: "#7cb342",
                D700: "#689f38",
                D800: "#558b2f",
                D900: "#33691e",
                Da100: "#ccff90",
                Da200: "#b2ff59",
                Da400: "#76ff03",
                Da700: "#64dd17"
            },
            lime: {
                D50: "#f9fbe7",
                D100: "#f0f4c3",
                D200: "#e6ee9c",
                D300: "#dce775",
                D400: "#d4e157",
                D500: "#cddc39",
                D600: "#c0ca33",
                D700: "#afb42b",
                D800: "#9e9d24",
                D900: "#827717",
                Da100: "#f4ff81",
                Da200: "#eeff41",
                Da400: "#c6ff00",
                Da700: "#aeea00"
            },
            yellow: {
                D50: "#fffde7",
                D100: "#fff9c4",
                D200: "#fff59d",
                D300: "#fff176",
                D400: "#ffee58",
                D500: "#ffeb3b",
                D600: "#fdd835",
                D700: "#fbc02d",
                D800: "#f9a825",
                D900: "#f57f17",
                Da100: "#ffff8d",
                Da200: "#ffff00",
                Da400: "#ffea00",
                Da700: "#ffd600"
            },
            amber: {
                D50: "#fff8e1",
                D100: "#ffecb3",
                D200: "#ffe082",
                D300: "#ffd54f",
                D400: "#ffca28",
                D500: "#ffc107",
                D600: "#ffb300",
                D700: "#ffa000",
                D800: "#ff8f00",
                D900: "#ff6f00",
                Da100: "#ffe57f",
                Da200: "#ffd740",
                Da400: "#ffc400",
                Da700: "#ffab00"
            },
            orange: {
                D50: "#fff3e0",
                D100: "#ffe0b2",
                D200: "#ffcc80",
                D300: "#ffb74d",
                D400: "#ffa726",
                D500: "#ff9800",
                D600: "#fb8c00",
                D700: "#f57c00",
                D800: "#ef6c00",
                D900: "#e65100",
                Da100: "#ffd180",
                Da200: "#ffab40",
                Da400: "#ff9100",
                Da700: "#ff6d00"
            },
            deeporange: {
                D50: "#fbe9e7",
                D100: "#ffccbc",
                D200: "#ffab91",
                D300: "#ff8a65",
                D400: "#ff7043",
                D500: "#ff5722",
                D600: "#f4511e",
                D700: "#e64a19",
                D800: "#d84315",
                D900: "#bf360c",
                Da100: "#ff9e80",
                Da200: "#ff6e40",
                Da400: "#ff3d00",
                Da700: "#dd2c00"
            },
            brown: {
                D50: "#efebe9",
                D100: "#d7ccc8",
                D200: "#bcaaa4",
                D300: "#a1887f",
                D400: "#8d6e63",
                D500: "#795548",
                D600: "#6d4c41",
                D700: "#5d4037",
                D800: "#4e342e",
                D900: "#3e2723"
            },
            grey: {
                D50: "#fafafa",
                D100: "#f5f5f5",
                D200: "#eeeeee",
                D300: "#e0e0e0",
                D400: "#bdbdbd",
                D500: "#9e9e9e",
                D600: "#757575",
                D700: "#616161",
                D800: "#424242",
                D900: "#212121"
            },
            steel: {
                D50: "#eceff1",
                D100: "#cfd8dc",
                D200: "#b0bec5",
                D300: "#90a4ae",
                D400: "#78909c",
                D500: "#607d8b",
                D600: "#546e7a",
                D700: "#455a64",
                D800: "#37474f",
                D900: "#263238"
            }
        }

        var d = p.split(":")[1]
        p = p.split(":")[0].toLowerCase()
        if (!d) {
            d = "500"
        }
        d = "D" + d.toLowerCase()
        var q
        if (p.includes("#")) {
            q = p
        } else {
            q = eval("color." + p + "." + d);
        }
        return q
    },
    dialog: function(o) {
        switch (o.type.toLowerCase()) {
            default: {
                var dvi = "<div class='md-popup md-alert'><div class='md-title'>" + o.title + "</div><div class='md-content'>" + o.msg + "</div><div class='md-options'><button md-flat color='steel' onclick='$(this).parent().parent().fadeOut(200, function(){$(this).remove()})'>OK</button></div></div>"

                $(".md-popup").remove()
                $("body").append(dvi)
                $(".md-popup").css({
                    display: "none"
                }).fadeIn(200)
                break;
            }
        }
    },
    color: {
        textcolor: function(d) {
            var r = Material.color.hexToR(d)
            var g = Material.color.hexToG(d)
            var b = Material.color.hexToB(d)

            var t = r * 0.299 + g * 0.594 + b * 0.114;
            if (t.toString() == "NaN") {
                t = 0;
            }


            if (t > 186) {
                return "rgba(0,0,0,0.539582)"
            } else {
                return "#FFF";
            }
        },
        hexToR: function(h) {
            return parseInt((Material.color.cutHex(h)).substring(0, 2), 16)
        },
        hexToG: function(h) {
            return parseInt((Material.color.cutHex(h)).substring(2, 4), 16)
        },
        hexToB: function(h) {
            return parseInt((Material.color.cutHex(h)).substring(4, 6), 16)
        },
        cutHex: function(h) {
            if (!h) {
                h = ""
            }
            return h.replace("#", "")
        },
        hexToRgbA: function(hex) {
            var c;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                c = hex.substring(1).split('');
                if (c.length == 3) {
                    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c = '0x' + c.join('');
                return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.2)';
            }
            throw new Error('Bad Hex');
        }
    }
}

alert = function(m) {
    Material.dialog({
        type: "alert",
        title: "This Page says:",
        msg: m
    })
}

$(function() {
    var MATERIALCSS = ""
    $(document).ready(function() {
        $("head").append('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">')
    })
})
Material.run = function() {

	function ctx(d) {
        $(".md-ctx .md-option.md-ds").click(function() {
            var sc = $(this).children("div").text();
            if (!sc) {
                alert("Were really sorry, but these options are not available via the edit menu.")
            } else {
                alert("Were really sorry, but these options are not available via the edit menu. Alternatively you can use this keyboard shortcut: <b>" + sc + "</b>")
            }
        })
        $(".md-ctx .md-option.md-back").click(function() {
            history.go(-1);
        })
        $(".md-ctx .md-option.md-fwd").click(function() {
            history.go(+1);
        })
        $(".md-ctx .md-option.md-reload").click(function() {
            window.location.reload();
        })
        $(".md-ctx .md-option.md-print").click(function() {
            window.print();
        })
        $(".md-ctx .md-option.md-vs").click(function() {
            var source = "<html>";
            source += document.getElementsByTagName('html')[0].innerHTML;
            source += "</html>";
            source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            source = "<pre>" + source + "</pre>";
            sourceWindow = window.open('', 'Source of page', 'height=800,width=800,scrollbars=1,resizable=1');
            sourceWindow.document.write(source);
            sourceWindow.document.close();
            if (window.focus) sourceWindow.focus();
        });
        $(".md-ctx .md-option.md-undo").click(function() {
            document.execCommand("undo")
        })
        $(".md-ctx .md-option.md-redo").click(function() {
            document.execCommand("redo")
        })
        $(".md-ctx .md-option.md-copy").click(function() {
            document.execCommand("copy")
        })
        $(".md-ctx .md-option.md-cut").click(function() {
            document.execCommand("cut")
        })
        $(".md-ctx .md-option.md-paste").click(function() {
            document.execCommand("paste")
        })
        $(".md-ctx .md-option.md-selall").click(function() {
            document.execCommand("selectAll")
        })
        $(".md-ctx .md-option.md-del").click(function() {
            document.execCommand("delete")
        })
        $(".md-ctx .md-option.md-gsearch").click(function() {
            //google search
        })
        $(".md-ctx .md-option.md-openimginnewtab").click(function() {
            //open img in new tab
        })
        $(".md-ctx .md-option.md-saveimg").click(function() {
            //save img
        })
        $(".md-ctx .md-option.md-copyimg").click(function() {
            //copy img
        })
        $(".md-ctx .md-option.md-copyimgadr").click(function() {
            //copy img url
        })
        $(".md-ctx .md-option.md-gsearchimg").click(function() {
            //google img
        })
        $(".md-ctx .md-option.md-openlinkinnewtab").click(function() {
            //open link in new tab
        })
        $(".md-ctx .md-option.md-openlinkinnewwin").click(function() {
            //open link in new win
        })
        $(".md-ctx .md-option.md-copylinkadr").click(function() {
            //copy link url
        })
        $(".md-ctx .md-option.md-vsiframe").click(function() {
            //view iframe source
        })
        $(".md-ctx .md-option.md-reloadiframe").click(function() {
            //reload iframe
        })
        $(".md-ctx .md-option.md-gsearchsel").click(function() {
            //google selection
        })
    }

    var color = {
        red: {
            D50: "#ffebee",
            D100: "#ffcdd2",
            D200: "#ef9a9a",
            D300: "#e57373",
            D400: "#ef5350",
            D500: "#f44336",
            D600: "#e53935",
            D700: "#d32f2f",
            D800: "#c62828",
            D900: "#b71c1c",
            Da100: "#ff8a80",
            Da200: "#ff5252",
            Da400: "#ff1744",
            Da700: "#d50000"
        },
        pink: {
            D50: "#fce4ec",
            D100: "#f8bbd0",
            D200: "#f48fb1",
            D300: "#f06292",
            D400: "#ec407a",
            D500: "#e91e63",
            D600: "#d81b60",
            D700: "#c2185b",
            D800: "#ad1457",
            D900: "#880e4f",
            Da100: "#ff80ab",
            Da200: "#ff4081",
            Da400: "#f50057",
            Da700: "#c51162"
        },
        purple: {
            D50: "#f3e5f5",
            D100: "#e1bee7",
            D200: "#ce93d8",
            D300: "#ba68c8",
            D400: "#ab47bc",
            D500: "#9c27b0",
            D600: "#8e24aa",
            D700: "#7b1fa2",
            D800: "#6a1b9a",
            D900: "#4a148c",
            Da100: "#ea80fc",
            Da200: "#e040fb",
            Da400: "#d500f9",
            Da700: "#aa00ff"
        },
        deeppurple: {
            D50: "#ede7f6",
            D100: "#d1c4e9",
            D200: "#b39ddb",
            D300: "#9575cd",
            D400: "#7e57c2",
            D500: "#673ab7",
            D600: "#5e35b1",
            D700: "#512da8",
            D800: "#4527a0",
            D900: "#311b92",
            Da100: "#b388ff",
            Da200: "#7c4dff",
            Da400: "#651fff",
            Da700: "#6200ea"
        },
        indigo: {
            D50: "#e8eaf6",
            D100: "#c5cae9",
            D200: "#9fa8da",
            D300: "#7986cb",
            D400: "#5c6bc0",
            D500: "#3f51b5",
            D600: "#3949ab",
            D700: "#303f9f",
            D800: "#283593",
            D900: "#1a237e",
            Da100: "#8c9eff",
            Da200: "#536dfe",
            Da400: "#3d5afe",
            Da700: "#304ffe"
        },
        blue: {
            D50: "#e3f2fd",
            D100: "#bbdefb",
            D200: "#90caf9",
            D300: "#64b5f6",
            D400: "#42a5f5",
            D500: "#2196f3",
            D600: "#1e88e5",
            D700: "#1976d2",
            D800: "#1565c0",
            D900: "#0d47a1",
            Da100: "#82b1ff",
            Da200: "#448aff",
            Da400: "#2979ff",
            Da700: "#2962ff"
        },
        lightblue: {
            D50: "#e1f5fe",
            D100: "#b3e5fc",
            D200: "#81d4fa",
            D300: "#4fc3f7",
            D400: "#29b6f6",
            D500: "#03a9f4",
            D600: "#039be5",
            D700: "#0288d1",
            D800: "#0277bd",
            D900: "#01579b",
            Da100: "#80d8ff",
            Da200: "#40c4ff",
            Da400: "#00b0ff",
            Da700: "#0091ea"
        },
        cyan: {
            D50: "#e0f7fa",
            D100: "#b2ebf2",
            D200: "#80deea",
            D300: "#4dd0e1",
            D400: "#26c6da",
            D500: "#00bcd4",
            D600: "#00acc1",
            D700: "#0097a7",
            D800: "#00838f",
            D900: "#006064",
            Da100: "#84ffff",
            Da200: "#18ffff",
            Da400: "#00e5ff",
            Da700: "#00b8d4"
        },
        teal: {
            D50: "#e0f2f1",
            D100: "#b2dfdb",
            D200: "#80cbc4",
            D300: "#4db6ac",
            D400: "#26a69a",
            D500: "#009688",
            D600: "#00897b",
            D700: "#00796b",
            D800: "#00695c",
            D900: "#004d40",
            Da100: "#a7ffeb",
            Da200: "#64ffda",
            Da400: "#1de9b6",
            Da700: "#00bfa5"
        },
        green: {
            D50: "#e8f5e9",
            D100: "#c8e6c9",
            D200: "#a5d6a7",
            D300: "#81c784",
            D400: "#66bb6a",
            D500: "#4caf50",
            D600: "#43a047",
            D700: "#388e3c",
            D800: "#2e7d32",
            D900: "#1b5e20",
            Da100: "#b9f6ca",
            Da200: "#69f0ae",
            Da400: "#00e676",
            Da700: "#00c853"
        },
        lightgreen: {
            D50: "#f1f8e9",
            D100: "#dcedc8",
            D200: "#c5e1a5",
            D300: "#aed581",
            D400: "#9ccc65",
            D500: "#8bc34a",
            D600: "#7cb342",
            D700: "#689f38",
            D800: "#558b2f",
            D900: "#33691e",
            Da100: "#ccff90",
            Da200: "#b2ff59",
            Da400: "#76ff03",
            Da700: "#64dd17"
        },
        lime: {
            D50: "#f9fbe7",
            D100: "#f0f4c3",
            D200: "#e6ee9c",
            D300: "#dce775",
            D400: "#d4e157",
            D500: "#cddc39",
            D600: "#c0ca33",
            D700: "#afb42b",
            D800: "#9e9d24",
            D900: "#827717",
            Da100: "#f4ff81",
            Da200: "#eeff41",
            Da400: "#c6ff00",
            Da700: "#aeea00"
        },
        yellow: {
            D50: "#fffde7",
            D100: "#fff9c4",
            D200: "#fff59d",
            D300: "#fff176",
            D400: "#ffee58",
            D500: "#ffeb3b",
            D600: "#fdd835",
            D700: "#fbc02d",
            D800: "#f9a825",
            D900: "#f57f17",
            Da100: "#ffff8d",
            Da200: "#ffff00",
            Da400: "#ffea00",
            Da700: "#ffd600"
        },
        amber: {
            D50: "#fff8e1",
            D100: "#ffecb3",
            D200: "#ffe082",
            D300: "#ffd54f",
            D400: "#ffca28",
            D500: "#ffc107",
            D600: "#ffb300",
            D700: "#ffa000",
            D800: "#ff8f00",
            D900: "#ff6f00",
            Da100: "#ffe57f",
            Da200: "#ffd740",
            Da400: "#ffc400",
            Da700: "#ffab00"
        },
        orange: {
            D50: "#fff3e0",
            D100: "#ffe0b2",
            D200: "#ffcc80",
            D300: "#ffb74d",
            D400: "#ffa726",
            D500: "#ff9800",
            D600: "#fb8c00",
            D700: "#f57c00",
            D800: "#ef6c00",
            D900: "#e65100",
            Da100: "#ffd180",
            Da200: "#ffab40",
            Da400: "#ff9100",
            Da700: "#ff6d00"
        },
        deeporange: {
            D50: "#fbe9e7",
            D100: "#ffccbc",
            D200: "#ffab91",
            D300: "#ff8a65",
            D400: "#ff7043",
            D500: "#ff5722",
            D600: "#f4511e",
            D700: "#e64a19",
            D800: "#d84315",
            D900: "#bf360c",
            Da100: "#ff9e80",
            Da200: "#ff6e40",
            Da400: "#ff3d00",
            Da700: "#dd2c00"
        },
        brown: {
            D50: "#efebe9",
            D100: "#d7ccc8",
            D200: "#bcaaa4",
            D300: "#a1887f",
            D400: "#8d6e63",
            D500: "#795548",
            D600: "#6d4c41",
            D700: "#5d4037",
            D800: "#4e342e",
            D900: "#3e2723"
        },
        grey: {
            D50: "#fafafa",
            D100: "#f5f5f5",
            D200: "#eeeeee",
            D300: "#e0e0e0",
            D400: "#bdbdbd",
            D500: "#9e9e9e",
            D600: "#757575",
            D700: "#616161",
            D800: "#424242",
            D900: "#212121"
        },
        steel: {
            D50: "#eceff1",
            D100: "#cfd8dc",
            D200: "#b0bec5",
            D300: "#90a4ae",
            D400: "#78909c",
            D500: "#607d8b",
            D600: "#546e7a",
            D700: "#455a64",
            D800: "#37474f",
            D900: "#263238"
        }
    }

    function hexToR(h) {
        return parseInt((cutHex(h)).substring(0, 2), 16)
    }

    function hexToG(h) {
        return parseInt((cutHex(h)).substring(2, 4), 16)
    }

    function hexToB(h) {
        return parseInt((cutHex(h)).substring(4, 6), 16)
    }

    function cutHex(h) {
        return Material.color.cutHex(h)
    }

    function mdMax(n, m) {
        if (n > m) {
            return m
        } else {
            return n
        }
    }

    function getMDColor(p) {
        var d = p.split(":")[1]
        p = p.split(":")[0].toLowerCase()

        if (!p) {
            p = "#aaa"
        }


        if (!d) {
            d = "500"
        }
        d = "D" + d.toLowerCase()

        var q

        if (p.includes("#")) {
            q = p
        } else {
            q = eval("color." + p + "." + d);
        }

        return q
    }

    function textcolor(d) {
        var r = hexToR(d)
        var g = hexToG(d)
        var b = hexToB(d)

        var t = r * 0.299 + g * 0.594 + b * 0.114;
        if (t.toString() == "NaN") {
            t = 0;
        }


        if (t > 186) {
            return "rgba(0,0,0,0.539582)"
        } else {
            return "#FFF";
        }
    }

    function copyStr(s) {
        var t = document.createElement('textarea');
        t.innerText = s;
        document.body.appendChild(t);
        t.select();
        document.execCommand("copy");
        t.remove();
    }

    $(document).ready(function() {
        addcss(MATERIALCSS);
		
		
        $("body").append("<div class='md-1cm'></div>");
        screen.dpi = Math.round($(".md-1cm").width() * 2.54);
        $(".md-1cm").remove()

        $("[color]:not([md='false'])").each(function() {
            var p = $(this).attr("color")
            var p = getMDColor(p);

            if (!p) {
                p = "#AAA"
            }

            var d = p.split("#")[1]

            $(this).attr("color", p);

            var r = hexToR(d)
            var g = hexToG(d)
            var b = hexToB(d)

            var t = r * 0.299 + g * 0.594 + b * 0.114;
            if (t.toString() == "NaN") {
                t = 0;
            }

            $(this).attr("color", p)

        })
        Waves.init();


        /*! 
        	Note to Self
        	Create Material Here!
        */

		$("input[type='date']:not([md='false'])").each(function() {

            var c = $(this).attr("color");

            c = getMDColor(c)

            var dvi = "<div class='md-popup md-datepicker'>\
					<div class='md-bar' style='background-color:" + c + "'>\
						<span class='md-year'></span>\
						<span class='md-fdate'>Thu, Apr 13</span>\
					</div>\
					<div class='md-content'>\
						<div class='md-nav'>\
							<i class='mdi md-back'>&#xE314;</i>\
							<i class='mdi md-fwd'>&#xE315;</i>\
							<span class='md-fymonth'></span>\
						</div>\
						<div class='md-day-header-wrap'>\
							<span class='md-day-header'>S</span>\
							<span class='md-day-header'>M</span>\
							<span class='md-day-header'>T</span>\
							<span class='md-day-header'>W</span>\
							<span class='md-day-header'>T</span>\
							<span class='md-day-header'>F</span>\
							<span class='md-day-header'>S</span>\
						</div>\
						<div class='md-calendar'></div>\
						<div class='md-options'>\
							<button md-flat style='color:" + c + "' onclick='$(this).parent().parent().parent().fadeOut(200,function(){$(this).remove()});'>Cancel</button>\
							<button md-flat style='color:" + c + "' onclick='GETMDDATEPICKERVALUE(this)'>OK</button>\
						</div>\
					</div>\
				</div>";

            $(this).wrap("<span></span>")

            $(this).after("<button md-fab color='" + c + "' class='md-datepicker-init'>&#xE916;</button>")

            var it = $(this).siblings(".md-datepicker-init");

            if (textcolor(c) == "#FFF") {
                Waves.attach(it, ["waves-circle", "waves-fab-light"]);
            } else {
                Waves.attach(it, ["waves-circle", "waves-fab-dark"]);
            }

            it.css({
                color: textcolor(c)
            })


            it.click(function() {
                $(".md-popup").remove();

                $(this).after(dvi)

				var qt = $(this).siblings(".md-popup.md-datepicker").children(".md-bar")
				
				if (textcolor(c) == "#FFF") {
					Waves.attach(qt, ["waves-fab-light"]);
				} else {
					Waves.attach(qt, ["waves-fab-dark"]);
				}
				
                $(this).siblings(".md-popup").fadeIn(200)

                $(".md-calendar").each(function() {

                    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    var d = new Date();

                    var month = (d.getMonth() + 1).toString();
                    var year = (d.getYear() + 1900).toString();

                    var s = new Date(year + "-" + month + "-01").getDay() * 46.8571429;

                    $(this).append("<div class='md-date-spacer'></div>")
                    $(this).children(".md-date-spacer").css({
                        width: s
                    })

                    var q = new Date(year, month, 0).getDate();

                    for (i = 0; i < q; i++) {
                        var m = i + 1;
                        $(this).append("<div class='md-datecell'>" + m + "</div>")
                    }


                    $(".md-datepicker .md-content .md-nav .md-fymonth").each(function() {
                        $(this).text(months[month - 1] + " " + year)
                    })
                    $(".md-datepicker .md-bar .md-year").each(function() {
                        $(this).text(year)
                    })


                    $(".md-datepicker .md-content .md-nav .md-fwd").click(function() {
                        var mo = $(".md-datepicker .md-content .md-nav .md-fymonth").text().split(" ")[0];

                        mo = months[months.indexOf(mo) + 1]

                        if (mo == undefined) {
                            mo = "January"
                        }

                        if (mo == "January") {
                            year++
                        }

                        $(".md-datepicker .md-content .md-nav .md-fymonth").text(mo + " " + year);

                        var ca = $(this).parent().siblings(".md-calendar")
                        ca.empty()

                        var u = months.indexOf(mo) + 1
                        var s = new Date(year + "-" + u + "-01").getDay() * 46.8571429;

                        ca.append("<div class='md-date-spacer'></div>")
                        ca.children(".md-date-spacer").css({
                            width: s
                        })

                        var q = new Date(year, u, 0).getDate();

                        $(this).parent().parent().siblings(".md-bar").children(".md-year").text(year)

                        for (i = 0; i < q; i++) {
                            var m = i + 1;
                            ca.append("<div class='md-datecell'>" + m + "</div>");
                        }

                        $(".md-calendar .md-datecell").click(function() {
                            var v = $(this).text();

                            v = $(".md-datepicker .md-content .md-nav .md-fymonth").text().replace(" ", " " + v + " ")

                            dh(v, this)

                            $(this).siblings(".md-date-sel").remove();

                            $(this).parent().prepend("<div class='md-date-sel'></div>");

                            var l = $(this).position().left + 2;
                            var t = $(this).position().top - 1;

                            var c = $(this).parent().parent().siblings(".md-bar").css("background-color")

                            var g = $(this).siblings(".md-date-sel")
                            g.css({
                                left: l + 24,
                                top: t + 24,
                                backgroundColor: c
                            }).animate({
                                width: "42px",
                                height: "42px",
                                opacity: "0.8",
                                left: l,
                                top: t
                            })

                            $(this).animate({
                                color: textcolor(c)
                            }).siblings().animate({
                                color: "#212121"
                            })

                        })
                    })

                    $(".md-datepicker .md-content .md-nav .md-back").click(function() {
                        var mo = $(".md-datepicker .md-content .md-nav .md-fymonth").text().split(" ")[0]
                        mo = months[months.indexOf(mo) - 1]

                        if (mo == undefined) {
                            mo = "December"
                        }

                        if (mo == "December") {
                            year--
                        }

                        $(".md-datepicker .md-content .md-nav .md-fymonth").text(mo + " " + year)

                        var ca = $(this).parent().siblings(".md-calendar")
                        ca.empty();

                        var u = months.indexOf(mo) + 1
                        var s = new Date(year + "-" + u + "-01").getDay() * 46.8571429;

                        ca.append("<div class='md-date-spacer'></div>")
                        ca.children(".md-date-spacer").css({
                            width: s
                        })

                        $(this).parent().parent().siblings(".md-bar").children(".md-year").text(year)

                        var q = new Date(year, u, 0).getDate();

                        for (i = 0; i < q; i++) {
                            var m = i + 1;
                            ca.append("<div class='md-datecell'>" + m + "</div>")
                        }

                        $(".md-calendar .md-datecell").click(function() {
                            var v = $(this).text();

                            v = $(".md-datepicker .md-content .md-nav .md-fymonth").text().replace(" ", " " + v + " ")

                            dh(v, this)

                            $(this).siblings(".md-date-sel").remove();

                            $(this).parent().prepend("<div class='md-date-sel'></div>");

                            var l = $(this).position().left + 2;
                            var t = $(this).position().top - 1;

                            var c = $(this).parent().parent().siblings(".md-bar").css("background-color")

                            var g = $(this).siblings(".md-date-sel")
                            g.css({
                                left: l + 24,
                                top: t + 24,
                                backgroundColor: c
                            }).animate({
                                width: "42px",
                                height: "42px",
                                opacity: "0.8",
                                left: l,
                                top: t
                            })

                            $(this).animate({
                                color: textcolor(c)
                            }).siblings().animate({
                                color: "#212121"
                            })

                        })

                    });

                    $(".md-calendar .md-datecell").click(function() {
                        var v = $(this).text();

                        v = $(".md-datepicker .md-content .md-nav .md-fymonth").text().replace(" ", " " + v + " ")

                        dh(v, this)

                        $(this).siblings(".md-date-sel").remove();

                        $(this).parent().prepend("<div class='md-date-sel'></div>");

                        var l = $(this).position().left + 2;
                        var t = $(this).position().top - 1;

                        var c = $(this).parent().parent().siblings(".md-bar").css("background-color")

                        var g = $(this).siblings(".md-date-sel")
                        g.css({
                            left: l + 24,
                            top: t + 24,
                            backgroundColor: c
                        }).animate({
                            width: "42px",
                            height: "42px",
                            opacity: "0.8",
                            left: l,
                            top: t
                        })

                        $(this).animate({
                            color: textcolor(c)
                        }).siblings().animate({
                            color: "#212121"
                        })

                    })

                    var dh = function(d, p) {

                        p = $(p)

                        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var month = months.indexOf(d.split(" ")[0]) + 1
                        var date = d.split(" ")[1].split(" ")[0];

                        var year = d.split(" ")[2]

                        var day = new Date(year + "-" + month + "-" + date).toString().split(" ")

                        var fdate = day[0] + " " + day[1] + " " + day[2]

                        fdate = fdate.replace(/([^\s]+)/i, "$1, ")

                        p.parent().parent().siblings(".md-bar").children(".md-fdate").text(fdate);

                        var id = year + "/" + month + "/" + date
                    }

                })
            });
        })
		
        $("input[type='time']:not([md='false'])").each(function() {
            $(this).wrap("<span></span>");

            var c = $(this).attr("color")

            $(this).after("<button md-fab class='md-timepicker-init' color='" + c + "'>&#xE192;</button>")
        })

        $(".md-timepicker-init").click(function() {

            var v = $(this).siblings("input").attr("value");
            if (!v) {
                h = "12";
                m = "00";
                tm = 0
            } else {
                h = v.split(":")[0]
                m = v.split(":")[1].split(" ")[0]
                tm = v.split(" ")[1].toLowerCase();

                if (tm != "p.m.") {
                    tm = 0
                } else {
                    tm = 1
                }
            }

            var tmdvi = ""

            if (tm == 0) {
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
                color: "#000"
            })

            $(this).siblings(".md-popup").children(".md-clock.md-hour").children(".md-timethumb").each(function() {

                $(this).animateRotate(parseInt(h) * 30, 0);
                $(this).siblings(":contains('" + h + "')").css({
                    color: "#FFF"
                })

            })

            $(this).siblings(".md-popup").children(".md-clock.md-minute").children(".md-timethumb").each(function() {

                $(this).animateRotate(parseInt(m) * 6, 0);
                $(this).siblings(":contains('" + m + "')").css({
                    color: "#FFF"
                })

            })

            $(".md-popup .md-bar").each(function() {
                var c = $(this).css("background-color");

                if (textcolor(c) == "#FFF") {
                    Waves.attach(this, "waves-light")
                } else {
                    Waves.attach(this, "waves-dark")
                }

            })

            $(".md-popup.md-time .md-bar div").not(".md-timemode").click(function() {
                $(".md-time .md-clock.md-hour").toggle("scale", 200)
                $(".md-time .md-clock.md-minute").toggle("scale", 200)

                $(this).children().toggleClass("md-selected", 200);
            })

            $(".md-timemode").click(function() {
                $(this).children().toggleClass("md-selected", 200)
            })

            $(".md-timecell").click(function() {
                var h = $(this).parent().siblings(".md-bar").children("div").children(".md-hour")
                var m = $(this).parent().siblings(".md-bar").children("div").children(".md-minute")

                $(this).siblings().not(".md-timethumb").animate({
                    color: "#000"
                }, 200)

                $(this).animate({
                    color: "#FFF"
                }, 200)

                if (h.hasClass("md-selected")) {
                    h.text($(this).text());

                    var d = parseInt($(this).text()) * 30;

                    $(this).siblings(".md-timethumb").animateRotate(d, 0)

                } else {
                    m.text($(this).text())

                    var d = parseInt($(this).text()) * 6;

                    $(this).siblings(".md-timethumb").animateRotate(d, 0)

                }

            })
        }).each(function() {
            var c = $(this).attr("color");

            if (textcolor(c) == "#FFF") {
                Waves.attach(this, ["waves-circle", "waves-fab-light"])
            } else {
                Waves.attach(this, ["waves-circle", "waves-fab-dark"])
            }

        })

        $("button:not([md-flat]):not([md='false'])").each(function() {
            var d = $(this).attr("color");

            $(this).css("background-color", d)

            var t = textcolor(d);

            $(this).css({
                color: t
            })

            if (t == "#FFF") {
                Waves.attach(this, "waves-fab-light")
            } else {
                Waves.attach(this, "waves-fab-dark")
            }

        })
        $("button[md-flat]:not([md='false'])").each(function() {

            var d = $(this).attr("color");

            Waves.attachColor(this, d);

            $(this).css("color", d)
        })
        $("label:not([md='false'])").each(function() {
            var f = $(this).attr("for")
            var d = $("#" + f)

            if (d.is("input[type='checkbox']")) {
                var l = d.offset().left + 24;
                var t = d.offset().top - 2;
                $(this).css({
                    top: t,
                    left: l
                })
            } else if (d.is("input[type='radio']")) {
                var l = d.offset().left + 24;
                var t = d.offset().top - 2;
                $(this).css({
                    top: t,
                    left: l
                })
            } else if (d.is("input[type='switch']")) {
                var l = d.offset().left + 78;
                var t = d.offset().top + 28;
                $(this).css({
                    top: t,
                    left: l
                })
            }
        })

        $("input[type='checkbox']:not(:disabled):not([md='false'])").click(function() {
            $(this).next("div").fadeOut(100);

            if (!$(this).parent().parent("tr").length) {
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

			var uc = $(this).parent().parent().css("background-color");	
			
            $(this).after("<span class='md-rippleBubble'></span>")

            var c = $(this).attr("color");

            if (!c) {
                c = "#c1c1c1"
            }

            if (!$(this)[0].checked) {
                c = "#aaa";
            } else {

                $(this).after("<div style='user-select:none;'><i class='material-icons' style='font-weight:900;color:" + uc + ";cursor:pointer;font-size:18px'>&#xE5CA;</i></div>");

                $(this).next("div").css({
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    borderRadius: "2px",
                    margin: "0px",
                    backgroundColor: c,
                    top: dt,
                    left: dl,
                    display: "none",
                    textAlign: "center",
                    lineHeight: "18px",
                    verticalAlign: "middle",
                    fontSize: "2px"
                }).fadeIn(100).animate({
                    fontSize: "18px"
                })
            }


            $(this).next("div").click(function() {
                $(this).fadeOut(100, function() {
                    $(this).remove()
                });
                $(this).prev().click()
            });

            $(".md-rippleBubble").css({
                left: l + "px",
                top: t + "px",
                backgroundColor: c
            })


            setTimeout(function() {
                $(".md-rippleBubble").remove();
            }, 350)
        })
        $("input[type='checkbox']:not([md='false'])").each(function() {
            $(this).wrap("<span style='display:inline-block'></span>")
            var l = $(this).offset().left + 7
            var t = $(this).offset().top + 7

            var dl = $(this).offset().left
            var dt = $(this).offset().top

            var c = $(this).attr("color");

            if (!c) {
                c = "#c1c1c1"
            }

			var uc = $(this).parent().parent().css("background-color");
			
            if (!$(this)[0].checked) {
                c = "#aaa";
            } else {

                $(this).after("<div style='user-select:none;'><i class='material-icons' style='font-weight:900;color:" + uc + ";cursor:pointer;font-size:18px'>&#xE5CA;</i></div>");

                $(this).next("div").css({
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    borderRadius: "2px",
                    margin: "0px",
                    backgroundColor: c,
                    top: dt,
                    left: dl,
                    display: "none",
                    textAlign: "center",
                    lineHeight: "18px",
                    verticalAlign: "middle",
                    fontSize: "2px"
                }).fadeIn(100).animate({
                    fontSize: "18px"
                })
            }

            $(this).next("div").click(function() {
                $(this).fadeOut(100, function() {
                    $(this).remove()
                });
                $(this).prev().click()
            });

            $(".md-rippleBubble").css({
                left: l + "px",
                top: t + "px",
                backgroundColor: c
            })

            setTimeout(function() {
                $(".md-rippleBubble").remove();
            }, 350)
        })
        $("input[type='radio']:not([md-fly='true']):not([md='false'])").click(function() {

            $(this).next("div").fadeOut(100)

            var l = $(this).offset().left + 7
            var t = $(this).offset().top + 7

            var dl = $(this).offset().left
            var dt = $(this).offset().top

            $(this).after("<span class='md-rippleBubble'></span>")

            var n = $(this).attr("name")
            n = $("input[name='" + n + "']")
            n.next("div").css({
                width: "0px",
                height: "0px",
                left: l + 2,
                top: t + 2
            }, 500).prev().animate({
                borderColor: "#c1c1c1"
            }, 200)


            var c = $(this).attr("color");

            if (!c) {
                c = "#c1c1c1"
            }

            if (!$(this)[0].checked) {
                c = "#aaa";
            } else {

                $(this).after("<div style='user-select:none;'></div>");

                $(this).next("div").css({
                    position: "absolute",

                    width: "4px",
                    height: "4px",
                    top: dt + 7,
                    left: dl + 7,

                    borderRadius: "50%",
                    margin: "0px",
                    backgroundColor: c,
                    textAlign: "center",
                    lineHeight: "18px",
                    verticalAlign: "middle",
                    fontSize: "2px",
                }).animate({
                    width: "10px",
                    height: "10px",
                    left: dl + 4,
                    top: dt + 4
                }, 200).prev().animate({
                    borderColor: c
                }, 200)

            }


            $(this).next("div").click(function() {
                $(this).fadeOut(100, function() {
                    $(this).remove()
                });
                $(this).prev().click()
            });

            $(".md-rippleBubble").css({
                left: l + "px",
                top: t + "px",
                backgroundColor: c
            })


            setTimeout(function() {
                $(".md-rippleBubble").remove();
            }, 350)
        });

        $("input[type='radio']:not([md='false'])").click(function() {

            $(this).next("div").fadeOut(100)

            var l = $(this).offset().left + 7
            var t = $(this).offset().top + 7

            var dl = $(this).offset().left
            var dt = $(this).offset().top

            $(this).after("<span class='md-rippleBubble'></span>")

            var n = $(this).attr("name")
            n = $("input[name='" + n + "']")
            n.next("div").animate({
                width: "0px",
                height: "0px",
                left: l + 2,
                top: t + 2
            }, 500).prev().animate({
                borderColor: "#c1c1c1"
            }, 200)


            var c = $(this).attr("color");

            if (!c) {
                c = "#c1c1c1"
            }

            if (!$(this)[0].checked) {
                c = "#aaa";
            } else {

                $(this).after("<div style='user-select:none;'></div>");

                $(this).next("div").css({
                    position: "absolute",

                    width: "4px",
                    height: "4px",
                    top: dt + 7,
                    left: dl + 7,

                    borderRadius: "50%",
                    margin: "0px",
                    backgroundColor: c,
                    textAlign: "center",
                    lineHeight: "18px",
                    verticalAlign: "middle",
                    fontSize: "2px",
                }).animate({
                    width: "10px",
                    height: "10px",
                    left: dl + 4,
                    top: dt + 4
                }, 200).prev().animate({
                    borderColor: c
                }, 200)

            }


            $(this).next("div").click(function() {
                $(this).fadeOut(100, function() {
                    $(this).remove()
                });
                $(this).prev().click()
            });

            $(".md-rippleBubble").css({
                left: l + "px",
                top: t + "px",
                backgroundColor: c
            })


            setTimeout(function() {
                $(".md-rippleBubble").remove();
            }, 350)
        });

        $("input[type='switch']:not([md='false'])").each(function() {
            var c = $(this).attr("color");

            var f = $(this).attr("checked")
            if (f) {
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
            var light = mdMax(r + k, 255) + "," + mdMax(g + k, 255) + "," + mdMax(b + k, 255)
            light = "rgb(" + light + ")"

            var t = thumb.offset().top + 100;
            var l = thumb.offset().left;


            var v = ($(this).attr("switched") == "true");

            if (v || $(this).attr("checked")) {
                thumb.animate({
                    backgroundColor: c,
                    left: l + 28
                }, 150)
                track.animate({
                    backgroundColor: light
                }, 150)
            } else {
                thumb.animate({
                    backgroundColor: "#fafafa"
                }, 150)
                track.animate({
                    backgroundColor: "#ddd"
                }, 150)
            }
        })
        $(".md-switch-w").click(function() {
            var e = $(this).children("input");
            var v = (e.attr("switched") == "true")
            var c = e.attr("color");
            var q = e.attr("disabled");

            var thumb = $(this).children(".md-switch")
            var track = $(this).children(".md-switch-track")

            var l = track.offset().left
            if (!q) {
                if (!v) {
                    e.attr("switched", "true");

                    l += 28

                    thumb.animate({
                        left: l,
                        backgroundColor: c
                    }, 150);

                    var r = hexToR(c);
                    var g = hexToG(c);
                    var b = hexToB(c);
                    var c = "rgb(" + r + "," + g + "," + b + ")"

                    var k = 60;
                    var light = mdMax(r + k, 255) + "," + mdMax(g + k, 255) + "," + mdMax(b + k, 255)
                    light = "rgb(" + light + ")"

                    track.animate({
                        backgroundColor: light
                    }, 150)
                } else {
                    e.attr("switched", "undefined");

                    thumb.animate({
                        left: l,
                        backgroundColor: "#fafafa"
                    }, 150);

                    track.animate({
                        backgroundColor: "#ddd"
                    }, 150)
                }
            }
            return false;
            thumb.promise().done(function() {
                return true
            });
        })

        $("meter, progress").each(function() {
            var e = $(this).attr("color");
            if (!e) e = $(this).css("background-color")

            var c = hexToRgb(e);
            var r = c.r,
                g = c.g,
                b = c.b

            var c = "rgba(" + r + "," + g + "," + b + ",.2)"

            var w = $(this).width();
            var v = $(this).val() * w
            var z = $(this).css("z-index")

            if (z == "auto") {
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
                width: w + "px",
                backgroundColor: c
            })

            front.css({
                width: v + "px",
                zIndex: z,
                backgroundColor: e
            })
        })
        $("input[type='text']:not([md='false'])").each(function() {
            $(this).wrap("<span></span>")

            var c = $(this).attr("color")

            var p = $(this).attr("placeholder");
            $(this).attr('placeholder', "");
            
            if (typeof p == "undefined") {
                p = " "
            }
           

            $(this).after("<span class='md-input md-placeholder'>" + p + "</span>");
           

            var x = $(this).offset().left;
            var y = $(this).offset().top;

            $(this).siblings(".md-input.md-placeholder").css({
                left: x,
                top: y
            }).click(function() {
                $(this).siblings("input").click()
                $(this).siblings("input").focus()
            })

        }).click(function(e) {

            var c = $(this).attr("color")
            var x = e.pageX;
            var t = $(this).offset().top + 30;
            var d = $(this).offset().left
            var w = $(this).width();

            $(this).siblings(".md-bar").remove();

            $(this).after("<div class='md-input md-bar'></div>");

            var q = $(this).siblings(".md-bar");

            q.css({
                left: x,
                top: t,
                backgroundColor: c
            }).animate({
                left: d,
                width: w
            }, 200)

            var pc = $(this).siblings(".md-input.md-placeholder");

            var t = $(this).offset().top - 22

            if ($(this).val().length == 0) {

                pc.animate({
                    color: c,
                    top: t,
                    fontSize: "14px"
                }, 200)
            } else {
                pc.animate({
                    color: c
                }, 200)
            }

        }).blur(function() {
            var l = $(this).width() / 2 + $(this).offset().left
            $(this).siblings(".md-bar").animate({
                width: "0px",
                left: l
            }, 200)

            var pc = $(this).siblings(".md-input.md-placeholder");
            var t = $(this).offset().top

            if ($(this).val().length == 0) {

                pc.animate({
                    color: "#c1c1c1",
                    top: t,
                    fontSize: "18px"
                }, 200)
            } else {
                pc.animate({
                    color: "#c1c1c1"
                }, 200)
            }
        });
		
        $('input[type="color"]:not([md="false"])').each(function() {
            $(this).wrap("<span></span>");

            $(this).after("<div class='md-coloropen'></div>")
        }).change(function() {
            var c = $(this).val()
            $(this).siblings(".md-coloropen").css("background-color", c)
        })

        $(".md-coloropen").click(function() {
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

            $(".md-colorblob:not(.md-other)").each(function() {
                var c = $(this).attr("color");
                c = getMDColor(c);
                $(this).css({
                    backgroundColor: c
                })
            }).click(function() {

                var k = $(".md-popup.md-colorpicker .md-content .md-check");

                var q = $(this).siblings();

                q.removeAttr("checked")

                $(this).attr("checked", "true")

                var l = $(this).position().left + screen.dpi * 0.8
                var t = $(this).position().top + screen.dpi * 0.925

                k.fadeOut(200, function() {
                    $(this).css({
                        left: l,
                        top: t
                    }).fadeIn(200)
                });
            })
        })
        $("[md-linear-loader]").each(function() {

        })
        $("[md-linear-loader][md-indeterminate]").each(function() {
            $(this).wrap("<span></span>");

            var c = $(this).attr("color");

            $(this).append("<div class='md-linear-loader-bar md-indeterminate'></div>");

            var q = $(this).children(".md-linear-loader-bar.md-indeterminate")

            q.css({
                backgroundColor: c
            })
        })
        $("[md-linear-loader][md-query]").each(function() {
            $(this).wrap("<span></span>");

            var c = $(this).attr("color");

            $(this).append("<div class='md-linear-loader-bar md-query'></div>");

            var q = $(this).children(".md-linear-loader-bar.md-query")

            q.css({
                backgroundColor: c
            })
        })
        $("[md-linear-loader][md-determinate]").each(function() {
            $(this).wrap("<span></span>");

            var c = $(this).attr("color");
            var t = parseInt($(this).attr("time"));
            if (!t) {
                t = 2000
            }

            $(this).append("<div class='md-linear-loader-bar md-determinate'></div>");

            var q = $(this).children(".md-linear-loader-bar.md-determinate")

            q.css({
                backgroundColor: c,
                left: "0px",
                width: "0px",
                height: "4px",
                bottom: "0px"
            }).animate({
                width: "100%"
            }, t).delay(500).animate({
                width: "0%",
                left: "100%"
            }, 1000)

            $(this).click(function() {
                q.css({
                    backgroundColor: c,
                    left: "0px",
                    width: "0px",
                    height: "4px",
                    bottom: "0px"
                }).animate({
                    width: "100%"
                }, t).delay(500).animate({
                    width: "0%",
                    left: "100%"
                }, 1000)
            })
        })
        $("[tooltip]").each(function() {
            var v = $(this).attr("tooltip");

            var r = "md-tooltip-" + Math.random().toString().split(".")[1];
            $(this).addClass(r);

            $(this).hover(function() {
                $("body").append("<div class='md-tooltip " + r + "'>" + v + "</div>");

                var t = $(".md-tooltip." + r);

                var ce = ($(this).width() - t.width()) / 2

                var x = $(this).offset().left - ce + 3
                var y = $(this).offset().top + $(this).height() + 8

                if (x < 0) {
                    x = 8
                }
                if (x > screen.width - t.width()) {
                    x = screen.width - t.width() - 20
                }

                t.css({
                    top: y,
                    left: x
                })

                t.fadeIn(200);



            }, function() {
                var t = $(".md-tooltip." + r);

                t.fadeOut(200, function() {

                    t.remove();

                })
            })
        });

        $("input[type='range']:not([md='false'])").each(function() {

            var c = $(this).attr("color")

            var v = $(this).attr("value")
            if (!v) {
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

            var bl = (p.offset().left + (p.width() * v)) / 10 - ball.width() / 2 - 1
            var r = v * 100 + "%";

            ball.css({
                backgroundColor: c,
                left: r
            })

            before.css({
                backgroundColor: c,
                width: r
            })
            track.css({
                width: w - 2
            })
            p.css({
                width: w
            })
            var v

            var qh = $(this).offset().left

            var bc = function() {

                qh = qh * .85 - 6

                p.children("input").val(qh)
                p.children("input").attr("value", qh)
            }

            ball.on("drag", function(e) {

                var h = $(this).offset().left

                qh = h

                before.css({
                    width: h
                })

                bc()
            })

            p.click(function(e) {

                v = e.pageX - $(this).offset().left

                qh = v

                ball.animate({
                    left: e.pageX - 12
                }, 200);
                before.animate({
                    width: v
                }, 200);

                bc()
            })

        });

        $("a:not([md='false']):not([href*='#'])").each(function() {

            var c = $(this).attr("color");

            if (!c) {
                c = $(this).css("color")
            }

            $(this).css({
                color: c
            });
            var r = Math.random().toString().split(".")[1];
            $(this).after("<div class='md-a-underline md-" + r + "'></div>")
            var ul = $(this).next(".md-a-underline.md-" + r + "")
            var t = $(this).offset().top + parseInt($(this).css("font-size")) * 1.2
            var l = $(this).offset().left;
            var r = $(this).offset().right
            var w = $(this).width();
            var ol = l + w / 2

            $(this).hover(function() {
                ul.css({
                    left: ol,
                    top: t,
                    background: c
                }).animate({
                    width: w,
                    left: l
                }, 200)
            }, function() {
                ul.animate({
                    width: "0px",
                    left: ol
                }, 200)
            })
        });
		$("a[href*='#']:not([md='false']):not([href='#'])").each(function(){
			var c = $(this).attr("color");
			if(!c){
				c = $(this).css("color")
			}
			
			$(this).css({
				borderColor:c,
				color:c
			})
			
		})
	
        $("*").contextmenu(function(e) {
            var t = $(e.target);
            if (typeof $("body").attr("md-context") != "undefined") {
                e.preventDefault();
                if (t.is($("*").not("input[type='text'],textarea,iframe,img,a[href]"))) {
                    var dvi = "<div class='md-ctx md-default'><div class='md-option md-back'>Back<div>Alt + Left Arrow</div></div><div class='md-option md-fwd'>Forward<div>Alt + Right Arrow</div></div><div class='md-option md-reload'>Reload<div>Ctrl + R</div></div><hr><div class='md-option md-ds'>Save As<div>Ctrl + S</div></div><div class='md-option md-print'>Print<div>Ctrl + P</div></div><hr><div class='md-option md-vs'>View Source<div>Ctrl + U</div></div><div class='md-option md-ds'>Developer Tools<div>Ctrl + Shift + I</div></div></div>"
                } else if (t.is($("input[type='text'],textarea"))) {
                    var dvi = "<div class='md-ctx md-textarea'><div class='md-option md-undo'>Undo<div>Ctrl + Z</div></div><div class='md-option md-redo'>Redo<div>Ctrl + Y</div></div><hr><div class='md-option md-copy'>Copy<div>Ctrl + C</div></div><div class='md-option md-cut'>Cut<div>Ctrl + X</div></div><div class='md-option md-paste'>Paste<div>Ctrl + V</div></div><div class='md-option md-ds'>Paste without formatting<div>Ctrl + Shift + V</div></div><div class='md-option md-selecta'>Select All<div>Ctrl + A</div></div><div class='md-option md-del'>Delete<div>Backspace</div></div><hr><div class='md-option md-gsearch'>Google Search</div><hr><div class='md-option md-ds'>Developer Tools<div>Ctrl + Shift + I</div></div></div>";
                } else if (t.is($("iframe"))) {
                    var dvi = ""
                } else if (t.is($("img"))) {
                    var dvi = "<div class='md-ctx md-img'><div class='md-option md-openimginnewtab'>Open Image in new Tab</div><div class='md-option md-saveimg'>Save Image</div><div class='md-option md-copyimg'>Copy Image</div><div class='md-option md-copyimgadr'>Copy Image URL</div><div class='md-option md-gsearchimg'>Search Google for this Image</div><hr><div class='md-option md-ds'>Developer Tools<div>Ctrl + Shift + I</div></div></div>"
                } else if (t.is($("a[href]"))) {
                    var dvi = "<div class='md-ctx md-hlink'><div class='md-option md-openlinkinnewtab'>Open Link in new Tab</div><div class='md-option md-openlinkinnewwin'>Open Link in new Window</div><hr><div class='md-option md-copylinkadr'>Copy Link URL</div><hr><div class='md-option md-ds'>Developer Tools<div>Ctrl + Shift + I</div></div></div>"
                }

                $(".md-ctx").remove()

                $("body").append(dvi);

                var h = $(".md-ctx");
                h.fadeIn(200).noclick(function() {
                    h.fadeOut(200, function() {
                        h.remove();
                    })
                })
                ctx(t)
            }
        })
		$('a[href*="#"]:not([href="#"])').click(function() {
			var mdclass = $("body")
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					mdclass.animate({
						scrollTop: target.offset().top - 92	
					}, 1000);
					return false;
				}
				if($(this).attr("href") == "#top"){
					$("body").animate({
						scrollTop: "0"
					}, 1000);
				}
			}
		})
		
		$("h1:not([md='false']),h2:not([md='false']),h3:not([md='false']),h4:not([md='false']),h5:not([md='false']),h6:not([md='false'])").each(function(){
			var c = $(this).attr("color")
			$(this).css({
				color:c
			})
		})
		
		$(".md-input.md-placeholder").click().siblings("input").blur();
    })
}