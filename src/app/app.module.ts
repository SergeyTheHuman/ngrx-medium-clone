import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { isDevMode, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AuthInterceptor } from '@shared/interceptors/auth.interceptor'
import { PersistanceService } from '@shared/services/persistance.service'
import { UtilsService } from '@shared/utils/utils.service'
import { AppComponent } from '@src/app/app.component'
import { AppRouting } from '@src/app/app.routing'
import { AuthModule } from '@src/app/auth/auth.module'
import { GlobalFeedModule } from '@src/app/global-feed/global-feed.module'
import { TagFeedModule } from '@src/app/tag-feed/tag-feed.module'
import { YourFeedModule } from '@src/app/your-feed/your-feed.module'
import { HeaderComponent } from './shared/components/header/header.component'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRouting,
		AuthModule,
		GlobalFeedModule,
		YourFeedModule,
		TagFeedModule,
		HeaderComponent,
		StoreModule.forRoot({ router: routerReducer }),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [
		UtilsService,
		PersistanceService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
