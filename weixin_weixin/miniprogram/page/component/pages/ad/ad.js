const info = wx.getSystemInfoSync();
Page({
    onShareAppMessage:function(){
        return {
            title:'ad',
            path:'page/component/pages/ad/ad'
        };
    },
    data:{
        platform:info.platform
    }
});
