import { Action, createReducer } from '@ngrx/store'

import { getPopularTagsReducers } from '@shared/modules/popular-tags/store/reducers/get-popular-tags'
import { PopularTagsStateInterface } from '@shared/modules/popular-tags/types/popular-tags-state.interface'

export const popularTagsInitialState: PopularTagsStateInterface = {
	isLoading: false,
	error: null,
	tags: null,
}

const popularTagsReducer = createReducer(
	popularTagsInitialState,
	...getPopularTagsReducers,
)

export function popularTagsReducers(
	state: PopularTagsStateInterface,
	action: Action,
) {
	return popularTagsReducer(state, action)
}
