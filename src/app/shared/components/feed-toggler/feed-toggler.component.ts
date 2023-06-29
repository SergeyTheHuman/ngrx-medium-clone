import { CommonModule } from '@angular/common'
import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { isLoggedInSelector } from '@auth/store/selectors/logged-in.selector'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-feed-toggler',
	templateUrl: './feed-toggler.component.html',
	styleUrls: ['./feed-toggler.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, RouterModule],
	standalone: true,
})
export class FeedTogglerComponent implements OnInit {
	@Input('tagName')
	tagNameInput: string | null = null

	isLoggedIn$!: Observable<boolean | null>

	constructor(private readonly store: Store) {}

	ngOnInit(): void {
		this.initializeVariables()
	}

	initializeVariables() {
		this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
	}
}
