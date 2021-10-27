var w=Object.defineProperty,S=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var b=(e,l,r)=>l in e?w(e,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[l]=r,F=(e,l)=>{for(var r in l||(l={}))k.call(l,r)&&b(e,r,l[r]);if(c)for(var r of c(l))q.call(l,r)&&b(e,r,l[r]);return e},v=(e,l)=>S(e,j(l));import{d as A,m as E,a as H,b as M,t as R,r as s,g as D,l as t,v as a,A as B,o as N,J as V,y as U}from"./vendor.fc8b2226.js";import{a as I}from"./article.8215b578.js";import{U as J,E as T}from"./index.a01cb827.js";import{_ as z}from"./index.9fc33944.js";const G=A({name:"ArticleAdd",components:{Upload:J,Editor:T},setup(){const{proxy:e}=B(),l=E();let r=H({ruleForm:{title:"",image:"",image_list:[],author:"",type:"",detail:"",recommend:!0,top:!0,status:!0},rules:{title:[{required:!0,message:e.$t("tips.input")+e.$t("field.title"),trigger:"blur"}],image:[{required:!0,message:e.$t("tips.upload")+e.$t("field.image")}],image_list:[{required:!0,message:e.$t("tips.upload")+e.$t("field.image_list")}],author:[{required:!0,message:e.$t("tips.input")+e.$t("field.author"),trigger:"blur"}],detail:[{required:!0,message:e.$t("tips.input")+e.$t("field.detail")}]}});const d=M(null),f=()=>{d.value.validate(u=>{if(u)I(r.ruleForm).then(p=>{e.$message({message:e.$t("tips.add_success"),type:"success",onClose:function(){l.push("/article/article-list")}})}).catch(()=>{});else return console.log("error submit!!"),!1})},g=()=>{d.value.resetFields()},n=u=>{r.ruleForm.image=u,d.value.clearValidate("image")},i=u=>{r.ruleForm.image_list=u,d.value.clearValidate("image_list")},m=u=>{r.ruleForm.detail=u};return v(F({},R(r)),{ruleFormRef:d,submitForm:f,resetForm:g,handleUploadSuccess:n,handleUploadMultipleSuccess:i,handleChangeEditor:m})}}),K={class:"app-container"};function L(e,l,r,d,f,g){const n=s("el-input"),i=s("el-form-item"),m=s("upload"),u=s("editor"),p=s("el-switch"),$=s("el-button"),C=s("el-form"),h=s("el-col"),y=s("el-row"),_=s("el-card");return N(),D("div",K,[t(_,{shadow:"hover"},{default:a(()=>[t(y,{type:"flex",justify:"left"},{default:a(()=>[t(h,{xs:24,md:16},{default:a(()=>[t(C,{ref:"ruleFormRef",rules:e.rules,model:e.ruleForm,"label-position":"right","label-width":"150px"},{default:a(()=>[t(i,{label:e.$t("field.title"),prop:"title"},{default:a(()=>[t(n,{modelValue:e.ruleForm.title,"onUpdate:modelValue":l[0]||(l[0]=o=>e.ruleForm.title=o),placeholder:e.$t("field.title")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:e.$t("field.image"),prop:"image"},{default:a(()=>[t(m,{onHandleUploadSuccess:l[1]||(l[1]=o=>e.handleUploadSuccess(o)),onHandleDeleteFile:l[2]||(l[2]=o=>e.ruleForm.image="")})]),_:1},8,["label"]),t(i,{label:e.$t("field.image_list"),prop:"image_list"},{default:a(()=>[t(m,{multiple:"",onHandleUploadMultipleSuccess:l[3]||(l[3]=o=>e.handleUploadMultipleSuccess(o)),onHandleClickDeleteMultiple:l[4]||(l[4]=o=>e.ruleForm.image_list=o)})]),_:1},8,["label"]),t(i,{label:e.$t("field.author"),prop:"author"},{default:a(()=>[t(n,{modelValue:e.ruleForm.author,"onUpdate:modelValue":l[5]||(l[5]=o=>e.ruleForm.author=o),placeholder:e.$t("field.author")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(i,{label:e.$t("field.detail"),prop:"detail"},{default:a(()=>[t(u,{value:e.ruleForm.detail,onChange:l[6]||(l[6]=o=>e.handleChangeEditor(o))},null,8,["value"])]),_:1},8,["label"]),t(i,{label:e.$t("field.recommend"),prop:"recommend"},{default:a(()=>[t(p,{modelValue:e.ruleForm.recommend,"onUpdate:modelValue":l[7]||(l[7]=o=>e.ruleForm.recommend=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),_:1},8,["label"]),t(i,{label:e.$t("field.top"),prop:"top"},{default:a(()=>[t(p,{modelValue:e.ruleForm.top,"onUpdate:modelValue":l[8]||(l[8]=o=>e.ruleForm.top=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),_:1},8,["label"]),t(i,{label:e.$t("field.status"),prop:""},{default:a(()=>[t(p,{modelValue:e.ruleForm.status,"onUpdate:modelValue":l[9]||(l[9]=o=>e.ruleForm.status=o),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),_:1},8,["label"]),t(i,null,{default:a(()=>[t($,{type:"primary",onClick:l[10]||(l[10]=o=>e.submitForm())},{default:a(()=>[V(U(e.$t("opt.confirm")),1)]),_:1}),t($,{onClick:l[11]||(l[11]=o=>e.resetForm())},{default:a(()=>[V(U(e.$t("opt.reset")),1)]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})]),_:1})]),_:1})])}var Y=z(G,[["render",L]]);export{Y as default};
