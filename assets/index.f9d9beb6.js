import{p as V,L as j,d as q,a as C,q as x,o as l,b as g,e as n,f as e,w as t,F as h,g as y,c as S,s as k,t as m,v as G,h as o,x as W,y as $,S as H,_ as Y,z as K,A as Q,B as X,C as Z,D as ee}from"./vendor.394456fd.js";import{d as te}from"./index.8060cb08.js";import{_ as ae,r as T}from"./index.1e3f1d2f.js";const ne={i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},logo:"https://qytayh.github.io/varlet-ui-pro/varlet_pro_logo.png",github:"https://github.com/qytayh/varlet-ui-pro"},oe="VARLET-UI-PRO",re={"zh-CN":"\u4E00\u4E2A\u514D\u8D39\u7684\u57FA\u4E8Evarlet-ui\u7684\u79FB\u52A8\u7AEF\u96C6\u6210\u65B9\u6848\u3002","en-US":"A free varlet-ui integrated development scheme."};var se={header:ne,title:oe,description:re};const ie=V("system",{state:()=>({lang:localStorage.getItem("lang")||"zh-CN"}),getters:{getLang:r=>r.lang},actions:{changeLang(r){this.lang=r,localStorage.setItem("lang",r)}}});var le={proNotificationCard:"\u6D88\u606F\u901A\u77E5"},ce={proNotificationCard:"Notification Card"},ue={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",datePickerMonthDict:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},"10":{name:"October",abbr:"OCT"},"11":{name:"November",abbr:"NOV"},"12":{name:"December",abbr:"DEC"}},datePickerWeekDict:{"0":{name:"Sunday",abbr:"S"},"1":{name:"Monday",abbr:"M"},"2":{name:"Tuesday",abbr:"T"},"3":{name:"Wednesday",abbr:"W"},"4":{name:"Thursday",abbr:"T"},"5":{name:"Friday",abbr:"F"},"6":{name:"Saturday",abbr:"S"}},datePickerSelected:" selected",paginationItem:"",paginationPage:"page",paginationJump:"Go to"};const{add:de,use:pe,pack:me,packs:Ne,merge:N}=j,_e=r=>{pe(r)};de("en-US",ue);N("en-US",ce);N("zh-CN",le);const ge={class:"cell-list"},he={class:"mainContent"},be={class:"logo"},fe={class:"pro-home__title"},ve=["src"],Ce={class:"pro-home__desc"},xe=q({setup(r){const b=ie(),{header:w,title:L,description:z}=se,{github:A,logo:B,i18n:U}=w;let c=C(!1);const f=x(()=>b.lang),M=U;let u=C(null);const E=()=>{window.location.href=A},P=s=>{b.changeLang(s),_e(s),c.value=!1},D=()=>{u.value=u.value?null:te,H(u.value)},F=x(()=>T.getRoutes().filter(s=>s.path.includes("/example/"))),J=s=>{T.push(s)};return(s,d)=>{const i=Y,_=K,v=Q,I=X,R=Z,O=ee;return l(),g(h,null,[n("header",null,[e(R,{class:"app-bar","title-position":"left"},{left:t(()=>[e(_,{style:{"margin-left":"2px"},text:"",round:"",color:"transparent","text-color":"#fff",onClick:E},{default:t(()=>[e(i,{name:"github",size:28,style:{"margin-top":"1px"}})]),_:1})]),right:t(()=>[e(_,{text:"",round:"",color:"transparent","text-color":"#fff",onClick:D},{default:t(()=>[e(i,{size:"24px",color:"#fff",name:u.value?"weather-night":"white-balance-sunny"},null,8,["name"])]),_:1}),e(I,{"offset-y":36,show:c.value,"onUpdate:show":d[1]||(d[1]=a=>c.value=a)},{menu:t(()=>[n("div",ge,[(l(!0),g(h,null,y(o(M),(a,p)=>(l(),S(v,{class:G([[o(f)===p&&"pro-language-cell--active"],"pro-language-cell"]),onClick:ye=>P(p),key:p},{default:t(()=>[k(m(a),1)]),_:2},1032,["class","onClick"]))),128))])]),default:t(()=>[e(_,{style:{"padding-right":"6px"},text:"","text-color":"#fff",onClick:d[0]||(d[0]=W(a=>c.value=!0,["stop"]))},{default:t(()=>[e(i,{name:"translate",size:24}),e(i,{name:"chevron-down",size:22})]),_:1})]),_:1},8,["show"])]),_:1})]),n("div",he,[n("div",be,[n("h1",fe,[n("img",{class:"pro-home__image",src:o(B)},null,8,ve),n("span",null,m(o(L)),1)]),n("h2",Ce,m(o(z)[o(f)]),1)]),(l(!0),g(h,null,y(o(F),a=>$((l(),S(v,{key:a.name,onClick:p=>J(a.path)},{extra:t(()=>[e(i,{name:"chevron-right",size:"14"})]),default:t(()=>[k(m(o(me)[a.name]),1)]),_:2},1032,["onClick"])),[[O]])),128))])],64)}}});var we=ae(xe,[["__scopeId","data-v-7a4cf194"]]);export{we as default};