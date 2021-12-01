var He=Object.defineProperty,Ue=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var ge=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var ve=(e,t,s)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,E=(e,t)=>{for(var s in t||(t={}))Fe.call(t,s)&&ve(e,s,t[s]);if(ge)for(var s of ge(t))qe.call(t,s)&&ve(e,s,t[s]);return e},D=(e,t)=>Ue(e,Ge(t));var we=(e,t,s)=>new Promise((n,o)=>{var d=r=>{try{a(s.next(r))}catch(c){o(c)}},i=r=>{try{a(s.throw(r))}catch(c){o(c)}},a=r=>r.done?n(r.value):Promise.resolve(r.value).then(d,i);a((s=s.apply(e,t)).next())});import{d as L,u as N,g as T,p as oe,w as M,q as Y,s as te,t as y,r as u,j as f,k as v,n as be,v as U,c as b,x as h,y as Ee,l as O,A as ae,B as ie,o as l,C as m,D as z,F as J,G as ze,H as Q,I as G,T as Ke,J as j,K as Ve,L as F,h as S,O as re,P as le,Q as Xe,R as Ye,S as P,U as Je,V as $e,W as Qe,X as Ze,Y as Se,Z as xe,_ as et,$ as tt,a0 as st,a1 as nt,a as ot,b as at,a2 as H,a3 as it,m as Te,a4 as rt,e as lt}from"./vendor.3c39c99a.js";import{_ as A,i as ce,a as k}from"./animate.min.95d96319.js";function ye(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function ct(e,t){ye(e,t)||(e.className+=" "+t)}function dt(e,t){if(ye(e,t)){const s=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(s," ")}}const ut=L({name:"RightPanel",components:{},props:{clickNotClose:{default:!1,type:Boolean},buttonBottom:{default:10,type:Number}},setup(e){N();let t=T({show:!1}),s=oe(null);M(()=>t.show,i=>{i&&!e.clickNotClose&&n(),i?ct(document.body,"showRightPanel"):dt(document.body,"showRightPanel")}),Y(()=>{d()}),te(()=>{s.value.remove()});const n=()=>{window.addEventListener("click",o)},o=i=>{i.target.closest(".rightPanel")||(t.show=!1,window.removeEventListener("click",o))},d=()=>{const i=s.value,a=document.querySelector("body");a.insertBefore(i,a.firstChild)};return D(E({},y(t)),{rightPanel:s})}}),pt=e=>(ae("data-v-72b6210c"),e=e(),ie(),e),_t=pt(()=>v("div",{class:"rightPanel-background"},null,-1)),mt={class:"rightPanel"},ht={class:"rightPanel-items"};function ft(e,t,s,n,o,d){const i=u("close"),a=u("el-icon"),r=u("setting");return l(),f("div",{ref:"rightPanel",class:O([{show:e.show},"rightPanel-container"])},[_t,v("div",mt,[v("div",{class:"handle-button",style:be({bottom:e.buttonBottom+"px"}),onClick:t[0]||(t[0]=U(c=>e.show=!e.show,["stop"]))},[e.show?(l(),b(a,{key:0,style:{"vertical-align":"middle"}},{default:h(()=>[m(i)]),_:1})):(l(),b(a,{key:1,style:{"vertical-align":"middle"}},{default:h(()=>[m(r)]),_:1}))],4),v("div",ht,[Ee(e.$slots,"default",{},void 0,!0)])])],2)}var gt=A(ut,[["render",ft],["__scopeId","data-v-72b6210c"]]);const vt=L({name:"Hamburger",components:{},props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){return{toggleClick:()=>{t("toggleClick")}}}});function wt(e,t,s,n,o,d){const i=u("svg-icon");return l(),f("div",{style:{padding:"0 15px"},onClick:t[0]||(t[0]=(...a)=>e.toggleClick&&e.toggleClick(...a))},[m(i,{class:O([{"is-active":e.isActive},"hamburger"]),"icon-class":"collapse"},null,8,["class"])])}var bt=A(vt,[["render",wt],["__scopeId","data-v-c9c94f34"]]);const Et=L({components:{},setup(){const e=z(),t=J();let s=T({levelList:null});M(t,()=>{n()});const n=()=>{let a=t.matched.filter(c=>c.meta&&c.meta.title);const r=a[0];o(r)||(a=[{path:"/dashboard",meta:{title:"\u63A7\u5236\u53F0"}}].concat(a)),s.levelList=a.filter(c=>c.meta&&c.meta.title&&c.meta.breadcrumb!==!1)},o=a=>{const r=a&&a.name;return r?r.trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase():!1},d=a=>{const{params:r}=t;var c=ze.compile(a);return c(r)},i=a=>{const{redirect:r,path:c}=a;if(r){e.push(r);return}e.push(d(c))};return n(),D(E({},y(s)),{pathCompile:d,handleLink:i})}}),Vt={key:0,class:"no-redirect"},$t=["onClick"];function St(e,t,s,n,o,d){const i=u("el-breadcrumb-item"),a=u("el-breadcrumb");return l(),b(a,{class:"app-breadcrumb",separator:"\\"},{default:h(()=>[m(Ke,{name:"breadcrumb"},{default:h(()=>[(l(!0),f(G,null,Q(e.levelList,(r,c)=>(l(),b(i,{key:r.path},{default:h(()=>[r.redirect==="noRedirect"||c==e.levelList.length-1?(l(),f("span",Vt,j(r.meta.title),1)):(l(),f("a",{key:1,onClick:U(_=>e.handleLink(r),["prevent"])},j(r.meta.title),9,$t))]),_:2},1024))),128))]),_:1})]),_:1})}var Tt=A(Et,[["render",St],["__scopeId","data-v-0e23f4fe"]]);const yt=L({components:{},setup(){const{proxy:e}=Ve();let t=T({isFullscreen:!1});const s=()=>{if(!F.isEnabled)return e.$message({message:"you browser can not work",type:"warning"}),!1;F.toggle()},n=()=>{t.isFullscreen=F.isFullscreen},o=()=>{F.enabled&&F.on("change",n)},d=()=>{F.enabled&&F.off("change",n)};return Y(()=>{o()}),te(()=>{d()}),D(E({},y(t)),{click:s})}});function kt(e,t,s,n,o,d){const i=u("svg-icon");return l(),f("div",null,[m(i,{"icon-class":e.isFullscreen?"exit-fullscreen":"fullscreen",onClick:e.click},null,8,["icon-class","onClick"])])}var Ct=A(yt,[["render",kt],["__scopeId","data-v-556c9942"]]);const Lt=L({name:"HeaderSearch",components:{},setup(){const e=N(),t=z();let s=T({search:"",options:[],searchPool:[],show:!1,fuse:void 0});const n=oe(null),o=T({routes:S(()=>e.getters.permission_routes)});M(o.routes,()=>{s.searchPool=c(o.routes)}),M(()=>s.searchPool,g=>{r(g)}),M(()=>s.show,g=>{g?document.body.addEventListener("click",i):document.body.removeEventListener("click",i)}),Y(()=>{s.searchPool=c(o.routes)});const d=()=>{s.show=!s.show,s.show&&n.value&&n.value.focus()},i=()=>{n.value&&n.value.blur(),s.options=[],s.show=!1},a=g=>{t.push(g.path),s.search="",s.options=[],le(()=>{s.show=!1})},r=g=>{s.fuse=new Xe(g,{shouldSort:!0,threshold:.4,location:0,distance:100,minMatchCharLength:1,keys:[{name:"title",weight:.7},{name:"path",weight:.3}]})},c=(g,R="/",q=[])=>{let B=[];for(const I of g){if(I.hidden)continue;const W={path:re.resolve(R,I.path),title:[...q]};if(I.meta&&I.meta.title&&(W.title=[...W.title,I.meta.title],I.redirect!=="noRedirect"&&B.push(W)),I.children){const ee=c(I.children,W.path,W.title);ee.length>=1&&(B=[...B,...ee])}}return B},_=g=>{g!==""?s.options=s.fuse.search(g):s.options=[]};return D(E(E({},y(s)),y(o)),{headerSearchSelect:n,click:d,change:a,querySearch:_})}});function At(e,t,s,n,o,d){const i=u("svg-icon"),a=u("el-option"),r=u("el-select");return l(),f("div",{class:O([{show:e.show},"header-search"])},[m(i,{"class-name":"search-icon","icon-class":"search",onClick:U(e.click,["stop"])},null,8,["onClick"]),m(r,{ref:"headerSearchSelect",modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=c=>e.search=c),"remote-method":e.querySearch,filterable:"","default-first-option":"",remote:"",placeholder:"\u641C\u7D22",class:"header-search-select",onChange:e.change},{default:h(()=>[(l(!0),f(G,null,Q(e.options,c=>(l(),b(a,{key:c.item.path,value:c.item,label:c.item.title.join(" > ")},null,8,["value","label"]))),128))]),_:1},8,["modelValue","remote-method","onChange"])],2)}var It=A(Lt,[["render",At],["__scopeId","data-v-601c3f95"]]);const Dt=L({components:{Hamburger:bt,Breadcrumb:Tt,Screenfull:Ct,Search:It},computed:E({},Ye(["sidebar","avatar","device"])),setup(){const e=N(),t=z(),s=J();return{toggleSideBar:()=>{e.dispatch("app/toggleSideBar")},logout:()=>we(this,null,function*(){yield e.dispatch("user/logout"),t.push(`/login?redirect=${s.fullPath}`)})}}}),Ot=e=>(ae("data-v-4b01eea0"),e=e(),ie(),e),Pt={class:"navbar"},Rt={class:"right-menu"},Bt={class:"avatar-wrapper"},Wt=["src"],Nt=Je("\u4E3B\u9875"),Mt=Ot(()=>v("span",{style:{display:"block"}},"\u9000\u51FA\u767B\u5F55",-1));function jt(e,t,s,n,o,d){const i=u("hamburger"),a=u("breadcrumb"),r=u("search"),c=u("screenfull"),_=u("caret-bottom"),g=u("el-icon"),R=u("el-dropdown-item"),q=u("router-link"),B=u("el-dropdown-menu"),I=u("el-dropdown");return l(),f("div",Pt,[m(i,{"is-active":e.sidebar.opened,class:"hamburger-container",onToggleClick:e.toggleSideBar},null,8,["is-active","onToggleClick"]),m(a,{class:"breadcrumb-container"}),v("div",Rt,[e.device!=="mobile"?(l(),f(G,{key:0},[m(r,{id:"header-search",class:"right-menu-item"}),m(c,{id:"screenfull",class:"right-menu-item hover-effect"})],64)):P("",!0),m(I,{class:"avatar-container",trigger:"click"},{dropdown:h(()=>[m(B,{class:"user-dropdown"},{default:h(()=>[m(q,{to:"/"},{default:h(()=>[m(R,null,{default:h(()=>[Nt]),_:1})]),_:1}),m(R,{divided:"",onClick:e.logout},{default:h(()=>[Mt]),_:1},8,["onClick"])]),_:1})]),default:h(()=>[v("div",Bt,[v("img",{src:e.avatar+"?imageView2/1/w/80/h/80",class:"user-avatar"},null,8,Wt),m(g,null,{default:h(()=>[m(_)]),_:1})])]),_:1})])])}var Ht=A(Dt,[["render",jt],["__scopeId","data-v-4b01eea0"]]);const Ut=L({name:"SidebarLogo",components:{},props:{collapse:{type:Boolean,required:!0}},setup(){let e=T({title:"\u7F51\u7AD9\u540E\u53F0\u7BA1\u7406",logo:"https://v3.cn.vuejs.org/logo.png"});return E({},y(e))}}),Gt=["src"],Ft={key:1,class:"sidebar-title"},qt=["src"],zt={class:"sidebar-title"};function Kt(e,t,s,n,o,d){const i=u("router-link");return l(),f("div",{class:O(["sidebar-logo-container",{collapse:e.collapse}])},[m($e,{name:"mode-fade",mode:"out-in"},{default:h(()=>[e.collapse?(l(),b(i,{key:"collapse",class:"sidebar-logo-link",to:"/"},{default:h(()=>[e.logo?(l(),f("img",{key:0,src:e.logo,class:"sidebar-logo"},null,8,Gt)):(l(),f("h1",Ft,j(e.title),1))]),_:1})):(l(),b(i,{key:"expand",class:"sidebar-logo-link",to:"/"},{default:h(()=>[e.logo?(l(),f("img",{key:0,src:e.logo,class:"sidebar-logo"},null,8,qt)):P("",!0),v("h1",zt,j(e.title),1)]),_:1}))]),_:1})],2)}var Xt=A(Ut,[["render",Kt],["__scopeId","data-v-2df43d16"]]);const Yt=L({components:{},props:{to:{type:String,required:!0}},setup(e){const t=T({isExternal:S(()=>ce(e.to)),type:S(()=>e.isExternal?"a":"router-link")}),s=n=>t.isExternal?{href:n,target:"_blank",rel:"noopener"}:{to:n};return D(E({},y(t)),{linkProps:s})}});function Jt(e,t,s,n,o,d){return l(),b(Se(e.type),Qe(Ze(e.linkProps(e.to))),{default:h(()=>[Ee(e.$slots,"default")]),_:3},16)}var Qt=A(Yt,[["render",Jt]]);const Zt=L({name:"SidebarItem",components:{AppLink:Qt},props:{item:{type:Object,required:!0},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},setup(e){let t=T({onlyOneChild:{}});const s=(o=[],d)=>{const i=o.filter(a=>a.hidden?!1:(t.onlyOneChild=a,!0));return i.length===1?!0:i.length===0?(t.onlyOneChild=D(E({},d),{path:"",noShowingChildren:!0}),!0):!1},n=o=>ce(o)?o:ce(e.basePath)?e.basePath:re.resolve(e.basePath,o);return D(E({},y(t)),{hasOneShowingChild:s,resolvePath:n})}}),xt={key:0};function es(e,t,s,n,o,d){const i=u("svg-icon"),a=u("el-menu-item"),r=u("app-link"),c=u("sidebar-item",!0),_=u("el-sub-menu");return e.item.hidden?P("",!0):(l(),f("div",xt,[e.hasOneShowingChild(e.item.children,e.item)&&(!e.onlyOneChild.children||e.onlyOneChild.noShowingChildren)&&!e.item.alwaysShow?(l(),f(G,{key:0},[e.onlyOneChild.meta?(l(),b(r,{key:0,to:e.resolvePath(e.onlyOneChild.path)},{default:h(()=>[m(a,{index:e.resolvePath(e.onlyOneChild.path),class:O({"submenu-title-noDropdown":!e.isNest})},{title:h(()=>[v("span",null,j(e.onlyOneChild.meta.title),1)]),default:h(()=>[e.onlyOneChild.meta.icon.includes("el-icon")?(l(),f("i",{key:0,class:O(e.onlyOneChild.meta.icon||(e.item.meta&&e.item.meta.icon)+"sub-el-icon")},null,2)):(l(),b(i,{key:1,"icon-class":e.onlyOneChild.meta.icon||e.item.meta&&e.item.meta.icon},null,8,["icon-class"]))]),_:1},8,["index","class"])]),_:1},8,["to"])):P("",!0)],64)):(l(),b(_,{key:1,ref:"subMenu",index:e.resolvePath(e.item.path),"popper-append-to-body":""},xe({default:h(()=>[(l(!0),f(G,null,Q(e.item.children,g=>(l(),b(c,{key:g.path,"is-nest":!0,item:g,"base-path":e.resolvePath(g.path),class:"nest-menu"},null,8,["item","base-path"]))),128))]),_:2},[e.item.meta?{name:"title",fn:h(()=>[e.item.meta.icon.includes("el-icon")?(l(),f("i",{key:0,class:O(e.item.meta&&e.item.meta.icon+"sub-el-icon")},null,2)):(l(),b(i,{key:1,"icon-class":e.item.meta&&e.item.meta.icon},null,8,["icon-class"])),v("span",null,j(e.item.meta.title),1)])}:void 0]),1032,["index"]))]))}var ts=A(Zt,[["render",es]]);const ss=L({components:{Logo:Xt,SidebarItem:ts},setup(){const e=N(),t=z(),s=J(),n=T({routes:S(()=>t.options.routes),activeMenu:S(()=>{const o=s,{meta:d,path:i}=o;return d.activeMenu?d.activeMenu:i}),showLogo:S(()=>e.getters.sidebarLogo),isCollapse:S(()=>!e.getters.sidebar.opened)});return E({},y(n))}});function ns(e,t,s,n,o,d){const i=u("logo"),a=u("sidebar-item"),r=u("el-menu"),c=u("el-scrollbar");return l(),f("div",{class:O({"has-logo":e.showLogo})},[e.showLogo?(l(),b(i,{key:0,collapse:e.isCollapse},null,8,["collapse"])):P("",!0),m(c,{"wrap-class":"scrollbar-wrapper"},{default:h(()=>[m(r,{"default-active":e.activeMenu,collapse:e.isCollapse,"background-color":"#20222a","text-color":"#bfcbd9","unique-opened":!1,"active-text-color":"#ffffff","collapse-transition":!1,mode:"vertical"},{default:h(()=>[(l(!0),f(G,null,Q(e.routes,_=>(l(),b(a,{key:_.path,item:_,"base-path":_.path},null,8,["item","base-path"]))),128))]),_:1},8,["default-active","collapse"])]),_:1})],2)}var os=A(ss,[["render",ns]]);const as=L({components:{},setup(){const e=N();let t=T({app_version:"v1.0.0"});const s=T({tagsView:S({get(){return e.getters.tagsView},set(n){e.dispatch("settings/changeSetting",{key:"tagsView",value:n})}}),sidebarLogo:S({get(){return e.getters.sidebarLogo},set(n){e.dispatch("settings/changeSetting",{key:"sidebarLogo",value:n})}})});return E(E({},y(t)),y(s))}}),de=e=>(ae("data-v-2cf4bd30"),e=e(),ie(),e),is={class:"drawer-container"},rs=de(()=>v("h3",{class:"drawer-title"},"\u9875\u9762\u8BBE\u7F6E",-1)),ls={class:"drawer-item"},cs=de(()=>v("span",null,"\u6807\u7B7E\u9875",-1)),ds={class:"drawer-item"},us=de(()=>v("span",null,"\u4FA7\u8FB9\u680FLogo",-1)),ps={class:"drawer-item"};function _s(e,t,s,n,o,d){const i=u("el-switch");return l(),f("div",is,[v("div",null,[rs,v("div",ls,[cs,m(i,{modelValue:e.tagsView,"onUpdate:modelValue":t[0]||(t[0]=a=>e.tagsView=a),class:"drawer-switch"},null,8,["modelValue"])]),v("div",ds,[us,m(i,{modelValue:e.sidebarLogo,"onUpdate:modelValue":t[1]||(t[1]=a=>e.sidebarLogo=a),class:"drawer-switch"},null,8,["modelValue"])]),v("div",ps,[v("span",null,"\u5F53\u524D\u7248\u672C\uFF1A"+j(e.app_version),1)])])])}var ms=A(as,[["render",_s],["__scopeId","data-v-2cf4bd30"]]);const hs=L({name:"AppMain",components:{},setup(){const e=N(),t=z(),s=T({keep_alive_list:S(()=>{let n=[],o=[],d=t.options.routes,i=(a,r)=>{r.forEach(c=>{c.meta&&c.meta.keepAlive&&a.push(c.name),c.children&&c.children.length>0&&i(a,c.children)})};return i(n,d),n.forEach(a=>{e.state.tagsView.cachedViews.includes(a)&&o.push(a)}),o})});return E({},y(s))}}),fs={class:"app-main"};function gs(e,t,s,n,o,d){const i=u("router-view");return l(),f("section",fs,[m(i,null,{default:h(({Component:a,route:r})=>[m($e,{appear:"",name:"fade-slide",mode:"out-in"},{default:h(()=>[(l(),b(et,{include:e.keep_alive_list},[(l(),b(Se(a),{key:r.name}))],1032,["include"]))]),_:2},1024)]),_:1})])}var vs=A(hs,[["render",gs],["__scopeId","data-v-187086e1"]]);const ws=L({components:{},setup(){const{proxy:e}=Ve(),t=N(),s=z(),n=J();let o=T({visible:!1,top:0,left:0,selectedTag:{},affixTags:[]}),d=[];const i=p=>{d.push(p)},a=4,r=oe(null),c=T({visitedViews:S(()=>t.getters.visitedViews),routes:S(()=>t.getters.permission_routes)}),_=S(()=>r.value.$refs.wrap$);M(n,()=>{I(),W()}),M(()=>o.visible,p=>{p?document.body.addEventListener("click",se):document.body.removeEventListener("click",se)}),Y(()=>{B(),I(),_.value.addEventListener("scroll",ne,!0)}),te(()=>{_.value.removeEventListener("scroll",ne)});const g=p=>p.path===n.path,R=p=>p.meta&&p.meta.affix,q=(p,w="/")=>{let V=[];return p.forEach($=>{if($.meta&&$.meta.affix){const C=re.resolve(w,$.path);V.push({fullPath:C,path:C,name:$.name,meta:E({},$.meta)})}if($.children){const C=q($.children,$.path);C.length>=1&&(V=[...V,...C])}}),V},B=()=>{const p=o.affixTags=q(c.routes);for(const w of p)w.name&&t.dispatch("tagsView/addVisitedView",w)},I=()=>{const{name:p}=n;return p&&t.dispatch("tagsView/addView",n),!1},W=()=>{const p=d;le(()=>{for(const w of p)if(w&&w.to.path===n.path){Ne(w),w.to.fullPath!==n.fullPath&&t.dispatch("tagsView/updateVisitedView",n);break}})},ee=p=>{t.dispatch("tagsView/delCachedView",p).then(()=>{const{fullPath:w}=p;le(()=>{s.replace({path:"/redirect"+w})})})},Oe=p=>{t.dispatch("tagsView/delView",p).then(({visitedViews:w})=>{g(p)&&pe(w,p)})},Pe=()=>{s.push(o.selectedTag),t.dispatch("tagsView/delOthersViews",o.selectedTag).then(()=>{W()})},Re=p=>{t.dispatch("tagsView/delAllViews").then(({visitedViews:w})=>{o.affixTags.some(V=>V.fullPath===n.path)||pe(w,p)})},pe=(p,w)=>{const V=p.slice(-1)[0];V?s.push(V.fullPath):w.name==="Dashboard"?s.replace({path:"/redirect"+w.fullPath}):s.push("/")},Be=(p,w)=>{const V=105,$=e.$el.getBoundingClientRect().left,K=e.$el.offsetWidth-V,X=w.clientX-$+15;X>K?o.left=K:o.left=X,o.top=39,o.visible=!0,o.selectedTag=p},se=()=>{o.visible=!1},ne=()=>{se()},We=p=>{const w=p.wheelDelta||-p.deltaY*40,V=_.value;V.scrollLeft=V.scrollLeft+w/4},Ne=p=>{const V=r.value.$el.offsetWidth,$=_.value,C=d;let K=null,X=null;if(C.length>0&&(K=C[0],X=C[C.length-1]),K===p)$.scrollLeft=0;else if(X===p)$.scrollLeft=$.scrollWidth-V;else{const _e=C.findIndex(je=>je===p),Me=C[_e-1],me=C[_e+1],he=me.$el.offsetLeft+me.$el.offsetWidth+a,fe=Me.$el.offsetLeft-a;he>$.scrollLeft+V?$.scrollLeft=he-V:fe<$.scrollLeft&&($.scrollLeft=fe)}};return D(E(D(E({},y(o)),{setTagRef:i}),y(c)),{scrollContainer:r,isActive:g,isAffix:R,refreshSelectedTag:ee,closeSelectedTag:Oe,closeOthersTags:Pe,closeAllTags:Re,openMenu:Be,handleScroll:ne,handleScrollBar:We})}}),bs={id:"tags-view-container",class:"tags-view-container"},Es={style:{"vertical-align":"middle"}};function Vs(e,t,s,n,o,d){const i=u("close"),a=u("el-icon"),r=u("router-link"),c=u("el-scrollbar");return l(),f("div",bs,[m(c,{ref:"scrollContainer",class:"scroll-container","wrap-class":"tags-view-wrapper",onScroll:e.handleScroll,onWheel:U(e.handleScrollBar,["prevent"])},{default:h(()=>[(l(!0),f(G,null,Q(e.visitedViews,_=>(l(),b(r,{ref:e.setTagRef,key:_.path,class:O([e.isActive(_)?"active":"","tags-view-item"]),to:{path:_.path,query:_.query,fullPath:_.fullPath},tag:"span",onMouseup:U(g=>e.isAffix(_)?"":e.closeSelectedTag(_),["middle"]),onContextmenu:U(g=>e.openMenu(_,g),["prevent"])},{default:h(()=>[v("span",Es,j(_.title),1),e.isAffix(_)?P("",!0):(l(),b(a,{key:0,class:"icon",onClick:U(g=>e.closeSelectedTag(_),["prevent","stop"]),style:{"margin-left":"4px","vertical-align":"middle"}},{default:h(()=>[m(i)]),_:2},1032,["onClick"]))]),_:2},1032,["class","to","onMouseup","onContextmenu"]))),128))]),_:1},8,["onScroll","onWheel"]),tt(v("ul",{style:be({left:e.left+"px",top:e.top+"px"}),class:"contextmenu"},[v("li",{onClick:t[0]||(t[0]=_=>e.refreshSelectedTag(e.selectedTag))},"\u5237\u65B0"),e.isAffix(e.selectedTag)?P("",!0):(l(),f("li",{key:0,onClick:t[1]||(t[1]=_=>e.closeSelectedTag(e.selectedTag))},"\u5173\u95ED\u5F53\u524D")),v("li",{onClick:t[2]||(t[2]=(..._)=>e.closeOthersTags&&e.closeOthersTags(..._))},"\u5173\u95ED\u5176\u4ED6"),v("li",{onClick:t[3]||(t[3]=_=>e.closeAllTags(e.selectedTag))},"\u5173\u95ED\u6240\u6709")],4),[[st,e.visible]])])}var $s=A(ws,[["render",Vs],["__scopeId","data-v-b9ca141c"]]);const Ss=L({name:"Layout",components:{Sidebar:os,Navbar:Ht,TagsView:$s,AppMain:vs,RightPanel:gt,Settings:ms},setup(){const e=N(),t=J(),{body:s}=document,n=992,o=T({sidebar:S(()=>e.getters.sidebar),device:S(()=>e.getters.device),showSettings:S(()=>e.getters.showSettings),needTagsView:S(()=>e.getters.tagsView),classObj:S(()=>({hideSidebar:!o.sidebar.opened,openSidebar:o.sidebar.opened,withoutAnimation:o.sidebar.withoutAnimation,mobile:o.device==="mobile"}))});M(t,()=>{o.device==="mobile"&&o.sidebar.opened&&e.dispatch("app/closeSideBar",{withoutAnimation:!1})}),Y(()=>{i()&&(e.dispatch("app/toggleDevice","mobile"),e.dispatch("app/closeSideBar",{withoutAnimation:!0}))}),nt(()=>{window.addEventListener("resize",a)}),te(()=>{window.removeEventListener("resize",a)});const d=()=>{e.dispatch("app/closeSideBar",{withoutAnimation:!1})},i=()=>s.getBoundingClientRect().width-1<n,a=()=>{if(!document.hidden){const r=i();e.dispatch("app/toggleDevice",r?"mobile":"desktop"),r&&e.dispatch("app/closeSideBar",{withoutAnimation:!0})}};return D(E({},y(o)),{handleClickOutside:d})}});function Ts(e,t,s,n,o,d){const i=u("sidebar"),a=u("navbar"),r=u("tags-view"),c=u("app-main"),_=u("settings"),g=u("right-panel");return l(),f("div",{class:O([e.classObj,"app-wrapper"])},[e.device==="mobile"&&e.sidebar.opened?(l(),f("div",{key:0,class:"drawer-bg",onClick:t[0]||(t[0]=(...R)=>e.handleClickOutside&&e.handleClickOutside(...R))})):P("",!0),m(i,{class:"sidebar-container"}),v("div",{class:O([{hasTagsView:e.needTagsView},"main-container"])},[v("div",null,[m(a),e.needTagsView?(l(),b(r,{key:0})):P("",!0)]),m(c),e.showSettings?(l(),b(g,{key:0},{default:h(()=>[m(_)]),_:1})):P("",!0)],2)],2)}var Z=A(Ss,[["render",Ts],["__scopeId","data-v-a4373808"]]);const ke=[{path:"/login",component:()=>k(()=>import("./index.39783d8e.js"),["assets/index.39783d8e.js","assets/index.9a099f02.css","assets/vendor.3c39c99a.js","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css"]),hidden:!0},{path:"/",component:Z,redirect:"/dashboard",children:[{path:"dashboard",name:"Dashboard",component:()=>k(()=>import("./index.e36a714f.js"),["assets/index.e36a714f.js","assets/index.5bdc54a4.css","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css","assets/vendor.3c39c99a.js"]),meta:{title:"\u63A7\u5236\u53F0",icon:"dashboard",affix:!0}}]},{path:"/website",name:"Website",component:Z,redirect:"noRedirect",alwaysShow:!0,hidden:!1,meta:{title:"\u7F51\u7AD9\u7BA1\u7406",icon:"website"},children:[{path:"website-list",name:"WebsiteList",component:"WebsiteList",component:()=>k(()=>import("./website-list.0c40093a.js"),["assets/website-list.0c40093a.js","assets/vendor.3c39c99a.js","assets/index.9517ce2c.js","assets/index.51779218.css","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css","assets/website.05317102.js"]),alwaysShow:!1,hidden:!1,meta:{title:"\u7F51\u7AD9\u5217\u8868",icon:"website-list",keepAlive:!1}},{path:"website-add",name:"WebsiteAdd",alwaysShow:!1,hidden:!0,component:()=>k(()=>import("./website-add.4b7ce1c2.js"),["assets/website-add.4b7ce1c2.js","assets/vendor.3c39c99a.js","assets/website.05317102.js","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css"]),meta:{title:"\u7F51\u7AD9\u6DFB\u52A0",keepAlive:!0}},{path:"website-edit",name:"WebsiteEdit",alwaysShow:!1,hidden:!0,component:()=>k(()=>import("./website-edit.1f212b84.js"),["assets/website-edit.1f212b84.js","assets/vendor.3c39c99a.js","assets/website.05317102.js","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css"]),meta:{title:"\u7F51\u7AD9\u7F16\u8F91",keepAlive:!1}}]},{path:"/template",name:"Template",component:Z,redirect:"/template/template-list",alwaysShow:!0,hidden:!1,meta:{title:"\u6A21\u677F\u7BA1\u7406",icon:"template"},children:[{path:"template-list",name:"TempalteList",component:"TempalteList",component:()=>k(()=>import("./template-list.d8244654.js"),["assets/template-list.d8244654.js","assets/vendor.3c39c99a.js","assets/index.9517ce2c.js","assets/index.51779218.css","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css","assets/template.645abdcf.js","assets/website.05317102.js"]),alwaysShow:!1,hidden:!1,meta:{title:"\u6A21\u677F\u5217\u8868",icon:"template-list",keepAlive:!1}},{path:"template-designer",redirect:"/design",alwaysShow:!1,hidden:!0,meta:{title:"\u6A21\u677F\u8BBE\u8BA1",keepAlive:!1}},{path:"template-add",name:"TemplateAdd",alwaysShow:!1,hidden:!0,component:()=>k(()=>import("./template-add.93a5f653.js"),["assets/template-add.93a5f653.js","assets/vendor.3c39c99a.js","assets/template.645abdcf.js","assets/website.05317102.js","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css"]),meta:{title:"\u6A21\u677F\u6DFB\u52A0",keepAlive:!0}},{path:"template-edit",name:"TemplateEdit",alwaysShow:!1,hidden:!0,component:()=>k(()=>import("./template-edit.e6fc1707.js"),["assets/template-edit.e6fc1707.js","assets/vendor.3c39c99a.js","assets/template.645abdcf.js","assets/website.05317102.js","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css"]),meta:{title:"\u6A21\u677F\u7F16\u8F91",keepAlive:!1}}]},{path:"/design",name:"TempalteDesigner",alwaysShow:!1,hidden:!0,component:()=>k(()=>import("./template-designer.9bff06e4.js"),["assets/template-designer.9bff06e4.js","assets/template-designer.56b45574.css","assets/vendor.3c39c99a.js","assets/CmsAnimated.b2ae361c.js","assets/CmsAnimated.bcd06f09.css","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css","assets/template.645abdcf.js"]),meta:{title:"\u6A21\u677F\u8BBE\u8BA1\u7A97\u53E3",keepAlive:!1}},{path:"/admin",name:"Admin",component:Z,redirect:"noRedirect",alwaysShow:!0,hidden:!1,meta:{title:"\u7BA1\u7406\u5458\u7BA1\u7406",icon:"admin"},children:[{path:"admin-list",name:"AdminList",component:"AdminList",component:()=>k(()=>import("./admin-list.aaf0e4b1.js"),["assets/admin-list.aaf0e4b1.js","assets/vendor.3c39c99a.js","assets/index.9517ce2c.js","assets/index.51779218.css","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css","assets/admin.12731862.js"]),alwaysShow:!1,hidden:!1,meta:{title:"\u7BA1\u7406\u5458\u5217\u8868",icon:"admin-list",keepAlive:!1}},{path:"admin-add",name:"AdminAdd",alwaysShow:!1,hidden:!0,component:()=>k(()=>import("./admin-add.11f4b63a.js"),["assets/admin-add.11f4b63a.js","assets/vendor.3c39c99a.js","assets/admin.12731862.js","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css"]),meta:{title:"\u7BA1\u7406\u5458\u6DFB\u52A0",keepAlive:!0}},{path:"admin-edit",name:"AdminEdit",alwaysShow:!1,hidden:!0,component:()=>k(()=>import("./admin-edit.363e55e1.js"),["assets/admin-edit.363e55e1.js","assets/vendor.3c39c99a.js","assets/admin.12731862.js","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css"]),meta:{title:"\u7BA1\u7406\u5458\u7F16\u8F91",keepAlive:!1}}]},{path:"/redirect",component:Z,hidden:!0,children:[{path:"/redirect/:path(.*)",component:()=>k(()=>import("./index.78278964.js"),["assets/index.78278964.js","assets/vendor.3c39c99a.js"])}]},{path:"/404",component:()=>k(()=>import("./404.18d5727f.js"),["assets/404.18d5727f.js","assets/404.9e0e7b81.css","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css","assets/vendor.3c39c99a.js"]),hidden:!0}],Ce=ot({history:at(),scrollBehavior(e,t,s){return s||{x:0,y:0}},routes:ke});function ys(){const e=Ce;Ce.matcher=e.matcher}const ks={sidebar:e=>e.app.sidebar,device:e=>e.app.device,visitedViews:e=>e.tagsView.visitedViews,cachedViews:e=>e.tagsView.cachedViews,token:e=>e.user.token,avatar:e=>e.user.avatar,name:e=>e.user.name,permission_routes:e=>e.permission.routes,addRoutes:e=>e.permission.addRoutes,sidebarLogo:e=>e.settings.sidebarLogo,showSettings:e=>e.settings.showSettings,tagsView:e=>e.settings.tagsView},Cs={sidebar:{opened:H.get("sidebarStatus")?!!+H.get("sidebarStatus"):!0,withoutAnimation:!1},device:"desktop"},Ls={TOGGLE_SIDEBAR:e=>{e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1,e.sidebar.opened?H.set("sidebarStatus",1):H.set("sidebarStatus",0)},CLOSE_SIDEBAR:(e,t)=>{H.set("sidebarStatus",0),e.sidebar.opened=!1,e.sidebar.withoutAnimation=t},TOGGLE_DEVICE:(e,t)=>{e.device=t}},As={toggleSideBar({commit:e}){e("TOGGLE_SIDEBAR")},closeSideBar({commit:e},{withoutAnimation:t}){e("CLOSE_SIDEBAR",t)},toggleDevice({commit:e},t){e("TOGGLE_DEVICE",t)}};var Is={namespaced:!0,state:Cs,mutations:Ls,actions:As},Ds={title:"\u7F51\u7AD9\u540E\u53F0\u7BA1\u7406",showSettings:!0,sidebarLogo:!0,tagsView:!0};const{showSettings:Os,tagsView:Ps,sidebarLogo:Rs}=Ds,Bs={showSettings:Os,tagsView:Ps,sidebarLogo:Rs},Ws={CHANGE_SETTING:(e,{key:t,value:s})=>{e.hasOwnProperty(t)&&(e[t]=s)}},Ns={changeSetting({commit:e},t){e("CHANGE_SETTING",t)}};var Ms={namespaced:!0,state:Bs,mutations:Ws,actions:Ns};const ue="vue3-visual-cms_token";function Le(){return H.get(ue)}function js(e){return H.set(ue,e)}function Ae(){return H.remove(ue)}const Hs="http://www.test.com",cn="cfd8da5cf010c5f7441834ff5e764f5b";let Us=Hs;const x=it.create({baseURL:Us,timeout:5e3});x.interceptors.request.use(e=>(De.getters.token&&(e.headers.Token=Le()),e),e=>(console.log(e),Promise.reject(e)));x.interceptors.response.use(e=>{const t=e.data;return t.code!==200?(Te({message:t.message||"Error",type:"error",duration:5*1e3}),t.code===50008&&rt.confirm("\u8D26\u53F7\u4FE1\u606F\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55","\u786E\u8BA4\u6CE8\u9500",{confirmButtonText:"\u91CD\u65B0\u767B\u5F55",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{De.dispatch("user/resetToken").then(()=>{location.reload()})}),Promise.reject(new Error(t.message||"Error"))):t},e=>(console.log("err"+e),Te({message:e.message,type:"error",duration:5*1e3}),Promise.reject(e)));function Gs(e){return x({url:"/User/Login",method:"post",data:e})}function Fs(){return x({url:"/User/GetUserInfo",method:"get",params:{}})}function qs(){return x({url:"/User/Logout",method:"post",data:{}})}const Ie=()=>({token:Le(),name:"",avatar:""}),zs=Ie(),Ks={RESET_STATE:e=>{Object.assign(e,Ie())},SET_TOKEN:(e,t)=>{e.token=t},SET_NAME:(e,t)=>{e.name=t},SET_AVATAR:(e,t)=>{e.avatar=t}},Xs={login({commit:e},t){const{username:s,password:n}=t;return new Promise((o,d)=>{Gs({username:s.trim(),password:n}).then(i=>{const{data:a}=i;e("SET_TOKEN",a.token),js(a.token),o()}).catch(i=>{d(i)})})},getUserInfo({commit:e,state:t}){return new Promise((s,n)=>{Fs().then(o=>{const{data:d}=o;if(!d)return n("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55.");const{username:i}=d;e("SET_NAME",i),e("SET_AVATAR","https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"),s(d)}).catch(o=>{n(o)})})},logout({commit:e,state:t}){return new Promise((s,n)=>{qs().then(()=>{Ae(),ys(),e("RESET_STATE"),s()}).catch(o=>{n(o)})})},resetToken({commit:e}){return new Promise(t=>{Ae(),e("RESET_STATE"),t()})}};var Ys={namespaced:!0,state:zs,mutations:Ks,actions:Xs};const Js={visitedViews:[],cachedViews:[]},Qs={ADD_VISITED_VIEW:(e,t)=>{e.visitedViews.some(s=>s.path===t.path)||e.visitedViews.push(Object.assign({},t,{title:t.meta.title||"no-name"}))},ADD_CACHED_VIEW:(e,t)=>{e.cachedViews.includes(t.name)||t.meta.noCache||e.cachedViews.push(t.name)},DEL_VISITED_VIEW:(e,t)=>{for(const[s,n]of e.visitedViews.entries())if(n.path===t.path){e.visitedViews.splice(s,1);break}},DEL_CACHED_VIEW:(e,t)=>{const s=e.cachedViews.indexOf(t.name);s>-1&&e.cachedViews.splice(s,1)},DEL_OTHERS_VISITED_VIEWS:(e,t)=>{e.visitedViews=e.visitedViews.filter(s=>s.meta.affix||s.path===t.path)},DEL_OTHERS_CACHED_VIEWS:(e,t)=>{const s=e.cachedViews.indexOf(t.name);s>-1?e.cachedViews=e.cachedViews.slice(s,s+1):e.cachedViews=[]},DEL_ALL_VISITED_VIEWS:e=>{const t=e.visitedViews.filter(s=>s.meta.affix);e.visitedViews=t},DEL_ALL_CACHED_VIEWS:e=>{e.cachedViews=[]},UPDATE_VISITED_VIEW:(e,t)=>{for(let s of e.visitedViews)if(s.path===t.path){s=Object.assign(s,t);break}}},Zs={addView({dispatch:e},t){e("addVisitedView",t),e("addCachedView",t)},addVisitedView({commit:e},t){e("ADD_VISITED_VIEW",t)},addCachedView({commit:e},t){e("ADD_CACHED_VIEW",t)},delView({dispatch:e,state:t},s){return new Promise(n=>{e("delVisitedView",s),e("delCachedView",s),n({visitedViews:[...t.visitedViews],cachedViews:[...t.cachedViews]})})},delVisitedView({commit:e,state:t},s){return new Promise(n=>{e("DEL_VISITED_VIEW",s),n([...t.visitedViews])})},delCachedView({commit:e,state:t},s){return new Promise(n=>{e("DEL_CACHED_VIEW",s),n([...t.cachedViews])})},delOthersViews({dispatch:e,state:t},s){return new Promise(n=>{e("delOthersVisitedViews",s),e("delOthersCachedViews",s),n({visitedViews:[...t.visitedViews],cachedViews:[...t.cachedViews]})})},delOthersVisitedViews({commit:e,state:t},s){return new Promise(n=>{e("DEL_OTHERS_VISITED_VIEWS",s),n([...t.visitedViews])})},delOthersCachedViews({commit:e,state:t},s){return new Promise(n=>{e("DEL_OTHERS_CACHED_VIEWS",s),n([...t.cachedViews])})},delAllViews({dispatch:e,state:t},s){return new Promise(n=>{e("delAllVisitedViews",s),e("delAllCachedViews",s),n({visitedViews:[...t.visitedViews],cachedViews:[...t.cachedViews]})})},delAllVisitedViews({commit:e,state:t}){return new Promise(s=>{e("DEL_ALL_VISITED_VIEWS"),s([...t.visitedViews])})},delAllCachedViews({commit:e,state:t}){return new Promise(s=>{e("DEL_ALL_CACHED_VIEWS"),s([...t.cachedViews])})},updateVisitedView({commit:e},t){e("UPDATE_VISITED_VIEW",t)}};var xs={namespaced:!0,state:Js,mutations:Qs,actions:Zs};const en={routes:[],addRoutes:[]},tn={SET_ROUTES:(e,t)=>{e.addRoutes=t,e.routes=ke.concat(t)}},sn={generateRoutes({commit:e}){return new Promise(t=>{const s=[].concat({path:"/:pathMatch(.*)",component:()=>k(()=>import("./404.18d5727f.js"),["assets/404.18d5727f.js","assets/404.9e0e7b81.css","assets/animate.min.95d96319.js","assets/animate.min.41227b65.css","assets/vendor.3c39c99a.js"]),hidden:!0});e("SET_ROUTES",s),t(s)})}};var nn={namespaced:!0,state:en,mutations:tn,actions:sn};const on=lt({state:{env:"admin",component_tree_list:[],current_node_info:{props:{}},show_border:!0,is_preview:!1,drag_node_info:{}},mutations:{SET_COMPONENT_TREE_LIST:(e,t)=>{e.component_tree_list=t},SET_CURRENT_NODE_INFO:(e,t)=>{e.current_node_info=t},SET_IS_PREVIEW:(e,t)=>{e.is_preview=t},SET_SHOW_BORDER:(e,t)=>{e.show_border=t},SET_DRAG_NODE_INFO:(e,t)=>{e.drag_node_info=t}},actions:{handleChangeComponentTreeList({commit:e},t){e("SET_COMPONENT_TREE_LIST",t)},handleChangeCurrentNodeInfo({commit:e},t){e("SET_CURRENT_NODE_INFO",t)},handleChangeIsPreview({commit:e},t){e("SET_IS_PREVIEW",t)},handleChangeShowBorder({commit:e},t){e("SET_SHOW_BORDER",t)},handleChangeDragNodeInfo({commit:e},t){e("SET_DRAG_NODE_INFO",t)}},modules:{app:Is,settings:Ms,user:Ys,tagsView:xs,permission:nn},getters:ks});var De=on;export{cn as M,x as a,Ds as d,Le as g,Ce as r,De as s};
