import{_ as a,a as s,c as p,e as c,p as _,b as i}from"./animate.min.7799b3ee.js";import{d as m,r as u,c as l,o as d,a as E,b as h,e as T,f,i as v,z as C}from"./vendor.3c39c99a.js";const I=m({components:{},setup(){return{}}});function O(t,o,n,x,A,D){const r=u("router-view");return d(),l(r)}var R=a(I,[["render",O]]);const L=[{path:"/",name:"Index",component:()=>s(()=>import("./index.f00e5ed1.js"),["assets/index.f00e5ed1.js","assets/index.4c764613.css","assets/vendor.3c39c99a.js","assets/CmsAnimated.3ef22953.js","assets/CmsAnimated.bcd06f09.css","assets/animate.min.7799b3ee.js","assets/animate.min.41227b65.css","assets/index.d7c8e22e.js","assets/index.d99c1a3e.css"]),meta:{title:"\u9996\u9875"}},{path:"/404",component:()=>s(()=>import("./404.9229532c.js"),["assets/404.9229532c.js","assets/404.9e0e7b81.css","assets/animate.min.7799b3ee.js","assets/animate.min.41227b65.css","assets/vendor.3c39c99a.js"])},{path:"/:pathMatch(.*)",component:()=>s(()=>import("./404.9229532c.js"),["assets/404.9229532c.js","assets/404.9e0e7b81.css","assets/animate.min.7799b3ee.js","assets/animate.min.41227b65.css","assets/vendor.3c39c99a.js"])}],P=E({history:h(),scrollBehavior(t,o,n){return n||{x:0,y:0}},routes:L}),j=T({state:{env:"app",component_tree_list:[]},mutations:{SET_COMPONENT_TREE_LIST:(t,o)=>{t.component_tree_list=o}},actions:{handleChangeComponentTreeList({commit:t},o){t("SET_COMPONENT_TREE_LIST",o)}}}),e=f(R);e.use(j);e.use(P);e.use(v,{locale:C});e.use(p,{imports:[]});e.use(c);e.use(_);e.use(i);e.mount("#app");
