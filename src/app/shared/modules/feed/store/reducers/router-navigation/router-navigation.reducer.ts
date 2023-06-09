import { routerNavigationAction } from '@ngrx/router-store'
import { on } from '@ngrx/store'
import { feedInitialState } from '@shared/modules/feed/store/reducers/reducers'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export const onRouterNavigation = on(
	routerNavigationAction,
	(state: FeedStateInterface, action): FeedStateInterface => feedInitialState,
)
