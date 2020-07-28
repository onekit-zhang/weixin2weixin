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
    return __webpack_require__(__webpack_require__.s = 2);
}({
    2:function(module,exports,__webpack_require__){
        "use strict"
;
        Component({
            options:{
                addGlobalClass:true,
                multipleSlots:true
            },
            properties:{
                title:{
                    type:String,
                    value:''
                },
                subtitle:{
                    type:String,
                    value:''
                }
            },
            relations:{
                '../cells/cells':{
                    type:'descendant',
                    linked:function(target){
                        if(!this.data.firstItem){
                            this.data.firstItem = target;
                        }
                        target.setOuterClass('weui-cells__group weui-cells__group_form weui-cells_form');
                        if(target !== this.data.firstItem){
                            target.setOuterClass('weui-cells__group_wxss weui-cells__group weui-cells__group_form weui-cells_form');
                        }
                    }
                }
            },
            data:{
                firstItem:null
            }
        });
    }
}));
