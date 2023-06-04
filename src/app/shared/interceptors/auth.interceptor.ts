import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { PersistanceService } from '@shared/services/persistance.service'
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private readonly persistanceService: PersistanceService) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		const token = this.persistanceService.get('accessToken')

		const requestWithToken = request.clone({
			setHeaders: {
				Authorization: token ? `Token ${token}` : '',
			},
		})

		return next.handle(requestWithToken)
	}
}
