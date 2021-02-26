(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{786:function(t,c,l){"use strict";l.r(c);var a=l(1),s=Object(a.a)({},(function(){var t=this,c=t.$createElement,l=t._self._c||c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"对象能力模型-object-capability-model"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#对象能力模型-object-capability-model"}},[t._v("#")]),t._v(" 对象能力模型（Object-Capability Model）")]),t._v(" "),l("h2",{attrs:{id:"介绍"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),l("p",[t._v("在考虑安全性时，最好从特定的威胁模型开始。我们的威胁模型如下:")]),t._v(" "),l("blockquote",[l("p",[t._v("我们假设蓬勃发展的 Cosmos-SDK 模块生态中会包含错误或恶意的模块。")])]),t._v(" "),l("p",[t._v("Cosmos SDK 旨在通过以对象能力系统作为基础来解决此威胁。")]),t._v(" "),l("blockquote",[l("p",[t._v("对象能力系统的结构特性有利于代码设计模块化，并确保代码实现的可靠封装。")]),t._v(" "),l("p",[t._v("这些结构上的特性便于分析一个对象能力程序或操作系统的某些安全属性。其中一些 - 特别是信息流属性 - 可以在对象引用和连接级别进行分析，而不需要依赖于了解或分析（决定对象行为的）代码。")]),t._v(" "),l("p",[t._v("因此，可以在存在包含未知或（可能）恶意代码的新对象的情况下建立和维护这些安全属性。")]),t._v(" "),l("p",[t._v("这些结构属性源于管理对已存在对象的访问的两个规则：")]),t._v(" "),l("ol",[l("li",[t._v("只有在对象 A 持有对象 B 的引用，A 才可以向 B 发送一条消息")]),t._v(" "),l("li",[t._v("只有对象 A 收到了一条包含对象 C 引用的消息，A 才可以获得 C 的引用")])]),t._v(" "),l("p",[t._v("根据这两条规则，一个对象只有通过一条先前存在的引用链获得另一个对象的引用，简而言之，“只有连接才能产生连接”。")])]),t._v(" "),l("p",[t._v("关于对象能力（object-capabilities），可以阅读这边"),l("a",{attrs:{href:"http://habitatchronicles.com/2017/05/what-are-capabilities/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),l("OutboundLink")],1),t._v("了解更多。")]),t._v(" "),l("h2",{attrs:{id:"对象能力模式实践"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#对象能力模式实践"}},[t._v("#")]),t._v(" 对象能力模式实践")]),t._v(" "),l("p",[t._v("想法就是只暴露完成工作所需要的部分。")]),t._v(" "),l("p",[t._v("比如，下面的代码片段违反了对象能力原则：")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBBY2NvdW50IHN0cnVjdCB7Li4ufQp2YXIgYWNjb3VudCA6PSAmYW1wO0FwcEFjY291bnR7CiAgICBBZGRyZXNzOiBwdWIuQWRkcmVzcygpLAogICAgQ29pbnM6IHNkay5Db2luc3tzZGsuTmV3SW50NjRDb2luKCZxdW90O0FUTSZxdW90OywgMTAwKX0sCn0KdmFyIHN1bVZhbHVlIDo9IGV4dGVybmFsTW9kdWxlLkNvbXB1dGVTdW1WYWx1ZShhY2NvdW50KQo="}}),t._v(" "),l("p",[t._v("方法名"),l("code",[t._v("ComputeSumValue")]),t._v("暗示了这是一个不修改状态的纯函数，但传入指针值意味着函数可以修改其值。更好的函数定义是使用一个拷贝来替代：")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIHN1bVZhbHVlIDo9IGV4dGVybmFsTW9kdWxlLkNvbXB1dGVTdW1WYWx1ZSgqYWNjb3VudCkK"}}),t._v(" "),l("p",[t._v("在 Cosmos SDK 中，你可以看到"),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/simapp/app.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("gaia app"),l("OutboundLink")],1),t._v("中对该原则的实践。")]),t._v(" "),l("p",[l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQlhcHBDb2RlYywga2V5c1tzdGFraW5nLlN0b3JlS2V5XSwgYXBwLmFjY291bnRLZWVwZXIsIGFwcC5iYW5rS2VlcGVyLCBhcHAuc3Vic3BhY2VzW3N0YWtpbmcuTW9kdWxlTmFtZV0sCgkpCglhcHAubWludEtlZXBlciA9IG1pbnQuTmV3S2VlcGVyKAoJCWFwcENvZGVjLCBrZXlzW21pbnQuU3RvcmVLZXldLCBhcHAuc3Vic3BhY2VzW21pbnQuTW9kdWxlTmFtZV0sICZhbXA7c3Rha2luZ0tlZXBlciwKCQlhcHAuYWNjb3VudEtlZXBlciwgYXBwLmJhbmtLZWVwZXIsIGF1dGguRmVlQ29sbGVjdG9yTmFtZSwKCSkKCWFwcC5kaXN0cktlZXBlciA9IGRpc3RyLk5ld0tlZXBlcigKCQlhcHBDb2RlYywga2V5c1tkaXN0ci5TdG9yZUtleV0sIGFwcC5zdWJzcGFjZXNbZGlzdHIuTW9kdWxlTmFtZV0sIGFwcC5hY2NvdW50S2VlcGVyLCBhcHAuYmFua0tlZXBlciwKCQkmYW1wO3N0YWtpbmdLZWVwZXIsIGF1dGguRmVlQ29sbGVjdG9yTmFtZSwgYXBwLk1vZHVsZUFjY291bnRBZGRycygpLAoJKQoJYXBwLnNsYXNoaW5nS2VlcGVyID0gc2xhc2hpbmcuTmV3S2VlcGVyKAoJCWFwcENvZGVjLCBrZXlzW3NsYXNoaW5nLlN0b3JlS2V5XSwgJmFtcDtzdGFraW5nS2VlcGVyLCBhcHAuc3Vic3BhY2VzW3NsYXNoaW5nLk1vZHVsZU5hbWVdLAoJKQ=="}})],1)],1)}),[],!1,null,null,null);c.default=s.exports}}]);