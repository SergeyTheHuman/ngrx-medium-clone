import { createAction, props } from '@ngrx/store'
import { GetPopularTagsActionTypes } from '@shared/modules/popular-tags/store/action-types/get-popular-tags-action.types'
import { PopularTagType } from '@shared/types/popular-tag.type'

export const getPopularTagsAction = createAction(
	GetPopularTagsActionTypes.GET_POPULAR_TAGS,
)

export const getPopularTagsSuccessAction = createAction(
	GetPopularTagsActionTypes.GET_POPULAR_TAGS_SUCCESS,
	props<{ popularTags: PopularTagType[] }>(),
)

export const getPopularTagsFailureAction = createAction(
	GetPopularTagsActionTypes.GET_POPULAR_TAGS_FAILURE,
)
