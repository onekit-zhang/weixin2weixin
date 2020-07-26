Page({
    onShareAppMessage:function(){
        return {
            title:'textarea',
            path:'page/component/pages/textarea/textarea'
        };
    },
    data:{
        focus:false
    },
    bindTextAreaBlur:function(e){
        console.log(e.detail.value);
    }
});
