import { AuthFeatureSelector } from '@auth/store/selectors/auth.selector'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { createSelector } from '@ngrx/store'

export const isAuthPendingSelector = createSelector(
	AuthFeatureSelector,
	(state: AuthStateInterface) => state.isAuthPending,
)
