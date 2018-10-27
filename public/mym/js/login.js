$(function(){
    // 实现登录
    $('#loginBtn').on('tap',function(){
        var username = $('#username').val();
        var password = $('#password').val();
        $.ajax({
            type:'post',
            url:'/user/login',
            data:{
                username:username,
                password:password
            },
            success:function(res){
                
                if(res.success){
                    mui.toast('登录成功');
                    setTimeout(function(){
                        location.href = 'user.html?&username=username';
                    },1000)
                }else{
                    mui.toast('登录失败');
                    // 登录失败后将文本框的内容清空并获得焦点以便重新输入
                    $('#username').val('').focus();
                    $('#password').val('');
                }
                
            }
        })
    })
})