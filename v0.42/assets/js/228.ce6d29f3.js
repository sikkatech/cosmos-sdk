(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{909:function(l,d,a){"use strict";a.r(d);var e=a(1),c=Object(e.a)({},(function(){var l=this,d=l.$createElement,a=l._self._c||d;return a("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[a("h1",{attrs:{id:"beginblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beginblock"}},[l._v("#")]),l._v(" BeginBlock")]),l._v(" "),a("h2",{attrs:{id:"evidence-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evidence-handling"}},[l._v("#")]),l._v(" Evidence Handling")]),l._v(" "),a("p",[l._v("Tendermint blocks can include\n"),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/blockchain/blockchain.md#evidence",target:"_blank",rel:"noopener noreferrer"}},[l._v("Evidence"),a("OutboundLink")],1),l._v(",\nwhich indicates that a validator committed malicious behavior. The relevant information is\nforwarded to the application as ABCI Evidence in "),a("code",[l._v("abci.RequestBeginBlock")]),l._v(" so that\nthe validator an be accordingly punished.")]),l._v(" "),a("h3",{attrs:{id:"equivocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#equivocation"}},[l._v("#")]),l._v(" Equivocation")]),l._v(" "),a("p",[l._v("Currently, the SDK handles two types of evidence inside ABCI's "),a("code",[l._v("BeginBlock")]),l._v(":")]),l._v(" "),a("ul",[a("li",[a("code",[l._v("DuplicateVoteEvidence")]),l._v(",")]),l._v(" "),a("li",[a("code",[l._v("LightClientAttackEvidence")]),l._v(".")])]),l._v(" "),a("p",[l._v("These two evidence types are handled the same way by the evidence module. First, the SDK converts the Tendermint concrete evidence type to a SDK "),a("code",[l._v("Evidence")]),l._v(" interface using "),a("code",[l._v("Equivocation")]),l._v(" as the concrete type.")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gRXF1aXZvY2F0aW9uIGltcGxlbWVudHMgdGhlIEV2aWRlbmNlIGludGVyZmFjZS4KbWVzc2FnZSBFcXVpdm9jYXRpb24gewogIGludDY0ICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICAgICAgICAgICAgPSAxOwogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgdGltZSAgICAgICAgICAgICAgPSAyOwogIGludDY0ICAgICAgICAgICAgICAgICAgICAgcG93ZXIgICAgICAgICAgICAgPSAzOwogIHN0cmluZyAgICAgICAgICAgICAgICAgICAgY29uc2Vuc3VzX2FkZHJlc3MgPSA0Owp9Cg=="}}),l._v(" "),a("p",[l._v("For some "),a("code",[l._v("Equivocation")]),l._v(" submitted in "),a("code",[l._v("block")]),l._v(" to be valid, it must satisfy:")]),l._v(" "),a("p",[a("code",[l._v("Evidence.Timestamp >= block.Timestamp - MaxEvidenceAge")])]),l._v(" "),a("p",[l._v("Where "),a("code",[l._v("Evidence.Timestamp")]),l._v(" is the timestamp in the block at height "),a("code",[l._v("Evidence.Height")]),l._v(" and\n"),a("code",[l._v("block.Timestamp")]),l._v(" is the current block timestamp.")]),l._v(" "),a("p",[l._v("If valid "),a("code",[l._v("Equivocation")]),l._v(" evidence is included in a block, the validator's stake is\nreduced (slashed) by "),a("code",[l._v("SlashFractionDoubleSign")]),l._v(", which is defined by the "),a("code",[l._v("x/slashing")]),l._v(' module,\nof what their stake was when the infraction occurred (rather than when the evidence was discovered).\nWe want to "follow the stake", i.e. the stake which contributed to the infraction\nshould be slashed, even if it has since been redelegated or started unbonding.')]),l._v(" "),a("p",[l._v("In addition, the validator is permanently jailed and tombstoned making it impossible for that\nvalidator to ever re-enter the validator set.")]),l._v(" "),a("p",[l._v("The "),a("code",[l._v("Equivocation")]),l._v(" evidence is handled as follows:")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIEhhbmRsZUVxdWl2b2NhdGlvbkV2aWRlbmNlKGN0eCBzZGsuQ29udGV4dCwgZXZpZGVuY2UgKnR5cGVzLkVxdWl2b2NhdGlvbikgewoJbG9nZ2VyIDo9IGsuTG9nZ2VyKGN0eCkKCWNvbnNBZGRyIDo9IGV2aWRlbmNlLkdldENvbnNlbnN1c0FkZHJlc3MoKQoKCWlmIF8sIGVyciA6PSBrLnNsYXNoaW5nS2VlcGVyLkdldFB1YmtleShjdHgsIGNvbnNBZGRyLkJ5dGVzKCkpOyBlcnIgIT0gbmlsIHsKCQkvLyBJZ25vcmUgZXZpZGVuY2UgdGhhdCBjYW5ub3QgYmUgaGFuZGxlZC4KCQkvLwoJCS8vIE5PVEU6IFdlIHVzZWQgdG8gcGFuaWMgd2l0aDoKCQkvLyBgcGFuaWMoZm10LlNwcmludGYoJnF1b3Q7VmFsaWRhdG9yIGNvbnNlbnN1cy1hZGRyZXNzICV2IG5vdCBmb3VuZCZxdW90OywgY29uc0FkZHIpKWAsCgkJLy8gYnV0IHRoaXMgY291cGxlcyB0aGUgZXhwZWN0YXRpb25zIG9mIHRoZSBhcHAgdG8gYm90aCBUZW5kZXJtaW50IGFuZAoJCS8vIHRoZSBzaW11bGF0b3IuICBCb3RoIGFyZSBleHBlY3RlZCB0byBwcm92aWRlIHRoZSBmdWxsIHJhbmdlIG9mCgkJLy8gYWxsb3dhYmxlIGJ1dCBub25lIG9mIHRoZSBkaXNhbGxvd2VkIGV2aWRlbmNlIHR5cGVzLiAgSW5zdGVhZCBvZgoJCS8vIGdldHRpbmcgdGhpcyBjb29yZGluYXRpb24gcmlnaHQsIGl0IGlzIGVhc2llciB0byByZWxheCB0aGUKCQkvLyBjb25zdHJhaW50cyBhbmQgaWdub3JlIGV2aWRlbmNlIHRoYXQgY2Fubm90IGJlIGhhbmRsZWQuCgkJcmV0dXJuCgl9CgoJLy8gY2FsY3VsYXRlIHRoZSBhZ2Ugb2YgdGhlIGV2aWRlbmNlCglpbmZyYWN0aW9uSGVpZ2h0IDo9IGV2aWRlbmNlLkdldEhlaWdodCgpCglpbmZyYWN0aW9uVGltZSA6PSBldmlkZW5jZS5HZXRUaW1lKCkKCWFnZUR1cmF0aW9uIDo9IGN0eC5CbG9ja0hlYWRlcigpLlRpbWUuU3ViKGluZnJhY3Rpb25UaW1lKQoJYWdlQmxvY2tzIDo9IGN0eC5CbG9ja0hlYWRlcigpLkhlaWdodCAtIGluZnJhY3Rpb25IZWlnaHQKCgkvLyBSZWplY3QgZXZpZGVuY2UgaWYgdGhlIGRvdWJsZS1zaWduIGlzIHRvbyBvbGQuIEV2aWRlbmNlIGlzIGNvbnNpZGVyZWQgc3RhbGUKCS8vIGlmIHRoZSBkaWZmZXJlbmNlIGluIHRpbWUgYW5kIG51bWJlciBvZiBibG9ja3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBhbGxvd2VkCgkvLyBwYXJhbWV0ZXJzIGRlZmluZWQuCgljcCA6PSBjdHguQ29uc2Vuc3VzUGFyYW1zKCkKCWlmIGNwICE9IG5pbCAmYW1wOyZhbXA7IGNwLkV2aWRlbmNlICE9IG5pbCB7CgkJaWYgYWdlRHVyYXRpb24gJmd0OyBjcC5FdmlkZW5jZS5NYXhBZ2VEdXJhdGlvbiAmYW1wOyZhbXA7IGFnZUJsb2NrcyAmZ3Q7IGNwLkV2aWRlbmNlLk1heEFnZU51bUJsb2NrcyB7CgkJCWxvZ2dlci5JbmZvKAoJCQkJJnF1b3Q7aWdub3JlZCBlcXVpdm9jYXRpb247IGV2aWRlbmNlIHRvbyBvbGQmcXVvdDssCgkJCQkmcXVvdDt2YWxpZGF0b3ImcXVvdDssIGNvbnNBZGRyLAoJCQkJJnF1b3Q7aW5mcmFjdGlvbl9oZWlnaHQmcXVvdDssIGluZnJhY3Rpb25IZWlnaHQsCgkJCQkmcXVvdDttYXhfYWdlX251bV9ibG9ja3MmcXVvdDssIGNwLkV2aWRlbmNlLk1heEFnZU51bUJsb2NrcywKCQkJCSZxdW90O2luZnJhY3Rpb25fdGltZSZxdW90OywgaW5mcmFjdGlvblRpbWUsCgkJCQkmcXVvdDttYXhfYWdlX2R1cmF0aW9uJnF1b3Q7LCBjcC5FdmlkZW5jZS5NYXhBZ2VEdXJhdGlvbiwKCQkJKQoJCQlyZXR1cm4KCQl9Cgl9CgoJdmFsaWRhdG9yIDo9IGsuc3Rha2luZ0tlZXBlci5WYWxpZGF0b3JCeUNvbnNBZGRyKGN0eCwgY29uc0FkZHIpCglpZiB2YWxpZGF0b3IgPT0gbmlsIHx8IHZhbGlkYXRvci5Jc1VuYm9uZGVkKCkgewoJCS8vIERlZmVuc2l2ZTogU2ltdWxhdGlvbiBkb2Vzbid0IHRha2UgdW5ib25kaW5nIHBlcmlvZHMgaW50byBhY2NvdW50LCBhbmQKCQkvLyBUZW5kZXJtaW50IG1pZ2h0IGJyZWFrIHRoaXMgYXNzdW1wdGlvbiBhdCBzb21lIHBvaW50LgoJCXJldHVybgoJfQoKCWlmIG9rIDo9IGsuc2xhc2hpbmdLZWVwZXIuSGFzVmFsaWRhdG9yU2lnbmluZ0luZm8oY3R4LCBjb25zQWRkcik7ICFvayB7CgkJcGFuaWMoZm10LlNwcmludGYoJnF1b3Q7ZXhwZWN0ZWQgc2lnbmluZyBpbmZvIGZvciB2YWxpZGF0b3IgJXMgYnV0IG5vdCBmb3VuZCZxdW90OywgY29uc0FkZHIpKQoJfQoKCS8vIGlnbm9yZSBpZiB0aGUgdmFsaWRhdG9yIGlzIGFscmVhZHkgdG9tYnN0b25lZAoJaWYgay5zbGFzaGluZ0tlZXBlci5Jc1RvbWJzdG9uZWQoY3R4LCBjb25zQWRkcikgewoJCWxvZ2dlci5JbmZvKAoJCQkmcXVvdDtpZ25vcmVkIGVxdWl2b2NhdGlvbjsgdmFsaWRhdG9yIGFscmVhZHkgdG9tYnN0b25lZCZxdW90OywKCQkJJnF1b3Q7dmFsaWRhdG9yJnF1b3Q7LCBjb25zQWRkciwKCQkJJnF1b3Q7aW5mcmFjdGlvbl9oZWlnaHQmcXVvdDssIGluZnJhY3Rpb25IZWlnaHQsCgkJCSZxdW90O2luZnJhY3Rpb25fdGltZSZxdW90OywgaW5mcmFjdGlvblRpbWUsCgkJKQoJCXJldHVybgoJfQoKCWxvZ2dlci5JbmZvKAoJCSZxdW90O2NvbmZpcm1lZCBlcXVpdm9jYXRpb24mcXVvdDssCgkJJnF1b3Q7dmFsaWRhdG9yJnF1b3Q7LCBjb25zQWRkciwKCQkmcXVvdDtpbmZyYWN0aW9uX2hlaWdodCZxdW90OywgaW5mcmFjdGlvbkhlaWdodCwKCQkmcXVvdDtpbmZyYWN0aW9uX3RpbWUmcXVvdDssIGluZnJhY3Rpb25UaW1lLAoJKQoKCS8vIFdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIHN0YWtlIGRpc3RyaWJ1dGlvbiB3aGljaCBzaWduZWQgdGhlIGJsb2NrLCBzbyB3ZQoJLy8gc3VidHJhY3QgVmFsaWRhdG9yVXBkYXRlRGVsYXkgZnJvbSB0aGUgZXZpZGVuY2UgaGVpZ2h0LgoJLy8gTm90ZSwgdGhhdCB0aGlzICpjYW4qIHJlc3VsdCBpbiBhIG5lZ2F0aXZlICZxdW90O2Rpc3RyaWJ1dGlvbkhlaWdodCZxdW90OywgdXAgdG8KCS8vIC1WYWxpZGF0b3JVcGRhdGVEZWxheSwgaS5lLiBhdCB0aGUgZW5kIG9mIHRoZQoJLy8gcHJlLWdlbmVzaXMgYmxvY2sgKG5vbmUpID0gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ2VuZXNpcyBibG9jay4KCS8vIFRoYXQncyBmaW5lIHNpbmNlIHRoaXMgaXMganVzdCB1c2VkIHRvIGZpbHRlciB1bmJvbmRpbmcgZGVsZWdhdGlvbnMgJmFtcDsgcmVkZWxlZ2F0aW9ucy4KCWRpc3RyaWJ1dGlvbkhlaWdodCA6PSBpbmZyYWN0aW9uSGVpZ2h0IC0gc2RrLlZhbGlkYXRvclVwZGF0ZURlbGF5CgoJLy8gU2xhc2ggdmFsaWRhdG9yLiBUaGUgYHBvd2VyYCBpcyB0aGUgaW50NjQgcG93ZXIgb2YgdGhlIHZhbGlkYXRvciBhcyBwcm92aWRlZAoJLy8gdG8vYnkgVGVuZGVybWludC4gVGhpcyB2YWx1ZSBpcyB2YWxpZGF0b3IuVG9rZW5zIGFzIHNlbnQgdG8gVGVuZGVybWludCB2aWEKCS8vIEFCQ0ksIGFuZCBub3cgcmVjZWl2ZWQgYXMgZXZpZGVuY2UuIFRoZSBmcmFjdGlvbiBpcyBwYXNzZWQgaW4gdG8gc2VwYXJhdGVseQoJLy8gdG8gc2xhc2ggdW5ib25kaW5nIGFuZCByZWJvbmRpbmcgZGVsZWdhdGlvbnMuCglrLnNsYXNoaW5nS2VlcGVyLlNsYXNoKAoJCWN0eCwKCQljb25zQWRkciwKCQlrLnNsYXNoaW5nS2VlcGVyLlNsYXNoRnJhY3Rpb25Eb3VibGVTaWduKGN0eCksCgkJZXZpZGVuY2UuR2V0VmFsaWRhdG9yUG93ZXIoKSwgZGlzdHJpYnV0aW9uSGVpZ2h0LAoJKQoKCS8vIEphaWwgdGhlIHZhbGlkYXRvciBpZiBub3QgYWxyZWFkeSBqYWlsZWQuIFRoaXMgd2lsbCBiZWdpbiB1bmJvbmRpbmcgdGhlCgkvLyB2YWxpZGF0b3IgaWYgbm90IGFscmVhZHkgdW5ib25kaW5nICh0b21ic3RvbmVkKS4KCWlmICF2YWxpZGF0b3IuSXNKYWlsZWQoKSB7CgkJay5zbGFzaGluZ0tlZXBlci5KYWlsKGN0eCwgY29uc0FkZHIpCgl9CgoJay5zbGFzaGluZ0tlZXBlci5KYWlsVW50aWwoY3R4LCBjb25zQWRkciwgdHlwZXMuRG91YmxlU2lnbkphaWxFbmRUaW1lKQoJay5zbGFzaGluZ0tlZXBlci5Ub21ic3RvbmUoY3R4LCBjb25zQWRkcikKfQo="}}),l._v(" "),a("p",[l._v("Note, the slashing, jailing, and tombstoning calls are delegated through the "),a("code",[l._v("x/slashing")]),l._v(" module\nwhich emit informative events and finally delegate calls to the "),a("code",[l._v("x/staking")]),l._v(" module. Documentation\non slashing and jailing can be found in the "),a("RouterLink",{attrs:{to:"/.././cosmos-sdk/x/staking/spec/02_state_transitions.html"}},[l._v("x/staking spec")])],1)],1)}),[],!1,null,null,null);d.default=c.exports}}]);