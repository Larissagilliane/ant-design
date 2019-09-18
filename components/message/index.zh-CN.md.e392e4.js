(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1561:function(t,n){t.exports={content:["section",["p","全局展示操作反馈信息。"],["h2","何时使用"],["ul",["li",["p","可提供成功、警告和错误等反馈信息。"]],["li",["p","顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。"]]]],meta:{category:"Components",subtitle:"全局提示",type:"反馈",noinstant:!0,title:"Message",filename:"components/message/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","组件提供了一些静态方法，使用方式和参数如下："],["ul",["li",["p",["code","message.success(content, [duration], onClose)"]]],["li",["p",["code","message.error(content, [duration], onClose)"]]],["li",["p",["code","message.info(content, [duration], onClose)"]]],["li",["p",["code","message.warning(content, [duration], onClose)"]]],["li",["p",["code","message.warn(content, [duration], onClose)"]," // alias of warning"]],["li",["p",["code","message.loading(content, [duration], onClose)"]]]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","content"],["td","提示内容"],["td","string","|","ReactNode"],["td","-"],["td"]],["tr",["td","duration"],["td","自动关闭的延时，单位秒。设为 0 时不自动关闭。"],["td","number"],["td","3"],["td"]],["tr",["td","onClose"],["td","关闭时触发的回调函数"],["td","Function"],["td","-"],["td"]]]],["p","组件同时提供 promise 接口。"],["ul",["li",["p",["code","message[level](content, [duration]).then(afterClose)"]]],["li",["p",["code","message[level](content, [duration], onClose).then(afterClose)"]]]],["p","其中",["code","message[level]"]," 是组件已经提供的静态方法。",["code","then"]," 接口返回值是 Promise。"],["ul",["li",["p",["code","message.open(config)"]]]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","content"],["td","提示内容"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","duration"],["td","自动关闭的延时，单位秒。设为 0 时不自动关闭。"],["td","number"],["td","3"],["td"]],["tr",["td","onClose"],["td","关闭时触发的回调函数"],["td","Function"],["td","-"],["td"]],["tr",["td","icon"],["td","自定义图标"],["td","ReactNode"],["td","-"],["td","3.9.0"]]]],["h3","全局方法"],["p","还提供了全局配置和全局销毁方法："],["ul",["li",["p",["code","message.config(options)"]]],["li",["p",["code","message.destroy()"]]]],["h4","message.config"],["pre",{lang:"js",highlighted:'message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  top<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  maxCount<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","message.config({\n  top: 100,\n  duration: 2,\n  maxCount: 3,\n});"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","duration"],["td","默认自动关闭延时，单位秒"],["td","number"],["td","3"],["td","3.9.0"]],["tr",["td","getContainer"],["td","配置渲染节点的输出位置"],["td","() => HTMLElement"],["td","() => document.body"],["td","3.9.0"]],["tr",["td","maxCount"],["td","最大显示数, 超过限制时，最早的消息会被自动关闭"],["td","number"],["td","-"],["td","3.9.0"]],["tr",["td","top"],["td","消息距离顶部的位置"],["td","number"],["td","24"],["td","3.9.0"]]]]]}}}]);