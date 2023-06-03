import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '@auth/services/auth.service'
import { RegisterEffect } from '@auth/store/effects/register.effect'
import { authReducers } from '@auth/store/reducers/reducers'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { BackendErrorMessagesComponent } from '@shared/components/backend-error-messages/backend-error-messages.component'
import { PersistanceService } from '@shared/services/persistance.service'
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
		EffectsModule.forFeature([RegisterEffect]),
		BackendErrorMessagesComponent,
	],
	declarations: [RegisterPage, AuthInputComponent, AuthRegisterFormComponent],
	providers: [AuthService, PersistanceService],
})
export class AuthModule {}
