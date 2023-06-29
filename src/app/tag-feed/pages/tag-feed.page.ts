import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, Observable, Subject, takeUntil, tap } from 'rxjs'

@Component({
	selector: 'mc-tag-feed',
	templateUrl: './tag-feed.page.html',
	styleUrls: ['./tag-feed.page.scss'],
})
export class TagFeedPage implements OnInit, OnDestroy {
	apiUrl!: string
	tagName!: string | null
	tagName$!: Observable<string | null>
	destroy$: Subject<string> = new Subject()

	constructor(private readonly route: ActivatedRoute) {}

	ngOnInit() {
		this.initializeVariables()
	}

	ngOnDestroy(): void {
		this.destroy$.next('')
		this.destroy$.complete()
	}

	initializeVariables() {
		this.tagName$ = this.route.paramMap.pipe(
			takeUntil(this.destroy$),
			map((params) => params.get('slag')),
			tap((slag) => (this.apiUrl = `/articles?tag=${slag}`)),
		)

		console.log(this.apiUrl)
	}
}
