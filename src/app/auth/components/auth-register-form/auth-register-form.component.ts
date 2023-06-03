import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { registerAction } from '@auth/store/actions/register.action'
import { isRegisterPendingSelector } from '@auth/store/selectors/register-pending.selector'
import { RegisterRequestInterface } from '@auth/types/register-request.interface'
import { select, Store } from '@ngrx/store'
import { AppStateInterface } from '@shared/types/app-state.interface'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-auth-register-form',
	templateUrl: './auth-register-form.component.html',
	styleUrls: ['./auth-register-form.component.scss'],
})
export class AuthRegisterFormComponent {
	form!: FormGroup
	isRegisterPending$!: Observable<boolean>

	constructor(private readonly store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		this.initializeForm()
		this.initializeVariables()
	}

	initializeForm(): void {
		this.form = new FormGroup({
			username: new FormControl<string>('', [
				Validators.required,
				Validators.minLength(3),
			]),
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
		this.isRegisterPending$ = this.store.pipe(select(isRegisterPendingSelector))
	}

	onSubmit(): void {
		const authRequest: RegisterRequestInterface = {
			user: this.form.value,
		}
		this.store.dispatch(registerAction({ request: authRequest }))
	}
}
