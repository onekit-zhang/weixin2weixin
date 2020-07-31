Page({
    onShareAppMessage:function(){
        return {
            title:'扫码',
            path:'packageAPI/pages/scan-code/scan-code'
        };
    },
    data:{
        result:''
    },
    scanCode:function(){
        const that = this;
        wx.scanCode({
            success:function(res){
                that.setData({
                    result:res.result
                });
            },
            fail:function(){
            }
        });
    }
});
