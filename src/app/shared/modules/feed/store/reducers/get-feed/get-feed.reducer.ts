import { on } from '@ngrx/store'
import { getFeedAction } from '@shared/modules/feed/store/actions/get-feed.action'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export const onGetFeed = on(
	getFeedAction,
	(state: FeedStateInterface): FeedStateInterface => {
		return {
			...state,
			isLoading: true,
		}
	},
)
