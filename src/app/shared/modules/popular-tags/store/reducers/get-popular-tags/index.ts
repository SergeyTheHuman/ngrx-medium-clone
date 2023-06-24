import { onGetPopularTagsFailure } from '@shared/modules/popular-tags/store/reducers/get-popular-tags/get-popular-tags-failure.reducer'
import { onGetPopularTagsSuccess } from '@shared/modules/popular-tags/store/reducers/get-popular-tags/get-popular-tags-success.reducer'
import { onGetPopularTags } from '@shared/modules/popular-tags/store/reducers/get-popular-tags/get-popular-tags.reducer'

export const getPopularTagsReducers = [
	onGetPopularTags,
	onGetPopularTagsSuccess,
	onGetPopularTagsFailure,
]
