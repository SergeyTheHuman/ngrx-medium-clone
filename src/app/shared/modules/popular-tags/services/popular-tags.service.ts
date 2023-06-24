import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@environments/environment'
import { GetPopularTagsResponseInterface } from '@shared/modules/popular-tags/types/get-popular-tags-response.interface'
import { PopularTagType } from '@shared/types/popular-tag.type'
import { map, Observable } from 'rxjs'

@Injectable()
export class PopularTagsService {
	constructor(private readonly http: HttpClient) {}

	get(): Observable<PopularTagType[]> {
		const url = environment.API_URL + '/tags'

		return this.http
			.get<GetPopularTagsResponseInterface>(url)
			.pipe(map((response: GetPopularTagsResponseInterface) => response.tags))
	}
}
