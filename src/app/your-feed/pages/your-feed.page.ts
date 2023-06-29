import { Component } from '@angular/core'

@Component({
	selector: 'mc-your-feed',
	templateUrl: './your-feed.page.html',
	styleUrls: ['./your-feed.page.scss'],
})
export class YourFeedPage {
	apiUrl: string = '/articles/feed'
}
