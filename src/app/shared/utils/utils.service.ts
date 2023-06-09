import { Injectable } from '@angular/core'

@Injectable()
export class UtilsService {
	rangeArray(min: number, max: number) {
		const arr: number[] = []

		for (let i = min; i <= max; i++) arr.push(i)

		return arr
	}

	isString(data: any): data is string {
		return typeof data === 'string'
	}
}
