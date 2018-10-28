$(function(){
    var href = location.href;
    var id = href.split('?')[1].split('=')[1];
    var num = 1;
    var num1 = 0;
    $.ajax({
        type:'get',
        url:'/product/queryProductDetail',
        data:{
            id:id
        },
        success:function(res){
            console.log(res);           
            var min = parseInt(res.size.split('-')[0]);
            var max = parseInt(res.size.split('-')[1]);
            num1 = res.num;
            res.size = [];
				for(var i=min;i<=max;i++){
					res.size.push(i);
                }
                $('#detailBox').html(template('detailTpl',{data:res}));
            // console.log(min);
            // console.log(max);
            // console.log(res.size);
        }
    })

    // 增加购买数量
    $('#detailBox').on('tap','.plus',function(){
        if(num < num1){
            num++;
            $('.num').val(num);
        }       
    })
})