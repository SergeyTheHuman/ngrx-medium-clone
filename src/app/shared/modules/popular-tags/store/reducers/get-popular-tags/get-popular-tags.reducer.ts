import { on } from '@ngrx/store'
import { getPopularTagsAction } from '@shared/modules/popular-tags/store/actions/get-popular-tags.action'
import { PopularTagsStateInterface } from '@shared/modules/popular-tags/types/popular-tags-state.interface'

export const onGetPopularTags = on(
	getPopularTagsAction,
	(state: PopularTagsStateInterface): PopularTagsStateInterface => {
		return {
			...state,
			isLoading: true,
		}
	},
)
