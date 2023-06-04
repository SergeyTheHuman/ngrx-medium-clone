import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthResponseInterface } from '@auth/types/auth-response.interface'
import { LoginRequestInterface } from '@auth/types/login-request.interface'
import { RegisterRequestInterface } from '@auth/types/register-request.interface'
import { environment } from '@environments/environment'
import { UserInterface } from '@shared/types/user.interface'
import { map, Observable } from 'rxjs'

@Injectable()
export class AuthService {
	constructor(private readonly http: HttpClient) {}

	private getUser(response: AuthResponseInterface): UserInterface {
		return response.user
	}

	register(data: RegisterRequestInterface): Observable<UserInterface> {
		const url = `${environment.API_URL}/users`

		return this.http
			.post<AuthResponseInterface>(url, data)
			.pipe(map(this.getUser))
	}

	login(data: LoginRequestInterface): Observable<UserInterface> {
		const url = `${environment.API_URL}/users/login`

		return this.http
			.post<AuthResponseInterface>(url, data)
			.pipe(map(this.getUser))
	}
}
