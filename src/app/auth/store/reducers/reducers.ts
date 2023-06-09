import { Action, createReducer } from '@ngrx/store'

import { getCurrentUserReducers } from '@auth/store/reducers/get-current-user'
import { loginReducers } from '@auth/store/reducers/login'
import { registerReducers } from '@auth/store/reducers/register'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'

const authInitialState: AuthStateInterface = {
	isAuthPending: false,
	isUserLoading: false,
	user: null,
	isLoggedIn: null,
	validationErrors: null,
}

const authReducer = createReducer(
	authInitialState,
	...registerReducers,
	...loginReducers,
	...getCurrentUserReducers,
)

export function authReducers(state: AuthStateInterface, action: Action) {
	return authReducer(state, action)
}
