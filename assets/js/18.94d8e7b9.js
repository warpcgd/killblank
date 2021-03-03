(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{770:function(t,e,a){"use strict";a.r(e);var s=a(101),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("h2",{attrs:{id:"device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device"}},[t._v("#")]),t._v(" device")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 设置puppeteer模拟的机型\n   * @type {string}\n   * @default 'iPhone X' \b\b默认机型为iphone x\n   * @description \b可选值 [DeviceDescriptors](https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts#L30)\n  /**\n")])])])]),a("h2",{attrs:{id:"injectproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#injectproperty"}},[t._v("#")]),t._v(" injectProperty")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置注入页面变量\n * @type {string}\n * @default '\\__PRERENDER_INJECTED__\\'\n * @example 可在页面中进行判断 window.\\__PRERENDER_INJECTED\\__ === true\n/**\n")])])])]),a("h2",{attrs:{id:"renderafterdocumentevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderafterdocumentevent"}},[t._v("#")]),t._v(" renderAfterDocumentEvent")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置puppeteer读取页面时的事件\n * @type {string}\n * @default 'prerender-skeleton''\n/**\n")])])])]),a("h2",{attrs:{id:"renderaftertime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderaftertime"}},[t._v("#")]),t._v(" renderAfterTime")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置puppeteer读取页面时最长加载时间\n * @type {number}\n * @default 3000\n/**\n")])])])]),a("h2",{attrs:{id:"debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[t._v("#")]),t._v(" debug")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置\bdebugger模式，在puppeteer执行的时候会抛出错误\n * @type {boolean}\n * @default false\n/**\n")])])])]),a("h2",{attrs:{id:"requesthandle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requesthandle"}},[t._v("#")]),t._v(" requestHandle")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 对puppeteer request 请求进行\b拦截\n * @type {Function}\n * @default null\n * @exampe\n *\n   * ```\n   *  option.requestHandle = function (request, option) {\n   *     const url = request.url()\n   *     const host = option.host\n   *     const { port } = option\n   *     const rs = /\\.ihago\\.net\\/a\\/(?!corejslib|ihago-libs).+\\/(assets\\/.+\\/.+\\..+)/.exec(url)\n   *     if (rs) {\n   *        return request.continue({ url: `http://${host}:${port}/${rs[1]}` })\n   *     } else {\n   *        return request.continue()\n   *     }\n   *   }\n   * ```\n/**\n")])])])]),a("h2",{attrs:{id:"outputdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputdir"}},[t._v("#")]),t._v(" outputDir")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置\bwebpack output输出文件路径\n *\n * @type {string}\n * @default 'dist''\n/**\n")])])])]),a("h2",{attrs:{id:"entrypath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypath"}},[t._v("#")]),t._v(" entryPath")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置入口\b文件名\n * @type {string}\n * @default 'index''\n/**\n")])])])]),a("h2",{attrs:{id:"outputpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputpath"}},[t._v("#")]),t._v(" outPutPath")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置输出文件名\n * @type {'index'}\n * @default 'index''\n/**\n")])])])]),a("h2",{attrs:{id:"langs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#langs"}},[t._v("#")]),t._v(" langs")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置多语言\n * @type {Array<string>}\n * @default []\n/**\n")])])])]),a("h2",{attrs:{id:"magicpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#magicpath"}},[t._v("#")]),t._v(" magicPath")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置内存目录\n * @type {string}\n * @default '/__webpack_prerender_skeleton/__''\n/**\n")])])])]),a("h2",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" host")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置主机地址，默认会取本机\n * @type {string}\n/**\n")])])])]),a("h2",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置端口号，默认会取\b随机可用端口\n * @type {number}\n/**\n")])])])]),a("h2",{attrs:{id:"cookies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookies"}},[t._v("#")]),t._v(" cookies")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 设置pupperteer cookies\n * @type {array}\n * @example\n * ```js\n *  option.cookies = [{\n *    'name': 'cookie1',\n *    'value': 'val1'\n *  },{\n *    'name': 'cookie2',\n *    'value': 'val2'\n *  },{\n *    'name': 'cookie3',\n *    'value': 'val3'\n *  }]\n * ```\n/**\n")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);