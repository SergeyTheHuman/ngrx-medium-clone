import { on } from '@ngrx/store'
import { getPopularTagsFailureAction } from '@shared/modules/popular-tags/store/actions/get-popular-tags.action'
import { PopularTagsStateInterface } from '@shared/modules/popular-tags/types/popular-tags-state.interface'

export const onGetPopularTagsFailure = on(
	getPopularTagsFailureAction,
	(state: PopularTagsStateInterface, action): PopularTagsStateInterface => {
		return {
			...state,
			isLoading: false,
		}
	},
)
