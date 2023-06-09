import { CommonModule } from '@angular/common'
import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { UtilsService } from '@shared/utils/utils.service'

@Component({
	selector: 'mc-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
	providers: [UtilsService],
	imports: [CommonModule, RouterModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class PaginationComponent implements OnInit {
	@Input('total')
	totalInput!: number

	@Input('limit')
	limitInput!: number

	@Input('currentPage')
	currentPageInput!: number

	@Input('url')
	urlInput!: string

	pagesCount!: number
	pages!: number[]

	constructor(private readonly utilsService: UtilsService) {}

	ngOnInit(): void {
		this.initializeVariables()
	}

	initializeVariables(): void {
		this.pagesCount = Math.ceil(this.totalInput / this.limitInput)
		this.pages = this.utilsService.rangeArray(1, this.pagesCount)
	}
}
