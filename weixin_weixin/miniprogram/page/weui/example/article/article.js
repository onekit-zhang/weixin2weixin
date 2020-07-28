import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'article',
            path:'page/weui/example/article/article'
        };
    }
});
