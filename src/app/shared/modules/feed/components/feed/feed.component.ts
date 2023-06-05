import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'mc-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {}
