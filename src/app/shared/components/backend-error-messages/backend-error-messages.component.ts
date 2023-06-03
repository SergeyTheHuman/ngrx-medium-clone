import { CommonModule } from '@angular/common'
import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { BackendErrorsInterface } from '@shared/types/backend-errors.interface'

@Component({
	selector: 'mc-backend-error-messages',
	templateUrl: './backend-error-messages.component.html',
	styleUrls: ['./backend-error-messages.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule],
})
export class BackendErrorMessagesComponent implements OnInit {
	@Input('errors')
	errorsInput!: BackendErrorsInterface | null

	errorMessages!: string[]

	ngOnInit(): void {
		this.initializeVariables()
	}
	initializeVariables() {
		if (this.errorsInput !== null) {
			this.errorMessages = Object.keys(this.errorsInput).map(
				(fieldName: string) => {
					const messages = this.errorsInput?.[fieldName].join(', ')
					return `${fieldName} ${messages}`
				},
			)
		} else {
			this.errorMessages = []
		}
	}
}
