import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'
import { PopularTagsStateInterface } from '@shared/modules/popular-tags/types/popular-tags-state.interface'

export interface AppStateInterface {
	auth: AuthStateInterface
	feed: FeedStateInterface
	popularTags: PopularTagsStateInterface
}
