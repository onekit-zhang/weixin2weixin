const app = getApp();
Page({
    onShareAppMessage:function(){
        return {
            title:'用户鉴权',
            path:'page/cloud/pages/user-authentication/user-authentication'
        };
    },
    data:{
        openid:'',
        loading:false
    },
    onGetOpenid:function(){
        this.setData({
            loading:true
        });
        app.getUserOpenIdViaCloud().then((openid)=>{
    this.setData({
        openid:openid,
        loading:false
    });
    return openid;
}).catch((err)=>{console.error(err)});
    },
    clear:function(){
        this.setData({
            openid:''
        });
    }
});
