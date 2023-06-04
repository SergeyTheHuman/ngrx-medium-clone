import { loginAction } from '@auth/store/actions/login.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onLogin = on(
	loginAction,
	(state: AuthStateInterface): AuthStateInterface => {
		return {
			...state,
			isAuthPending: true,
			validationErrors: null,
		}
	},
)
