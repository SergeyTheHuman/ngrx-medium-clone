import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { isAnonymousSelector } from '@auth/store/selectors/is-anonymous.selector'
import { select, Store } from '@ngrx/store'
import { AppStateInterface } from '@shared/types/app-state.interface'
import { Observable } from 'rxjs'

@Component({
	selector: 'mc-anonymous-menu',
	templateUrl: './anonymous-menu.component.html',
	styleUrls: ['./anonymous-menu.component.scss'],
	standalone: true,
	imports: [RouterModule, CommonModule],
})
export class AnonymousMenuComponent {
	isAnonymous$!: Observable<boolean>

	constructor(private readonly store: Store<AppStateInterface>) {}

	ngOnInit(): void {
		this.initializeVariables()
	}

	initializeVariables(): void {
		this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
	}
}
