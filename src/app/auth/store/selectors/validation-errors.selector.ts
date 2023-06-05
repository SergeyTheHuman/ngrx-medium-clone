import { authFeatureSelector } from '@auth/store/selectors/auth-feature.selector'
import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { createSelector } from '@ngrx/store'

export const validationErrorsSelector = createSelector(
	authFeatureSelector,
	(state: AuthStateInterface) => state.validationErrors,
)
