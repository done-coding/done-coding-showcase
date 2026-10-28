import{at as B,v as d,f as I,M as S}from"./index-9Y7d9zBP.js";import{P as T}from"./PanelMain.vue-DRnDtUxn.js";import{T as F}from"./TableMain.vue-SsmNQg0A.js";import{D as L,H as D,M as n,al as E,G as j,O as t,a9 as l,L as o,aa as g,u as a,r as m}from"./vue-BRcfBYTG.js";import"./lodash-BRZATbIC.js";import"./index-CBXr71cs.js";import"./use-active-record-BuZ3lUYY.js";import"./index-BGrcNykE.js";import"./index-DTK7GDhj.js";import"./ActionBtnGroup.vue-DfBHzBIZ.js";import"./AutoRefreshGroup.vue-sUSmNM0q.js";import"./SlotLayoutTemplate.vue-Dda6v6k_.js";import"./use-surface-D_8ZCkQI.js";import"./index-4fePu3VQ.js";import"./index-Cm5TKyO3.js";import"./use-channel-viewport-height-DzDGPgTn.js";const s="dc-family-anchor-demo",N=`
/* 表单族（FormMain）：每个 form-item 左侧主色强调轨 + 标签加重 */
.dc-form-main .el-form-item {
  padding-left: 10px;
  border-left: 3px solid var(--dc-core-primary-color, var(--el-color-primary));
}
.dc-form-main .el-form-item__label { font-weight: 600; }

/* 表格族（TableMain）：表头主色淡底 + 大写字距 + 加粗；行 hover 主色淡染 */
.dc-table-main .el-table th.el-table__cell {
  background: var(--el-color-primary-light-9);
  text-transform: uppercase;
  letter-spacing: .04em;
  font-weight: 700;
}
.dc-table-main .el-table .el-table__row:hover > td.el-table__cell {
  background: var(--el-color-primary-light-9);
}

/* 面板族（PanelMain）：每项卡片化（surface 面 + 圆角 + 细边） */
.dc-panel-main .panel-main-item-col {
  background: var(--dc-core-surface, var(--el-bg-color-overlay));
  border: 1px solid var(--dc-core-border-color, var(--el-border-color-lighter));
  border-radius: var(--dc-core-radius, 8px);
  padding: 8px;
}

/* 操作按钮族（ActionBtn）：胶囊形 + 字距（一眼区别于常规方角按钮）。
   .dc-action-btn.el-button 双类同元素提特异性(0,2,0)，确定性压过 EP/admin .el-button 半径(0,1,0)。 */
.dc-action-btn.el-button {
  border-radius: 999px;
  letter-spacing: .03em;
  font-weight: 600;
}

/* 弹窗族（ConfirmModal + DetailModal 经 .dc-confirm-modal 同时命中）：标题区主色顶栏 */
.dc-confirm-modal .el-dialog__header {
  border-top: 3px solid var(--dc-core-primary-color, var(--el-color-primary));
  background: var(--el-color-primary-light-9);
}
`;function v(){if(typeof document>"u"||document.getElementById(s))return;const r=document.createElement("style");r.id=s,r.textContent=N,document.head.appendChild(r)}function b(){var r;typeof document>"u"||(r=document.getElementById(s))==null||r.remove()}function x(){return typeof document>"u"?!1:!!document.getElementById(s)}const V={style:{padding:"16px","max-width":"980px"}},$={style:{margin:"12px 0"}},Y={style:{"margin-left":"12px",color:"var(--el-text-color-secondary)"}},z={style:{height:"320px"}},ae=L({__name:"Index",setup(r){const p=m(!1),c=()=>{p.value=x()};B(i=>{i.isActivated?v():b(),c()});const w=()=>{x()?b():v(),c()},M=m({name:"张三",email:"zhangsan@example.com"}),k=[{key:"name",label:"姓名"},{key:"email",label:"邮箱"}],_=m({status:"已启用",owner:"运维组"}),h=[{key:"status",label:"状态"},{key:"owner",label:"负责人"}],f=Array.from({length:6},(i,e)=>({id:e+1,name:`项目-${e+1}`,status:e%2===0?"active":"archived"})),A=()=>new Promise(i=>{i({items:f,page:{totalRecord:f.length}})}),C=[{type:"index",label:"序号"},{prop:"name",label:"名称"},{prop:"status",label:"状态"}],u=m(!1);return(i,e)=>{const P=E("AppPage");return j(),D(P,null,{default:n(()=>[t("div",V,[e[9]||(e[9]=t("h2",null,"dc- 逐族定向锚点示范（T8）",-1)),e[10]||(e[10]=t("p",{style:{color:"var(--el-text-color-secondary)","line-height":"1.7"}},[l(" 本页经 "),t("code",null,"useActivated"),l(" 在"),t("strong",null,"激活时注入"),l("逐族 "),t("code",null,"<style>"),l("（命中 "),t("code",null,".dc-form-main"),l(" / "),t("code",null,".dc-table-main"),l(" / "),t("code",null,".dc-panel-main"),l(" / "),t("code",null,".dc-action-btn"),l(" / "),t("code",null,".dc-confirm-modal"),l(" 锚点），"),t("strong",null,"失活/卸载时移除"),l("。 离开本页样式自动撤销（可卸载性），各族回原样。 ")],-1)),t("div",$,[o(a(d),{type:"primary",onClick:w},{default:n(()=>[l(g(p.value?"关闭逐族定制":"开启逐族定制"),1)]),_:1}),t("span",Y,[e[2]||(e[2]=l(" 当前注入状态：",-1)),t("strong",null,g(p.value?"已注入（生效）":"未注入（原样）"),1)]),o(a(d),{style:{"margin-left":"12px"},onClick:e[0]||(e[0]=y=>u.value=!0)},{default:n(()=>[...e[3]||(e[3]=[l(" 打开弹窗族 ",-1)])]),_:1})]),e[11]||(e[11]=t("h3",null,"表单族 · FormMain（→ form-item 左主色轨）",-1)),o(a(I),{list:k,data:M.value},null,8,["data"]),e[12]||(e[12]=t("h3",null,"面板族 · PanelMain（→ 每项卡片化）",-1)),o(a(T),{list:h,data:_.value},null,8,["data"]),e[13]||(e[13]=t("h3",null,"表格族 · TableMain（→ 表头主色淡底大写）",-1)),t("div",z,[o(a(F),{api:A,columns:C,rowKey:"id",showToolbar:!1,showPager:!1})]),e[14]||(e[14]=t("h3",null,"操作按钮族 · ActionBtn（→ 胶囊形）",-1)),t("div",null,[o(a(d),{type:"primary"},{default:n(()=>[...e[4]||(e[4]=[l("主操作",-1)])]),_:1}),o(a(d),{style:{"margin-left":"8px"}},{default:n(()=>[...e[5]||(e[5]=[l("次操作",-1)])]),_:1}),o(a(d),{type:"danger",style:{"margin-left":"8px"}},{default:n(()=>[...e[6]||(e[6]=[l("危险操作",-1)])]),_:1})]),o(a(S),{show:u.value,"onUpdate:show":e[1]||(e[1]=y=>u.value=y)},{title:n(()=>[...e[7]||(e[7]=[l("弹窗族 · dc-confirm-modal",-1)])]),default:n(()=>[e[8]||(e[8]=t("div",{style:{padding:"8px 0"}},[l(" 本弹窗标题区由 "),t("code",null,".dc-confirm-modal .el-dialog__header"),l(" 命中 → 主色顶栏。 ")],-1))]),_:1},8,["show"])])]),_:1})}}});export{ae as default};
