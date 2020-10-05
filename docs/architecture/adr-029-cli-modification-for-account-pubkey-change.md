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
I can then make a command like `gaiacli keys change-address alice_new cosmos1abcd`.

Signing with new key(`alice_new`) after changing `alice_new` account's address to `alice`'s one.
```sh
gaiacli tx sign XXX.json --from alice_new
```
We won't allow `--from` to use an address.
If you want to use a specific address, you can use a new `--from-address` but still choose the key to sign with using the `--from` flag. The `--from` flag becomes more of a “sign with” flag. And the tx by default uses the address associated with the key, unless over-ridden by the `--from-address` flag

E.g. signing with address should use `--from-address` and `--from` flag.
```sh
gaiacli tx sign XXX.json --from alice_new --from-address cosmos1abcd
```

Probably can come up with better names than --from and --from-address

## Consequences

### Positive

- We will be able to sign transaction from an account that has `unmatching` pubkey and address using this cli command.

### Negative

- We need to use this modified key for signing transactions, currently `“one address = one key”`, and if we use this strategy “one address = several keys”, this will make `--from` flag to use only key name instead of key address.

- And `alice` key won’t be useful any more as chain only think as `alice_new` public key and address set is the correct one.
`alice` key will be only useful when user revert pubkey from `alice_new` to `alice`.

- Another potential problem is since sequence will be managed by pubkey basis, cli wallet should be fetching sequence by pubkey instead of sequence by account as it is now.

### Neutral

## References

[ADR-028](https://github.com/sikkatech/cosmos-sdk/blob/sunny/change-pubkey/docs/architecture/adr-028-change-pubkey.md)