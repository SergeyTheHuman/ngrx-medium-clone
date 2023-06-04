import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { loginAction } from '@auth/store/actions/login.action'
import { isAuthPendingSelector } from '@auth/store/selectors/auth-pending.selector'
import { LoginRequestInterface } from '@auth/types/login-request.interface'
import { select, Store } from '@ngrx/store'
import { AppStateInterface } from '@shared/types/app-state.interface'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-auth-login-form',
	templateUrl: './auth-login-form.component.html',
	styleUrls: ['./auth-login-form.component.scss'],
})
export class AuthLoginFormComponent {
	form!: FormGroup
	isAuthPending$!: Observable<boolean>

	constructor(private readonly store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		this.initializeForm()
		this.initializeVariables()
	}

	initializeForm(): void {
		this.form = new FormGroup({
			email: new FormControl<string>('', [
				Validators.required,
				Validators.minLength(3),
				Validators.email,
			]),
			password: new FormControl<string>('', [
				Validators.required,
				Validators.minLength(3),
			]),
		})
	}

	initializeVariables(): void {
		this.isAuthPending$ = this.store.pipe(select(isAuthPendingSelector))
	}

	onSubmit(): void {
		const authRequest: LoginRequestInterface = {
			user: this.form.value,
		}
		this.store.dispatch(loginAction({ request: authRequest }))
	}
}
