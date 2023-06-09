import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
	selector: 'mc-error-message',
	templateUrl: './error-message.component.html',
	styleUrls: ['./error-message.component.scss'],
	standalone: true,
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
	@Input('message')
	messageInput: string | null = 'Something went wrong!'
}
