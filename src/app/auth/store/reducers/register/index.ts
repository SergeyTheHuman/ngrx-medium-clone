import { onRegisterFailure } from '@auth/store/reducers/register/register-failure.reducer'
import { onRegisterSuccess } from '@auth/store/reducers/register/register-success.reducer'
import { onRegister } from '@auth/store/reducers/register/register.reducer'

export const registerReducers = [
	onRegister,
	onRegisterFailure,
	onRegisterSuccess,
]
