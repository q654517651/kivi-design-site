import{Et as e,Ft as t,It as n,J as r,Mt as i,Tt as a,jt as o,q as s,zt as c}from"./index-Brl-UwoM.js";import{r as l,t as u}from"./shell-Cf4kPElH.js";var d=c(n(),1),f=c(t(),1),p=i(),m=`mo-styles`,h=`
/* 缓动、时长的小球 */
.mo-rows { display: grid; gap: var(--spacing-12); width: 100%; }
.mo-row { --mo-name: 120px; display: grid; grid-template-columns: var(--mo-name) 56px minmax(0, 1fr); align-items: center; gap: var(--spacing-16); }
.mo-row.mo-dur { grid-template-columns: var(--mo-name) minmax(0, 1fr); }
.mo-row b { font-size: var(--font-size-13); font-weight: var(--font-weight-medium); }
.mo-row small { display: block; color: var(--color-text-fill-tertiary); font-size: var(--font-size-12); line-height: var(--font-line-height-20); }
.mo-curve { width: 56px; height: 56px; color: var(--color-text-fill-tertiary); }
.mo-track { position: relative; height: 24px; border-radius: var(--border-radius-round); background: var(--color-bg-fill-container-light-1); }
.mo-dot { position: absolute; top: 4px; left: 4px; width: 16px; height: 16px; border-radius: var(--border-radius-round); background: var(--color-brand-solid); }
.mo-ease .mo-dot { transition: left 1000ms var(--ease); }
.mo-ease.is-end .mo-dot { left: calc(100% - 20px); }
.mo-dur .mo-dot { transition: left var(--dur) var(--motion-ease-in-out); }
.mo-dur.is-end .mo-dot { left: min(calc(4px + var(--to)), calc(100% - 20px)); }
.mo-dur .mo-dot.is-color { transition: background-color var(--dur) var(--motion-ease-in-out); }
.mo-dur.is-end .mo-dot.is-color { left: 4px; background: var(--color-text-fill-primary); }
.mo-dur .mo-dot.is-fade { transition: opacity var(--dur) var(--motion-ease-in); }
.mo-dur.is-end .mo-dot.is-fade { left: 4px; opacity: 0; transition: opacity var(--dur) var(--motion-ease-in); }
.mo-controls { display: flex; justify-content: flex-end; width: 100%; }
@media (max-width: 640px) {
  .mo-row { --mo-name: 96px; grid-template-columns: var(--mo-name) minmax(0, 1fr); }
  .mo-curve { display: none; }
}

/* 场景演示的舞台 */
.mo-stage { position: relative; display: flex; align-items: flex-start; justify-content: center; width: 100%; min-height: 200px; padding-top: 24px; }
.mo-stage.is-bottom { align-items: flex-end; padding-bottom: 24px; }

/* Tooltip：悬停 500ms 后 150ms ease-out 淡入，离开 100ms ease-in 淡出 */
.mo-tip-anchor { position: relative; display: inline-flex; }
.mo-tip {
  position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
  height: 32px; padding: 6px var(--spacing-12); border-radius: var(--border-radius-8);
  background: var(--color-bg-fill-popup); color: var(--color-text-fill-primary);
  font-size: var(--font-size-12); line-height: var(--font-line-height-20); white-space: nowrap;
  pointer-events: none; opacity: 0;
  transition: opacity var(--motion-duration-100) var(--motion-ease-in);
}
.mo-tip-anchor:hover .mo-tip { opacity: 1; transition: opacity var(--motion-duration-150) var(--motion-ease-out) 500ms; }

/* 菜单：200ms ease-out 出现，150ms ease-in 消失 */
.mo-menu-wrap { position: relative; }
.mo-menu {
  position: absolute; top: calc(100% + 4px); left: 0; z-index: 2;
  min-width: 160px; padding: var(--spacing-4); border-radius: var(--border-radius-12);
  outline: var(--border-width-1) solid var(--color-border-subtle); outline-offset: calc(var(--border-width-1) * -1);
  background: var(--color-bg-fill-glass); -webkit-backdrop-filter: blur(var(--effect-glass-blur)); backdrop-filter: blur(var(--effect-glass-blur));
  opacity: 0; visibility: hidden; transform: translateY(-4px) scale(0.96); transform-origin: 0 0;
  transition: opacity var(--motion-duration-150) var(--motion-ease-in), transform var(--motion-duration-150) var(--motion-ease-in), visibility 0s linear var(--motion-duration-150);
}
.mo-menu.is-open { opacity: 1; visibility: visible; transform: none; transition: opacity var(--motion-duration-200) var(--motion-ease-out), transform var(--motion-duration-200) var(--motion-ease-out), visibility 0s; }
.mo-menu-item {
  display: flex; align-items: center; gap: var(--spacing-8); width: 100%; height: 36px; padding: 0 var(--spacing-12);
  border: 0; border-radius: var(--border-radius-8); background: transparent; color: var(--color-text-fill-primary);
  font: inherit; font-size: var(--font-size-13); line-height: var(--font-line-height-20); text-align: left; cursor: pointer;
  transition: background-color var(--motion-duration-100) var(--motion-ease-in-out);
}
.mo-menu-item:hover { background: var(--color-bg-fill-container-light-2-hover); }
.mo-menu-item.is-danger { color: var(--color-status-danger); }
.mo-menu-item.is-danger:hover { background: var(--color-status-danger-subtle); }
.mo-menu-divider { height: 1px; margin: var(--spacing-4) 0; background: var(--color-border-subtle); }

/* Toast：200ms ease-out 从上方移入，150ms ease-in 淡出 */
.mo-toast {
  position: absolute; top: 24px; left: 50%; z-index: 2;
  display: flex; align-items: center; gap: var(--spacing-8);
  height: 40px; padding: var(--spacing-8) var(--spacing-16); border-radius: var(--border-radius-12);
  background: var(--color-bg-fill-popup); color: var(--color-text-fill-primary);
  font-size: var(--font-size-14); line-height: var(--font-line-height-22); white-space: nowrap;
  opacity: 0; visibility: hidden; transform: translate(-50%, -64px);
}
.mo-toast.is-open {
  opacity: 1; visibility: visible; transform: translate(-50%, 0);
  transition: opacity var(--motion-duration-200) var(--motion-ease-out), transform var(--motion-duration-200) var(--motion-ease-out);
}
.mo-toast.is-leaving {
  opacity: 0; visibility: visible; transform: translate(-50%, 0);
  transition: opacity var(--motion-duration-150) var(--motion-ease-in);
}
.mo-toast-ok { display: grid; place-items: center; width: 16px; height: 16px; border-radius: var(--border-radius-round); background: var(--color-status-success); color: var(--color-bg-fill-popup); }
.mo-toast-ok .kv-icon { width: 12px; height: 12px; }

/* 弹窗：遮罩和弹窗一起 300ms ease-out 淡入，弹窗 96% → 100%；200ms ease-in 淡出 */
.mo-mask {
  position: fixed; inset: 0; z-index: 50; display: grid; place-items: center; padding: var(--spacing-16);
  background: var(--color-bg-fill-mask);
  opacity: 0; visibility: hidden;
  transition: opacity var(--motion-duration-200) var(--motion-ease-in), visibility 0s linear var(--motion-duration-200);
}
.mo-dialog {
  display: grid; gap: var(--spacing-16); width: 400px; max-width: 100%; padding: var(--spacing-24);
  border-radius: var(--border-radius-16); background: var(--color-bg-fill-surface); color: var(--color-text-fill-primary);
  font-size: var(--font-size-14); line-height: var(--font-line-height-22);
  transform: scale(0.96);
  transition: transform var(--motion-duration-200) var(--motion-ease-in);
}
.mo-mask.is-open { opacity: 1; visibility: visible; transition: opacity var(--motion-duration-300) var(--motion-ease-out), visibility 0s; }
.mo-mask.is-open .mo-dialog { transform: scale(1); transition: transform var(--motion-duration-300) var(--motion-ease-out); }
.mo-dialog-head { display: flex; align-items: center; justify-content: space-between; }
.mo-dialog-head b { font-size: var(--font-size-16); font-weight: var(--font-weight-medium); line-height: var(--font-line-height-24); }
.mo-dialog p { margin: 0; color: var(--color-text-fill-secondary); }
.mo-dialog-foot { display: flex; justify-content: flex-end; gap: var(--spacing-8); margin-top: var(--spacing-8); }

/* 加载和骨架屏 */
.mo-loading { display: flex; align-items: center; gap: var(--spacing-8); color: var(--color-text-fill-secondary); }
.mo-loading.is-col { flex-direction: column; }
.mo-loading.is-lg { gap: var(--spacing-12); font-size: var(--font-size-14); }
.mo-loading.is-md { font-size: var(--font-size-13); line-height: var(--font-line-height-20); }
.mo-loading.is-sm { font-size: var(--font-size-12); line-height: var(--font-line-height-20); }
.mo-loading .kv-icon { color: var(--color-text-fill-primary); }
.mo-skeleton-card { display: grid; grid-template-columns: 40px 1fr; gap: var(--spacing-12); width: 320px; max-width: 100%; }
.mo-skeleton-lines { display: grid; gap: var(--spacing-8); align-content: center; }
.mo-skeleton {
  position: relative; overflow: hidden;
  background: var(--color-bg-fill-container-light-1); border-radius: var(--border-radius-4);
}
.mo-skeleton::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, var(--color-bg-fill-container-light-1-hover), transparent);
  transform: translateX(-100%);
  animation: mo-sweep 1.4s linear infinite;
}
@keyframes mo-sweep { to { transform: translateX(100%); } }
`,g=0;function _(){(0,d.useInsertionEffect)(()=>{let e=document.getElementById(m);return e||(e=document.createElement(`style`),e.id=m,document.head.appendChild(e)),e.textContent=h,g+=1,()=>{--g,g<=0&&document.getElementById(m)?.remove()}},[])}function v({children:e}){return _(),(0,p.jsx)(`figure`,{className:`shell-demo`,children:(0,p.jsx)(`div`,{className:`shell-demo-preview`,children:e})})}function y(e){if(!e)return[0,0,1,1];let t=getComputedStyle(document.documentElement).getPropertyValue(e),n=/cubic-bezier\(([^)]+)\)/.exec(t),r=n?n[1].split(`,`).map(Number):[];return r.length===4&&r.every(Number.isFinite)?r:[0,0,1,1]}function b({p:e}){let t=e=>4+e*48,n=e=>4+(1-e)*48;return(0,p.jsxs)(`svg`,{className:`mo-curve`,viewBox:`0 0 56 56`,"aria-hidden":`true`,children:[(0,p.jsx)(`rect`,{x:`4`,y:`4`,width:`48`,height:`48`,rx:`4`,fill:`none`,stroke:`currentColor`,strokeOpacity:`.4`}),(0,p.jsx)(`path`,{d:`M${t(0)} ${n(0)} C${t(e[0])} ${n(e[1])} ${t(e[2])} ${n(e[3])} ${t(1)} ${n(1)}`,fill:`none`,stroke:`var(--color-brand-solid)`,strokeWidth:`2`,strokeLinecap:`round`})]})}var x=[{name:`ease-in-out`,note:`屏幕内移动`,token:`--motion-ease-in-out`,css:`var(--motion-ease-in-out)`},{name:`ease-out`,note:`进入、出现`,token:`--motion-ease-out`,css:`var(--motion-ease-out)`},{name:`ease-in`,note:`退出、消失`,token:`--motion-ease-in`,css:`var(--motion-ease-in)`},{name:`linear`,note:`循环`,token:null,css:`linear`}];function S(){let[t,n]=(0,d.useState)(!1);return(0,p.jsxs)(v,{children:[(0,p.jsx)(`div`,{className:`mo-rows`,children:x.map(e=>(0,p.jsxs)(`div`,{className:t?`mo-row mo-ease is-end`:`mo-row mo-ease`,style:{"--ease":e.css},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`b`,{children:e.name}),(0,p.jsx)(`small`,{children:e.note})]}),(0,p.jsx)(b,{p:y(e.token)}),(0,p.jsx)(`div`,{className:`mo-track`,children:(0,p.jsx)(`span`,{className:`mo-dot`})})]},e.name))}),(0,p.jsx)(`div`,{className:`mo-controls`,children:(0,p.jsx)(e,{size:`sm`,onClick:()=>n(!t),children:`播放`})})]})}var C=[{ms:`100ms`,note:`换颜色`,token:`--motion-duration-100`,dot:`color`},{ms:`150ms`,note:`小东西消失`,token:`--motion-duration-150`,dot:`fade`},{ms:`200ms`,note:`移动 80px`,token:`--motion-duration-200`,to:`80px`},{ms:`300ms`,note:`移动 240px`,token:`--motion-duration-300`,to:`240px`},{ms:`400ms`,note:`移动到头`,token:`--motion-duration-400`,to:`100%`}];function w(){let[t,n]=(0,d.useState)(!1);return(0,p.jsxs)(v,{children:[(0,p.jsx)(`div`,{className:`mo-rows`,children:C.map(e=>(0,p.jsxs)(`div`,{className:t?`mo-row mo-dur is-end`:`mo-row mo-dur`,style:{"--dur":`var(${e.token})`,"--to":e.to},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`b`,{children:e.ms}),(0,p.jsx)(`small`,{children:e.note})]}),(0,p.jsx)(`div`,{className:`mo-track`,children:(0,p.jsx)(`span`,{className:e.dot?`mo-dot is-${e.dot}`:`mo-dot`})})]},e.ms))}),(0,p.jsx)(`div`,{className:`mo-controls`,children:(0,p.jsx)(e,{size:`sm`,onClick:()=>n(!t),children:`播放`})})]})}function T(){return(0,p.jsx)(v,{children:[[`Download`,`下载`],[`Copy`,`复制`],[`Delete`,`删除`]].map(([e,t])=>(0,p.jsxs)(`span`,{className:`mo-tip-anchor`,children:[(0,p.jsx)(a,{icon:e,label:t}),(0,p.jsx)(`span`,{className:`mo-tip`,role:`tooltip`,children:t})]},e))})}function E(){let[t,n]=(0,d.useState)(!1),r=(0,d.useRef)(null);return(0,d.useEffect)(()=>{if(!t)return;let e=e=>{r.current?.contains(e.target)||n(!1)},i=e=>{e.key===`Escape`&&n(!1)};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,i),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,i)}},[t]),(0,p.jsx)(v,{children:(0,p.jsx)(`div`,{className:`mo-stage`,children:(0,p.jsxs)(`div`,{className:`mo-menu-wrap`,ref:r,children:[(0,p.jsx)(e,{rightIcon:`DownArrowSmall`,"aria-expanded":t,"aria-haspopup":`menu`,onClick:()=>n(!t),children:`更多操作`}),(0,p.jsx)(`div`,{className:t?`mo-menu is-open`:`mo-menu`,role:`menu`,children:[{icon:`Download`,label:`下载`},{icon:`Copy`,label:`复制`},{icon:`Upload`,label:`重新上传`},{icon:`Delete`,label:`删除`,danger:!0,divider:!0}].map(e=>(0,p.jsxs)(d.Fragment,{children:[e.divider&&(0,p.jsx)(`div`,{className:`mo-menu-divider`,role:`separator`}),(0,p.jsxs)(`button`,{type:`button`,role:`menuitem`,className:e.danger?`mo-menu-item is-danger`:`mo-menu-item`,onClick:()=>n(!1),children:[(0,p.jsx)(o,{name:e.icon}),e.label]})]},e.label))})]})})})}function D(){let[t,n]=(0,d.useState)(`idle`),r=(0,d.useRef)();return(0,d.useEffect)(()=>()=>window.clearTimeout(r.current),[]),(0,p.jsx)(v,{children:(0,p.jsxs)(`div`,{className:`mo-stage is-bottom`,children:[(0,p.jsxs)(`div`,{className:t===`idle`?`mo-toast`:`mo-toast is-${t}`,role:`status`,children:[(0,p.jsx)(`span`,{className:`mo-toast-ok`,children:(0,p.jsx)(o,{name:`CheckSmall`})}),`已保存到我的作品`]}),(0,p.jsx)(e,{onClick:()=>{window.clearTimeout(r.current),n(`open`),r.current=window.setTimeout(()=>{n(`leaving`),r.current=window.setTimeout(()=>n(`idle`),150)},3e3)},children:`保存`})]})})}function O(){let[t,n]=(0,d.useState)(!1),r=(0,d.useId)(),i=(0,d.useRef)(null),o=(0,d.useRef)(null);return(0,d.useEffect)(()=>{if(!t)return;o.current=document.activeElement,i.current?.querySelector(`.mo-dialog-foot button`)?.focus();let e=e=>{e.key===`Escape`&&n(!1)};return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e),o.current?.focus?.()}},[t]),(0,p.jsxs)(v,{children:[(0,p.jsx)(e,{onClick:()=>n(!0),children:`删除作品`}),(0,f.createPortal)((0,p.jsx)(`div`,{className:t?`mo-mask is-open`:`mo-mask`,"aria-hidden":!t,onClick:e=>e.target===e.currentTarget&&n(!1),children:(0,p.jsxs)(`div`,{className:`mo-dialog`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":r,ref:i,children:[(0,p.jsxs)(`div`,{className:`mo-dialog-head`,children:[(0,p.jsx)(`b`,{id:r,children:`删除这个作品？`}),(0,p.jsx)(a,{icon:`Close`,label:`关闭`,onClick:()=>n(!1)})]}),(0,p.jsx)(`p`,{children:`删除后不能恢复。`}),(0,p.jsxs)(`div`,{className:`mo-dialog-foot`,children:[(0,p.jsx)(e,{size:`lg`,onClick:()=>n(!1),children:`取消`}),(0,p.jsx)(e,{size:`lg`,variant:`danger`,onClick:()=>n(!1),children:`删除`})]})]})}),document.body)]})}function k(){let[e,t]=(0,d.useState)(!0);return(0,p.jsx)(v,{children:(0,p.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":e,"aria-label":`示意开关`,className:`shell-switch`,onClick:()=>t(!e)})})}function A(){return(0,p.jsxs)(v,{children:[(0,p.jsxs)(`div`,{className:`mo-loading is-sm`,children:[(0,p.jsx)(o,{name:`Loading`,spin:!0}),`加载中`]}),(0,p.jsxs)(`div`,{className:`mo-loading is-md is-col`,style:{margin:`0 32px`},children:[(0,p.jsx)(o,{name:`Loading`,size:24,spin:!0}),`加载中`]}),(0,p.jsxs)(`div`,{className:`mo-loading is-lg is-col`,children:[(0,p.jsx)(o,{name:`Loading`,size:40,spin:!0}),`正在生成`]})]})}function j(){return(0,p.jsx)(v,{children:(0,p.jsxs)(`div`,{className:`mo-skeleton-card`,"aria-busy":`true`,children:[(0,p.jsx)(`div`,{className:`mo-skeleton`,style:{width:40,height:40,borderRadius:`var(--border-radius-round)`}}),(0,p.jsxs)(`div`,{className:`mo-skeleton-lines`,children:[(0,p.jsx)(`div`,{className:`mo-skeleton`,style:{height:12,width:`60%`}}),(0,p.jsx)(`div`,{className:`mo-skeleton`,style:{height:12}})]}),(0,p.jsx)(`div`,{className:`mo-skeleton`,style:{gridColumn:`1 / -1`,height:160,borderRadius:`var(--border-radius-8)`}})]})})}var M=[[`twinkle`,`方案一 星点闪烁`],[`drift`,`方案二 斜飘`],[`sheen`,`方案三 静态扫光`]],N=[[`white`,`白色`],[`brand`,`品牌渐变`]],P=[[`6`,`6`],[`8`,`8`],[`10`,`10`]],F=[[`0.5`,`0.5×`],[`1`,`1×`],[`1.5`,`1.5×`]],I=[[`0`,`无`],[`0.25`,`25%`],[`0.5`,`50%`],[`0.8`,`80%`]],L={position:`relative`,width:256,height:256,borderRadius:16,background:`var(--color-bg-fill-surface)`},R={aspectRatio:`1`,borderRadius:8,background:`var(--color-bg-fill-surface)`};function z(e){return(0,p.jsx)(`div`,{style:L,children:(0,p.jsx)(r,{type:e.type,effect:e.effect,color:e.color,spacing:Number(e.spacing),speed:Number(e.speed),glow:Number(e.glow),paused:e.paused||void 0})})}function B(){return(0,p.jsx)(u,{controls:[{key:`effect`,label:`方案`,type:`segment`,value:`twinkle`,options:M},{key:`type`,label:`类型`,type:`segment`,value:`image`,options:[[`image`,`图片`],[`video`,`视频`],[`audio`,`音频`],[`text`,`文字`]]},{key:`color`,label:`颜色`,type:`segment`,value:`white`,options:N},{key:`spacing`,label:`点距`,type:`segment`,value:`6`,options:P},{key:`speed`,label:`速度`,type:`segment`,value:`0.5`,options:F},{key:`glow`,label:`光晕`,type:`segment`,value:`0.25`,options:I},{key:`paused`,label:`暂停`,type:`toggle`,value:!1}],render:z})}function V(e){let t=Number(e.count);return(0,p.jsxs)(`div`,{style:{position:`relative`,display:`grid`,gridTemplateColumns:`repeat(${t}, minmax(0, 1fr))`,gap:8,width:`100%`,maxWidth:t*256+(t-1)*8},children:[Array.from({length:t},(e,t)=>(0,p.jsx)(`div`,{style:R},t)),(0,p.jsx)(s,{type:`image`,effect:e.effect,count:t,gap:8,radius:8,color:e.color,spacing:Number(e.spacing),speed:Number(e.speed),glow:Number(e.glow),paused:e.paused||void 0})]})}function H(){return(0,p.jsx)(u,{controls:[{key:`effect`,label:`方案`,type:`segment`,value:`twinkle`,options:M},{key:`count`,label:`张数`,type:`segment`,value:`4`,options:[[`2`,`2`],[`3`,`3`],[`4`,`4`]]},{key:`color`,label:`颜色`,type:`segment`,value:`white`,options:N},{key:`spacing`,label:`点距`,type:`segment`,value:`6`,options:P},{key:`speed`,label:`速度`,type:`segment`,value:`0.5`,options:F},{key:`glow`,label:`光晕`,type:`segment`,value:`0.25`,options:I},{key:`paused`,label:`暂停`,type:`toggle`,value:!1}],render:V})}function U(e){let t={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{id:`生成中`,children:`生成中`}),`
`,(0,p.jsx)(t.p,{children:`节点和结果图正在生成时的点阵动效：点阵拼出类型图标，再散成星点，循环。GeneratingDots 管一张，GeneratingRow 管一次多张；都铺满最近的定位父元素。`}),`
`,(0,p.jsx)(t.h3,{id:`generatingdots`,children:`GeneratingDots`}),`
`,(0,p.jsx)(B,{}),`
`,(0,p.jsx)(t.h3,{id:`generatingrow`,children:`GeneratingRow`}),`
`,(0,p.jsx)(H,{}),`
`,(0,p.jsx)(t.h3,{id:`参数`,children:`参数`}),`
`,(0,p.jsx)(t.h4,{id:`generatingdots-1`,children:`GeneratingDots`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`属性`}),(0,p.jsx)(t.th,{children:`类型`}),(0,p.jsx)(t.th,{children:`默认`}),(0,p.jsx)(t.th,{children:`说明`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`type`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`"image"`}),` `,(0,p.jsx)(t.code,{children:`"video"`}),` `,(0,p.jsx)(t.code,{children:`"audio"`}),` `,(0,p.jsx)(t.code,{children:`"text"`})]}),(0,p.jsx)(t.td,{children:`—`}),(0,p.jsx)(t.td,{children:`汇聚时拼出的图标，必填。用 Figma 图标 ImageGeneration / VideoGeneration / Audio / Text，居中，大小是格子短边的 56%，按填充轮廓算格子（盖住 30% 以上算一个点）`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`effect`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`"twinkle"`}),` `,(0,p.jsx)(t.code,{children:`"drift"`}),` `,(0,p.jsx)(t.code,{children:`"sheen"`})]}),(0,p.jsx)(t.td,{children:`不传：挂载时在方案一、二里随机选一个`}),(0,p.jsxs)(t.td,{children:[`方案一 `,(0,p.jsx)(t.code,{children:`twinkle`}),` 星点闪烁：点不飞，图标上的点和背景星点轮流淡入淡出。方案二 `,(0,p.jsx)(t.code,{children:`drift`}),` 斜飘：图标往右上约 35° 飘散、变淡，星点亮起；汇聚时点从左下飘回图标。方案三 `,(0,p.jsx)(t.code,{children:`sheen`}),` 静态扫光：图标拼好不动，没有星点，只有扫光循环，节奏和一轮一样（0.5× 下每 11.6s 扫一次）。不传时每个实例挂载时只在方案一、二里随机选一个，重渲染不换。系统开了「减少动态效果」时一律用方案三，盖过 `,(0,p.jsx)(t.code,{children:`effect`}),` 传的值。方案一、二的背景星点一样：每张 16% 的格子是候选，由往右上滚动的噪波（三层叠加，权重 0.45 / 0.33 / 0.22）决定亮灭，每颗用 0.4s 缓入缓出地追上；每轮换一张噪波，成形时只剩几颗`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`speed`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`0.5`})}),(0,p.jsx)(t.td,{children:`速度倍数。1× 一轮 5.8s：星点 1.6 / 汇聚 1.4 / 成形 1.6 / 散开 1.2。默认 0.5×，一轮 11.6s。常用 0.5 / 1 / 1.5`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`spacing`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`6`})}),(0,p.jsx)(t.td,{children:`点距，参照 256 边长。常用 6 / 8 / 10。格子短边小于 256 时点距、点的大小按比例缩，最小缩到 1/4；大于 256 不放大`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`color`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`"brand"`}),` `,(0,p.jsx)(t.code,{children:`"white"`})]}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"white"`})}),(0,p.jsxs)(t.td,{children:[`品牌渐变（`,(0,p.jsx)(t.code,{children:`--color-brand-gradient-1`}),` 到 `,(0,p.jsx)(t.code,{children:`-2`}),`）/ 白色（`,(0,p.jsx)(t.code,{children:`--color-text-fill-primary`}),`）。底层网点固定 `,(0,p.jsx)(t.code,{children:`--color-bg-fill-container-light-1`}),`（白 8%）`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`glow`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`0.25`})}),(0,p.jsx)(t.td,{children:`光晕强度 0–1，0 是没有。光晕是模糊半径为点距 60% 的亮度图，叠在点下面`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`paused`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`boolean`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`false`})}),(0,p.jsx)(t.td,{children:`暂停，停在当前画面`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`seed`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:`每个实例各一个`}),(0,p.jsx)(t.td,{children:`随机种子，决定星点位置和每轮的亮灭、飘动路线。要固定就传`})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[`其余原生 `,(0,p.jsx)(t.code,{children:`<div>`}),` 属性都能传。`]}),`
`,(0,p.jsx)(t.h4,{id:`generatingrow-1`,children:`GeneratingRow`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`属性`}),(0,p.jsx)(t.th,{children:`类型`}),(0,p.jsx)(t.th,{children:`默认`}),(0,p.jsx)(t.th,{children:`说明`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`type`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`"image"`}),` `,(0,p.jsx)(t.code,{children:`"video"`}),` `,(0,p.jsx)(t.code,{children:`"audio"`}),` `,(0,p.jsx)(t.code,{children:`"text"`})]}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"image"`})}),(0,p.jsx)(t.td,{children:`每张里拼出的图标，同 GeneratingDots`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`count`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`4`})}),(0,p.jsx)(t.td,{children:`一次生成几张。父元素要排成同样多的等宽格子。每张比左边一张晚 0.1 时间线秒（0.5× 下 200ms），扫光也跟着错开，每张各扫一道；几张的噪波连成一片，按整排坐标算`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`gap`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`8`})}),(0,p.jsx)(t.td,{children:`格子之间的缝，要和父元素排版里的 gap 一样。缝里不画点`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`radius`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`8`})}),(0,p.jsxs)(t.td,{children:[`每个格子的圆角，`,(0,p.jsx)(t.code,{children:`--border-radius-8`}),`，用来裁掉格子之外的光晕`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`effect`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`"twinkle"`}),` `,(0,p.jsx)(t.code,{children:`"drift"`}),` `,(0,p.jsx)(t.code,{children:`"sheen"`})]}),(0,p.jsx)(t.td,{children:`不传：挂载时在方案一、二里随机选一个`}),(0,p.jsx)(t.td,{children:`同 GeneratingDots。方案二飘散时往右上飘向下一张，汇聚时从左下的上一张飘进来，飞得比单张远（0.55 倍格子边长起，单张 0.4）`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`speed`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`0.5`})}),(0,p.jsx)(t.td,{children:`同 GeneratingDots`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`spacing`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`6`})}),(0,p.jsx)(t.td,{children:`同 GeneratingDots`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`color`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`"brand"`}),` `,(0,p.jsx)(t.code,{children:`"white"`})]}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"white"`})}),(0,p.jsx)(t.td,{children:`同 GeneratingDots`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`glow`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`0.25`})}),(0,p.jsx)(t.td,{children:`同 GeneratingDots`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`paused`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`boolean`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`false`})}),(0,p.jsx)(t.td,{children:`同 GeneratingDots`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`seed`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`number`})}),(0,p.jsx)(t.td,{children:`每个实例各一个`}),(0,p.jsx)(t.td,{children:`同 GeneratingDots`})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[`其余原生 `,(0,p.jsx)(t.code,{children:`<div>`}),` 属性都能传。`]})]})}function W(e={}){let{wrapper:t}=e.components||{};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(U,{...e})}):U(e)}function G(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{eyebrow:`基础`,title:`动效`,lead:`动效只用来交代「东西从哪来、到哪去、变成了什么」，不做装饰。先看「怎么动」选缓动，再看「动多远」选时长。`,figma:[`变量`,`6:2`],status:`草稿 2026-10-29`,code:`kivi/tokens.css`}),`
`,(0,p.jsxs)(t.p,{children:[`变量在 Figma「变量」页的「17 动效」分区，scale 集合的 `,(0,p.jsx)(t.code,{children:`motion/`}),`。`]}),`
`,(0,p.jsx)(t.h2,{id:`缓动按怎么动选`,children:`缓动：按怎么动选`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`怎么动`}),(0,p.jsx)(t.th,{children:`缓动`}),(0,p.jsx)(t.th,{children:`CSS`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`在屏幕内移动、变大变小、展开收起、换颜色`}),(0,p.jsx)(t.td,{children:`先加速后减速（ease-in-out）`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`var(--motion-ease-in-out)`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`进入：从屏幕外移进来，或从无到有（出现、淡入）`}),(0,p.jsx)(t.td,{children:`减速（ease-out）`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`var(--motion-ease-out)`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`退出：移出屏幕，或在屏幕内消失（淡出）`}),(0,p.jsx)(t.td,{children:`加速（ease-in）`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`var(--motion-ease-in)`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`循环：转圈、骨架屏扫光`}),(0,p.jsx)(t.td,{children:`匀速（linear）`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`linear`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`展开、收起一组东西：主站参考区`}),(0,p.jsx)(t.td,{children:`起步很快，慢慢停稳`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`var(--motion-ease-expand)`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`展开、收起一组东西：画布多图节点`}),(0,p.jsx)(t.td,{children:`冲过头约 4% 再回来（弹簧）`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`var(--motion-ease-spring)`})})]})]})]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`不用 CSS 默认的 `,(0,p.jsx)(t.code,{children:`ease`}),`，它不属于上面任何一种。`]}),`
`,(0,p.jsx)(t.li,{children:`同一个东西出现和消失分开写：出现用 ease-out，消失用 ease-in。`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`点「播放」对比四种曲线。演示放慢到 1 秒，方便看出差别。`}),`
`,(0,p.jsx)(S,{}),`
`,(0,p.jsx)(t.h2,{id:`时长按动多远选`,children:`时长：按动多远选`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`时长`}),(0,p.jsx)(t.th,{children:`变量`}),(0,p.jsx)(t.th,{children:`用在哪`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`100ms`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--motion-duration-100`})}),(0,p.jsx)(t.td,{children:`只换颜色：悬停、按下的底色和文字颜色`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`150ms`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--motion-duration-150`})}),(0,p.jsx)(t.td,{children:`小东西出现、消失：Tooltip、删除按钮、角标、开关滑块`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`200ms`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--motion-duration-200`})}),(0,p.jsx)(t.td,{children:`移动 100px 以内；菜单、下拉列表、Toast 出现`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`300ms`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--motion-duration-300`})}),(0,p.jsx)(t.td,{children:`移动 100–400px：参考区展开收起、面板展开收起、弹窗出现`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`400ms`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--motion-duration-400`})}),(0,p.jsx)(t.td,{children:`移动 400px 以上，或整屏：侧栏、抽屉滑进滑出`})]})]})]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`消失比出现短一档：菜单出现 200ms，消失 150ms。`}),`
`,(0,p.jsx)(t.li,{children:`一般最长 400ms，再长就拖了。`}),`
`,(0,p.jsxs)(t.li,{children:[`一组东西一起展开、收起（主站参考区、画布多图节点），按张数加时长：400ms 起，每多一张加 10ms，最多 700ms。参考区用 `,(0,p.jsx)(t.code,{children:`--motion-ease-expand`}),`，多图节点用 `,(0,p.jsx)(t.code,{children:`--motion-ease-spring`}),`。`]}),`
`,(0,p.jsx)(t.li,{children:`几样东西依次出现时，每个错开 20–30ms，整体不超过 400ms。`}),`
`,(0,p.jsx)(t.li,{children:`悬停触发的展开，鼠标离开后等 150ms 再收起，免得划过时来回闪。`}),`
`,(0,p.jsxs)(t.li,{children:[`系统开了「减少动态效果」时，去掉位移和缩放，只留透明度，或者直接切换。`,(0,p.jsx)(t.code,{children:`tokens.css`}),` 里已经把时长归零。`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`每一档按它该走的距离播放，真实速度。`}),`
`,(0,p.jsx)(w,{}),`
`,(0,p.jsx)(t.h2,{id:`写法`,children:`写法`}),`
`,(0,p.jsx)(t.p,{children:`出现和消失的缓动不同时，把消失的写在默认状态上，出现的写在出现后的状态上。`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`.menu {
  opacity: 0;
  transition: opacity var(--motion-duration-150) var(--motion-ease-in);
}
.menu.is-open {
  opacity: 1;
  transition: opacity var(--motion-duration-200) var(--motion-ease-out);
}
`})}),`
`,(0,p.jsx)(t.h2,{id:`常见场景`,children:`常见场景`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`场景`}),(0,p.jsx)(t.th,{children:`出现`}),(0,p.jsx)(t.th,{children:`消失`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`按钮、菜单项悬停`}),(0,p.jsx)(t.td,{children:`底色 100ms ease-in-out`}),(0,p.jsx)(t.td,{children:`同左`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Tooltip`}),(0,p.jsx)(t.td,{children:`延迟 500ms，再 150ms ease-out 淡入`}),(0,p.jsx)(t.td,{children:`100ms ease-in 淡出`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`菜单、下拉列表、右键、双击快捷添加`}),(0,p.jsx)(t.td,{children:`200ms ease-out：淡入 + 从锚点那一边 96% 放大、移 4`}),(0,p.jsx)(t.td,{children:`150ms ease-in 倒着播`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Toast`}),(0,p.jsx)(t.td,{children:`200ms ease-out，从上方移入`}),(0,p.jsx)(t.td,{children:`150ms ease-in 淡出`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`模态弹窗`}),(0,p.jsx)(t.td,{children:`遮罩和弹窗一起 300ms ease-out 淡入，弹窗从 96% 放大到 100%`}),(0,p.jsx)(t.td,{children:`200ms ease-in 淡出`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`开关`}),(0,p.jsx)(t.td,{children:`滑块 150ms ease-in-out`}),(0,p.jsx)(t.td,{children:`同左`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`主站输入框参考区`}),(0,p.jsxs)(t.td,{children:[`照 BytePlus：`,(0,p.jsx)(t.code,{children:`--motion-ease-expand`}),`，400ms 起每多一张加 10ms，最多 700ms；盖字的遮罩同步`]}),(0,p.jsx)(t.td,{children:`同一条缓动收回叠放`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`画布多图节点`}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`--motion-ease-spring`}),`，400ms 起每多一张加 10ms，最多 700ms；卡片一起动`]}),(0,p.jsx)(t.td,{children:`同一条缓动收回叠放`})]})]})]}),`
`,(0,p.jsx)(t.p,{children:`下面都能点。菜单、Tooltip、Toast、弹窗的正式组件在通用组件各页里，这里只示意动效。`}),`
`,(0,p.jsx)(t.h3,{id:`tooltip`,children:`Tooltip`}),`
`,(0,p.jsx)(t.p,{children:`鼠标停在按钮上 500ms 才出现，移开马上淡出。`}),`
`,(0,p.jsx)(T,{}),`
`,(0,p.jsx)(t.h3,{id:`菜单下拉列表`,children:`菜单、下拉列表`}),`
`,(0,p.jsx)(E,{}),`
`,(0,p.jsx)(t.h3,{id:`toast`,children:`Toast`}),`
`,(0,p.jsx)(D,{}),`
`,(0,p.jsx)(t.h3,{id:`模态弹窗`,children:`模态弹窗`}),`
`,(0,p.jsx)(O,{}),`
`,(0,p.jsx)(t.h3,{id:`开关`,children:`开关`}),`
`,(0,p.jsx)(k,{}),`
`,(0,p.jsx)(t.h3,{id:`加载`,children:`加载`}),`
`,(0,p.jsx)(t.p,{children:`Loading 图标 1 秒一圈，匀速。和按钮「加载中」用的是同一个。知道内容长什么样，用骨架屏；不知道、或者很快就好的，才用转圈。`}),`
`,(0,p.jsx)(A,{}),`
`,(0,p.jsx)(t.p,{children:`骨架屏：底色白 8%，高光白 12% 从左往右扫，1.4 秒一轮，匀速。`}),`
`,(0,p.jsx)(j,{}),`
`,`
`,(0,p.jsx)(W,{components:e.components})]})}function K(e={}){let{wrapper:t}=e.components||{};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(G,{...e})}):G(e)}export{K as default};