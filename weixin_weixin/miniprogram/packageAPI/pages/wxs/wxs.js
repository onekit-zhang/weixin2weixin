Page({
    onShareAppMessage:function(){
        return {
            title:'wxs',
            path:'packageAPI/pages/wxs/wxs'
        };
    },
    handleNavChange:function(e){
        console.log(e);
        wx.navigateTo({
            url:`/packageAPI/pages/wxs/${e.currentTarget.dataset.nav}`
        });
    }
});
