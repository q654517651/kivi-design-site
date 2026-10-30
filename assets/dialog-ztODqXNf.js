import{Et as e,Mt as t,rt as n}from"./index-Brl-UwoM.js";import{a as r,r as i,t as a}from"./shell-Cf4kPElH.js";var o=t();function s(){return(0,o.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:120,border:`1px dashed var(--color-border)`,borderRadius:`var(--border-radius-8)`,color:`var(--color-text-fill-tertiary)`,fontSize:`var(--font-size-13)`,lineHeight:`var(--font-line-height-20)`,textAlign:`center`},children:`内容区：把内容放在 children 里`})}s.displayName=`Content`;function c({open:e,onOpenChange:t,showClose:r,...i}){return(0,o.jsx)(`div`,{className:`kv-dialog__mask`,style:{position:`relative`,inset:`auto`,zIndex:`auto`,flex:`1 1 auto`,minWidth:0,alignSelf:`stretch`,justifyContent:`flex-start`,overflowX:`auto`,margin:`calc(-1 * var(--spacing-32))`,padding:`var(--spacing-32)`},children:(0,o.jsx)(n,{...i,showClose:r,style:{flex:`none`,maxWidth:`none`,margin:`0 auto`}})})}c.displayName=`Dialog`;function l(t){let n=(0,o.jsx)(e,{size:`lg`,variant:t.confirm,children:t.confirm===`danger`?`删除`:`确定`}),r=t.secondary?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e,{size:`lg`,children:`取消`}),n]}):n;return(0,o.jsx)(c,{open:!0,onOpenChange:()=>{},size:t.size,title:t.header?t.title:void 0,showClose:t.header&&!t.close?!1:void 0,description:t.desc?t.descText:void 0,footer:t.footer?r:void 0,children:t.body?(0,o.jsx)(s,{}):void 0})}function u(){return(0,o.jsx)(a,{controls:[{key:`size`,label:`尺寸`,type:`segment`,value:`s`,options:[[`s`,`S`],[`m`,`M`],[`l`,`L`],[`xl`,`XL`]]},{key:`header`,label:`显示标题栏`,type:`toggle`,value:!0},{key:`title`,label:`标题`,type:`text`,value:`弹窗标题`},{key:`close`,label:`显示关闭`,type:`toggle`,value:!0},{key:`desc`,label:`显示描述`,type:`toggle`,value:!0},{key:`descText`,label:`描述`,type:`text`,value:`一句话说明这个弹窗要做什么，或者操作的后果。`},{key:`body`,label:`显示内容`,type:`toggle`,value:!0},{key:`footer`,label:`显示底栏`,type:`toggle`,value:!0},{key:`secondary`,label:`显示次按钮`,type:`toggle`,value:!0},{key:`confirm`,label:`确认按钮`,type:`segment`,value:`primary`,options:[[`primary`,`主要`],[`danger`,`危险`]]}],rules:e=>({...e.header?{}:{title:!0,close:!0},...e.desc?{}:{descText:!0},...e.footer?{}:{secondary:!0,confirm:!0}}),render:l})}function d(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{eyebrow:`通用组件`,title:`弹窗`,lead:`模态弹窗，确认、重命名、表单、列表、编辑器都用它，4 个尺寸只是宽度不同。`,figma:[`弹窗`,`92:595`],status:`草稿 0.1.0`,code:`kivi/dialog`}),`
`,(0,o.jsx)(t.h2,{id:`dialog`,children:`Dialog`}),`
`,(0,o.jsx)(u,{}),`
`,(0,o.jsx)(t.h3,{id:`打开和关闭`,children:`打开和关闭`}),`
`,(0,o.jsx)(r,{code:`
() => {
const [open, setOpen] = useState(false);
return (
  <>
    <Button onClick={() => setOpen(true)}>放弃修改</Button>
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title="放弃这次修改？"
      description="离开后，没保存的修改会丢失。"
      footer={
        <>
          <Button size="lg" onClick={() => setOpen(false)}>取消</Button>
          <Button size="lg" variant="primary" onClick={() => setOpen(false)}>确定</Button>
        </>
      }
    />
  </>
);
}
`}),`
`,(0,o.jsx)(t.h3,{id:`二级弹窗`,children:`二级弹窗`}),`
`,(0,o.jsx)(r,{code:`
() => {
const [edit, setEdit] = useState(false);
const [del, setDel] = useState(false);
return (
  <>
    <Button onClick={() => setEdit(true)}>编辑作品</Button>
    <Dialog
      open={edit}
      onOpenChange={setEdit}
      size="m"
      closeOnMaskClick={false}
      title="编辑作品"
      description="改完点保存；也可以在这里删除。"
      footer={
        <>
          <Button size="lg" onClick={() => setDel(true)}>删除作品</Button>
          <Button size="lg" variant="primary" onClick={() => setEdit(false)}>保存</Button>
        </>
      }
    >
      <div style={{ height: 120, color: 'var(--color-text-fill-tertiary)' }}>表单放这里</div>
    </Dialog>
    <Dialog
      open={del}
      onOpenChange={setDel}
      title="删除这个作品？"
      description="删除后不能恢复。"
      footer={
        <>
          <Button size="lg" onClick={() => setDel(false)}>取消</Button>
          <Button size="lg" variant="danger" onClick={() => { setDel(false); setEdit(false); }}>删除</Button>
        </>
      }
    />
  </>
);
}
`}),`
`,(0,o.jsx)(t.h2,{id:`参数`,children:`参数`}),`
`,(0,o.jsx)(t.h3,{id:`dialog-1`,children:`Dialog`}),`
`,(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:`属性`}),(0,o.jsx)(t.th,{children:`类型`}),(0,o.jsx)(t.th,{children:`默认`}),(0,o.jsx)(t.th,{children:`说明`})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`open`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:`—`}),(0,o.jsxs)(t.td,{children:[`打开。传了就是受控，在 `,(0,o.jsx)(t.code,{children:`onOpenChange`}),` 里改；不想自己管用 `,(0,o.jsx)(t.code,{children:`defaultOpen`})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`defaultOpen`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`false`})}),(0,o.jsx)(t.td,{children:`非受控时一开始是否打开`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`onOpenChange`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,o.jsx)(t.td,{children:`—`}),(0,o.jsxs)(t.td,{children:[`按 Esc、点遮罩、点关闭按钮时传 `,(0,o.jsx)(t.code,{children:`false`}),`；底栏按钮自己调 `,(0,o.jsx)(t.code,{children:`setOpen(false)`})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`size`})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:`"s"`}),` `,(0,o.jsx)(t.code,{children:`"m"`}),` `,(0,o.jsx)(t.code,{children:`"l"`}),` `,(0,o.jsx)(t.code,{children:`"xl"`}),` `,(0,o.jsx)(t.code,{children:`"full"`})]}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`"s"`})}),(0,o.jsx)(t.td,{children:`宽 400 / 720 / 1024 / 1200 / 100vw，结构、间距一样。全屏待定，只定了宽度`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`title`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`ReactNode`})}),(0,o.jsx)(t.td,{children:`—`}),(0,o.jsx)(t.td,{children:`标题，16 / 24 粗。不传就没有标题栏，关闭按钮也跟着没有`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`showClose`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`true`})}),(0,o.jsx)(t.td,{children:`标题栏里的关闭按钮，IconButton 32 · 文字类型`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`description`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`ReactNode`})}),(0,o.jsx)(t.td,{children:`—`}),(0,o.jsx)(t.td,{children:`描述，14 / 22 secondary，和标题栏间距 8`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`children`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`ReactNode`})}),(0,o.jsx)(t.td,{children:`—`}),(0,o.jsx)(t.td,{children:`内容区，放什么都行`})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`footer`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`ReactNode`})}),(0,o.jsx)(t.td,{children:`—`}),(0,o.jsxs)(t.td,{children:[`底栏，靠右，间距 8。放大号 Button：取消次要、确认主要，删除确认用 `,(0,o.jsx)(t.code,{children:`danger`}),`；只有一个按钮时去掉取消`]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`closeOnMaskClick`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`true`})}),(0,o.jsxs)(t.td,{children:[`点遮罩关闭。有表单或没保存内容的写 `,(0,o.jsx)(t.code,{children:`false`})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`closeOnEsc`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`boolean`})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:`true`})}),(0,o.jsx)(t.td,{children:`按 Esc 关闭。二级弹窗开着时先关最上面的`})]})]})]}),`
`,(0,o.jsxs)(t.p,{children:[`内边距 24（`,(0,o.jsx)(t.code,{children:`--spacing-24`}),`），区块间距 16（`,(0,o.jsx)(t.code,{children:`--spacing-16`}),`），圆角 16（`,(0,o.jsx)(t.code,{children:`--border-radius-16`}),`），底色 `,(0,o.jsx)(t.code,{children:`--color-bg-fill-surface`}),`，不加描边和阴影。遮罩 `,(0,o.jsx)(t.code,{children:`--color-bg-fill-mask`}),`（黑 60%），不模糊。打开期间 `,(0,o.jsx)(t.code,{children:`body`}),` 不能滚动（`,(0,o.jsx)(t.code,{children:`overflow: hidden`}),`，滚动条那一条宽度用 `,(0,o.jsx)(t.code,{children:`padding-right`}),` 补上，页面不跳），关闭、退出动画放完后恢复；多层弹窗最后一个关掉才恢复。打开 300ms 淡入、从 96% 放大，关闭 200ms 淡出。`]}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:`className`}),`、`,(0,o.jsx)(t.code,{children:`ref`}),` 和其余原生 `,(0,o.jsx)(t.code,{children:`<div>`}),` 属性（`,(0,o.jsx)(t.code,{children:`style`}),`、`,(0,o.jsx)(t.code,{children:`data-*`}),`、`,(0,o.jsx)(t.code,{children:`aria-*`}),`）落在弹窗本体上。`]}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:`DialogPanel`}),`：只有盒子，没有遮罩和开关，属性同上，没有 `,(0,o.jsx)(t.code,{children:`open`}),` 这几个。文档里摆静态示意用，项目里用 `,(0,o.jsx)(t.code,{children:`Dialog`}),`。`]})]})}function f(e={}){let{wrapper:t}=e.components||{};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}export{f as default};