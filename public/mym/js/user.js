
$(function(){
    
$.ajax({
    type:'get',
    url:'/user/queryUserMessage',
    // 如果未登录阻止user页面继续渲染
    async:false,
    success:function(res){
        if(res.error == 400){
            location.href = "login.html";
            return;
        }else{
              // 显示会员信息
            $('#user').html(template('userTpl',res));
        }
        console.log(res);
    }
})
    // 判断用户是否登录

    
    // 退出登录
    $('#logout').on('tap',function(){
       $.ajax({
        type:'get',
        url:'/user/logout',
        success:function(res){
            if(res.success){
                mui.toast('退出登录成功');
                setTimeout(function(){
                    location.href = 'index.html';
                },1000)
            }else{
                mui.toast('退出登录失败');
            }
        }
       })
    })
})
