import { Component } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { map, Observable, tap } from 'rxjs'

@Component({
	selector: 'mc-tag-feed',
	templateUrl: './tag-feed.page.html',
	styleUrls: ['./tag-feed.page.scss'],
})
export class TagFeedPage {
	apiUrl!: string
	tagName!: string | null
	tagName$: Observable<string | null> = this.route.paramMap.pipe(
		takeUntilDestroyed(),
		map((params) => params.get('slag')),
		tap((slag) => (this.apiUrl = `/articles?tag=${slag}`)),
	)

	constructor(private readonly route: ActivatedRoute) {}
}
