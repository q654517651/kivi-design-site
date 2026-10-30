import{Ct as e,Et as t,Mt as n,St as r,bt as i,dt as a,ft as o,mt as s,pt as c,wt as l,xt as u,yt as d}from"./index-Brl-UwoM.js";import{a as f,r as p,t as m}from"./shell-Cf4kPElH.js";var h=n(),g={hover:`is-hover`},_=`./placeholders/kiwi-light-1x1.webp`;function v(){return(0,h.jsx)(m,{controls:[{key:`type`,label:`类型`,type:`segment`,value:`simple`,options:[[`simple`,`简单`],[`desc`,`说明`]]},{key:`text`,label:`文字`,type:`text`,value:`提示文字`},{key:`title`,label:`标题`,type:`text`,value:`提示标题`},{key:`shortcut`,label:`显示快捷键`,type:`toggle`,value:!1},{key:`shortcutText`,label:`快捷键`,type:`text`,value:`⌘Z`}],rules:e=>({...e.type===`desc`?{shortcut:!0,shortcutText:!0}:{title:!0},...e.type===`simple`&&!e.shortcut?{shortcutText:!0}:{}}),render:e=>e.type===`desc`?(0,h.jsx)(l,{variant:`desc`,title:e.title,content:e.text}):(0,h.jsx)(l,{content:e.text,shortcut:e.shortcut?e.shortcutText:void 0})})}function y(t){let n=t.type===`danger`,a=t.state===`selected`,o=t.right===`check`;return(0,h.jsxs)(e,{width:Number(t.width),role:a&&!o?`listbox`:void 0,children:[t.label&&(0,h.jsx)(u,{children:`分组标题`}),(0,h.jsx)(r,{variant:n?`danger`:void 0,icon:t.left===`icon`?n?`Delete`:`Copy`:void 0,thumb:t.left===`thumb`?(0,h.jsx)(s,{size:24,type:`image`,src:_}):void 0,shortcut:t.right===`shortcut`?t.shortcutText:void 0,submenu:t.right===`submenu`||void 0,selected:a?!0:void 0,checked:o?!0:void 0,disabled:t.state===`disabled`||void 0,className:g[t.state],children:t.text}),t.divider&&(0,h.jsx)(i,{}),t.divider&&(0,h.jsx)(r,{icon:`Delete`,variant:`danger`,children:`删除`})]})}function b(){return(0,h.jsx)(m,{controls:[{key:`type`,label:`类型`,type:`segment`,value:`normal`,options:[[`normal`,`普通`],[`danger`,`危险`]]},{key:`state`,label:`状态`,type:`segment`,value:`default`,options:[[`default`,`默认`],[`hover`,`悬停`],[`disabled`,`禁用`],[`selected`,`选中`]]},{key:`text`,label:`文字`,type:`text`,value:`菜单项`},{key:`left`,label:`左边`,type:`segment`,value:`icon`,options:[[`none`,`无`],[`icon`,`图标`],[`thumb`,`缩略图`]]},{key:`right`,label:`右边`,type:`segment`,value:`none`,options:[[`none`,`无`],[`shortcut`,`快捷键`],[`submenu`,`子菜单箭头`],[`check`,`勾选`]]},{key:`shortcutText`,label:`快捷键`,type:`text`,value:`⌘C`},{key:`width`,label:`宽度`,type:`segment`,value:`200`,options:[[`120`,`120`],[`160`,`160`],[`200`,`200`],[`240`,`240`]]},{key:`label`,label:`分组标题`,type:`toggle`,value:!1},{key:`divider`,label:`分割线`,type:`toggle`,value:!1}],rules:e=>({...e.type===`danger`?{state:[`selected`]}:{},...e.right===`shortcut`?{}:{shortcutText:!0}}),render:y})}function x(n){let a=n.popup===`listbox`,o=n.align===`center`?n.dir:`${n.dir}-${n.align}`;return(0,h.jsx)(d,{placement:o===`bottom-start`?void 0:o,haspopup:a?`listbox`:void 0,matchTriggerWidth:n.match||void 0,closeOnSelect:n.close?void 0:!1,trigger:(0,h.jsx)(t,{rightIcon:`DownArrowSmall`,style:n.match?{width:160}:void 0,children:a?`2K`:`更多操作`}),children:(0,h.jsx)(e,{width:n.match?void 0:a?120:200,role:a?`listbox`:void 0,children:a?[`1K`,`2K`,`4K`].map(e=>(0,h.jsx)(r,{selected:e===`2K`,children:e},e)):[(0,h.jsx)(r,{icon:`Copy`,children:`复制`},`copy`),(0,h.jsx)(r,{icon:`Share`,children:`分享`},`share`),(0,h.jsx)(r,{icon:`Download`,children:`下载`},`download`),(0,h.jsx)(i,{},`divider`),(0,h.jsx)(r,{icon:`Delete`,variant:`danger`,children:`删除`},`delete`)]})})}function S(){return(0,h.jsx)(m,{controls:[{key:`dir`,label:`方向`,type:`segment`,value:`bottom`,options:[[`bottom`,`下方`],[`top`,`上方`]]},{key:`align`,label:`对齐`,type:`segment`,value:`start`,options:[[`start`,`左对齐`],[`center`,`居中`],[`end`,`右对齐`]]},{key:`popup`,label:`弹出的是`,type:`segment`,value:`menu`,options:[[`menu`,`菜单`],[`listbox`,`单选列表`]]},{key:`match`,label:`和触发器一样宽`,type:`toggle`,value:!1},{key:`close`,label:`点菜单项后关闭`,type:`toggle`,value:!0}],render:x})}function C(e){let t=e.type===`list`;return(0,h.jsx)(c,{variant:t?`list`:void 0,icon:t?void 0:`Create`,thumb:t?e.left===`image`?`image`:`icon`:void 0,thumbSrc:t&&e.left===`image`?_:void 0,thumbIcon:t&&e.left===`canvas`?`Canvas`:void 0,selected:e.state===`selected`||void 0,more:e.more||void 0,className:g[e.state],style:{width:216},children:e.text})}function w(){return(0,h.jsx)(m,{controls:[{key:`type`,label:`类型`,type:`segment`,value:`nav`,options:[[`nav`,`导航`],[`list`,`列表`]]},{key:`state`,label:`状态`,type:`segment`,value:`default`,options:[[`default`,`默认`],[`hover`,`悬停`],[`selected`,`选中`]]},{key:`text`,label:`文字`,type:`text`,value:`侧栏项`},{key:`left`,label:`缩略图`,type:`segment`,value:`message`,options:[[`message`,`对话图标`],[`canvas`,`画布图标`],[`image`,`图片`]]},{key:`more`,label:`更多（悬停、选中才显示）`,type:`toggle`,value:!1}],rules:e=>e.type===`nav`?{left:!0}:{},render:C})}function T(){return(0,h.jsx)(m,{controls:[{key:`text`,label:`文字`,type:`text`,value:`对话`},{key:`expanded`,label:`展开`,type:`segment`,value:`open`,options:[[`open`,`展开`],[`closed`,`收起`]]},{key:`showNew`,label:`新建按钮`,type:`toggle`,value:!0}],render:e=>(0,h.jsx)(o,{defaultExpanded:e.expanded===`open`&&void 0,showNew:e.showNew?void 0:!1,style:{width:216},children:e.text},e.expanded)})}function E(){return(0,h.jsx)(m,{controls:[{key:`text`,label:`文字`,type:`text`,value:`更多`}],render:e=>(0,h.jsx)(a,{style:{width:216},children:e.text})})}function D(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{eyebrow:`通用组件`,title:`菜单和提示`,lead:`Tooltip 是悬停说明，Menu 是点开或右键后选操作的菜单，最后是主站侧栏的三个零件。`,figma:[`菜单和提示`,`146:607`],status:`草稿 0.1.0`,code:`kivi/menus-tooltip`}),`
`,(0,h.jsx)(t.h2,{id:`tooltip`,children:`Tooltip`}),`
`,(0,h.jsx)(v,{}),`
`,(0,h.jsx)(t.h3,{id:`图标按钮配-tooltip`,children:`图标按钮配 Tooltip`}),`
`,(0,h.jsx)(f,{code:`
<>
<Tooltip content="下载">
  <IconButton icon="Download" label="下载" />
</Tooltip>
<Tooltip content="复制" shortcut="⌘C">
  <IconButton icon="Copy" label="复制" />
</Tooltip>
<Tooltip variant="desc" title="参数设置" content="调整比例、分辨率和生成数量。">
  <IconButton icon="Configuration" label="参数设置" variant="secondary" />
</Tooltip>
</>
`}),`
`,(0,h.jsx)(t.h2,{id:`menu`,children:`Menu`}),`
`,(0,h.jsx)(b,{}),`
`,(0,h.jsx)(t.h3,{id:`单选当前项用选中`,children:`单选：当前项用选中`}),`
`,(0,h.jsx)(f,{code:`
() => {
const [count, setCount] = useState('x4');
return (
  <Menu role="listbox" width={120}>
    {['x4', 'x2', 'x1'].map((v) => (
      <MenuItem key={v} selected={count === v} onClick={() => setCount(v)}>{v}</MenuItem>
    ))}
  </Menu>
);
}
`}),`
`,(0,h.jsx)(t.h3,{id:`多选勾选`,children:`多选：勾选`}),`
`,(0,h.jsx)(f,{code:`
() => {
const [on, setOn] = useState(['图片', '视频']);
const toggle = (v) => setOn(on.includes(v) ? on.filter((x) => x !== v) : [...on, v]);
return (
  <Menu width={160}>
    {['图片', '视频', '音频', '文字'].map((v) => (
      <MenuItem key={v} checked={on.includes(v)} onClick={() => toggle(v)}>{v}</MenuItem>
    ))}
  </Menu>
);
}
`}),`
`,(0,h.jsx)(t.h2,{id:`dropdown`,children:`Dropdown`}),`
`,(0,h.jsx)(S,{}),`
`,(0,h.jsx)(t.h3,{id:`右键菜单`,children:`右键菜单`}),`
`,(0,h.jsx)(f,{code:`
() => {
const [open, setOpen] = useState(false);
const [point, setPoint] = useState({ x: 0, y: 0 });
return (
  <div
    onContextMenu={(e) => {
      e.preventDefault();
      setPoint({ x: e.clientX, y: e.clientY });
      setOpen(true);
    }}
    style={{ display: 'grid', placeItems: 'center', width: '100%', height: 220, color: 'var(--color-text-fill-tertiary)', fontSize: 'var(--font-size-13)' }}
  >
    在这里点右键
    <Dropdown open={open} onOpenChange={setOpen} anchorPoint={point}>
      <Menu width={220}>
        <MenuItem>上传</MenuItem>
        <MenuItem shortcut="⌘Z">撤销</MenuItem>
        <MenuItem shortcut="⌘V" disabled>粘贴</MenuItem>
      </Menu>
    </Dropdown>
  </div>
);
}
`}),`
`,(0,h.jsx)(t.h2,{id:`sidebaritem`,children:`SidebarItem`}),`
`,(0,h.jsx)(w,{}),`
`,(0,h.jsx)(t.h3,{id:`导航和列表`,children:`导航和列表`}),`
`,(0,h.jsx)(f,{stage:`base`,code:`
() => {
const [current, setCurrent] = useState('poster');
const menu = (
  <Menu width={160}>
    <MenuItem icon="Pin">置顶</MenuItem>
    <MenuItem icon="Share">分享</MenuItem>
    <MenuDivider />
    <MenuItem icon="Delete" variant="danger">删除</MenuItem>
  </Menu>
);
return (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', width: 216 }}>
    <SidebarItem icon="Create">新建</SidebarItem>
    <SidebarItem variant="list" selected={current === 'poster'} onClick={() => setCurrent('poster')} more moreMenu={menu}>
      生成一张猕猴桃海报
    </SidebarItem>
    <SidebarItem
      variant="list"
      thumb="image"
      thumbSrc="./placeholders/ip-kiwi-pile-1x1.webp"
      selected={current === 'summer'}
      onClick={() => setCurrent('summer')}
      more
      moreMenu={menu}
    >
      夏日饮品系列
    </SidebarItem>
  </div>
);
}
`}),`
`,(0,h.jsx)(t.h2,{id:`sidebarlabel`,children:`SidebarLabel`}),`
`,(0,h.jsx)(T,{}),`
`,(0,h.jsx)(t.h3,{id:`点标题展开收起`,children:`点标题展开收起`}),`
`,(0,h.jsx)(f,{stage:`base`,code:`
() => {
const [chat, setChat] = useState(true);
const [canvas, setCanvas] = useState(false);
return (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', width: 216 }}>
    <SidebarLabel expanded={chat} onExpandedChange={setChat} newLabel="新建对话">对话</SidebarLabel>
    {chat && <SidebarItem variant="list">生成一张猕猴桃海报</SidebarItem>}
    <SidebarLabel expanded={canvas} onExpandedChange={setCanvas} newLabel="新建画布">画布</SidebarLabel>
    {canvas && <SidebarItem variant="list" thumbIcon="Canvas">夏日饮品系列</SidebarItem>}
  </div>
);
}
`}),`
`,(0,h.jsx)(t.h2,{id:`sidebarmore`,children:`SidebarMore`}),`
`,(0,h.jsx)(E,{}),`
`,(0,h.jsx)(t.h2,{id:`参数`,children:`参数`}),`
`,(0,h.jsx)(t.h3,{id:`tooltip-1`,children:`Tooltip`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`content`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`提示的文字。简单是那一行，说明是标题下面的说明，12 常规，行高 20`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`variant`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`"simple"`}),` `,(0,h.jsx)(t.code,{children:`"desc"`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"simple"`})}),(0,h.jsxs)(t.td,{children:[`简单 / 说明。不写时有 `,(0,h.jsx)(t.code,{children:`title`}),` 就是说明。简单：高 32，上下 6、左右 12；说明：最宽 240，内边距 12。圆角 8，底 `,(0,h.jsx)(t.code,{children:`--color-bg-fill-popup`}),`，不加阴影`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`title`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`标题，只有说明有。13 粗，和说明间距 4`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`shortcut`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`快捷键，比如 ⌘Z，只有简单有。12，tertiary，和文字间距 8`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactElement`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`触发元素，比如 IconButton。不写就只渲染气泡本身（上面面板里就是）`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`open`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`显示（受控）。不传就悬停、聚焦自己出现`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`defaultOpen`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`默认是否显示`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onOpenChange`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`显示状态变化`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`delay`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`number`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`500`})}),(0,h.jsx)(t.td,{children:`悬停多久后出现，毫秒。出现 150ms ease-out，消失 100ms ease-in；出现在目标下方 8`})]})]})]}),`
`,(0,h.jsx)(t.p,{children:`其余原生 HTML 属性都能传。`}),`
`,(0,h.jsx)(t.h3,{id:`menu-1`,children:`Menu`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`width`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`number`}),` `,(0,h.jsx)(t.code,{children:`string`})]}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`宽 120–240，最高 8 项（324），多了滚动。数字按 px，不写就跟着内容`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`role`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`"menu"`}),` `,(0,h.jsx)(t.code,{children:`"listbox"`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"menu"`})}),(0,h.jsxs)(t.td,{children:[`菜单 / 单选列表。单选列表的每项传 `,(0,h.jsx)(t.code,{children:`selected`})]})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`玻璃浮层：`,(0,h.jsx)(t.code,{children:`--color-bg-fill-glass`}),`，模糊 `,(0,h.jsx)(t.code,{children:`--effect-glass-blur`}),`（32），描边 `,(0,h.jsx)(t.code,{children:`--color-border-subtle`}),`，圆角 12，内边距 4，条目间距 4，不加阴影。其余原生 `,(0,h.jsx)(t.code,{children:`<div>`}),` 属性都能传。`]}),`
`,(0,h.jsx)(t.h3,{id:`menuitem`,children:`MenuItem`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`文字，13 常规，行高 20。高 36，圆角 8，左右内边距 12，元素间距 8`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`variant`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`"default"`}),` `,(0,h.jsx)(t.code,{children:`"danger"`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"default"`})}),(0,h.jsxs)(t.td,{children:[`普通 / 危险。危险没有选中，放菜单最后，用 `,(0,h.jsx)(t.code,{children:`MenuDivider`}),` 隔开`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`icon`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`IconName`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`左图标，16。和 `,(0,h.jsx)(t.code,{children:`thumb`}),` 二选一`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`thumb`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`缩略图：`,(0,h.jsx)(t.code,{children:`<AssetThumb size={24} />`}),`，可以是图片或音频。和 `,(0,h.jsx)(t.code,{children:`icon`}),` 二选一`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`shortcut`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`快捷键文字，比如 ⌘C，12，tertiary。和 `,(0,h.jsx)(t.code,{children:`submenu`}),`、`,(0,h.jsx)(t.code,{children:`checked`}),` 三选一`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`submenu`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsxs)(t.td,{children:[`子菜单箭头 `,(0,h.jsx)(t.code,{children:`RightArrowSmall`}),`，16，tertiary；同时加 `,(0,h.jsx)(t.code,{children:`aria-haspopup="menu"`})]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`selected`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`选中：白 8% 底，不打勾，单选标当前项。自动是 `,(0,h.jsx)(t.code,{children:`role="option"`}),`，外层 Menu 要写 `,(0,h.jsx)(t.code,{children:`role="listbox"`}),`；非当前项传 `,(0,h.jsx)(t.code,{children:`false`})]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`checked`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`勾选：右边 `,(0,h.jsx)(t.code,{children:`CheckSmall`}),`，16，`,(0,h.jsx)(t.code,{children:`--color-brand-solid`}),`，只给多选。自动是 `,(0,h.jsx)(t.code,{children:`role="menuitemradio"`}),`；非当前项传 `,(0,h.jsx)(t.code,{children:`false`})]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`disabled`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`禁用，文字、图标、快捷键 disabled，不响应悬停和点击`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`其余原生 `,(0,h.jsx)(t.code,{children:`<button>`}),` 属性都能传。`]}),`
`,(0,h.jsx)(t.h3,{id:`menulabel`,children:`MenuLabel`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsx)(t.tbody,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`分组标题，不能点。高 28，左右内边距 12，12 常规，tertiary`})]})})]}),`
`,(0,h.jsxs)(t.p,{children:[`其余原生 `,(0,h.jsx)(t.code,{children:`<div>`}),` 属性都能传。`]}),`
`,(0,h.jsx)(t.h3,{id:`menudivider`,children:`MenuDivider`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsx)(t.tbody,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`没有属性。线 1px，`,(0,h.jsx)(t.code,{children:`--color-border-subtle`}),`，上下留白 4，左右缩进 8`]})]})})]}),`
`,(0,h.jsx)(t.h3,{id:`dropdown-1`,children:`Dropdown`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`trigger`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactElement`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`触发器，点它开关菜单，比如 Button、IconButton。自动加 `,(0,h.jsx)(t.code,{children:`aria-haspopup`}),`、`,(0,h.jsx)(t.code,{children:`aria-expanded`}),`、`,(0,h.jsx)(t.code,{children:`aria-controls`}),`。右键菜单不写，用 `,(0,h.jsx)(t.code,{children:`anchorPoint`})]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`弹出的内容，一般是一个 Menu。挂在 body 上；出现 200ms ease-out，消失 150ms ease-in`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`open`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`展开（受控）`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`defaultOpen`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`默认是否展开`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onOpenChange`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`(open: boolean) => void`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`点外面、按 Esc、点菜单项关闭时都以 `,(0,h.jsx)(t.code,{children:`false`}),` 调用`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`placement`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`"bottom-start"`}),` `,(0,h.jsx)(t.code,{children:`"bottom"`}),` `,(0,h.jsx)(t.code,{children:`"bottom-end"`}),` `,(0,h.jsx)(t.code,{children:`"top-start"`}),` `,(0,h.jsx)(t.code,{children:`"top"`}),` `,(0,h.jsx)(t.code,{children:`"top-end"`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"bottom-start"`})}),(0,h.jsx)(t.td,{children:`方向和对齐。放不下翻到另一边，左右不超出屏幕`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`offset`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`number`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`4`})}),(0,h.jsx)(t.td,{children:`离触发器的距离`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`matchTriggerWidth`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`菜单和触发器一样宽，下拉选择的列表用`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`anchorPoint`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`{ x: number; y: number }`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`右键菜单：出现在这个屏幕坐标（`,(0,h.jsx)(t.code,{children:`clientX`}),`、`,(0,h.jsx)(t.code,{children:`clientY`}),`），自己控制 `,(0,h.jsx)(t.code,{children:`open`})]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`closeOnSelect`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`true`})}),(0,h.jsx)(t.td,{children:`点菜单项后关闭。多选菜单要保持展开时关掉`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`haspopup`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`"menu"`}),` `,(0,h.jsx)(t.code,{children:`"listbox"`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"menu"`})}),(0,h.jsxs)(t.td,{children:[`触发器的 `,(0,h.jsx)(t.code,{children:`aria-haspopup`}),`，下拉选择用 `,(0,h.jsx)(t.code,{children:`"listbox"`})]})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`其余原生 `,(0,h.jsx)(t.code,{children:`<span>`}),` 属性都能传。`]}),`
`,(0,h.jsx)(t.h3,{id:`sidebaritem-1`,children:`SidebarItem`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`文字，13 常规，行高 20`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`variant`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`"nav"`}),` `,(0,h.jsx)(t.code,{children:`"list"`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"nav"`})}),(0,h.jsx)(t.td,{children:`导航（新建这类固定入口）/ 列表（对话、画布的历史）。高 36，圆角 8，元素间距 6，左右内边距 12（列表右 8）`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`icon`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`IconName`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`导航的左图标，20`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`thumb`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`"icon"`}),` `,(0,h.jsx)(t.code,{children:`"image"`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"icon"`})}),(0,h.jsx)(t.td,{children:`列表左边的缩略图（AssetThumb 24）：没封面用图标，有封面用图片。不要放裸图标`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`thumbSrc`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`图片地址，`,(0,h.jsx)(t.code,{children:`thumb="image"`}),` 时用`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`thumbIcon`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`IconName`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"Message"`})}),(0,h.jsxs)(t.td,{children:[`缩略图的图标，`,(0,h.jsx)(t.code,{children:`thumb="icon"`}),` 时用。对话 `,(0,h.jsx)(t.code,{children:`Message`}),`，画布 `,(0,h.jsx)(t.code,{children:`Canvas`})]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`selected`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsxs)(t.td,{children:[`选中：底白 12%，自动加 `,(0,h.jsx)(t.code,{children:`aria-current="page"`}),`。同一时间只有一项`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`more`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`右边的「更多」：IconButton 28 轻，悬停和选中时才显示`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`moreLabel`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"更多"`})}),(0,h.jsx)(t.td,{children:`「更多」的说明，读屏用`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onMoreClick`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`(e) => void`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`点「更多」`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`moreMenu`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`点「更多」弹出的菜单，一般是 Menu，由 Dropdown 管开关`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`外层是 `,(0,h.jsx)(t.code,{children:`<div>`}),`（里面还有按钮），其余原生 `,(0,h.jsx)(t.code,{children:`<div>`}),` 属性都能传。`]}),`
`,(0,h.jsx)(t.h3,{id:`sidebarlabel-1`,children:`SidebarLabel`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`分组名，比如「对话」。高 28，12 常规，tertiary`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`expanded`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsxs)(t.td,{children:[`展开（受控）。展开箭头朝下 `,(0,h.jsx)(t.code,{children:`DownArrowSmall`}),`，收起朝右 `,(0,h.jsx)(t.code,{children:`RightArrowSmall`}),`，下面的列表由使用方跟着显示或隐藏`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`defaultExpanded`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`true`})}),(0,h.jsx)(t.td,{children:`默认是否展开（非受控）`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onExpandedChange`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`(expanded: boolean) => void`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`点标题展开或收起`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`showNew`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`boolean`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`true`})}),(0,h.jsxs)(t.td,{children:[`右边的新建按钮：IconButton 28 轻，`,(0,h.jsx)(t.code,{children:`NewChat`}),` 图标，整体透明度 30%（`,(0,h.jsx)(t.code,{children:`--opacity-30`}),`）`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`newLabel`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"新建"`})}),(0,h.jsx)(t.td,{children:`新建按钮的说明，读屏用`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onNew`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`() => void`})}),(0,h.jsx)(t.td,{children:`—`}),(0,h.jsx)(t.td,{children:`点新建`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`其余原生 `,(0,h.jsx)(t.code,{children:`<div>`}),` 属性都能传。`]}),`
`,(0,h.jsx)(t.h3,{id:`sidebarmore-1`,children:`SidebarMore`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`属性`}),(0,h.jsx)(t.th,{children:`类型`}),(0,h.jsx)(t.th,{children:`默认`}),(0,h.jsx)(t.th,{children:`说明`})]})}),(0,h.jsx)(t.tbody,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"更多"`})}),(0,h.jsx)(t.td,{children:`文字，12 常规，tertiary。高 36，左内边距 12`})]})})]}),`
`,(0,h.jsxs)(t.p,{children:[`其余原生 `,(0,h.jsx)(t.code,{children:`<button>`}),` 属性都能传。`]})]})}function O(e={}){let{wrapper:t}=e.components||{};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(D,{...e})}):D(e)}export{O as default};