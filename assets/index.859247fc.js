import{d as ae,a as ne,S as re,_ as le,L as se,b as T,u as U,r as A,c as $,o as v,e as B,f as C,g as _,h as c,w as p,F as k,i as E,t as x,j as f,k as I,l as P,m as z,n as D,p as V,q as ce,s as ue,v as ie,x as j,y as _e,z as R,A as M,B as N,C as pe,D as de,E as me,G as ve,H as fe,I as he,J as be,K as ge}from"./vendor.355b5a49.js";const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}};ye();const xe={"--color-primary":"#673ab7","--color-secondary":"#e91e63","--color-accent":"#00bcd4","--color-error":"#ff5722","--color-warning":"#ffc107","--color-info":"#03a9f4","--color-success":"#009688"},Se={"--color-primary":"#059669"},Be={"":null,purple:xe,dark:ae,seaGreen:Se},q=ne("system",{state:()=>({lang:localStorage.getItem("lang")||"zh-CN",pageTheme:"",theme:localStorage.getItem("theme")||""}),getters:{getLang:t=>t.lang,getTheme:t=>t.theme,getThemeConfig:()=>t=>Be[t]},actions:{changeLang(t){this.lang=t,localStorage.setItem("lang",t)},changeDarkTheme(){this.theme==="dark"?this.changeTheme(this.pageTheme||""):this.changeTheme("dark")},changeTheme(t){this.theme=t,localStorage.setItem("theme",t),re(t==="dark"?Object.assign(this.getThemeConfig(t),this.getThemeConfig(this.pageTheme)):this.getThemeConfig(t))},changePageTheme(t){this.pageTheme=t,this.theme!=="dark"&&(this.theme=t),this.changeTheme(this.theme)}}});var Ce={proNotificationCard:"NotificationCard",proSearchBar:"SearchBar",proTabBar:"TabBar"},Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce}),$e={example:"Example"},ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e}),we={placeholder:"have some fun ~~",basicUsage:"Basic Use",disabled:"Disabled",round:"Round ends",slot:"Slots",search:"Search"},Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we}),Le={basicUsage:"Basic Use",customIcon:"Custom Icon",showBadge:"Show Badge"},Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Le});const H={"./example.ts":Te,"./layout.ts":ke,"./searchBar.ts":Ie,"./tabbar.ts":Ee};let G={};for(let t in H){const e=t.replace(/(\.\/|\.ts)/g,"");G[e]=H[t].default}var Fe={proNotificationCard:"NotificationCard \u6D88\u606F\u901A\u77E5",proSearchBar:"SearchBar \u641C\u7D22\u680F",proTabBar:"TabBar \u6807\u7B7E\u680F"},Ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fe}),Ae={example:"\u793A\u4F8B"},Ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ae}),Ne={placeholder:"\u6765\u627E\u70B9\u4E50\u5B50\u5427~",basicUsage:"\u57FA\u672C\u7528\u6CD5",disabled:"\u7981\u7528",round:"\u4E24\u7AEF\u534A\u5706",slot:"\u63D2\u69FD",search:"\u641C\u7D22"},Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ne}),Pe={basicUsage:"\u57FA\u672C\u7528\u6CD5",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",showBadge:"\u663E\u793A\u5FBD\u6807"},ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pe});const W={"./example.ts":Ue,"./layout.ts":Ve,"./searchBar.ts":Oe,"./tabbar.ts":ze};let K={};for(let t in W){const e=t.replace(/(\.\/|\.ts)/g,"");K[e]=W[t].default}const{add:De,use:je,pack:b,packs:yt,merge:J}=se;De("en-US",le);J("en-US",G);J("zh-CN",K);const Re=T({setup(t){const e=U();console.log(e.getRoutes());const l=q();return je(l.getLang),(r,o)=>{const a=A("router-view");return v(),$(a)}}}),Me="modulepreload",Y={},qe="./",L=function(e,l){return!l||l.length===0?e():Promise.all(l.map(r=>{if(r=`${qe}${r}`,r in Y)return;Y[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":Me,o||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),o)return new Promise((u,s)=>{n.addEventListener("load",u),n.addEventListener("error",s)})})).then(()=>e())};var w=(t,e)=>{for(const[l,r]of e)t[l]=r;return t};const He={class:"view"},Ge=T({setup(t){const e=Q.children,l=U();let r=B(l.currentRoute.value.name);const o=a=>{l.push(a)};return(a,n)=>{const u=A("router-view"),s=I,d=P,h=z;return v(),C(k,null,[_("div",He,[c(u)]),c(h,{active:r.value,"onUpdate:active":n[0]||(n[0]=m=>r.value=m),class:"home-bar",elevation:"","item-direction":"vertical","fixed-bottom":"","indicator-color":"#00000000"},{default:p(()=>[(v(!0),C(k,null,E(f(e),m=>(v(),$(d,{name:m.name,key:m.name,onClick:g=>o(m.path)},{default:p(()=>[c(s,{class:"icon",name:m.meta.icon},null,8,["name"]),_("div",null,x(f(b).layout[m.meta.title]),1)]),_:2},1032,["name","onClick"]))),128))]),_:1},8,["active"])],64)}}});var We=w(Ge,[["__scopeId","data-v-a4fa182c"]]);const Q={path:"/",name:"index",component:We,children:[{path:"/example",name:"example",component:()=>L(()=>import("./index.38d6852d.js"),["assets/index.38d6852d.js","assets/index.44e586ce.css","assets/vendor.355b5a49.js","assets/vendor.3d96ca70.css"]),meta:{icon:"notebook",title:"example",theme:"purple"}},{path:"/home",name:"home",component:()=>L(()=>import("./index.77024294.js"),["assets/index.77024294.js","assets/vendor.355b5a49.js","assets/vendor.3d96ca70.css"]),meta:{icon:"home-outline",title:"\u9996\u9875",theme:"seaGreen"}},{path:"/user",name:"user",component:()=>L(()=>import("./index.2c2b571a.js"),["assets/index.2c2b571a.js","assets/vendor.355b5a49.js","assets/vendor.3d96ca70.css"]),meta:{icon:"account-circle-outline",title:"\u6211\u7684"}}]},Ke=[],Je={contents:{type:Array},loop:{type:Boolean,default:!1},autoplay:{type:Number,default:0}};const Ye={class:"pro-cell"},Qe={class:"pro-cell-default"},Xe=T({props:Je,setup(t){const e=t;return(l,r)=>{const o=I,a=ce,n=ue,u=ie;return v(),C("div",Ye,[c(u,null,{icon:p(()=>[c(n,{class:"swipe",loop:e.loop,vertical:"",autoplay:e.autoplay,touchable:!1},{default:p(()=>[(v(!0),C(k,null,E(e.contents,s=>(v(),$(a,{key:s},{default:p(()=>[c(o,{name:"information"})]),_:2},1024))),128))]),_:1},8,["loop","autoplay"])]),default:p(()=>[_("div",Qe,[c(n,{class:"swipe",loop:e.loop,vertical:"",autoplay:e.autoplay,touchable:!1},{default:p(()=>[(v(!0),C(k,null,E(e.contents,s=>(v(),$(a,{key:s},{default:p(()=>[D(x(s),1)]),_:2},1024))),128))]),_:1},8,["loop","autoplay"])])]),extra:p(()=>[V(l.$slots,"extra",{},void 0,!0)]),_:3})])}}});var Ze=w(Xe,[["__scopeId","data-v-fee1d566"]]);const et=T({setup(t){return(e,l)=>{const r=I,o=Ze;return v(),$(o,{contents:["\u6211\u662F\u706B\u732B","\u4F60\u662F\u5C0F\u5468"],loop:!1,autoplay:0},{extra:p(()=>[c(r,{name:"information"})]),_:1})}}});var tt=w(et,[["__scopeId","data-v-2cd838fb"]]),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt});const ot={placeholder:{type:String},round:{type:Boolean,default:!1},value:{type:String},disabled:{type:Boolean,default:!1},"onUpdate:value":{type:Function},onInput:{type:Function},onChange:{type:Function}};const at={class:"pro-search-bar"},nt=T({props:ot,setup(t){const e=t;let l=B(e.value);const r=(a,n)=>{var u,s;(u=e["onUpdate:value"])==null||u.call(e,a),(s=e.onInput)==null||s.call(e,a,n)},o=(a,n)=>{var u;(u=e.onChange)==null||u.call(e,a,n)};return(a,n)=>{const u=I,s=_e;return v(),C("div",at,[V(a.$slots,"prepend",{},void 0,!0),c(s,{class:j(e.round?"pro-search-bar__round":"pro-search-bar__common"),hint:!1,line:!1,onInput:r,onChange:o,placeholder:e.placeholder,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=d=>l.value=d),disabled:e.disabled},{"prepend-icon":p(()=>[c(u,{class:"pro-search-bar__icon",name:"magnify"})]),_:1},8,["class","placeholder","modelValue","disabled"]),V(a.$slots,"append",{class:"append"},void 0,!0)])}}});var rt=w(nt,[["__scopeId","data-v-02b1fcea"]]);const lt=T({setup(t){let e=B("");const l=()=>{R("Hello World\uFF01\uFF01")};return(r,o)=>{var s,d,h,m,g,i,y,F;const a=rt,n=I,u=M;return v(),C(k,null,[_("div",null,[_("h4",null,x((s=f(b).searchBar)==null?void 0:s.basicUsage),1),c(a,{placeholder:(d=f(b).searchBar)==null?void 0:d.placeholder,modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=S=>e.value=S)},null,8,["placeholder","modelValue"])]),_("div",null,[_("h4",null,x((h=f(b).searchBar)==null?void 0:h.round),1),c(a,{placeholder:(m=f(b).searchBar)==null?void 0:m.placeholder,modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=S=>e.value=S),round:""},null,8,["placeholder","modelValue"])]),_("div",null,[_("h4",null,x((g=f(b).searchBar)==null?void 0:g.disabled),1),c(a,{placeholder:(i=f(b).searchBar)==null?void 0:i.placeholder,modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=S=>e.value=S),disabled:""},null,8,["placeholder","modelValue"])]),_("div",null,[_("h4",null,x((y=f(b).searchBar)==null?void 0:y.slot),1),c(a,{placeholder:(F=f(b).searchBar)==null?void 0:F.placeholder,modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=S=>e.value=S)},{prepend:p(()=>[c(n,{name:"camera-outline",class:"pro-searchBar__camera"})]),append:p(()=>[c(u,{style:{"flex-shrink":"0"},text:"",type:"primary",onClick:l},{default:p(()=>{var S;return[D(x((S=f(b).searchBar)==null?void 0:S.search),1)]}),_:1})]),_:1},8,["placeholder","modelValue"])])],64)}}});var st=w(lt,[["__scopeId","data-v-2270c3e8"]]),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st});const ct={tabList:{type:Array},active:{type:[String,Number],default:0},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},onClick:{type:Function},onChange:{type:Function},"onUpdate:active":{type:Function}};const ut=T({props:ct,setup(t){const e=t,l=N(()=>e.fixedBottom);let r=B(e.active);const o=N(()=>e.tabList),a=(n,u)=>{var g,i;const s=(g=n.name)!=null?g:u,{active:d,onChange:h,onClick:m}=e;(i=e["onUpdate:active"])==null||i.call(e,s),m==null||m(s),s!==d&&(h==null||h(s))};return(n,u)=>{const s=I,d=de,h=me,m=P,g=z;return v(),$(g,{active:r.value,"onUpdate:active":u[0]||(u[0]=i=>r.value=i),"fixed-bottom":f(l),elevation:"","indicator-size":"0"},{default:p(()=>[(v(!0),C(k,null,E(f(o),(i,y)=>(v(),$(m,{onClick:F=>a(i,y),key:y},{default:p(()=>[c(h,{type:"danger",position:"right-top",hidden:!i.num&&!i.dot,class:j(i.dot?"pro-tabbar-dot":"pro-tabbar-content"),dot:i.dot,value:i.num},{default:p(()=>[c(d,{direction:"column",align:"center",size:"[0,0]"},{default:p(()=>[i.icon?(v(),$(s,{key:0,name:i.icon},null,8,["name"])):pe("",!0),_("div",null,x(i.text),1)]),_:2},1024)]),_:2},1032,["hidden","class","dot","value"])]),_:2},1032,["onClick"]))),128))]),_:1},8,["active","fixed-bottom"])}}});var it=w(ut,[["__scopeId","data-v-4d89c30f"]]);const _t=T({setup(t){let e=B(0),l=B([{text:"tab1"},{text:"tab2"},{text:"tab3"}]),r=B(0),o=B([{icon:"home-outline",text:"tab1"},{icon:"cart",text:"tab2"},{icon:"star",text:"tab3"},{icon:"account-circle-outline",text:"tab4"}]),a=B(0),n=B([{icon:"home-outline",text:"tab1"},{icon:"cart",text:"tab2"},{icon:"star",text:"tab3",dot:!0},{icon:"account-circle-outline",text:"tab4",num:"99"}]);const u=s=>{R.info(`You clicked tab${s+1}`)};return(s,d)=>{var m,g,i;const h=it;return v(),C(k,null,[_("div",null,[_("h4",null,x((m=f(b).tabbar)==null?void 0:m.basicUsage),1),c(h,{active:e.value,"onUpdate:active":d[0]||(d[0]=y=>e.value=y),tabList:l.value},null,8,["active","tabList"])]),_("div",null,[_("h4",null,x((g=f(b).tabbar)==null?void 0:g.customIcon),1),c(h,{active:r.value,"onUpdate:active":d[1]||(d[1]=y=>r.value=y),tabList:o.value},null,8,["active","tabList"])]),_("div",null,[_("h4",null,x((i=f(b).tabbar)==null?void 0:i.showBadge),1),c(h,{active:a.value,"onUpdate:active":d[2]||(d[2]=y=>a.value=y),tabList:n.value,onClick:u},null,8,["active","tabList"])])],64)}}});var pt=w(_t,[["__scopeId","data-v-89499ce8"]]),ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pt});const dt={class:"pro-router-view"},mt=T({setup(t){const e=U(),l=N(()=>e.currentRoute.value.name),r=()=>{e.go(-1)};return(o,a)=>{const n=I,u=M,s=ve,d=A("router-view");return v(),C(k,null,[_("header",null,[c(s,{class:"app-bar","title-position":"left",title:f(b).example[f(l)]},{left:p(()=>[c(u,{text:"",round:"",onClick:r,color:"transparent","text-color":"#fff"},{default:p(()=>[c(n,{name:"chevron-left",size:28,style:{"margin-top":"1px"}})]),_:1})]),_:1},8,["title"])]),_("div",dt,[c(d)])],64)}}});var vt=w(mt,[["__scopeId","data-v-0c185688"]]);function ft(t){switch(t){case"../views/example/proNotificationCard/index.vue":return L(()=>Promise.resolve().then(function(){return X}),void 0);case"../views/example/proSearchBar/index.vue":return L(()=>Promise.resolve().then(function(){return Z}),void 0);case"../views/example/proTabBar/index.vue":return L(()=>Promise.resolve().then(function(){return ee}),void 0);default:return new Promise(function(e,l){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}const ht={"../views/example/proNotificationCard/index.vue":X,"../views/example/proSearchBar/index.vue":Z,"../views/example/proTabBar/index.vue":ee};let te={path:"",component:vt,children:[],redirect:"/example",meta:{icon:"notebook",title:"example",theme:"purple"}};for(let t in ht){let e=t.replace(/(\..\/views\/example\/|\/index.vue)/g,"");te.children.push({path:`/example/${e}`,name:e,component:()=>ft(`../views/example/${e}/index.vue`)})}const bt=[Q,...Ke,te],oe=fe({history:he(),routes:bt});oe.beforeEach((t,e,l)=>{var o;q().changePageTheme(((o=t.meta)==null?void 0:o.theme)||""),l()});const O=be(Re);O.use(ge());O.use(oe);O.mount("#app");export{w as _,je as a,te as e,b as p,oe as r,q as u};