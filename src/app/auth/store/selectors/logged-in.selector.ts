import { AuthFeatureSelector } from '@auth/store/selectors/auth.selector'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { createSelector } from '@ngrx/store'

export const isLoggedInSelector = createSelector(
	AuthFeatureSelector,
	(state: AuthStateInterface) => state.isLoggedIn,
)
