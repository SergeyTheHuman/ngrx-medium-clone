import { getCurrentUserAction } from '@auth/store/actions/get-current-user.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onGetCurrentUser = on(
	getCurrentUserAction,
	(state: AuthStateInterface): AuthStateInterface => {
		return {
			...state,
			isUserLoading: true,
		}
	},
)
