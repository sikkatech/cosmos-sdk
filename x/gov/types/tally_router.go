package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

var _ TallyRouter = (*tallyrouter)(nil)

// TallyRouter implements a governance Tally router.
//
// TODO: Use generic router (ref #3976).
type TallyRouter interface {
	AddRoute(r string, h TallyStrategy) (rtr TallyRouter)
	HasRoute(r string) bool
	GetRoute(path string) (h TallyStrategy)
}

type tallyrouter struct {
	routes map[string]TallyStrategy
	sealed bool
}

// NewTallyRouter creates a new Router interface instance
func NewTallyRouter() TallyRouter {
	return &tallyrouter{
		routes: make(map[string]TallyStrategy),
	}
}

// AddRoute adds a governance handler for a given path. It returns the Router
// so AddRoute calls can be linked. It will panic if the router is sealed.
func (rtr *tallyrouter) AddRoute(path string, t TallyStrategy) TallyRouter {
	if rtr.sealed {
		panic("router sealed; cannot add route handler")
	}

	if !sdk.IsAlphaNumeric(path) {
		panic("route expressions can only contain alphanumeric characters")
	}
	if rtr.HasRoute(path) {
		panic(fmt.Sprintf("route %s has already been initialized", path))
	}

	rtr.routes[path] = t
	return rtr
}

// HasRoute returns true if the router has a path registered or false otherwise.
func (rtr *tallyrouter) HasRoute(path string) bool {
	return rtr.routes[path] != nil
}

// GetRoute returns a Handler for a given path.
func (rtr *tallyrouter) GetRoute(path string) TallyStrategy {
	if !rtr.HasRoute(path) {
		return nil
	}

	return rtr.routes[path]
}
