import{_ as r,a,c as p,e as c,p as _,b as i}from"./hover.f878cdc7.js";import{d as m,r as u,c as l,o as d,a as E,b as h,e as f,f as v,i as T,z as C}from"./vendor.b68ac253.js";const I=m({components:{},setup(){return{}}});function O(t,o,s,j,x,A){const n=u("router-view");return d(),l(n)}var R=r(I,[["render",O]]);const L=[{path:"/",name:"Index",component:()=>a(()=>import("./index.3640fbea.js"),["assets/index.3640fbea.js","assets/index.7eb8de1c.css","assets/vendor.b68ac253.js","assets/CmsGoods.066d6055.js","assets/CmsGoods.9591d493.css","assets/hover.f878cdc7.js","assets/hover.b67280ac.css","assets/index.d738b4f0.js","assets/index.409e4632.css"]),meta:{title:"\u9996\u9875"}},{path:"/404",component:()=>a(()=>import("./404.517aa48e.js"),["assets/404.517aa48e.js","assets/404.ac984491.css","assets/hover.f878cdc7.js","assets/hover.b67280ac.css","assets/vendor.b68ac253.js"])},{path:"/:pathMatch(.*)",component:()=>a(()=>import("./404.517aa48e.js"),["assets/404.517aa48e.js","assets/404.ac984491.css","assets/hover.f878cdc7.js","assets/hover.b67280ac.css","assets/vendor.b68ac253.js"])}],P=E({history:h(),scrollBehavior(t,o,s){return s||{x:0,y:0}},routes:L}),b=f({state:{env:"app",component_tree_list:[]},mutations:{SET_COMPONENT_TREE_LIST:(t,o)=>{t.component_tree_list=o}},actions:{handleChangeComponentTreeList({commit:t},o){t("SET_COMPONENT_TREE_LIST",o)}}}),e=v(R);e.use(b);e.use(P);e.use(T,{locale:C});e.use(p,{imports:[]});e.use(c);e.use(_);e.use(i);e.mount("#app");
