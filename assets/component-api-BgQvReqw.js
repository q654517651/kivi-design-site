import{Mt as e}from"./index-Brl-UwoM.js";import{r as t}from"./shell-Cf4kPElH.js";var n=e();function r(e){let r={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{eyebrow:`开始`,title:`组件写法`,lead:`组件库 src/kivi/ 怎么写。照 HeroUI、Radix 这类成熟组件库的通行做法，新写、改动都按这页来，npm run check 会查。`}),`
`,(0,n.jsx)(r.h2,{id:`文件`,children:`文件`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`一个 Figma 页一个文件夹：一个组件一个 `,(0,n.jsx)(r.code,{children:`.tsx`}),`，这一页一个 `,(0,n.jsx)(r.code,{children:`.css`}),`，`,(0,n.jsx)(r.code,{children:`index.ts`}),` 导出组件和类型。`]}),`
`,(0,n.jsxs)(r.li,{children:[`公用逻辑放 `,(0,n.jsx)(r.code,{children:`hooks/`}),`，组件里不再各写一份。`,(0,n.jsx)(r.code,{children:`hooks/`}),` 不从入口导出。`]}),`
`,(0,n.jsx)(r.li,{children:`组件名就是 Figma 组件名。`}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`组件`,children:`组件`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-tsx`,children:`export type FooSize = 'sm' | 'lg';

export interface FooProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** 尺寸：小 / 大，默认小 */
  size?: FooSize;
  /** 当前值。传了就是受控 */
  value?: string;
  /** 非受控时的初始值 */
  defaultValue?: string;
  /** 值变了，参数是新的值 */
  onChange?: (value: string) => void;
}

/** 一句话说它是什么。Figma「某页」Foo */
export const Foo = forwardRef<HTMLDivElement, FooProps>(function Foo(
  { size = 'sm', value, defaultValue = '', onChange, className, onKeyDown, ...rest },
  ref,
) {
  const [current, setCurrent] = useControllable(value, defaultValue, onChange);
  return (
    <div
      ref={ref}
      className={cx('kv-foo', \`kv-foo--\${size}\`, className)}
      data-filled={current ? '' : undefined}
      onKeyDown={composeHandlers(onKeyDown, (e) => { /* 组件自己的 */ })}
      {...rest}
    />
  );
});
Foo.displayName = 'Foo';
`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`用 `,(0,n.jsx)(r.code,{children:`forwardRef`}),`，ref 给根元素；输入类给里面的 `,(0,n.jsx)(r.code,{children:`<input>`}),`、`,(0,n.jsx)(r.code,{children:`<textarea>`}),`。组件自己也要用根元素时，用 `,(0,n.jsx)(r.code,{children:`useMergedRef`}),` 合并。`]}),`
`,(0,n.jsxs)(r.li,{children:[`设 `,(0,n.jsx)(r.code,{children:`displayName`}),`，和组件名一样。`]}),`
`,(0,n.jsxs)(r.li,{children:[`Props 继承根元素的原生属性，和自己的属性重名的用 `,(0,n.jsx)(r.code,{children:`Omit`}),` 去掉。`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`className`}),` 用 `,(0,n.jsx)(r.code,{children:`cx`}),` 拼在最后；`,(0,n.jsx)(r.code,{children:`style`}),` 合并，不覆盖；其余属性 `,(0,n.jsx)(r.code,{children:`...rest`}),` 放在根元素最后。`]}),`
`,(0,n.jsxs)(r.li,{children:[`组件自己要监听的事件（`,(0,n.jsx)(r.code,{children:`onKeyDown`}),`、`,(0,n.jsx)(r.code,{children:`onPointerEnter`}),` 这类），从 props 里取出来，用 `,(0,n.jsx)(r.code,{children:`composeHandlers`}),` 和外面传的合并，不能被 `,(0,n.jsx)(r.code,{children:`...rest`}),` 冲掉，也不能吞掉外面的。`]}),`
`,(0,n.jsx)(r.li,{children:`属性用英文，和 Figma 属性一一对应，带中文注释，写默认值。`}),`
`,(0,n.jsxs)(r.li,{children:[`导出组件、`,(0,n.jsx)(r.code,{children:`FooProps`}),` 和可选值的类型（`,(0,n.jsx)(r.code,{children:`FooSize`}),`、`,(0,n.jsx)(r.code,{children:`FooVariant`}),`）。`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`状态`,children:`状态`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`外面可能要控制的状态，成套给三个：`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`状态`}),(0,n.jsx)(r.th,{children:`属性`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`值`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`value`}),` / `,(0,n.jsx)(r.code,{children:`defaultValue`}),` / `,(0,n.jsx)(r.code,{children:`onChange(value)`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`勾选、开关`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`checked`}),` / `,(0,n.jsx)(r.code,{children:`defaultChecked`}),` / `,(0,n.jsx)(r.code,{children:`onChange(checked)`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`弹出`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`open`}),` / `,(0,n.jsx)(r.code,{children:`defaultOpen`}),` / `,(0,n.jsx)(r.code,{children:`onOpenChange(open)`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`展开内容`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`expanded`}),` / `,(0,n.jsx)(r.code,{children:`defaultExpanded`}),` / `,(0,n.jsx)(r.code,{children:`onExpandedChange(expanded)`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`其他`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`x`}),` / `,(0,n.jsx)(r.code,{children:`defaultX`}),` / `,(0,n.jsx)(r.code,{children:`onXChange(x)`})]})]})]})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[`一律用 `,(0,n.jsx)(r.code,{children:`useControllable`}),` 实现，不自己写 `,(0,n.jsx)(r.code,{children:`useState`}),` 再判断受控。`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`onChange`}),` 直接给新的值，不给事件对象，所以要 `,(0,n.jsx)(r.code,{children:`Omit`}),` 掉原生的 `,(0,n.jsx)(r.code,{children:`onChange`}),`。`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[`事件名 `,(0,n.jsx)(r.code,{children:`on`}),` 加动作：`,(0,n.jsx)(r.code,{children:`onRemove`}),`、`,(0,n.jsx)(r.code,{children:`onPreview`}),`；值变了是 `,(0,n.jsx)(r.code,{children:`onXxxChange`}),`。`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`状态写在元素上，CSS 按它选：`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`先用原生属性和 `,(0,n.jsx)(r.code,{children:`aria-*`}),`：`,(0,n.jsx)(r.code,{children:`disabled`}),`、`,(0,n.jsx)(r.code,{children:`aria-pressed`}),`、`,(0,n.jsx)(r.code,{children:`aria-expanded`}),`、`,(0,n.jsx)(r.code,{children:`aria-selected`}),`、`,(0,n.jsx)(r.code,{children:`aria-checked`}),`、`,(0,n.jsx)(r.code,{children:`aria-current`}),`。`]}),`
`,(0,n.jsxs)(r.li,{children:[`没有对应的，用 `,(0,n.jsx)(r.code,{children:`data-*`}),`：有就是 `,(0,n.jsx)(r.code,{children:`data-playing=""`}),`，没有就不写；几种状态之间切换用 `,(0,n.jsx)(r.code,{children:`data-state="open"`}),`。`]}),`
`,(0,n.jsxs)(r.li,{children:[`不用 `,(0,n.jsx)(r.code,{children:`is-*`}),` 类名。唯一例外是 `,(0,n.jsx)(r.code,{children:`is-hover`}),`、`,(0,n.jsx)(r.code,{children:`is-active`}),`、`,(0,n.jsx)(r.code,{children:`is-focus`}),`：只给文档摆静态的悬停、按下、聚焦，写在 `,(0,n.jsx)(r.code,{children:`:where(:hover, .is-hover)`}),` 里；网站复制代码时会去掉，项目里不写。`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`样式`,children:`样式`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`类名：组件 `,(0,n.jsx)(r.code,{children:`kv-组件名`}),`，修饰 `,(0,n.jsx)(r.code,{children:`kv-组件名--尺寸`}),`，部件 `,(0,n.jsx)(r.code,{children:`kv-组件名__部件`}),`。部件类名也是对外的接口，前端改样式靠它。`]}),`
`,(0,n.jsxs)(r.li,{children:[`颜色、间距、圆角、字号、时长、缓动只用 `,(0,n.jsx)(r.code,{children:`tokens.css`}),` 的变量。要透明度的用 `,(0,n.jsx)(r.code,{children:`color-mix(in srgb, var(--变量) 30%, transparent)`}),`。Figma 没有变量的值直接写数字，同一行写注释「Figma 没变量」。`]}),`
`,(0,n.jsxs)(r.li,{children:[`遮罩（mask）只看透明度，用 `,(0,n.jsx)(r.code,{children:`black`}),`、`,(0,n.jsx)(r.code,{children:`transparent`}),`。`]}),`
`,(0,n.jsx)(r.li,{children:`动效用 tokens 里的缓动，不用匀速；只有循环动画例外。`}),`
`,(0,n.jsxs)(r.li,{children:[`浮层挂到 `,(0,n.jsx)(r.code,{children:`body`}),` 上（`,(0,n.jsx)(r.code,{children:`createPortal`}),`），`,(0,n.jsx)(r.code,{children:`usePresence`}),` 管出现消失，`,(0,n.jsx)(r.code,{children:`useFloating`}),` 定位。`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`可访问性`,children:`可访问性`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`只有图标的按钮必须传 `,(0,n.jsx)(r.code,{children:`label`}),`。`]}),`
`,(0,n.jsxs)(r.li,{children:[`能点的用 `,(0,n.jsx)(r.code,{children:`<button>`}),`；自己做的控件给 `,(0,n.jsx)(r.code,{children:`role`}),` 和键盘：滑块方向键、菜单上下键和 Esc、弹窗 Esc 关闭。`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:`公用逻辑-hooks`,children:`公用逻辑 hooks/`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`名字`}),(0,n.jsx)(r.th,{children:`做什么`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useControllable`})}),(0,n.jsx)(r.td,{children:`受控、非受控二合一`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`usePresence`})}),(0,n.jsx)(r.td,{children:`关的时候先播消失动画再卸掉`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useFloating`})}),(0,n.jsxs)(r.td,{children:[`浮层跟着锚点定位，放不下翻到另一边；滚动、窗口变化、锚点或浮层尺寸变了（ResizeObserver）都重新算。锚点用 `,(0,n.jsx)(r.code,{children:`rectOf(元素)`}),` 取，才会盯它的尺寸`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`usePointerDrag`})}),(0,n.jsx)(r.td,{children:`拖动条：按下跳到那里、拖着走，横竖都行`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useHoverIntent`})}),(0,n.jsx)(r.td,{children:`离开后等一会儿才算离开，鼠标挪到浮层的路上不断`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useMergedRef`})}),(0,n.jsx)(r.td,{children:`合并组件自己的 ref 和外面传的 ref`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`composeHandlers`})}),(0,n.jsx)(r.td,{children:`合并组件自己的事件和外面传的事件`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`exclusivePlayback`})}),(0,n.jsx)(r.td,{children:`同一时间只播一个视频或音频`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`useScrollLock`})}),(0,n.jsx)(r.td,{children:`锁背景滚动：body 不能滚，补滚动条宽度防跳动，多层弹窗最后一个关掉才恢复`})]})]})]}),`
`,(0,n.jsx)(r.h2,{id:`检查`,children:`检查`}),`
`,(0,n.jsxs)(r.p,{children:[`在 `,(0,n.jsx)(r.code,{children:`site/`}),` 下跑 `,(0,n.jsx)(r.code,{children:`npm run check`}),`：类型检查，再查组件有没有 `,(0,n.jsx)(r.code,{children:`forwardRef`}),`、`,(0,n.jsx)(r.code,{children:`displayName`}),`、`,(0,n.jsx)(r.code,{children:`...rest`}),`，有没有 `,(0,n.jsx)(r.code,{children:`is-*`}),` 类名，CSS 里有没有写死的颜色。`]})]})}function i(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};