(function(e){function t(t){for(var c,r,o=t[0],a=t[1],u=t[2],b=0,f=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);s&&s(t);while(f.length)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],c=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(c=!1)}c&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},i={app:0},l=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/simple-bookmark/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=a;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"76a6":function(e,t,n){},"8f9e":function(e,t,n){},b576:function(e,t,n){},c2f2:function(e,t,n){"use strict";n("b576")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),i=(n("caad"),n("2532"),Object(c["p"])("重置选中标签"));function l(e,t,n,l,r,o){var a=Object(c["P"])("el-input"),u=Object(c["P"])("el-badge"),s=Object(c["P"])("el-col"),b=Object(c["P"])("el-button"),f=Object(c["P"])("el-upload"),d=Object(c["P"])("el-avatar"),O=Object(c["P"])("el-row"),j=Object(c["P"])("el-checkbox-button"),m=Object(c["P"])("el-checkbox-group"),p=Object(c["P"])("el-empty"),h=Object(c["P"])("SiteCard"),g=Object(c["P"])("SiteCardGroup"),S=Object(c["P"])("el-scrollbar"),k=Object(c["P"])("el-main"),v=Object(c["P"])("el-container"),y=Object(c["P"])("SiteForm"),q=Object(c["P"])("el-dialog");return Object(c["I"])(),Object(c["m"])(c["b"],null,[Object(c["q"])(v,null,{default:Object(c["eb"])((function(){return[Object(c["q"])(k,{style:{"padding-bottom":"0"}},{default:Object(c["eb"])((function(){return[Object(c["q"])(O,{gutter:20},{default:Object(c["eb"])((function(){return[Object(c["q"])(s,{span:12,offset:6},{default:Object(c["eb"])((function(){return[Object(c["q"])(u,{value:o.sites.length,style:{width:"100%"}},{default:Object(c["eb"])((function(){return[Object(c["q"])(a,{circle:"",modelValue:r.input,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.input=e}),placeholder:"请输入内容",clearable:""},null,8,["modelValue"])]})),_:1},8,["value"])]})),_:1}),Object(c["q"])(s,{span:6,style:{display:"flex","align-items":"center","justify-content":"flex-end"}},{default:Object(c["eb"])((function(){return[Object(c["q"])(b,{size:"mini",icon:"el-icon-check",circle:"",onClick:o.handleSelectAllSite},null,8,["onClick"]),Object(c["q"])(f,{action:"","show-file-list":!1,accept:"application/json",style:{margin:"0 10px"},"on-change":o.handleUploadOnChange},{default:Object(c["eb"])((function(){return[Object(c["q"])(b,{size:"mini",type:"primary",icon:"el-icon-upload2",circle:""})]})),_:1},8,["on-change"]),Object(c["q"])(b,{size:"mini",type:"primary",icon:"el-icon-download",circle:"",onClick:o.handleDownload},null,8,["onClick"]),Object(c["q"])(b,{size:"mini",type:"primary",icon:"el-icon-plus",circle:"",onClick:o.handleInsert},null,8,["onClick"]),Object(c["q"])(b,{size:"mini",type:"danger",icon:"el-icon-delete",circle:"",disabled:0===r.multiSiteSelection.length,onClick:t[1]||(t[1]=function(e){return o.handleDelete()})},null,8,["disabled"]),Object(c["q"])(d,{style:{"margin-left":"10px"}})]})),_:1})]})),_:1}),Object(c["q"])(O,{gutter:20,class:"site-group"},{default:Object(c["eb"])((function(){return[Object(c["q"])(s,{span:4},{default:Object(c["eb"])((function(){return[e.tags.length>0?(Object(c["I"])(),Object(c["k"])(b,{key:0,size:"mini",type:"info",round:"",style:{width:"100%"},onClick:t[2]||(t[2]=function(e){return r.checkboxGroup1=[]})},{default:Object(c["eb"])((function(){return[i]})),_:1})):Object(c["l"])("",!0),e.tags.length>0?(Object(c["I"])(),Object(c["k"])(m,{key:1,modelValue:r.checkboxGroup1,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.checkboxGroup1=e}),size:"small"},{default:Object(c["eb"])((function(){return[(Object(c["I"])(!0),Object(c["m"])(c["b"],null,Object(c["N"])(e.tags,(function(e){return Object(c["I"])(),Object(c["k"])(j,{label:e,key:e},{default:Object(c["eb"])((function(){return[Object(c["p"])(Object(c["T"])(e),1)]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue"])):(Object(c["I"])(),Object(c["k"])(p,{key:2,description:"暂无标签"}))]})),_:1}),Object(c["q"])(s,{span:18},{default:Object(c["eb"])((function(){return[o.sites.length>0?(Object(c["I"])(),Object(c["k"])(S,{key:0,style:{width:"100%",height:"calc(100vh - 80px)"}},{default:Object(c["eb"])((function(){return[Object(c["q"])(g,null,{default:Object(c["eb"])((function(){return[(Object(c["I"])(!0),Object(c["m"])(c["b"],null,Object(c["N"])(o.sites,(function(e){return Object(c["I"])(),Object(c["k"])(h,{key:e,site:e,onClick:function(t){return o.handleClickSite(e)},onDelete:o.handleDelete,onUpdate:o.handleUpdate,onCopy:o.handleCopy,selected:r.multiSiteSelection.includes(e)},null,8,["site","onClick","onDelete","onUpdate","onCopy","selected"])})),128))]})),_:1})]})),_:1})):(Object(c["I"])(),Object(c["k"])(p,{key:1,description:"暂无数据"}))]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(c["q"])(q,{title:r.dialog.title,modelValue:r.dialog.visible,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.dialog.visible=e}),width:"60%"},{default:Object(c["eb"])((function(){return[Object(c["q"])(y,{ref:"siteForm",onSubmit:o.handleSubmitForm},null,8,["onSubmit"])]})),_:1},8,["title","modelValue"])],64)}var r=n("2909"),o=n("5530"),a=(n("4de4"),n("d3b7"),n("c740"),n("99af"),n("a434"),n("e9c4"),n("5502")),u=(n("9911"),Object(c["p"])(" 标题 ")),s=Object(c["n"])("i",{class:"el-icon-info"},null,-1),b=Object(c["p"])(" 地址 "),f=Object(c["n"])("i",{class:"el-icon-info"},null,-1),d=Object(c["p"])(" 图标 "),O=Object(c["n"])("i",{class:"el-icon-info"},null,-1),j=Object(c["p"])(" 描述 "),m=Object(c["n"])("i",{class:"el-icon-info"},null,-1),p=Object(c["p"])(" 排序 "),h=Object(c["n"])("i",{class:"el-icon-info"},null,-1),g=Object(c["p"])(" 标签 "),S=Object(c["n"])("i",{class:"el-icon-info"},null,-1),k={class:"site-tags",style:{display:"inline","margin-right":"10px"}},v=Object(c["p"])("+ New Tag"),y=Object(c["p"])("提交"),q=Object(c["p"])("重置");function _(e,t,n,i,l,r){var o=Object(c["P"])("el-tooltip"),a=Object(c["P"])("el-input"),_=Object(c["P"])("el-form-item"),C=Object(c["P"])("el-tag"),P=Object(c["P"])("el-option"),x=Object(c["P"])("el-select"),w=Object(c["P"])("el-button"),T=Object(c["P"])("el-form");return Object(c["I"])(),Object(c["k"])(T,{ref:"form",model:l.form,rules:l.rules,"label-width":"100px"},{default:Object(c["eb"])((function(){return[Object(c["q"])(_,{label:"标题",prop:"title"},{label:Object(c["eb"])((function(){return[u,Object(c["q"])(o,{effect:"dark",content:"标题",placement:"right"},{default:Object(c["eb"])((function(){return[s]})),_:1})]})),default:Object(c["eb"])((function(){return[Object(c["q"])(a,{modelValue:l.form.title,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.form.title=e})},null,8,["modelValue"])]})),_:1}),Object(c["q"])(_,{label:"地址",prop:"link"},{label:Object(c["eb"])((function(){return[b,Object(c["q"])(o,{effect:"dark",content:"地址",placement:"right"},{default:Object(c["eb"])((function(){return[f]})),_:1})]})),default:Object(c["eb"])((function(){return[Object(c["q"])(a,{modelValue:l.form.link,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.form.link=e})},null,8,["modelValue"])]})),_:1}),Object(c["q"])(_,{label:"图标",prop:"avatar"},{label:Object(c["eb"])((function(){return[d,Object(c["q"])(o,{effect:"dark",content:"图标",placement:"right"},{default:Object(c["eb"])((function(){return[O]})),_:1})]})),default:Object(c["eb"])((function(){return[Object(c["q"])(a,{modelValue:l.form.avatar,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.form.avatar=e})},null,8,["modelValue"])]})),_:1}),Object(c["q"])(_,{label:"描述",prop:"desc"},{label:Object(c["eb"])((function(){return[j,Object(c["q"])(o,{effect:"dark",content:"描述",placement:"right"},{default:Object(c["eb"])((function(){return[m]})),_:1})]})),default:Object(c["eb"])((function(){return[Object(c["q"])(a,{modelValue:l.form.desc,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.form.desc=e})},null,8,["modelValue"])]})),_:1}),Object(c["q"])(_,{label:"排序",prop:"sortWeight"},{label:Object(c["eb"])((function(){return[p,Object(c["q"])(o,{effect:"dark",content:"排序权重，值越大越靠前",placement:"right"},{default:Object(c["eb"])((function(){return[h]})),_:1})]})),default:Object(c["eb"])((function(){return[Object(c["q"])(a,{modelValue:l.form.sortWeight,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.form.sortWeight=e}),type:"number",placeholder:"排序权重值，值越大越靠前"},null,8,["modelValue"])]})),_:1}),Object(c["q"])(_,{label:"标签",prop:"tags"},{label:Object(c["eb"])((function(){return[g,Object(c["q"])(o,{effect:"dark",content:"标签",placement:"right"},{default:Object(c["eb"])((function(){return[S]})),_:1})]})),default:Object(c["eb"])((function(){return[Object(c["n"])("div",k,[(Object(c["I"])(!0),Object(c["m"])(c["b"],null,Object(c["N"])(l.form.tags,(function(e){return Object(c["I"])(),Object(c["k"])(C,{class:"site-tag",key:e,closable:"","disable-transitions":!1,onClose:function(t){return r.handleCloseTag(e)}},{default:Object(c["eb"])((function(){return[Object(c["p"])(Object(c["T"])(e),1)]})),_:2},1032,["onClose"])})),128))]),l.tagVisible?(Object(c["I"])(),Object(c["k"])(x,{key:0,modelValue:l.tag,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.tag=e}),"allow-create":"",filterable:"",placeholder:"请选择标签",onChange:r.handleChangeSelect},{default:Object(c["eb"])((function(){return[(Object(c["I"])(!0),Object(c["m"])(c["b"],null,Object(c["N"])(e.tags,(function(e){return Object(c["I"])(),Object(c["k"])(P,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])):(Object(c["I"])(),Object(c["k"])(w,{key:1,size:"small",onClick:r.handleShowTagSelect},{default:Object(c["eb"])((function(){return[v]})),_:1},8,["onClick"]))]})),_:1}),Object(c["q"])(_,null,{default:Object(c["eb"])((function(){return[Object(c["q"])(w,{type:"primary",onClick:r.handleSubmit},{default:Object(c["eb"])((function(){return[y]})),_:1},8,["onClick"]),Object(c["q"])(w,{onClick:r.handleReset},{default:Object(c["eb"])((function(){return[q]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model","rules"])}n("6062"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276");var C={name:"SiteForm",props:{value:Object},computed:Object(o["a"])({},Object(a["b"])({tags:"tags"})),data:function(){return{tagVisible:!1,tag:"",form:{link:"",avatar:"",title:"",desc:"",sortWeight:0,tags:[],timestamp:0},rules:{link:[{required:!0,message:"请输入地址",trigger:"blur"}],avatar:[{required:!0,message:"请输入图标",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}],sortWeight:[{required:!0,message:"请输入排序权重",trigger:"blur"}]}}},methods:{handleCloseTag:function(e){this.form.tags.splice(this.form.tags.indexOf(e),1)},handleSubmit:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.$emit("submit",Object(o["a"])(Object(o["a"])({},e.form),{},{timestamp:e.form.timestamp?e.form.timestamp:(new Date).getTime()}))}))},handleSet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.form=Object(o["a"])(Object(o["a"])({},this.form),e)},handleReset:function(){this.$refs.form.resetFields(),this.form.timestamp=0,this.$emit("reset")},handleShowTagSelect:function(){this.tagVisible=!0},handleChangeSelect:function(e){this.form.tags=Object(r["a"])(new Set([].concat(Object(r["a"])(this.form.tags),Object(r["a"])(e.split(","))))),this.tag="",this.tagVisible=!1}}},P=n("6b0d"),x=n.n(P);const w=x()(C,[["render",_]]);var T=w,V={class:"site-group"};function I(e,t,n,i,l,r){return Object(c["I"])(),Object(c["m"])("div",V,[Object(c["O"])(e.$slots,"default")])}var $={name:"SiteCardGroup",date:function(){return{}}};n("c2f2");const U=x()($,[["render",I]]);var z=U,D={class:"site-header"},F={class:"site-header-right"},E={class:"site-title"},G={class:"site-tags"},W={class:"site-desc"};function N(e,t,n,i,l,r){var o=Object(c["P"])("el-button"),a=Object(c["P"])("el-row"),u=Object(c["P"])("el-avatar"),s=Object(c["P"])("el-link"),b=Object(c["P"])("el-tag"),f=Object(c["P"])("el-card");return Object(c["I"])(),Object(c["k"])(f,{class:Object(c["z"])(["site",{selected:n.selected}])},{default:Object(c["eb"])((function(){return[Object(c["O"])(e.$slots,"header"),Object(c["q"])(a,{style:{position:"absolute",top:"6px",right:"4px"}},{default:Object(c["eb"])((function(){return[Object(c["q"])(o,{size:"mini",icon:"el-icon-edit",circle:"",onClick:t[0]||(t[0]=Object(c["hb"])((function(t){return e.$emit("update",r.cloneSite(n.site))}),["stop"]))}),Object(c["q"])(o,{size:"mini",icon:"el-icon-copy-document",circle:"",onClick:t[1]||(t[1]=Object(c["hb"])((function(t){return e.$emit("copy",r.cloneSite(n.site))}),["stop"]))}),Object(c["q"])(o,{size:"mini",type:"danger",icon:"el-icon-delete",circle:"",onClick:t[2]||(t[2]=Object(c["hb"])((function(t){return e.$emit("delete",r.cloneSite(n.site))}),["stop"]))})]})),_:1}),Object(c["n"])("div",D,[Object(c["q"])(u,{class:"site-avatar",size:60,src:n.site.avatar},null,8,["src"]),Object(c["n"])("div",F,[Object(c["q"])(s,{href:n.site.link,target:"_blank",underline:!1},{default:Object(c["eb"])((function(){return[Object(c["n"])("div",E,Object(c["T"])(n.site.title),1)]})),_:1},8,["href"]),Object(c["n"])("div",G,[(Object(c["I"])(!0),Object(c["m"])(c["b"],null,Object(c["N"])(n.site.tags,(function(e){return Object(c["I"])(),Object(c["k"])(b,{class:"site-tag",key:e,size:"small"},{default:Object(c["eb"])((function(){return[Object(c["p"])(Object(c["T"])(e),1)]})),_:2},1024)})),128))])])]),Object(c["n"])("div",W,[Object(c["n"])("small",null,Object(c["T"])(n.site.desc),1)])]})),_:3},8,["class"])}var B={name:"SiteCard",props:{site:Object,selected:{type:Boolean,default:!1}},data:function(){return{multipleSelection:[]}},methods:{cloneSite:function(e){var t=Object(o["a"])({},e);return t.tags=Object(r["a"])(e.tags),t}}};n("f797");const A=x()(B,[["render",N]]);var J=A,M=n("21a6"),R={name:"App",components:{SiteForm:T,SiteCardGroup:z,SiteCard:J},computed:Object(o["a"])(Object(o["a"])({},Object(a["b"])({mapSites:"sites",tags:"tags"})),{},{sites:function(){var e=this;return this.mapSites.filter((function(t){return-1!==t.title.indexOf(e.input)&&(0===e.checkboxGroup1.length||t.tags.filter((function(t){return e.checkboxGroup1.indexOf(t)>-1})).length===e.checkboxGroup1.length)}))}}),data:function(){return{input:"",radio1:"",multiSiteSelection:[],checkboxGroup1:[],tabs:[],dialog:{title:"",visible:!1,form:{link:"",avatar:"",title:"",desc:"",sortWeight:0,tags:[]},rules:{link:[{required:!0,message:"请输入地址",trigger:"blur"}],avatar:[{required:!0,message:"请输入图标",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}],sortWeight:[{required:!0,message:"请输入排序权重",trigger:"blur"}]}}}},methods:{handleInsert:function(){this.dialog.title="新增",this.toggleDialog()},handleSubmitForm:function(e){var t=this.mapSites.findIndex((function(t){return t.timestamp===e.timestamp})),n=Object(r["a"])(this.mapSites);-1===t?this.$store.commit("SET_SITES",[].concat(Object(r["a"])(n),[Object(o["a"])({},e)])):(n[t]=e,this.$store.commit("SET_SITES",Object(r["a"])(n))),this.toggleDialog()},toggleDialog:function(){this.$refs.siteForm&&this.$refs.siteForm.handleReset(),this.dialog.visible=!this.dialog.visible},handleClickSite:function(e){var t=this.multiSiteSelection.indexOf(e);-1===t?this.multiSiteSelection.splice(this.multiSiteSelection.length-1,0,e):this.multiSiteSelection.splice(t,1)},handleDelete:function(e){var t=this;e=e?[e]:this.multiSiteSelection,this.$confirm("此操作将永久删除所选内容, 是否继续?","确认信息",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){t.$store.commit("SET_SITES",t.mapSites.filter((function(t){return!e.includes(t)}))),t.$message.success("操作成功")})).catch((function(){t.$message.success("操作取消")}))},handleUpdate:function(e){var t=this,n=Object(o["a"])({},e);this.dialog.title="修改",this.$nextTick((function(){t.$refs.siteForm.handleSet(n)})),this.toggleDialog()},handleCopy:function(e){var t=this,n=Object(o["a"])({},e);this.dialog.title="复制",this.toggleDialog(),this.$nextTick((function(){delete n.timestamp,t.$refs.siteForm.handleSet(n)}))},handleSelectAllSite:function(){this.multiSiteSelection=Object(r["a"])(this.sites)},handleDownload:function(){var e=this;this.$confirm("此操作将下载所有内容, 是否继续?","确认信息",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new Blob([JSON.stringify(e.mapSites)],{type:"text/plain;charset=ytf-8"});Object(M["saveAs"])(t,"simple-bookmark.".concat((new Date).getTime(),".json"))})).catch((function(){e.$message.success("操作取消")}))},handleUploadOnChange:function(e,t){var n=this;console.log(e,t);var c=new FileReader;c.readAsText(e.raw,"utf-8"),c.onload=function(e){var t=e.target.result;n.$store.commit("SET_SITES",[].concat(Object(r["a"])(n.mapSites),Object(r["a"])(JSON.parse(t))))}}}};n("d02e");const L=x()(R,[["render",l]]);var H=L,K=(n("4e82"),n("0e44")),Q=Object(a["a"])({state:{siteInfo:{href:"",title:"",keywards:[],description:"",icon:"",timestamp:0,sortWeight:0},siteList:[],sites:[]},mutations:{SET_SITES:function(e,t){e.sites=t}},actions:{},getters:{sites:function(e){return e.sites.sort((function(e,t){return t.sortWeight-e.sortWeight}))},tags:function(e){return Object(r["a"])(new Set(e.sites.reduce((function(e,t){return e.concat(t.tags||[])}),[])))}},plugins:[Object(K["a"])()]}),X=n("7864");n("7dd6");Object(c["j"])(H).use(Q).use(X["a"]).mount("#app")},d02e:function(e,t,n){"use strict";n("8f9e")},f797:function(e,t,n){"use strict";n("76a6")}});
//# sourceMappingURL=app.cf31ef9d.js.map