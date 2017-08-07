$(function () {
  /*$('.lazy').each(function () {
   var old_src=$(this).attr('src');
   $(this).attr({
   'src':'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
   'data-src':old_src,
   'onload':'lzld(this)'
   });
   });*/

});

var swiper = new Swiper('.swiper-container-teacher', {
  pagination: '.swiper-pagination',
  paginationClickable: true
});
$('.center_ad').toggleClass('active');
$('.center_ad .close').click(function () {
  $('.center_ad').toggleClass('active');
  $('.foot_dialog').css({bottom:$('.footer').height()});
  setTimeout(function () {
    $('.center_ad').toggleClass('active');
  },15000);
});

var head_wechat_t=setInterval(function () {
  $('.head_wechat').toggleClass('active');
},6000);

//foot_dialog
var foot_dialog_t;
var dialog_t;
$('.foot_dialog .close').click(function () {
  $('.foot_dialog').css({bottom:'-100%'});
  foot_dialog_t = setTimeout(function () {
    $('.foot_dialog').css({bottom:$('.footer').height()});
  }, 40000);
});
dialog_t = setTimeout(function () {
  $('.dialog:nth-of-type(2)').css({
    display: 'flex'
  });
}, 4000);

$.get('zx/js/teacher_data.js',function (data) {
  eval(data);
  //center_wechat_box
  var index = Math.floor(Math.random() * tips.length);
  var cur_tips = tips[index];
  $('.center_wechat_box .wechat_num').text(cur_tips.wechat).attr('href','tel:'+cur_tips.wechat);
  $('.center_wechat_box .teacher_name').text(cur_tips.name);
  $('.wechat_icon').click(function() {
    $('.center_wechat_box').toggleClass('active');
  });
  $('.center_wechat_box .close').click(function() {
    $('.center_wechat_box').toggleClass('active');
  });
});




var course=new Vue({
  el:'#course',
  data:{
    btns:[
      {title:'韩式半永久课程',active:true},
      {title:'皮肤管理课程',active:false}
    ],
    courses:[]
  },
  created:function () {
    this.get_course_byj();
  },
  methods:{
    change:function (key) {
      for(var i=0;i<this.btns.length;i++){
        this.btns[i].active=false;
      }
      this.btns[key].active=true;
      if(key){
        this.get_course_pfgl();
      }else{
        this.get_course_byj();
      }
    },
    get_course_byj:function () { //每个月6，16,26开课
      var cur_date=new Date();
      var date={y:cur_date.getFullYear(),m:cur_date.getMonth(),d:cur_date.getDate()};
      var res_arr=[];
      function get_next_date(y, m,d) {
        if(d<16){
          var res={y:y,m:m,d:16};
        }else if(d>=16 && d<26){
          var res={y:y,m:m,d:26};
        }else{
          var res={y:y,m:m+1,d:6};
        }
        if(res.m>=11){
          res.y++;
          res.m=0;
          res.d=6;
        }
        date=res;
        return res;
      }
      for(var i=0;i<4;i++){
        var time=get_next_date(date.y,date.m,date.d);
        var item={start_time:time.y+'-'+(time.m+1)+'-'+time.d,'name':'韩式半永久国内开学'};
        res_arr.push(item);
      }
      this.courses=res_arr;
    },
    get_course_pfgl:function () {//每个月22号
      var cur_date=new Date();
      var date={y:cur_date.getFullYear(),m:cur_date.getMonth(),d:cur_date.getDate()};
      // console.log(date);
      var res_arr=[];
      function get_next_date(y, m,d) {
        if(m<=11){
          if(d<22){
            var res= {y:y,m:m,d:22};
          }else{
            var res= {y:y,m:m+1,d:22};
          }
        }else{
          if(d<22){
            var res= {y:y,m:m,d:22};
          }else{
            var res= {y:y+1,m:0,d:22};
          }
        }
        date=res;
        return res;
      }
      for(var i=0;i<4;i++){
        var time=get_next_date(date.y,date.m,date.d);
        var item={start_time:time.y+'-'+(time.m+1)+'-'+time.d,'name':'韩式半永久国内开学'};
        res_arr.push(item);
      }
      this.courses=res_arr;
    }
  }
})
