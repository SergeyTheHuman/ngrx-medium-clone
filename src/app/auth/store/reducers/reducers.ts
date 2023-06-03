import { Action, createReducer, on } from '@ngrx/store'

import { registerAction } from '@auth/store/actions/register.action'
import { registerReducer } from '@auth/store/reducers/register.reducer'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'

const initialState: AuthStateInterface = {
	isRegisterPending: false,
}

const authReducer = createReducer(
	initialState,
	on(registerAction, registerReducer),
)

export function authReducers(state: AuthStateInterface, action: Action) {
	return authReducer(state, action)
}
