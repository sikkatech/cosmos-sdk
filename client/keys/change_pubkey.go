package keys

import (
	"bufio"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/input"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// ChangePubKeyCommand defines a keys command to add a generated or recovered private key to keybase.
func ChangePubKeyCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "change-pubkey <name> <target_pubkey>",
		Short: "Set a pubkey of an account and save to disk",
		Long:  `Set a pubkey of an account and save to disk`,
		Args:  cobra.ExactArgs(2),
		RunE:  runChangePubKeyCmd,
	}

	cmd.Flags().BoolP(flagYes, "y", false, "Skip confirmation prompt when updating offline or ledger key references")
	cmd.Flags().BoolP(flagForce, "f", false, "Update the key address unconditionally without asking for the passphrase. Deprecated.")

	cmd.SetOut(cmd.OutOrStdout())
	cmd.SetErr(cmd.ErrOrStderr())

	return cmd
}

func runChangePubKeyCmd(cmd *cobra.Command, args []string) error {
	buf := bufio.NewReader(cmd.InOrStdin())

	backend, _ := cmd.Flags().GetString(flags.FlagKeyringBackend)
	homeDir, _ := cmd.Flags().GetString(flags.FlagHome)
	kb, err := keyring.New(sdk.KeyringServiceName(), backend, homeDir, buf)
	if err != nil {
		return err
	}

	name := args[0]
	address, err := sdk.GetPubKeyFromBech32(sdk.Bech32PubKeyTypeAccPub, args[1])
	if err != nil {
		return err
	}

	info, err := kb.Key(name)
	if err != nil {
		return err
	}

	// confirm change, unless -y is passed
	if skip, _ := cmd.Flags().GetBool(flagYes); !skip {
		if yes, err := input.GetConfirmation("Key address will be updated. Continue?", buf, cmd.ErrOrStderr()); err != nil {
			return err
		} else if !yes {
			return nil
		}
	}

	if err := kb.ChangePubKey(name, address); err != nil {
		return err
	}

	if info.GetType() == keyring.TypeLedger || info.GetType() == keyring.TypeOffline {
		cmd.PrintErrln("Key address updated")
	}

	return nil
}
