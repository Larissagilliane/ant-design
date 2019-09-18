(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1549:function(n,a){n.exports={content:["section",["p","国际化组件。已废弃，请使用 ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider"]," 代替。"],["h2","使用"],["p","LocaleProvider 使用 React 的 ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context"]," 特性，只需在应用外围包裹一次即可全局生效。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> LocaleProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> zh_CN <span class="token keyword">from</span> <span class="token string">\'antd/es/locale-provider/zh_CN\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\n\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zh_CN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","import { LocaleProvider } from 'antd';\nimport zh_CN from 'antd/es/locale-provider/zh_CN';\nimport moment from 'moment';\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n...\n\nreturn <LocaleProvider locale={zh_CN}><App /></LocaleProvider>;"]],["p","我们提供了英语，中文，俄语，法语，德语等多种语言支持，所有语言包可以在 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale-provider/"},"这里"]," 找到。"],["p","注意：如果你需要使用 UMD 版的 dist 文件，应该引入 ",["code","antd/dist/antd-with-locales.js"],"，同时引入 moment 对应的 locale，然后按以下方式使用："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">{</span> LocaleProvider<span class="token punctuation">,</span> locales <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>antd<span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locales<span class="token punctuation">.</span>en_US<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","const { LocaleProvider, locales } = window.antd;\n\n...\n\nreturn <LocaleProvider locale={locales.en_US}><App /></LocaleProvider>;"]],["h3","增加语言包"],["p","如果你找不到你需要的语言包，欢迎你在 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale-provider/en_US.tsx"},"英文语言包"]," 的基础上创建一个新的语言包，并给我们 Pull Request。"],["h3","其他国际化需求"],["p","本模块仅用于组件的内建文案，若有业务文案的国际化需求，建议使用 ",["a",{title:null,href:"https://github.com/yahoo/react-intl"},"react-intl"],"，可参考示例：",["a",{title:null,href:"http://github.com/ant-design/intl-example"},"Intl demo 1"]," 和 ",["a",{title:null,href:"http://yiminghe.me/learning-react/examples/react-intl.html?locale=en-US"},"Intl demo 2"],"。"]],meta:{category:"Components",subtitle:"国际化（废弃）",cols:1,type:"废弃",title:"LocaleProvider",filename:"components/locale-provider/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#使用",title:"使用"},"使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","locale"],["td","语言包配置，语言包可到 ",["a",{title:null,href:"http://unpkg.com/antd/es/locale-provider/"},"antd/es/locale-provider"]," 目录下寻找"],["td","object"],["td","-"],["td"]]]],["h2","FAQ"],["h4","为什么我使用了 LocaleProvider 还有问题？"],["p","请检查是否设置了 ",["code","moment.locale('zh-cn')"],"，或者是否有两个版本的 moment 共存。"]]}}}]);