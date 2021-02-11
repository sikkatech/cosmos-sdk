package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/gov/types"
)

func (k Keeper) Tally(ctx sdk.Context, proposal types.Proposal) (passes bool, burnDeposits bool, tallyResults types.TallyResult) {
	tally := k.TallyRouter().GetRoute(proposal.TallyRoute())
	if tally == nil {
		tally = k.TallyRouter().GetRoute(types.RootTallyRoute)
	}
	return tally(ctx, proposal)
}
