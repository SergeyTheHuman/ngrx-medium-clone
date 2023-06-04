import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { isAnonymousSelector } from '@auth/store/selectors/is-anonymous.selector'
import { isLoggedInSelector } from '@auth/store/selectors/logged-in.selector'
import { userSelector } from '@auth/store/selectors/user.selector'
import { select, Store } from '@ngrx/store'
import { AnonymousMenuComponent } from '@shared/components/anonymous-menu/anonymous-menu.component'
import { LoggedInMenuComponent } from '@shared/components/logged-in-menu/logged-in-menu.component'
import { AppStateInterface } from '@shared/types/app-state.interface'
import { UserInterface } from '@shared/types/user.interface'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		LoggedInMenuComponent,
		AnonymousMenuComponent,
	],
})
export class HeaderComponent implements OnInit {
	isLoggedIn$!: Observable<boolean | null>
	isAnonymous$!: Observable<boolean>
	user$!: Observable<UserInterface | null>

	constructor(private readonly store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		this.initializeVariables()
	}

	initializeVariables(): void {
		this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
		this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
		this.user$ = this.store.pipe(select(userSelector))
	}
}
