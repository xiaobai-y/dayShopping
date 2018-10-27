$(function(){
    // 1根据输入的关键字进行对搜索结果的展示
    // 获取地址栏中的关键字
   
})
function ss(){
    var href = location.href;
var keyword = href.split('?')[1].split('=')[1];
// var page = 1;
$.ajax({
    type:'get',
    url:'/product/queryProduct',
    data:{
        page:1,
        pageSize:3
    },
    success:function(res){
        $('#proBox').html(template('proShow',{data:res}));
        console.log(res);
    }

})
};
ss();