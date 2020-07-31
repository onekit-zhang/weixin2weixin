const util = require('../../../util/util.js');
const formatLocation = util.formatLocation;
Page({
    onShareAppMessage:function(){
        return {
            title:'使用原生地图选择位置',
            path:'packageAPI/pages/choose-location/choose-location'
        };
    },
    data:{
        hasLocation:false
    },
    chooseLocation:function(){
        const that = this;
        wx.chooseLocation({
            success:function(res){
                console.log(res);
                that.setData({
                    hasLocation:true,
                    location:formatLocation(res.longitude,res.latitude),
                    locationAddress:res.address
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
