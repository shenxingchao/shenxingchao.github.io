(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378b90c0"],{2423:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"d",(function(){return n})),i.d(t,"e",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"b",(function(){return s}));var l=i("b775");function r(e){return Object(l["a"])({url:"/Article/articleAdd",method:"post",data:e})}function n(e){return Object(l["a"])({url:"/Article/articleEdit",method:"post",data:e})}function a(e){return Object(l["a"])({url:"/Article/articleLst",method:"get",params:e})}function o(e){return Object(l["a"])({url:"/Article/articleDetail",method:"get",params:e})}function s(e){return Object(l["a"])({url:"/Article/articleDelete",method:"post",data:e})}},"495d":function(e,t,i){"use strict";var l=i("9b3f"),r=i.n(l);r.a},"6d02":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-card",{attrs:{shadow:"hover"}},[i("el-row",{attrs:{type:"flex",justify:"left"}},[i("el-col",{attrs:{xs:24,md:12}},[i("el-form",{ref:"ruleForm",attrs:{rules:e.rules,model:e.ruleForm,"label-position":"right","label-width":"150px"}},[i("el-form-item",{attrs:{label:e.$t("field.title"),prop:"title"}},[i("el-input",{attrs:{placeholder:e.$t("field.title")},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),i("el-form-item",{attrs:{label:e.$t("field.image"),prop:"image"}},[i("Upload",{on:{handleUploadSuccess:function(t){return e.handleUploadSuccess(t)},handleDeleteFile:function(t){e.ruleForm.image=""}}})],1),i("el-form-item",{attrs:{label:e.$t("field.image_list"),prop:"image_list"}},[i("Upload",{attrs:{multiple:""},on:{handleUploadMultipleSuccess:function(t){return e.handleUploadMultipleSuccess(t)},handleClickDeleteMultiple:function(t){e.ruleForm.image_list=t}}})],1),i("el-form-item",{attrs:{label:e.$t("field.author"),prop:"author"}},[i("el-input",{attrs:{placeholder:e.$t("field.author")},model:{value:e.ruleForm.author,callback:function(t){e.$set(e.ruleForm,"author",t)},expression:"ruleForm.author"}})],1),i("el-form-item",{attrs:{label:e.$t("field.detail"),prop:"detail"}},[i("QuillEditor",{attrs:{url:e.serverUrl,header:e.header,value:e.ruleForm.detail},on:{input:function(t){return e.input(t)}}})],1),i("el-form-item",{attrs:{label:e.$t("field.recommend"),prop:"recommend"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.recommend,callback:function(t){e.$set(e.ruleForm,"recommend",t)},expression:"ruleForm.recommend"}})],1),i("el-form-item",{attrs:{label:e.$t("field.top"),prop:"top"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.top,callback:function(t){e.$set(e.ruleForm,"top",t)},expression:"ruleForm.top"}})],1),i("el-form-item",{attrs:{label:e.$t("field.status"),prop:""}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.$t("opt.confirm")))]),i("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v(e._s(e.$t("opt.reset")))])],1)],1)],1)],1)],1)],1)},r=[],n=i("2423"),a=i("c7f0"),o=i("b930"),s=i("5f87"),u=i("01ea"),c={name:"ArticleAdd",components:{Upload:a["a"],QuillEditor:o["a"]},data:function(){return{ruleForm:{title:"",image:"",image_list:[],author:"",type:"",detail:"",recommend:!0,top:!0,status:!0},rules:{title:[{required:!0,message:this.$i18n.t("tips.input")+this.$i18n.t("field.title"),trigger:"blur"}],image:[{required:!0,message:this.$i18n.t("tips.upload")+this.$i18n.t("field.image")}],image_list:[{required:!0,message:this.$i18n.t("tips.upload")+this.$i18n.t("field.image_list")}],author:[{required:!0,message:this.$i18n.t("tips.input")+this.$i18n.t("field.author"),trigger:"blur"}],detail:[{required:!0,message:this.$i18n.t("tips.input")+this.$i18n.t("field.detail")}]},header:{"X-Token":Object(s["a"])()},serverUrl:u["a"]+"/Upload/fileUpload"}},mounted:function(){},methods:{submitForm:function(e){var t=this,i=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(n["a"])(t.ruleForm).then((function(e){t.$message({message:t.$i18n.t("tips.add_success"),type:"success",onClose:function(){i.$router.push("/article/article-list")}})})).catch((function(){}))}))},resetForm:function(e){this.$refs[e].resetFields()},handleUploadSuccess:function(e){this.ruleForm.image=e,this.$refs["ruleForm"].clearValidate("image")},handleUploadMultipleSuccess:function(e){this.ruleForm.image_list=e,this.$refs["ruleForm"].clearValidate("image_list")},input:function(e){this.ruleForm.detail=e}}},d=c,m=i("2877"),f=Object(m["a"])(d,l,r,!1,null,null,null);t["default"]=f.exports},"9b3f":function(e,t,i){},"9c70":function(e,t){},b731:function(e,t,i){},b930:function(e,t,i){"use strict";var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.url,headers:e.header,"show-file-list":!1,"on-success":e.uploadSuccess,"on-error":e.uploadError,"before-upload":e.beforeUpload,name:"img"}}),i("quill-editor",{ref:"myQuillEditor",staticClass:"editor",attrs:{options:e.editorOption},on:{blur:function(t){return e.onEditorBlur(t)},focus:function(t){return e.onEditorFocus(t)},change:function(t){return e.onEditorChange(t)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},r=[],n=(i("a9e3"),i("9339")),a=i.n(n),o=i("953d"),s=i("f318"),u=i.n(s),c=(i("a753"),i("8096"),i("14e1"),[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image"]]);a.a.register("modules/imageResize",u.a);var d={components:{quillEditor:o["quillEditor"]},props:{value:{type:String,default:""},maxSize:{type:Number,default:4e3},url:{type:String,default:""},header:{type:Object,default:null}},data:function(){return{content:this.value,quillUpdateImg:!1,editorOption:{theme:"snow",placeholder:"您想说点什么？",modules:{toolbar:{container:c,handlers:{image:function(e){e?document.querySelector(".avatar-uploader input").click():this.quill.format("image",!1)}}},imageResize:{displayStyles:{backgroundColor:"black",border:"none",color:"white"},modules:["Resize","DisplaySize","Toolbar"]}}}}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},watch:{value:function(e,t){this.content=e}},methods:{onEditorBlur:function(){},onEditorFocus:function(){},onEditorChange:function(){this.$emit("input",this.content)},beforeUpload:function(){this.quillUpdateImg=!0},uploadSuccess:function(e,t){var i=this.$refs.myQuillEditor.quill,l=i.getSelection().index;i.insertEmbed(l,"image",e.data.imgUrl),i.setSelection(l+1),this.quillUpdateImg=!1},uploadError:function(){this.quillUpdateImg=!1,this.$message.error("图片插入失败")}}},m=d,f=(i("bd2c"),i("2877")),p=Object(f["a"])(m,l,r,!1,null,null,null);t["a"]=p.exports},bd2c:function(e,t,i){"use strict";var l=i("b731"),r=i.n(l);r.a},c7f0:function(e,t,i){"use strict";var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-file-commpent"},[e.multiple?e._e():[e.imgUrl?i("div",{staticClass:"uplaod-file-preview",on:{mouseenter:function(t){e.isShowOpt=!0},mouseleave:function(t){e.isShowOpt=!1}}},[i("img",{attrs:{src:e.imgUrl,alt:"上传成功图片"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowOpt,expression:"isShowOpt"}],staticClass:"opt"},[i("i",{staticClass:"el-icon-delete delete-btn",on:{click:function(t){return e.handleClickDelete()}}})])]):e._e(),e.imgUrl?e._e():i("div",{staticClass:"upload-file-btn",on:{click:function(t){return e.$refs.file.click()}}},[i("i",{staticClass:"el-icon-plus"}),i("input",{ref:"file",staticClass:"upload-file-input",attrs:{type:"file",accept:e.fileType},on:{change:function(t){return e.handleUploadFile(t.target.files[0])}}})])],e.multiple?[e._l(e.imgList,(function(t,l){return i("div",{key:l,staticClass:"uplaod-file-preview",on:{mouseenter:function(e){t.isShowMask=!0},mouseleave:function(e){t.isShowMask=!1}}},[i("img",{attrs:{src:t.url,alt:"上传成功图片"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask,expression:"item.isShowMask"}],staticClass:"opt"},[i("i",{staticClass:"el-icon-delete delete-btn",on:{click:function(t){return e.handleClickDeleteMultiple(l)}}})])])})),e.imgList.length<e.limit?i("div",{staticClass:"upload-file-btn",on:{click:function(t){return e.$refs.files.click()}}},[i("i",{staticClass:"el-icon-plus"}),i("input",{ref:"files",staticClass:"upload-file-input",attrs:{type:"file",accept:e.fileType,multiple:e.multiple},on:{change:function(t){return e.handleUploadFiles(t.target.files)}}})]):e._e()]:e._e()],2)},r=[],n=(i("4160"),i("d81d"),i("a434"),i("a9e3"),i("d3b7"),i("159b"),i("96cf"),i("1da1")),a=i("2909"),o=i("b775");function s(e){return Object(o["a"])({url:"/Upload/fileUpload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:e})}var u={name:"Upload",props:{file:{type:String,default:""},fileType:{type:String,default:"image/*"},multiple:{type:Boolean,defalut:!1},limit:{type:Number,default:3},files:{type:Array,default:function(){return[]}}},data:function(){return{imgUrl:"",imgList:[],isShowOpt:!1}},watch:{file:function(e,t){this.imgUrl=e},files:function(e,t){var i=this;this.imgList=[],e.forEach((function(e){i.imgList.push({url:e,isShowMask:!1})}))}},mounted:function(){},methods:{handleUploadFile:function(e){var t=this,i=new FormData;i.append("file",e),s(i).then((function(e){t.imgUrl=e.data.imgUrl,t.$message({message:"上传成功",type:"success",onClose:function(){}}),t.$emit("handleUploadSuccess",t.imgUrl)})).catch((function(){}))},handleClickDelete:function(){this.imgUrl="",this.$emit("handleDeleteFile")},handleClickDeleteMultiple:function(e){this.imgList.splice(e,1);var t=Object(a["a"])(this.imgList).map((function(e){return e.url}));this.$emit("handleClickDeleteMultiple",t)},handleUploadFiles:function(e){var t=this;if(e.length+this.imgUrl.length>this.limit)return this.$message({type:"error",message:"最多可上传"+this.limit+"张"}),!1;new Promise((function(i){e.forEach(function(){var l=Object(n["a"])(regeneratorRuntime.mark((function l(r,n){var a;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:return a=new FormData,a.append("file",r),l.next=4,s(a).then((function(l){t.imgList.push({url:l.data.imgUrl,isShowMask:!1}),n==e.length-1&&i()})).catch((function(){}));case 4:case"end":return l.stop()}}),l)})));return function(e,t){return l.apply(this,arguments)}}())})).then((function(){t.$message({type:"success",message:"图片列表上传成功"});var e=Object(a["a"])(t.imgList).map((function(e){return e.url}));t.$emit("handleUploadMultipleSuccess",e)}))}}},c=u,d=(i("495d"),i("2877")),m=i("fda6"),f=i.n(m),p=i("9c70"),h=i.n(p),g=Object(d["a"])(c,l,r,!1,null,"68f44108",null);"function"===typeof f.a&&f()(g),"function"===typeof h.a&&h()(g);t["a"]=g.exports},fda6:function(e,t){}}]);