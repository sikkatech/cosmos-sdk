package keys

import (
	"bytes"
	"fmt"
	"testing"

	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func Test_runUpdateKeyCmd(t *testing.T) {
	// Now add a temporary keybase
	kbHome := t.TempDir()
	cmd := UpdateKeyCommand()
	cmd.Flags().AddFlagSet(Commands(kbHome).PersistentFlags())
	mockIn := testutil.ApplyMockIODiscardOutErr(cmd)

	yesF, _ := cmd.Flags().GetBool(flagYes)
	forceF, _ := cmd.Flags().GetBool(flagForce)

	require.False(t, yesF)
	require.False(t, forceF)

	fakeKeyName1 := "runUpdateCmd_Key1"
	fakeKeyName2 := "runUpdateCmd_Key2"

	path := sdk.GetConfig().GetFullFundraiserPath()

	kb, err := keyring.New(sdk.KeyringServiceName(), keyring.BackendTest, kbHome, mockIn)
	require.NoError(t, err)

	_, err = kb.NewAccount(fakeKeyName1, testutil.TestMnemonic, "", path, hd.Secp256k1, sdk.AccAddress{})
	require.NoError(t, err)

	_, _, err = kb.NewMnemonic(fakeKeyName2, keyring.English, sdk.FullFundraiserPath, hd.Secp256k1)
	require.NoError(t, err)

	// Now there is a confirmation
	cmd.SetArgs([]string{
		fakeKeyName1,
		fakeKeyName2,
		fmt.Sprintf("--%s=%s", flags.FlagHome, kbHome),
		fmt.Sprintf("--%s=true", flagYes),
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
	})
	require.NoError(t, cmd.Execute())

	info1, err := kb.Key(fakeKeyName1)
	require.NoError(t, err)

	info2, err := kb.Key(fakeKeyName2)
	require.NoError(t, err)

	require.True(t, bytes.Equal(info1.GetPubKey().Bytes(), info2.GetPubKey().Bytes()))
	require.False(t, bytes.Equal(info1.GetAddress().Bytes(), info2.GetAddress().Bytes()))
}
