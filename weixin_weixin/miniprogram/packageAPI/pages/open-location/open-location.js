Page({
    onShareAppMessage:function(){
        return {
            title:'查看位置',
            path:'packageAPI/pages/open-location/open-location'
        };
    },
    openLocation:function(e){
        console.log(e);
        const value = e.detail.value;
        console.log(value);
        wx.openLocation({
            longitude:Number(value.longitude),
            latitude:Number(value.latitude),
            name:value.name,
            address:value.address
        });
    }
});
