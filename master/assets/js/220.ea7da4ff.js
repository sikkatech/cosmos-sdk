(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{784:function(e,t,n){"use strict";n.r(t);var s=n(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"x-evidence"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#x-evidence"}},[e._v("#")]),e._v(" "),n("code",[e._v("x/evidence")])]),e._v(" "),n("h2",{attrs:{id:"table-of-contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),n("ol",[n("li",[n("strong",[n("RouterLink",{attrs:{to:"/modules/evidence/01_concepts.html"}},[e._v("Concepts")])],1)]),e._v(" "),n("li",[n("strong",[n("RouterLink",{attrs:{to:"/modules/evidence/02_state.html"}},[e._v("State")])],1)]),e._v(" "),n("li",[n("strong",[n("RouterLink",{attrs:{to:"/modules/evidence/03_messages.html"}},[e._v("Messages")])],1)]),e._v(" "),n("li",[n("strong",[n("RouterLink",{attrs:{to:"/modules/evidence/04_events.html"}},[e._v("Events")])],1)]),e._v(" "),n("li",[n("strong",[n("RouterLink",{attrs:{to:"/modules/evidence/05_params.html"}},[e._v("Params")])],1)]),e._v(" "),n("li",[n("strong",[n("RouterLink",{attrs:{to:"/modules/evidence/06_begin_block.html"}},[e._v("BeginBlock")])],1)])]),e._v(" "),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[n("code",[e._v("x/evidence")]),e._v(" is an implementation of a Cosmos SDK module, per "),n("RouterLink",{attrs:{to:"/docs/architecture/adr-009-evidence-module.html"}},[e._v("ADR 009")]),e._v(",\nthat allows for the submission and handling of arbitrary evidence of misbehavior such\nas equivocation and counterfactual signing.")],1),e._v(" "),n("p",[e._v("The evidence module differs from standard evidence handling which typically expects the\nunderlying consensus engine, e.g. Tendermint, to automatically submit evidence when\nit is discovered by allowing clients and foreign chains to submit more complex evidence\ndirectly.")]),e._v(" "),n("p",[e._v("All concrete evidence types must implement the "),n("code",[e._v("Evidence")]),e._v(" interface contract. Submitted\n"),n("code",[e._v("Evidence")]),e._v(" is first routed through the evidence module's "),n("code",[e._v("Router")]),e._v(" in which it attempts\nto find a corresponding registered "),n("code",[e._v("Handler")]),e._v(" for that specific "),n("code",[e._v("Evidence")]),e._v(" type.\nEach "),n("code",[e._v("Evidence")]),e._v(" type must have a "),n("code",[e._v("Handler")]),e._v(" registered with the evidence module's\nkeeper in order for it to be successfully routed and executed.")]),e._v(" "),n("p",[e._v("Each corresponding handler must also fulfill the "),n("code",[e._v("Handler")]),e._v(" interface contract. The\n"),n("code",[e._v("Handler")]),e._v(" for a given "),n("code",[e._v("Evidence")]),e._v(" type can perform any arbitrary state transitions\nsuch as slashing, jailing, and tombstoning.")])])}),[],!1,null,null,null);t.default=o.exports}}]);