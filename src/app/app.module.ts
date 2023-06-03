import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from '@src/app/app.component'
import { AppRouting } from '@src/app/app.routing'
import { AuthModule } from '@src/app/auth/auth.module'

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRouting, AuthModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
