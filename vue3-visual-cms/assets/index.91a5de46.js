var z=Object.defineProperty;var O=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var M=(r,u,o)=>u in r?z(r,u,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[u]=o,g=(r,u)=>{for(var o in u||(u={}))R.call(u,o)&&M(r,o,u[o]);if(O)for(var o of O(u))G.call(u,o)&&M(r,o,u[o]);return r};import{a5 as U,a6 as Y,d as x,u as H,g as b,t as k,r as V,o as w,j as P,H as J,I as X,c as I,x as K,U as Q,J as Z,S as ee,a7 as te,Y as ne,D as ie,F as se,h as ae,w as oe,m as re,P as le,C as ue}from"./vendor.b68ac253.js";import{C as ce,a as de,b as fe,c as he,d as me,e as ve,f as pe,g as ye,h as ge,i as we,j as _e,k as Ce,l as be,m as ke,n as Se,o as Ee,p as Ae,q as Ne,r as Te,s as Oe}from"./CmsGoods.e5840181.js";import{_ as W}from"./hover.486ea2e3.js";import{a as Me}from"./index.7d8d26d4.js";var S={exports:{}};(function(r,u){(function(o,d){d(r,u)})(U,function(o,d){Object.defineProperty(d,"__esModule",{value:!0});var m,f;function v(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}var c=function(){function s(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,e,t){return e&&s(n.prototype,e),t&&s(n,t),n}}();function y(s,n){return n.indexOf(s)>=0}function _(s,n){for(var e in n)if(s[e]==null){var t=n[e];s[e]=t}return s}function $(s){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s)}function j(s){var n=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],e=arguments.length<=2||arguments[2]===void 0?!1:arguments[2],t=arguments.length<=3||arguments[3]===void 0?null:arguments[3],i=void 0;return document.createEvent!=null?(i=document.createEvent("CustomEvent"),i.initCustomEvent(s,n,e,t)):document.createEventObject!=null?(i=document.createEventObject(),i.eventType=s):i.eventName=s,i}function D(s,n){s.dispatchEvent!=null?s.dispatchEvent(n):n in(s!=null)?s[n]():"on"+n in(s!=null)&&s["on"+n]()}function p(s,n,e){s.addEventListener!=null?s.addEventListener(n,e,!1):s.attachEvent!=null?s.attachEvent("on"+n,e):s[n]=e}function E(s,n,e){s.removeEventListener!=null?s.removeEventListener(n,e,!1):s.detachEvent!=null?s.detachEvent("on"+n,e):delete s[n]}function L(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}var q=window.WeakMap||window.MozWeakMap||function(){function s(){v(this,s),this.keys=[],this.values=[]}return c(s,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++){var i=this.keys[t];if(i===e)return this.values[t]}}},{key:"set",value:function(e,t){for(var i=0;i<this.keys.length;i++){var a=this.keys[i];if(a===e)return this.values[i]=t,this}return this.keys.push(e),this.values.push(t),this}}]),s}(),A=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(f=m=function(){function s(){v(this,s),typeof console!="undefined"&&console!==null&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return c(s,[{key:"observe",value:function(){}}]),s}(),m.notSupported=!0,f),N=window.getComputedStyle||function(n){var e=/(\-([a-z]){1})/g;return{getPropertyValue:function(i){i==="float"&&(i="styleFloat"),e.test(i)&&i.replace(e,function(l,h){return h.toUpperCase()});var a=n.currentStyle;return(a!=null?a[i]:void 0)||null}}},B=function(){function s(){var n=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];v(this,s),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=_(n,this.defaults),n.scrollContainer!=null&&(this.config.scrollContainer=document.querySelector(n.scrollContainer)),this.animationNameCache=new q,this.wowEvent=j(this.config.boxClass)}return c(s,[{key:"init",value:function(){this.element=window.document.documentElement,y(document.readyState,["interactive","complete"])?this.start():p(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var e=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var i=this.boxes[t];this.applyStyle(i,!0)}if(this.disabled()||(p(this.config.scrollContainer||window,"scroll",this.scrollHandler),p(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var a=new A(function(l){for(var h=0;h<l.length;h++)for(var T=l[h],C=0;C<T.addedNodes.length;C++){var F=T.addedNodes[C];e.doSync(F)}});a.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,E(this.config.scrollContainer||window,"scroll",this.scrollHandler),E(window,"resize",this.scrollHandler),this.interval!=null&&clearInterval(this.interval)}},{key:"sync",value:function(){A.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if((typeof e=="undefined"||e===null)&&(e=this.element),e.nodeType===1){e=e.parentNode||e;for(var t=e.querySelectorAll("."+this.config.boxClass),i=0;i<t.length;i++){var a=t[i];y(a,this.all)||(this.boxes.push(a),this.all.push(a),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(a,!0),this.scrolled=!0)}}}},{key:"show",value:function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,this.config.callback!=null&&this.config.callback(e),D(e,this.wowEvent),p(e,"animationend",this.resetAnimation),p(e,"oanimationend",this.resetAnimation),p(e,"webkitAnimationEnd",this.resetAnimation),p(e,"MSAnimationEnd",this.resetAnimation),e}},{key:"applyStyle",value:function(e,t){var i=this,a=e.getAttribute("data-wow-duration"),l=e.getAttribute("data-wow-delay"),h=e.getAttribute("data-wow-iteration");return this.animate(function(){return i.customStyle(e,t,a,l,h)})}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++){var t=this.boxes[e];t.style.visibility="visible"}}},{key:"resetAnimation",value:function(e){if(e.type.toLowerCase().indexOf("animationend")>=0){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(e,t,i,a,l){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",i&&this.vendorSet(e.style,{animationDuration:i}),a&&this.vendorSet(e.style,{animationDelay:a}),l&&this.vendorSet(e.style,{animationIterationCount:l}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var i in t)if(t.hasOwnProperty(i)){var a=t[i];e[""+i]=a;for(var l=0;l<this.vendors.length;l++){var h=this.vendors[l];e[""+h+i.charAt(0).toUpperCase()+i.substr(1)]=a}}}},{key:"vendorCSS",value:function(e,t){for(var i=N(e),a=i.getPropertyCSSValue(t),l=0;l<this.vendors.length;l++){var h=this.vendors[l];a=a||i.getPropertyCSSValue("-"+h+"-"+t)}return a}},{key:"animationName",value:function(e){var t=void 0;try{t=this.vendorCSS(e,"animation-name").cssText}catch(i){t=N(e).getPropertyValue("animation-name")}return t==="none"?"":t}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var i=this.boxes[t];if(i){if(this.isVisible(i)){this.show(i);continue}e.push(i)}}this.boxes=e,!this.boxes.length&&!this.config.live&&this.stop()}}},{key:"offsetTop",value:function(e){for(;e.offsetTop===void 0;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)e=e.offsetParent,t+=e.offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,i=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,a=i+Math.min(this.element.clientHeight,L())-t,l=this.offsetTop(e),h=l+e.clientHeight;return l<=a&&h>=i}},{key:"disabled",value:function(){return!this.config.mobile&&$(navigator.userAgent)}}]),s}();d.default=B,o.exports=d.default})})(S,S.exports);var xe=Y(S.exports);const He=x({name:"IndexComponentTree",components:{CmsRow:ce,CmsContainer:de,CmsOffset:fe,CmsFixed:he,CmsText:me,CmsRichText:ve,CmsNavBar:pe,CmsImage:ye,CmsLink:ge,CmsCarousel:we,CmsMap:_e,CmsTab:Ce,CmsBackTop:be,CmsDivider:ke,CmsTimeline:Se,CmsAnimated:Ee,CmsHover:Ae,CmsSwiper:Ne,CmsGoodsList:Te,CmsGoods:Oe},props:{component_tree_list:{type:Array,default:()=>[]}},setup(r,{emit:u}){const o=H();let d=b({sotre_component_tree_list:o.state.component_tree_list});return g({},k(d))}});function Ve(r,u,o,d,m,f){const v=V("index-component-tree",!0);return w(!0),P(X,null,J(r.component_tree_list,(c,y)=>(w(),I(ne(c.name),te({key:c.id+y,id:c.id},c.props,{modelValue:c.value,"onUpdate:modelValue":_=>c.value=_,style:c.style,draggable:!1}),{default:K(()=>[Q(Z(c.text)+" ",1),c.children?(w(),I(v,{key:0,component_tree_list:c.children},null,8,["component_tree_list"])):ee("",!0)]),_:2},1040,["id","modelValue","onUpdate:modelValue","style"]))),128)}var Pe=W(He,[["render",Ve]]);function Ie(r){return Me({url:"/Index/GetTemplateDetail",method:"get",params:r})}const We=x({name:"Index",components:{IndexComponentTree:Pe},setup(){const r=H();ie();const u=se(),o=b({component_tree_list:ae({get(){return r.state.component_tree_list},set(f){r.dispatch("handleChangeComponentTreeList",f)}})});oe(u,f=>{d.id=f.query.id,m()});let d=b({id:u.query.id});re(()=>{m(),le(()=>{new xe({scrollContainer:".app",boxClass:"wow",animateClass:"animate__animated",offset:0,mobile:!0,live:!0,resetAnimation:!0}).init()})});const m=()=>{Ie({id:d.id}).then(f=>{o.component_tree_list=f.data.component_tree_list,document.title=f.data.website_name+"-"+f.data.title}).catch(()=>{})};return g(g({},k(d)),k(o))}}),$e={id:"designer",class:"app"};function je(r,u,o,d,m,f){const v=V("index-component-tree");return w(),P("div",$e,[ue(v,{component_tree_list:r.component_tree_list},null,8,["component_tree_list"])])}var ze=W(We,[["render",je],["__scopeId","data-v-1997c832"]]);export{ze as default};
