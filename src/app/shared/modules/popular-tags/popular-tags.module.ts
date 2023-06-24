import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component'
import { LoaderComponent } from '@shared/components/loader/loader.component'
import { PopularTagsService } from '@shared/modules/popular-tags/services/popular-tags.service'
import { GetPopularTagsEffect } from '@shared/modules/popular-tags/store/effects/get-popular-tags.effect'
import { popularTagsReducers } from '@shared/modules/popular-tags/store/reducers/reducers'
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component'

@NgModule({
	declarations: [PopularTagsComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		StoreModule.forFeature('popularTags', popularTagsReducers),
		EffectsModule.forFeature([GetPopularTagsEffect]),
		ErrorMessageComponent,
		LoaderComponent,
	],
	providers: [PopularTagsService],
	exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
