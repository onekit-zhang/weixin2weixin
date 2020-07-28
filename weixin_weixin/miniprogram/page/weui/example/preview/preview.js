import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'preview',
            path:'page/weui/example/preview/preview'
        };
    }
});
