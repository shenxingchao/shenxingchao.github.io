var $=Object.defineProperty;var l=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var i=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,r=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&i(e,n,t[n]);if(l)for(var n of l(t))T.call(t,n)&&i(e,n,t[n]);return e};import{d,u,g as m,t as _,r as x,o as c,j as f,H as V,I as D,c as g,x as j,U as k,J as R,S as w,a5 as B,Y as N,D as S,F as U,h as b,q as F,C as L}from"./vendor.d9db8d1a.js";import{C as q,a as A}from"./CmsImageTextRow.681ea48c.js";import{_ as v}from"./componentInstall.5c20f8f0.js";import{a as E}from"./index.86dad8f4.js";const G=d({name:"IndexComponentTree",components:{CmsImage:q,CmsImageTextRow:A},props:{component_tree_list:{type:Array,default:()=>[]}},setup(e,{emit:t}){const n=u();let s=m({sotre_component_tree_list:n.state.component_tree_list});return r({},_(s))}});function H(e,t,n,s,a,C){const p=x("index-component-tree",!0);return c(!0),f(D,null,V(e.component_tree_list,(o,h)=>(c(),g(N(o.name),B({key:o.id+h,id:o.id},o.props,{modelValue:o.value,"onUpdate:modelValue":I=>o.value=I,style:o.style,draggable:!1}),{default:j(()=>[k(R(o.text)+" ",1),o.children?(c(),g(p,{key:0,component_tree_list:o.children},null,8,["component_tree_list"])):w("",!0)]),_:2},1040,["id","modelValue","onUpdate:modelValue","style"]))),128)}var J=v(G,[["render",H]]);function M(e){return E({url:"/Index/GetIndexTemplateDetail",method:"get",params:e})}const P=d({name:"Index",components:{IndexComponentTree:J},setup(){const e=u();S(),U();const t=m({component_tree_list:b({get(){return e.state.component_tree_list},set(a){e.dispatch("handleChangeComponentTreeList",a)}})});let n=m({});F(()=>{s()});const s=()=>{M({}).then(a=>{t.component_tree_list=a.data.component_tree_list}).catch(()=>{})};return r(r({},_(n)),_(t))}}),Y={class:"app"};function z(e,t,n,s,a,C){const p=x("index-component-tree");return c(),f("div",Y,[L(p,{component_tree_list:e.component_tree_list},null,8,["component_tree_list"])])}var Z=v(P,[["render",z],["__scopeId","data-v-62cd5e64"]]);export{Z as default};
