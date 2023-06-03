import { AuthStateInterface } from '@auth/store/types/auth-state.interface'

export function registerReducer(state: AuthStateInterface): AuthStateInterface {
	return {
		...state,
		isRegisterPending: true,
	}
}
