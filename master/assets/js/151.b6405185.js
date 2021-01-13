(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{709:function(e,t,l){"use strict";l.r(t);var c=l(1),o=Object(c.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"integration"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[e._v("#")]),e._v(" Integration")]),e._v(" "),l("p",{attrs:{synopsis:""}},[e._v("Learn how to integrate IBC to your application and send data packets to other chains.")]),e._v(" "),l("p",[e._v("This document outlines the required steps to integrate and configure the "),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC\nmodule"),l("OutboundLink")],1),e._v(" to your Cosmos SDK application and\nsend fungible token transfers to other chains.")]),e._v(" "),l("h2",{attrs:{id:"integrating-the-ibc-module"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#integrating-the-ibc-module"}},[e._v("#")]),e._v(" Integrating the IBC module")]),e._v(" "),l("p",[e._v("Integrating the IBC module to your SDK-based application is straighforward. The general changes can be summarized in the following steps:")]),e._v(" "),l("ul",[l("li",[e._v("Add required modules to the "),l("code",[e._v("module.BasicManager")])]),e._v(" "),l("li",[e._v("Define additional "),l("code",[e._v("Keeper")]),e._v(" fields for the new modules on the "),l("code",[e._v("App")]),e._v(" type")]),e._v(" "),l("li",[e._v("Add the module's "),l("code",[e._v("StoreKeys")]),e._v(" and initialize their "),l("code",[e._v("Keepers")])]),e._v(" "),l("li",[e._v("Set up corresponding routers and routes for the "),l("code",[e._v("ibc")]),e._v(" and "),l("code",[e._v("evidence")]),e._v(" modules")]),e._v(" "),l("li",[e._v("Add the modules to the module "),l("code",[e._v("Manager")])]),e._v(" "),l("li",[e._v("Add modules to "),l("code",[e._v("Begin/EndBlockers")]),e._v(" and "),l("code",[e._v("InitGenesis")])]),e._v(" "),l("li",[e._v("Update the module "),l("code",[e._v("SimulationManager")]),e._v(" to enable simulations")])]),e._v(" "),l("h3",{attrs:{id:"module-basicmanager-and-moduleaccount-permissions"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#module-basicmanager-and-moduleaccount-permissions"}},[e._v("#")]),e._v(" Module "),l("code",[e._v("BasicManager")]),e._v(" and "),l("code",[e._v("ModuleAccount")]),e._v(" permissions")]),e._v(" "),l("p",[e._v("The first step is to add the following modules to the "),l("code",[e._v("BasicManager")]),e._v(": "),l("code",[e._v("x/capability")]),e._v(", "),l("code",[e._v("x/ibc")]),e._v(",\n"),l("code",[e._v("x/evidence")]),e._v(" and "),l("code",[e._v("x/ibc-transfer")]),e._v(". After that, we need to grant "),l("code",[e._v("Minter")]),e._v(" and "),l("code",[e._v("Burner")]),e._v(" permissions to\nthe "),l("code",[e._v("ibc-transfer")]),e._v(" "),l("code",[e._v("ModuleAccount")]),e._v(" to mint and burn relayed tokens.")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCnZhciAoCgogIE1vZHVsZUJhc2ljcyA9IG1vZHVsZS5OZXdCYXNpY01hbmFnZXIoCiAgICAvLyAuLi4KICAgIGNhcGFiaWxpdHkuQXBwTW9kdWxlQmFzaWN7fSwKICAgIGliYy5BcHBNb2R1bGVCYXNpY3t9LAogICAgZXZpZGVuY2UuQXBwTW9kdWxlQmFzaWN7fSwKICAgIHRyYW5zZmVyLkFwcE1vZHVsZUJhc2lje30sIC8vIGkuZSBpYmMtdHJhbnNmZXIgbW9kdWxlCiAgKQoKICAvLyBtb2R1bGUgYWNjb3VudCBwZXJtaXNzaW9ucwogIG1hY2NQZXJtcyA9IG1hcFtzdHJpbmddW11zdHJpbmd7CiAgICAvLyBvdGhlciBtb2R1bGUgYWNjb3VudHMgcGVybWlzc2lvbnMKICAgIC8vIC4uLgogICAgaWJjdHJhbnNmZXJ0eXBlcy5Nb2R1bGVOYW1lOiAgICB7YXV0aHR5cGVzLk1pbnRlciwgYXV0aHR5cGVzLkJ1cm5lcn0sCikK"}}),e._v(" "),l("h3",{attrs:{id:"application-fields"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#application-fields"}},[e._v("#")]),e._v(" Application fields")]),e._v(" "),l("p",[e._v("Then, we need to register the "),l("code",[e._v("Keepers")]),e._v(" as follows:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCnR5cGUgQXBwIHN0cnVjdCB7CiAgLy8gYmFzZWFwcCwga2V5cyBhbmQgc3Vic3BhY2VzIGRlZmluaXRpb25zCgogIC8vIG90aGVyIGtlZXBlcnMKICAvLyAuLi4KICBJQkNLZWVwZXIgICAgICAgICppYmNrZWVwZXIuS2VlcGVyIC8vIElCQyBLZWVwZXIgbXVzdCBiZSBhIHBvaW50ZXIgaW4gdGhlIGFwcCwgc28gd2UgY2FuIFNldFJvdXRlciBvbiBpdCBjb3JyZWN0bHkKICBFdmlkZW5jZUtlZXBlciAgIGV2aWRlbmNla2VlcGVyLktlZXBlciAvLyByZXF1aXJlZCB0byBzZXQgdXAgdGhlIGNsaWVudCBtaXNiZWhhdmlvdXIgcm91dGUKICBUcmFuc2ZlcktlZXBlciAgIGliY3RyYW5zZmVya2VlcGVyLktlZXBlciAvLyBmb3IgY3Jvc3MtY2hhaW4gZnVuZ2libGUgdG9rZW4gdHJhbnNmZXJzCgogIC8vIG1ha2Ugc2NvcGVkIGtlZXBlcnMgcHVibGljIGZvciB0ZXN0IHB1cnBvc2VzCiAgU2NvcGVkSUJDS2VlcGVyICAgICAgY2FwYWJpbGl0eWtlZXBlci5TY29wZWRLZWVwZXIKICBTY29wZWRUcmFuc2ZlcktlZXBlciBjYXBhYmlsaXR5a2VlcGVyLlNjb3BlZEtlZXBlcgoKICAvLy8gLi4uCiAgLy8vIG1vZHVsZSBhbmQgc2ltdWxhdGlvbiBtYW5hZ2VyIGRlZmluaXRpb25zCn0K"}}),e._v(" "),l("h3",{attrs:{id:"configure-the-keepers"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-keepers"}},[e._v("#")]),e._v(" Configure the "),l("code",[e._v("Keepers")])]),e._v(" "),l("p",[e._v("During initialization, besides initializing the IBC "),l("code",[e._v("Keepers")]),e._v(" (for the  "),l("code",[e._v("x/ibc")]),e._v(", and\n"),l("code",[e._v("x/ibc-transfer")]),e._v(" modules), we need to grant specific capabilities through the capability module\n"),l("code",[e._v("ScopedKeepers")]),e._v(" so that we can authenticate the object-capability permissions for each of the IBC\nchannels.")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdBcHAoLi4uYXJncykgKkFwcCB7CiAgLy8gZGVmaW5lIGNvZGVjcyBhbmQgYmFzZWFwcAoKICAvLyBhZGQgY2FwYWJpbGl0eSBrZWVwZXIgYW5kIFNjb3BlVG9Nb2R1bGUgZm9yIGliYyBtb2R1bGUKICBhcHAuQ2FwYWJpbGl0eUtlZXBlciA9IGNhcGFiaWxpdHlrZWVwZXIuTmV3S2VlcGVyKGFwcENvZGVjLCBrZXlzW2NhcGFiaWxpdHl0eXBlcy5TdG9yZUtleV0sIG1lbUtleXNbY2FwYWJpbGl0eXR5cGVzLk1lbVN0b3JlS2V5XSkKCiAgLy8gZ3JhbnQgY2FwYWJpbGl0aWVzIGZvciB0aGUgaWJjIGFuZCBpYmMtdHJhbnNmZXIgbW9kdWxlcwogIHNjb3BlZElCQ0tlZXBlciA6PSBhcHAuQ2FwYWJpbGl0eUtlZXBlci5TY29wZVRvTW9kdWxlKGliY2hvc3QuTW9kdWxlTmFtZSkKICBzY29wZWRUcmFuc2ZlcktlZXBlciA6PSBhcHAuQ2FwYWJpbGl0eUtlZXBlci5TY29wZVRvTW9kdWxlKGliY3RyYW5zZmVydHlwZXMuTW9kdWxlTmFtZSkKCiAgLy8gLi4uIG90aGVyIG1vZHVsZXMga2VlcGVycwoKICAvLyBDcmVhdGUgSUJDIEtlZXBlcgogIGFwcC5JQkNLZWVwZXIgPSBpYmNrZWVwZXIuTmV3S2VlcGVyKAogIGFwcENvZGVjLCBrZXlzW2liY2hvc3QuU3RvcmVLZXldLCBhcHAuU3Rha2luZ0tlZXBlciwgc2NvcGVkSUJDS2VlcGVyLAogICkKCiAgLy8gQ3JlYXRlIFRyYW5zZmVyIEtlZXBlcnMKICBhcHAuVHJhbnNmZXJLZWVwZXIgPSBpYmN0cmFuc2ZlcmtlZXBlci5OZXdLZWVwZXIoCiAgICBhcHBDb2RlYywga2V5c1tpYmN0cmFuc2ZlcnR5cGVzLlN0b3JlS2V5XSwKICAgIGFwcC5JQkNLZWVwZXIuQ2hhbm5lbEtlZXBlciwgJmFtcDthcHAuSUJDS2VlcGVyLlBvcnRLZWVwZXIsCiAgICBhcHAuQWNjb3VudEtlZXBlciwgYXBwLkJhbmtLZWVwZXIsIHNjb3BlZFRyYW5zZmVyS2VlcGVyLAogICkKICB0cmFuc2Zlck1vZHVsZSA6PSB0cmFuc2Zlci5OZXdBcHBNb2R1bGUoYXBwLlRyYW5zZmVyS2VlcGVyKQoKICAvLyBDcmVhdGUgZXZpZGVuY2UgS2VlcGVyIGZvciB0byByZWdpc3RlciB0aGUgSUJDIGxpZ2h0IGNsaWVudCBtaXNiZWhhdmlvdXIgZXZpZGVuY2Ugcm91dGUKICBldmlkZW5jZUtlZXBlciA6PSBldmlkZW5jZWtlZXBlci5OZXdLZWVwZXIoCiAgICBhcHBDb2RlYywga2V5c1tldmlkZW5jZXR5cGVzLlN0b3JlS2V5XSwgJmFtcDthcHAuU3Rha2luZ0tlZXBlciwgYXBwLlNsYXNoaW5nS2VlcGVyLAogICkKCiAgLy8gLi4gY29udGludWVzCn0K"}}),e._v(" "),l("h3",{attrs:{id:"register-routers"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#register-routers"}},[e._v("#")]),e._v(" Register "),l("code",[e._v("Routers")])]),e._v(" "),l("p",[e._v("IBC needs to know which module is bound to which port so that it can route packets to the\nappropriate module and call the appropriate callbacks. The port to module name mapping is handled by\nIBC's port "),l("code",[e._v("Keeper")]),e._v(". However, the mapping from module name to the relevant callbacks is accomplished\nby the port\n"),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc//core/05-port/types/router.go",target:"_blank",rel:"noopener noreferrer"}},[l("code",[e._v("Router")]),l("OutboundLink")],1),e._v(" on the\nIBC module.")]),e._v(" "),l("p",[e._v("Adding the module routes allows the IBC handler to call the appropriate callback when processing a\nchannel handshake or a packet.")]),e._v(" "),l("p",[e._v("The second "),l("code",[e._v("Router")]),e._v(" that is required is the evidence module router. This router handles genenal\nevidence submission and routes the business logic to each registered evidence handler. In the case\nof IBC, it is required to submit evidence for "),l("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-002-client-semantics#misbehaviour",target:"_blank",rel:"noopener noreferrer"}},[e._v("light client\nmisbehaviour"),l("OutboundLink")],1),e._v("\nin order to freeze a client and prevent further data packets from being sent/received.")]),e._v(" "),l("p",[e._v("Currently, a "),l("code",[e._v("Router")]),e._v(" is static so it must be initialized and set correctly on app initialization.\nOnce the "),l("code",[e._v("Router")]),e._v(" has been set, no new routes can be added.")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCmZ1bmMgTmV3QXBwKC4uLmFyZ3MpICpBcHAgewogIC8vIC4uIGNvbnRpbnVhdGlvbiBmcm9tIGFib3ZlCgogIC8vIENyZWF0ZSBzdGF0aWMgSUJDIHJvdXRlciwgYWRkIGliYy10cmFuZmVyIG1vZHVsZSByb3V0ZSwgdGhlbiBzZXQgYW5kIHNlYWwgaXQKICBpYmNSb3V0ZXIgOj0gcG9ydC5OZXdSb3V0ZXIoKQogIGliY1JvdXRlci5BZGRSb3V0ZShpYmN0cmFuc2ZlcnR5cGVzLk1vZHVsZU5hbWUsIHRyYW5zZmVyTW9kdWxlKQogIC8vIFNldHRpbmcgUm91dGVyIHdpbGwgZmluYWxpemUgYWxsIHJvdXRlcyBieSBzZWFsaW5nIHJvdXRlcgogIC8vIE5vIG1vcmUgcm91dGVzIGNhbiBiZSBhZGRlZAogIGFwcC5JQkNLZWVwZXIuU2V0Um91dGVyKGliY1JvdXRlcikKCiAgLy8gY3JlYXRlIHN0YXRpYyBFdmlkZW5jZSByb3V0ZXJzCgogIGV2aWRlbmNlUm91dGVyIDo9IGV2aWRlbmNldHlwZXMuTmV3Um91dGVyKCkuCiAgICAvLyBhZGQgSUJDIENsaWVudE1pc2JlaGF2aW91ciBldmlkZW5jZSBoYW5kbGVyCiAgICBBZGRSb3V0ZShpYmNjbGllbnQuUm91dGVyS2V5LCBpYmNjbGllbnQuSGFuZGxlckNsaWVudE1pc2JlaGF2aW91cihhcHAuSUJDS2VlcGVyLkNsaWVudEtlZXBlcikpCgogIC8vIFNldHRpbmcgUm91dGVyIHdpbGwgZmluYWxpemUgYWxsIHJvdXRlcyBieSBzZWFsaW5nIHJvdXRlcgogIC8vIE5vIG1vcmUgcm91dGVzIGNhbiBiZSBhZGRlZAogIGV2aWRlbmNlS2VlcGVyLlNldFJvdXRlcihldmlkZW5jZVJvdXRlcikKCiAgLy8gc2V0IHRoZSBldmlkZW5jZSBrZWVwZXIgZnJvbSB0aGUgc2VjdGlvbiBhYm92ZQogIGFwcC5FdmlkZW5jZUtlZXBlciA9ICpldmlkZW5jZUtlZXBlcgoKICAvLyAuLiBjb250aW51ZXMK"}}),e._v(" "),l("h3",{attrs:{id:"module-managers"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#module-managers"}},[e._v("#")]),e._v(" Module Managers")]),e._v(" "),l("p",[e._v("In order to use IBC, we need to add the new modules to the module "),l("code",[e._v("Manager")]),e._v(" and to the "),l("code",[e._v("SimulationManager")]),e._v(" in case your application supports "),l("RouterLink",{attrs:{to:"/building-modules/simulator.html"}},[e._v("simulations")]),e._v(".")],1),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCmZ1bmMgTmV3QXBwKC4uLmFyZ3MpICpBcHAgewogIC8vIC4uIGNvbnRpbnVhdGlvbiBmcm9tIGFib3ZlCgogIGFwcC5tbSA9IG1vZHVsZS5OZXdNYW5hZ2VyKAogICAgLy8gb3RoZXIgbW9kdWxlcwogICAgLy8gLi4uCiAgICBjYXBhYmlsaXR5Lk5ld0FwcE1vZHVsZShhcHBDb2RlYywgKmFwcC5DYXBhYmlsaXR5S2VlcGVyKSwKICAgIGV2aWRlbmNlLk5ld0FwcE1vZHVsZShhcHAuRXZpZGVuY2VLZWVwZXIpLAogICAgaWJjLk5ld0FwcE1vZHVsZShhcHAuSUJDS2VlcGVyKSwKICAgIHRyYW5zZmVyTW9kdWxlLAogICkKCiAgLy8gLi4uCgogIGFwcC5zbSA9IG1vZHVsZS5OZXdTaW11bGF0aW9uTWFuYWdlcigKICAgIC8vIG90aGVyIG1vZHVsZXMKICAgIC8vIC4uLgogICAgY2FwYWJpbGl0eS5OZXdBcHBNb2R1bGUoYXBwQ29kZWMsICphcHAuQ2FwYWJpbGl0eUtlZXBlciksCiAgICBldmlkZW5jZS5OZXdBcHBNb2R1bGUoYXBwLkV2aWRlbmNlS2VlcGVyKSwKICAgIGliYy5OZXdBcHBNb2R1bGUoYXBwLklCQ0tlZXBlciksCiAgICB0cmFuc2Zlck1vZHVsZSwKICApCgogIC8vIC4uIGNvbnRpbnVlcwo="}}),e._v(" "),l("h3",{attrs:{id:"application-abci-ordering"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#application-abci-ordering"}},[e._v("#")]),e._v(" Application ABCI Ordering")]),e._v(" "),l("p",[e._v("One addition from IBC is the concept of "),l("code",[e._v("HistoricalEntries")]),e._v(" which are stored on the staking module.\nEach entry contains the historical information for the "),l("code",[e._v("Header")]),e._v(" and "),l("code",[e._v("ValidatorSet")]),e._v(" of this chain which is stored\nat each height during the "),l("code",[e._v("BeginBlock")]),e._v(" call. The historical info is required to introspect the\npast historical info at any given height in order to verify the light client "),l("code",[e._v("ConsensusState")]),e._v(" during the\nconnection handhake.")]),e._v(" "),l("p",[e._v("The IBC module also has\n"),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/x/ibc/core/02-client/abci.go",target:"_blank",rel:"noopener noreferrer"}},[l("code",[e._v("BeginBlock")]),l("OutboundLink")],1),e._v(" logic as\nwell. This is optional as it is only required if your application uses the "),l("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-009-loopback-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost\nclient"),l("OutboundLink")],1),e._v(" to connect two\ndifferent modules from the same chain.")]),e._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",[e._v("Only register the ibc module to the "),l("code",[e._v("SetOrderBeginBlockers")]),e._v(" if your application will use the\nlocalhost ("),l("em",[e._v("aka")]),e._v(" loopback) client.")])]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCmZ1bmMgTmV3QXBwKC4uLmFyZ3MpICpBcHAgewogIC8vIC4uIGNvbnRpbnVhdGlvbiBmcm9tIGFib3ZlCgogIC8vIGFkZCBldmlkZW5jZSwgc3Rha2luZyBhbmQgaWJjIG1vZHVsZXMgdG8gQmVnaW5CbG9ja2VycwogIGFwcC5tbS5TZXRPcmRlckJlZ2luQmxvY2tlcnMoCiAgICAvLyBvdGhlciBtb2R1bGVzIC4uLgogICAgZXZpZGVuY2V0eXBlcy5Nb2R1bGVOYW1lLCBzdGFraW5ndHlwZXMuTW9kdWxlTmFtZSwgaWJjaG9zdC5Nb2R1bGVOYW1lLAogICkKCiAgLy8gLi4uCgogIC8vIE5PVEU6IENhcGFiaWxpdHkgbW9kdWxlIG11c3Qgb2NjdXIgZmlyc3Qgc28gdGhhdCBpdCBjYW4gaW5pdGlhbGl6ZSBhbnkgY2FwYWJpbGl0aWVzCiAgLy8gc28gdGhhdCBvdGhlciBtb2R1bGVzIHRoYXQgd2FudCB0byBjcmVhdGUgb3IgY2xhaW0gY2FwYWJpbGl0aWVzIGFmdGVyd2FyZHMgaW4gSW5pdENoYWluCiAgLy8gY2FuIGRvIHNvIHNhZmVseS4KICBhcHAubW0uU2V0T3JkZXJJbml0R2VuZXNpcygKICAgIGNhcGFiaWxpdHl0eXBlcy5Nb2R1bGVOYW1lLAogICAgLy8gb3RoZXIgbW9kdWxlcyAuLi4KICAgIGliY2hvc3QuTW9kdWxlTmFtZSwgZXZpZGVuY2V0eXBlcy5Nb2R1bGVOYW1lLCBpYmN0cmFuc2ZlcnR5cGVzLk1vZHVsZU5hbWUsCiAgKQoKICAvLyAuLiBjb250aW51ZXMK"}}),e._v(" "),l("div",{staticClass:"custom-block warning"},[l("p",[l("strong",[e._v("IMPORTANT")]),e._v(": The capability module "),l("strong",[e._v("must")]),e._v(" be declared first in "),l("code",[e._v("SetOrderInitGenesis")])])]),e._v(" "),l("p",[e._v("That's it! You have now wired up the IBC module and are now able to send fungible tokens across\ndifferent chains. If you want to have a broader view of the changes take a look into the SDK's\n"),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/simapp/app.go",target:"_blank",rel:"noopener noreferrer"}},[l("code",[e._v("SimApp")]),l("OutboundLink")],1),e._v(".")]),e._v(" "),l("h2",{attrs:{hide:"",id:"next"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),l("p",{attrs:{hide:""}},[e._v("Learn about how to create "),l("RouterLink",{attrs:{to:"/ibc/custom.html"}},[e._v("custom IBC modules")]),e._v(" for your application")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);