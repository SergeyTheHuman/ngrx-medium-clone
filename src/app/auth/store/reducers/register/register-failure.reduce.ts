import { registerFailureAction } from '@auth/store/actions/register.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onRegisterFailure = on(
	registerFailureAction,
	(state: AuthStateInterface, action): AuthStateInterface => {
		return {
			...state,
			isRegisterPending: false,
			validationErrors: action.errors,
		}
	},
)
