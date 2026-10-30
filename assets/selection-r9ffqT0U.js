import{Mt as e,ct as t,lt as n,ut as r}from"./index-Brl-UwoM.js";import{a as i,r as a,t as o}from"./shell-Cf4kPElH.js";var s=e(),c={hover:`is-hover`};function l({css:e}){return(0,s.jsx)(`style`,{children:e})}function u(){return(0,s.jsx)(o,{controls:[{key:`on`,label:`开关`,type:`segment`,value:`on`,options:[[`on`,`开`],[`off`,`关`]]},{key:`state`,label:`状态`,type:`segment`,value:`default`,options:[[`default`,`默认`],[`disabled`,`禁用`]]}],render:e=>(0,s.jsx)(t,{"aria-label":`生成音频`,defaultChecked:e.on===`on`,disabled:e.state===`disabled`||void 0},e.on)})}var d=Array.from({length:11},(e,t)=>({value:t*10,label:t%5==0?String(t*10):void 0}));function f(){return(0,s.jsxs)(`div`,{className:`sel-pg-slider`,children:[(0,s.jsx)(l,{css:`.sel-pg-slider .shell-pg-stage .kv-slider { width: 240px; }`}),(0,s.jsx)(o,{controls:[{key:`value`,label:`进度`,type:`segment`,value:`50`,options:[[`0`,`0`],[`25`,`25`],[`50`,`50`],[`75`,`75`],[`100`,`100`]]},{key:`marks`,label:`刻度`,type:`toggle`,value:!0},{key:`state`,label:`状态`,type:`segment`,value:`default`,options:[[`default`,`默认`],[`disabled`,`禁用`]]}],render:e=>(0,s.jsx)(n,{"aria-label":`时长`,defaultValue:Number(e.value),marks:e.marks?d:void 0,disabled:e.state===`disabled`||void 0},e.value)})]})}var p={no:!1,yes:!0,part:`mixed`};function m(){return(0,s.jsx)(o,{controls:[{key:`shape`,label:`形状`,type:`segment`,value:`square`,options:[[`square`,`方形`],[`round`,`圆形`]]},{key:`checked`,label:`选中`,type:`segment`,value:`yes`,options:[[`no`,`否`],[`yes`,`是`],[`part`,`部分`]]},{key:`state`,label:`状态`,type:`segment`,value:`default`,options:[[`default`,`默认`],[`hover`,`悬停`],[`disabled`,`禁用`]]},{key:`label`,label:`显示文字`,type:`toggle`,value:!0},{key:`text`,label:`文字`,type:`text`,value:`选项`}],rules:e=>e.label?{}:{text:!0},media:e=>e.shape===`round`,render:e=>(0,s.jsx)(r,{shape:e.shape,defaultChecked:p[e.checked],className:c[e.state],disabled:e.state===`disabled`||void 0,"aria-label":e.label?void 0:`选项`,children:e.label?e.text:void 0},e.checked)})}function h(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{eyebrow:`通用组件`,title:`选择控件`,lead:`开关、滑块、勾选框：点一下、拖一下就是「选一个值」，键盘也能用。`,figma:[`选择控件`,`164:627`],status:`草稿 0.1.0`,code:`kivi/selection`}),`
`,(0,s.jsx)(t.h2,{id:`switch`,children:`Switch`}),`
`,(0,s.jsx)(u,{}),`
`,(0,s.jsx)(t.h2,{id:`slider`,children:`Slider`}),`
`,(0,s.jsx)(f,{}),`
`,(0,s.jsx)(t.h3,{id:`时长刻度滑块--数字输入框`,children:`时长：刻度滑块 + 数字输入框`}),`
`,(0,s.jsx)(i,{code:`
() => {
const [sec, setSec] = useState(12);
const [text, setText] = useState('12');
const fromSlider = (n) => { setSec(n); setText(String(n)); };
const fromInput = (v) => {
  setText(v);
  if (v !== '') setSec(Math.min(15, Math.max(1, Number(v))));
};
return (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 320 }}>
    <Slider aria-label="时长" min={1} max={15} value={sec} onChange={fromSlider} marks={[1, 5, 10, 15].map((v) => ({ value: v, label: String(v) }))} />
    <NumberInput aria-label="时长（秒）" unit="秒" value={text} onChange={fromInput} onBlur={() => setText(String(sec))} />
  </div>
);
}
`}),`
`,(0,s.jsx)(t.h2,{id:`checkbox`,children:`Checkbox`}),`
`,(0,s.jsx)(m,{}),`
`,(0,s.jsx)(t.h3,{id:`列表全选`,children:`列表全选`}),`
`,(0,s.jsx)(i,{code:`
() => {
const [items, setItems] = useState([true, false, true]);
const count = items.filter(Boolean).length;
const all = count === 0 ? false : count === items.length ? true : 'mixed';
return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
    <Checkbox checked={all} onChange={(on) => setItems(items.map(() => on))}>全选</Checkbox>
    {items.map((on, i) => (
      <Checkbox key={i} checked={on} onChange={(v) => setItems(items.map((x, j) => (j === i ? v : x)))}>
        {'图片 ' + (i + 1)}
      </Checkbox>
    ))}
  </div>
);
}
`}),`
`,(0,s.jsx)(t.h3,{id:`图片多选`,children:`图片多选`}),`
`,(0,s.jsx)(i,{code:`
() => {
const names = ['ip-kiwi-pile', 'ip-peek', 'kiwi-glass'];
const [picked, setPicked] = useState([true, false, true]);
return (
  <div style={{ display: 'flex', gap: 4 }}>
    {names.map((name, i) => (
      <div
        key={name}
        style={{ position: 'relative', width: 120, height: 120, borderRadius: 8, background: 'url(./placeholders/' + name + '-1x1.webp) center / cover' }}
      >
        <Checkbox
          shape="round"
          aria-label={'选择图片 ' + (i + 1)}
          checked={picked[i]}
          onChange={(v) => setPicked(picked.map((x, j) => (j === i ? v : x)))}
          style={{ position: 'absolute', top: 8, right: 8 }}
        />
      </div>
    ))}
  </div>
);
}
`}),`
`,(0,s.jsx)(t.h2,{id:`参数`,children:`参数`}),`
`,(0,s.jsx)(t.h3,{id:`switch-1`,children:`Switch`}),`
`,(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:`属性`}),(0,s.jsx)(t.th,{children:`类型`}),(0,s.jsx)(t.th,{children:`默认`}),(0,s.jsx)(t.th,{children:`说明`})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`checked`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsxs)(t.td,{children:[`开 / 关。传了就是受控，要自己在 `,(0,s.jsx)(t.code,{children:`onChange`}),` 里更新。36 × 20，圆角 `,(0,s.jsx)(t.code,{children:`--border-radius-round`}),`；开 `,(0,s.jsx)(t.code,{children:`--color-brand-solid`}),`，关 `,(0,s.jsx)(t.code,{children:`--color-bg-fill-container-light-1-pressed`}),`；把手白色圆形 16，四周留 2`]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`defaultChecked`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`false`})}),(0,s.jsx)(t.td,{children:`非受控时的初始值`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`onChange`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`(checked: boolean) => void`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsx)(t.td,{children:`点一下或按空格、回车时触发，参数是切换后的值`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`disabled`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`false`})}),(0,s.jsxs)(t.td,{children:[`禁用：整体透明度 30%（`,(0,s.jsx)(t.code,{children:`--opacity-30`}),`），开、关都一样。开关没有悬停状态`]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`aria-label`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`string`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsx)(t.td,{children:`旁边没有文字时必须写，说明它控制什么`})]})]})]}),`
`,(0,s.jsxs)(t.p,{children:[`其余原生 `,(0,s.jsx)(t.code,{children:`<button>`}),` 属性都能传。`]}),`
`,(0,s.jsx)(t.h3,{id:`slider-1`,children:`Slider`}),`
`,(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:`属性`}),(0,s.jsx)(t.th,{children:`类型`}),(0,s.jsx)(t.th,{children:`默认`}),(0,s.jsx)(t.th,{children:`说明`})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`value`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`number`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsxs)(t.td,{children:[`当前值。传了就是受控，要自己在 `,(0,s.jsx)(t.code,{children:`onChange`}),` 里更新。轨道高 20、圆角 4、`,(0,s.jsx)(t.code,{children:`--color-bg-fill-container-light-1`}),`；已选 `,(0,s.jsx)(t.code,{children:`--color-bg-fill-container-light-1-hover`}),`；把手 8 × 20 白条，`,(0,s.jsx)(t.code,{children:`--color-text-fill-primary`}),`；键盘聚焦在轨道外画 1.5 描边 `,(0,s.jsx)(t.code,{children:`--color-border-strong`}),`。原来的绿色细滑块不用了`]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`defaultValue`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`number`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`min`})}),(0,s.jsx)(t.td,{children:`非受控时的初始值`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`onChange`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`(value: number) => void`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsx)(t.td,{children:`拖动、点轨道、按方向键时触发，参数是新的值`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`min`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`number`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`0`})}),(0,s.jsx)(t.td,{children:`最小值`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`max`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`number`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`100`})}),(0,s.jsx)(t.td,{children:`最大值`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`step`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`number`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`1`})}),(0,s.jsx)(t.td,{children:`步长。方向键一次一步，PageUp / PageDown 一次十步，Home / End 到头`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`marks`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`{ value, label? }[]`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsxs)(t.td,{children:[`刻度：轨道上 1 × 6 的刻度线（白 20%），带 `,(0,s.jsx)(t.code,{children:`label`}),` 的在轨道下 4 写数字（22 高，12 号白 50%）；当前值对上的数字底白 8%、字变白`]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`disabled`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`false`})}),(0,s.jsx)(t.td,{children:`禁用：整体透明度 30%，不能拖`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`aria-label`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`string`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsx)(t.td,{children:`没有文字，必须写`})]})]})]}),`
`,(0,s.jsxs)(t.p,{children:[`宽度拉伸，轨道跟着变长。其余原生 `,(0,s.jsx)(t.code,{children:`<div>`}),` 属性都能传。`]}),`
`,(0,s.jsx)(t.h3,{id:`checkbox-1`,children:`Checkbox`}),`
`,(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:`属性`}),(0,s.jsx)(t.th,{children:`类型`}),(0,s.jsx)(t.th,{children:`默认`}),(0,s.jsx)(t.th,{children:`说明`})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`shape`})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:`"square"`}),` `,(0,s.jsx)(t.code,{children:`"round"`})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`"square"`})}),(0,s.jsxs)(t.td,{children:[`方形 / 圆形。方形用在列表和表单，圆形用在图片多选。方框 16，圆角 4（`,(0,s.jsx)(t.code,{children:`--border-radius-4`}),`）/ 999`]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`checked`})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:`boolean`}),` `,(0,s.jsx)(t.code,{children:`"mixed"`})]}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsxs)(t.td,{children:[`否 / 是 / 部分。传了就是受控，要自己在 `,(0,s.jsx)(t.code,{children:`onChange`}),` 里更新。「部分」只给全选框用。没选：黑 40% 底 + 1px 白 50% 描边；是、部分：`,(0,s.jsx)(t.code,{children:`--color-brand-solid`}),` 底，悬停 `,(0,s.jsx)(t.code,{children:`--color-brand-hover`})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`defaultChecked`})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:`boolean`}),` `,(0,s.jsx)(t.code,{children:`"mixed"`})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`false`})}),(0,s.jsx)(t.td,{children:`非受控时的初始值`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`onChange`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`(checked: boolean) => void`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsxs)(t.td,{children:[`点一下或按空格时触发，参数是点完的值；「部分」点完变成 `,(0,s.jsx)(t.code,{children:`true`})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`disabled`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`boolean`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`false`})}),(0,s.jsx)(t.td,{children:`禁用：整体透明度 30%，方框和文字一起`})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`children`})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:`ReactNode`})}),(0,s.jsx)(t.td,{children:`—`}),(0,s.jsxs)(t.td,{children:[`文字，13 号常规，和方框间距 8。圆形放在图片上时不带文字，要写 `,(0,s.jsx)(t.code,{children:`aria-label`})]})]})]})]}),`
`,(0,s.jsxs)(t.p,{children:[`其余原生 `,(0,s.jsx)(t.code,{children:`<button>`}),` 属性都能传。`]})]})}function g(e={}){let{wrapper:t}=e.components||{};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}export{g as default};