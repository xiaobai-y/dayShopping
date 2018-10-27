$(function(){
    // 省市区三级联动
  $('#showCityPicker').on('tap',function(){
    var picker = new mui.PopPicker({
        layer: 3
    });
    picker.setData(cityData);
    picker.show(function (selectItems) {
        
        var zeroP = picker.getSelectedItems()[0].text;
        var zeroS = picker.getSelectedItems()[1].text;
        var zeroQ = picker.getSelectedItems()[2].text;
        var zero = zeroP+""+zeroS+""+zeroQ;         
        $('#showCityPicker').val(zero);
     })
  })
  $('#addAdress').on('tap',function(){
      var recipients = $('#recipients').val().trim();
      var postcode = $('#postCode').val().trim();
      var address = $('#address').val();
      var addressDetail = $('#addressDetail').val().trim();
      $.ajax({
          type:'post',
          url:'/address/addAddress',
          data:{
            recipients:recipients,
            postcode:postcode,
            address:address,
            addressDetail:addressDetail
          },
          success:function(res){
              console.log(res); 
            if(res.success){
                mui.toast('添加地址成功');
                setTimeout(function(){
                    location.href = 'address.html';
                },1000)
            }
            else{
                mui.toast('添加地址失败');
            }
          }
      })

  })
})