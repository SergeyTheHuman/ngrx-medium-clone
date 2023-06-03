import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@auth/services/auth.service'
import {
	registerAction,
	registerFailureAction,
	registerSuccessAction,
} from '@auth/store/actions/register.action'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { PersistanceService } from '@shared/services/persistance.service'
import { UserInterface } from '@shared/types/user.interface'
import { catchError, map, of, switchMap, tap } from 'rxjs'

@Injectable()
export class RegisterEffect {
	register$ = createEffect(() =>
		this.actions$.pipe(
			ofType(registerAction),
			switchMap(({ request }) =>
				this.authService.register(request).pipe(
					map((user: UserInterface) => {
						this.persistanceService.set('accessToken', user.token)
						return registerSuccessAction({ user })
					}),
					catchError((errorResponse: HttpErrorResponse) =>
						of(registerFailureAction({ errors: errorResponse.error.errors })),
					),
				),
			),
		),
	)

	redirectAfterRegisterSuccess$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(registerSuccessAction),
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
