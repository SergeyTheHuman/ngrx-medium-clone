import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { YourFeedPage } from '@src/app/your-feed/pages/your-feed.page'

const routes: Routes = [
	{
		path: 'feed',
		component: YourFeedPage,
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class YourFeedRouting {}
