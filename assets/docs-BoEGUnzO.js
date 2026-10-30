import{Mt as e}from"./index-Brl-UwoM.js";import{r as t}from"./shell-Cf4kPElH.js";var n=e();function r(e){let r={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{eyebrow:`KIVI UI KIT V2 · 草稿 0.1`,title:`KIVI 设计规范`,lead:`KIVI 产品界面（AI 无限画布 Web 端）的 React 组件库。设计、产品、研发、AI 看的是同一份：能直接点着试，代码能直接复制、能改。以 Figma 为准，Figma 里没定的不写。`}),`
`,(0,n.jsx)(r.h2,{id:`怎么用`,children:`怎么用`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`前端`}),`：React 18。从 `,(0,n.jsx)(r.code,{children:`kivi`}),` 引组件，比如 `,(0,n.jsx)(r.code,{children:`import { Button } from '@kivi'`}),`。引一次入口就带上变量和基础样式，每个组件自己带 CSS。`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`设计`}),`：每个组件的属性面板和 Figma 右侧属性一一对应，可以拿来对照效果。`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`AI`}),`：skill 直接读源码：规范在 `,(0,n.jsx)(r.code,{children:`src/docs/`}),` 的 `,(0,n.jsx)(r.code,{children:`.mdx`}),`，组件在 `,(0,n.jsx)(r.code,{children:`src/kivi/`}),` 的 `,(0,n.jsx)(r.code,{children:`.tsx`}),` 和 `,(0,n.jsx)(r.code,{children:`.css`}),`。不另外维护一份 md。`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`文件`,children:`文件`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`位置`}),(0,n.jsx)(r.th,{children:`是什么`}),(0,n.jsx)(r.th,{children:`前端要不要用`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`src/kivi/tokens.css`})}),(0,n.jsx)(r.td,{children:`所有变量。数值只写在这里`}),(0,n.jsx)(r.td,{children:`要`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`src/kivi/base.css`}),`、`,(0,n.jsx)(r.code,{children:`Icon.tsx`}),`、`,(0,n.jsx)(r.code,{children:`icons.ts`})]}),(0,n.jsx)(r.td,{children:`图标和加载转圈。图标从 Figma 导出`}),(0,n.jsx)(r.td,{children:`要`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`src/kivi/按页名/`})}),(0,n.jsxs)(r.td,{children:[`每个 Figma 页一个文件夹：组件 `,(0,n.jsx)(r.code,{children:`.tsx`}),` + 这一页的 `,(0,n.jsx)(r.code,{children:`.css`})]}),(0,n.jsx)(r.td,{children:`要`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`src/docs/`})}),(0,n.jsx)(r.td,{children:`规范页面：用途、结构、属性、样子、用法 + 演示`}),(0,n.jsx)(r.td,{children:`不用，看就行`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`src/shell/`})}),(0,n.jsx)(r.td,{children:`这个网站自己的外壳：目录、演示、属性面板`}),(0,n.jsx)(r.td,{children:`不用`})]})]})]}),`
`,(0,n.jsx)(r.h2,{id:`和-figma-同步`,children:`和 Figma 同步`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`目录按 Figma 的页分。Figma 改了哪一页，就改对应的页面和 `,(0,n.jsx)(r.code,{children:`src/kivi/`}),` 里那一页的文件夹。`]}),`
`,(0,n.jsxs)(r.li,{children:[`改变量：只改 `,(0,n.jsx)(r.code,{children:`tokens.css`}),`，页面上的值是从它读出来的。`]}),`
`,(0,n.jsxs)(r.li,{children:[`改组件：改组件的 `,(0,n.jsx)(r.code,{children:`.tsx`}),`、`,(0,n.jsx)(r.code,{children:`.css`}),`，再改页面上的说明。`]}),`
`,(0,n.jsx)(r.li,{children:`改名要有对照：Figma 各页的「迁移映射」，网站里对应「旧名对照」。`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`本地打开`,children:`本地打开`}),`
`,(0,n.jsxs)(r.p,{children:[`在 `,(0,n.jsx)(r.code,{children:`kivi-design-system/site/`}),` 下：`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-bash`,children:`npm install
npm run dev
`})}),`
`,(0,n.jsxs)(r.p,{children:[`打开 `,(0,n.jsx)(r.code,{children:`http://localhost:4173/`}),`。内网别的电脑用这台电脑的内网地址加 `,(0,n.jsx)(r.code,{children:`:4173`}),`。`]})]})}function i(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};