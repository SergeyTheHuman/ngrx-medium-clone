import { on } from '@ngrx/store'
import { getFeedSuccessAction } from '@shared/modules/feed/store/actions/get-feed.action'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export const onGetFeedSuccess = on(
	getFeedSuccessAction,
	(state: FeedStateInterface, action): FeedStateInterface => {
		return {
			...state,
			isLoading: false,
			feed: action.feed,
		}
	},
)
