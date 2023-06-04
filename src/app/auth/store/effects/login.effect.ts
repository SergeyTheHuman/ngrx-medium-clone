import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@auth/services/auth.service'
import {
	loginAction,
	loginFailureAction,
	loginSuccessAction,
} from '@auth/store/actions/login.action'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { PersistanceService } from '@shared/services/persistance.service'
import { UserInterface } from '@shared/types/user.interface'
import { catchError, map, of, switchMap, tap } from 'rxjs'

@Injectable()
export class LoginEffect {
	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loginAction),
			switchMap(({ request }) =>
				this.authService.login(request).pipe(
					map((user: UserInterface) => {
						this.persistanceService.set('accessToken', user.token)
						return loginSuccessAction({ user })
					}),
					catchError((errorResponse: HttpErrorResponse) =>
						of(loginFailureAction({ errors: errorResponse.error.errors })),
					),
				),
			),
		),
	)

	redirectAfterLoginSuccess$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(loginSuccessAction),
				tap(() => this.router.navigate(['/'])),
			),
		{ dispatch: false },
	)

	constructor(
		private readonly actions$: Actions,
		private readonly authService: AuthService,
		private readonly persistanceService: PersistanceService,
		private readonly router: Router,
	) {}
}
