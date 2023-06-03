import { BackendErrorsInterface } from '@shared/types/backend-errors.interface'
import { UserInterface } from '@shared/types/user.interface'

export interface AuthStateInterface {
	isRegisterPending: boolean
	user: UserInterface | null
	isLoggedIn: boolean | null
	validationErrors: BackendErrorsInterface | null
}
