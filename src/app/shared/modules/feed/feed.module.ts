import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { FeedComponent } from '@shared/modules/feed/components/feed/feed.component'
import { FeedService } from '@shared/modules/feed/services/feed.service'
import { GetFeedEffect } from '@shared/modules/feed/store/effects/get-feed.effect'
import { feedReducers } from '@shared/modules/feed/store/reducers/reducers'
import { ArticleMetaComponent } from './components/article-meta/article-meta.component'
import { ArticleComponent } from './components/article/article.component'

@NgModule({
	declarations: [FeedComponent, ArticleComponent, ArticleMetaComponent],
	imports: [
		CommonModule,
		RouterModule,
		StoreModule.forFeature('feed', feedReducers),
		EffectsModule.forFeature([GetFeedEffect]),
	],
	exports: [FeedComponent],
	providers: [FeedService],
})
export class FeedModule {}
