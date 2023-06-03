import { Action, createReducer } from '@ngrx/store'

import { registerReducers } from '@auth/store/reducers/register'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'

const initialState: AuthStateInterface = {
	isRegisterPending: false,
	user: null,
	isLoggedIn: null,
	validationErrors: null,
}

const authReducer = createReducer(initialState, ...registerReducers)

export function authReducers(state: AuthStateInterface, action: Action) {
	return authReducer(state, action)
}
