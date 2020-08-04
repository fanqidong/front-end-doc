(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{370:function(t,e,r){t.exports=r.p+"assets/img/014-react-virtual.b0bbfbf1.svg"},371:function(t,e,r){t.exports=r.p+"assets/img/015-react-virtual.d73b28e1.svg"},382:function(t,e,r){"use strict";r.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#参考资料"}},[this._v("参考资料")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"react-virtual-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-virtual-dom","aria-hidden":"true"}},[this._v("#")]),this._v(" react Virtual DOM")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(370),alt:"React - 初始渲染"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(371),alt:"React - 数据更新"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p"),t._m(0),r("p"),t._v(" "),r("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("Virtual DOM 概况来讲，就是在数据和真实 DOM 之间建立了一层缓冲。对于开发者而言，数据变化了就调用 React 的渲染方法，而 React 并不是直接得到新的 DOM 进行替换，而是先生成 Virtual DOM，与上一次渲染得到的 Virtual DOM 进行比对，在渲染得到的 Virtual DOM 上发现变化，然后将变化的地方更新到真实 DOM 上。")]),t._v(" "),r("p",[t._v("简单来说，React 在提供给开发者简单的开发模式的情况下，借助 Virtual DOM 实现了性能上的优化，以致于敢说自己“不慢”。")]),t._v(" "),r("p",[t._v("React 基于 Virtual DOM 的数据更新与UI同步机制：")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("初始渲染时，首先将数据渲染为 Virtual DOM，然后由 Virtual DOM 生成 DOM。")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("数据更新时，渲染得到新的 Virtual DOM，与上一次得到的 Virtual DOM 进行 diff，得到所有需要在 DOM 上进行的变更，然后在 patch 过程中应用到 DOM 上实现UI的同步更新。")]),t._v(" "),r("p",[t._v("Virtual DOM 作为数据结构，需要能准确地转换为真实 DOM，并且方便进行对比。")]),t._v(" "),t._m(4),t._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000007694388",target:"_blank",rel:"noopener noreferrer"}},[t._v("一起理解 Virtual DOM segmentfault"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.w3cplus.com/javascript/understand-the-Virtual-DOM.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解 Virtual DOM"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000010924023",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解 React Virtual DOM segmentfault"),r("OutboundLink")],1)])])},a,!1,null,null,null);i.options.__file="011-react-Virtual-Dom.md";e.default=i.exports}}]);