import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BannerComponent } from '@shared/components/banner/banner.component'
import { FeedTogglerComponent } from '@shared/components/feed-toggler/feed-toggler.component'
import { FeedModule } from '@shared/modules/feed/feed.module'
import { PopularTagsModule } from '@shared/modules/popular-tags/popular-tags.module'
import { YourFeedPage } from '@src/app/your-feed/pages/your-feed.page'
import { YourFeedRouting } from '@src/app/your-feed/your-feed.routing'

@NgModule({
	imports: [
		CommonModule,
		YourFeedRouting,
		FeedModule,
		BannerComponent,
		PopularTagsModule,
		FeedTogglerComponent,
	],
	declarations: [YourFeedPage],
})
export class YourFeedModule {}
