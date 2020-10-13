#!/bin/bash

rm -rf $HOME/.simd/

cd $HOME

simd init --chain-id=testing testing --home=$HOME/.simd
simd keys add validator --keyring-backend=test --home=$HOME/.simd
simd add-genesis-account $(simd keys show validator -a --keyring-backend=test --home=$HOME/.simd) 1000000000validatortoken,1000000000stake --home=$HOME/.simd
simd gentx validator --keyring-backend=test --home=$HOME/.simd --chain-id testing
simd collect-gentxs --home=$HOME/.simd

simd start --home=$HOME/.simd

# simd tx bank send validator cosmos1gyq9gpp5geh0a0qhyvckjexc848rkp3dgtfg82 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing
# simd keys show -a validator --keyring-backend=test --home=$HOME/.simd
# cosmos1flthcq9e0jv957q60y649ll8jq3j2gz0w3fk7n
# cosmos1gyq9gpp5geh0a0qhyvckjexc848rkp3dgtfg82

# simd keys show test1_new  --keyring-backend=test
# - name: test1_new
#   type: local
#   address: cosmos1qrg2mj7p44kd4uvdquq7mk8x8hs4nsetn6dc4m
#   pubkey: cosmospub1addwnpepqv9zyn03cdjsylsdg26m8x3tpmkccsa6989948n6nwk84qs407fpvs2lk95
#   mnemonic: ""
#   threshold: 0
#   pubkeys: []
# simd keys change-address test1_new cosmos16cnu2pxhg66zau3rua8nvuha7jm7glrq0wtpkc --keyring-backend=test
# Key address will be updated. Continue? [y/N]: y
# simd keys show test1_new  --keyring-backend=test
# - name: test1_new
#   type: local
#   address: cosmos16cnu2pxhg66zau3rua8nvuha7jm7glrq0wtpkc
#   pubkey: cosmospub1addwnpepqv9zyn03cdjsylsdg26m8x3tpmkccsa6989948n6nwk84qs407fpvs2lk95
#   mnemonic: ""
#   threshold: 0
#   pubkeys: [] 

# simd tx bank send validator cosmos1gyq9gpp5geh0a0qhyvckjexc848rkp3dgtfg82 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing
# {
#   "height": "85",
#   "txhash": "9866132B8977969F4B71797EFFEB98C4FA812F6673E8BFEFD14BDDACC5754522",
#   "codespace": "",
#   "code": 0,
#   "data": "0A060A0473656E64",
#   "raw_log": "[{\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"send\"},{\"key\":\"sender\",\"value\":\"cosmos1flthcq9e0jv957q60y649ll8jq3j2gz0w3fk7n\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"cosmos1gyq9gpp5geh0a0qhyvckjexc848rkp3dgtfg82\"},{\"key\":\"sender\",\"value\":\"cosmos1flthcq9e0jv957q60y649ll8jq3j2gz0w3fk7n\"},{\"key\":\"amount\",\"value\":\"1000stake\"}]}]}]",
#   "logs": [
#     {
#       "msg_index": 0,
#       "log": "",
#       "events": [
#         {
#           "type": "message",
#           "attributes": [
#             {
#               "key": "action",
#               "value": "send"
#             },
#             {
#               "key": "sender",
#               "value": "cosmos1flthcq9e0jv957q60y649ll8jq3j2gz0w3fk7n"
#             },
#             {
#               "key": "module",
#               "value": "bank"
#             }
#           ]
#         },
#         {
#           "type": "transfer",
#           "attributes": [
#             {
#               "key": "recipient",
#               "value": "cosmos1gyq9gpp5geh0a0qhyvckjexc848rkp3dgtfg82"
#             },
#             {
#               "key": "sender",
#               "value": "cosmos1flthcq9e0jv957q60y649ll8jq3j2gz0w3fk7n"
#             },
#             {
#               "key": "amount",
#               "value": "1000stake"
#             }
#           ]
#         }
#       ]
#     }
#   ],
#   "info": "",
#   "gas_wanted": "200000",
#   "gas_used": "50138",
#   "tx": null,
#   "timestamp": ""
# }