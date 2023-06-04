import { BackendErrorsInterface } from '@shared/types/backend-errors.interface'
import { UserInterface } from '@shared/types/user.interface'

export interface AuthStateInterface {
	isAuthPending: boolean
	isUserLoading: boolean
	user: UserInterface | null
	isLoggedIn: boolean | null
	validationErrors: BackendErrorsInterface | null
}
