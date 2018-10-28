$(function(){
    // 1根据输入的关键字进行对搜索结果的展示
    // 获取地址栏中的关键字
    // 渲染数据
    var href = location.href;
    var keyword = href.split('?')[1].split('=')[1];

    var page = 1;
    var totalPage = 0;
    var pageSize = 3;
    var This = null;
    var priceSort = 1;
    // 上拉加载 初始化
    mui.init({
        pullRefresh : {
          container:document.querySelector('#refreshContainer'),//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
          up : {
            height:50,//可选,默认50.触发下拉刷新拖动距离,
            auto:true,//可选,默认false.自动上拉加载一次
            contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback : findProduct,
          }
        }
      });
    
    // 回调函数
    function findProduct(){
        if(!This){
            This = this;
        }
        $.ajax({
            type:'get',
            url:'/product/queryProduct',
            data:{
                page:page,
                pageSize:pageSize,
                proName:keyword,
            },
            success:function(res){ 
                totalPage = Math.ceil(res.count/pageSize);
                console.log(res); 
                if(page <= totalPage) {
                    var html = template('proShow',res);
                    $('#proBox').append(html);
                    page++;
                    This.endPullupToRefresh(false);
                }else{
                    page = totalPage;
                    This.endPullupToRefresh(true);
                }
                
                
            }
    
        })
    }
    
    // 价格排序
    $('#priceSort').on('tap',function(){
       var page = 1;
        priceSort = (priceSort == 1 ? 2 : 1);
        console.log(priceSort);
        $.ajax({
            type:'get',
            url:'/product/queryProduct',
            data:{
                page:page,
                pageSize:pageSize,
                proName:keyword,
                price:priceSort
            },
            success:function(res){
                if(!This){
                    This = this;
                } 
                totalPage = Math.ceil(res.count/pageSize);
                console.log(page); 
                if(page <= totalPage) {
                    var html = template('proShow',res);
                    $('#proBox').html(html);
                    page++;
                    This.endPullupToRefresh(false);
                }else{
                    page = totalPage;
                    This.endPullupToRefresh(true);
                }
                
                
            }
    
        })
    })
   
})
    