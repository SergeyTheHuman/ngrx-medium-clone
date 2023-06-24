import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getPopularTagsAction } from '@shared/modules/popular-tags/store/actions/get-popular-tags.action'
import { errorPopularTagsSelector } from '@shared/modules/popular-tags/store/selectors/popular-tags-error.selector'
import { isLoadingPopularTagsSelector } from '@shared/modules/popular-tags/store/selectors/popular-tags-is-loading.selector'
import { popularTagsSelector } from '@shared/modules/popular-tags/store/selectors/popular-tags.selector'
import { PopularTagType } from '@shared/types/popular-tag.type'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-popular-tags',
	templateUrl: './popular-tags.component.html',
	styleUrls: ['./popular-tags.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularTagsComponent implements OnInit {
	popularTags$!: Observable<PopularTagType[] | null>
	isLoading$!: Observable<boolean>
	error$!: Observable<string | null>

	constructor(private readonly store: Store) {}

	ngOnInit(): void {
		this.initializeVariables()
		this.fetchData()
	}

	initializeVariables() {
		this.popularTags$ = this.store.pipe(select(popularTagsSelector))
		this.isLoading$ = this.store.pipe(select(isLoadingPopularTagsSelector))
		this.error$ = this.store.pipe(select(errorPopularTagsSelector))
	}

	fetchData() {
		this.store.dispatch(getPopularTagsAction())
	}
}
