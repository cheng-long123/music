(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5acacd3b"],{"159b":function(t,a,e){var s=e("da84"),i=e("fdbc"),n=e("17c2"),r=e("9112");for(var c in i){var o=s[c],l=o&&o.prototype;if(l&&l.forEach!==n)try{r(l,"forEach",n)}catch(m){l.forEach=n}}},"17c2":function(t,a,e){"use strict";var s=e("b727").forEach,i=e("a640"),n=e("ae40"),r=i("forEach"),c=n("forEach");t.exports=r&&c?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,e){"use strict";var s=e("23e7"),i=e("17c2");s({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"8bcd":function(t,a,e){},a640:function(t,a,e){"use strict";var s=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&s((function(){e.call(null,a||function(){throw 1},1)}))}},e4d7:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mv-container"},[e("div",{staticClass:"mv-wrap"},[e("h3",{staticClass:"title"},[t._v("mv详情")]),e("div",{staticClass:"video-wrap"},[e("video",{attrs:{controls:"",src:t.mvUrl}})]),e("div",{staticClass:"info-wrap"},[e("div",{staticClass:"singer-info"},[e("div",{staticClass:"avatar-wrap"},[e("img",{attrs:{src:t.avatar,alt:""}})]),e("span",{staticClass:"name"},[t._v(t._s(t.mvdetail.artistName))])]),e("div",{staticClass:"mv-info"},[e("h2",{staticClass:"title"},[t._v(t._s(t.mvdetail.name))]),e("span",{staticClass:"date"},[t._v("发布："+t._s(t.mvdetail.publishTime))]),e("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvdetail.playCount)+"次")]),e("p",{staticClass:"desc"},[t._v(" "+t._s(t.mvdetail.desc)+" ")])])]),e("div",{staticClass:"comment-wrap"},[e("p",{staticClass:"title"},[t._v("精彩评论"),e("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),e("div",{staticClass:"comments-wrap"},t._l(t.hotComments,(function(a,s){return e("div",{key:s,staticClass:"item"},[e("div",{staticClass:"icon-wrap"},[e("img",{attrs:{src:a.user.avatarUrl,alt:""}})]),e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"content"},[e("span",{staticClass:"name"},[t._v(t._s(a.user.nickname)+"：")]),e("span",{staticClass:"comment"},[t._v(t._s(a.content))])]),0!==a.beReplied.length?e("div",{staticClass:"re-content"},[e("span",{staticClass:"name"},[t._v(t._s(a.beReplied[0].user.nickname)+"：")]),e("span",{staticClass:"comment"},[t._v(t._s(a.beReplied[0].content))])]):t._e(),e("div",{staticClass:"date"},[t._v(t._s(t._f("datetime")(a.time)))])])])})),0)]),e("div",{staticClass:"comment-wrap"},[e("p",{staticClass:"title"},[t._v("最新评论"),e("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),e("div",{staticClass:"comments-wrap"},t._l(t.comments,(function(a,s){return e("div",{key:s,staticClass:"item"},[e("div",{staticClass:"icon-wrap"},[e("img",{attrs:{src:a.user.avatarUrl,alt:""}})]),e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"content"},[e("span",{staticClass:"name"},[t._v(t._s(a.user.nickname)+"：")]),e("span",{staticClass:"comment"},[t._v(t._s(a.content))])]),0!==a.beReplied.length?e("div",{staticClass:"re-content"},[e("span",{staticClass:"name"},[t._v(t._s(a.beReplied[0].user.nickname)+"：")]),e("span",{staticClass:"comment"},[t._v("还"+t._s(a.beReplied[0].content))])]):t._e(),e("div",{staticClass:"date"},[t._v(t._s(t._f("datetime")(a.time)))])])])})),0)]),e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1),e("div",{staticClass:"mv-recommend"},[e("h3",{staticClass:"title"},[t._v("相关推荐")]),e("div",{staticClass:"mvs"},[e("div",{staticClass:"items"},t._l(t.mvs,(function(a,s){return e("div",{key:s,staticClass:"item",on:{click:function(e){return t.$router.push("/mv?id="+a.id)}}},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:a.cover,alt:""}}),e("span",{staticClass:"iconfont iconbofang1"}),e("div",{staticClass:"num-wrap"},[e("div",{staticClass:"iconfont iconbofang1"}),e("div",{staticClass:"num"},[t._v(t._s(a.playCount))])]),e("span",{staticClass:"time"},[t._v(t._s(t._f("time")(a.duration)))])]),e("div",{staticClass:"info-wrap"},[e("div",{staticClass:"name"},[t._v(t._s(a.name))]),e("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])])})),0)])])])},i=[],n=(e("4160"),e("159b"),e("96cf"),e("1da1")),r=(e("8bcd"),e("1857")),c={name:"MvIndex",props:{},components:{},data:function(){return{mvId:this.$route.query.id,mvUrl:"",mvs:[],mvdetail:{},avatar:"",comments:[],hotComments:[],page:1,total:100,limit:20}},computed:{},watch:{$route:function(){this.mvId=this.$route.query.id},mvId:function(){this.getMv(),this.geSimitMv(),this.gedetail(),this.geMvComment()}},methods:{getMv:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["k"])({id:t.mvId});case 2:e=a.sent,s=e.data,t.mvUrl=s.data.url;case 5:case"end":return a.stop()}}),a)})))()},geSimitMv:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["c"])({mvid:t.mvId});case 2:e=a.sent,s=e.data,t.mvs=s.mvs,t.mvs.forEach((function(t){t.playCount>=1e5&&(t.playCount=parseInt(t.playCount/1e4)+"万")}));case 6:case"end":return a.stop()}}),a)})))()},gedetail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["d"])({mvid:t.mvId});case 2:return e=a.sent,s=e.data,t.mvdetail=s.data,a.next=7,Object(r["a"])({id:s.data.artists[0].id});case 7:i=a.sent,t.avatar=i.data.artist.img1v1Url;case 9:case"end":return a.stop()}}),a)})))()},geMvComment:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["b"])({id:t.mvId,limit:t.limit,offset:(t.page-1)*t.limit});case 2:e=a.sent,s=e.data,t.comments=s.comments,t.total=s.total,t.hotComments=s.hotComments;case 7:case"end":return a.stop()}}),a)})))()},handleCurrentChange:function(t){this.page=t,this.geMvComment()}},created:function(){this.getMv(),this.geSimitMv(),this.gedetail(),this.geMvComment()},mounted:function(){},beforeDestroy:function(){}},o=c,l=e("2877"),m=Object(l["a"])(o,s,i,!1,null,"3d2cec20",null);a["default"]=m.exports},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-5acacd3b.833107a2.js.map