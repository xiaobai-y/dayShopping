// 编辑收货地址
$(function(){     
    var id = location.href.split('?')[1].split('&')[0].split('=')[1];
    // console.log(id);
    $.ajax({
        type:'get',
        url:'/address/queryAddress',
        success:function(res){
            console.log(res);
            for(var i=0;i<res.length;i++){
                if(res[i].id == id){
                    var recipients = res[i].recipients;
                    var postCode = res[i].postCode;
                    var addressDetail = res[i].addressDetail;
                    // 填入
                   $('#recipients').val(recipients); 
                   $('#postCode').val(postCode); 
                   $('#addressDetail').val(addressDetail); 

                }
            }
        }
    })
    $('#editAdress').on('tap',function(){
        var recipients =  $('#recipients').val(); 
        var postCode =  $('#postCode').val(); 
        var addressDetail =  $('#addressDetail').val();
        $.ajax({
            type:'post',
            url:'/address/updateAddress',
            data:{
              recipients:recipients,
              postCode:postCode,
              addressDetail:addressDetail
            },
            success:function(res){
                console.log(res); 
              if(res.success){
                  mui.toast('修改地址成功');
                  setTimeout(function(){
                      location.href = 'address.html';
                  },1000)
              }
              else{
                  mui.toast('修改地址失败');
              }
            }
        })
    })
})