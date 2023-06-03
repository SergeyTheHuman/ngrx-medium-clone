import { RegisterActionTypes } from '@auth/store/action-types/register-action.types'
import { RegisterRequestInterface } from '@auth/store/types/register-request.interface'
import { createAction, props } from '@ngrx/store'

export const registerAction = createAction(
	RegisterActionTypes.REGISTER,
	props<RegisterRequestInterface>(),
)
