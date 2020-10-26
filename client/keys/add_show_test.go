package keys

import (
	"context"
	"fmt"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/tendermint/tendermint/libs/cli"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func Test_runAddShowCmds(t *testing.T) {
	addCmd := AddKeyCommand()
	addCmd.Flags().AddFlagSet(Commands("home").PersistentFlags())

	mockIn := testutil.ApplyMockIODiscardOutErr(addCmd)
	kbHome := t.TempDir()

	kb, err := keyring.New(sdk.KeyringServiceName(), keyring.BackendTest, kbHome, mockIn)
	require.NoError(t, err)

	clientCtx := client.Context{}.WithKeyringDir(kbHome)
	ctx := context.WithValue(context.Background(), client.ClientContextKey, &clientCtx)

	t.Cleanup(func() {
		_ = kb.Delete("keyname1")
		_ = kb.Delete("keyname2")
	})

	key1Address := "cosmos18ls2uvzhjcp4kfcdgk0vtcv846wgwj2v479ulf"
	key1PubKey := "cosmospub1addwnpepqte5pgcfq0gjvev0w4kqm7le5dvn6m8802x2fkaxkuwfvs67zrpys2z4qrn"

	key2Address := key1Address
	key2PubKey := "cosmospub1addwnpepqgu2a56frj8st792m7jn4rw8ftukzlnd6xmj9wwqxszp7aq7ygn0szyyhym"
	// set --pubkey and --address flag at the same time
	addCmd.SetArgs([]string{
		"keyname1",
		fmt.Sprintf("--%s=%s", flags.FlagHome, kbHome),
		fmt.Sprintf("--%s=%s", cli.OutputFlag, OutputFormatText),
		fmt.Sprintf("--%s=%s", flags.FlagKeyAlgorithm, string(hd.Secp256k1Type)),
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
		fmt.Sprintf("--%s=%s", FlagPublicKey, key1PubKey),
		fmt.Sprintf("--%s=%s", flagAddress, key1Address),
	})

	require.NoError(t, addCmd.ExecuteContext(ctx))

	showCmd := ShowKeysCmd()
	showCmd.Flags().AddFlagSet(Commands("home").PersistentFlags())
	showMockIn := testutil.ApplyMockIODiscardOutErr(showCmd)

	showKb, err := keyring.New(sdk.KeyringServiceName(), keyring.BackendTest, kbHome, showMockIn)
	require.NoError(t, err)

	showClientCtx := client.Context{}.WithKeyring(showKb)
	showCtx := context.WithValue(context.Background(), client.ClientContextKey, &showClientCtx)

	// try querying for keyname1
	showCmd.SetArgs([]string{
		"keyname1",
		fmt.Sprintf("--%s=%s", flags.FlagHome, kbHome),
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
	})
	require.NoError(t, showCmd.ExecuteContext(showCtx))
	// try querying for keyname1 by address
	showCmd.SetArgs([]string{
		key1Address,
		fmt.Sprintf("--%s=%s", flags.FlagHome, kbHome),
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
	})
	require.NoError(t, showCmd.ExecuteContext(showCtx))

	// set --pubkey and --address flag at the same time
	addCmd.SetArgs([]string{
		"keyname2",
		fmt.Sprintf("--%s=%s", flags.FlagHome, kbHome),
		fmt.Sprintf("--%s=%s", cli.OutputFlag, OutputFormatText),
		fmt.Sprintf("--%s=%s", flags.FlagKeyAlgorithm, string(hd.Secp256k1Type)),
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
		fmt.Sprintf("--%s=%s", FlagPublicKey, key2PubKey),
		fmt.Sprintf("--%s=%s", flagAddress, key2Address),
	})

	require.NoError(t, addCmd.ExecuteContext(ctx))

	// try querying for keyname2
	showCmd.SetArgs([]string{
		"keyname2",
		fmt.Sprintf("--%s=%s", flags.FlagHome, kbHome),
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
	})
	require.NoError(t, showCmd.ExecuteContext(showCtx))
	// try querying for keyname2 by address
	showCmd.SetArgs([]string{
		key2Address,
		fmt.Sprintf("--%s=%s", flags.FlagHome, kbHome),
		fmt.Sprintf("--%s=%s", flags.FlagKeyringBackend, keyring.BackendTest),
	})
	err = showCmd.ExecuteContext(showCtx)
	require.Error(t, err)
	require.Contains(t, err.Error(), "multiple keys exist with address")
}
