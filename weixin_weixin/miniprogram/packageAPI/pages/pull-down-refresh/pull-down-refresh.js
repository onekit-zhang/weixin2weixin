Page({
    onShareAppMessage:function(){
        return {
            title:'下拉刷新',
            path:'packageAPI/pages/pull-down-refresh/pull-down-refresh'
        };
    },
    onPullDownRefresh:function(){
        wx.showToast({
            title:'loading...',
            icon:'loading'
        });
        console.log('onPullDownRefresh',new Date());
    },
    stopPullDownRefresh:function(){
        wx.stopPullDownRefresh({
            complete:function(res){
                wx.hideToast();
                console.log(res,new Date());
            }
        });
    }
});
