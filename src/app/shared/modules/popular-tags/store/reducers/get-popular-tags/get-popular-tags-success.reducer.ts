import { on } from '@ngrx/store'
import { getPopularTagsSuccessAction } from '@shared/modules/popular-tags/store/actions/get-popular-tags.action'
import { PopularTagsStateInterface } from '@shared/modules/popular-tags/types/popular-tags-state.interface'

export const onGetPopularTagsSuccess = on(
	getPopularTagsSuccessAction,
	(state: PopularTagsStateInterface, action): PopularTagsStateInterface => {
		return {
			...state,
			isLoading: false,
			tags: action.popularTags,
		}
	},
)
