import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthRouting } from '@src/app/auth/auth.routing'
import { RegisterPage } from '@src/app/auth/pages/register/register.component';
import { AuthInputComponent } from './components/auth-input/auth-input.component';
import { AuthRegisterFormComponent } from './components/auth-register-form/auth-register-form.component'

@NgModule({
	imports: [CommonModule, AuthRouting, ReactiveFormsModule],
	declarations: [RegisterPage, AuthInputComponent, AuthRegisterFormComponent],
})
export class AuthModule {}
