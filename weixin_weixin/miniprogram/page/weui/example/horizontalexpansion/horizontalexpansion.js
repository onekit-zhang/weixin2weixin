Page({
    data:{
        theme:'light'
    },
    onLoad:function(){
        this.setData({
            theme:wx.getSystemInfoSync().theme || 'light'
        });
        if(wx.onThemeChange){
            wx.onThemeChange(({theme})=>{
                this.setData({
                    theme:theme
                });
            });
        }
    },
    onShareAppMessage:function(){
        return {
            title:'横向拓展',
            path:'page/weui/example/horizontalexpansion/horizontalexpansion'
        };
    }
});
