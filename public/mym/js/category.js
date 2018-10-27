// 1 使用ajax请求获取数据
// 2 使用模板引擎渲染
$(function(){
    // 获取一级分类数据
    $.ajax({
        type:'get',
        url:'/category/queryTopCategory',
        success:function(res){
            $('.links').html(template('leftTempl',{data:res.rows})); 
             // 页面一加载时显示第一条二级分类数据
            if(res.rows.length > 0){
                var id = res.rows[0].id;
                $.ajax({
                    type:'get',
                    url:'/category/querySecondCategory',
                    data:{
                        'id':id
                    },
                    success:function(res){
                        $('.mym-crBox').html(template('rightTempl',{data:res.rows}));
                        $('.links').find('a:first-child').addClass('active');
                    }
                })
            }
        }
    })

   

    // 获取二级分类数据
    // 事件委托
    $('.links').on('tap','.secondItem',function(){
        var id = $(this).data('id');
        $(this).addClass("active").siblings().removeClass("active");
       
        $.ajax({
            type:'get',
            url:'/category/querySecondCategory',
            data:{
                'id':id
            },
            success:function(res){
                console.log(res);
                $('.mym-crBox').html(template('rightTempl',{data:res.rows}));
            }
        })
    })


    
})