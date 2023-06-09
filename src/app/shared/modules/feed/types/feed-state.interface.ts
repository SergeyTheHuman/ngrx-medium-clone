import { GetFeedResponseInterface } from '@shared/modules/feed/types/get-feed-response.interface'

export interface FeedStateInterface {
	isLoading: boolean
	error: string | null
	feed: GetFeedResponseInterface | null
}
