import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'mc-banner',
	styleUrls: ['./banner.component.scss'],
	templateUrl: './banner.component.html',
	standalone: true,
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {}
