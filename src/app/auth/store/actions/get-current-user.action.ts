import { GetCurrentUserActionTypes } from '@auth/store/action-types/get-current-user-action.types'
import { createAction, props } from '@ngrx/store'
import { UserInterface } from '@shared/types/user.interface'

export const getCurrentUserAction = createAction(
	GetCurrentUserActionTypes.GET_CURRENT_USER,
)

export const getCurrentUserSuccessAction = createAction(
	GetCurrentUserActionTypes.GET_CURRENT_USER_SUCCESS,
	props<{ currentUser: UserInterface }>(),
)

export const getCurrentUserFailureAction = createAction(
	GetCurrentUserActionTypes.GET_CURRENT_USER_FAILURE,
)
