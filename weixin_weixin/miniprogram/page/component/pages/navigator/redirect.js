Page({
    onShareAppMessage:function(){
        return {
            title:'redirectPage',
            path:'page/component/pages/navigator/redirect'
        };
    },
    onLoad:function(options){
        console.log(options);
        this.setData({
            title:options.title
        });
    }
});
