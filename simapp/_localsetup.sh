#!/bin/bash

################ keyring-backend=test for change-pubkey and update-key
rm -rf $HOME/.simd/

cd $HOME

simd init --chain-id=testing testing --home=$HOME/.simd
simd keys add validator --keyring-backend=test --home=$HOME/.simd
simd add-genesis-account $(simd keys show validator -a --keyring-backend=test --home=$HOME/.simd) 1000000000validatortoken,1000000000stake --home=$HOME/.simd
simd gentx validator --keyring-backend=test --home=$HOME/.simd --chain-id testing
simd collect-gentxs --home=$HOME/.simd

simd start --home=$HOME/.simd

# simd keys add val2 --keyring-backend=test --home=$HOME/.simd
# simd tx changepubkey change-pubkey $(simd keys show -p val2 --keyring-backend=test --home=$HOME/.simd) --from validator --keyring-backend=test --chain-id=testing --home=$HOME/.simd <<< y
# simd keys update-key validator val2 --keyring-backend=test --home=$HOME/.simd  <<< y
# simd keys add user1 --keyring-backend=test --home=$HOME/.simd
# simd tx bank send validator $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing <<< y
# simd query bank balances $(simd keys show -a validator --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd
# simd query bank balances $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd
# simd keys add val3 --keyring-backend=test --home=$HOME/.simd
# simd tx changepubkey change-pubkey $(simd keys show -p val3 --keyring-backend=test --home=$HOME/.simd) --from validator --keyring-backend=test --chain-id=testing --home=$HOME/.simd <<< y
# simd keys update-key validator val3 --keyring-backend=test --home=$HOME/.simd  <<< y
# simd tx bank send validator $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing <<< y
# simd query bank balances $(simd keys show -a validator --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd
# simd query bank balances $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd

################ keyring-backend=os for change-pubkey and update-key

# rm -rf $HOME/.simd/

# cd $HOME

# simd init --chain-id=testing testing --home=$HOME/.simd
# simd keys add validator --keyring-backend=os --home=$HOME/.simd
# simd add-genesis-account $(simd keys show validator -a --keyring-backend=os --home=$HOME/.simd) 1000000000validatortoken,1000000000stake --home=$HOME/.simd
# simd gentx validator --keyring-backend=os --home=$HOME/.simd --chain-id testing
# simd collect-gentxs --home=$HOME/.simd

# simd start --home=$HOME/.simd

# # simd keys add val2 --keyring-backend=os --home=$HOME/.simd
# # simd tx changepubkey change-pubkey $(simd keys show -p val2 --keyring-backend=os --home=$HOME/.simd) --from validator --keyring-backend=os --chain-id=testing --home=$HOME/.simd
# # simd keys update-key validator val2 --keyring-backend=os --home=$HOME/.simd
# # simd keys add user1 --keyring-backend=os --home=$HOME/.simd
# # simd tx bank send validator $(simd keys show -a user1 --keyring-backend=os --home=$HOME/.simd) 1000stake  --keyring-backend=os --home=$HOME/.simd --chain-id=testing
# # simd query bank balances $(simd keys show -a validator --keyring-backend=os --home=$HOME/.simd) --home=$HOME/.simd
# # simd query bank balances $(simd keys show -a user1 --keyring-backend=os --home=$HOME/.simd) --home=$HOME/.simd
# # simd keys add val3 --keyring-backend=os --home=$HOME/.simd
# # simd tx changepubkey change-pubkey $(simd keys show -p val3 --keyring-backend=os --home=$HOME/.simd) --from validator --keyring-backend=os --chain-id=testing --home=$HOME/.simd
# # simd keys update-key validator val3 --keyring-backend=os --home=$HOME/.simd
# # simd tx bank send validator $(simd keys show -a user1 --keyring-backend=os --home=$HOME/.simd) 1000stake  --keyring-backend=os --home=$HOME/.simd --chain-id=testing
# # simd query bank balances $(simd keys show -a validator --keyring-backend=os --home=$HOME/.simd) --home=$HOME/.simd
# # simd query bank balances $(simd keys show -a user1 --keyring-backend=os --home=$HOME/.simd) --home=$HOME/.simd



################ keyring-backend=file for change-pubkey and update-key

# rm -rf $HOME/.simd/

# cd $HOME

# simd init --chain-id=testing testing --home=$HOME/.simd
# simd keys add validator --keyring-backend=file --home=$HOME/.simd
# simd add-genesis-account $(simd keys show validator -a --keyring-backend=file --home=$HOME/.simd) 1000000000validatortoken,1000000000stake --home=$HOME/.simd
# simd gentx validator --keyring-backend=file --home=$HOME/.simd --chain-id testing
# simd collect-gentxs --home=$HOME/.simd

# simd start --home=$HOME/.simd

# # simd keys add val2 --keyring-backend=file --home=$HOME/.simd
# # simd tx changepubkey change-pubkey $(simd keys show -p val2 --keyring-backend=file --home=$HOME/.simd) --from validator --keyring-backend=file --chain-id=testing --home=$HOME/.simd
# # simd keys update-key validator val2 --keyring-backend=file --home=$HOME/.simd
# # simd keys add user1 --keyring-backend=file --home=$HOME/.simd
# # simd tx bank send validator $(simd keys show -a user1 --keyring-backend=file --home=$HOME/.simd) 1000stake  --keyring-backend=file --home=$HOME/.simd --chain-id=testing
# # simd query bank balances $(simd keys show -a validator --keyring-backend=file --home=$HOME/.simd) --home=$HOME/.simd
# # simd query bank balances $(simd keys show -a user1 --keyring-backend=file --home=$HOME/.simd) --home=$HOME/.simd
# # simd keys add val3 --keyring-backend=file --home=$HOME/.simd
# # simd tx changepubkey change-pubkey $(simd keys show -p val3 --keyring-backend=file --home=$HOME/.simd) --from validator --keyring-backend=file --chain-id=testing --home=$HOME/.simd
# # simd keys update-key validator val3 --keyring-backend=file --home=$HOME/.simd
# # simd tx bank send validator $(simd keys show -a user1 --keyring-backend=file --home=$HOME/.simd) 1000stake  --keyring-backend=file --home=$HOME/.simd --chain-id=testing
# # simd query bank balances $(simd keys show -a validator --keyring-backend=file --home=$HOME/.simd) --home=$HOME/.simd
# # simd query bank balances $(simd keys show -a user1 --keyring-backend=file --home=$HOME/.simd) --home=$HOME/.simd

################ adding new address with --address and --recover phase for unmatching address and pubkey pair

# simd keys add new_account1 --keyring-backend=test --home=$HOME/.simd
# simd keys delete new_account1 --keyring-backend=test --home=$HOME/.simd
# simd keys add fansy_account1 --address cosmos1ttn9n4zjswcss8y4amn5xzmu4g4w47yg5jcq3z --keyring-backend=test --home=$HOME/.simd
# simd keys delete fansy_account1 --keyring-backend=test --home=$HOME/.simd

# export VAL2_MNEMONIC="bone trip tent ball solar voyage uphold maid nation airport plug panic clump track neither mercy trigger sick panther diary lyrics episode sudden rifle"
# simd keys add val2 --keyring-backend=test --home=$HOME/.simd --recover <<< $VAL2_MNEMONIC
# simd tx changepubkey change-pubkey $(simd keys show -p val2 --keyring-backend=test --home=$HOME/.simd) --from validator --keyring-backend=test --chain-id=testing --home=$HOME/.simd <<< y
# simd keys delete val2 --keyring-backend=test --home=$HOME/.simd  <<< y
# export VALIDATOR_ADDR=$(simd keys show -a validator --keyring-backend=test --home=$HOME/.simd)
# simd keys delete validator --keyring-backend=test --home=$HOME/.simd  <<< y
# simd keys add validator --address=$VALIDATOR_ADDR --keyring-backend=test --home=$HOME/.simd --recover <<< $VAL2_MNEMONIC
# simd keys add user1 --keyring-backend=test --home=$HOME/.simd
# simd tx bank send validator $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing <<< y
# simd query bank balances $(simd keys show -a validator --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd
# simd query bank balances $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd

################ adding new address with --address and --recover phase v2 (modify address as an identifier)

# export VAL2_MNEMONIC="bone trip tent ball solar voyage uphold maid nation airport plug panic clump track neither mercy trigger sick panther diary lyrics episode sudden rifle"
# simd keys add val2 --keyring-backend=test --home=$HOME/.simd --recover <<< $VAL2_MNEMONIC
# simd tx changepubkey change-pubkey $(simd keys show -p val2 --keyring-backend=test --home=$HOME/.simd) --from validator --keyring-backend=test --chain-id=testing --home=$HOME/.simd <<< y
# simd keys add new_validator --address=$VALIDATOR_ADDR --keyring-backend=test --home=$HOME/.simd --recover <<< $VAL2_MNEMONIC
# simd keys add user1 --keyring-backend=test --home=$HOME/.simd
# simd tx bank send new_validator $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing <<< y
# simd query bank balances $(simd keys show -a validator --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd
# simd query bank balances $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd

# multiple keys with same address check
# simd tx bank send $(simd keys show -a new_validator --keyring-backend=test --home=$HOME/.simd) $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing <<< y

# sending from an address identifier (single key with the address)
# simd tx bank send $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) $(simd keys show -a validator --keyring-backend=test --home=$HOME/.simd) 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing <<< y

# After updating the public key of the account, can still make a new entry with the original pubkey, creating the same address again
# export VAL2_MNEMONIC="bone trip tent ball solar voyage uphold maid nation airport plug panic clump track neither mercy trigger sick panther diary lyrics episode sudden rifle"
# simd keys add val2 --keyring-backend=test --home=$HOME/.simd --recover <<< $VAL2_MNEMONIC
# simd keys update-key val2 validator --keyring-backend=test --home=$HOME/.simd  <<< y
# simd keys add val5 --keyring-backend=test --home=$HOME/.simd --recover <<< $VAL2_MNEMONIC
