import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { AppComponent } from '@src/app/app.component'
import { AppRouting } from '@src/app/app.routing'
import { AuthModule } from '@src/app/auth/auth.module'

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRouting, AuthModule, StoreModule.forRoot({}, {})],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
