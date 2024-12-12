import{d as L,u as j,o as b,a as v,f as o,b as g,e as i,c7 as y,c8 as _,c9 as D,ca as E,cb as O,t as h,w as c,a6 as u,g as U,$,cc as C,l as d,cd as T,ce as R,j as B}from"./index-d34157ea.js";import{_ as m}from"./SettingSelection.vue_vue_type_script_setup_true_lang-655a8372.js";import{u as J,_ as M}from"./ResetModal.vue_vue_type_script_setup_true_lang-b26f5c04.js";import{u as P}from"./render-f05b1c69.js";import{u as z}from"./site-74f91dd6.js";const F={key:0,px:"md:60 lg:120"},G={grid:"","grid-cols-2":"","gap-24":"","lg:grid-cols-2":"","md:grid-cols-2":""},I={"mt-24":"",flex:"","justify-center":"","gap-x-24":""},q={"my-24":"","flex-center":"","gap-x-24":""},Y=L({__name:"MainSetting",setup(A){const r=J(),s=j(),V=P();function k(t){const a=y.find(l=>l.enName===t.enName).value.buttonC,e=C.value?{style:{color:"#ffffff"}}:{};return d("div",{class:"flex items-center gap-x-8"},[d("div",{class:"w-16 h-16 circle border-1 border-fff",style:{backgroundColor:a}}),d("div",e,t.name)])}function f(t){const n=C.value?{style:{color:"#ffffff"}}:{};return d("div",{class:"flex items-center gap-x-8"},[d("div",n,t.name)])}const p=z();function x(){const t={data:p.data,settings:s.settings},n=JSON.stringify(t),a=new Blob([n],{type:"application/json"}),e=URL.createObjectURL(a),l=document.createElement("a");l.download=`COMECOME_Data_${new Date().toLocaleString()}.json`,l.href=e,document.body.appendChild(l),l.click(),URL.revokeObjectURL(e)}function N(){const t=document.createElement("input");t.type="file",t.accept=".json",t.addEventListener("change",async()=>{var a;const n=(a=t.files)==null?void 0:a[0];if(n)try{const e=await n.text(),l=JSON.parse(e);if(!l.data||!l.settings)throw new Error("非法的数据文件");S(l)}catch{window.$message.error("请导入合法的数据文件",{duration:2e3})}}),t.click()}function w(){r.title="重置确认",r.content="是否确认要重置所有设置?",r.resetVisible=!0,r.afterCommit=()=>{T.back()},r.finishCommit=()=>{const n=JSON.parse(JSON.stringify(R));S(n),window.$message.success("重置成功",{duration:2e3})}}function S(t){p.setData(t.data),s.setSettings(t.settings),_(t.settings.theme),h(),p.cateIndex=0,V.refreshSiteGroupList()}return(t,n)=>{const a=B;return b(),v($,null,[o(s).isSetting?(b(),v("section",F,[g("div",G,[i(m,{modelValue:o(s).settings.theme,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s).settings.theme=e),title:"主题风格",options:o(y),"render-label":k,"label-field":"name","value-field":"enName","on-update-value":e=>("toggleTheme"in t?t.toggleTheme:o(_))(e)},null,8,["modelValue","options","on-update-value"]),i(m,{modelValue:o(s).settings.search,"onUpdate:modelValue":n[1]||(n[1]=e=>o(s).settings.search=e),title:"搜索引擎",options:o(D),"render-label":f,"label-field":"name","value-field":"enName","on-update-value":e=>o(s).setSettings({search:e})},null,8,["modelValue","options","on-update-value"]),i(m,{modelValue:o(s).settings.iconStyle,"onUpdate:modelValue":n[2]||(n[2]=e=>o(s).settings.iconStyle=e),title:"图标风格",options:o(E),"render-label":f,"label-field":"name","value-field":"enName","on-update-value":e=>o(s).setSettings({iconStyle:e})},null,8,["modelValue","options","on-update-value"]),i(m,{modelValue:o(s).settings.siteStyle,"onUpdate:modelValue":n[3]||(n[3]=e=>o(s).settings.siteStyle=e),title:"色彩模式",options:o(O),"render-label":f,"label-field":"name","value-field":"enName","on-update-value":e=>{o(s).setSettings({siteStyle:e}),o(h)()}},null,8,["modelValue","options","on-update-value"])]),g("div",I,[i(a,{onClick:w},{default:c(()=>[u(" 重置数据 ")]),_:1}),i(a,{onClick:N},{default:c(()=>[u(" 导入数据 ")]),_:1}),i(a,{onClick:x},{default:c(()=>[u(" 导出数据 ")]),_:1})]),g("div",q,[i(a,{type:"primary","text-color":"#ffffff",size:"large",onClick:n[4]||(n[4]=e=>t.$router.back())},{default:c(()=>[u(" 返回 ")]),_:1})])])):U("",!0),i(M)],64)}}});export{Y as _};
