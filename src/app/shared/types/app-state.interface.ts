import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export interface AppStateInterface {
	auth: AuthStateInterface
	feed: FeedStateInterface
}
