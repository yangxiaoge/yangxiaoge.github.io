import{u as b,d as v}from"./draggable-f641671a.js";import{u as y}from"./modal-adfef984.js";import{u as I}from"./site-2b08cfdb.js";import{d as C,h as k,u as w,o as l,a as $,e as B,w as p,b as _,i as N,n as m,f as e,m as E,c as T,g as W,j as D,p as M,k as V,_ as z}from"./index-6a10d8e7.js";import"./_commonjsHelpers-23102255.js";const j=c=>(M("data-v-db3d6f43"),c=c(),V(),c),O=["onClick"],P=j(()=>_("div",{"i-carbon:add":""},null,-1)),R=C({__name:"SiteNavBar",setup(c){const d=y(),a=I(),u=k();function x(i){u.name==="setting"&&a.cateIndex===i?d.showModal("update","cate"):a.setCateIndex(i)}const s=w(),{draggableOptions:g,handleStart:f,handleEnd:h}=b();function S(i){h();const{oldIndex:n,newIndex:o}=i,{cateIndex:t}=a;if(n===t&&o!==t)a.setCateIndex(o);else{if(n<t&&o<t||n>t&&o>t)return;n<t?a.setCateIndex(t-1):n>t&&a.setCateIndex(t+1)}}return(i,n)=>{const o=D;return l(),$("section",{class:m({nav__items:!e(s).isSetting}),"flex-center":"","text-14":"","pb-16":"",md:"text-15 pb-32",lg:"text-15 pb-32"},[B(e(v),E({class:"flex gap-x-12",list:e(a).data,"item-key":"id","component-data":{tag:"div",type:"transition-group"}},e(g),{onStart:e(f),onEnd:S,style:{overflow:"scroll","white-space":"nowrap"}}),{item:p(({element:t,index:r})=>[_("div",{class:m(["dragging",{"text-$primary-light-c hover:text-$text-c":e(a).cateIndex!==r&&e(s).isWhiteTheme,"border-$text-c text-$text-c":e(a).cateIndex===r&&e(s).isWhiteTheme,"border-$primary-c text-$primary-c":e(a).cateIndex===r&&!e(s).isWhiteTheme,"hover:text-$primary-c":!e(s).isWhiteTheme,"site--setting":e(s).isSetting,"site--select":e(a).cateIndex===r&&e(s).isSetting}]),border:"b-2 transparent","cursor-pointer":"","transition-color":"","duration-300":"","p-4":"","shrink-0":"",onClick:q=>x(r),style:{"text-align":"center"}},N(t.name),11,O)]),_:1},16,["list","onStart"]),e(s).isSetting?(l(),T(o,{key:0,"min-h-30":"",class:"ml-12",type:"primary",size:"small",focusable:!1,secondary:"",onClick:n[0]||(n[0]=t=>e(d).showModal("add","cate"))},{icon:p(()=>[P]),_:1})):W("",!0)],2)}}});const K=z(R,[["__scopeId","data-v-db3d6f43"]]);export{K as default};
