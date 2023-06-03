import { registerAction } from '@auth/store/actions/register.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onRegister = on(
	registerAction,
	(state: AuthStateInterface, action): AuthStateInterface => {
		return {
			...state,
			isRegisterPending: true,
			validationErrors: null,
		}
	},
)
