import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { FeedService } from '@shared/modules/feed/services/feed.service'
import {
	getFeedAction,
	getFeedFailureAction,
	getFeedSuccessAction,
} from '@shared/modules/feed/store/actions/get-feed.action'
import { GetFeedResponseInterface } from '@shared/modules/feed/types/get-feed-response.interface'
import { catchError, map, of, switchMap } from 'rxjs'

@Injectable()
export class GetFeedEffect {
	getFeed$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getFeedAction),
			switchMap(({ url }) => {
				return this.feedService.get(url).pipe(
					map((feed: GetFeedResponseInterface) => {
						return getFeedSuccessAction({ feed })
					}),
					catchError(() => of(getFeedFailureAction())),
				)
			}),
		),
	)

	constructor(
		private readonly actions$: Actions,
		private readonly feedService: FeedService,
	) {}
}
