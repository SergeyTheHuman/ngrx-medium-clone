import { Action, createReducer } from '@ngrx/store'

import { getFeedReducers } from '@shared/modules/feed/store/reducers/get-feed'
import { onRouterNavigation } from '@shared/modules/feed/store/reducers/router-navigation/router-navigation.reducer'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export const feedInitialState: FeedStateInterface = {
	isLoading: false,
	error: null,
	feed: null,
}

const feedReducer = createReducer(
	feedInitialState,
	...getFeedReducers,
	onRouterNavigation,
)

export function feedReducers(state: FeedStateInterface, action: Action) {
	return feedReducer(state, action)
}
