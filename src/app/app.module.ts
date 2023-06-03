import { HttpClientModule } from '@angular/common/http'
import { isDevMode, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppComponent } from '@src/app/app.component'
import { AppRouting } from '@src/app/app.routing'
import { AuthModule } from '@src/app/auth/auth.module'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRouting,
		AuthModule,
		StoreModule.forRoot({}, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
