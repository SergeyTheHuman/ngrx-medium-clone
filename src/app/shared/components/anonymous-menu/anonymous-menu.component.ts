import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'mc-anonymous-menu',
	templateUrl: './anonymous-menu.component.html',
	styleUrls: ['./anonymous-menu.component.scss'],
	standalone: true,
	imports: [RouterModule, CommonModule],
})
export class AnonymousMenuComponent {}
