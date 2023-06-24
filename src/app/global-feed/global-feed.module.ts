import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BannerComponent } from '@shared/components/banner/banner.component'
import { FeedModule } from '@shared/modules/feed/feed.module'
import { PopularTagsModule } from '@shared/modules/popular-tags/popular-tags.module'
import { GlobalFeedRouting } from '@src/app/global-feed/global-feed.routing'
import { GlobalFeedPage } from '@src/app/global-feed/pages/global-feed.page'

@NgModule({
	imports: [
		CommonModule,
		GlobalFeedRouting,
		FeedModule,
		BannerComponent,
		PopularTagsModule,
	],
	declarations: [GlobalFeedPage],
})
export class GlobalFeedModule {}
