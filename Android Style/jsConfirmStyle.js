ie5=(document.getElementById&&document.all&&document.styleSheets)?1:0;
nn6=(document.getElementById&&!document.all)?1:0;
 
xConfirmStart=800;
yConfirmStart=100;
 
if(ie5||nn6) {
    if(ie5) cs=2,th=30;
    else cs=0,th=20;
    document.write(
        "<div id='jsconfirm'>"+
            "<table>"+
                "<tr><td id='jsconfirmtitle'></td></tr>"+
                "<tr><td id='jsconfirmcontent'></td></tr>"+
                "<tr><td id='jsconfirmbuttons'>"+
                    "<input id='jsconfirmleft' type='button' value='' onclick='nothing()' onfocus='if(this.blur)this.blur()'><input id='jsconfirmright' type='button' value='' onclick='rightJsConfirm()' onfocus='if(this.blur)this.blur()'>"+
                "</td></tr>"+
            "</table>"+
        "</div>"
    );
}
 
document.write("<div id='jsconfirmfade'></div>");
function rightJsConfirm() {
    document.getElementById('jsconfirm').style.top=-1000;
    eval(rightJsConfirmUri);
}
function nothing(){
	document.getElementById('jsconfirm').style.top=-1000;
}
function confirmAlternative() {
    if(confirm("Scipt requieres a better browser!")) document.location.href="http://www.mozilla.org";
}
 
leftJsConfirmUri = '';
rightJsConfirmUri = '';
 
/**
 * Show the message/confirm box
 */
var alert = function(confirmtitle,confirmcontent,confirmLocate)  {
    document.getElementById("jsconfirmtitle").innerHTML=confirmtitle;
    document.getElementById("jsconfirmcontent").innerHTML=confirmcontent;
    document.getElementById("jsconfirmleft").value="Cancel";
    document.getElementById("jsconfirmright").value="OK";
    rightJsConfirmUri=confirmLocate;
    xConfirm=xConfirmStart, yConfirm=yConfirmStart;
    if(ie5) {
        document.getElementById("jsconfirm").style.left='25%';
        document.getElementById("jsconfirm").style.top='35%';
    }
    else if(nn6) {
        document.getElementById("jsconfirm").style.top='25%';
        document.getElementById("jsconfirm").style.left='35%';
    }
    else confirmAlternative();
}