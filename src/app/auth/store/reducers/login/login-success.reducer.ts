import { loginSuccessAction } from '@auth/store/actions/login.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onLoginSuccess = on(
	loginSuccessAction,
	(state: AuthStateInterface, action): AuthStateInterface => {
		return {
			...state,
			isAuthPending: false,
			isLoggedIn: true,
			user: action.user,
		}
	},
)
