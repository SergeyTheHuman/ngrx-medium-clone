import { onGetFeedFailure } from '@shared/modules/feed/store/reducers/get-feed/get-feed-failure.reducer'
import { onGetFeedSuccess } from '@shared/modules/feed/store/reducers/get-feed/get-feed-success.reducer'
import { onGetFeed } from '@shared/modules/feed/store/reducers/get-feed/get-feed.reducer'

export const getFeedReducers = [onGetFeed, onGetFeedSuccess, onGetFeedFailure]
