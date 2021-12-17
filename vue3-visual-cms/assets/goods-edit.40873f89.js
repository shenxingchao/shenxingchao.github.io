var j=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var b=(o,e,t)=>e in o?j(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,v=(o,e)=>{for(var t in e||(e={}))R.call(e,t)&&b(o,t,e[t]);if(F)for(var t of F(e))k.call(e,t)&&b(o,t,e[t]);return o},V=(o,e)=>w(o,y(e));import{d as q,D,F as S,q as B,g as G,m as H,t as N,r as n,j as I,C as l,x as s,o as K,K as M,U as h}from"./vendor.b68ac253.js";import{U as T,E as z}from"./index.819fe2a2.js";import{c as A,d as J}from"./goods.c61ebc51.js";import{_ as L}from"./hover.0d157e2e.js";import"./index.3f154c19.js";const O=q({name:"GoodsEdit",components:{Upload:T,Editor:z},setup(){const{proxy:o}=M(),e=D(),t=S(),i=B(null);let u=G({ruleForm:{id:t.query.id,goods_name:"",goods_price:0,goods_image_url:"",goods_detail:"",status:!0},rules:{goods_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"}],goods_price:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C",trigger:"blur"}]}});H(()=>{g()});const g=()=>{A({id:u.ruleForm.id}).then(a=>{u.ruleForm=a.data}).catch(()=>{})},m=()=>{i.value.validate(a=>{if(a)J(u.ruleForm).then(c=>{o.$message({message:"\u4FDD\u5B58\u6210\u529F",type:"success",duration:1500,onClose:function(){e.push("/goods/goods-list")}})}).catch(()=>{});else return console.log("error submit!!"),!1})},d=()=>{i.value.resetFields()},p=a=>{u.ruleForm.goods_image_url=a,i.value.clearValidate("goods_image_url")},_=a=>{u.ruleForm.goods_detail=a};return V(v({},N(u)),{ruleFormRef:i,submitForm:m,resetForm:d,handleUploadSuccess:p,handleChangeEditor:_})}}),P={class:"app-container"},Q=h("\u4FDD\u5B58"),W=h("\u91CD\u7F6E");function X(o,e,t,i,u,g){const m=n("el-input"),d=n("el-form-item"),p=n("el-input-number"),_=n("upload"),a=n("editor"),c=n("el-switch"),f=n("el-button"),C=n("el-form"),$=n("el-col"),U=n("el-row"),E=n("el-card");return K(),I("div",P,[l(E,{shadow:"hover"},{default:s(()=>[l(U,{justify:"start"},{default:s(()=>[l($,{xs:24,md:16},{default:s(()=>[l(C,{ref:"ruleFormRef",rules:o.rules,model:o.ruleForm,"label-position":"right","label-width":"150px"},{default:s(()=>[l(d,{label:"\u540D\u79F0",prop:"goods_name"},{default:s(()=>[l(m,{modelValue:o.ruleForm.goods_name,"onUpdate:modelValue":e[0]||(e[0]=r=>o.ruleForm.goods_name=r),placeholder:"\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u4EF7\u683C",prop:"goods_price"},{default:s(()=>[l(p,{modelValue:o.ruleForm.goods_price,"onUpdate:modelValue":e[1]||(e[1]=r=>o.ruleForm.goods_price=r),placeholder:"\u4EF7\u683C",min:0,precision:2,"controls-position":"right"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u56FE\u7247",prop:"goods_image_url"},{default:s(()=>[l(_,{file:o.ruleForm.goods_image_url,onHandleUploadSuccess:e[2]||(e[2]=r=>o.handleUploadSuccess(r)),onHandleDeleteFile:e[3]||(e[3]=r=>o.ruleForm.goods_image_url="")},null,8,["file"])]),_:1}),l(d,{label:"\u8BE6\u60C5",prop:"goods_detail"},{default:s(()=>[l(a,{value:o.ruleForm.goods_detail,onChange:e[4]||(e[4]=r=>o.handleChangeEditor(r))},null,8,["value"])]),_:1}),l(d,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[l(c,{modelValue:o.ruleForm.status,"onUpdate:modelValue":e[5]||(e[5]=r=>o.ruleForm.status=r),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),_:1}),l(d,null,{default:s(()=>[l(f,{type:"primary",onClick:e[6]||(e[6]=r=>o.submitForm())},{default:s(()=>[Q]),_:1}),l(f,{onClick:e[7]||(e[7]=r=>o.resetForm())},{default:s(()=>[W]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})]),_:1})]),_:1})])}var te=L(O,[["render",X]]);export{te as default};
