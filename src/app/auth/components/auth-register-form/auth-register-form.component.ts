import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { registerAction } from '@auth/store/actions/register.action'
import { Store } from '@ngrx/store'

@Component({
	selector: 'mc-auth-register-form',
	templateUrl: './auth-register-form.component.html',
	styleUrls: ['./auth-register-form.component.scss'],
})
export class AuthRegisterFormComponent {
	form!: FormGroup

	constructor(private readonly store: Store) {}

	ngOnInit(): void {
		this.initializeForm()
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

	onSubmit(): void {
		this.store.dispatch(registerAction(this.form.value))
		console.log(this.form.value)
	}
}
