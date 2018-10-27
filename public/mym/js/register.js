$(function(){

$('#getCode').on('tap',function(){
    $.ajax({
        type:'get',
        url:'/user/vCode',
        success:function(res){
            console.log(res);
        }
    })
})
$('#regBtn').on('tap',function(){
    var username = $('#username').val();
    var mobile = $('#mobile').val();
    var password = $('#password').val();
    var againPass = $('#againPass').val();
    var checkCode = $('#checkCode').val();
    $.ajax({
        type:'post',
        url:'/user/register',
        data:{
            'username':username,
            'password':password,
            'mobile':mobile,
            'vCode':checkCode
        },
        success:function(res){           
           if(res.success){
            //   $('#register').html('注册成功');
                mui.toast('注册成功');
                setTimeout(function(){
                    location.href = 'login.html'; 
                },1000)
              
           }else{
            mui.toast('注册失败');
           }
        }
    })
})

})