// 1 获取用户输入的内容,
// 2 点击搜索按钮 跳转,
// 3 返回搜索页时 显示搜索历史
// 3.1 准备一个存储关键字的数组
// 3.2 当用户点击搜索按钮时,将关键字添加到数组,
// 3.3 将数组存储到本地存储中
// 3.4 在页面一打开时判断本地存储中是否有已经存储的数据
// 3.5 将数组中的数据渲染到页面上

// 4清空搜索记录
$(function(){
    $('#searchBtn').on('tap',function(){
        var keyword = $('#keyword').val();
        if(keyword){
            location.href = "search-list.html?keyword="+keyword;
            // unshift 加到数组前面,push加到数组后面
            keyArr.unshift(keyword);
            localStorage.setItem('keyArr',JSON.stringify(keyArr));
        }else{
            alert('请输入关键字');
            return;
        }
        
    })
    // 存储关键字的数组
    var keyArr = [];
    if(localStorage.getItem('keyArr')){
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        
    }
    $('#historySearch').html(template('history',{res:keyArr}));

    // 清空搜索记录
    $('#clear').on('tap',function(){
        keyArr = [];
        localStorage.removeItem('keyArr');
        $('#historySearch').html(template('history',{res:keyArr}));
    })
})