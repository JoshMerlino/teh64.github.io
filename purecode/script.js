var uri = "ace"
var editor = ace.edit("editor");
editor.setTheme(uri + "/theme/solarized_dark");
editor.session.setMode(uri + "/mode/txt");
editor.setShowPrintMargin(false);

$("select#language").change(function(){
	editor.session.setMode(uri + "/mode/" + $(this).val().toLowerCase());
});
$("div[dropdown]").hover(function(){
	$(this).animate({
		height:"651.5%"
	},170);
	$(this).children().fadeIn(170)
})
$("div[dropdown]").mouseleave(function(){
	$(this).animate({
		height:"22px"
	},230);
	$(this).children("div").fadeOut(230)
})
$("div[dropdown] > div").click(function(){
	var n = $(this).attr("langData")
	$("#spanDropdownCLang").html(n);
	editor.session.setMode(uri + "/mode/" + n.toLowerCase())
})
$("input#mfile").click(function(e){
	e.preventDefault();
	editor.focus()
})
var fname;
var ftype;
$("input#mfile").change(function(e){
    var input = e.target;
    var reader = new FileReader();
    reader.onload = function(){
		editor.setValue("", 1)
		editor.setValue(reader.result, 1)
    };
    reader.readAsText(input.files[0]);
	var fnameS = $("#mfile").val().split("\\")
	fname = fnameS[fnameS.length-1];
	
	var ftypeS = fname.split(".")
	ftype = ftypeS[ftypeS.length-1];
	ftype = eval("language." + ftype)
	editor.session.setMode(uri + "/mode/" + ftype.toLowerCase());
	$("#spanDropdownCLang").html(ftype);
});
$("html").on("dragover", function(e){
	$("#mfile").css({
		width:"100%",
		height:"100%"
	})
	$(".ace_content").css({
		backgroundColor: "#003646"
	})
})
$("html").on("drop", function(e){
	$("#mfile").css({
		width:"0%",
		height:"0%"
	})
	$(".ace_content").css({
		backgroundColor: "#002a36"
	})
})
$("html").on("dragleave", function(e){
	$(".ace_content").css({
		backgroundColor: "#002a36"
	})
})
function flydown(p,c){
	$(p).animate({
		marginTop: "25%"
	},750, function(){
		
		$(p).animate({
			marginTop: "50%"
		},170, function(){
			
			$(p).css({
				marginTop: "0.5%",
				display:"none"
			})
			$(p).fadeIn(250);
			c
		})
	})
}
function downloadAction(p){
	flydown(p, download(editor.getValue(),fname))
}
function fileAction(p){
	$("div.banner.files").animate({
		width:"33.3%"
	}, 200)
}
window.setInterval(function(){
	var xml = $("#spanDropdownCLang").html() + " File" + "<span>__________</span>" +
	"Length : " + editor.getValue().split('').length + "<span>__________</span>"
	$("div.banner.bottom").html(xml)
},50)
