import { Component, OnInit } from '@angular/core'
import { getCurrentUserAction } from '@auth/store/actions/get-current-user.action'
import { Store } from '@ngrx/store'
import { AppStateInterface } from '@shared/types/app-state.interface'

@Component({
	selector: 'mc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'ngrx-medium'

	constructor(private readonly store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		this.store.dispatch(getCurrentUserAction())
	}
}
