import { Action, createReducer } from '@ngrx/store'

import { loginReducers } from '@auth/store/reducers/login'
import { registerReducers } from '@auth/store/reducers/register'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'

const initialState: AuthStateInterface = {
	isAuthPending: false,
	user: null,
	isLoggedIn: null,
	validationErrors: null,
}

const authReducer = createReducer(
	initialState,
	...registerReducers,
	...loginReducers,
)

export function authReducers(state: AuthStateInterface, action: Action) {
	return authReducer(state, action)
}
