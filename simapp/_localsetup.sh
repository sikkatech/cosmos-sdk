#!/bin/bash

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
# simd keys change-address val2 $(simd keys show -a validator --keyring-backend=test --home=$HOME/.simd) --keyring-backend=test --home=$HOME/.simd  <<< y
# simd keys add user1 --keyring-backend=test --home=$HOME/.simd
# simd tx bank send val2 $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing <<< y
# simd query bank balances $(simd keys show -a val2 --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd
# simd query bank balances $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd
# simd keys add val3 --keyring-backend=test --home=$HOME/.simd
# simd tx changepubkey change-pubkey $(simd keys show -p val3 --keyring-backend=test --home=$HOME/.simd) --from val2 --keyring-backend=test --chain-id=testing --home=$HOME/.simd <<< y
# simd keys change-address val3 $(simd keys show -a validator --keyring-backend=test --home=$HOME/.simd) --keyring-backend=test --home=$HOME/.simd  <<< y
# simd tx bank send val3 $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) 1000stake  --keyring-backend=test --home=$HOME/.simd --chain-id=testing <<< y
# simd query bank balances $(simd keys show -a val3 --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd
# simd query bank balances $(simd keys show -a user1 --keyring-backend=test --home=$HOME/.simd) --home=$HOME/.simd