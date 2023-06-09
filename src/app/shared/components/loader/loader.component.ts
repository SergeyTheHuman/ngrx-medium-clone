import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'mc-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
	standalone: true,
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {}
