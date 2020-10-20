# ADR 029: CLI wallet modification for account pubkey change

## Changelog

- 05-Oct-2020: Initial Draft

## Status

Proposed

## Context

As referenced in [ADR-028](https://github.com/sikkatech/cosmos-sdk/blob/sunny/change-pubkey/docs/architecture/adr-028-change-pubkey.md), we need to change pubkey of an account for security reasons but with current cli wallet there are few lack functionalities to take care of in case of pubkey change of an account.

One potential problem is `--sequence` management on cli wallet.  
Another potential problem is transaction signing process where `--from` flag use address instead of a key.  

## Decision

We're going to add an addition to the cli keys wallet to be able to change the address of a key.
Personally, a wallet is mapping between names and public keys, so the command should be to update the address of a key (as opposed to the pubkey).
So for example, if I had key named `alice` that had the address cosmos1abcd and pubkey cosmospub1asdfjkl.
I make a new key named `alice_new` with address `cosmos1qwer` and pubkey `cosmospub1qwertyui`.
So on chain, I make a tx to change the pubkey for address `cosmos1abcd` to `cosmospub1qwertyui`.
I can then make a command like `gaiacli keys update-key alice alice_new`. 

Signing with new key(`alice_new`) after changing `alice` account's key to `alice_new`'s one.
```sh
gaiacli tx sign XXX.json --from alice
```

**Warn**

There will be cases of different keys have same address and `--from` will work with address only when one address is available in key listing.
If you want to use a specific address but sign with existing key, you can use a new `--from-address` but still choose the key to sign with using the `--from` flag. The `--from` flag becomes more of a “sign with” flag. And the tx by default uses the address associated with the key, unless over-ridden by the `--from-address` flag

E.g. signing with address should use `--from-address` and `--from` flag.
```sh
gaiacli tx sign XXX.json --from alice_new --from-address cosmos1dcba
```

Probably can come up with better names than `--from` and `--from-address`.

e.g.
```
simd keys add test1 --keyring-backend=test
simd keys add test1_new --keyring-backend=test
simd keys update-key test1 test1_new --keyring-backend=test
simd keys show test1  --keyring-backend=test
```

## Consequences

### Positive

- We will be able to sign transaction from an account that has `unmatching` pubkey and address using this cli command.  
- Can manage several accounts with one mnemonic phase.  

### Negative

- We need to use this modified key for signing transactions, currently `“one address = one key”`, and if we use this strategy “one address = several keys”, this will make `--from` flag to use mostly key name instead of key address. In case of “one address = several keys”, we should ask to provide key name, but not only `key address`.

- If a user update wallet before changing pubkey on chain, he/she will lose access to the account. And for this case, wallet should ask the user to backup mnemonic for the original account.


### Neutral

## References

[ADR-028](https://github.com/sikkatech/cosmos-sdk/blob/sunny/change-pubkey/docs/architecture/adr-028-change-pubkey.md)