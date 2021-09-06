var e=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(o,s,a)=>s in o?e(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a;import{d as t,u as i,l as p,m as d,a as u,b as c,w as m,t as g,p as w,g as f,E as y,r as b,o as v,h,v as F,s as O,i as P,a4 as j,z as T,J as R}from"./vendor.929ee8ac.js";const V=t({components:{},setup(){const e=i(),t=p(),w=d();let f=u({loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]},loading:!1,passwordType:"password",redirect:void 0});const b=c(null),v=c(null);m(w,(e=>{f.redirect=e.query&&e.query.redirect}),{immediate:!0});return h=((e,o)=>{for(var s in o||(o={}))r.call(o,s)&&n(e,s,o[s]);if(a)for(var s of a(o))l.call(o,s)&&n(e,s,o[s]);return e})({},g(f)),o(h,s({passwordRef:b,loginFormRef:v,showPwd:()=>{"password"===f.passwordType?f.passwordType="":f.passwordType="password",y((()=>{b.value.focus()}))},handleLogin:()=>{v.value.validate((o=>{if(!o)return console.log("error submit!!"),!1;f.loading=!0,e.dispatch("user/login",f.loginForm).then((()=>{t.push({path:f.redirect||"/"}),f.loading=!1})).catch((()=>{f.loading=!1}))}))}}));var h}});w("data-v-113b0af2");const _={class:"login-container"},x=P("div",{class:"title-container"},[P("h3",{class:"title"},"后台管理系统")],-1),k={class:"svg-container"},q={class:"svg-container"},C=R(" 登录");f(),V.render=function(e,o,s,a,r,l){const n=b("svg-icon"),t=b("el-input"),i=b("el-form-item"),p=b("el-button"),d=b("el-form");return v(),h("div",_,[F(d,{ref:"loginFormRef",model:e.loginForm,rules:e.loginRules,class:"login-form","auto-complete":"on","label-position":"left"},{default:O((()=>[x,F(i,{prop:"username"},{default:O((()=>[P("span",k,[F(n,{"icon-class":"user"})]),F(t,{ref:"username",modelValue:e.loginForm.username,"onUpdate:modelValue":o[0]||(o[0]=o=>e.loginForm.username=o),placeholder:"用户名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},null,8,["modelValue"])])),_:1}),F(i,{prop:"password"},{default:O((()=>[P("span",q,[F(n,{"icon-class":"password"})]),F(t,{key:e.passwordType,ref:"passwordRef",modelValue:e.loginForm.password,"onUpdate:modelValue":o[1]||(o[1]=o=>e.loginForm.password=o),type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on",onKeyup:j(e.handleLogin,["enter"])},null,8,["modelValue","type","onKeyup"]),P("span",{class:"show-pwd",onClick:o[2]||(o[2]=(...o)=>e.showPwd&&e.showPwd(...o))},[F(n,{"icon-class":"password"===e.passwordType?"eye":"eye-open"},null,8,["icon-class"])])])),_:1}),F(p,{loading:e.loading,type:"primary",style:{width:"100%","margin-bottom":"30px"},onClick:T(e.handleLogin,["prevent"])},{default:O((()=>[C])),_:1},8,["loading","onClick"])])),_:1},8,["model","rules"])])},V.__scopeId="data-v-113b0af2";export{V as default};
