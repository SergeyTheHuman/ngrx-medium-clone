import { CommonModule } from '@angular/common'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { RouterModule } from '@angular/router'
import { isLoggedInSelector } from '@auth/store/selectors/logged-in.selector'
import { userSelector } from '@auth/store/selectors/user.selector'
import { select, Store } from '@ngrx/store'
import { AppStateInterface } from '@shared/types/app-state.interface'
import { UserInterface } from '@shared/types/user.interface'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-logged-in-menu',
	templateUrl: './logged-in-menu.component.html',
	styleUrls: ['./logged-in-menu.component.scss'],
	standalone: true,
	imports: [RouterModule, CommonModule],
})
export class LoggedInMenuComponent implements OnInit {
	isLoggedIn$!: Observable<boolean | null>
	user$!: Observable<UserInterface | null>

	constructor(private readonly store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		this.initializeVariables()
	}

	initializeVariables(): void {
		this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
		this.user$ = this.store.pipe(select(userSelector))
	}
}
