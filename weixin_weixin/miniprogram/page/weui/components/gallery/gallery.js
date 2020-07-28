module.exports = (function(modules){
    var installedModules = {};
    function __webpack_require__(moduleId){
        if(installedModules[moduleId]){
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i:moduleId,
            l:false,
            exports:{}
        };
        modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);
        module.l = true;
        return module.exports;
    };
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports,name,getter){
        if(!__webpack_require__.o(exports,name)){
            Object.defineProperty(exports,name,{
                enumerable:true,
                get:getter
            });
        }
    };
    __webpack_require__.r = function(exports){
        if((typeof Symbol !== 'undefined') && Symbol.toStringTag){
            Object.defineProperty(exports,Symbol.toStringTag,{
                value:'Module'
            });
        }
        Object.defineProperty(exports,'__esModule',{
            value:true
        });
    };
    __webpack_require__.t = function(value,mode){
        if(mode & 1)value = __webpack_require__(value)
        if(mode & 8)return value
        if((((mode & 4) && (typeof value === 'object')) && value) && value.__esModule)return value
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns,'default',{
            enumerable:true,
            value:value
        });
        if((mode & 2) && (typeof value != 'string'))for(var key in value)__webpack_require__.d(ns,key,function(key){
    return value[key];
}.bind(null,key))
        return ns;
    };
    __webpack_require__.n = function(module){
        var getter = module && module.__esModule?function(){
            return module['default'];
        }:function(){
            return module;
        };
        __webpack_require__.d(getter,'a',getter);
        return getter;
    };
    __webpack_require__.o = function(object,property){
        return Object.prototype.hasOwnProperty.call(object,property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 21);
}({
    21:function(module,exports,__webpack_require__){
        "use strict"
;
        Component({
            options:{
                addGlobalClass:true
            },
            properties:{
                imgUrls:{
                    type:Array,
                    value:[
                    ],
                    observer:function(newVal,oldVal,changedPath){
                        this.setData({
                            currentImgs:newVal
                        });
                    }
                },
                showDelete:{
                    type:Boolean,
                    value:true
                },
                show:{
                    type:Boolean,
                    value:true
                },
                current:{
                    type:Number,
                    value:0
                },
                hideOnClick:{
                    type:Boolean,
                    value:true
                },
                extClass:{
                    type:Boolean,
                    value:''
                }
            },
            data:{
                currentImgs:[
                ]
            },
            ready:function(){
                const data = this.data;
                this.setData({
                    currentImgs:data.imgUrls
                });
            },
            methods:{
                change:function(e){
                    this.setData({
                        current:e.detail.current
                    });
                    this.triggerEvent('change',{
                        current:e.detail.current
                    },{});
                },
                deleteImg:function(){
                    const data = this.data;
                    const imgs = data.currentImgs;
                    const url = imgs.splice(data.current,1);
                    this.triggerEvent('delete',{
                        url:url[0],
                        index:data.current
                    },{});
                    if(imgs.length === 0){
                        this.hideGallery();
                        return;
                    }
                    this.setData({
                        current:0,
                        currentImgs:imgs
                    });
                },
                hideGallery:function(){
                    const data = this.data;
                    if(data.hideOnClick){
                        this.setData({
                            show:false
                        });
                        this.triggerEvent('hide',{},{});
                    }
                }
            }
        });
    }
}));
