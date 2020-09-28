package cli

import (
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/x/auth/pubkey/types"
)

// Transaction command flags
const (
	FlagDelayed = "delayed"
)

// GetTxCmd returns pubkey module's transaction commands.
func GetTxCmd() *cobra.Command {
	txCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "pubkey transaction subcommands",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	txCmd.AddCommand(
		NewMsgChangePubKey(),
	)

	return txCmd
}

// NewMsgChangePubKeyCmd returns a CLI command handler for creating a
// MsgChangePubKey transaction.
func NewMsgChangePubKeyCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "change-pubkey [pubkey]",
		Short: "Change PubKey of an account.",
		Long: `This msg will update the public key associated with an account
		 to a new public key, while keeping the same address.
		 This can be used for purposes such as passing ownership of an account
		 to a new key for security reasons or upgrading multisig signers.`,
		Args: cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			clientCtx, err := client.ReadTxCommandFlags(clientCtx, cmd.Flags())
			if err != nil {
				return err
			}

			pubKeyText := args[0]
			pubKey := pubKeyText // TODO should convert to correct format

			msg := types.NewMsgChangePubKey(clientCtx.GetFromAddress(), pubKey)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}