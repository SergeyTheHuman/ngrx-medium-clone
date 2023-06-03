import { RegisterActionTypes } from '@auth/store/action-types/register-action.types'
import { RegisterRequestInterface } from '@auth/types/register-request.interface'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from '@shared/types/backend-errors.interface'
import { UserInterface } from '@shared/types/user.interface'

export const registerAction = createAction(
	RegisterActionTypes.REGISTER,
	props<{ request: RegisterRequestInterface }>(),
)

export const registerSuccessAction = createAction(
	RegisterActionTypes.REGISTER_SUCCESS,
	props<{ user: UserInterface }>(),
)

export const registerFailureAction = createAction(
	RegisterActionTypes.REGISTER_FAILURE,
	props<{ errors: BackendErrorsInterface }>(),
)
