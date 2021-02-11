package tokenbalancetally_test

import (
	"bytes"
	"strconv"
	"testing"

	"github.com/cosmos/cosmos-sdk/simapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/cosmos/cosmos-sdk/x/gov/types"
)

var (
	TestProposal = types.NewTextProposal("Test", "description", "staking")
	govToken     = "tbgov"
)

func createGoverners(t *testing.T, ctx sdk.Context, app *simapp.SimApp, powers []int64) []sdk.AccAddress {
	addrs := addTestAddrs(app, ctx, powers, createIncrementalAccounts)

	return addrs
}

// createIncrementalAccounts is a strategy used by addTestAddrs() in order to generated addresses in ascending order.
func createIncrementalAccounts(accNum int) []sdk.AccAddress {
	var addresses []sdk.AccAddress
	var buffer bytes.Buffer

	// start at 100 so we can make up to 999 test addresses with valid test addresses
	for i := 100; i < (accNum + 100); i++ {
		numString := strconv.Itoa(i)
		buffer.WriteString("A58856F0FD53BF058B4909A21AEC019107BA6") //base address string

		buffer.WriteString(numString) //adding on final two digits to make addresses unique
		res, _ := sdk.AccAddressFromHex(buffer.String())
		bech := res.String()
		addr, _ := simapp.TestAddr(buffer.String(), bech)

		addresses = append(addresses, addr)
		buffer.Reset()
	}

	return addresses
}

func addTestAddrs(app *simapp.SimApp, ctx sdk.Context, powers []int64, strategy simapp.GenerateAccountStrategy) []sdk.AccAddress {
	accNum := len(powers)
	totalPower := int64(0)
	for _, power := range powers {
		totalPower += power
	}
	testAddrs := strategy(accNum)

	setGovTokenTotalSupply(app, ctx, sdk.NewInt(totalPower))

	// fill all the addresses with some coins, set the loose pool tokens simultaneously
	for i, addr := range testAddrs {
		saveAccount(app, ctx, addr, sdk.NewCoins(sdk.NewCoin(govToken, sdk.NewInt(powers[i]))))
	}

	return testAddrs
}

// saveAccount saves the provided account into the simapp with balance based on initCoins.
func saveAccount(app *simapp.SimApp, ctx sdk.Context, addr sdk.AccAddress, initCoins sdk.Coins) {
	acc := app.AccountKeeper.NewAccountWithAddress(ctx, addr)
	app.AccountKeeper.SetAccount(ctx, acc)
	err := app.BankKeeper.AddCoins(ctx, addr, initCoins)
	if err != nil {
		panic(err)
	}
}

// setTotalSupply provides the total supply based on accAmt * totalAccounts.
func setGovTokenTotalSupply(app *simapp.SimApp, ctx sdk.Context, totalAmt sdk.Int) {
	totalSupply := sdk.NewCoins(sdk.NewCoin(govToken, totalAmt))
	prevSupply := app.BankKeeper.GetSupply(ctx)
	app.BankKeeper.SetSupply(ctx, banktypes.NewSupply(prevSupply.GetTotal().Add(totalSupply...)))
}
