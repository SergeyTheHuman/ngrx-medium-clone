import { on } from '@ngrx/store'
import { getFeedFailureAction } from '@shared/modules/feed/store/actions/get-feed.action'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export const onGetFeedFailure = on(
	getFeedFailureAction,
	(state: FeedStateInterface, action): FeedStateInterface => {
		return {
			...state,
			isLoading: false,
		}
	},
)
