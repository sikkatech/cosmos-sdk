(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{768:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"keepers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keepers"}},[e._v("#")]),e._v(" Keepers")]),e._v(" "),o("p",{attrs:{synopsis:""}},[o("code",[e._v("Keeper")]),e._v("s refer to a Cosmos SDK abstraction whose role is to manage access to the subset of the state defined by various modules. "),o("code",[e._v("Keeper")]),e._v("s are module-specific, i.e. the subset of state defined by a module can only be accessed by a "),o("code",[e._v("keeper")]),e._v(" defined in said module. If a module needs to access the subset of state defined by another module, a reference to the second module's internal "),o("code",[e._v("keeper")]),e._v(" needs to be passed to the first one. This is done in "),o("code",[e._v("app.go")]),e._v(" during the instantiation of module keepers.")]),e._v(" "),o("h2",{attrs:{id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("Introduction to SDK Modules")])],1)]),e._v(" "),o("h2",{attrs:{id:"motivation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),o("p",[e._v("The Cosmos SDK is a framework that makes it easy for developers to build complex decentralised applications from scratch, mainly by composing modules together. As the ecosystem of open source modules for the Cosmos SDK expands, it will become increasingly likely that some of these modules contain vulnerabilities, as a result of the negligence or malice of their developer.")]),e._v(" "),o("p",[e._v("The Cosmos SDK adopts an "),o("RouterLink",{attrs:{to:"/core/ocap.html"}},[e._v("object-capabilities-based approach")]),e._v(" to help developers better protect their application from unwanted inter-module interactions, and "),o("code",[e._v("keeper")]),e._v("s are at the core of this approach. A "),o("code",[e._v("keeper")]),e._v(" can be thought of quite literally as the gatekeeper of a module's store(s). Each store (typically an "),o("RouterLink",{attrs:{to:"/core/store.html#iavl-store"}},[o("code",[e._v("IAVL")]),e._v(" Store")]),e._v(") defined within a module comes with a "),o("code",[e._v("storeKey")]),e._v(", which grants unlimited access to it. The module's "),o("code",[e._v("keeper")]),e._v(" holds this "),o("code",[e._v("storeKey")]),e._v(" (which should otherwise remain unexposed), and defines "),o("a",{attrs:{href:"#implementing-methods"}},[e._v("methods")]),e._v(" for reading and writing to the store(s).")],1),e._v(" "),o("p",[e._v("The core idea behind the object-capabilities approach is to only reveal what is necessary to get the work done. In practice, this means that instead of handling permissions of modules through access-control lists, module "),o("code",[e._v("keeper")]),e._v("s are passed a reference to the specific instance of the other modules' "),o("code",[e._v("keeper")]),e._v("s that they need to access (this is done in the "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("application's constructor function")]),e._v("). As a consequence, a module can only interact with the subset of state defined in another module via the methods exposed by the instance of the other module's "),o("code",[e._v("keeper")]),e._v(". This is a great way for developers to control the interactions that their own module can have with modules developed by external developers.")],1),e._v(" "),o("h2",{attrs:{id:"type-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#type-definition"}},[e._v("#")]),e._v(" Type Definition")]),e._v(" "),o("p",[o("code",[e._v("keeper")]),e._v("s are generally implemented in a "),o("code",[e._v("/keeper/keeper.go")]),e._v(" file located in the module's folder. By convention, the type "),o("code",[e._v("keeper")]),e._v(" of a module is simply named "),o("code",[e._v("Keeper")]),e._v(" and usually follows the following structure:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBLZWVwZXIgc3RydWN0IHsKICAgIC8vIEV4dGVybmFsIGtlZXBlcnMsIGlmIGFueQoKICAgIC8vIFN0b3JlIGtleShzKQoKICAgIC8vIGNvZGVjCn0K"}}),e._v(" "),o("p",[e._v("For example, here is the type definition of the "),o("code",[e._v("keeper")]),e._v(" from the "),o("code",[e._v("staking")]),e._v(" module:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8ga2VlcGVyIG9mIHRoZSBzdGFraW5nIHN0b3JlCnR5cGUgS2VlcGVyIHN0cnVjdCB7CglzdG9yZUtleSAgICAgICAgICAgc2RrLlN0b3JlS2V5CgljZGMgICAgICAgICAgICAgICAgY29kZWMuQmluYXJ5TWFyc2hhbGVyCglhdXRoS2VlcGVyICAgICAgICAgdHlwZXMuQWNjb3VudEtlZXBlcgoJYmFua0tlZXBlciAgICAgICAgIHR5cGVzLkJhbmtLZWVwZXIKCWhvb2tzICAgICAgICAgICAgICB0eXBlcy5TdGFraW5nSG9va3MKCXBhcmFtc3RvcmUgICAgICAgICBwYXJhbXR5cGVzLlN1YnNwYWNlCgl2YWxpZGF0b3JDYWNoZSAgICAgbWFwW3N0cmluZ11jYWNoZWRWYWxpZGF0b3IKCXZhbGlkYXRvckNhY2hlTGlzdCAqbGlzdC5MaXN0Cn0="}})],1),e._v(" "),o("p",[e._v("Let us go through the different parameters:")]),e._v(" "),o("ul",[o("li",[e._v("An expected "),o("code",[e._v("keeper")]),e._v(" is a "),o("code",[e._v("keeper")]),e._v(" external to a module that is required by the internal "),o("code",[e._v("keeper")]),e._v(" of said module. External "),o("code",[e._v("keeper")]),e._v("s are listed in the internal "),o("code",[e._v("keeper")]),e._v("'s type definition as interfaces. These interfaces are themselves defined in a "),o("code",[e._v("types/expected_keepers.go")]),e._v(" file within the module's folder. In this context, interfaces are used to reduce the number of dependencies, as well as to facilitate the maintenance of the module itself.")]),e._v(" "),o("li",[o("code",[e._v("storeKey")]),e._v("s grant access to the store(s) of the "),o("RouterLink",{attrs:{to:"/core/store.html"}},[e._v("multistore")]),e._v(" managed by the module. They should always remain unexposed to external modules.")],1),e._v(" "),o("li",[e._v("A "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("codec "),o("code",[e._v("cdc")])]),e._v(", used to marshall and unmarshall struct to/from "),o("code",[e._v("[]byte")]),e._v(", that can be any of "),o("code",[e._v("codec.BinaryMarshaler")]),e._v(","),o("code",[e._v("codec.JSONMarshaler")]),e._v(" or "),o("code",[e._v("codec.Marshaler")]),e._v(" based on your requirements. It can be either a proto or amino codec as long as they implement these interfaces.")],1)]),e._v(" "),o("p",[e._v("Of course, it is possible to define different types of internal "),o("code",[e._v("keeper")]),e._v("s for the same module (e.g. a read-only "),o("code",[e._v("keeper")]),e._v("). Each type of "),o("code",[e._v("keeper")]),e._v(" comes with its own constructor function, which is called from the "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("application's constructor function")]),e._v(". This is where "),o("code",[e._v("keeper")]),e._v("s are instantiated, and where developers make sure to pass correct instances of modules' "),o("code",[e._v("keeper")]),e._v("s to other modules that require it.")],1),e._v(" "),o("h2",{attrs:{id:"implementing-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementing-methods"}},[e._v("#")]),e._v(" Implementing Methods")]),e._v(" "),o("p",[o("code",[e._v("Keeper")]),e._v("s primarily expose getter and setter methods for the store(s) managed by their module. These methods should remain as simple as possible and strictly be limited to getting or setting the requested value, as validity checks should have already been performed via the "),o("code",[e._v("ValidateBasic()")]),e._v(" method of the "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[o("code",[e._v("message")])]),e._v(" and the "),o("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[o("code",[e._v("Msg")]),e._v(" server")]),e._v(" when "),o("code",[e._v("keeper")]),e._v("s' methods are called.")],1),e._v(" "),o("p",[e._v("Typically, a "),o("em",[e._v("getter")]),e._v(" method will present with the following signature")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIEdldChjdHggc2RrLkNvbnRleHQsIGtleSBzdHJpbmcpIHJldHVyblR5cGUK"}}),e._v(" "),o("p",[e._v("and go through the following steps:")]),e._v(" "),o("ol",[o("li",[e._v("Retrieve the appropriate store from the "),o("code",[e._v("ctx")]),e._v(" using the "),o("code",[e._v("storeKey")]),e._v(". This is done through the "),o("code",[e._v("KVStore(storeKey sdk.StoreKey)")]),e._v(" method of the "),o("code",[e._v("ctx")]),e._v(". Then it's prefered to use the "),o("code",[e._v("prefix.Store")]),e._v(" to access only the desired limited subset of the store for convenience and safety.")]),e._v(" "),o("li",[e._v("If it exists, get the "),o("code",[e._v("[]byte")]),e._v(" value stored at location "),o("code",[e._v("[]byte(key)")]),e._v(" using the "),o("code",[e._v("Get(key []byte)")]),e._v(" method of the store.")]),e._v(" "),o("li",[e._v("Unmarshall the retrieved value from "),o("code",[e._v("[]byte")]),e._v(" to "),o("code",[e._v("returnType")]),e._v(" using the codec "),o("code",[e._v("cdc")]),e._v(". Return the value.")])]),e._v(" "),o("p",[e._v("Similarly, a "),o("em",[e._v("setter")]),e._v(" method will present with the following signature")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIFNldChjdHggc2RrLkNvbnRleHQsIGtleSBzdHJpbmcsIHZhbHVlIHZhbHVlVHlwZSkgCg=="}}),e._v(" "),o("p",[e._v("and go through the following steps:")]),e._v(" "),o("ol",[o("li",[e._v("Retrieve the appropriate store from the "),o("code",[e._v("ctx")]),e._v(" using the "),o("code",[e._v("storeKey")]),e._v(". This is done through the "),o("code",[e._v("KVStore(storeKey sdk.StoreKey)")]),e._v(" method of the "),o("code",[e._v("ctx")]),e._v(". Then it's prefered to use the "),o("code",[e._v("prefix.Store")]),e._v(" to access only the desired limited subset of the store for convenience and safety.")]),e._v(" "),o("li",[e._v("Marshal "),o("code",[e._v("value")]),e._v(" to "),o("code",[e._v("[]byte")]),e._v(" using the codec "),o("code",[e._v("cdc")]),e._v(".")]),e._v(" "),o("li",[e._v("Set the encoded value in the store at location "),o("code",[e._v("key")]),e._v(" using the "),o("code",[e._v("Set(key []byte, value []byte)")]),e._v(" method of the store.")])]),e._v(" "),o("p",[e._v("For more, see an example of "),o("code",[e._v("keeper")]),e._v("'s "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/3bafd8255a502e5a9cee07391cf8261538245dfd/x/staking/keeper/keeper.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("methods implementation from the "),o("code",[e._v("staking")]),e._v(" module"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/core/store.html#kvstore-and-commitkvstore-interfaces"}},[e._v("module "),o("code",[e._v("KVStore")])]),e._v(" also provides an "),o("code",[e._v("Iterator()")]),e._v(" method which returns an "),o("code",[e._v("Iterator")]),e._v(" object to iterate over a domain of keys.")],1),e._v(" "),o("p",[e._v("This is an example from the "),o("code",[e._v("auth")]),e._v(" module to iterate accounts:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSXRlcmF0ZUFjY291bnRzIGl0ZXJhdGVzIG92ZXIgYWxsIHRoZSBzdG9yZWQgYWNjb3VudHMgYW5kIHBlcmZvcm1zIGEgY2FsbGJhY2sgZnVuY3Rpb24KZnVuYyAoYWsgQWNjb3VudEtlZXBlcikgSXRlcmF0ZUFjY291bnRzKGN0eCBzZGsuQ29udGV4dCwgY2IgZnVuYyhhY2NvdW50IHR5cGVzLkFjY291bnRJKSAoc3RvcCBib29sKSkgewoJc3RvcmUgOj0gY3R4LktWU3RvcmUoYWsua2V5KQoJaXRlcmF0b3IgOj0gc2RrLktWU3RvcmVQcmVmaXhJdGVyYXRvcihzdG9yZSwgdHlwZXMuQWRkcmVzc1N0b3JlS2V5UHJlZml4KQoKCWRlZmVyIGl0ZXJhdG9yLkNsb3NlKCkKCWZvciA7IGl0ZXJhdG9yLlZhbGlkKCk7IGl0ZXJhdG9yLk5leHQoKSB7CgkJYWNjb3VudCA6PSBhay5kZWNvZGVBY2NvdW50KGl0ZXJhdG9yLlZhbHVlKCkpCgoJCWlmIGNiKGFjY291bnQpIHsKCQkJYnJlYWsKCQl9Cgl9Cn0="}})],1),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html"}},[e._v("invariants")])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);