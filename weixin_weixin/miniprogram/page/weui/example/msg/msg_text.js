import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'msg_text',
            path:'page/weui/example/msg_text/msg_text'
        };
    }
});
