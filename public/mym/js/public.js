window.onload = function(){
    // 解决mui框架中a标签默认不能跳转的问题
    mui('body').on('tap','a',function(){
        window.top.location.href=this.href;
    });
}