import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FeedModule } from '@shared/modules/feed/feed.module'
import { GlobalFeedRouting } from '@src/app/global-feed/global-feed.routing'
import { GlobalFeedPage } from '@src/app/global-feed/pages/global-feed.page'

@NgModule({
	imports: [CommonModule, GlobalFeedRouting, FeedModule],
	declarations: [GlobalFeedPage],
})
export class GlobalFeedModule {}
