import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BannerComponent } from '@shared/components/banner/banner.component'
import { FeedTogglerComponent } from '@shared/components/feed-toggler/feed-toggler.component'
import { FeedModule } from '@shared/modules/feed/feed.module'
import { PopularTagsModule } from '@shared/modules/popular-tags/popular-tags.module'
import { TagFeedPage } from '@src/app/tag-feed/pages/tag-feed.page'
import { TagFeedRouting } from '@src/app/tag-feed/tag-feed.routing'

@NgModule({
	imports: [
		CommonModule,
		TagFeedRouting,
		FeedModule,
		BannerComponent,
		PopularTagsModule,
		FeedTogglerComponent,
	],
	declarations: [TagFeedPage],
})
export class TagFeedModule {}
