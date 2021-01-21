package stakingtally

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
)

const (
	// TallyRoute determines the default tally route that points to this strategy
	TallyRoute = "staking"
)

// ValidatorGovInfo used for staking tallying
type ValidatorGovInfo struct {
	Address             sdk.ValAddress      // address of the validator operator
	BondedTokens        sdk.Int             // Power of a Validator
	DelegatorShares     sdk.Dec             // Total outstanding delegator shares
	DelegatorDeductions sdk.Dec             // Delegator deductions from validator's delegators voting independently
	Vote                govtypes.VoteOption // Vote of the validator
}

// NewValidatorGovInfo creates a ValidatorGovInfo instance
func NewValidatorGovInfo(address sdk.ValAddress, bondedTokens sdk.Int, delegatorShares,
	delegatorDeductions sdk.Dec, vote govtypes.VoteOption) ValidatorGovInfo {

	return ValidatorGovInfo{
		Address:             address,
		BondedTokens:        bondedTokens,
		DelegatorShares:     delegatorShares,
		DelegatorDeductions: delegatorDeductions,
		Vote:                vote,
	}
}
