import{d as V,a as F,S as U,_ as q,L as G,b as d,u as v,r as y,c as C,o as _,e as H,f as b,g as x,h as i,w as f,F as T,i as W,t as w,j as m,k as E,l as K,m as J,n as Q,p as X,q as Y,s as Z,v as ee,x as te,y as oe}from"./vendor.930b32b7.js";const ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};ne();const re={"--color-primary":"#673ab7","--color-secondary":"#e91e63","--color-accent":"#00bcd4","--color-error":"#ff5722","--color-warning":"#ffc107","--color-info":"#03a9f4","--color-success":"#009688"},ae={"--color-primary":"#059669"},se={"":null,purple:re,dark:V,seaGreen:ae},L=F("system",{state:()=>({lang:localStorage.getItem("lang")||"zh-CN",pageTheme:"",theme:localStorage.getItem("theme")||""}),getters:{getLang:e=>e.lang,getTheme:e=>e.theme,getThemeConfig:()=>e=>se[e]},actions:{changeLang(e){this.lang=e,localStorage.setItem("lang",e)},changeDarkTheme(){this.theme==="dark"?this.changeTheme(this.pageTheme||""):this.changeTheme("dark")},changeTheme(e){this.theme=e,localStorage.setItem("theme",e),U(e==="dark"?Object.assign(this.getThemeConfig(e),this.getThemeConfig(this.pageTheme)):this.getThemeConfig(e))},changePageTheme(e){this.pageTheme=e,this.theme!=="dark"&&(this.theme=e),this.changeTheme(this.theme)}}});var ce={proNotificationCard:"Notification Card",searchBar:"Search Bar"},ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ce}),le={example:"Example"},ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const $={"./example.ts":ie,"./layout.ts":ue};let N={};for(let e in $){const t=e.replace(/(\.\/|\.ts)/g,"");N[t]=$[e].default}var _e={proNotificationCard:"\u6D88\u606F\u901A\u77E5",searchBar:"\u641C\u7D22\u680F"},me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e}),pe={example:"\u793A\u4F8B"},de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});const O={"./example.ts":me,"./layout.ts":de};let P={};for(let e in O){const t=e.replace(/(\.\/|\.ts)/g,"");P[t]=O[e].default}const{add:fe,use:he,pack:h,packs:Ae,merge:B}=G;fe("en-US",q);B("en-US",N);B("zh-CN",P);const ge=d({setup(e){const t=v();console.log(t.getRoutes());const n=L();return he(n.getLang),(r,o)=>{const a=y("router-view");return _(),C(a)}}}),ve="modulepreload",I={},ye="./",p=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${ye}${r}`,r in I)return;I[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":ve,o||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),o)return new Promise((l,u)=>{s.addEventListener("load",l),s.addEventListener("error",u)})})).then(()=>t())};var S=(e,t)=>{for(const[n,r]of t)e[n]=r;return e};const be={class:"view"},xe=d({setup(e){const t=A.children,n=v();let r=H(n.currentRoute.value.name);const o=a=>{n.push(a)};return(a,s)=>{const l=y("router-view"),u=E,g=K,M=J;return _(),b(T,null,[x("div",be,[i(l)]),i(M,{active:r.value,"onUpdate:active":s[0]||(s[0]=c=>r.value=c),class:"home-bar",elevation:"","item-direction":"vertical","fixed-bottom":"","indicator-color":"#00000000"},{default:f(()=>[(_(!0),b(T,null,W(m(t),c=>(_(),C(g,{name:c.name,key:c.name,onClick:Be=>o(c.path)},{default:f(()=>[i(u,{class:"icon",name:c.meta.icon},null,8,["name"]),x("div",null,w(m(h).layout[c.meta.title]),1)]),_:2},1032,["name","onClick"]))),128))]),_:1},8,["active"])],64)}}});var Te=S(xe,[["__scopeId","data-v-a4fa182c"]]);const A={path:"/",name:"index",component:Te,children:[{path:"/example",name:"example",component:()=>p(()=>import("./index.60f88527.js"),["assets/index.60f88527.js","assets/index.44e586ce.css","assets/vendor.930b32b7.js","assets/vendor.49a2951d.css"]),meta:{icon:"notebook",title:"example",theme:"purple"}},{path:"/home",name:"home",component:()=>p(()=>import("./index.337d010f.js"),["assets/index.337d010f.js","assets/vendor.930b32b7.js","assets/vendor.49a2951d.css"]),meta:{icon:"home-outline",title:"\u9996\u9875",theme:"seaGreen"}},{path:"/user",name:"user",component:()=>p(()=>import("./index.7ccaf7f3.js"),["assets/index.7ccaf7f3.js","assets/vendor.930b32b7.js","assets/vendor.49a2951d.css"]),meta:{icon:"account-circle-outline",title:"\u6211\u7684"}}]},Se=[],ke={};function Ce(e,t){return"1111"}var we=S(ke,[["render",Ce]]),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we});const Ee=d({setup(e){return console.log(h),(t,n)=>w(m(h).layout.test)}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ee});const Le=d({setup(e){const t=v(),n=Q(()=>t.currentRoute.value.name),r=()=>{t.go(-1)};return(o,a)=>{const s=E,l=X,u=Y,g=y("router-view");return _(),b(T,null,[x("header",null,[i(u,{class:"app-bar","title-position":"left",title:m(h).example[m(n)]},{left:f(()=>[i(l,{text:"",round:"",onClick:r,color:"transparent","text-color":"#fff"},{default:f(()=>[i(s,{name:"chevron-left",size:28,style:{"margin-top":"1px"}})]),_:1})]),_:1},8,["title"])]),i(g)],64)}}});var $e=S(Le,[["__scopeId","data-v-4cdd0b71"]]);function Ne(e){switch(e){case"../views/example/proNotificationCard/index.vue":return p(()=>Promise.resolve().then(function(){return j}),void 0);case"../views/example/searchBar/index.vue":return p(()=>Promise.resolve().then(function(){return R}),void 0);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const Oe={"../views/example/proNotificationCard/index.vue":j,"../views/example/searchBar/index.vue":R};let z={path:"",component:$e,children:[],redirect:"/example",meta:{icon:"notebook",title:"example",theme:"purple"}};for(let e in Oe){let t=e.replace(/(\..\/views\/example\/|\/index.vue)/g,"");z.children.push({path:`/example/${t}`,name:t,component:()=>Ne(`../views/example/${t}/index.vue`)})}const Pe=[A,...Se,z],D=Z({history:ee(),routes:Pe});D.beforeEach((e,t,n)=>{var o;L().changePageTheme(((o=e.meta)==null?void 0:o.theme)||""),n()});const k=te(ge);k.use(oe());k.use(D);k.mount("#app");export{S as _,he as a,z as e,h as p,D as r,L as u};
