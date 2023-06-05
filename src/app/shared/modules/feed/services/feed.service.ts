import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@environments/environment'
import { GetFeedResponseInterface } from '@shared/modules/feed/types/get-feed-response.interface'
import { Observable } from 'rxjs'

@Injectable()
export class FeedService {
	constructor(private readonly http: HttpClient) {}

	get(url: string): Observable<GetFeedResponseInterface> {
		const fullUrl = environment.API_URL + url

		return this.http.get<GetFeedResponseInterface>(fullUrl)
	}
}
