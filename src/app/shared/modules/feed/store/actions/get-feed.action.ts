import { createAction, props } from '@ngrx/store'
import { GetFeedActionTypes } from '@shared/modules/feed/store/action-types/get-feed-action.types'
import { GetFeedResponseInterface } from '@shared/modules/feed/types/get-feed-response.interface'

export const getFeedAction = createAction(
	GetFeedActionTypes.GET_FEED,
	props<{ url: string }>(),
)

export const getFeedSuccessAction = createAction(
	GetFeedActionTypes.GET_FEED_SUCCESS,
	props<{ feed: GetFeedResponseInterface }>(),
)

export const getFeedFailureAction = createAction(
	GetFeedActionTypes.GET_FEED_FAILURE,
)
