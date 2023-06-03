import { Component, Input } from '@angular/core'

@Component({
	selector: 'mc-auth-input',
	templateUrl: './auth-input.component.html',
	styleUrls: ['./auth-input.component.scss'],
})
export class AuthInputComponent {
	@Input()
	type: 'password' | 'email' | 'text' = 'text'

	@Input()
	placeholder: string = ''
}
