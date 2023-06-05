import { createSelector } from '@ngrx/store'
import { FeedFeatureSelector } from '@shared/modules/feed/store/selectors/feed-feature.selector'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export const feedSelector = createSelector(
	FeedFeatureSelector,
	(state: FeedStateInterface) => state.feed,
)
