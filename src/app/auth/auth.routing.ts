import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterPage } from '@src/app/auth/pages/register/register.component'

const routes: Routes = [
	{
		path: 'register',
		component: RegisterPage,
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRouting {}
