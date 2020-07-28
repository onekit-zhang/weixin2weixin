import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'sticky',
            path:'page/weui/example/sticky/sticky'
        };
    },
    data:{},
    onLoad:function(){
    },
    onReady:function(){
        this.setData({
            container:()=>{wx.createSelectorQuery().select('#container')}
        });
    },
    onScroll:function(e){
        console.log('onScroll',e);
    }
});
