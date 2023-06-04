import { loginFailureAction } from '@auth/store/actions/login.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onLoginFailure = on(
	loginFailureAction,
	(state: AuthStateInterface, action): AuthStateInterface => {
		return {
			...state,
			isAuthPending: false,
			validationErrors: action.errors,
		}
	},
)
