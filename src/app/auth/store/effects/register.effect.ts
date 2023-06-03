import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthService } from '@auth/services/auth.service'
import {
	registerAction,
	registerFailureAction,
	registerSuccessAction,
} from '@auth/store/actions/register.action'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UserInterface } from '@shared/types/user.interface'
import { catchError, map, of, switchMap } from 'rxjs'

@Injectable()
export class RegisterEffect {
	register$ = createEffect(() =>
		this.actions$.pipe(
			ofType(registerAction),
			switchMap(({ request }) =>
				this.authService.register(request).pipe(
					map((user: UserInterface) => registerSuccessAction({ user })),
					catchError((errorResponse: HttpErrorResponse) =>
						of(registerFailureAction({ errors: errorResponse.error.errors })),
					),
				),
			),
		),
	)

	constructor(
		private readonly actions$: Actions,
		private readonly authService: AuthService,
	) {}
}
