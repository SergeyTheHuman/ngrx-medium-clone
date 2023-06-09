import { Injectable } from '@angular/core'
import { UtilsService } from '@shared/utils/utils.service'

@Injectable()
export class PersistanceService {
	constructor(private readonly utilsService: UtilsService) {}

	set(key: string, data: any): void {
		try {
			window.localStorage.setItem(key, JSON.stringify(data))
		} catch (error) {
			console.error('Error while saving to local storage >>> ', error)
		}
	}

	get(key: string): any {
		try {
			const data = window.localStorage.getItem(key)

			return this.utilsService.isString(data) ? JSON.parse(data) : null
		} catch (error) {
			console.error('Error while getting data from local storage >>> ', error)
			return null
		}
	}
}
