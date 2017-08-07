var head_wechat_t=setInterval(function () {
    $('.head_wechat').toggleClass('active');
},6000);


$.get('/zx2/js/teacher_data.js',function (data) {
    eval(data);
    //center_wechat_box
    var index = Math.floor(Math.random() * tips.length);
    var cur_tips = tips[index];
    $('.center_wechat_box .wechat_num').text(cur_tips.wechat).attr('href','tel:'+cur_tips.wechat);
    $('.center_wechat_box .teacher_name').text(cur_tips.name);
    $('.wechat_icon').click(function() {
        $('.center_wechat_box').toggleClass('active');
    });
    $('.head_wechat .icon').click(function() {
        $('.center_wechat_box').toggleClass('active');
    });
    $('.center_wechat_box .close').click(function() {
        $('.center_wechat_box').toggleClass('active');
    });
});
