import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'loadmore',
            path:'page/weui/example/loadmore/loadmore'
        };
    }
});
