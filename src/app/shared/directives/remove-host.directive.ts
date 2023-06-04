import { Directive, ElementRef } from '@angular/core'

@Directive({
	selector: '[remove-host]',
	standalone: true
})
export class RemoveHost {
	constructor(private readonly elementRef: ElementRef) {}

	ngOnInit() {
		const nativeElement: HTMLElement = this.elementRef.nativeElement
		const parentElement: HTMLElement | null = nativeElement.parentElement

		while (nativeElement.firstChild) {
			parentElement?.insertBefore(nativeElement.firstChild, nativeElement)
		}

		parentElement?.removeChild(nativeElement)
	}
}
