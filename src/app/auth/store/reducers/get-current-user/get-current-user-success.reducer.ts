import { getCurrentUserSuccessAction } from '@auth/store/actions/get-current-user.action'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { on } from '@ngrx/store'

export const onGetCurrentUserSuccess = on(
	getCurrentUserSuccessAction,
	(state: AuthStateInterface, action): AuthStateInterface => {
		return {
			...state,
			isUserLoading: false,
			isLoggedIn: true,
			isAuthPending: false,
			user: action.currentUser,
		}
	},
)
