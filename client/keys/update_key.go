package keys

import (
	"bufio"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/input"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// UpdateKeyCommand defines a keys command to add a generated or recovered private key to keybase.
func UpdateKeyCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-key <key> <target_key>",
		Short: "Set public key and private key of an account and save to disk",
		Long:  `Set public key and private key of an account and save to disk`,
		Args:  cobra.ExactArgs(2),
		RunE:  runUpdateKeyCmd,
	}

	cmd.Flags().BoolP(flagYes, "y", false, "Skip confirmation prompt when updating offline or ledger key references")
	cmd.Flags().BoolP(flagForce, "f", false, "Update the key address unconditionally without asking for the passphrase. Deprecated.")

	cmd.SetOut(cmd.OutOrStdout())
	cmd.SetErr(cmd.ErrOrStderr())

	return cmd
}

func runUpdateKeyCmd(cmd *cobra.Command, args []string) error {
	buf := bufio.NewReader(cmd.InOrStdin())

	backend, _ := cmd.Flags().GetString(flags.FlagKeyringBackend)
	homeDir, _ := cmd.Flags().GetString(flags.FlagHome)
	kb, err := keyring.New(sdk.KeyringServiceName(), backend, homeDir, buf)
	if err != nil {
		return err
	}

	key := args[0]
	tarKey := args[1]
	if err != nil {
		return err
	}

	info, err := kb.Key(key)
	if err != nil {
		return err
	}

	// confirm change, unless -y is passed
	if skip, _ := cmd.Flags().GetBool(flagYes); !skip {
		if yes, err := input.GetConfirmation("Key will be updated. Continue?", buf, cmd.ErrOrStderr()); err != nil {
			return err
		} else if !yes {
			return nil
		}
	}

	if err := kb.UpdateKey(key, tarKey); err != nil {
		return err
	}

	if info.GetType() == keyring.TypeLedger || info.GetType() == keyring.TypeOffline {
		cmd.PrintErrln("Key updated")
	}

	return nil
}
