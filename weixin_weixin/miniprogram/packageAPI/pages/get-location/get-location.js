const util = require('../../../util/util.js');
const formatLocation = util.formatLocation;
Page({
    onShareAppMessage:function(){
        return {
            title:'获取位置',
            path:'packageAPI/pages/get-location/get-location'
        };
    },
    data:{
        hasLocation:false
    },
    getLocation:function(){
        const that = this;
        wx.getLocation({
            success:function(res){
                console.log(res);
                that.setData({
                    hasLocation:true,
                    location:formatLocation(res.longitude,res.latitude)
                });
            }
        });
    },
    clear:function(){
        this.setData({
            hasLocation:false
        });
    }
});
