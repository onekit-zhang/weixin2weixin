module.exports = Behavior({
    data:{
        theme:'light'
    },
    methods:{
        themeChanged:function(theme){
            this.setData({
                theme:theme
            });
        }
    }
});
