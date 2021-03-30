package types

import (
	"github.com/gogo/protobuf/proto"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	types "github.com/cosmos/cosmos-sdk/codec/types"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

type (
	// Msg defines the interface a transaction message must fulfill.
	Msg interface {
		proto.Message

		// Return the message type.
		// Must be alphanumeric or empty.
		Route() string

		// Returns a human-readable string for the message, intended for utilization
		// within tags
		Type() string

		// ValidateBasic does a simple validation check that
		// doesn't require access to any other information.
		ValidateBasic() error

		// Get the canonical byte representation of the Msg.
		GetSignBytes() []byte

		// Signers returns the addrs of signers that must sign.
		// CONTRACT: All signatures must be present to be valid.
		// CONTRACT: Returns addrs in some deterministic order.
		GetSigners() []AccAddress
	}

	// Fee defines an interface for an application application-defined concrete
	// transaction type to be able to set and return the transaction fee.
	Fee interface {
		GetGas() uint64
		GetAmount() Coins
	}

	// Signature defines an interface for an application application-defined
	// concrete transaction type to be able to set and return transaction signatures.
	Signature interface {
		GetPubKey() cryptotypes.PubKey
		GetSignature() []byte
	}

	// Tx defines the interface a transaction must fulfill.
	Tx interface {
		// Gets the all the transaction's messages.
		GetMsgs() []Msg

		// ValidateBasic does a simple and lightweight validation check that doesn't
		// require access to any other information.
		ValidateBasic() error
	}

	// FeeTx defines the interface to be implemented by Tx to use the FeeDecorators
	FeeTx interface {
		Tx
		GetGas() uint64
		GetFee() Coins
		FeePayer() AccAddress
		FeeGranter() AccAddress
	}

	// Tx must have GetMemo() method to use ValidateMemoDecorator
	TxWithMemo interface {
		Tx
		GetMemo() string
	}

	// TxWithTimeoutHeight extends the Tx interface by allowing a transaction to
	// set a height timeout.
	TxWithTimeoutHeight interface {
		Tx

		GetTimeoutHeight() uint64
	}
)

// TxDecoder unmarshals transaction bytes
type TxDecoder func(txBytes []byte) (Tx, error)

// TxEncoder marshals transaction to bytes
type TxEncoder func(tx Tx) ([]byte, error)

// DecodeMsgs unpacks protobuf encoded messages to []Msg
// TODO: Should this be panicking??
func DecodeMsgs(messages []*types.Any) []Msg {
	anys := messages
	res := make([]Msg, len(anys))
	for i, any := range anys {
		var msg Msg
		if IsServiceMsg(any.TypeUrl) {
			req := any.GetCachedValue()
			if req == nil {
				panic("Any cached value is nil. Transaction messages must be correctly packed Any values.")
			}
			msg = ServiceMsg{
				MethodName: any.TypeUrl,
				Request:    any.GetCachedValue().(MsgRequest),
			}
		} else {
			msg = any.GetCachedValue().(Msg)
		}
		res[i] = msg
	}
	return res
}

// EncodeMsgs packs []Msg into protobuf encoded messages
func EncodeMsgs(msgs []Msg) ([]*types.Any, error) {
	anys := make([]*codectypes.Any, len(msgs))

	for i, msg := range msgs {
		var err error
		switch msg := msg.(type) {
		case ServiceMsg:
			anys[i], err = codectypes.NewAnyWithCustomTypeURL(msg.Request, msg.MethodName)
		default:
			anys[i], err = codectypes.NewAnyWithValue(msg)
		}
		if err != nil {
			return anys, err
		}
	}

	return anys, nil
}

// ValidateBasicMsgs executes ValidateBasic for a list of messages.
func ValidateBasicMsgs(msgs []Msg) error {
	if len(msgs) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "must contain at least one message")
	}

	for _, msg := range msgs {
		err := msg.ValidateBasic()
		if err != nil {
			return err
		}
	}

	return nil
}

// GetSignersMsgs returns the set of signers for a list of messages.
func GetSignersMsgs(msgs []Msg) []AccAddress {
	var signers []AccAddress
	seen := map[string]bool{}

	for _, msg := range msgs {
		for _, addr := range msg.GetSigners() {
			if !seen[addr.String()] {
				signers = append(signers, addr)
				seen[addr.String()] = true
			}
		}
	}

	return signers
}
