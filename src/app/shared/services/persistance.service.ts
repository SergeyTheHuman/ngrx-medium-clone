import { Injectable } from '@angular/core'
import { isString } from '@shared/utils/is-string.type-guard'

@Injectable()
export class PersistanceService {
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

			return isString(data) ? JSON.parse(data) : null
		} catch (error) {
			console.error('Error while getting data from local storage >>> ', error)
			return null
		}
	}
}
