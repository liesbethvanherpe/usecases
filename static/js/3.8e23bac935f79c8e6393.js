webpackJsonp([3,4],{68:function(e,t){e.exports={rebuildanexistingsinglecellmodel:{raw:"https://raw.githubusercontent.com/lbologna/bsp_data_repository/master/optimizations/"},morphologyvisualization:{raw:"https://raw.githubusercontent.com/lbologna/bsp_data_repository/master/optimizations/"},morphologyanalysis:{raw:"https://raw.githubusercontent.com/lbologna/bsp_data_repository/master/optimizations/"},circuitbuilding:[{path:"https://raw.githubusercontent.com/antonelepfl/usecases/dev/src/assets/config_files/cbcerebellum.json",img:"https://github.com/antonelepfl/usecases/raw/dev/src/assets/images/cerebellum.png"},{path:"https://raw.githubusercontent.com/antonelepfl/usecases/dev/src/assets/config_files/cbhippocampus.json",img:"https://github.com/antonelepfl/usecases/raw/dev/src/assets/images/hippocampusConnections.png"}]}},108:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(188),o=a(i),s=n(68),r=a(s);t.default={name:"modelContainer",components:{"model-item":o.default},props:["next","single","model_name","list_usecases"],data:function(){return{modelsConfig:r.default,models:[]}},methods:{selected:function(e){var t=this.$route.params.model_name;t+=e.species,t+=e.brain_structure,t+=e.cell_soma_location,t=t.toLowerCase(),this.$router.push({name:"cb_form",params:{uc_name:t}})},prettyfy:function(e){return e.split("_").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")}},mounted:function(){document.querySelector("title").innerHTML="Models";for(var e=this,t=this.modelsConfig[this.list_usecases],n=0,a=0;a<t.length;a++)this.$http.get(t[a].path).then(function(a){var i=JSON.parse(a.body);i.img=t[n].img,n+=1,e.models.push(i)},function(e){console.log(e)})}}},109:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(104),o=a(i);t.default={name:"modelItem",components:{"uc-description":o.default},data:function(){return{uc:{}}},props:{model:{type:Object}},created:function(){this.uc.title=this.model.species+" "+this.model.brain_structure+" "+this.model.cell_soma_location,this.uc.description=this.model.description,this.uc.contributors=this.model.contributors}}},160:function(e,t,n){t=e.exports=n(13)(),t.push([e.id,".item-picture[data-v-05ed7572]{width:18%;min-height:80px;min-width:140px;margin-right:3%}.uc-item[data-v-05ed7572]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.uc-description[data-v-05ed7572]{width:85%;text-align:start;padding-left:10px}.tags[data-v-05ed7572]{width:20%;padding:10px 0;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-wrap:wrap;flex-wrap:wrap}.model-item[data-v-05ed7572],.tags[data-v-05ed7572]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}","",{version:3,sources:["/./src/components/circuitbuilding/model-item.vue"],names:[],mappings:"AACA,+BACG,UAAW,AACX,gBAAiB,AACjB,gBAAiB,AACjB,eAAiB,CACnB,AACD,0BACG,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CAC1B,AACD,iCACG,UAAW,AACX,iBAAkB,AAClB,iBAAmB,CACrB,AACD,uBACG,UAAW,AACX,eAAkB,AAKlB,yBAA0B,AACtB,6BAA8B,AAClC,mBAAoB,AAChB,cAAgB,CACtB,AACD,oDATG,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CAW1B",file:"model-item.vue",sourcesContent:["\n.item-picture[data-v-05ed7572] {\n   width: 18%;\n   min-height: 80px;\n   min-width: 140px;\n   margin-right: 3%;\n}\n.uc-item[data-v-05ed7572] {\n   display: -ms-flexbox;\n   display: flex;\n   -ms-flex-align: center;\n       align-items: center;\n}\n.uc-description[data-v-05ed7572] {\n   width: 85%;\n   text-align: start;\n   padding-left: 10px;\n}\n.tags[data-v-05ed7572] {\n   width: 20%;\n   padding: 10px 0px;\n   display: -ms-flexbox;\n   display: flex;\n   -ms-flex-align: center;\n       align-items: center;\n   -ms-flex-pack: distribute;\n       justify-content: space-around;\n   -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n}\n.model-item[data-v-05ed7572] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n"],sourceRoot:"webpack://"}])},163:function(e,t,n){t=e.exports=n(13)(),t.push([e.id,".model-container[data-v-138281b2]{padding:10px;margin-top:50px}.model-container.no-title[data-v-138281b2]{padding:10px;margin-top:0}.model-container .item-sections[data-v-138281b2]{margin-top:20px;padding:10px;cursor:pointer}.model-container .selected[data-v-138281b2]{background-color:#d3d3d3;transition:background-color .5s ease}.model-container>.title[data-v-138281b2]{box-shadow:0 2px 5px rgba(0,0,0,.26);position:fixed;text-align:left;color:#fff;background-color:rgba(172,96,103,.95);padding:20px;font-size:20px;font-weight:600;top:0;left:0;width:100%;z-index:3}.model-container .disabled-tag[data-v-138281b2]{position:absolute;top:15%;left:45%;font-weight:700;border:10px solid #bacfcb;background-color:#bacfcb;border-radius:5px;z-index:2}.model-container .disabled-item[data-v-138281b2]{opacity:.5;background-color:rgba(63,58,58,.22);cursor:not-allowed}.model-container .disabled-item[data-v-138281b2]:hover{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.model-container .disabled-container[data-v-138281b2]{position:relative}@media screen and (max-width:751px){.model-container .disabled-tag[data-v-138281b2]{left:35%}}","",{version:3,sources:["/./src/components/circuitbuilding/model-container.vue"],names:[],mappings:"AACA,kCACG,aAAc,AACd,eAAiB,CACnB,AACD,2CACG,aAAc,AACd,YAAc,CAChB,AACD,iDACG,gBAAiB,AACjB,aAAc,AACd,cAAgB,CAClB,AACD,4CACG,yBAA4B,AAC5B,oCAAuC,CACzC,AACD,yCACG,qCAAsC,AACtC,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,sCAA2C,AAC3C,aAAc,AACd,eAAgB,AAChB,gBAAiB,AACjB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,SAAW,CACb,AACD,gDACG,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,gBAAiB,AACjB,0BAA2B,AAC3B,yBAA0B,AAC1B,kBAAmB,AACnB,SAAW,CACb,AACD,iDACG,WAAa,AACb,oCAAyC,AACzC,kBAAoB,CACtB,AACD,uDACG,4FAA4G,CAC9G,AACD,sDACG,iBAAmB,CACrB,AACD,oCACA,gDACM,QAAU,CACf,CACA",file:"model-container.vue",sourcesContent:["\n.model-container[data-v-138281b2] {\n   padding: 10px;\n   margin-top: 50px;\n}\n.model-container.no-title[data-v-138281b2] {\n   padding: 10px;\n   margin-top: 0;\n}\n.model-container .item-sections[data-v-138281b2] {\n   margin-top: 20px;\n   padding: 10px;\n   cursor: pointer;\n}\n.model-container .selected[data-v-138281b2] {\n   background-color: lightgray;\n   transition: background-color 0.5s ease;\n}\n.model-container > .title[data-v-138281b2] {\n   box-shadow: 0 2px 5px rgba(0,0,0,.26);\n   position: fixed;\n   text-align: left;\n   color: #fff;\n   background-color: rgba(172, 96, 103, 0.95);\n   padding: 20px;\n   font-size: 20px;\n   font-weight: 600;\n   top: 0;\n   left: 0;\n   width: 100%;\n   z-index: 3;\n}\n.model-container .disabled-tag[data-v-138281b2] {\n   position: absolute;\n   top: 15%;\n   left: 45%;\n   font-weight: 700;\n   border: 10px solid #bacfcb;\n   background-color: #bacfcb;\n   border-radius: 5px;\n   z-index: 2;\n}\n.model-container .disabled-item[data-v-138281b2] {\n   opacity: 0.5;\n   background-color: rgba(63, 58, 58, 0.22);\n   cursor: not-allowed;\n}\n.model-container .disabled-item[data-v-138281b2]:hover {\n   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.model-container .disabled-container[data-v-138281b2] {\n   position: relative;\n}\n@media screen and (max-width: 751px) {\n.model-container .disabled-tag[data-v-138281b2] {\n      left: 35%;\n}\n}\n"],sourceRoot:"webpack://"}])},168:function(e,t,n){var a=n(160);"string"==typeof a&&(a=[[e.id,a,""]]);n(14)(a,{});a.locals&&(e.exports=a.locals)},171:function(e,t,n){var a=n(163);"string"==typeof a&&(a=[[e.id,a,""]]);n(14)(a,{});a.locals&&(e.exports=a.locals)},187:function(e,t,n){n(171);var a=n(4)(n(108),n(200),"data-v-138281b2",null);e.exports=a.exports},188:function(e,t,n){n(168);var a=n(4)(n(109),n(197),"data-v-05ed7572",null);e.exports=a.exports},197:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"model-item"},[n("div",{staticClass:"item-picture"},[n("img",{attrs:{src:e.model.img,alt:""}})]),e._v(" "),n("uc-description",{staticClass:"uc-description",attrs:{uc:e.uc}})],1)},staticRenderFns:[]}},200:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"model-container"},[n("div",{staticClass:"title"},[e._v("Please select a model")]),e._v(" "),e._l(e.models,function(t){return n("div",{on:{click:function(n){e.selected(t)}}},[n("md-whiteframe",{staticClass:"item-sections",attrs:{"md-elevation":"2"}},[n("model-item",{attrs:{model:t}})],1)],1)})],2)},staticRenderFns:[]}}});
//# sourceMappingURL=3.8e23bac935f79c8e6393.js.map