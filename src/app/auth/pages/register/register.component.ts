import { Component, OnInit } from '@angular/core'
import { validationErrorsSelector } from '@auth/store/selectors/validation-errors.selector'
import { select, Store } from '@ngrx/store'
import { AppStateInterface } from '@shared/types/app-state.interface'
import { BackendErrorsInterface } from '@shared/types/backend-errors.interface'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterPage implements OnInit {
	validationErrors$!: Observable<BackendErrorsInterface | null>

	constructor(private readonly store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		this.initializeVariables()
	}

	initializeVariables(): void {
		this.validationErrors$ = this.store.pipe(select(validationErrorsSelector))
	}
}
