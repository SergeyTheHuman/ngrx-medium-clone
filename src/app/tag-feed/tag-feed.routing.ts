import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TagFeedPage } from '@src/app/tag-feed/pages/tag-feed.page'

const routes: Routes = [
	{
		path: 'tags/:slag',
		component: TagFeedPage,
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TagFeedRouting {}
