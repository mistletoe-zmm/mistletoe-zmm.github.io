(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{282:function(t,v,i){"use strict";i.r(v);var _=i(14),l=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"css"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" css")]),t._v(" "),v("h2",{attrs:{id:"页面生成的过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面生成的过程"}},[t._v("#")]),t._v(" 页面生成的过程")]),t._v(" "),v("ol",[v("li",[t._v("html被html解析器解析成dom树")]),t._v(" "),v("li",[t._v("css被css解析器解析成cssom树")]),t._v(" "),v("li",[t._v("结合dom树和cssom树，生成一颗渲染树(render tree)")]),t._v(" "),v("li",[t._v("生成布局,浏览器在屏幕上画出渲染树中的所有节点")]),t._v(" "),v("li",[t._v("将布局绘制在屏幕上，显示整个页面")])]),t._v(" "),v("h2",{attrs:{id:"重排重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重排重绘"}},[t._v("#")]),t._v(" 重排重绘")]),t._v(" "),v("p",[t._v("重绘不一定导致重排，但重排一定会导致重绘。")]),t._v(" "),v("p",[t._v("重排: 当DOM的变化影响了元素的几何信息(元素的的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。")]),t._v(" "),v("p",[t._v("重排也叫回流，简单的说就是重新生成布局，重新排列元素。")]),t._v(" "),v("p",[t._v("重绘: 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。")]),t._v(" "),v("p",[t._v("下面情况会发生重排：")]),t._v(" "),v("ol",[v("li",[t._v("页面初始渲染，这是开销最大的一次重排")]),t._v(" "),v("li",[t._v("添加/删除可见的DOM元素")]),t._v(" "),v("li",[t._v("改变元素位置")]),t._v(" "),v("li",[t._v("改变元素尺寸，比如边距、填充、边框、宽度和高度等")]),t._v(" "),v("li",[t._v("改变元素内容，比如文字数量，图片大小等")]),t._v(" "),v("li",[t._v("改变元素字体大小")]),t._v(" "),v("li",[t._v("改变浏览器窗口尺寸，比如resize事件发生时")]),t._v(" "),v("li",[t._v("激活CSS伪类（例如：:hover）")]),t._v(" "),v("li",[t._v("设置 style 属性的值，因为通过设置style属性改变结点样式的话，每一次设置都会触发一次reflow")]),t._v(" "),v("li",[t._v("查询某些属性或调用某些计算方法：offsetWidth、offsetHeight等，除此之外，当我们调用 getComputedStyle方法，或者IE里的 currentStyle 时，也会触发重排，原理是一样的，都为求一个“即时性”和“准确性”。")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/reflow.jpg"),alt:"foo"}}),t._v(" "),v("p",[t._v("以下情况会引起重绘")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/repaints.jpg"),alt:"foo"}}),t._v(" "),v("h2",{attrs:{id:"定位-position"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定位-position"}},[t._v("#")]),t._v(" 定位 position")]),t._v(" "),v("ol",[v("li",[t._v("static: 默认值，即没有定位，遵循正常的文档流对象")]),t._v(" "),v("li",[t._v("absolute: 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于html;\n定位使元素的位置与文档流无关，因此不占据空间")]),t._v(" "),v("li",[t._v("relation: 相对定位元素的定位是相对其正常位置，移动相对定位元素，但它原本所占的空间不会改变。")]),t._v(" "),v("li",[t._v("fixed: 相对于浏览器窗口是固定位置。")]),t._v(" "),v("li",[t._v("sticky: 粘性定位,基于用户的滚动位置来定位\n粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。\n它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。")])]),t._v(" "),v("h2",{attrs:{id:"垂直居中布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中布局"}},[t._v("#")]),t._v(" 垂直居中布局")]),t._v(" "),v("ol",[v("li",[t._v("display:flex;align-items:center")]),t._v(" "),v("li",[t._v("margin: auto;\nposition: absolute;\nleft: 0;\ntop: 0;\nright: 0;\nbottom: 0;")]),t._v(" "),v("li",[t._v("position: absolute;\ntop: 50%;\ntransform: translate(0, -50%);")]),t._v(" "),v("li",[t._v("父级 display: gird;align-items:center\n子级 grid-row: 1; // 占据第一行")])]),t._v(" "),v("h2",{attrs:{id:"bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" bfc")]),t._v(" "),v("p",[t._v("BFC是块级格式化上下文（Block Formatting Context）的缩写。它是Web页面中一种盒模型的渲染模式，用于控制块级盒子的布局以及浮动元素与其他元素的交互方式。")]),t._v(" "),v("p",[t._v("BFC的特点如下：")]),t._v(" "),v("ol",[v("li",[t._v("BFC中的元素布局是独立于外部的，不会受到外部元素的影响，也不会影响外部元素的布局。")]),t._v(" "),v("li",[t._v("BFC中的元素不会重叠，而是按照规定的方式排列，这个排列方式是由BFC的规则决定的。")]),t._v(" "),v("li",[t._v("BFC中的浮动元素会参与到高度的计算中，这意味着，如果一个父元素包含浮动元素，那么它的高度将会包括浮动元素的高度。")]),t._v(" "),v("li",[t._v("BFC可以防止元素被浮动元素覆盖，当一个元素的BFC和浮动元素重叠时，该元素会自动形成一个新的BFC，从而避免了被浮动元素覆盖。")])]),t._v(" "),v("p",[t._v("BFC可以通过以下方式触发：")]),t._v(" "),v("ol",[v("li",[t._v("根元素")]),t._v(" "),v("li",[t._v("float属性不为none的元素")]),t._v(" "),v("li",[t._v("position属性为absolute或fixed的元素")]),t._v(" "),v("li",[t._v("display属性为inline-block, table-cell, table-caption, flex, inline-flex的元素")]),t._v(" "),v("li",[t._v("overflow属性不为visible的元素")]),t._v(" "),v("li",[t._v("通过使用BFC，可以解决一些布局上的问题，例如清除浮动、防止文本环绕浮动元素等问题。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);