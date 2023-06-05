import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ArticleInterface } from '@shared/types/article.interface'

@Component({
	selector: 'mc-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
	@Input('article')
	articleInput!: ArticleInterface
}
