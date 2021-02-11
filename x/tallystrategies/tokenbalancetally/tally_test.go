package tokenbalancetally_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"

	"github.com/cosmos/cosmos-sdk/simapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/gov/types"
	tokenbalancetally "github.com/cosmos/cosmos-sdk/x/tallystrategies/tokenbalancetally"
)

func TestTallyNoOneVotes(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	createGoverners(t, ctx, app, []int64{5, 5, 5})

	tp := TestProposal
	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)

	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, tallyResults := tally(ctx, proposal)

	require.False(t, passes)
	require.True(t, burnDeposits)
	require.True(t, tallyResults.Equals(types.EmptyTallyResult()))
}

func TestTallyNoQuorum(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	createGoverners(t, ctx, app, []int64{2, 5, 0})

	addrs := simapp.AddTestAddrsIncremental(app, ctx, 1, sdk.NewInt(10000000))

	tp := TestProposal
	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	err = app.GovKeeper.AddVote(ctx, proposalID, addrs[0], types.OptionYes)
	require.Nil(t, err)

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)
	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, _ := tally(ctx, proposal)
	require.False(t, passes)
	require.True(t, burnDeposits)
}

func TestTallyGovernersAllYes(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	addrs := createGoverners(t, ctx, app, []int64{5, 5, 5})
	tp := TestProposal

	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, addrs[0], types.OptionYes))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, addrs[1], types.OptionYes))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, addrs[2], types.OptionYes))

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)
	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, tallyResults := tally(ctx, proposal)

	require.True(t, passes)
	require.False(t, burnDeposits)
	require.False(t, tallyResults.Equals(types.EmptyTallyResult()))
}

func TestTallyGoverners51No(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	govAccAddrs := createGoverners(t, ctx, app, []int64{5, 6, 0})

	tp := TestProposal
	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[0], types.OptionYes))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[1], types.OptionNo))

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)
	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, _ := tally(ctx, proposal)

	require.False(t, passes)
	require.False(t, burnDeposits)
}

func TestTallyGoverners51Yes(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	govAccAddrs := createGoverners(t, ctx, app, []int64{5, 6, 0})

	tp := TestProposal
	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[0], types.OptionNo))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[1], types.OptionYes))

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)
	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, tallyResults := tally(ctx, proposal)

	require.True(t, passes)
	require.False(t, burnDeposits)
	require.False(t, tallyResults.Equals(types.EmptyTallyResult()))
}

func TestTallyGovernersVetoed(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	govAccAddrs := createGoverners(t, ctx, app, []int64{6, 6, 7})

	tp := TestProposal
	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[0], types.OptionYes))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[1], types.OptionYes))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[2], types.OptionNoWithVeto))

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)
	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, tallyResults := tally(ctx, proposal)

	require.False(t, passes)
	require.True(t, burnDeposits)
	require.False(t, tallyResults.Equals(types.EmptyTallyResult()))
}

func TestTallyGovernersAbstainPasses(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	govAccAddrs := createGoverners(t, ctx, app, []int64{6, 6, 7})

	tp := TestProposal
	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[0], types.OptionAbstain))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[1], types.OptionNo))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[2], types.OptionYes))

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)
	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, tallyResults := tally(ctx, proposal)

	require.True(t, passes)
	require.False(t, burnDeposits)
	require.False(t, tallyResults.Equals(types.EmptyTallyResult()))
}

func TestTallyGovernersAbstainFails(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	govAccAddrs := createGoverners(t, ctx, app, []int64{6, 6, 7})

	tp := TestProposal
	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[0], types.OptionAbstain))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[1], types.OptionYes))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddrs[2], types.OptionNo))

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)
	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, tallyResults := tally(ctx, proposal)

	require.False(t, passes)
	require.False(t, burnDeposits)
	require.False(t, tallyResults.Equals(types.EmptyTallyResult()))
}

func TestTallyGovernersNonVoter(t *testing.T) {
	app := simapp.Setup(false)
	ctx := app.BaseApp.NewContext(false, tmproto.Header{})

	govAccAddrs := createGoverners(t, ctx, app, []int64{5, 6, 7})
	govAccAddr1, govAccAddr2 := govAccAddrs[0], govAccAddrs[1]

	tp := TestProposal
	proposal, err := app.GovKeeper.SubmitProposal(ctx, tp)
	require.NoError(t, err)
	proposalID := proposal.ProposalId
	proposal.Status = types.StatusVotingPeriod
	app.GovKeeper.SetProposal(ctx, proposal)

	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddr1, types.OptionYes))
	require.NoError(t, app.GovKeeper.AddVote(ctx, proposalID, govAccAddr2, types.OptionNo))

	proposal, ok := app.GovKeeper.GetProposal(ctx, proposalID)
	require.True(t, ok)
	tally := tokenbalancetally.NewTokenBalanceTallyHandler(app.GovKeeper, app.BankKeeper, govToken)
	passes, burnDeposits, tallyResults := tally(ctx, proposal)

	require.False(t, passes)
	require.False(t, burnDeposits)
	require.False(t, tallyResults.Equals(types.EmptyTallyResult()))
}
