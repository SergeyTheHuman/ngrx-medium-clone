import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GlobalFeedPage } from '@src/app/global-feed/pages/global-feed.page'

const routes: Routes = [
	{
		path: '',
		component: GlobalFeedPage,
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GlobalFeedRouting {}
