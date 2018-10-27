$(function(){
    // 显示收货地址列表
    $.ajax({
        type:'get',
        url:'/address/queryAddress',
        success:function(res){
            console.log(res);
            $('#adress').html(template('adressTpl',{result:res}));
        }
    })
    // 删除收货地址(id的存和取)
        $('#adress').on('tap','.deleteAdress',function(){
            var id = $('.deleteAdress').data('id');
            var li = this.parentNode.parentNode;
            mui.confirm('确定要删除吗',function(mes){
                // 通过返回值的index来判断用户点的是确认还是取消
                if(mes.index == 1){
                    $.ajax({
                        type:'post',
                        url:'/address/deleteAddress',
                        data:{
                            id:id
                        },
                        success:function(res){
                            if(res.success){
                                location.reload();
                            }
                        }
                    })
                }else{
                    // 取消删除.让动画滑回去,该方法通过查找框架得知
                    mui.swipeoutClose(li);
                }
                
            });
        
            
        })
    
     
   
})