import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '@auth/services/auth.service'
import { authReducers } from '@auth/store/reducers/reducers'
import { StoreModule } from '@ngrx/store'
import { AuthRouting } from '@src/app/auth/auth.routing'
import { RegisterPage } from '@src/app/auth/pages/register/register.component'
import { AuthInputComponent } from './components/auth-input/auth-input.component'
import { AuthRegisterFormComponent } from './components/auth-register-form/auth-register-form.component'

@NgModule({
	imports: [
		CommonModule,
		AuthRouting,
		ReactiveFormsModule,
		StoreModule.forFeature('auth', authReducers),
	],
	declarations: [RegisterPage, AuthInputComponent, AuthRegisterFormComponent],
	providers: [AuthService],
})
export class AuthModule {}
