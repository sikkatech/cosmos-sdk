(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{791:function(e,t,a){"use strict";a.r(t);var d=a(1),s=Object(d.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[e._v("In this section we describe the processing of the staking messages and the corresponding updates to the state. All created/modified state objects specified by each message are defined within the "),a("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html"}},[e._v("state")]),e._v(" section.")],1),e._v(" "),a("h2",{attrs:{id:"msg-createvalidator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-createvalidator"}},[e._v("#")]),e._v(" Msg/CreateValidator")]),e._v(" "),a("p",[e._v("A validator is created using the "),a("code",[e._v("Msg/CreateValidator")]),e._v(" service message.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBDcmVhdGVWYWxpZGF0b3IgZGVmaW5lcyBhIG1ldGhvZCBmb3IgY3JlYXRpbmcgYSBuZXcgdmFsaWRhdG9yLgogIHJwYyBDcmVhdGVWYWxpZGF0b3IoTXNnQ3JlYXRlVmFsaWRhdG9yKSByZXR1cm5zIChNc2dDcmVhdGVWYWxpZGF0b3JSZXNwb25zZSk7"}})],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ3JlYXRlVmFsaWRhdG9yIGRlZmluZXMgYSBTREsgbWVzc2FnZSBmb3IgY3JlYXRpbmcgYSBuZXcgdmFsaWRhdG9yLgptZXNzYWdlIE1zZ0NyZWF0ZVZhbGlkYXRvciB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgRGVzY3JpcHRpb24gICAgIGRlc2NyaXB0aW9uICAgICAgICAgPSAxIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKICBDb21taXNzaW9uUmF0ZXMgY29tbWlzc2lvbiAgICAgICAgICA9IDIgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIHN0cmluZyAgICAgICAgICBtaW5fc2VsZl9kZWxlZ2F0aW9uID0gMyBbCiAgICAoZ29nb3Byb3RvLmN1c3RvbXR5cGUpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnQmcXVvdDssCiAgICAoZ29nb3Byb3RvLm1vcmV0YWdzKSAgID0gJnF1b3Q7eWFtbDpcJnF1b3Q7bWluX3NlbGZfZGVsZWdhdGlvblwmcXVvdDsmcXVvdDssCiAgICAoZ29nb3Byb3RvLm51bGxhYmxlKSAgID0gZmFsc2UKICBdOwogIHN0cmluZyAgICAgICAgICAgICAgICAgICBkZWxlZ2F0b3JfYWRkcmVzcyA9IDQgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7ZGVsZWdhdG9yX2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yX2FkZHJlc3MgPSA1IFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O3ZhbGlkYXRvcl9hZGRyZXNzXCZxdW90OyZxdW90O107CiAgZ29vZ2xlLnByb3RvYnVmLkFueSAgICAgIHB1YmtleSAgICAgICAgICAgID0gNiBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtjb3Ntb3MuY3J5cHRvLlB1YktleSZxdW90O107CiAgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIHZhbHVlICAgICAgICAgICAgID0gNyBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),e._v(" "),a("p",[e._v("This service message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("another validator with this operator address is already registered")]),e._v(" "),a("li",[e._v("another validator with this pubkey is already registered")]),e._v(" "),a("li",[e._v("the initial self-delegation tokens are of a denom not specified as the bonding denom")]),e._v(" "),a("li",[e._v("the commission parameters are faulty, namely:\n"),a("ul",[a("li",[a("code",[e._v("MaxRate")]),e._v(" is either > 1 or < 0")]),e._v(" "),a("li",[e._v("the initial "),a("code",[e._v("Rate")]),e._v(" is either negative or > "),a("code",[e._v("MaxRate")])]),e._v(" "),a("li",[e._v("the initial "),a("code",[e._v("MaxChangeRate")]),e._v(" is either negative or > "),a("code",[e._v("MaxRate")])])])]),e._v(" "),a("li",[e._v("the description fields are too large")])]),e._v(" "),a("p",[e._v("This service message creates and stores the "),a("code",[e._v("Validator")]),e._v(" object at appropriate indexes.\nAdditionally a self-delegation is made with the initial tokens delegation\ntokens "),a("code",[e._v("Delegation")]),e._v(". The validator always starts as unbonded but may be bonded\nin the first end-block.")]),e._v(" "),a("h2",{attrs:{id:"msg-editvalidator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-editvalidator"}},[e._v("#")]),e._v(" Msg/EditValidator")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Description")]),e._v(", "),a("code",[e._v("CommissionRate")]),e._v(" of a validator can be updated using the\n"),a("code",[e._v("Msg/EditCandidacy")]),e._v(" service message.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBFZGl0VmFsaWRhdG9yIGRlZmluZXMgYSBtZXRob2QgZm9yIGVkaXRpbmcgYW4gZXhpc3RpbmcgdmFsaWRhdG9yLgogIHJwYyBFZGl0VmFsaWRhdG9yKE1zZ0VkaXRWYWxpZGF0b3IpIHJldHVybnMgKE1zZ0VkaXRWYWxpZGF0b3JSZXNwb25zZSk7"}})],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnRWRpdFZhbGlkYXRvciBkZWZpbmVzIGEgU0RLIG1lc3NhZ2UgZm9yIGVkaXRpbmcgYW4gZXhpc3RpbmcgdmFsaWRhdG9yLgptZXNzYWdlIE1zZ0VkaXRWYWxpZGF0b3IgewogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CgogIERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uICAgICAgID0gMSBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07CiAgc3RyaW5nICAgICAgdmFsaWRhdG9yX2FkZHJlc3MgPSAyIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKCiAgLy8gV2UgcGFzcyBhIHJlZmVyZW5jZSB0byB0aGUgbmV3IGNvbW1pc3Npb24gcmF0ZSBhbmQgbWluIHNlbGYgZGVsZWdhdGlvbiBhcwogIC8vIGl0J3Mgbm90IG1hbmRhdG9yeSB0byB1cGRhdGUuIElmIG5vdCB1cGRhdGVkLCB0aGUgZGVzZXJpYWxpemVkIHJhdGUgd2lsbCBiZQogIC8vIHplcm8gd2l0aCBubyB3YXkgdG8gZGlzdGluZ3Vpc2ggaWYgYW4gdXBkYXRlIHdhcyBpbnRlbmRlZC4KICAvLyBSRUY6ICMyMzczCiAgc3RyaW5nIGNvbW1pc3Npb25fcmF0ZSA9IDMgWwogICAgKGdvZ29wcm90by5jdXN0b210eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5tb3JldGFncykgICA9ICZxdW90O3lhbWw6XCZxdW90O2NvbW1pc3Npb25fcmF0ZVwmcXVvdDsmcXVvdDsKICBdOwogIHN0cmluZyBtaW5fc2VsZl9kZWxlZ2F0aW9uID0gNCBbCiAgICAoZ29nb3Byb3RvLmN1c3RvbXR5cGUpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnQmcXVvdDssCiAgICAoZ29nb3Byb3RvLm1vcmV0YWdzKSAgID0gJnF1b3Q7eWFtbDpcJnF1b3Q7bWluX3NlbGZfZGVsZWdhdGlvblwmcXVvdDsmcXVvdDsKICBdOwp9"}})],1),e._v(" "),a("p",[e._v("This service message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("the initial "),a("code",[e._v("CommissionRate")]),e._v(" is either negative or > "),a("code",[e._v("MaxRate")])]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("CommissionRate")]),e._v(" has already been updated within the previous 24 hours")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("CommissionRate")]),e._v(" is > "),a("code",[e._v("MaxChangeRate")])]),e._v(" "),a("li",[e._v("the description fields are too large")])]),e._v(" "),a("p",[e._v("This service message stores the updated "),a("code",[e._v("Validator")]),e._v(" object.")]),e._v(" "),a("h2",{attrs:{id:"msg-delegate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-delegate"}},[e._v("#")]),e._v(" Msg/Delegate")]),e._v(" "),a("p",[e._v("Within this service message the delegator provides coins, and in return receives\nsome amount of their validator's (newly created) delegator-shares that are\nassigned to "),a("code",[e._v("Delegation.Shares")]),e._v(".")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBEZWxlZ2F0ZSBkZWZpbmVzIGEgbWV0aG9kIGZvciBwZXJmb3JtaW5nIGEgZGVsZWdhdGlvbiBvZiBjb2lucwogIC8vIGZyb20gYSBkZWxlZ2F0b3IgdG8gYSB2YWxpZGF0b3IuCiAgcnBjIERlbGVnYXRlKE1zZ0RlbGVnYXRlKSByZXR1cm5zIChNc2dEZWxlZ2F0ZVJlc3BvbnNlKTs="}})],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnRGVsZWdhdGUgZGVmaW5lcyBhIFNESyBtZXNzYWdlIGZvciBwZXJmb3JtaW5nIGEgZGVsZWdhdGlvbiBvZiBjb2lucwovLyBmcm9tIGEgZGVsZWdhdG9yIHRvIGEgdmFsaWRhdG9yLgptZXNzYWdlIE1zZ0RlbGVnYXRlIHsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgZGVsZWdhdG9yX2FkZHJlc3MgPSAxIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2RlbGVnYXRvcl9hZGRyZXNzXCZxdW90OyZxdW90O107CiAgc3RyaW5nICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcl9hZGRyZXNzID0gMiBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDt2YWxpZGF0b3JfYWRkcmVzc1wmcXVvdDsmcXVvdDtdOwogIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBhbW91bnQgICAgICAgICAgICA9IDMgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwp9"}})],1),e._v(" "),a("p",[e._v("This service message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("the validator is does not exist")]),e._v(" "),a("li",[e._v("the validator is jailed")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("Amount")]),e._v(" "),a("code",[e._v("Coin")]),e._v(" has a denomination different than one defined by "),a("code",[e._v("params.BondDenom")])])]),e._v(" "),a("p",[e._v("If an existing "),a("code",[e._v("Delegation")]),e._v(" object for provided addresses does not already\nexist than it is created as part of this service message otherwise the existing\n"),a("code",[e._v("Delegation")]),e._v(" is updated to include the newly received shares.")]),e._v(" "),a("h2",{attrs:{id:"msg-undelegate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-undelegate"}},[e._v("#")]),e._v(" Msg/Undelegate")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Msg/Undelegate")]),e._v(" service message allows delegators to undelegate their tokens from\nvalidator.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBVbmRlbGVnYXRlIGRlZmluZXMgYSBtZXRob2QgZm9yIHBlcmZvcm1pbmcgYW4gdW5kZWxlZ2F0aW9uIGZyb20gYQogIC8vIGRlbGVnYXRlIGFuZCBhIHZhbGlkYXRvci4KICBycGMgVW5kZWxlZ2F0ZShNc2dVbmRlbGVnYXRlKSByZXR1cm5zIChNc2dVbmRlbGVnYXRlUmVzcG9uc2UpOw=="}})],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVW5kZWxlZ2F0ZSBkZWZpbmVzIGEgU0RLIG1lc3NhZ2UgZm9yIHBlcmZvcm1pbmcgYW4gdW5kZWxlZ2F0aW9uIGZyb20gYQovLyBkZWxlZ2F0ZSBhbmQgYSB2YWxpZGF0b3IuCm1lc3NhZ2UgTXNnVW5kZWxlZ2F0ZSB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgc3RyaW5nICAgICAgICAgICAgICAgICAgIGRlbGVnYXRvcl9hZGRyZXNzID0gMSBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtkZWxlZ2F0b3JfYWRkcmVzc1wmcXVvdDsmcXVvdDtdOwogIHN0cmluZyAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JfYWRkcmVzcyA9IDIgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7dmFsaWRhdG9yX2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gYW1vdW50ICAgICAgICAgICAgPSAzIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKfQ=="}})],1),e._v(" "),a("p",[e._v("This service message returns a response containing the completion time of the undelegation:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVW5kZWxlZ2F0ZVJlc3BvbnNlIGRlZmluZXMgdGhlIE1zZy9VbmRlbGVnYXRlIHJlc3BvbnNlIHR5cGUuCm1lc3NhZ2UgTXNnVW5kZWxlZ2F0ZVJlc3BvbnNlIHsKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIGNvbXBsZXRpb25fdGltZSA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlXTsKfQ=="}})],1),e._v(" "),a("p",[e._v("This service message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("the delegation doesn't exist")]),e._v(" "),a("li",[e._v("the validator doesn't exist")]),e._v(" "),a("li",[e._v("the delegation has less shares than the ones worth of "),a("code",[e._v("Amount")])]),e._v(" "),a("li",[e._v("existing "),a("code",[e._v("UnbondingDelegation")]),e._v(" has maximum entries as defined by "),a("code",[e._v("params.MaxEntries")])]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("Amount")]),e._v(" has a denomination different than one defined by "),a("code",[e._v("params.BondDenom")])])]),e._v(" "),a("p",[e._v("When this service message is processed the following actions occur:")]),e._v(" "),a("ul",[a("li",[e._v("validator's "),a("code",[e._v("DelegatorShares")]),e._v(" and the delegation's "),a("code",[e._v("Shares")]),e._v(" are both reduced by the message "),a("code",[e._v("SharesAmount")])]),e._v(" "),a("li",[e._v("calculate the token worth of the shares remove that amount tokens held within the validator")]),e._v(" "),a("li",[e._v("with those removed tokens, if the validator is:\n"),a("ul",[a("li",[a("code",[e._v("Bonded")]),e._v(" - add them to an entry in "),a("code",[e._v("UnbondingDelegation")]),e._v(" (create "),a("code",[e._v("UnbondingDelegation")]),e._v(" if it doesn't exist) with a completion time a full unbonding period from the current time. Update pool shares to reduce BondedTokens and increase NotBondedTokens by token worth of the shares.")]),e._v(" "),a("li",[a("code",[e._v("Unbonding")]),e._v(" - add them to an entry in "),a("code",[e._v("UnbondingDelegation")]),e._v(" (create "),a("code",[e._v("UnbondingDelegation")]),e._v(" if it doesn't exist) with the same completion time as the validator ("),a("code",[e._v("UnbondingMinTime")]),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("Unbonded")]),e._v(" - then send the coins the message "),a("code",[e._v("DelegatorAddr")])])])]),e._v(" "),a("li",[e._v("if there are no more "),a("code",[e._v("Shares")]),e._v(" in the delegation, then the delegation object is removed from the store\n"),a("ul",[a("li",[e._v("under this situation if the delegation is the validator's self-delegation then also jail the validator.")])])])]),e._v(" "),a("h2",{attrs:{id:"msg-beginredelegate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-beginredelegate"}},[e._v("#")]),e._v(" Msg/BeginRedelegate")]),e._v(" "),a("p",[e._v("The redelegation command allows delegators to instantly switch validators. Once\nthe unbonding period has passed, the redelegation is automatically completed in\nthe EndBlocker.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBCZWdpblJlZGVsZWdhdGUgZGVmaW5lcyBhIG1ldGhvZCBmb3IgcGVyZm9ybWluZyBhIHJlZGVsZWdhdGlvbgogIC8vIG9mIGNvaW5zIGZyb20gYSBkZWxlZ2F0b3IgYW5kIHNvdXJjZSB2YWxpZGF0b3IgdG8gYSBkZXN0aW5hdGlvbiB2YWxpZGF0b3IuCiAgcnBjIEJlZ2luUmVkZWxlZ2F0ZShNc2dCZWdpblJlZGVsZWdhdGUpIHJldHVybnMgKE1zZ0JlZ2luUmVkZWxlZ2F0ZVJlc3BvbnNlKTs="}})],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQmVnaW5SZWRlbGVnYXRlIGRlZmluZXMgYSBTREsgbWVzc2FnZSBmb3IgcGVyZm9ybWluZyBhIHJlZGVsZWdhdGlvbgovLyBvZiBjb2lucyBmcm9tIGEgZGVsZWdhdG9yIGFuZCBzb3VyY2UgdmFsaWRhdG9yIHRvIGEgZGVzdGluYXRpb24gdmFsaWRhdG9yLgptZXNzYWdlIE1zZ0JlZ2luUmVkZWxlZ2F0ZSB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgc3RyaW5nICAgICAgICAgICAgICAgICAgIGRlbGVnYXRvcl9hZGRyZXNzICAgICA9IDEgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7ZGVsZWdhdG9yX2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yX3NyY19hZGRyZXNzID0gMiBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDt2YWxpZGF0b3Jfc3JjX2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBzdHJpbmcgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yX2RzdF9hZGRyZXNzID0gMyBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDt2YWxpZGF0b3JfZHN0X2FkZHJlc3NcJnF1b3Q7JnF1b3Q7XTsKICBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gYW1vdW50ICAgICAgICAgICAgICAgID0gNCBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),e._v(" "),a("p",[e._v("This service message returns a response containing the completion time of the redelegation:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQmVnaW5SZWRlbGVnYXRlUmVzcG9uc2UgZGVmaW5lcyB0aGUgTXNnL0JlZ2luUmVkZWxlZ2F0ZSByZXNwb25zZSB0eXBlLgptZXNzYWdlIE1zZ0JlZ2luUmVkZWxlZ2F0ZVJlc3BvbnNlIHsKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIGNvbXBsZXRpb25fdGltZSA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlXTsKfQ=="}})],1),e._v(" "),a("p",[e._v("This service message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("the delegation doesn't exist")]),e._v(" "),a("li",[e._v("the source or destination validators don't exist")]),e._v(" "),a("li",[e._v("the delegation has less shares than the ones worth of "),a("code",[e._v("Amount")])]),e._v(" "),a("li",[e._v("the source validator has a receiving redelegation which is not matured (aka. the redelegation may be transitive)")]),e._v(" "),a("li",[e._v("existing "),a("code",[e._v("Redelegation")]),e._v(" has maximum entries as defined by "),a("code",[e._v("params.MaxEntries")])]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("Amount")]),e._v(" "),a("code",[e._v("Coin")]),e._v(" has a denomination different than one defined by "),a("code",[e._v("params.BondDenom")])])]),e._v(" "),a("p",[e._v("When this service message is processed the following actions occur:")]),e._v(" "),a("ul",[a("li",[e._v("the source validator's "),a("code",[e._v("DelegatorShares")]),e._v(" and the delegations "),a("code",[e._v("Shares")]),e._v(" are both reduced by the message "),a("code",[e._v("SharesAmount")])]),e._v(" "),a("li",[e._v("calculate the token worth of the shares remove that amount tokens held within the source validator.")]),e._v(" "),a("li",[e._v("if the source validator is:\n"),a("ul",[a("li",[a("code",[e._v("Bonded")]),e._v(" - add an entry to the "),a("code",[e._v("Redelegation")]),e._v(" (create "),a("code",[e._v("Redelegation")]),e._v(" if it doesn't exist) with a completion time a full unbonding period from the current time. Update pool shares to reduce BondedTokens and increase NotBondedTokens by token worth of the shares (this may be effectively reversed in the next step however).")]),e._v(" "),a("li",[a("code",[e._v("Unbonding")]),e._v(" - add an entry to the "),a("code",[e._v("Redelegation")]),e._v(" (create "),a("code",[e._v("Redelegation")]),e._v(" if it doesn't exist) with the same completion time as the validator ("),a("code",[e._v("UnbondingMinTime")]),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("Unbonded")]),e._v(" - no action required in this step")])])]),e._v(" "),a("li",[e._v("Delegate the token worth to the destination validator, possibly moving tokens back to the bonded state.")]),e._v(" "),a("li",[e._v("if there are no more "),a("code",[e._v("Shares")]),e._v(" in the source delegation, then the source delegation object is removed from the store\n"),a("ul",[a("li",[e._v("under this situation if the delegation is the validator's self-delegation then also jail the validator.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);