import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { environment } from '@environments/environment'
import { select, Store } from '@ngrx/store'
import { getFeedAction } from '@shared/modules/feed/store/actions/get-feed.action'
import { errorFeedSelector } from '@shared/modules/feed/store/selectors/feed-error.selector'
import { isFeedLoadingSelector } from '@shared/modules/feed/store/selectors/feed-is-loading.selector'
import { feedSelector } from '@shared/modules/feed/store/selectors/feed.selector'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'
import { GetFeedResponseInterface } from '@shared/modules/feed/types/get-feed-response.interface'
import queryString from 'query-string'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit, OnChanges {
	@Input('apiUrl')
	apiUrlInput!: string

	isLoading$!: Observable<boolean>
	error$!: Observable<string | null>
	feed$!: Observable<GetFeedResponseInterface | null>
	limit!: number
	baseUrl!: string
	currentPage!: number

	constructor(
		private readonly store: Store<FeedStateInterface>,
		private readonly router: Router,
		private readonly route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.initializeVariables()
		this.initializeListeners()
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.currentPage = 1
		this.fetchData()
	}

	initializeVariables(): void {
		this.isLoading$ = this.store.pipe(select(isFeedLoadingSelector))
		this.error$ = this.store.pipe(select(errorFeedSelector))
		this.feed$ = this.store.pipe(select(feedSelector))
		this.limit = environment.paginationLimit
		this.baseUrl = this.router.url.split('?')[0]
	}

	initializeListeners() {
		this.route.queryParams
			.pipe(takeUntilDestroyed())
			.subscribe((params: Params) => {
				this.currentPage = +params['page'] || 1
				this.fetchData()
			})
	}

	fetchData(): void {
		const offset = this.limit * this.currentPage - this.limit
		const parsedUrl = queryString.parseUrl(this.apiUrlInput)
		const apiUrlWithParams = queryString.stringifyUrl({
			url: parsedUrl.url,
			query: {
				limit: this.limit,
				offset,
				...parsedUrl.query,
			},
		})

		this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
	}
}
