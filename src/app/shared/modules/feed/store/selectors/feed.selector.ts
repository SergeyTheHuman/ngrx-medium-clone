import { createSelector } from '@ngrx/store'
import { feedFeatureSelector } from '@shared/modules/feed/store/selectors/feed-feature.selector'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export const feedSelector = createSelector(
	feedFeatureSelector,
	(state: FeedStateInterface) => state.feed,
)
