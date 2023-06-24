import { createSelector } from '@ngrx/store'
import { popularTagsFeatureSelector } from '@shared/modules/popular-tags/store/selectors/popular-tags-feature.selector'
import { PopularTagsStateInterface } from '@shared/modules/popular-tags/types/popular-tags-state.interface'

export const isLoadingPopularTagsSelector = createSelector(
	popularTagsFeatureSelector,
	(state: PopularTagsStateInterface) => state.isLoading,
)
