Page({
    onShareAppMessage:function(){
        return {
            title:'获取手机系统信息',
            path:'packageAPI/pages/get-system-info/get-system-info'
        };
    },
    data:{
        systemInfo:{}
    },
    getSystemInfo:function(){
        const that = this;
        wx.getSystemInfo({
            success:function(res){
                that.setData({
                    systemInfo:res
                });
            }
        });
    }
});
