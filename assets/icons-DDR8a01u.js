import{It as e,Mt as t,Pt as n,i as r,jt as i,zt as a}from"./index-Brl-UwoM.js";import{a as o,i as s,r as c}from"./shell-Cf4kPElH.js";var l=a(e(),1),u=t(),d={LeftArrow:{means:`左、返回、上一个`},RightArrow:{means:`右、下一个、进入`},DownArrow:{means:`下、展开`},LeftArrowSmall:{means:`小箭头、上一页`,note:`图形缩到 18/24`},RightArrowSmall:{means:`小箭头、下一页`,note:`图形缩到 18/24`},DownArrowSmall:{means:`下拉、展开`,note:`下拉选择的箭头；图形缩到 18/24`},UpArrowSmall:{means:`收起`,note:`下拉展开时的箭头；图形缩到 18/24`},FullScreen:{means:`全屏、放大`},Fold:{means:`收起、退出全屏`},StickyOnTop:{means:`置顶`},Switch:{means:`切换、交换`},Add:{means:`添加、新建`},AddSmall:{means:`小加号`,note:`图形缩到 18/24`},Subtract:{means:`减少`},SubtractSmall:{means:`小减号、缩小`,note:`图形缩到 18/24`},Close:{means:`关闭、取消`,note:`弹窗关闭用它`},CloseSmall:{means:`移除、小叉`,note:`标签、输入框里的清除；图形缩到 18/24`},CheckSmall:{means:`勾、选中、完成`,note:`菜单里标当前项；图形缩到 18/24`},More:{means:`更多`},Search:{means:`搜索`},Copy:{means:`复制`},Delete:{means:`删除`},Reset:{means:`重置、刷新、重试`},Previous:{means:`撤销、上一步`},NextStep:{means:`重做、下一步`},Loading:{means:`加载`,note:`1 秒一圈匀速旋转`},Link:{means:`链接`},Pin:{means:`固定`},Share:{means:`分享、外部打开`},Download:{means:`下载、保存`},Upload:{means:`上传`,note:`旧名 upload，改成首字母大写`},ReUpload:{means:`重新上传、替换`},Configuration:{means:`设置、配置、参数`},File:{means:`文件、文档`},Folder:{means:`文件夹`},AddFile:{means:`新建文件`},AddFolder:{means:`新建文件夹`},FileMusic:{means:`音频文件`},MoveTo:{means:`移动到`},Remove:{means:`移出`},Stacking:{means:`堆叠、多选`},Template:{means:`模板`},Pack:{means:`打包、素材包、封装`,note:`lucide/package（10-29 从 box 换）`},Subtitle:{means:`字幕、srt、文本轨`,note:`FileCard 字幕文件（srt）用`,tag:`待确认`},Text:{means:`文本节点`,note:`自绘；不要用于字号设置（用 FontSize）；旧名 text`},ImageGeneration:{means:`图片生成`,note:`自绘`},VideoGeneration:{means:`视频生成`,note:`自绘`},Video:{means:`视频`,note:`自绘`},Music:{means:`音乐、音频`},AIEnhancement:{means:`AI 增强`,note:`自绘`},ImageToImage:{means:`图生图`,note:`自绘`},ImageToText:{means:`图生文`,note:`自绘`},OneClickSameModel:{means:`一键同款`,note:`自绘：两张叠放的卡，前面一张带四角星`},SmartEditing:{means:`智能编辑`,note:`自绘`},LoraModel:{means:`LoRA 模型`,note:`lucide/box`},Skill:{means:`技能`,note:`自绘`},Manual:{means:`手册、说明`,note:`自绘`},Agent:{means:`Agent、智能体、助手`,note:`大号星星只给 Agent 用；其他 AI 功能用「素材 + 小星星」`},OmniReference:{means:`全能参考、多模态参考`},FirstLastFrame:{means:`首尾帧`,note:`胶片只给首尾帧用；「视频」用 Video`},Audio:{means:`音频、声音、音轨`,note:`音频节点用它；音频封面用 Music`},Crop:{means:`裁剪`},Expand:{means:`扩图`,note:`自绘`},HD:{means:`高清、超分`},Rmbg:{means:`抠图、去背景`,note:`自绘`},RemoveEle:{means:`消除、去除`},ImageEditing:{means:`图片编辑`,note:`自绘`},Brush:{means:`画笔`},BrushSize:{means:`笔刷大小`,note:`自绘`},Eraser:{means:`橡皮擦`},Cutting:{means:`剪切`,note:`连线删除按钮也用它；旧名 Cutting1 已合并到这里`},Divide:{means:`分割、拆分`,note:`自绘`},CropLeft:{means:`左侧裁剪`,note:`自绘`},CropRight:{means:`右侧裁剪`,note:`自绘`},VideoEditing:{means:`视频编辑`,note:`自绘`},VideoExtend:{means:`视频延长`,note:`待确认 · 自绘：画框 + 右箭头（像时间轴往右拖）`},VideoLoop:{means:`循环播放`},Connecting:{means:`拼接、连接`,note:`自绘`},EnableConstraint:{means:`关联、锁定`},DisableConstraint:{means:`取消关联`},Play:{means:`播放（实心）`,note:`按旧版加了填充`},Pause:{means:`暂停（实心）`,note:`按旧版加了填充`},PlayLine:{means:`播放（线框）`},VolumeFull:{means:`音量大`,note:`10-29 从实心改成描边`},VolumeHalf:{means:`音量中`,note:`10-29 从实心改成描边`},VolumeOff:{means:`静音`,note:`10-29 从实心改成描边`},VolumeLevel:{means:`音量、音轨`,note:`自绘`},Preview:{means:`预览、显示`},ClosePreview:{means:`关闭预览、隐藏`},Map:{means:`小地图、导航`},FitContent:{means:`适应画布`},ZoomIn:{means:`放大`},ZoomOut:{means:`缩小`},Snap:{means:`吸附`,note:`旧名 Snap1 已合并到这里`},DisableSnap:{means:`关闭吸附`,note:`自绘：Snap 加斜线，斜线两侧留缝`},ShowConnections:{means:`显示连线`,note:`旧名 ShowConnections-1 已合并到这里`},HideConnections:{means:`隐藏连线`},Group:{means:`编组`},UnGroup:{means:`取消编组`},AddToCanvas:{means:`添加到画布`,note:`自绘`},Hand:{means:`抓手、拖动`},UseCanvas:{means:`使用画布`},Canvas:{means:`画布、画布项目、画框`,note:`主站侧栏画布列表用`,tag:`待确认`},Locate:{means:`定位、定位到画布`,note:`画布 Agent 生成结果「定位到画布」用`,tag:`待确认`},H1:{means:`标题 1`},H2:{means:`标题 2`},H3:{means:`标题 3`},TextBold:{means:`加粗`,note:`旧名 TextBlod`},TextItalic:{means:`斜体`},FontSize:{means:`字号设置`,note:`不要用于文本节点（用 Text）`},OrderedList:{means:`有序列表`},UnOrderedList:{means:`无序列表`},DividingLine:{means:`分割线`,note:`自绘；旧名 DivdingLine`},AutoAspect:{means:`自动比例`,note:`自绘`},Square11:{means:`1:1`},Square43:{means:`4:3`,note:`自绘`},Square34:{means:`3:4`,note:`自绘`},Square169:{means:`16:9`,note:`自绘`},Square916:{means:`9:16`,note:`自绘`},Square23:{means:`2:3`,note:`自绘`},Square32:{means:`3:2`,note:`自绘`},Square14:{means:`1:4`,note:`自绘`},Square41:{means:`4:1`,note:`自绘`},Square921:{means:`9:21`,note:`自绘`},OriginalProportions:{means:`原始比例`,note:`自绘`},ThumbsUp:{means:`点赞`},ThumbsUpFill:{means:`已点赞（实心）`},ThumbsDown:{means:`点踩`},ThumbsDownFill:{means:`已点踩（实心）`},Collect:{means:`收藏`},CollectSolid:{means:`已收藏（实心）`},CopyTraceID:{means:`复制 Trace ID`,note:`自绘`},Lightbulb:{means:`思考过程、灵感`,note:`旧名 Light，容易和「亮色模式」混淆，所以改名`},Tool:{means:`工具调用`,note:`旧名 icon，按图形（扳手）改名`},Feedback:{means:`反馈`},Message:{means:`询问、对话、消息`},Send:{means:`发送、提交`,note:`上箭头`},NewChat:{means:`新对话、新建、编辑`,note:`主站侧栏对话、画布分组的新建按钮用；和 Add 区分开`,tag:`待确认`},Home:{means:`首页`},Document:{means:`文档、教程`},Localization:{means:`语言、国际化`},Calendar:{means:`日历、日期`,note:`旧名 calendar`},Create:{means:`创作、生成`,note:`主站侧栏「创作」用`,tag:`待确认`},Explore:{means:`探索、发现`,note:`主站侧栏「探索」用`,tag:`待确认`},AITools:{means:`AI 工具、应用`,note:`主站侧栏「AI工具」用`,tag:`待确认`},Sidebar:{means:`侧栏、收起、展开`,note:`主站侧栏收起 / 展开用`,tag:`待确认`},Kiwi:{means:`猕猴桃、积分、余额、消耗`,note:`主站积分余额、生成按钮消耗用；颜色跟随所在位置，余额处用品牌绿`,tag:`待确认`},Mdoel:{means:`模型 Logo`,note:`名字拼错了，应为 Model；代码里在用，改名前要和后端确认`,tag:`先不改`},Auto:{means:`模型 Logo`},Gemini:{means:`模型 Logo`},Openai:{means:`模型 Logo`},Bytedance:{means:`模型 Logo`},Flux:{means:`模型 Logo`},Vidu:{means:`模型 Logo`},Qwen:{means:`模型 Logo`},Kling:{means:`模型 Logo`},Minimax:{means:`模型 Logo`},Sora:{means:`模型 Logo`},HappyHorse:{means:`模型 Logo`},grok:{means:`模型 Logo`},Logo:{means:`KIVI 字标`,note:`54×24，单独用；字母跟文字色，星星是品牌绿（brand/solid）；缩放时按比例拉；主站侧栏左上角用`,tag:`待确认`}},f={方向:{id:`ic-direction`,desc:`箭头、展开收起、全屏、置顶、切换。`},基础操作:{id:`ic-basic`,desc:`增删改查、撤销重做、上传下载等通用操作。`},文件与资产:{id:`ic-files`,desc:`文件、文件夹、移动、模板、打包等资产管理操作。`},"生成与 AI":{id:`ic-generate`,desc:`文本 / 图片 / 视频 / 音乐生成，以及各类 AI 功能入口。以后新增的生成类图标也放这里。`},图片编辑:{id:`ic-image-edit`,desc:`裁剪、扩图、高清、抠图、消除、画笔、橡皮擦等图片编辑工具。`},视频剪辑:{id:`ic-video-edit`,desc:`视频编辑器里的剪切、分割、裁剪手柄、拼接、循环、比例关联等。`},播放与音量:{id:`ic-playback`,desc:`播放、暂停、音量、预览开关。播放控制按旧版保持实心风格。`},画布与视图:{id:`ic-canvas`,desc:`画布导航、缩放、吸附、连线、编组、抓手等。`},文本格式:{id:`ic-text-format`,desc:`文本节点工具栏里的标题、加粗、斜体、字号、列表、分割线。`},比例:{id:`ic-ratio`,desc:`生成参数里的画面比例。名字里的数字就是比例，比如 Square169 = 16:9。`},对话与反馈:{id:`ic-chat`,desc:`AI 对话里的点赞点踩、收藏、复制 Trace ID、思考过程、工具调用、反馈。`},系统:{id:`ic-system`,desc:`首页、文档、语言、日历，主站侧栏导航（创作、探索、AI 工具、收起侧栏），积分（Kiwi）等全局入口。`},"模型 Logo":{id:`ic-models`,desc:`模型品牌 Logo，保持原样，不按 Lucide 重画。名字来自后端的模型配置，不要改名（Mdoel 拼错了也先不改，改之前要和后端确认）。`},品牌:{id:`ic-brand`,desc:`KIVI 字标等品牌图形。不进 Icon 统一组件，单独用；颜色已绑变量。`}},p=`ic-styles`,m=`
/* 顶部搜索：滚动时一直在，输入后自动跳到图标表 */
.ic-find { position: sticky; top: var(--shell-top); z-index: 4; display: flex; align-items: center; gap: var(--spacing-12); margin-top: var(--spacing-24); padding: var(--spacing-12) 0; background: var(--color-bg-fill-base); }
.ic-find .shell-input { flex: 0 1 360px; }
.ic-find-count { color: var(--color-text-fill-tertiary); font-size: var(--font-size-12); line-height: var(--font-line-height-20); white-space: nowrap; }
#icon-table, .ic-group h3 { scroll-margin-top: 64px; }

/* 表格第一列不换行 */
.doc td:first-child { white-space: nowrap; }
.ic-alias td:nth-child(2), .ic-alias td:nth-child(3), .ic-alias td:nth-child(5) { white-space: nowrap; }

/* 有序步骤 */
.doc ol > li + li { margin-top: var(--spacing-8); }
.doc ol ul { margin: var(--spacing-4) 0 0; }

/* 颜色演示 */
.ic-colors { display: flex; flex-wrap: wrap; gap: var(--spacing-24); }
.ic-color { display: grid; justify-items: center; gap: var(--spacing-8); }
.ic-color small { color: var(--color-text-fill-tertiary); font-size: var(--font-size-12); line-height: var(--font-line-height-20); white-space: nowrap; }
.ic-on-brand { display: grid; place-items: center; width: 40px; height: 40px; border-radius: var(--border-radius-8); background: var(--color-brand-solid); }

/* 图标表 */
.ic-count { margin-left: var(--spacing-6); color: var(--color-text-fill-tertiary); font-size: var(--font-size-13); font-weight: var(--font-weight-regular); }
.ic-table th:first-child, .ic-table td:first-child { width: 88px; }
.ic-table th:nth-child(2), .ic-table td:nth-child(2) { width: 240px; }
.ic-table th:nth-child(3), .ic-table td:nth-child(3) { width: 200px; }
.ic-table td:nth-child(2) { white-space: nowrap; }
.ic-table td:nth-child(4) .shell-tag { margin-right: var(--spacing-6); }
.ic-name {
  padding: 2px var(--spacing-6); border: 0; border-radius: var(--border-radius-4);
  background: var(--color-bg-fill-container-light-1); color: var(--color-text-fill-primary);
  font: inherit; font-family: var(--shell-mono); font-size: var(--font-size-12); line-height: var(--font-line-height-20);
  cursor: pointer;
  transition: background-color var(--motion-duration-100) var(--motion-ease-in-out);
}
.ic-name:hover { background: var(--color-bg-fill-container-light-1-hover); }
.ic-name.is-copied { background: var(--color-brand-subtle); color: var(--color-brand-solid); }
.ic-empty { margin: var(--spacing-24) 0; color: var(--color-text-fill-tertiary); }
`,h=0;function g(){(0,l.useInsertionEffect)(()=>{let e=document.getElementById(p);return e||(e=document.createElement(`style`),e.id=p,document.head.appendChild(e)),e.textContent=m,h+=1,()=>{--h,h<=0&&document.getElementById(p)?.remove()}},[])}var _=``,v=new Set;function y(e){_=e,v.forEach(e=>e())}function b(){return(0,l.useSyncExternalStore)(e=>(v.add(e),()=>{v.delete(e)}),()=>_)}function x(e){return e.toLowerCase().split(/\s+/).filter(Boolean)}function S(e,t){let n=d[e],r=[e,n.means,n.tag??``,n.note??``].join(` `).toLowerCase();return t.every(e=>r.includes(e))}var C=n.reduce((e,t)=>e+t.icons.length,0);function w(){g();let e=b(),t=x(e),r=t.length?n.reduce((e,n)=>e+n.icons.filter(e=>S(e,t)).length,0):C;return(0,l.useEffect)(()=>()=>y(``),[]),(0,u.jsxs)(`div`,{className:`ic-find`,children:[(0,u.jsx)(`input`,{className:`shell-input`,type:`search`,placeholder:`按名字或意思搜索，比如 Close、关闭、箭头`,"aria-label":`搜索图标`,autoComplete:`off`,value:e,onChange:e=>{let t=e.target.value;y(t);let n=document.getElementById(`icon-table`);t&&n&&n.getBoundingClientRect().top>window.innerHeight*.6&&n.scrollIntoView({behavior:`smooth`,block:`start`})}}),(0,u.jsx)(`span`,{className:`ic-find-count`,"aria-live":`polite`,children:t.length?`找到 ${r} 个`:`共 ${C} 个`})]})}function T({name:e}){let[t,n]=(0,l.useState)(!1),i=(0,l.useRef)();return(0,l.useEffect)(()=>()=>window.clearTimeout(i.current),[]),(0,u.jsx)(`button`,{type:`button`,className:t?`ic-name is-copied`:`ic-name`,title:`点击复制名字`,onClick:()=>{r(e).then(()=>{n(!0),window.clearTimeout(i.current),i.current=window.setTimeout(()=>n(!1),1e3)})},children:e})}function E(){g();let e=x(b()),t=n.map(t=>({g:t,rows:t.icons.filter(t=>S(t,e))})).filter(e=>e.rows.length);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`ic-table`,id:`icon-table`,children:t.map(({g:e,rows:t})=>{let n=f[e.name];return(0,u.jsxs)(`section`,{className:`ic-group`,children:[(0,u.jsxs)(`h3`,{id:n?.id,children:[e.name,` `,(0,u.jsx)(`span`,{className:`ic-count`,children:e.icons.length})]}),n&&(0,u.jsx)(`p`,{children:n.desc}),(0,u.jsx)(`div`,{className:`table-wrap`,children:(0,u.jsxs)(`table`,{children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`图标`}),(0,u.jsx)(`th`,{children:`名字`}),(0,u.jsx)(`th`,{children:`意思`}),(0,u.jsx)(`th`,{children:`备注`})]})}),(0,u.jsx)(`tbody`,{children:t.map(e=>{let t=d[e];return(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(i,{name:e,size:24})}),(0,u.jsx)(`td`,{children:(0,u.jsx)(T,{name:e})}),(0,u.jsx)(`td`,{children:t.means}),(0,u.jsxs)(`td`,{children:[t.tag&&(0,u.jsx)(s,{kind:`draft`,children:t.tag}),t.note]})]},e)})})]})})]},e.name)})}),t.length===0&&(0,u.jsx)(`p`,{className:`ic-empty`,children:`没有找到。换个词试试，或者按「怎么加新图标」去加。`})]})}var D=[{label:`primary`,token:`--color-text-fill-primary`},{label:`secondary`,token:`--color-text-fill-secondary`},{label:`tertiary`,token:`--color-text-fill-tertiary`},{label:`disabled`,token:`--color-text-fill-disabled`},{label:`on-brand`,token:`--color-text-fill-on-brand`,onBrand:!0},{label:`brand/solid`,token:`--color-brand-solid`},{label:`danger`,token:`--color-status-danger`}];function O(){return g(),(0,u.jsx)(`figure`,{className:`shell-demo`,children:(0,u.jsx)(`div`,{className:`shell-demo-preview`,children:(0,u.jsx)(`div`,{className:`ic-colors`,children:D.map(e=>{let t=(0,u.jsx)(i,{name:`Add`,size:24});return e.onBrand?(0,u.jsxs)(`div`,{className:`ic-color`,children:[(0,u.jsx)(`span`,{className:`ic-on-brand`,style:{color:`var(${e.token})`},children:t}),(0,u.jsx)(`small`,{children:e.label})]},e.label):(0,u.jsxs)(`div`,{className:`ic-color`,style:{color:`var(${e.token})`},children:[t,(0,u.jsx)(`small`,{children:e.label})]},e.label)})})})})}function k({children:e}){return g(),(0,u.jsx)(`div`,{className:`ic-alias`,children:e})}function A(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{eyebrow:`基础`,title:`图标`,lead:`一套 24×24 的线性图标，全部转轮廓。设计、产品、研发用的是同一套图标、同一个名字。要用图标，先在下面的「图标表」里按意思找。`,figma:[`图标`,`44:2`],status:`草稿 0.1.0`,code:`kivi/icons.ts`}),`
`,(0,u.jsx)(w,{}),`
`,(0,u.jsx)(t.p,{children:`共 13 组 159 个图标，另有品牌 Logo 1 个。`}),`
`,(0,u.jsx)(t.h2,{id:`规格`,children:`规格`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`项`}),(0,u.jsx)(t.th,{children:`规格`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`框和图形`}),(0,u.jsx)(t.td,{children:`组件框 24×24，图形缩到 22，居中，四边各留 1。名字带 Small 的图标，图形缩到 18。`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`线宽`}),(0,u.jsx)(t.td,{children:`1.5`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`形态`}),(0,u.jsx)(t.td,{children:`发布用的是转轮廓、合并后的版本。Figma 里另外留一份能改线宽的描边版，在「_源文件 · 图标描边」页。`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`名字`}),(0,u.jsxs)(t.td,{children:[`英文大驼峰，按意思起，比如 `,(0,u.jsx)(t.code,{children:`Close`}),`、`,(0,u.jsx)(t.code,{children:`OneClickSameModel`}),`。Figma 组件名、字体类名 `,(0,u.jsx)(t.code,{children:`icon-kivi-名字`}),`、代码里 Icon 的 `,(0,u.jsx)(t.code,{children:`name`}),`、`,(0,u.jsx)(t.code,{children:`kivi/icons.ts`}),` 里的键用同一个名字，区分大小写。`]})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`背景和内边距`}),(0,u.jsx)(t.td,{children:`不加。要底色和点击区域，就放进 IconButton。`})]})]})]}),`
`,(0,u.jsx)(t.h3,{id:`尺寸`,children:`尺寸`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`尺寸`}),(0,u.jsx)(t.th,{children:`用在哪`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`16（默认）`}),(0,u.jsx)(t.td,{children:`按钮、菜单、输入框里`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`20`}),(0,u.jsx)(t.td,{children:`工具栏、面板标题、弹窗关闭`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`24`}),(0,u.jsx)(t.td,{children:`大入口、竖向工具栏`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`40 / 64`}),(0,u.jsx)(t.td,{children:`空状态、大入口插图位`})]})]})]}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`尺寸由外层容器决定，图标按比例缩放。不为每个尺寸单独画图。`}),`
`,(0,u.jsx)(t.li,{children:`40 和 64 是整体放大，线条会跟着变粗（40 约 2.5px，64 约 4px），和旧版 iconfont 放大的效果一样。`}),`
`]}),`
`,(0,u.jsx)(o,{code:`
<>
<Icon name="Close" size={16} />
<Icon name="DownArrowSmall" size={16} />
<Icon name="Search" size={20} />
<Icon name="Download" size={24} />
<Icon name="Configuration" size={40} />
<Icon name="More" size={64} />
</>
`}),`
`,(0,u.jsx)(t.h3,{id:`颜色`,children:`颜色`}),`
`,(0,u.jsx)(t.p,{children:`图标是单色的，颜色跟着文字走，用文字颜色变量，不写死颜色。`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`颜色`}),(0,u.jsx)(t.th,{children:`变量`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`primary`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`--color-text-fill-primary`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`secondary`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`--color-text-fill-secondary`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`tertiary`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`--color-text-fill-tertiary`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`disabled`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`--color-text-fill-disabled`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`on-brand`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`--color-text-fill-on-brand`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`brand/solid`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`--color-brand-solid`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`danger`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`--color-status-danger`})})]})]})]}),`
`,(0,u.jsx)(O,{}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`<Icon name="Add" style={{ color: 'var(--color-text-fill-secondary)' }} />
`})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`设计稿里改颜色，就改 Icon 里 shape 图层的填充。先改色再换图标，颜色保留。`}),`
`,(0,u.jsx)(t.li,{children:`唯一带两种颜色的是品牌 Logo（星星是品牌绿），见图标表最后一组。`}),`
`]}),`
`,(0,u.jsx)(t.h3,{id:`一个图标只有一个意思`,children:`一个图标只有一个意思`}),`
`,(0,u.jsx)(t.p,{children:`不要拿意思相近的图标顶替。专用规则：`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Agent`}),`（大号星星）只给 Agent 用；其他 AI 功能用「素材 + 小星星」类的图标。`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`FirstLastFrame`}),`（胶片）只给首尾帧用；「视频」用 Video。`]}),`
`,(0,u.jsxs)(t.li,{children:[`文本节点用 `,(0,u.jsx)(t.strong,{children:`Text`}),`；字号设置用 `,(0,u.jsx)(t.strong,{children:`FontSize`}),`。`]}),`
`,(0,u.jsxs)(t.li,{children:[`思考过程用 `,(0,u.jsx)(t.strong,{children:`Lightbulb`}),`；工具调用用 `,(0,u.jsx)(t.strong,{children:`Tool`}),`。`]}),`
`]}),`
`,(0,u.jsx)(t.h3,{id:`设计稿里怎么放icon-组件`,children:`设计稿里怎么放：Icon 组件`}),`
`,(0,u.jsx)(t.p,{children:`设计稿里统一用 Icon 组件放图标，尺寸和图标都在右侧属性面板里选。`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`属性`}),(0,u.jsx)(t.th,{children:`选项`}),(0,u.jsx)(t.th,{children:`代码`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`尺寸`}),(0,u.jsx)(t.td,{children:`16（默认）/ 20 / 24 / 40 / 64`}),(0,u.jsxs)(t.td,{children:[(0,u.jsx)(t.code,{children:`size={16}`}),` / `,(0,u.jsx)(t.code,{children:`{20}`}),` / `,(0,u.jsx)(t.code,{children:`{24}`}),` / `,(0,u.jsx)(t.code,{children:`{40}`}),` / `,(0,u.jsx)(t.code,{children:`{64}`})]})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`图标`}),(0,u.jsx)(t.td,{children:`图标库里的任意图标。首选列表是全部已转轮廓的图标（159 个，品牌 Logo 不在里面）`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`name="Close"`})})]})]})]}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`默认是空图标，显示虚线方块占位（`,(0,u.jsx)(t.code,{children:`_Placeholder`}),`，不发布）。换成真正的图标后虚线方块就没了。`]}),`
`,(0,u.jsx)(t.li,{children:`需要底色、内边距或点击区域时，用按钮组件把 Icon 包起来，不要做进图标里。`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`画法`,children:`画法`}),`
`,(0,u.jsx)(t.p,{children:`新画的图标，不管是设计师画进 Figma，还是原型里临时画，都照下面这几条，和库里的图标放在一起才不突兀。`}),`
`,(0,u.jsx)(t.h3,{id:`lucide-的规格`,children:`Lucide 的规格`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`在 24×24 的网格上画，四边至少留 1。`}),`
`,(0,u.jsx)(t.li,{children:`线端是圆头，转折是圆角；只描边，不填充。`}),`
`,(0,u.jsx)(t.li,{children:`矩形圆角：边长 8 以上用 2，小于 8 用 1。`}),`
`,(0,u.jsx)(t.li,{children:`分开的两个部分之间至少留 2。`}),`
`]}),`
`,(0,u.jsx)(t.h3,{id:`kivi-的调整`,children:`KIVI 的调整`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`画好后等比缩到 22，再把线宽改回 1.5。`}),`
`]}),`
`,(0,u.jsx)(t.h3,{id:`从库里已有图标提炼的写法`,children:`从库里已有图标提炼的写法`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`内容类`}),`（文本、视频、图片）：一个圆角方框，里面放一个认得出的符号，比如 T、播放三角、山形。参考 Text、Video、ImageToText。`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`AI、生成类`}),`：在主体的一角加一个小四角星，星和主体之间断开留缝。参考 ImageGeneration、VideoGeneration、AIEnhancement。大号四角星只给 Agent。`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`关闭、隐藏类`}),`：在原图标上加一条斜线，斜线两边留缝。参考 DisableSnap、HideConnections。`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`多份、批量`}),`：两层叠放，后面一层只露出一部分。参考 ImageToImage、OneClickSameModel。`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`怎么加新图标设计`,children:`怎么加新图标（设计）`}),`
`,(0,u.jsx)(t.p,{children:`图标表里没有合适的，按下面的步骤加。不要拿意思相近的旧图标顶替。`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`去 Lucide 找`}),`：`,`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`静态图标：`,(0,u.jsx)(t.a,{href:`https://lucide.dev/icons/`,children:`lucide.dev/icons`})]}),`
`,(0,u.jsxs)(t.li,{children:[`动态图标：`,(0,u.jsx)(t.a,{href:`https://lucide-animated.com/`,children:`lucide-animated.com`})]}),`
`]}),`
`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`下载`}),`：按 24px、线宽 1.5 下载 SVG。`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`缩放`}),`：等比缩到 22，居中放进 24×24 的框，四边各留 1。缩完把线宽改回 1.5，不要跟着缩成 1.375。`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`放进 Figma（KIVI UI KIT V2）`}),`：`,`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`描边版放进「_源文件 · 图标描边」页，留着以后改。`}),`
`,(0,u.jsx)(t.li,{children:`转轮廓、合并后做成组件，放进「图标」页对应的分组，按上面的规则起名。`}),`
`,(0,u.jsx)(t.li,{children:`组件描述照下面的格式写。`}),`
`,(0,u.jsx)(t.li,{children:`把它加进 Icon 组件里「图标」属性的首选值，之后在 Icon 实例里才选得到。`}),`
`,(0,u.jsx)(t.li,{children:`在图标页的展示格里写名字和备注，备注的颜色见下面。`}),`
`]}),`
`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`标「待确认」`}),`：新加进 Figma 的图标，不管是谁加的，都先标「待确认」：描述里加一行「状态：待确认（用在哪）」，备注用橙色。设计师确认后才转为正式图标。`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`补到本页的图标表里`}),`：写名字、意思、备注（在 `,(0,u.jsx)(t.code,{children:`icons.demos.tsx`}),` 的 `,(0,u.jsx)(t.code,{children:`ICON_INFO`}),` 里）。之后重新导出 `,(0,u.jsx)(t.code,{children:`kivi/icons.ts`}),`。`]}),`
`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`关键词：发送 提交 上箭头
来源：lucide/arrow-up · 缩到 22/24 · 线宽 1.5，已转轮廓
`})}),`
`,(0,u.jsx)(t.h3,{id:`lucide-里找不到`,children:`Lucide 里找不到`}),`
`,(0,u.jsx)(t.p,{children:`必须由设计师亲自画，按上面的「画法」来，描述里加一行「标记：自绘」。AI 不能代替设计师画图标放进 Figma。`}),`
`,(0,u.jsx)(t.h3,{id:`图标页上的备注颜色`,children:`图标页上的备注颜色`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`颜色`}),(0,u.jsx)(t.th,{children:`意思`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`白色「自绘」`}),(0,u.jsx)(t.td,{children:`图标库里没有对应的，按旧图标重画的。原线稿留在源文件页的隐藏图层里。`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`绿色`}),(0,u.jsx)(t.td,{children:`改过名，或合并了重复的图标，显示旧名。`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`橙色`}),(0,u.jsx)(t.td,{children:`待确认。`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`红色`}),(0,u.jsx)(t.td,{children:`旧图标，还没处理。`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`灰色`}),(0,u.jsx)(t.td,{children:`Lucide 原名。`})]})]})]}),`
`,(0,u.jsx)(t.h2,{id:`研发怎么取图标`,children:`研发：怎么取图标`}),`
`,(0,u.jsx)(t.h3,{id:`网站和组件库里`,children:`网站和组件库里`}),`
`,(0,u.jsxs)(t.p,{children:[`用 `,(0,u.jsx)(t.code,{children:`Icon`}),` 组件，名字用下面图标表里的名字，区分大小写。`,(0,u.jsx)(t.code,{children:`name`}),` 的类型是 `,(0,u.jsx)(t.code,{children:`IconName`}),`，写错名字 tsc 会报错。`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import { Icon } from '@kivi';

<Icon name="Close" />
<Icon name="Search" size={20} />
<Icon name="Loading" spin />
`})}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`属性`}),(0,u.jsx)(t.th,{children:`选项`}),(0,u.jsx)(t.th,{children:`代码`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`图标`}),(0,u.jsx)(t.td,{children:`图标表里的任意名字`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`name="Close"`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`尺寸`}),(0,u.jsx)(t.td,{children:`16（默认）/ 20 / 24 / 40 / 64。放进按钮这类组件里时由组件定，不用传`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`size={20}`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`转圈`}),(0,u.jsx)(t.td,{children:`只给 Loading 用，1 秒一圈，匀速`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`spin`})})]})]})]}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`图标颜色跟文字走（`,(0,u.jsx)(t.code,{children:`currentColor`}),`），见上面的「颜色」。`]}),`
`,(0,u.jsxs)(t.li,{children:[`图标的图形数据在 `,(0,u.jsx)(t.code,{children:`kivi/icons.ts`}),`，从 Figma「图标」页全量导出，不要手改；Figma 改了图标就重新导出。`]}),`
`]}),`
`,(0,u.jsx)(t.h3,{id:`线上产品里`,children:`线上产品里`}),`
`,(0,u.jsx)(t.p,{children:`线上现在用的还是阿里 iconfont，之后换成 KIVI 自己打包的字体。`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{}),(0,u.jsx)(t.th,{children:`现在`}),(0,u.jsx)(t.th,{children:`之后`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`来源`}),(0,u.jsx)(t.td,{children:`阿里 iconfont（旧项目）`}),(0,u.jsx)(t.td,{children:`KIVI 自己打包的字体：GitLab 图标仓库，前端当依赖装`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`类名`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`iconfont icon-kivi-名字`})}),(0,u.jsx)(t.td,{children:`不变`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:`仓库地址`}),(0,u.jsx)(t.td,{children:`—`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`draft`,children:`待定`})})]})]})]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`<i className="iconfont icon-kivi-Close" />
`})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`名字用下面图标表里的名字，区分大小写。`}),`
`,(0,u.jsxs)(t.li,{children:[`字体只能单色。Logo 有两种颜色，字体里怎么放，`,(0,u.jsx)(s,{kind:`draft`,children:`待定`}),`。`]}),`
`,(0,u.jsxs)(t.li,{children:[`旧名（`,(0,u.jsx)(t.code,{children:`Mdoel`}),`、`,(0,u.jsx)(t.code,{children:`Snap1`}),` 等）在字体里留别名，见「旧名对照」。`]}),`
`]}),`
`,(0,u.jsx)(t.h3,{id:`图标表里没有的`,children:`图标表里没有的`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`不要自己去网上找，也不要用意思相近的顶替。在交付里写「缺图标：××（用在哪）」，交给设计按上面的步骤加。`}),`
`,(0,u.jsxs)(t.li,{children:[`原型里可以自己画（也可以让 AI 画）一个 SVG，照「画法」，`,(0,u.jsx)(t.code,{children:`viewBox="0 0 24 24"`}),`、`,(0,u.jsx)(t.code,{children:`stroke-width="1.5"`}),`、`,(0,u.jsx)(t.code,{children:`stroke="currentColor"`}),`、`,(0,u.jsx)(t.code,{children:`fill="none"`}),`。在原型备注里写「临时图标：××」。`]}),`
`,(0,u.jsx)(t.li,{children:`临时图标只能留在原型里。要进 Figma 和代码，得交给设计师按上面的步骤做。`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`图标表`,children:`图标表`}),`
`,(0,u.jsxs)(t.p,{children:[`按 Figma 的分组排。点名字复制名字。备注里的「自绘」是图标库里没有、按旧图标重画的；`,(0,u.jsx)(s,{kind:`draft`,children:`待确认`}),` 是 Figma 里标了待确认的。`]}),`
`,(0,u.jsx)(E,{}),`
`,(0,u.jsx)(t.h2,{id:`旧名对照`,children:`旧名对照`}),`
`,(0,u.jsx)(t.p,{children:`改名和合并的对照表。旧名是代码和 iconfont 里现在用的名字，新名是图标库里的组件名。来自 Figma「图标」页的迁移映射，共 11 条。`}),`
`,(0,u.jsx)(k,{children:(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`旧名`}),(0,u.jsx)(t.th,{children:`新名`}),(0,u.jsx)(t.th,{children:`类型`}),(0,u.jsx)(t.th,{children:`说明 · 代码影响`}),(0,u.jsx)(t.th,{children:`状态`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`upload`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Upload`})}),(0,u.jsx)(t.td,{children:`改名`}),(0,u.jsx)(t.td,{children:`统一首字母大写。代码 8 处：ai-chat 技能弹窗 3 处、media-node-renderer、create-tab-content 2 处、node-list、left-toolbar`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`off`,children:`草稿`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`text`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Text`})}),(0,u.jsx)(t.td,{children:`改名`}),(0,u.jsx)(t.td,{children:`统一首字母大写，图形改成带框的 T。代码 2 处：left-toolbar、文本节点空状态（custom-component）。另外 node-list 的「文本生成」误用了 FontSize，也要改成 Text`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`draft`,children:`待确认`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`TextBlod`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`TextBold`})}),(0,u.jsx)(t.td,{children:`改名`}),(0,u.jsx)(t.td,{children:`拼写错误。代码 1 处：文本节点工具栏 topbar-content`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`off`,children:`草稿`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`DivdingLine`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`DividingLine`})}),(0,u.jsx)(t.td,{children:`改名`}),(0,u.jsx)(t.td,{children:`拼写错误。代码 1 处：文本节点工具栏 topbar-content`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`draft`,children:`待确认`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Light`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Lightbulb`})}),(0,u.jsx)(t.td,{children:`改名`}),(0,u.jsx)(t.td,{children:`容易和「亮色模式」混淆。代码 1 处：AI 对话 ReasonContent`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`draft`,children:`待确认`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`icon`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Tool`})}),(0,u.jsx)(t.td,{children:`改名`}),(0,u.jsx)(t.td,{children:`名字没有含义，按图形（扳手）改名。代码 2 处：SkillSelectorPopover、SkillMentionPopup`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`off`,children:`草稿`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`calendar`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Calendar`})}),(0,u.jsx)(t.td,{children:`改名`}),(0,u.jsx)(t.td,{children:`统一首字母大写。代码 1 处：TimeRangeFilter / DateField`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`off`,children:`草稿`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Cutting1`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Cutting`})}),(0,u.jsx)(t.td,{children:`合并`}),(0,u.jsx)(t.td,{children:`和 Cutting 重复。代码 1 处：添加节点面板 node-list`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`off`,children:`草稿`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Snap1`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`Snap`})}),(0,u.jsx)(t.td,{children:`合并`}),(0,u.jsx)(t.td,{children:`和 Snap 重复。代码 1 处：画布底部工具栏 bottom-toolbar（吸附开关）`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`off`,children:`草稿`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`ShowConnections-1`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`ShowConnections`})}),(0,u.jsx)(t.td,{children:`合并`}),(0,u.jsx)(t.td,{children:`和 ShowConnections 重复。代码 1 处：画布底部工具栏 bottom-toolbar`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`off`,children:`草稿`})})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsxs)(t.td,{children:[(0,u.jsx)(t.code,{children:`VolumeFull`}),` `,(0,u.jsx)(t.code,{children:`VolumeHalf`}),` `,(0,u.jsx)(t.code,{children:`VolumeOff`})]}),(0,u.jsx)(t.td,{children:`不变`}),(0,u.jsx)(t.td,{children:`改图形`}),(0,u.jsx)(t.td,{children:`名字不变，实心改成描边（lucide/volume-2、volume-1、volume-x）。代码不用改，Iconfont 换上新图形就行。播放、暂停还是实心`}),(0,u.jsx)(t.td,{children:(0,u.jsx)(s,{kind:`off`,children:`草稿`})})]})]})]})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`状态`}),`：草稿 = 图标库里已经改好，代码还没改；待确认 = 新图标的图形还要再看一下；稳定 = 前端改完、iconfont 也换好了。目前没有稳定的。`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`上线顺序`}),`：先在 iconfont 里上传新名字的图标，旧名字的先别删；等前端把代码里的旧名都换完并发版，再删 iconfont 里的旧名。这样中间任何时候都不会出现图标显示不出来。`]}),`
`]})]})}function j(e={}){let{wrapper:t}=e.components||{};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(A,{...e})}):A(e)}export{j as default};