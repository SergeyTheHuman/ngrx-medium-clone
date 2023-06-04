import { LoginActionTypes } from '@auth/store/action-types/login-action.types'
import { LoginRequestInterface } from '@auth/types/login-request.interface'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from '@shared/types/backend-errors.interface'
import { UserInterface } from '@shared/types/user.interface'

export const loginAction = createAction(
	LoginActionTypes.LOGIN,
	props<{ request: LoginRequestInterface }>(),
)

export const loginSuccessAction = createAction(
	LoginActionTypes.LOGIN_SUCCESS,
	props<{ user: UserInterface }>(),
)

export const loginFailureAction = createAction(
	LoginActionTypes.LOGIN_FAILURE,
	props<{ errors: BackendErrorsInterface }>(),
)
