import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { PopularTagsService } from '@shared/modules/popular-tags/services/popular-tags.service'
import {
	getPopularTagsAction,
	getPopularTagsFailureAction,
	getPopularTagsSuccessAction,
} from '@shared/modules/popular-tags/store/actions/get-popular-tags.action'
import { PopularTagType } from '@shared/types/popular-tag.type'
import { catchError, map, of, switchMap } from 'rxjs'

@Injectable()
export class GetPopularTagsEffect {
	getPopularTags$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getPopularTagsAction),
			switchMap(() => {
				return this.popularTagsService.get().pipe(
					map((popularTags: PopularTagType[]) => {
						return getPopularTagsSuccessAction({ popularTags })
					}),
					catchError(() => of(getPopularTagsFailureAction())),
				)
			}),
		),
	)

	constructor(
		private readonly actions$: Actions,
		private readonly popularTagsService: PopularTagsService,
	) {}
}
