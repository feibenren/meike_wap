// JavaScript Document
document.writeln("<style>");
document.writeln(".ly-section1{padding:0;}#demo{height:40px; overflow:hidden;line-height:40px;}");
document.writeln("#demo img{display:inline-block;margin:7px 0 0 10px;float:left;}");
document.writeln("#demo indemo{height:40px;width:100%;display:inline-block;width:90%;float:right;}");
document.writeln("#demo indemo font{white-space: nowrap;}");
document.writeln("#demo i{font-style:inherit;color:red; font-weight:bold;}");
document.writeln(".gd{max-width:640px;background:#fff url(images/zx_03.gif) no-repeat 5px center;height:2.5rem;position:fixed;top:40px;z-index:9999;}");
document.writeln("#demo{overflow:hidden;width:90%;height:2.5rem;margin-left:7%;line-height:2.5rem;color:#ec0000;font-size:1.5rem;z-index:100;}");
document.writeln("#indemo {float: left;width: 800%;}");
document.writeln("#demo1 {float: left;}");
document.writeln("#demo2 {float: left;}");
document.writeln("</style>");
document.writeln("<div class=\'gd\'>");
document.writeln("<div id=\'demo\'>");
document.writeln("    <div id=\'indemo\'>");
document.writeln("        <div id=\'demo1\'>");
document.writeln("           <font size=+1 style=\'color:#000; \'><span style='background:red;color:#fff;'>&nbsp;通告：</span>&nbsp; 每月6号.16号.26号准时由韩国最顶尖的半永久明星院长亲自授课，提前预约报名可享受路费补贴   现场报名不享受任何优惠和补贴，不接受开课临时空降 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>");
document.writeln("        </div>");
document.writeln("        <div id=\'demo2\'>");
document.writeln("           <font size=+1 style=\'color:#000; \'><span style='background:red;color:#fff;'>&nbsp;通告：</span>&nbsp; 每月6号.16号.26号准时由韩国最顶尖的半永久明星院长亲自授课，提前预约报名可享受路费补贴   现场报名不享受任何优惠和补贴，不接受开课临时空降&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("</div>");

var speed=20; //数字越大速度越慢
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
function Marquee(){
    if(tab2.offsetWidth-tab.scrollLeft<=0)
        tab.scrollLeft-=tab1.offsetWidth
    else{
        tab.scrollLeft++;
    }
}
var MyMar=setInterval(Marquee,speed);
tab.onmouseover=function() {clearInterval(MyMar)};
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};