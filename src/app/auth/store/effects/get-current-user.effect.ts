import { Injectable } from '@angular/core'
import { AuthService } from '@auth/services/auth.service'
import {
	getCurrentUserAction,
	getCurrentUserFailureAction,
	getCurrentUserSuccessAction,
} from '@auth/store/actions/get-current-user.action'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { PersistanceService } from '@shared/services/persistance.service'
import { UserInterface } from '@shared/types/user.interface'
import { catchError, map, of, switchMap } from 'rxjs'

@Injectable()
export class GetCurrentUserEffect {
	getCurrentUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getCurrentUserAction),
			switchMap(() => {
				const token = this.persistanceService.get('accessToken')
				if (!token) return of(getCurrentUserFailureAction())

				return this.authService.getCurrentUser().pipe(
					map((currentUser: UserInterface) => {
						return getCurrentUserSuccessAction({ currentUser })
					}),
					catchError(() => of(getCurrentUserFailureAction())),
				)
			}),
		),
	)

	constructor(
		private readonly actions$: Actions,
		private readonly authService: AuthService,
		private readonly persistanceService: PersistanceService,
	) {}
}
