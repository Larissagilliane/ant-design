(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1543:function(t,n){t.exports={content:["section",["p","协助进行页面级整体布局。"],["h2","设计规则"],["h3","尺寸"],["p","一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。"],["ul",["li",["p","顶部导航（大部分系统）：一级导航高度 ",["code","64px"],"，二级导航 ",["code","48px"],"。"]],["li",["p","顶部导航（展示类页面）：一级导航高度 ",["code","80px"],"，二级导航 ",["code","56px"],"。"]],["li",["p","顶部导航高度的范围计算公式为：",["code","48+8n"],"。"]],["li",["p","侧边导航宽度的范围计算公式：",["code","200+8n"],"。"]]],["h3","交互"],["ul",["li",["p","一级导航和末级的导航需要在可视化的层面被强调出来；"]],["li",["p","当前项应该在呈现上优先级最高；"]],["li",["p","当导航收起的时候，当前项的样式自动赋予给它的上一个层级；"]],["li",["p","左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。"]]],["h3","视觉"],["p","导航样式上需要根据信息层级合理的选择样式："],["ul",["li",["p",["strong","大色块强调"]],["p","建议用于底色为深色系时，当前页面父级的导航项。"]],["li",["p",["strong","高亮火柴棍"]],["p","当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。"]],["li",["p",["strong","字体高亮变色"]],["p","从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。"]],["li",["p",["strong","字体放大"]],["p",["code","12px"],"、",["code","14px"]," 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。"]]],["h2","组件概述"],["ul",["li",["p",["code","Layout"],"：布局容器，其下可嵌套 ",["code","Header"]," ",["code","Sider"]," ",["code","Content"]," ",["code","Footer"]," 或 ",["code","Layout"]," 本身，可以放在任何父容器中。"]],["li",["p",["code","Header"],"：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 ",["code","Layout"]," 中。"]],["li",["p",["code","Sider"],"：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 ",["code","Layout"]," 中。"]],["li",["p",["code","Content"],"：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 ",["code","Layout"]," 中。"]],["li",["p",["code","Footer"],"：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 ",["code","Layout"]," 中。"]]],["blockquote",["p","注意：采用 flex 布局实现，请注意",["a",{title:null,href:"http://caniuse.com/#search=flex"},"浏览器兼容性"],"问题。"]]],meta:{category:"Components",subtitle:"布局",type:"布局",cols:1,title:"Layout",filename:"components/layout/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#设计规则",title:"设计规则"},"设计规则"]],["li",["a",{className:"bisheng-toc-h2",href:"#组件概述",title:"组件概述"},"组件概述"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span><span class="token punctuation">></span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>left sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span><span class="token punctuation">></span></span>main content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Content</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>right sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span><span class="token punctuation">></span></span>footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Footer</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>'},["code","<Layout>\n  <Header>header</Header>\n  <Layout>\n    <Sider>left sidebar</Sider>\n    <Content>main content</Content>\n    <Sider>right sidebar</Sider>\n  </Layout>\n  <Footer>footer</Footer>\n</Layout>"]],["h3","Layout"],["p","布局容器。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","className"],["td","容器 className"],["td","string"],["td","-"],["td"]],["tr",["td","hasSider"],["td","表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动"],["td","boolean"],["td","-"],["td","3.2.0"]],["tr",["td","style"],["td","指定样式"],["td","object"],["td","-"],["td"]]]],["blockquote",["p",["code","Layout.Header"]," ",["code","Layout.Footer"]," ",["code","Layout.Content"]," API 与 ",["code","Layout"]," 相同"]],["h3","Layout.Sider"],["p","侧边栏。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","breakpoint"],["td","触发响应式布局的",["a",{title:null,href:"/components/grid#api"},"断点"]],["td","Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }"],["td","-"],["td"]],["tr",["td","className"],["td","容器 className"],["td","string"],["td","-"],["td"]],["tr",["td","collapsed"],["td","当前收起状态"],["td","boolean"],["td","-"],["td"]],["tr",["td","collapsedWidth"],["td","收缩宽度，设置为 0 会出现特殊 trigger"],["td","number"],["td","80"],["td"]],["tr",["td","collapsible"],["td","是否可收起"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultCollapsed"],["td","是否默认收起"],["td","boolean"],["td","false"],["td"]],["tr",["td","reverseArrow"],["td","翻转折叠提示箭头的方向，当 Sider 在右边时可以使用"],["td","boolean"],["td","false"],["td"]],["tr",["td","style"],["td","指定样式"],["td","object"],["td","-"],["td"]],["tr",["td","theme"],["td","主题颜色"],["td","string: ",["code","light"]," ",["code","dark"]],["td",["code","dark"]],["td","3.6.0"]],["tr",["td","trigger"],["td","自定义 trigger，设置为 null 时隐藏 trigger"],["td","string","|","ReactNode"],["td","-"],["td"]],["tr",["td","width"],["td","宽度"],["td","number","|","string"],["td","200"],["td"]],["tr",["td","onCollapse"],["td","展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发"],["td","(collapsed, type) => {}"],["td","-"],["td"]],["tr",["td","onBreakpoint"],["td","触发响应式布局",["a",{title:null,href:"/components/grid#api"},"断点"],"时的回调"],["td","(broken) => {}"],["td","-"],["td","3.7.0"]]]],["h4","breakpoint width"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  xs<span class="token punctuation">:</span> <span class="token string">\'480px\'</span><span class="token punctuation">,</span>\n  sm<span class="token punctuation">:</span> <span class="token string">\'576px\'</span><span class="token punctuation">,</span>\n  md<span class="token punctuation">:</span> <span class="token string">\'768px\'</span><span class="token punctuation">,</span>\n  lg<span class="token punctuation">:</span> <span class="token string">\'992px\'</span><span class="token punctuation">,</span>\n  xl<span class="token punctuation">:</span> <span class="token string">\'1200px\'</span><span class="token punctuation">,</span>\n  xxl<span class="token punctuation">:</span> <span class="token string">\'1600px\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code","{\n  xs: '480px',\n  sm: '576px',\n  md: '768px',\n  lg: '992px',\n  xl: '1200px',\n  xxl: '1600px',\n}"]]]}}}]);