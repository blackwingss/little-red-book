webpackJsonp([3],{153:function(t,e,a){function n(t){a(169)}var i=a(4)(a(158),a(184),n,"data-v-7eba2576",null);t.exports=i.exports},158:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{show:!0}},computed:{homeData:function(){return this.$store.getters.getHomeData}},methods:{handleOnLi:function(t){var e=void 0,a=void 0;e=Array.prototype.filter.call(this.$refs.Ul1.childNodes,function(t){return 1===t.nodeType}),a=Array.prototype.filter.call(this.$refs.Ul2.childNodes,function(t){return 1===t.nodeType}),e.map(function(t){t.classList.remove("active")}),a.map(function(t){t.classList.remove("active")}),e[t.target.dataset.index].classList.add("active"),a[t.target.dataset.index].classList.add("active"),this.type=t.target.dataset.type,this.$store.dispatch("pullHomeData",t.target.dataset.type)},toDetail:function(t){this.$store.commit("render_detail",t)}},mounted:function(){this.$store.dispatch("pullHomeData","all"),this.$store.commit("change_header_right_icon","icon-xiangji")}}},164:function(t,e,a){e=t.exports=a(149)(!0),e.push([t.i,"#home[data-v-7eba2576]{position:relative;width:100%;padding:2.1rem 0}#home .menu[data-v-7eba2576]{display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;position:fixed;top:1.066667rem;left:0;width:100%;height:1.066667rem;background-color:#fff;color:#000;clear:both;box-sizing:border-box;font-size:16px;border-bottom:1px solid #ccc;z-index:1001}#home .menu .all-items[data-v-7eba2576]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;line-height:1.066667rem;text-indent:.4rem}#home .menu .menu-list[data-v-7eba2576]{overflow-x:auto;-webkit-box-flex:1;-ms-flex:1;flex:1}#home .menu .menu-list ul[data-v-7eba2576]{width:260%;height:1.066667rem}#home .menu .menu-list ul li[data-v-7eba2576]{padding:0 .43333rem;float:left;height:100%;line-height:1.066667rem;transition:border-bottom .2s}#home .menu .menu-list ul li.active[data-v-7eba2576]{border-bottom:2px solid #ff2741}#home .menu .drop-icon[data-v-7eba2576]{width:1.066667rem;height:100%;text-align:center;line-height:inherit}#home .menu .drop-icon .iconfont[data-v-7eba2576]{font-size:28px!important}#home .dropdown[data-v-7eba2576]{position:fixed;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,.3);z-index:1000}#home .dropdown.tanslate-leave-active[data-v-7eba2576],#home .dropdown.translate-enter[data-v-7eba2576]{-webkit-transform:scale(.97);transform:scale(.97)}#home .dropdown.tanslate-leave-active[data-v-7eba2576],#home .dropdown.translate-enter-active[data-v-7eba2576]{transition:-webkit-transform .1s ease;transition:transform .1s ease;transition:transform .1s ease,-webkit-transform .1s ease}#home .dropdown ul[data-v-7eba2576]{margin-top:1.966667rem;background-color:#fff;width:100%;height:2.966667rem}#home .dropdown ul li[data-v-7eba2576]{float:left;font-size:16px;width:25%;height:33.33333%;line-height:.988888891rem;text-align:center;border-bottom:1px solid #ccc;border-left:1px solid #ccc}#home .dropdown ul li[data-v-7eba2576]:first-child,#home .dropdown ul li[data-v-7eba2576]:nth-child(5),#home .dropdown ul li[data-v-7eba2576]:nth-child(9){border-left:none}#home .dropdown ul li.active[data-v-7eba2576]{border-bottom-color:#ff2741}#home .contents[data-v-7eba2576]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;overflow-y:auto;-ms-flex-pack:distribute;justify-content:space-around;vertical-align:top}#home .contents .content[data-v-7eba2576]{width:47%}#home .contents .content .detail[data-v-7eba2576]{width:100%;background-color:#fff;margin-top:.2rem}#home .contents .content .detail .detail-img[data-v-7eba2576]{overflow:hidden;width:100%}#home .contents .content .detail .detail-img img[data-v-7eba2576]{width:100%}#home .contents .content .detail .detail-text[data-v-7eba2576]{padding:.133333rem;font-size:14px;overflow:hidden}#home .contents .content .detail .detail-text .title[data-v-7eba2576]{font-style:bold}#home .contents .content .detail .detail-text .desc[data-v-7eba2576]{color:#ccc;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}#home .contents .content .detail .detail-action[data-v-7eba2576]{display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:.133333rem .133333rem .266667rem}#home .contents .content .detail .detail-action .user[data-v-7eba2576]{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden}#home .contents .content .detail .detail-action .user .user-avatar[data-v-7eba2576]{vertical-align:middle;display:inline-block;width:.42rem;height:.42rem;border-radius:50%;overflow:hidden}#home .contents .content .detail .detail-action .user .user-avatar img[data-v-7eba2576]{width:100%;height:100%}#home .contents .content .detail .detail-action .user .user-name[data-v-7eba2576]{text-overflow:ellipsis}#home .contents .content .detail .detail-action .like[data-v-7eba2576]{text-align:right;width:50px;color:#ccc}#home .contents .content .detail .detail-action .like .iconfont[data-v-7eba2576]{font-size:12px!important}#home .contents .content .detail .detail-action .like .like-count[data-v-7eba2576]{padding-left:.133333rem}","",{version:3,sources:["H:/给网站加点啥好呢/Express/Little-red-book/src/pages/Home.vue"],names:[],mappings:"AACA,uBACE,kBAAmB,AACnB,WAAY,AACZ,gBAAkB,CACnB,AACD,6BACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,eAAgB,AAChB,gBAAiB,AACjB,OAAQ,AACR,WAAY,AACZ,mBAAoB,AACpB,sBAAuB,AACvB,WAAY,AACZ,WAAY,AACZ,sBAAuB,AACvB,eAAgB,AAChB,6BAA8B,AAC9B,YAAc,CACjB,AACD,wCACM,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,YAAa,AACb,wBAAyB,AACzB,iBAAmB,CACxB,AACD,wCACM,gBAAiB,AACjB,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACrB,AACD,2CACQ,WAAY,AACZ,kBAAoB,CAC3B,AACD,8CACU,oBAAqB,AACrB,WAAY,AACZ,YAAa,AACb,wBAAyB,AACzB,4BAA8B,CACvC,AACD,qDACY,+BAAiC,CAC5C,AACD,wCACM,kBAAmB,AACnB,YAAa,AACb,kBAAmB,AACnB,mBAAqB,CAC1B,AACD,kDACQ,wBAA2B,CAClC,AACD,iCACI,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,OAAQ,AACR,MAAO,AACP,gCAAqC,AACrC,YAAc,CACjB,AACD,wGACM,6BAA+B,AACvB,oBAAuB,CACpC,AACD,+GACM,sCAAuC,AACvC,8BAA+B,AAC/B,wDAA2D,CAChE,AACD,oCACM,uBAAwB,AACxB,sBAAuB,AACvB,WAAY,AACZ,kBAAoB,CACzB,AACD,uCACQ,WAAY,AACZ,eAAgB,AAChB,UAAW,AACX,iBAAkB,AAClB,0BAA2B,AAC3B,kBAAmB,AACnB,6BAA8B,AAC9B,0BAA4B,CACnC,AACD,2JACU,gBAAkB,CAC3B,AACD,8CACU,2BAA6B,CACtC,AACD,iCACI,WAAY,AACZ,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,gBAAiB,AACjB,yBAA0B,AACtB,6BAA8B,AAClC,kBAAoB,CACvB,AACD,0CACM,SAAW,CAChB,AACD,kDACQ,WAAY,AACZ,sBAAuB,AACvB,gBAAkB,CACzB,AACD,8DACU,gBAAiB,AACjB,UAAY,CACrB,AACD,kEACY,UAAY,CACvB,AACD,+DACU,mBAAoB,AACpB,eAAgB,AAChB,eAAiB,CAC1B,AACD,sEACY,eAAiB,CAC5B,AACD,qEACY,WAAY,AACZ,uBAAwB,AACxB,gBAAiB,AACjB,oBAAqB,AACrB,qBAAsB,AACtB,2BAA6B,CACxC,AACD,iEACU,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,eAAgB,AAChB,wCAAqD,CAC9D,AACD,uEACY,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,eAAiB,CAC5B,AACD,oFACc,sBAAuB,AACvB,qBAAsB,AACtB,aAAc,AACd,cAAe,AACf,kBAAmB,AACnB,eAAiB,CAC9B,AACD,wFACgB,WAAY,AACZ,WAAa,CAC5B,AACD,kFACc,sBAAwB,CACrC,AACD,uEACY,iBAAkB,AAClB,WAAY,AACZ,UAAY,CACvB,AACD,iFAEc,wBAA2B,CACxC,AACD,mFACc,uBAAyB,CACtC",file:"Home.vue",sourcesContent:["\n#home[data-v-7eba2576] {\n  position: relative;\n  width: 100%;\n  padding: 2.1rem 0;\n}\n#home .menu[data-v-7eba2576] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    position: fixed;\n    top: 1.066667rem;\n    left: 0;\n    width: 100%;\n    height: 1.066667rem;\n    background-color: #fff;\n    color: #000;\n    clear: both;\n    box-sizing: border-box;\n    font-size: 16px;\n    border-bottom: 1px solid #ccc;\n    z-index: 1001;\n}\n#home .menu .all-items[data-v-7eba2576] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: 100%;\n      line-height: 1.066667rem;\n      text-indent: .4rem;\n}\n#home .menu .menu-list[data-v-7eba2576] {\n      overflow-x: auto;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#home .menu .menu-list ul[data-v-7eba2576] {\n        width: 260%;\n        height: 1.066667rem;\n}\n#home .menu .menu-list ul li[data-v-7eba2576] {\n          padding: 0 .43333rem;\n          float: left;\n          height: 100%;\n          line-height: 1.066667rem;\n          transition: border-bottom .2s;\n}\n#home .menu .menu-list ul li.active[data-v-7eba2576] {\n            border-bottom: 2px solid #ff2741;\n}\n#home .menu .drop-icon[data-v-7eba2576] {\n      width: 1.066667rem;\n      height: 100%;\n      text-align: center;\n      line-height: inherit;\n}\n#home .menu .drop-icon .iconfont[data-v-7eba2576] {\n        font-size: 28px !important;\n}\n#home .dropdown[data-v-7eba2576] {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n    z-index: 1000;\n}\n#home .dropdown.translate-enter[data-v-7eba2576], #home .dropdown.tanslate-leave-active[data-v-7eba2576] {\n      -webkit-transform: scale(0.97);\n              transform: scale(0.97);\n}\n#home .dropdown.translate-enter-active[data-v-7eba2576], #home .dropdown.tanslate-leave-active[data-v-7eba2576] {\n      transition: -webkit-transform .1s ease;\n      transition: transform .1s ease;\n      transition: transform .1s ease, -webkit-transform .1s ease;\n}\n#home .dropdown ul[data-v-7eba2576] {\n      margin-top: 1.966667rem;\n      background-color: #fff;\n      width: 100%;\n      height: 2.966667rem;\n}\n#home .dropdown ul li[data-v-7eba2576] {\n        float: left;\n        font-size: 16px;\n        width: 25%;\n        height: 33.33333%;\n        line-height: .988888891rem;\n        text-align: center;\n        border-bottom: 1px solid #ccc;\n        border-left: 1px solid #ccc;\n}\n#home .dropdown ul li[data-v-7eba2576]:nth-child(1), #home .dropdown ul li[data-v-7eba2576]:nth-child(5), #home .dropdown ul li[data-v-7eba2576]:nth-child(9) {\n          border-left: none;\n}\n#home .dropdown ul li.active[data-v-7eba2576] {\n          border-bottom-color: #ff2741;\n}\n#home .contents[data-v-7eba2576] {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    overflow-y: auto;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    vertical-align: top;\n}\n#home .contents .content[data-v-7eba2576] {\n      width: 47%;\n}\n#home .contents .content .detail[data-v-7eba2576] {\n        width: 100%;\n        background-color: #fff;\n        margin-top: .2rem;\n}\n#home .contents .content .detail .detail-img[data-v-7eba2576] {\n          overflow: hidden;\n          width: 100%;\n}\n#home .contents .content .detail .detail-img img[data-v-7eba2576] {\n            width: 100%;\n}\n#home .contents .content .detail .detail-text[data-v-7eba2576] {\n          padding: .133333rem;\n          font-size: 14px;\n          overflow: hidden;\n}\n#home .contents .content .detail .detail-text .title[data-v-7eba2576] {\n            font-style: bold;\n}\n#home .contents .content .detail .detail-text .desc[data-v-7eba2576] {\n            color: #ccc;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n}\n#home .contents .content .detail .detail-action[data-v-7eba2576] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          display: -webkit-flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          padding: .133333rem .133333rem .266667rem .133333rem;\n}\n#home .contents .content .detail .detail-action .user[data-v-7eba2576] {\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n            overflow: hidden;\n}\n#home .contents .content .detail .detail-action .user .user-avatar[data-v-7eba2576] {\n              vertical-align: middle;\n              display: inline-block;\n              width: .42rem;\n              height: .42rem;\n              border-radius: 50%;\n              overflow: hidden;\n}\n#home .contents .content .detail .detail-action .user .user-avatar img[data-v-7eba2576] {\n                width: 100%;\n                height: 100%;\n}\n#home .contents .content .detail .detail-action .user .user-name[data-v-7eba2576] {\n              text-overflow: ellipsis;\n}\n#home .contents .content .detail .detail-action .like[data-v-7eba2576] {\n            text-align: right;\n            width: 50px;\n            color: #ccc;\n}\n#home .contents .content .detail .detail-action .like .iconfont[data-v-7eba2576] {\n              /* vertical-align: ; */\n              font-size: 12px !important;\n}\n#home .contents .content .detail .detail-action .like .like-count[data-v-7eba2576] {\n              padding-left: .133333rem;\n}\n"],sourceRoot:""}])},169:function(t,e,a){var n=a(164);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(150)("46d0f9ff",n,!0)},184:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"home",attrs:{id:"home"}},[a("div",{staticClass:"menu"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"menuList",staticClass:"menu-list"},[a("ul",{ref:"Ul1",on:{click:t.handleOnLi}},[a("li",{staticClass:"active",attrs:{"data-index":"0","data-type":"all"}},[t._v("推荐")]),t._v(" "),a("li",{attrs:{"data-index":"1","data-type":"focus"}},[t._v("关注")]),t._v(" "),a("li",{attrs:{"data-index":"2","data-type":"location"}},[t._v("深圳")]),t._v(" "),a("li",{attrs:{"data-index":"3","data-type":"man"}},[t._v("男人")]),t._v(" "),a("li",{attrs:{"data-index":"4","data-type":"skin"}},[t._v("护肤")]),t._v(" "),a("li",{attrs:{"data-index":"5","data-type":"family"}},[t._v("居家")]),t._v(" "),a("li",{attrs:{"data-index":"6","data-type":"fashion"}},[t._v("时尚")]),t._v(" "),a("li",{attrs:{"data-index":"7","data-type":"food"}},[t._v("美食")]),t._v(" "),a("li",{attrs:{"data-index":"8","data-type":"sports"}},[t._v("运动")]),t._v(" "),a("li",{attrs:{"data-index":"9","data-type":"travel"}},[t._v("旅行")]),t._v(" "),a("li",{attrs:{"data-index":"10","data-type":"adornment"}},[t._v("彩妆")]),t._v(" "),a("li",{attrs:{"data-index":"11","data-type":"matherAndBaby"}},[t._v("母婴")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"all-items"},[t._v("\n      全部选项\n    ")]),t._v(" "),a("div",{staticClass:"drop-icon",on:{click:function(e){t.show=!t.show}}},[a("i",{staticClass:"iconfont",class:t.show?"icon-xiala":"icon-xiala-copy"})])]),t._v(" "),a("transition",{attrs:{name:"tanslate"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"dropdown",on:{click:function(e){t.show=!0}}},[a("ul",{ref:"Ul2",on:{click:t.handleOnLi}},[a("li",{staticClass:"active",attrs:{"data-index":"0","data-type":"all"}},[t._v("推荐")]),t._v(" "),a("li",{attrs:{"data-index":"1","data-type":"focus"}},[t._v("关注")]),t._v(" "),a("li",{attrs:{"data-index":"2","data-type":"location"}},[t._v("深圳")]),t._v(" "),a("li",{attrs:{"data-index":"3","data-type":"man"}},[t._v("男人")]),t._v(" "),a("li",{attrs:{"data-index":"4","data-type":"skin"}},[t._v("护肤")]),t._v(" "),a("li",{attrs:{"data-index":"5","data-type":"family"}},[t._v("居家")]),t._v(" "),a("li",{attrs:{"data-index":"6","data-type":"fashion"}},[t._v("时尚")]),t._v(" "),a("li",{attrs:{"data-index":"7","data-type":"food"}},[t._v("美食")]),t._v(" "),a("li",{attrs:{"data-index":"8","data-type":"sports"}},[t._v("运动")]),t._v(" "),a("li",{attrs:{"data-index":"9","data-type":"travel"}},[t._v("旅行")]),t._v(" "),a("li",{attrs:{"data-index":"10","data-type":"adornment"}},[t._v("彩妆")]),t._v(" "),a("li",{attrs:{"data-index":"11","data-type":"matherAndBaby"}},[t._v("母婴")])])])]),t._v(" "),a("div",{staticClass:"contents"},[a("div",{staticClass:"content"},t._l(t.homeData[0],function(e){return a("div",{staticClass:"detail",on:{click:function(a){t.toDetail(e)}}},[a("div",{staticClass:"detail-img"},[a("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"detail-text"},[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(e.desc))])]),t._v(" "),a("div",{staticClass:"detail-action"},[a("div",{staticClass:"user"},[a("span",{staticClass:"user-avatar"},[a("img",{attrs:{src:e.userAvatar,alt:""}})]),t._v(" "),a("span",{staticClass:"user-name"},[t._v(t._s(e.userName))])]),t._v(" "),a("div",{staticClass:"like"},[a("i",{staticClass:"iconfont icon-xin"}),t._v(" "),a("span",{staticClass:"like-count"},[t._v(t._s(e.likeCount))])])])])})),t._v(" "),a("div",{staticClass:"content"},t._l(t.homeData[1],function(e){return a("div",{staticClass:"detail",on:{click:function(a){t.toDetail(e)}}},[a("div",{staticClass:"detail-img"},[a("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"detail-text"},[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(e.desc))])]),t._v(" "),a("div",{staticClass:"detail-action"},[a("div",{staticClass:"user"},[a("span",{staticClass:"user-avatar"},[a("img",{attrs:{src:e.userAvatar,alt:""}})]),t._v(" "),a("span",{staticClass:"user-name"},[t._v(t._s(e.userName))])]),t._v(" "),a("div",{staticClass:"like"},[a("i",{staticClass:"iconfont icon-xin"}),t._v(" "),a("span",{staticClass:"like-count"},[t._v(t._s(e.likeCount))])])])])}))])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.7dd73b3c6295cf12d6bb.js.map