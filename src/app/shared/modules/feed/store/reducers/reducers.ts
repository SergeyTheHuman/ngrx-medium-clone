import { Action, createReducer } from '@ngrx/store'

import { getFeedReducers } from '@shared/modules/feed/store/reducers/get-feed'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

const initialState: FeedStateInterface = {
	isLoading: false,
	error: null,
	feed: null,
}

const feedReducer = createReducer(initialState, ...getFeedReducers)

export function feedReducers(state: FeedStateInterface, action: Action) {
	return feedReducer(state, action)
}
