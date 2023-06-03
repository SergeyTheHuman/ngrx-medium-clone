import { registerSuccessAction } from '@auth/store/actions/register.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onRegisterSuccess = on(
	registerSuccessAction,
	(state: AuthStateInterface, action): AuthStateInterface => {
		return {
			...state,
			isRegisterPending: false,
			isLoggedIn: true,
			user: action.user,
		}
	},
)
