function GetQueryString($name){
	var $index=document.referrer.indexOf($name+"="),$e='';
	if($index>1){
		$e=document.referrer.substring($index+$name.length+1);
		if(($index=$e.indexOf("&"))>0){
			$e=$e.substring(0,$index);

		}

	}

	return $e;

}

// 调用方法
var $wd=GetQueryString("wd");

if($wd&&$wd.length>0){}else{$wd=GetQueryString("word")}

if($wd&&$wd.length>0){

	$wd=decodeURIComponent($wd);

	$line='关于【“'+$wd+'”】的问题,很荣幸为您解答疑问！';

}else{

	$line=' 您好，这里是韩国美客国际高端半永久&皮肤管理培训学院,请问有什么可以帮到您？';

}

$('#keyword').html($wd);
$('.ly-section1 .line:first .left div').html("<i></i>"+$line);
/*$(".ly-footer div:last a").on("click",function(){

 openZoosUrl('chatwin','&e=ly--'+($wd||'')+"-"+decodeURIComponent($(".ly-footer textarea").val()));

 });*/

setTimeout(function(){$('.ly-section1 .line:first').fadeIn(100)},300);

setTimeout(function(){$('.ly-section1 .line:nth-of-type(2)').fadeIn(200)},2000);

setTimeout(function(){$('.ly-section1 .line:last').fadeIn(200)},4000);

$(".ly-header nav a:eq(0)").on("click").on("click",function(){
	window.open('http://m.baidu.com.yycsyy.com/s2.php?h=181&word=&sa=tb&ts=2717263&t_kt=43&ms=1');
	//openZoosUrl('chatwin','&e=ly--'+($wd||'')+"-"+decodeURIComponent($(".ly-footer textarea").val()));

})
$(".ly-header nav a:eq(1)").on("click").on("click",function(){
	window.open('http://m.baidu.com.yycsyy.com/s2.php?h=181&word=&sa=tb&ts=2717263&t_kt=43&ms=1');
	//openZoosUrl('chatwin','&e=ly--'+($wd||'')+"-"+decodeURIComponent($(".ly-footer textarea").val()));

})



setTimeout(function(){
	$(".ly-section1 .line:last .left div img").addClass("ly-animation-bell").addClass("on");
},6000);
setTimeout(sendmess2,30000);


var clickNumber = 0;
function sendmess() {
	if(document.getElementById('keyword').value == ''){return false;}
	if (clickNumber == 0) {
		document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="right"> <img src="images/header2.jpg" width="40px"><div> <i></i> ' + document.getElementById('keyword').value + '</div></div><div class="ly-clear"></div></div>';
		setTimeout(function(){document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="left"> <a href="xiangxi2.htm?wxid='+cur_tips.wechat+'"><img src="images/header.png" width="40px"></a><div> <i></i> 您好，请简单描述下您要咨询问题！<br>收到请回复以下序列号:<br>1.课程内容<br>2.学习费用<br>3.学习时间<br>4.开课时间<br>5.免费复训<br>6.在校食宿<br>7.校区地址<br>8.其他问题</div></div><div class="ly-clear"></div></div>';window.scrollTo(0,document.body.scrollHeight);},2000);

		document.getElementById('keyword').value ='';
	}else if(clickNumber == 1){
		document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="right"> <img src="images/header2.jpg" width="40px"><div> <i></i> ' + document.getElementById('keyword').value + '</div></div><div class="ly-clear"></div></div>';
		setTimeout(function(){document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="left"> <a href="xiangxi2.htm?wxid='+cur_tips.wechat+'"><img src="images/header.png" width="40px"></a><div> <i></i> 您好，由于目前咨询人数过多，建议您添加老师个人微信号：<span style="color:#fff;background:#f00;padding:0 7px;font-size:18px;font-weight: bold;">' + cur_tips.wechat + '</span>（长按微信号复制添加），' + cur_tips.name + '会亲自一对一回复您。 </div></div><div class="ly-clear"></div></div>';window.scrollTo(0,document.body.scrollHeight);},2000);

		document.getElementById('keyword').value ='';
	} else {
		document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="right"> <img src="images/header2.jpg" width="40px"><div> <i></i> ' + document.getElementById('keyword').value + '</div></div><div class="ly-clear"></div></div>';
		setTimeout(function(){document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="left"> <a href="xiangxi2.htm?wxid='+cur_tips.wechat+'"><img src="images/header.png" width="40px"></a><div> <i></i> 优先处理！请加' + cur_tips.name + '个人微信号：<span style="color:#fff;background:#f00;padding:0 7px;font-size:18px;font-weight: bold;">' + cur_tips.wechat + '</span>（长按微信号复制添加）。 </div></div><div class="ly-clear"></div></div>';window.scrollTo(0,document.body.scrollHeight);},2000);
		document.getElementById('keyword').value ='';
	}
	clickNumber++;
}
function sendmess2(){
	if (clickNumber == 0) {
		document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="left"> <a href="xiangxi2.htm?wxid='+cur_tips.wechat+'"><img src="images/header.png" width="40px"></a><div> <i></i> 你好，我是谢老师 有什么问题请讲。如果打字不方便也可以直接加我本人的微信号：<span style="color:#fff;background:#f00;padding:0 7px;font-size:18px;font-weight: bold;">' + cur_tips.wechat + '</span> </div></div><div class="ly-clear"></div></div>';
		window.scrollTo(0,document.body.scrollHeight);
	}
}

//document.writeln("<script language=\"javascript\" src=\"http://swt.lzhxyyh.com/JS/LsJS.aspx?siteid=MHE46288657&lng=cn&float=0\"></script>");