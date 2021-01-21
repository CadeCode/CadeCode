(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{553:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"es6-版本与-babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-版本与-babel"}},[t._v("#")]),t._v(" ES6 版本与 Babel")]),t._v(" "),s("h2",{attrs:{id:"ecmascript-版本历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript-版本历史"}},[t._v("#")]),t._v(" ECMAScript 版本历史")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("HTML")]),t._v(" "),s("p",[t._v("HTML1，HTML2，HTML3，1991 - 1997 由 IETF 组织制定")]),t._v(" "),s("p",[t._v("IETF：The Internet Engineering Task Force，国际互联网工程任务组")])]),t._v(" "),s("li",[s("p",[t._v("HTML3.2")]),t._v(" "),s("p",[t._v("1997.1 发布，至今归属于 W3C 组织（万维网联盟）")])]),t._v(" "),s("li",[s("p",[t._v("JavaScript")]),t._v(" "),s("p",[t._v("1995，网景公司推出 LiveScript，为蹭 Java 热度，联合发布 JavaScript")]),t._v(" "),s("p",[t._v("1996，JavaScript1.0、1.1 发布")]),t._v(" "),s("p",[t._v("1997，微软 JScript 发布（完全照抄 JavaScript）")]),t._v(" "),s("p",[t._v("1997.6，ECMAScript1.0 发布（以 JavaScript1.0 为蓝本）")]),t._v(" "),s("p",[t._v("1998.6，ECMAScript2.0 发布")]),t._v(" "),s("p",[t._v("1999.12，ECMAScript3.0 发布")]),t._v(" "),s("p",[t._v("2000，ECMAScript4.0 草案没有被通过，调整幅度太大")]),t._v(" "),s("p",[t._v("2007，ECMAScript4.0准备发布，依然没有通过")]),t._v(" "),s("p",[t._v("2008.7，在 3.0 基础上推出 ECMAScript3.1，更名为 ECMAScript5")]),t._v(" "),s("p",[t._v("2009.12，将 4.0 分为三部分，一部分作为 ES5 正式发布，另外 javascript.next，javascript.next.next 两部分放入草案中")]),t._v(" "),s("p",[t._v("2011.6，ECMAScript5.1 发布，成为 ISO 标准")]),t._v(" "),s("p",[t._v("2013.3，javascript.next 草案冻结")]),t._v(" "),s("p",[t._v("2013.6，javascript.next 草案发布")]),t._v(" "),s("p",[t._v("2015.6，ECMAScript6 正式发布")])]),t._v(" "),s("li",[s("p",[t._v("ECMAScript")]),t._v(" "),s("p",[t._v("ECMA 即欧洲计算机制造联合会，制定脚本语言规范了 ECMA-262，遵从该规范的脚本语言成为 ECMAScript")]),t._v(" "),s("p",[t._v("ECMAScript2015/2016/2017 等都属于 ES6，每年都会有小版本的改动")])])]),t._v(" "),s("h2",{attrs:{id:"babel-搭建环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-搭建环境"}},[t._v("#")]),t._v(" Babel 搭建环境")]),t._v(" "),s("h3",{attrs:{id:"babel-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-介绍"}},[t._v("#")]),t._v(" Babel 介绍")]),t._v(" "),s("ol",[s("li",[t._v("Babel 用于将 ES6 代码转译为浏览器可执行的 ES5 代码")]),t._v(" "),s("li",[t._v("参考网站："),s("a",{attrs:{href:"https://www.babeljs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel 中文网"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"安装配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[t._v("#")]),t._v(" 安装配置")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("首先使用 npm init 将项目交由 npm 管理依赖（生成 package.json 文件）")])]),t._v(" "),s("li",[s("p",[t._v("安装 babel 转译规则集和脚手架")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("npm i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" babel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("preset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("env\nnpm i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" babel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli\n")])])])]),t._v(" "),s("li",[s("p",[t._v("项目根目录创建 .babelrc 文件，指定规则集")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"presets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-preset-env"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("package.json 的 scripts 属性中添加命令")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel app.js"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("根目录下的 app.js 中使用了 ec6 语法")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fnc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es6 箭头函数'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fnc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("执行 npm run babel-build 后根目录下生成 bundle.js")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fnc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fnc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es6 箭头函数'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fnc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("同理，使用 babel src -d lib 指令可以将 src 下的 js 文件全部转译到 lib 文件夹下")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-build-src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel src -d lib"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用 babel-node 执行代码")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-node"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-node ./src/app.js"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("npm run babel-node 即可执行 app.js（node 环境）")])])]),t._v(" "),s("h3",{attrs:{id:"浏览器中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中使用"}},[t._v("#")]),t._v(" 浏览器中使用")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("使用 babel-standalone 在浏览器中转译 es6 语法")])]),t._v(" "),s("li",[s("p",[t._v("使用 cdn 方式引入，将 es6 代码 script 标签指定为 text/babel")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js-box"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/@babel/standalone@7.11.6/babel.min.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/babel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getMsg")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Message'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js-box'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMsg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"使用-es6-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-es6-api"}},[t._v("#")]),t._v(" 使用 ES6 API")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Babel 默认只对 ES6 语法进行转译，不包含 ES6 的新增 API")]),t._v(" "),s("p",[t._v("如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（Object.assign...）")])]),t._v(" "),s("li",[s("p",[t._v("使用 babel-plyfill 提供新增 API 的支持")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" babel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("polyfill\n")])])]),s("p",[t._v("引入 babel-plyfill")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-polyfill"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-polyfill"')]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);