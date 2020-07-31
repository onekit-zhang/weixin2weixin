const demoImageFileId = require('../../../config').demoImageFileId;
Page({
    onShareAppMessage:function(){
        return {
            title:'下载文件',
            path:'packageAPI/pages/download-file/download-file'
        };
    },
    downloadImage:function(){
        const self = this;
        wx.cloud.downloadFile({
            fileID:demoImageFileId,
            success:(res)=>{
                console.log('downloadFile success, res is',res);
                self.setData({
                    imageSrc:res.tempFilePath
                });
            },
            fail:console.error
        });
    }
});
