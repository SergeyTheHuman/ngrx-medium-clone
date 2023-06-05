import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ArticleInterface } from '@shared/types/article.interface'

@Component({
	selector: 'mc-article-meta',
	templateUrl: './article-meta.component.html',
	styleUrls: ['./article-meta.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleMetaComponent {
	@Input('article')
	articleInput!: ArticleInterface
}
