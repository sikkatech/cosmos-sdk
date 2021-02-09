package tokenbalancetally

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	govkeeper "github.com/cosmos/cosmos-sdk/x/gov/keeper"
	"github.com/cosmos/cosmos-sdk/x/gov/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
)

// NewTokenBalanceTallyHandler creates a new governance tally strategy for a giving voting to token balances for a particular denom
func NewTokenBalanceTallyHandler(gk govkeeper.Keeper, bk govtypes.BankKeeper, denom string) govtypes.TallyStrategy {
	return func(ctx sdk.Context, proposal govtypes.Proposal) (passes bool, burnDeposits bool, tallyResults govtypes.TallyResult) {
		return handleTokenBalanceTally(ctx, proposal, gk, bk, denom)
	}
}

// TODO: Break into several smaller functions for clarity

// Tally iterates over the votes and updates the tally of a proposal based on the voting power of the
// voters
func handleTokenBalanceTally(ctx sdk.Context, proposal govtypes.Proposal, gk govkeeper.Keeper, bk govtypes.BankKeeper, denom string) (passes bool, burnDeposits bool, tallyResults govtypes.TallyResult) {
	results := make(map[govtypes.VoteOption]sdk.Dec)
	results[govtypes.OptionYes] = sdk.ZeroDec()
	results[govtypes.OptionAbstain] = sdk.ZeroDec()
	results[govtypes.OptionNo] = sdk.ZeroDec()
	results[govtypes.OptionNoWithVeto] = sdk.ZeroDec()

	totalVotingPower := sdk.ZeroDec()

	gk.IterateVotes(ctx, proposal.ProposalId, func(vote govtypes.Vote) bool {
		voter, err := sdk.AccAddressFromBech32(vote.Voter)

		if err != nil {
			panic(err)
		}

		votingPower := bk.GetBalance(ctx, voter, denom).Amount

		results[vote.Option] = results[vote.Option].Add(votingPower.ToDec())
		totalVotingPower = totalVotingPower.Add(votingPower.ToDec())

		gk.DeleteVote(ctx, vote.ProposalId, voter)
		return false
	})

	tallyParams := gk.GetTallyParams(ctx)
	tallyResults = govtypes.NewTallyResultFromMap(results)

	denomTotalSupply := bk.GetSupply(ctx).GetTotal().AmountOf(denom)
	// If there is no staked coins, the proposal fails
	if denomTotalSupply.IsZero() {
		return false, false, tallyResults
	}

	// If there is not enough quorum of votes, the proposal fails
	percentVoting := totalVotingPower.Quo(denomTotalSupply.ToDec())
	if percentVoting.LT(tallyParams.Quorum) {
		return false, true, tallyResults
	}

	// If no one votes (everyone abstains), proposal fails
	if totalVotingPower.Sub(results[types.OptionAbstain]).Equal(sdk.ZeroDec()) {
		return false, false, tallyResults
	}

	// If more than 1/3 of voters veto, proposal fails
	if results[types.OptionNoWithVeto].Quo(totalVotingPower).GT(tallyParams.VetoThreshold) {
		return false, true, tallyResults
	}

	// If more than 1/2 of non-abstaining voters vote Yes, proposal passes
	if results[types.OptionYes].Quo(totalVotingPower.Sub(results[types.OptionAbstain])).GT(tallyParams.Threshold) {
		return true, false, tallyResults
	}

	// If more than 1/2 of non-abstaining voters vote No, proposal fails
	return false, false, tallyResults
}
