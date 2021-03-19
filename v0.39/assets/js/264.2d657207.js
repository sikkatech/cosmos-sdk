(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{875:function(e,t,n){"use strict";n.r(t);var a=n(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"end-block"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#end-block"}},[e._v("#")]),e._v(" End-Block")]),e._v(" "),n("p",[e._v("Each abci end block call, the operations to update queues and validator set\nchanges are specified to execute.")]),e._v(" "),n("h2",{attrs:{id:"validator-set-changes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validator-set-changes"}},[e._v("#")]),e._v(" Validator Set Changes")]),e._v(" "),n("p",[e._v("The staking validator set is updated during this process by state transitions\nthat run at the end of every block. As a part of this process any updated\nvalidators are also returned back to Tendermint for inclusion in the Tendermint\nvalidator set which is responsible for validating Tendermint messages at the\nconsensus layer. Operations are as following:")]),e._v(" "),n("ul",[n("li",[e._v("the new validator set is taken as the top "),n("code",[e._v("params.MaxValidators")]),e._v(" number of\nvalidators retrieved from the "),n("code",[e._v("ValidatorsByPower")]),e._v(" index")]),e._v(" "),n("li",[e._v("the previous validator set is compared with the new validator set:\n"),n("ul",[n("li",[e._v("missing validators begin unbonding and their "),n("code",[e._v("Tokens")]),e._v(" are transferred from the\n"),n("code",[e._v("BondedPool")]),e._v(" to the "),n("code",[e._v("NotBondedPool")]),e._v(" "),n("code",[e._v("ModuleAccount")])]),e._v(" "),n("li",[e._v("new validators are instantly bonded and their "),n("code",[e._v("Tokens")]),e._v(" are transferred from the\n"),n("code",[e._v("NotBondedPool")]),e._v(" to the "),n("code",[e._v("BondedPool")]),e._v(" "),n("code",[e._v("ModuleAccount")])])])])]),e._v(" "),n("p",[e._v("In all cases, any validators leaving or entering the bonded validator set or\nchanging balances and staying within the bonded validator set incur an update\nmessage reporting their new consensus power which is passed back to Tendermint.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("LastTotalPower")]),e._v(" and "),n("code",[e._v("LastValidatorsPower")]),e._v(" hold the state of the total power\nand validator power from the end of the last block, and are used to check for\nchanges that have occured in "),n("code",[e._v("ValidatorsByPower")]),e._v(" and the total new power, which\nis calculated during "),n("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"queues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#queues"}},[e._v("#")]),e._v(" Queues")]),e._v(" "),n("p",[e._v("Within staking, certain state-transitions are not instantaneous but take place\nover a duration of time (typically the unbonding period). When these\ntransitions are mature certain operations must take place in order to complete\nthe state operation. This is achieved through the use of queues which are\nchecked/processed at the end of each block.")]),e._v(" "),n("h3",{attrs:{id:"unbonding-validators"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unbonding-validators"}},[e._v("#")]),e._v(" Unbonding Validators")]),e._v(" "),n("p",[e._v('When a validator is kicked out of the bonded validator set (either through\nbeing jailed, or not having sufficient bonded tokens) it begins the unbonding\nprocess along with all its delegations begin unbonding (while still being\ndelegated to this validator). At this point the validator is said to be an\n"unbonding validator", whereby it will mature to become an "unbonded validator"\nafter the unbonding period has passed.')]),e._v(" "),n("p",[e._v("Each block the validator queue is to be checked for mature unbonding validators\n(namely with a completion time <= current time and completion height <= current\nblock height). At this point any mature validators which do not have any\ndelegations remaining are deleted from state. For all other mature unbonding\nvalidators that still have remaining delegations, the "),n("code",[e._v("validator.Status")]),e._v(" is\nswitched from "),n("code",[e._v("types.Unbonding")]),e._v(" to\n"),n("code",[e._v("types.Unbonded")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"unbonding-delegations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unbonding-delegations"}},[e._v("#")]),e._v(" Unbonding Delegations")]),e._v(" "),n("p",[e._v("Complete the unbonding of all mature "),n("code",[e._v("UnbondingDelegations.Entries")]),e._v(" within the\n"),n("code",[e._v("UnbondingDelegations")]),e._v(" queue with the following procedure:")]),e._v(" "),n("ul",[n("li",[e._v("transfer the balance coins to the delegator's wallet address")]),e._v(" "),n("li",[e._v("remove the mature entry from "),n("code",[e._v("UnbondingDelegation.Entries")])]),e._v(" "),n("li",[e._v("remove the "),n("code",[e._v("UnbondingDelegation")]),e._v(" object from the store if there are no\nremaining entries.")])]),e._v(" "),n("h3",{attrs:{id:"redelegations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redelegations"}},[e._v("#")]),e._v(" Redelegations")]),e._v(" "),n("p",[e._v("Complete the unbonding of all mature "),n("code",[e._v("Redelegation.Entries")]),e._v(" within the\n"),n("code",[e._v("Redelegations")]),e._v(" queue with the following procedure:")]),e._v(" "),n("ul",[n("li",[e._v("remove the mature entry from "),n("code",[e._v("Redelegation.Entries")])]),e._v(" "),n("li",[e._v("remove the "),n("code",[e._v("Redelegation")]),e._v(" object from the store if there are no\nremaining entries.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);