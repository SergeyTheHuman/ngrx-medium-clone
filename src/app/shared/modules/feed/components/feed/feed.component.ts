import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFeedAction } from '@shared/modules/feed/store/actions/get-feed.action'
import { errorFeedSelector } from '@shared/modules/feed/store/selectors/error.selector'
import { feedSelector } from '@shared/modules/feed/store/selectors/feed.selector'
import { isFeedLoadingSelector } from '@shared/modules/feed/store/selectors/is-feed-loading.selector'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'
import { GetFeedResponseInterface } from '@shared/modules/feed/types/get-feed-response.interface'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
	@Input('apiUrl')
	apiUrlInput!: string

	isLoading$!: Observable<boolean>
	error$!: Observable<string | null>
	feed$!: Observable<GetFeedResponseInterface | null>

	constructor(private readonly store: Store<FeedStateInterface>) {}

	ngOnInit(): void {
		this.initializeVariables()
		this.fetchData()
	}

	initializeVariables(): void {
		this.isLoading$ = this.store.pipe(select(isFeedLoadingSelector))
		this.error$ = this.store.pipe(select(errorFeedSelector))
		this.feed$ = this.store.pipe(select(feedSelector))
	}

	fetchData(): void {
		this.store.dispatch(getFeedAction({ url: this.apiUrlInput }))
	}
}
