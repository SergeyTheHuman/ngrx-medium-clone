import { getCurrentUserFailureAction } from '@auth/store/actions/get-current-user.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onGetCurrentUserFailure = on(
	getCurrentUserFailureAction,
	(state: AuthStateInterface): AuthStateInterface => {
		return {
			...state,
			isUserLoading: false,
			isLoggedIn: false,
			user: null,
		}
	},
)
