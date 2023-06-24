import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { PopularTagType } from '@shared/types/popular-tag.type'

@Component({
	selector: 'mc-tags-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './tags-list.component.html',
	styleUrls: ['./tags-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsListComponent {
	@Input({ alias: 'tags', required: true })
	tagsInput!: PopularTagType[]
}
