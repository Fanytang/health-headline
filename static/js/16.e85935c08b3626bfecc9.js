webpackJsonp([16],{"6yw/":function(n,e,t){var i=t("dTr0");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("79c4f541",i,!0,{})},dTr0:function(n,e,t){e=n.exports=t("FZ+f")(!1),e.push([n.i,"\n#channel {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  overflow: hidden;\n  z-index: 1000;\n}\n#channel .content {\n  background-color: #f8f8f8;\n}\n#channel .content .column {\n  margin-top: 0.133rem;\n}\n#channel .content .column .title {\n  font-size: 12px;\n  padding: 0 0.266rem;\n  line-height: 2em;\n  background-color: #f5f5f5;\n  color: #666;\n  margin-bottom: 0.266rem;\n}\n#channel .content .column ul {\n  margin: 0.266rem 0;\n  font-size: 0;\n}\n#channel .content .column ul li {\n  display: inline-block;\n  width: 25%;\n  margin-bottom: 0.266rem;\n  -webkit-animation: zoomIn 0.3s ease;\n          animation: zoomIn 0.3s ease;\n}\n#channel .content .column ul li a {\n  display: block;\n  font-size: 16px;\n  margin: 0 0.213rem;\n  border: 1px solid #ccc;\n  line-height: 2em;\n  color: #131313;\n  text-align: center;\n  text-decoration: none;\n}\n#channel .content .column ul li a.news_recommend {\n  background-color: #f0f0f0;\n}\n",""])},wC6V:function(n,e,t){"use strict";function i(n){t("6yw/")}Object.defineProperty(e,"__esModule",{value:!0});var a=t("Gu7T"),o=t.n(a),c=t("Dd8w"),s=t.n(c),l=t("ROW2"),r=t("NYxO"),h={name:"channel",data:function(){return{channel:"",removeChannel:[]}},computed:s()({},Object(r.c)("index",["indexPage","indexLocation","indexColumn"])),watch:{indexColumn:function(){this.set_indexColumn(this.indexColumn),this.set_indexActive("news_recommend")},removeChannel:function(){Object(l.d)("removeChannel",this.removeChannel)}},methods:s()({},Object(r.d)("index",["set_indexActive","set_indexPage","set_indexLocation","set_indexColumn"]),Object(r.b)("index",["get_channel_data"]),{get_channel:function(){var n=this;this.get_channel_data().then(function(e){e&&(n.channel=e)})},get_removeChannel:function(){var n=JSON.parse(Object(l.b)("removeChannel"));n&&(this.removeChannel=n)},add:function(n,e){if("channel"===n){var t,i=this.channel.splice(e,1);(t=this.indexColumn).push.apply(t,o()(i))}else if("removeChannel"===n){var a,c=this.removeChannel.splice(e,1);(a=this.indexColumn).push.apply(a,o()(c))}},remove:function(n,e){if("news_recommend"!==n.classpath){var t,i=this.indexColumn.splice(e,1);(t=this.removeChannel).push.apply(t,o()(i))}},sync:function(){for(var n={},e={},t=0;t<this.indexColumn.length;t++){var i=this.indexColumn[t].classpath;this.indexPage[i]>1?n[i]=this.indexPage[i]:n[i]=1,this.indexLocation[i]>0?e[i]=this.indexLocation[i]:e[i]=0}this.set_indexPage(n),this.set_indexLocation(e)}}),mounted:function(){this.get_removeChannel(),this.get_channel()},deactivated:function(){this.sync()}},d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("transition",{attrs:{name:"fadeIn"}},[t("div",{attrs:{id:"channel"}},[t("my-header",{directives:[{name:"goTop",rawName:"v-goTop:click",value:!0,expression:"true",arg:"click"}],attrs:{fixed:"",title:"频道管理"}},[t("a",{staticClass:"back-white",attrs:{slot:"left"},on:{click:function(e){n.$router.go(-1)}},slot:"left"})]),n._v(" "),t("div",{staticClass:"content",class:{isIOS:"ios"==n.$store.state.device}},[t("div",{directives:[{name:"swiper",rawName:"v-swiper:swiperRight",value:!0,expression:"true",arg:"swiperRight"}],staticClass:"container"},[t("section",{staticClass:"column"},[t("p",{staticClass:"title"},[n._v("点击删除以下频道")]),n._v(" "),t("ul",n._l(n.indexColumn,function(e,i){return t("li",{key:i,on:{click:function(t){n.remove(e,i)}}},[t("a",{class:e.classpath,attrs:{href:"javascript:;"}},[n._v(n._s(e.classname))])])}))]),n._v(" "),t("section",{staticClass:"column"},[t("p",{staticClass:"title"},[n._v("点击添加以下频道")]),n._v(" "),t("ul",n._l(n.removeChannel,function(e,i){return t("li",{key:i,on:{click:function(e){n.add("removeChannel",i)}}},[t("a",{attrs:{href:"javascript:;"}},[n._v(n._s(e.classname))])])})),n._v(" "),t("ul",n._l(n.channel,function(e,i){return t("li",{key:i,on:{click:function(e){n.add("channel",i)}}},[t("a",{attrs:{href:"javascript:;"}},[n._v(n._s(e.classname))])])}))])])])],1)])},u=[],m={render:d,staticRenderFns:u},f=m,v=t("VU/8"),p=i,x=v(h,f,!1,p,null,null);e.default=x.exports}});